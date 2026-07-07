<template>
  <div class="detail-page">
    <PageHeader title="Since" subtitle="Accountability tracker — make claims, set deadlines, verify outcomes." />

    <div class="detail-container">
      <div class="detail-main">
        <div ref="carouselRef" class="demo-carousel">
  <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
    <div v-for="(slide, i) in slides" :key="slide.src" class="carousel-slide">
      <img :src="slide.src" :alt="slide.alt" loading="lazy" @click="openLightbox(i)">
    </div>
  </div>
  <button class="carousel-btn carousel-btn--prev" aria-label="Previous slide" @click="prevSlide">&#8249;</button>
  <button class="carousel-btn carousel-btn--next" aria-label="Next slide" @click="nextSlide">&#8250;</button>
  <div class="carousel-dots">
    <button v-for="(_, i) in slides" :key="i" :class="['dot', { active: currentSlide === i }]" :aria-label="'Slide ' + (i + 1)" @click="currentSlide = i" />
  </div>
  <div class="carousel-mode-label">{{ isLight ? '☀ Light mode' : '☾ Dark mode' }} screenshots — toggle theme above to see both modes</div>
</div>
        
        <h2>The Challenge</h2>
        <p>Claims, predictions, and deadlines are easy to make but hard to track. Without a system to record and verify outcomes over time, accountability fades. People forget what was said, when it was said, and whether it actually came true.</p>
        
        <h2>The Solution</h2>
        <p>Since is a self-hosted accountability engine that lets you register predictions, record past events, and set deadlines — then verify whether they came true. It tracks claims over time, attaches evidence, and gives you a clear record of what was said, when, and whether it held up.</p>
        
        <h2>Technical Implementation</h2>
        <p>The platform uses a React frontend with Tailwind CSS and Motion animations, served via Vite SSR with Express. PocketBase provides the backend database and authentication. The data model supports three core collections with a REST API layer handling data operations.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">JavaScript</span>
          <span class="pill pill-framework">React</span>
          <span class="pill pill-framework">Tailwind CSS</span>
          <span class="pill pill-framework">Express</span>
          <span class="pill pill-db">PocketBase</span>
          <span class="pill pill-tools">Vite SSR</span>
        </div>

        <h3>Architecture Highlights</h3>
        <ul class="arch-list">
          <li><strong>Frontend:</strong> React SPA with Vite SSR middleware</li>
          <li><strong>Styling:</strong> Tailwind CSS with Motion animations</li>
          <li><strong>Backend:</strong> Express server with REST API</li>
          <li><strong>Database:</strong> Self-hosted backend with relational store</li>
          <li><strong>Auth:</strong> Built-in authentication with token-based sessions</li>
          <li><strong>Data Model:</strong> Claims, evidence, and disputes with outcome tracking</li>
          <li><strong>Categories:</strong> Multiple claim types for different contexts</li>
          <li><strong>Outcomes:</strong> Flexible resolution states for claim verification</li>
        </ul>

        <h3>API</h3>
        <p>The REST API handles data operations for claims, evidence, and disputes. Users can create claims, attach evidence links, raise disputes, and resolve outcomes. All operations are authenticated via the backend.</p>
        
        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'TorqueBooks', description: 'Workshop management platform — same PocketBase + React stack with OAuth, RBAC, and PDF invoicing.', to: '/projects/torquebooks' },
            { title: 'VibeType', description: 'Rapid prototyping and code generation platform — React-based tooling with agentic workflows.', to: '/projects/vibetype' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/Since' },
            { label: 'Live Demo', href: 'https://since.nemesisnet.co.za' },
            { label: 'Building Since — Self-Hosted Claim Tracker with PocketBase, React & Express', href: 'https://blog.nemesisnet.co.za/building-since-self-hosted-claim-tracker-pocketbase-react-express/' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'React, Express, and PocketBase — production-built with auth, data modeling, REST APIs, and Docker deployment.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/torquebooks', label: 'TorqueBooks' }, next: { to: '/projects/vibetype', label: 'VibeType' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Stack:</span> <strong>React, Tailwind CSS, Express, PocketBase, Vite</strong></li>
            <li><span>Role:</span> <strong>Architect & Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
            <li><span>Deploy:</span> <strong>Docker Compose</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Components</h4>
          <ul class="sidebar-list">
            <li><span>Frontend:</span> <strong>React + Vite SSR</strong></li>
            <li><span>Server:</span> <strong>Express</strong></li>
            <li><span>Database:</span> <strong>PocketBase</strong></li>
            <li><span>Styling:</span> <strong>Tailwind CSS</strong></li>
            <li><span>Deploy:</span> <strong>Docker</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/Since" target="_blank" class="btn-glass">View Source</a>
            <a href="https://since.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click.self="lightboxOpen = false">
      <button class="lightbox-close" aria-label="Close" @click="lightboxOpen = false">&times;</button>
      <button class="lightbox-prev" aria-label="Previous" @click="lightboxPrev">&#8249;</button>
      <img :src="slides[lightboxIndex].src" :alt="slides[lightboxIndex].alt" class="lightbox-img">
      <button class="lightbox-next" aria-label="Next" @click="lightboxNext">&#8250;</button>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Since | Prediction & Accountability Tracker | NemesisNet',
  meta: [
    { name: 'description', content: 'Since is a self-hosted accountability tracker built with React, Express, and PocketBase. Register predictions, set deadlines, verify outcomes.' },
    { property: 'og:title', content: 'Since | Prediction & Accountability Tracker | NemesisNet' },
    { property: 'og:description', content: 'Self-hosted prediction registry and outcome verification engine with automated dispute and outcome tracking.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/since' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/since/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/since' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Since',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'SocialApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A self-hosted accountability tracker built with React, Express, and PocketBase.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Since', 'item': 'https://nemesisnet.co.za/projects/since' }
        ]
      })
    }
  ]
})

