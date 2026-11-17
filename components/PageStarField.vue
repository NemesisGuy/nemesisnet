<template>
  <canvas ref="cv" class="page-starfield" aria-hidden="true"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cv = ref(null)
let ctx = null
let raf = 0
let stars = []
let W = 0
let H = 0
let dpr = 1
let color = '#22d3ee'
let reduced = false
let running = false
let last = 0
let resizeHandler = null
let visibilityHandler = null
let themeObserver = null

function maxStars() {
  return window.innerWidth < 640 ? 60 : 150
}

function readColor() {
  try {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--hero-node').trim()
    if (v) color = v
  } catch {}
}

function applyTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light'
  readColor()
  if (cv.value) cv.value.style.opacity = isLight ? '0.1' : '0.3'
  if (reduced) drawStatic()
}

function resize() {
  if (!cv.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  W = window.innerWidth
  H = window.innerHeight
  cv.value.width = Math.round(W * dpr)
  cv.value.height = Math.round(H * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  // Rebuild field if the budget changed
  if (stars.length !== maxStars()) build()
}

function build() {
  stars = []
  const n = maxStars()
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.4 + Math.random() * 1.1,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6
    })
  }
}

function wrap(s) {
  if (s.x < -4) s.x = W + 4
  if (s.x > W + 4) s.x = -4
  if (s.y < -4) s.y = H + 4
  if (s.y > H + 4) s.y = -4
}

function step(t) {
  raf = requestAnimationFrame(step)
  const dt = Math.min(0.05, (t - last) / 1000)
  last = t
  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = color
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i]
    s.x += s.vx * dt
    s.y += s.vy * dt
    wrap(s)
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fill()
  }
}

// Static single draw for prefers-reduced-motion: same field, no drift.
function drawStatic() {
  if (!ctx) return
  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = color
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i]
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fill()
  }
}

function start() {
  if (running || !ctx) return
  running = true
  last = performance.now()
  raf = requestAnimationFrame(step)
}

function stop() {
  running = false
  if (raf) {
    cancelAnimationFrame(raf)
    raf = 0
  }
}

onMounted(() => {
  if (!cv.value) return
  ctx = cv.value.getContext('2d')
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resize()
  applyTheme()

  resizeHandler = () => resize()
  window.addEventListener('resize', resizeHandler)

  visibilityHandler = () => {
    if (document.hidden) stop()
    else if (!reduced) start()
  }
  document.addEventListener('visibilitychange', visibilityHandler)

  themeObserver = new MutationObserver(applyTheme)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  if (reduced) drawStatic()
  else start()
})

onBeforeUnmount(() => {
  stop()
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  if (visibilityHandler) document.removeEventListener('visibilitychange', visibilityHandler)
  if (themeObserver) themeObserver.disconnect()
})
</script>

<style scoped>
/* One fixed canvas behind the entire page — persists across routes. */
.page-starfield {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.3;
}
</style>
