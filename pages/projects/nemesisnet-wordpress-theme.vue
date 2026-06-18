<template>
  <div class="detail-page">
    <PageHeader title="NemesisNet WordPress Theme" subtitle="Brand systems as code — a glassmorphic WordPress theme built from the ground up." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/nemesisnet-wordpress-theme/optimized/hero.webp'" class="detail-image" alt="NemesisNet WordPress Theme" loading="lazy">

        <div class="demo-carousel" ref="carouselRef">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="carousel-slide" v-for="(slide, i) in slides" :key="i">
              <img :src="slide.src" :alt="slide.alt" loading="lazy" @click="openLightbox(i)">
            </div>
          </div>
          <button class="carousel-btn carousel-btn--prev" @click="prevSlide" aria-label="Previous slide">&#8249;</button>
          <button class="carousel-btn carousel-btn--next" @click="nextSlide" aria-label="Next slide">&#8250;</button>
          <div class="carousel-dots">
            <button v-for="(_, i) in slides" :key="i" :class="['dot', { active: currentSlide === i }]" @click="currentSlide = i" :aria-label="'Slide ' + (i + 1)" />
          </div>
        </div>

        <h2>The Challenge</h2>
        <p>WordPress themes are often bloated, hard to maintain, and disconnected from a brand's design system. Most off-the-shelf themes force you into their aesthetic rather than letting your brand identity shine through. There was a need for a clean, maintainable theme that treats brand tokens as first-class citizens.</p>

        <h2>The Solution</h2>
        <p>The NemesisNet WordPress Theme is a custom theme where every design decision flows from CSS custom properties — <code>--nemesis-blue</code>, <code>--aurora-base</code>, glassmorphic surfaces, and consistent spacing. It ships with a full component library (cards, pills, carousels, stat grids), a Customizer integration for non-technical editors, and Umami analytics for privacy-first tracking.</p>

        <h2>Brand Systems as Code</h2>
        <p>The theme's core philosophy is treating the brand guide as a living code layer. Color tokens, border radii, and blur values are defined once in CSS variables and cascade through every component. Switching from dark to light mode, or swapping an accent color, happens in one place — the entire theme adapts.</p>
        <p>This approach means the same design language powers the marketing site, the blog, and any future WordPress property — all without manually re-applying styles.</p>

        <h2>Technical Implementation</h2>
        <p>Built with PHP, CSS custom properties, and vanilla JavaScript. Version 2.0 added full WordPress Customizer support (accent colors, sidebar position, sticky header, glass blur intensity), Gutenberg editor styles that match the frontend, sidebar templates (left/right/none), reading time estimates, and a back-to-top button. The component library includes glassmorphic cards, gradient buttons, taxonomy pills, a carousel, stats grid, author bio, and custom comments — all documented in a live demo page template.</p>

        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/NemesisNet-WordPress-Theme" target="_blank" class="btn-glass">View Source</a>
          <a href="https://blog.nemesisnet.co.za/theme-demo/" target="_blank" class="btn-glass">Live Demo</a>
          <NuxtLink to="/projects/wordpress-mcp" class="btn-glass">WordPress MCP →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Version:</span> <strong>2.0.0</strong></li>
            <li><span>Stack:</span> <strong>PHP, CSS Custom Properties, JS</strong></li>
            <li><span>Role:</span> <strong>Designer & Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Key Features</h4>
          <ul class="sidebar-list features-list">
            <li>Dark/Light theme toggle</li>
            <li>Customizer support</li>
            <li>Gutenberg editor styles</li>
            <li>Glassmorphic component library</li>
            <li>Umami analytics integration</li>
            <li>Sidebar templates (L/R/none)</li>
            <li>Back-to-top & reading time</li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/NemesisNet-WordPress-Theme" target="_blank" class="btn-glass">View Source</a>
            <a href="https://blog.nemesisnet.co.za/theme-demo/" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click.self="lightboxOpen = false">
      <button class="lightbox-close" @click="lightboxOpen = false" aria-label="Close">&times;</button>
      <button class="lightbox-prev" @click="lightboxPrev" aria-label="Previous">&#8249;</button>
      <img :src="slides[lightboxIndex].src" :alt="slides[lightboxIndex].alt" class="lightbox-img">
      <button class="lightbox-next" @click="lightboxNext" aria-label="Next">&#8250;</button>
    </div>
  </div>
</template>

