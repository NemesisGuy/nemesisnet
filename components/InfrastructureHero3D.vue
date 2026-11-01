<template>
  <div ref="container" class="infrastructure-3d" aria-hidden="true" role="presentation"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  density: {
    type: String as () => 'auto' | 'low' | 'high',
    default: 'auto'
  },
  accent: {
    type: String as () => 'cyan' | 'blue',
    default: 'blue'
  }
})

const container = ref<HTMLElement | null>(null)
let renderer: any = null
let scene: any = null
let camera: any = null
let animationId: number | null = null
let nodes: any[] = []
let lines: any = null
let globeMesh: any = null
let isVisible = true
let prefersReducedMotion = false
let resizeObserver: ResizeObserver | null = null
let intersectionObserver: IntersectionObserver | null = null

const nodeCount = computed(() => {
  if (props.density !== 'auto') {
    return props.density === 'high' ? 28 : 12
  }
  if (typeof window === 'undefined') return 20
  const w = window.innerWidth
  if (w < 640) return 12
  if (w < 1024) return 20
  return 28
})

function getAccentColor() {
  try {
    const root = getComputedStyle(document.documentElement)
    const cssAccent = root.getPropertyValue('--accent-color').trim()
    if (cssAccent) return cssAccent
  } catch {}
  return props.accent === 'cyan' ? '#00ffff' : '#1E88E5'
}

onMounted(async () => {
  if (!container.value) return

  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Wait a tick for layout
  await new Promise(r => requestAnimationFrame(() => r(null)))

  // WebGL capability check
  try {
    const THREE = await import('three')
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      container.value.style.display = 'none'
      return
    }
    init(THREE)
  } catch (e) {
    console.warn('Three.js not available, skipping 3D hero', e)
    if (container.value) container.value.style.display = 'none'
  }
})

