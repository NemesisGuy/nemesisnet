<template>
  <div ref="container" class="infrastructure-3d" aria-hidden="true" role="presentation" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; margin:0; padding:0;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import type * as THREE_NS from 'three'

type WithCleanup = HTMLElement & { __cleanup?: () => void }

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
let renderer: THREE_NS.WebGLRenderer | null = null
let scene: THREE_NS.Scene | null = null
let camera: THREE_NS.PerspectiveCamera | null = null
let animationId: number | null = null
const nodes: THREE_NS.Mesh[] = []
let lines: THREE_NS.LineSegments | null = null
let globeMesh: THREE_NS.Mesh | null = null
let globeMat: THREE_NS.MeshBasicMaterial | null = null
let lineMat: THREE_NS.LineBasicMaterial | null = null
let nodeMats: THREE_NS.MeshBasicMaterial[] = []
let themeObserver: MutationObserver | null = null
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
  if (w < 640) return 10
  if (w < 1024) return 20
  return 28
})

// Device pixel ratio ceiling: 1.5 on mobile, 2 on desktop.
const maxPixelRatio = computed(() => {
  if (typeof window === 'undefined') return 2
  return window.innerWidth < 768 ? 1.5 : 2
})

function getAccentColor() {
  try {
    const root = getComputedStyle(document.documentElement)
    const cssAccent = root.getPropertyValue('--accent-color').trim()
    if (cssAccent) return cssAccent
  } catch { /* CSS var lookup is best-effort */ }
  return props.accent === 'cyan' ? '#00ffff' : '#1E88E5'
}

// Hero visuals read --hero-line / --hero-node from CSS so dark and light
// themes can use different accents. Applied live on theme toggle.
function applyHeroColors() {
  try {
    const root = getComputedStyle(document.documentElement)
    const line = root.getPropertyValue('--hero-line').trim()
    const node = root.getPropertyValue('--hero-node').trim()
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    const lineColor = line || getAccentColor()
    const nodeColor = node || lineColor
    if (globeMat) {
      globeMat.color.set(lineColor)
      globeMat.opacity = isLight ? 0.6 : 0.12
    }
    if (lineMat) {
      lineMat.color.set(lineColor)
      lineMat.opacity = isLight ? 0.6 : 0.35
    }
    nodeMats.forEach(m => m.color.set(nodeColor))
  } catch { /* theme read is best-effort */ }
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

function init(THREE: typeof import('three')) {
  if (!container.value) return

  scene = new THREE.Scene()
  // Sphere is centred in the square hero-emblem: no scene offset so the
  // globe's centre coincides exactly with the shield's centre.
  scene.position.set(0, 0, 0)
  nodeMats = []
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
  // Globe radius 4.5 at z=11 → diameter ≈ 9 / (2·tan30°·11 = 12.7) ≈ 71% of
  // the emblem; with the shield at 55% of the emblem that is ≈1.3× the shield.
  camera.position.z = 11

  const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio.value)
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
  const nodeInfos: { mesh: THREE_NS.Mesh; baseY: number; baseX: number; baseZ: number }[] = []

  // Rotating wire globe with constellations
  const globeRadius = 4.5
  // Wireframe globe
  const globeGeo = new THREE.IcosahedronGeometry(globeRadius, 3)
  globeMat = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.12 })
  globeMesh = new THREE.Mesh(globeGeo, globeMat)
  scene.add(globeMesh)

  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(nodeGeom, nodeMat.clone())
    nodeMats.push(mesh.material)
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
  const lineMatLocal = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.35 })
  lineMat = lineMatLocal
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

  // Resize handling: the canvas lives in the square hero-emblem wrapper,
  // so size comes from the wrapper via ResizeObserver (container size is
  // what the renderer must match — not the window).
  const onResize = () => {
    if (!container.value || !renderer || !camera) return
    const w = container.value.clientWidth
    const h = container.value.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  resizeObserver = new ResizeObserver(onResize)
  if (container.value) resizeObserver.observe(container.value)

  // Live theme switching: re-read --hero-line / --hero-node when the
  // data-theme attribute flips, no page reload needed.
  applyHeroColors()
  themeObserver = new MutationObserver(applyHeroColors)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

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

  // Fade canvas in once Three.js is ready so it never pops/layout-shifts
  if (container.value) {
    container.value.classList.add('canvas-loaded')
  }

  // Cleanup refs
  ;(container.value as WithCleanup).__cleanup = () => {
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
    document.removeEventListener('visibilitychange', onVisibility)
    if (themeObserver) {
      themeObserver.disconnect()
      themeObserver = null
    }
    if (intersectionObserver && container.value) intersectionObserver.disconnect()
    cancel()
    // Dispose
    nodes.forEach(m => {
      m.geometry.dispose()
      m.material.dispose()
    })
    nodeMats = []
    if (lines) {
      lines.geometry.dispose()
      lines.material.dispose()
    }
    if (globeMat) globeMat.dispose()
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
  const el = container.value as WithCleanup | null
  if (el && el.__cleanup) el.__cleanup()
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
  contain: layout;
}
.infrastructure-3d canvas {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.infrastructure-3d.canvas-loaded canvas {
  opacity: 0.7;
}

/* Reduce opacity further on mobile */
@media (max-width: 768px) {
  .infrastructure-3d {
    opacity: 0.35;
  }
}

/* Mobile: fade the bottom of the sphere so it doesn't visually touch the title */
@media (max-width: 640px) {
  .infrastructure-3d {
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent);
    mask-image: linear-gradient(to bottom, black 85%, transparent);
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .infrastructure-3d {
    opacity: 0.25;
  }
}
</style>
