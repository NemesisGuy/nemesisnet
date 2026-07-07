<template>
  <div class="detail-page">
    <PageHeader title="NK Assessments" subtitle="High-speed deployment of a professional client-facing portal." />

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
        <p>The client needed a professional, secure, and highly available static portal to present their assessment services. The primary constraint was a critical timeline—the site needed to be live and fully functional in under 48 hours.</p>
        
        <h2>The Solution</h2>
        <p>I architected a lightweight, static portal using HTML5 and Bootstrap, ensuring maximum load speeds and perfect mobile responsiveness. By leveraging a Dockerized Nginx configuration, I was able to deploy the site to a production environment with zero downtime and instant global availability.</p>
        
        <h2>Technical Implementation</h2>
        <p>The focus was on stability and speed. I used a clean, semantic HTML structure and optimized assets to ensure a near-perfect Lighthouse score. The Docker deployment allowed for an immutable infrastructure approach, making updates and scaling effortless.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">HTML5</span>
          <span class="pill pill-framework">Bootstrap</span>
          <span class="pill pill-tools">Nginx</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">Lighthouse 100</span>
        </div>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'TorqueBooks', description: 'React + PocketBase platform deployed with Docker containerized infrastructure.', to: '/projects/torquebooks' },
            { title: 'Since', description: 'React + Express + PocketBase self-hosted app deployed with Docker Compose.', to: '/projects/since' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/NKAssessments' },
            { label: 'Live Demo', href: 'https://nkassessments.nemesisnet.co.za' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'HTML5, Bootstrap, Nginx, and Docker — production-deployed in under 48 hours with zero downtime.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/forkmyfolio', label: 'ForkMyFolio' }, next: { to: '/projects/torquebooks', label: 'TorqueBooks' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>48 Hours</strong></li>
            <li><span>Stack:</span> <strong>HTML5, Bootstrap, Nginx, Docker</strong></li>
            <li><span>Role:</span> <strong>Lead Engineer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/NKAssessments" target="_blank" class="btn-glass">View Source</a>
            <a href="https://nkassessments.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
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
  title: 'NK Assessments | High-Speed Client-Facing Portal | NemesisNet',
  meta: [
    { name: 'description', content: 'Professional, high-speed, secure client-facing portal deployed in under 48 hours with Dockerized Nginx infrastructure.' },
    { property: 'og:title', content: 'NK Assessments | High-Speed Client-Facing Portal | NemesisNet' },
    { property: 'og:description', content: 'Lightweight static portal designed for extreme performance and deployed using containerized Nginx with zero downtime.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/nk-assessments' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/nk-assessments/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/nk-assessments' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'NK Assessments',
        'url': 'https://nkassessments.nemesisnet.co.za',
        'description': 'A professional client-facing portal built with HTML5, Bootstrap, Nginx, and Docker.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'NK Assessments', 'item': 'https://nemesisnet.co.za/projects/nk-assessments' }
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
  { src: '/images/projects/nk-assessments/screenshots/dark-home.webp', alt: 'NK Assessments — homepage' },
]

const lightSlides = [
  { src: '/images/projects/nk-assessments/screenshots/light-home.webp', alt: 'NK Assessments — homepage' },
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
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
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
