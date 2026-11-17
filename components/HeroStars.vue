<template>
  <div ref="container" class="hero-stars" aria-hidden="true" role="presentation" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; margin:0; padding:0;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const container = ref<HTMLElement | null>(null)
let renderer: any = null
let scene: any = null
let camera: any = null
let animationId: number | null = null
let starGeo: any = null
let starMat: any = null
let starPositions: Float32Array | null = null
let isVisible = true
let prefersReducedMotion = false
let resizeObserver: ResizeObserver | null = null
let themeObserver: MutationObserver | null = null

// Star budget scales with viewport area (density kept constant) with a hard
// cap of 400; floored so mobile stays cheap.
const starCount = computed(() => {
  if (typeof window === 'undefined') return 220
  const area = window.innerWidth * window.innerHeight
  const scaled = Math.round(220 * area / (1440 * 900))
  return Math.min(400, Math.max(56, scaled))
})

const maxPixelRatio = computed(() => {
  if (typeof window === 'undefined') return 1.5
  return window.innerWidth < 768 ? 1.5 : 2
})

function starColor() {
  try {
    const node = getComputedStyle(document.documentElement).getPropertyValue('--hero-node').trim()
    if (node) return node
  } catch {}
  return '#22d3ee'
}

function applyStarColor() {
  if (starMat) {
    starMat.color.set(starColor())
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    starMat.opacity = isLight ? 0.55 : 0.85
  }
}

// Spread star points across the full visible frustum width/height so the
// field reaches both edges of the hero, not just the centre. Visible world
// size at a depth `dist` in front of the camera:
//   height = 2 * tan(fov/2) * dist,  width = height * aspect
function respawnStars() {
  if (!starGeo || !starPositions || !camera || !container.value) return
  const w = container.value.clientWidth || window.innerWidth
  const h = container.value.clientHeight || window.innerHeight
  if (!w || !h) return
  const aspect = w / h
  const fovRad = (camera.fov * Math.PI) / 180
  const margin = 1.1 // ~10% overdraw beyond the frustum edges
  const total = starPositions.length / 3
  for (let i = 0; i < total; i++) {
    const z = -(1 + Math.random() * 12)
    const dist = camera.position.z - z
    const visH = 2 * Math.tan(fovRad / 2) * dist
    const visW = visH * aspect
    starPositions[i*3]   = (Math.random() - 0.5) * visW * margin
    starPositions[i*3+1] = (Math.random() - 0.5) * visH * margin
    starPositions[i*3+2] = z
  }
  ;(starGeo.attributes.position as any).needsUpdate = true
}

onMounted(async () => {
  if (!container.value) return
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  await new Promise(r => requestAnimationFrame(() => r(null)))
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
    console.warn('Three.js not available, skipping hero stars', e)
    if (container.value) container.value.style.display = 'none'
  }
})

function init(THREE: any) {
  if (!container.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
  camera.position.z = 18

  const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio.value)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  starGeo = new THREE.BufferGeometry()
  starPositions = new Float32Array(starCount.value * 3)
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  respawnStars()
  starMat = new THREE.PointsMaterial({ size: 0.07, color: starColor(), transparent: true, opacity: 0.85 })
  applyStarColor()
  scene.add(new THREE.Points(starGeo, starMat))

  const onResize = () => {
    if (!container.value || !renderer || !camera) return
    const w = container.value.clientWidth
    const h = container.value.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    respawnStars()
  }
  resizeObserver = new ResizeObserver(onResize)
  if (container.value) resizeObserver.observe(container.value)
  window.addEventListener('resize', onResize)

  // Live theme switching
  themeObserver = new MutationObserver(applyStarColor)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  // Intersection observer for pause
  const intersectionObserver = new IntersectionObserver((entries) => {
    isVisible = entries.some(e => e.isIntersecting)
    if (isVisible && !animationId) animate()
  }, { threshold: 0.05 })
  if (container.value) intersectionObserver.observe(container.value)

  const onVisibility = () => {
    if (document.hidden) cancel()
    else if (isVisible && !animationId) animate()
  }
  document.addEventListener('visibilitychange', onVisibility)

  let time = 0
  const animate = () => {
    if (!scene || !renderer) return
    animationId = requestAnimationFrame(animate)
    time += 0.01
    if (!prefersReducedMotion) {
      // Very slow horizontal drift only — the field stays full width.
      scene.position.x = Math.sin(time * 0.02) * 0.4
    }
    renderer.render(scene, camera)
  }

  onResize()
  animate()

  ;(container.value as any).__cleanup = () => {
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    if (resizeObserver) { resizeObserver.disconnect(); resizeObserver = null }
    if (themeObserver) { themeObserver.disconnect(); themeObserver = null }
    cancel()
    if (starGeo) starGeo.dispose()
    if (starMat) starMat.dispose()
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
.hero-stars {
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
.hero-stars canvas {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}
@media (max-width: 768px) {
  .hero-stars { opacity: 0.4; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-stars { opacity: 0.3; }
}
</style>
