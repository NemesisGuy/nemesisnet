<template>
  <div class="detail-page">
    <PageHeader title="TorqueBooks" subtitle="Workshop management platform for South African auto shops." />

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
        <p>South African auto workshops still rely on paper job cards, sticky notes, and spreadsheets to manage customer jobs, track vehicles, and generate invoices. This leads to lost records, delayed billing, and poor customer follow-through. Existing workshop software is either expensive enterprise-tier or too generic for the local market with VAT, labour rates, and parts tracking needs.</p>
        
        <h2>The Solution</h2>
        <p>TorqueBooks is a purpose-built, all-in-one workshop management platform designed specifically for South African auto repair shops. It streamlines the entire workflow — from job card creation and mechanic assignment to invoicing, payment tracking, and customer CRM — all in one professional platform with real-time status updates and analytics.</p>
        
        <h2>Technical Implementation</h2>
        <p>The platform uses React with TypeScript on the frontend, backed by PocketBase (SQLite) for the API and database layer. The frontend communicates directly with PocketBase via raw <code>fetch</code> calls through a custom <code>db.ts</code> helper — no SDK dependency. Authentication is handled through OAuth2 SSO (IAM) with email/password fallback, and authorization is enforced via PocketBase Row-Level Security rules at the collection level.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">TypeScript</span>
          <span class="pill pill-framework">React</span>
          <span class="pill pill-framework">Tailwind CSS</span>
          <span class="pill pill-db">PocketBase</span>
          <span class="pill pill-db">SQLite</span>
          <span class="pill pill-tools">Vite</span>
          <span class="pill pill-tools">Zustand</span>
          <span class="pill pill-tools">Docker</span>
        </div>

        <h3>Architecture Highlights</h3>
        <ul class="arch-list">
          <li><strong>Frontend:</strong> React + TypeScript + Vite with Zustand state management</li>
          <li><strong>Backend:</strong> PocketBase (SQLite) — direct API via raw fetch, no SDK</li>
          <li><strong>Auth:</strong> OAuth2 SSO (IAM) + email/password fallback</li>
          <li><strong>Roles:</strong> Four-tier RBAC — superadmin, shop_owner, clerk, mechanic</li>
          <li><strong>Invoicing:</strong> Automated VAT (15%) with React PDF renderer</li>
          <li><strong>CRM:</strong> Full customer profiles with vehicle fleet management, service intervals, and job history</li>
          <li><strong>Styling:</strong> Tailwind CSS with dark-first theme and light toggle</li>
          <li><strong>Infra:</strong> nginx SPA server with runtime env injection via entrypoint.sh</li>
        </ul>

        <h3>Key Features</h3>
        <ul class="arch-list">
          <li><strong>Job Card Lifecycle:</strong> Pending → In Progress → Completed → Invoiced with dynamic parts tracking and labour costing</li>
          <li><strong>Invite System:</strong> Shareable 32-char token links for adding mechanics and clerks</li>
          <li><strong>WhatsApp Integration:</strong> One-click service reminders via wa.me links</li>
          <li><strong>Financials:</strong> Revenue dashboard with time-period filtering and payment tracking</li>
          <li><strong>Onboarding:</strong> New-user workshop creation flow with auto-redirect to dashboard</li>
          <li><strong>Runtime Config:</strong> VITE_PB_URL injected into window.__RUNTIME_CONFIG__ at container start</li>
        </ul>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'Since', description: 'Accountability tracker with React, Express, and PocketBase — same lightweight backend stack.', to: '/projects/since' },
            { title: 'OnTheGo Rentals', description: 'Rental management system with automated booking, invoicing, and fleet tracking.', to: '/projects/onthegorentals' }
          ]"
          :reading="[
            { label: 'Live Demo', href: 'https://torquebooks.nemesisnet.co.za' },
            { label: 'Read the Build Log', href: 'https://blog.nemesisnet.co.za/torquebooks-building-a-workshop-management-system-for-south-african-auto-shops/' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'React + TypeScript + PocketBase — production-built with OAuth SSO, PDF invoicing, role-based access, and fleet CRM.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/nk-assessments', label: 'NK Assessments' }, next: { to: '/projects/since', label: 'Since' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Stack:</span> <strong>React, PocketBase, SQLite</strong></li>
            <li><span>Role:</span> <strong>Architect & Developer</strong></li>
            <li><span>Status:</span> <strong>Live — Public Beta</strong></li>
            <li><span>Deploy:</span> <strong>Docker</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Components</h4>
          <ul class="sidebar-list">
            <li><span>Frontend:</span> <strong>React + TypeScript + Vite</strong></li>
            <li><span>Backend:</span> <strong>PocketBase (SQLite)</strong></li>
            <li><span>Auth:</span> <strong>OAuth2 SSO (IAM) + email/password</strong></li>
            <li><span>PDF:</span> <strong>React PDF renderer</strong></li>
            <li><span>State:</span> <strong>Zustand</strong></li>
            <li><span>Styling:</span> <strong>Tailwind CSS</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://torquebooks.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
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
  title: 'TorqueBooks | Workshop Management for Auto Shops | NemesisNet',
  meta: [
    { name: 'description', content: 'TorqueBooks is a workshop management system for South African auto shops — React, PocketBase, PDF invoicing, job cards, and CRM.' },
    { property: 'og:title', content: 'TorqueBooks | Workshop Management for Auto Shops | NemesisNet' },
    { property: 'og:description', content: 'React + PocketBase workshop management with job cards, vehicle CRM, PDF invoicing, and OAuth2 SSO.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/torquebooks' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/torquebooks/optimized/hero.webp' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/projects/torquebooks/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/torquebooks' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'TorqueBooks',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'BusinessApplication',
        'offers': {
          '@type': 'Offer',
          'price': '299',
          'priceCurrency': 'ZAR'
        },
        'description': 'A purpose-built workshop management platform for South African auto repair shops — job cards, invoicing, CRM, and analytics.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'TorqueBooks', 'item': 'https://nemesisnet.co.za/projects/torquebooks' }
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
  { src: '/images/projects/torquebooks/screenshots/dark-home.webp', alt: 'TorqueBooks — homepage' },
  { src: '/images/projects/torquebooks/screenshots/dark-login.webp', alt: 'TorqueBooks — login page' },
  { src: '/images/projects/torquebooks/screenshots/dark-dashboard.webp', alt: 'TorqueBooks — dashboard with sidebar navigation' },
  { src: '/images/projects/torquebooks/screenshots/dark-jobs.webp', alt: 'TorqueBooks — job cards management' },
  { src: '/images/projects/torquebooks/screenshots/dark-invoices.webp', alt: 'TorqueBooks — invoicing and payments' },
  { src: '/images/projects/torquebooks/screenshots/dark-customers.webp', alt: 'TorqueBooks — customer CRM' },
]

const lightSlides = [
  { src: '/images/projects/torquebooks/screenshots/light-home.webp', alt: 'TorqueBooks — homepage' },
  { src: '/images/projects/torquebooks/screenshots/light-login.webp', alt: 'TorqueBooks — login page' },
  { src: '/images/projects/torquebooks/screenshots/light-dashboard.webp', alt: 'TorqueBooks — dashboard with sidebar navigation' },
  { src: '/images/projects/torquebooks/screenshots/light-jobs.webp', alt: 'TorqueBooks — job cards management' },
  { src: '/images/projects/torquebooks/screenshots/light-invoices.webp', alt: 'TorqueBooks — invoicing and payments' },
  { src: '/images/projects/torquebooks/screenshots/light-customers.webp', alt: 'TorqueBooks — customer CRM' },
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
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
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
