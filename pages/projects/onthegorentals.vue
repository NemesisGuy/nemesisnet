<template>
  <div class="detail-page">
    <PageHeader title="OntheGoRentals" subtitle="A full-stack car rental platform for seamless fleet management." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/onthegorentals/optimized/hero-v2.webp'" class="detail-image" alt="OntheGoRentals" loading="lazy">

        <h2>App Screenshots</h2>
        <div class="screenshot-carousel" @mouseenter="pauseAuto" @mouseleave="resumeAuto">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, i) in slides" :key="i" class="carousel-slide">
              <img :src="slide.src" :alt="slide.alt" loading="lazy">
              <span class="carousel-caption">{{ slide.caption }}</span>
            </div>
          </div>
          <button class="carousel-btn carousel-btn--prev" @click="prevSlide" aria-label="Previous screenshot">‹</button>
          <button class="carousel-btn carousel-btn--next" @click="nextSlide" aria-label="Next screenshot">›</button>
          <div class="carousel-dots">
            <button v-for="(_, i) in slides" :key="i" class="carousel-dot" :class="{ 'active': currentSlide === i }" @click="goToSlide(i)" :aria-label="'Screenshot ' + (i + 1)" />
          </div>
        </div>
        
        <h2>The Challenge</h2>
        <p>Managing a car rental fleet requires a complex intersection of user-facing booking flows and heavy-duty admin backends. The goal was to create a system that handles real-time availability, diverse user roles, and secure payment/auth flows without friction.</p>
        
        <h2>The Solution</h2>
        <p>OntheGoRentals provides a unified platform for both customers and administrators. Customers enjoy a smooth Vue.js booking experience, while administrators have a powerful dashboard to manage fleet status, user roles, and detailed analytics on rental trends.</p>
        
        <h2>Technical Implementation</h2>
        <p>The system is powered by a Java Spring Boot backend, utilizing a robust relational database for rental history and vehicle tracking. Security is handled via JWT authentication, ensuring a seamless but secure login experience. The frontend is a highly responsive Vue.js application optimized for mobile and desktop.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">Java</span>
          <span class="pill pill-lang">Vue 3</span>
          <span class="pill pill-framework">Spring Boot</span>
          <span class="pill pill-db">MySQL</span>
          <span class="pill pill-tools">JWT</span>
          <span class="pill pill-tools">Docker</span>
        </div>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'CodeCritical SaaS', description: 'Spring Boot + Vue 3 SaaS with multi-tenant isolation and async scan pipelines.', to: '/projects/codecritical-saas' },
            { title: 'ForkMyFolio', description: 'Vue 3 + Spring Boot CMS with Redis caching and PDF export.', to: '/projects/forkmyfolio' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/OnTheGoRentals' },
            { label: 'Live Demo', href: 'https://otgr.nemesisnet.co.za' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'Java, Spring Boot, Vue, and MySQL — production-built with JWT auth, real-time booking, and admin dashboards.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/codecritical-cli', label: 'CodeCritical CLI' }, next: { to: '/projects/forkmyfolio', label: 'ForkMyFolio' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>8 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Java, Spring Boot, Vue, MySQL</strong></li>
            <li><span>Role:</span> <strong>Full-Stack Lead</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" class="btn-glass">View Source</a>
            <a href="https://otgr.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentSlide = ref(0)
let autoTimer = null

const slides = [
  { src: '/images/projects/onthegorentals/screenshots/onthegorentals-home-v2.webp', alt: 'OnTheGoRentals homepage with car categories', caption: 'Homepage' },
  { src: '/images/projects/onthegorentals/screenshots/onthegorentals-fleet-v2.webp', alt: 'Fleet listing with search and filters', caption: 'Fleet Browser' },
  { src: '/images/projects/onthegorentals/screenshots/onthegorentals-car-detail-v2.webp', alt: 'Car detail page with booking form', caption: 'Car Detail & Booking' },
  { src: '/images/projects/onthegorentals/screenshots/onthegorentals-signup-v2.webp', alt: 'User registration page', caption: 'Signup' },
  { src: '/images/projects/onthegorentals/screenshots/onthegorentals-login-v2.webp', alt: 'User login page', caption: 'Login' }
]

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
const goToSlide = (i) => { currentSlide.value = i }
const startAuto = () => { autoTimer = setInterval(nextSlide, 5000) }
const pauseAuto = () => { clearInterval(autoTimer) }
const resumeAuto = () => { startAuto() }

onMounted(() => { startAuto() })
onUnmounted(() => { clearInterval(autoTimer) })

useHead({
  title: 'OntheGoRentals | Car Rental Fleet Management Platform | NemesisNet',
  meta: [
    { name: 'description', content: 'A full-stack car rental and fleet management platform built using Spring Boot, Java, Vue, and MySQL.' },
    { property: 'og:title', content: 'OntheGoRentals | Car Rental Fleet Management Platform | NemesisNet' },
    { property: 'og:description', content: 'Robust real-time vehicle booking, administrative dashboard management, secure JWT authentication, and MySQL tracking.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/onthegorentals' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/onthegorentals/optimized/hero-v2.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/onthegorentals' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'OntheGoRentals',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'BusinessApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A full-stack car rental and fleet management platform built using Spring Boot, Java, Vue, and MySQL.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'OntheGoRentals', 'item': 'https://nemesisnet.co.za/projects/onthegorentals' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }

.screenshot-carousel { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid var(--glass-border); margin: 16px 0 32px; background: var(--glass-bg); }
.carousel-track { display: flex; transition: transform 0.5s ease; }
.carousel-slide { min-width: 100%; position: relative; aspect-ratio: 16/10; overflow: hidden; }
.carousel-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
.carousel-caption { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.7); color: #fff; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; backdrop-filter: blur(4px); }
.carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.4rem; cursor: pointer; z-index: 2; transition: background 0.2s; backdrop-filter: blur(4px); }
.carousel-btn:hover { background: rgba(0,0,0,0.8); }
.carousel-btn--prev { left: 12px; }
.carousel-btn--next { right: 12px; }
.carousel-dots { display: flex; justify-content: center; gap: 8px; padding: 12px 0; }
.carousel-dot { width: 10px; height: 10px; border-radius: 50%; border: none; background: rgba(255,255,255,0.25); cursor: pointer; transition: background 0.2s, transform 0.2s; }
.carousel-dot.active { background: var(--accent-color); transform: scale(1.3); }
.carousel-dot:hover { background: rgba(255,255,255,0.5); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }
</style>
