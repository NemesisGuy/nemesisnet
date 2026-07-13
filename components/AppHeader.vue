<template>
  <nav id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-logo">
        <img :src="'/images/brand/Nemesis_Logo_Icon_nav.webp'" alt="NemesisNet Logo" width="48" height="48" loading="eager" decoding="async" fetchpriority="high">
        <span>NemesisNet</span>
      </NuxtLink>
      <button id="nav-toggle" class="nav-toggle" aria-label="Menu" aria-expanded="false" @click="toggleNav">
        <span class="glyph-icon" aria-hidden="true">☰</span>
      </button>
      <div class="nav-links">
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <a href="/#testimonials">Testimonials</a>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <a href="https://blog.nemesisnet.co.za/" target="_blank" rel="noopener noreferrer" title="Visit the NemesisNet Blog" aria-label="NemesisNet Blog">Blog</a>
        <button id="aurora-toggle" class="theme-toggle" aria-label="Toggle Aurora Mode" title="Aurora Mode" @click="toggleAuroraMode">
          <span class="glyph-icon" aria-hidden="true">✦</span>
        </button>
        <button id="nemesis-toggle" class="theme-toggle" aria-label="Toggle Nemesis Mode" title="Nemesis Mode" @click="toggleNemesisMode">
          <span class="glyph-icon" aria-hidden="true">⚙</span>
        </button>
        <button class="theme-toggle" aria-label="Toggle light and dark theme" title="Toggle light and dark theme" @click="toggleTheme">
          <span id="theme-icon" class="glyph-icon" aria-hidden="true">☀</span>
        </button>
      </div>
    </div>
  </nav>
  <ClientOnly>
    <div id="nav-overlay" aria-hidden="true" @click="closeNav"/>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const isMenuOpen = ref(false)
const currentTheme = ref('dark')
const isAurora = ref(false)
const isNemesis = ref(false)

onMounted(() => {
  try {
    const saved = localStorage.getItem('theme') || 'dark'
    currentTheme.value = saved
    applyTheme(saved)
    const aur = localStorage.getItem('aurora') || 'off'
    const nem = localStorage.getItem('nemesis') || 'off'
    if (aur === 'on') { isAurora.value = true; isNemesis.value = false }
    else if (nem === 'on') { isNemesis.value = true; isAurora.value = false }
    applyMode()
  } catch { /* localStorage unavailable */ }
})

function applyTheme(themeValue) {
  const themeIcon = document.getElementById('theme-icon')
  const root = document.documentElement
  const next = (themeValue === 'light') ? 'light' : 'dark'
  if (next === 'dark') {
    root.removeAttribute('data-theme')
    if (themeIcon) themeIcon.textContent = '☾'
  } else {
    root.setAttribute('data-theme', 'light')
    if (themeIcon) themeIcon.textContent = '☀'
  }
  currentTheme.value = next
  try { localStorage.setItem('theme', next) } catch { /* ignore */ }
}

function toggleTheme() {
  const next = currentTheme.value === 'dark' ? 'light' : 'dark'
  applyTheme(next)
}

function applyMode() {
  const root = document.documentElement
  const aurBtn = document.getElementById('aurora-toggle')
  const nemBtn = document.getElementById('nemesis-toggle')
  
  if (isAurora.value) {
    isNemesis.value = false
    root.setAttribute('data-aurora','on')
    root.removeAttribute('data-nemesis')
    if (aurBtn) { aurBtn.classList.add('active'); aurBtn.setAttribute('aria-pressed','true') }
    if (nemBtn) { nemBtn.classList.remove('active'); nemBtn.setAttribute('aria-pressed','false') }
    try { localStorage.setItem('aurora','on') } catch { /* ignore */ }
  } else if (isNemesis.value) {
    isAurora.value = false
    root.setAttribute('data-nemesis','on')
    root.removeAttribute('data-aurora')
    if (nemBtn) { nemBtn.classList.add('active'); nemBtn.setAttribute('aria-pressed','true') }
    if (aurBtn) { aurBtn.classList.remove('active'); aurBtn.setAttribute('aria-pressed','false') }
    try { localStorage.setItem('nemesis','on') } catch { /* ignore */ }
  } else {
    root.removeAttribute('data-aurora')
    root.removeAttribute('data-nemesis')
    if (aurBtn) { aurBtn.classList.remove('active'); aurBtn.setAttribute('aria-pressed','false') }
    if (nemBtn) { nemBtn.classList.remove('active'); nemBtn.setAttribute('aria-pressed','false') }
    try { localStorage.setItem('aurora','off'); localStorage.setItem('nemesis','off') } catch { /* ignore */ }
  }
}

function setNemesis(on) {
  if (on) { isNemesis.value = true; isAurora.value = false }
  else { isNemesis.value = false }
  applyMode()
}

function toggleNemesisMode() {
  setNemesis(!isNemesis.value)
}

function setAurora(on) {
  if (on) { isAurora.value = true; isNemesis.value = false }
  else { isAurora.value = false }
  applyMode()
}

function toggleAuroraMode() {
  setAurora(!isAurora.value)
}

function trapFocus(e) {
  if (!isMenuOpen.value) return
  if (e.key === 'Escape') { closeNav(); return }
  if (e.key !== 'Tab') return
  const nav = document.getElementById('navbar')
  if (!nav) return
  const focusable = Array.from(nav.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
  if (!focusable.length) return
  const idx = focusable.indexOf(document.activeElement)
  if (idx === -1) return
  if (e.shiftKey) {
    if (idx === 0) { e.preventDefault(); focusable[focusable.length - 1].focus() }
  } else {
    if (idx === focusable.length - 1) { e.preventDefault(); focusable[0].focus() }
  }
}

function openNav() {
  const nav = document.getElementById('navbar')
  const btn = document.getElementById('nav-toggle')
  if (!nav) return
  nav.classList.add('open')
  if (btn) btn.setAttribute('aria-expanded','true')
  isMenuOpen.value = true
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', trapFocus)
  const overlay = document.getElementById('nav-overlay')
  if (overlay) { overlay.style.display = 'block'; setTimeout(() => overlay.classList.add('visible'), 10) }
  nextTick(() => {
    const firstLink = nav.querySelector('.nav-links a')
    if (firstLink) firstLink.focus()
  })
}

function closeNav() {
  const nav = document.getElementById('navbar')
  const btn = document.getElementById('nav-toggle')
  if (!nav) return
  nav.classList.remove('open')
  if (btn) btn.setAttribute('aria-expanded','false')
  isMenuOpen.value = false
  document.body.style.overflow = ''
  document.removeEventListener('keydown', trapFocus)
  const overlay = document.getElementById('nav-overlay')
  if (overlay) { overlay.classList.remove('visible'); setTimeout(() => overlay.style.display = 'none', 220) }
  if (btn) btn.focus()
}

function toggleNav() {
  if (isMenuOpen.value) closeNav(); else openNav()
}
</script>