function init(THREE: any) {
  if (!container.value) return

  scene = new THREE.Scene()
  scene.position.set(0, 1.2, 0)
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
  camera.position.z = 18

  const pixelRatio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  // Mouse interaction
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
  const onPointerMove = (e: PointerEvent) => {
    const rect = container.value?.getBoundingClientRect()
    if (!rect) return
    mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }
  container.value.addEventListener('pointermove', onPointerMove)
  container.value.style.pointerEvents = 'auto'

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.3)
  scene.add(ambient)
  const point = new THREE.PointLight(0xffffff, 0.8, 200)
  point.position.set(10, 10, 10)
  scene.add(point)

  const accent = getAccentColor()
  const nodeGeom = new THREE.SphereGeometry(0.09, 10, 10)
  const nodeMat = new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.75 })

  const count = Math.min(nodeCount.value, 60)
  const positions: number[] = []
  const nodeInfos: { mesh: any; baseY: number; baseX: number; baseZ: number }[] = []

  // Rotating wire globe with constellations
  const globeRadius = 4.5
  // Wireframe globe
  const globeGeo = new THREE.IcosahedronGeometry(globeRadius, 3)
  const globeMat = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.12 })
  globeMesh = new THREE.Mesh(globeGeo, globeMat)
  scene.add(globeMesh)

  // Star constellations background
  const starCount = 220
  const starGeo = new THREE.BufferGeometry()
  const starPositions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) {
    const r = globeRadius * (1.6 + Math.random() * 0.8)
    const y = 1 - Math.random() * 2
    const rad = Math.sqrt(1 - y*y)
    const theta = Math.random() * Math.PI * 2
    starPositions[i*3] = Math.cos(theta) * rad * r
    starPositions[i*3+1] = y * r
    starPositions[i*3+2] = Math.sin(theta) * rad * r
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  const starMat = new THREE.PointsMaterial({ size: 0.07, color: accent, transparent: true, opacity: 0.85 })
  const stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)

  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(nodeGeom, nodeMat.clone())
    // Fibonaccisphere distribution for even spread
    const y = 1 - (i / (count - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = Math.PI * (3 - Math.sqrt(5)) * i
    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius
    const px = x * globeRadius
    const py = y * globeRadius
    const pz = z * globeRadius
    mesh.position.set(px, py, pz)
    scene.add(mesh)
    nodes.push(mesh)
    nodeInfos.push({ mesh, baseY: py, baseX: px, baseZ: pz })
    positions.push(px, py, pz)
  }

  // Lines
  const lineGeom = new THREE.BufferGeometry()
  lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  const lineMat = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.35 })
  lines = new THREE.LineSegments(
    new THREE.BufferGeometry(),
    lineMat
  )
  // Create sparse connections for a cleaner network
  const indices: number[] = []
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (Math.random() < 0.035) {
        indices.push(i, j)
      }
    }
  }
  const linePositions = new Float32Array(indices.length * 3)
  for (let i = 0; i < indices.length; i += 2) {
    const a = nodeInfos[indices[i]].mesh.position
    const b = nodeInfos[indices[i + 1]].mesh.position
    linePositions[i * 3] = a.x
    linePositions[i * 3 + 1] = a.y
    linePositions[i * 3 + 2] = a.z
    linePositions[i * 3 + 3] = b.x
    linePositions[i * 3 + 4] = b.y
    linePositions[i * 3 + 5] = b.z
  }
  lines.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
  scene.add(lines)

  // Resize handling
  const onResize = () => {
    if (!container.value || !renderer || !camera) return
    const w = container.value.clientWidth || window.innerWidth
    const h = container.value.clientHeight || window.innerHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  // Intersection observer for pause
  intersectionObserver = new IntersectionObserver((entries) => {
    isVisible = entries.some(e => e.isIntersecting)
    if (isVisible && !animationId) animate()
  }, { threshold: 0.1 })
  if (container.value) intersectionObserver.observe(container.value)

  // Visibility change
  const onVisibility = () => {
    if (document.hidden) cancel()
    else if (isVisible && !animationId) animate()
  }
  document.addEventListener('visibilitychange', onVisibility)

  // Animation loop
  let time = 0
  const animate = () => {
    if (!scene || !camera || !renderer) return
    animationId = requestAnimationFrame(animate)
    time += 0.01

    // Smooth mouse follow
    mouse.x += (mouse.targetX - mouse.x) * 0.05
    mouse.y += (mouse.targetY - mouse.y) * 0.05

    if (!prefersReducedMotion) {
      // Slow rotating globe with subtle mouse tilt
      if (globeMesh) {
        globeMesh.rotation.y = time * 0.05
        globeMesh.rotation.x = Math.sin(time * 0.1) * 0.05 + mouse.y * 0.1
      }
      scene.rotation.y += (mouse.x * 0.2 - scene.rotation.y) * 0.02
      scene.rotation.x += (mouse.y * 0.15 - scene.rotation.x) * 0.02

      nodes.forEach((mesh, i) => {
        const pulse = Math.sin(time * 2 + i) * 0.03
        mesh.scale.setScalar(1 + pulse)
      })
    }

    renderer.render(scene, camera)
  }

  // Start
  onResize()
  animate()

  // Cleanup refs
  ;(container.value as any).__cleanup = () => {
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    if (intersectionObserver && container.value) intersectionObserver.disconnect()
    cancel()
    // Dispose
    nodes.forEach(m => {
      m.geometry.dispose()
      m.material.dispose()
    })
    if (lines) {
      lines.geometry.dispose()
      lines.material.dispose()
    }
    renderer.dispose()
    if (renderer.domElement && container.value) {
      container.value.removeChild(renderer.domElement)
    }
  }
}

function cancel() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

onBeforeUnmount(() => {
  if (container.value && (container.value as any).__cleanup) {
    (container.value as any).__cleanup()
  }
  cancel()
})
</script>

<style scoped>
.infrastructure-3d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.7;
  z-index: 0;
  margin: 0;
  padding: 0;
}
.infrastructure-3d canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* Reduce opacity further on mobile */
@media (max-width: 768px) {
  .infrastructure-3d {
    opacity: 0.35;
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .infrastructure-3d {
    opacity: 0.25;
  }
}
</style>
