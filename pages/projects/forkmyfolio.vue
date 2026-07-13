<template>
  <div class="detail-page">
    <PageHeader title="ForkMyFolio" subtitle="The ultimate production-ready personal portfolio management system." />

    <div class="detail-container">
      <div class="detail-main">
        <img
          src="/images/projects/forkmyfolio/optimized/hero.webp"
          srcset="/images/projects/forkmyfolio/optimized/hero-480.webp 480w, /images/projects/forkmyfolio/optimized/hero-640.webp 640w, /images/projects/forkmyfolio/optimized/hero.webp 800w"
          sizes="(max-width: 640px) 480px, (max-width: 900px) 640px, 800px"
          class="detail-image"
          alt="ForkMyFolio"
          loading="lazy"
          decoding="async"
        >

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
        <p>Most developers struggle to keep their portfolios up to date. Manually editing HTML for every new project is tedious, and existing "portfolio builders" are often too generic or lack the technical depth needed to showcase real engineering work.</p>
        
        <h2>The Solution</h2>
        <p>ForkMyFolio is a full-featured management system that treats a portfolio as a dynamic data set. It provides an admin interface for project tracking, skill management, and metadata control, allowing the user to update their entire professional presence in seconds.</p>
        
        <h2>Technical Implementation</h2>
        <p>Built on a Vue frontend backed by a Java Spring Boot API with MySQL persistence and Redis caching. The platform sustains high traffic with low latency on dedicated infrastructure — no cloud scaling required. Includes dynamic project tracking, skill management, PDF export, and a full backup and restore system.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">Java</span>
          <span class="pill pill-lang">Vue 3</span>
          <span class="pill pill-framework">Spring Boot</span>
          <span class="pill pill-db">MySQL</span>
          <span class="pill pill-db">Redis</span>
          <span class="pill pill-tools">Docker</span>
        </div>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'OntheGoRentals', description: 'Spring Boot + Vue full-stack platform with JWT auth and MySQL persistence.', to: '/projects/onthegorentals' },
            { title: 'CodeCritical SaaS', description: 'Spring Boot + Vue 3 SaaS with Redis caching and multi-tenant architecture.', to: '/projects/codecritical-saas' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/ForkMyFolio-frontend' },
            { label: 'Live Demo', href: 'https://forkmyfolio.nemesisnet.co.za' },
            { label: 'Read the Build Log', href: 'https://blog.nemesisnet.co.za/forkmyfolio-backend-designing-a-modern-multi-user-portfolio-platform-in-spring-boot/' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'Vue 3, Spring Boot, MySQL, and Redis — production-built with project tracking, PDF export, and backup/restore.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/onthegorentals', label: 'OntheGoRentals' }, next: { to: '/projects/nk-assessments', label: 'NK Assessments' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>6 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Vue 3, Spring Boot, Java, MySQL, Redis</strong></li>
            <li><span>Role:</span> <strong>Full-Stack Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" class="btn-glass">View Source</a>
            <a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
            <a href="https://blog.nemesisnet.co.za/forkmyfolio-backend-designing-a-modern-multi-user-portfolio-platform-in-spring-boot/" target="_blank" class="btn-glass">Deep Dive</a>
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
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-dashboard-v2.webp', alt: 'Admin dashboard with management cards', caption: 'Dashboard' },
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-portfolio-v2.webp', alt: 'Public portfolio view', caption: 'Public Portfolio' },
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-projects-v2.webp', alt: 'Projects management interface', caption: 'Projects Manager' },
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-profile.webp', alt: 'Profile editing page', caption: 'Profile Editor' },
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-skills-mgmt.webp', alt: 'Skills management interface', caption: 'Skills Manager' },
  { src: '/images/projects/forkmyfolio/screenshots/forkmyfolio-exports.webp', alt: 'PDF export and backup settings', caption: 'Exports & Backup' }
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
  title: 'ForkMyFolio | Dynamic Portfolio & CV CMS Platform | NemesisNet',
  meta: [
    { name: 'description', content: 'ForkMyFolio is a dynamic personal portfolio and resume content management system built with Spring Boot, Vue 3, MySQL, and Redis.' },
    { property: 'og:title', content: 'ForkMyFolio | Dynamic Portfolio & CV CMS Platform | NemesisNet' },
    { property: 'og:description', content: 'A complete developer portfolio content management system for tracking projects, skills, PDF generation, and automated database backups.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/forkmyfolio' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/forkmyfolio/optimized/hero.webp' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/projects/forkmyfolio/optimized/hero.webp' },
    { name: 'twitter:title', content: 'ForkMyFolio | Developer Portfolio CMS | NemesisNet' },
    { name: 'twitter:description', content: 'A complete developer portfolio content management system for tracking projects, skills, PDF generation, and automated database backups.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/forkmyfolio' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'ForkMyFolio',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'BusinessApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A dynamic personal portfolio and resume content management system built with Spring Boot, Vue 3, MySQL, and Redis.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'ForkMyFolio', 'item': 'https://nemesisnet.co.za/projects/forkmyfolio' }
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
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; }
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
</style>