const currentSlide = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const isLight = ref(false)

const darkSlides = [
  { src: '/images/projects/since/screenshots/dark-home.webp', alt: 'Since — homepage with navigation sidebar' },
  { src: '/images/projects/since/screenshots/dark-trending.webp', alt: 'Since — trending claims feed' },
  { src: '/images/projects/since/screenshots/dark-login.webp', alt: 'Since — login page' },
  { src: '/images/projects/since/screenshots/dark-register.webp', alt: 'Since — registration page' },
]

const lightSlides = [
  { src: '/images/projects/since/screenshots/light-home.webp', alt: 'Since — homepage with navigation sidebar' },
  { src: '/images/projects/since/screenshots/light-trending.webp', alt: 'Since — trending claims feed' },
  { src: '/images/projects/since/screenshots/light-login.webp', alt: 'Since — login page' },
  { src: '/images/projects/since/screenshots/light-register.webp', alt: 'Since — registration page' },
]

const slides = computed(() => isLight.value ? lightSlides : darkSlides)

function nextSlide() { currentSlide.value = (currentSlide.value + 1) % slides.value.length }
function prevSlide() { currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length }
function openLightbox(i) { lightboxIndex.value = i; lightboxOpen.value = true }
function lightboxNext() { lightboxIndex.value = (lightboxIndex.value + 1) % slides.value.length }
function lightboxPrev() { lightboxIndex.value = (lightboxIndex.value - 1 + slides.value.length) % slides.value.length }

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  isLight.value = saved === 'light'

  const observer = new MutationObserver(() => {
    isLight.value = document.documentElement.getAttribute('data-theme') === 'light'
    currentSlide.value = 0
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  const autoplay = setInterval(nextSlide, 5000)
  onUnmounted(() => { clearInterval(autoplay); observer.disconnect() })
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main h3 { font-size: 1.4rem; margin: 30px 0 15px; text-align: left; color: var(--text-color); }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-main ul { margin: 15px 0 25px 20px; color: var(--text-muted); }
.detail-main li { margin-bottom: 8px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
.arch-list { list-style: none; padding: 0; margin: 15px 0 25px 0; }
.arch-list li { padding: 8px 0; border-bottom: 1px solid var(--glass-border); }
.arch-list li:last-child { border-bottom: none; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }

/* Carousel */
.demo-carousel { position: relative; margin: 30px 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--glass-border); background: var(--glass-bg); }
.carousel-track { display: flex; transition: transform 0.4s ease; }
.carousel-slide { min-width: 100%; }
.carousel-slide img { width: 100%; height: auto; display: block; cursor: zoom-in; }
.carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; width: 44px; height: 44px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); transition: background 0.2s; z-index: 2; }
.carousel-btn:hover { background: var(--accent-color); }
.carousel-btn--prev { left: 12px; }
.carousel-btn--next { right: 12px; }
.carousel-dots { display: flex; justify-content: center; gap: 8px; padding: 12px 0; }
.dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--glass-border); background: transparent; cursor: pointer; transition: all 0.3s; }
.dot.active { background: var(--accent-color); border-color: var(--accent-color); }
.carousel-mode-label { text-align: center; font-size: 0.75rem; color: var(--text-muted); padding: 4px 0 8px; opacity: 0.7; }

/* Lightbox */
.lightbox { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.9); z-index: 10001; display: flex; align-items: center; justify-content: center; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
.lightbox-img { max-width: 90vw; max-height: 90vh; border-radius: 12px; object-fit: contain; }
.lightbox-close { position: absolute; top: 20px; right: 24px; background: none; border: none; color: #fff; font-size: 2.5rem; cursor: pointer; z-index: 2; }
.lightbox-prev, .lightbox-next { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.15); color: #fff; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 2rem; cursor: pointer; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); transition: background 0.2s; }
.lightbox-prev:hover, .lightbox-next:hover { background: var(--accent-color); }
.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }
</style>