<script setup>
const currentSlide = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const slides = [
  { src: '/images/projects/nemesisnet-wordpress-theme/optimized/demo-hero.webp', alt: 'Theme Hero Section' },
  { src: '/images/projects/nemesisnet-wordpress-theme/optimized/demo-cards.webp', alt: 'Glassmorphic Cards' },
  { src: '/images/projects/nemesisnet-wordpress-theme/optimized/demo-components.webp', alt: 'Component Library' },
  { src: '/images/projects/nemesisnet-wordpress-theme/optimized/demo-features.webp', alt: 'Feature Blocks' },
  { src: '/images/projects/nemesisnet-wordpress-theme/optimized/demo-nav.webp', alt: 'Navigation & Footer' },
]

function nextSlide() { currentSlide.value = (currentSlide.value + 1) % slides.length }
function prevSlide() { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
function openLightbox(i) { lightboxIndex.value = i; lightboxOpen.value = true }
function lightboxNext() { lightboxIndex.value = (lightboxIndex.value + 1) % slides.length }
function lightboxPrev() { lightboxIndex.value = (lightboxIndex.value - 1 + slides.length) % slides.length }

onMounted(() => {
  const autoplay = setInterval(nextSlide, 5000)
  onUnmounted(() => clearInterval(autoplay))
})

useHead({
  title: 'NemesisNet WordPress Theme | Brand Systems as Code | NemesisNet',
  meta: [
    { name: 'description', content: 'A custom WordPress theme built on the NemesisNet brand — glassmorphic dark/light UI, CSS variable design tokens, component library, and Umami analytics.' },
    { property: 'og:title', content: 'NemesisNet WordPress Theme | Brand Systems as Code | NemesisNet' },
    { property: 'og:description', content: 'Custom WordPress theme with glassmorphic dark/light UI, CSS variable design tokens, Customizer support, and a reusable component library.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/nemesisnet-wordpress-theme' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/nemesisnet-wordpress-theme/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/nemesisnet-wordpress-theme' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'NemesisNet WordPress Theme',
        'operatingSystem': 'WordPress 6+',
        'applicationCategory': 'WebApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A custom WordPress theme built on the NemesisNet brand — glassmorphic dark/light UI, CSS variable design tokens, component library, and Umami analytics.',
        'author': {
          '@type': 'Person',
          'name': 'Peter Buckingham',
          'url': 'https://nemesisnet.co.za/about'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://nemesisnet.co.za/projects' },
          { '@type': 'ListItem', 'position': 3, 'name': 'NemesisNet WordPress Theme', 'item': 'https://nemesisnet.co.za/projects/nemesisnet-wordpress-theme' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; min-width: 0; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-main code { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 2px 8px; border-radius: 6px; font-size: 0.9em; color: var(--accent-color); }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.features-list { list-style: none; }
.features-list li { display: block; padding-left: 0; grid-template-columns: 1fr; }
.features-list li::before { content: '→ '; color: var(--accent-color); }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; flex-wrap: wrap; }

/* Carousel */
.demo-carousel { position: relative; margin: 30px 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--glass-border); background: var(--glass-bg); }
.carousel-track { display: flex; transition: transform 0.4s ease; }
.carousel-slide { min-width: 100%; }
.carousel-slide img { width: 100%; height: auto; display: block; cursor: zoom-in; }
.carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; width: 44px; height: 44px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; backdrop-filter: blur(8px); transition: background 0.2s; z-index: 2; }
.carousel-btn:hover { background: var(--accent-color); }
.carousel-btn--prev { left: 12px; }
.carousel-btn--next { right: 12px; }
.carousel-dots { display: flex; justify-content: center; gap: 8px; padding: 12px 0; }
.dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--glass-border); background: transparent; cursor: pointer; transition: all 0.3s; }
.dot.active { background: var(--accent-color); border-color: var(--accent-color); }

/* Lightbox */
.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 10001; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
.lightbox-img { max-width: 90vw; max-height: 90vh; border-radius: 12px; object-fit: contain; }
.lightbox-close { position: absolute; top: 20px; right: 24px; background: none; border: none; color: #fff; font-size: 2.5rem; cursor: pointer; z-index: 2; }
.lightbox-prev, .lightbox-next { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.15); color: #fff; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 2rem; cursor: pointer; backdrop-filter: blur(8px); transition: background 0.2s; }
.lightbox-prev:hover, .lightbox-next:hover { background: var(--accent-color); }
.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .detail-sidebar { position: static; }
  .cta-wrapper { flex-direction: column; }
  .cta-wrapper .btn-glass { width: 100%; text-align: center; }
}
</style>
