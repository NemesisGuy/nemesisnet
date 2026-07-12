<template>
  <div class="detail-page">
    <PageHeader title="Kokoro TTS Service" subtitle="Self-hosted, high-fidelity AI text-to-speech infrastructure." />

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
  <div class="carousel-mode-label">App screenshots — light mode (Gradio default theme)</div>
</div>
        
        <h2>The Challenge</h2>
        <p>Most high-quality text-to-speech services are locked behind expensive monthly subscriptions and restrictive APIs, with significant latency and zero privacy. For production workloads, a local, low-latency, and high-fidelity alternative was needed.</p>
        
        <h2>The Solution</h2>
        <p>The Kokoro TTS Service is a full-stack implementation of the open-source Kokoro engine. A custom web interface and API layer allows users to generate natural-sounding speech synthesis instantly without relying on third-party cloud providers.</p>
        
        <h2>Technical Implementation</h2>
        <p>The system uses a Python-based backend to handle the model inference, wrapped in a high-performance API. The frontend is a modern, responsive web interface that allows for real-time audio preview and batch processing. The entire stack is containerized and runs on self-hosted infrastructure, delivering sub-second response times without cloud dependencies.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">Python</span>
          <span class="pill pill-framework">PyTorch</span>
          <span class="pill pill-framework">FastAPI</span>
          <span class="pill pill-tools">Kokoro TTS</span>
          <span class="pill pill-tools">Docker</span>
        </div>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'VoxNemesis Supertonic', description: 'Browser extension running the Kokoro model in-browser via ONNX Runtime Web and WebGPU — same engine, different delivery.', to: '/projects/voxnemesis-supertonic' },
            { title: 'PocketTTS-MCP', description: 'MCP server exposing local neural TTS to AI agents — another local-first approach to speech synthesis.', to: '/projects/pockettts-mcp' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/Kokoro_TTS_Service' },
            { label: 'Live Demo', href: 'https://kokoro-gui.nemesisnet.co.za' },
            { label: 'Read the Build Log', href: 'https://blog.nemesisnet.co.za/bringing-gpu-support-to-neutts-air-a-dev-diary/' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'Python, FastAPI, PyTorch, and Vue — production-built self-hosted AI infrastructure with REST APIs and containerized deployment.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/pockettts-mcp', label: 'PocketTTS-MCP' }, next: { to: '/projects/wordpress-mcp', label: 'WordPress MCP Server' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>4 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Python, PyTorch, FastAPI, Vue</strong></li>
            <li><span>Role:</span> <strong>Architect & Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://blog.nemesisnet.co.za/bringing-gpu-support-to-neutts-air-a-dev-diary/" target="_blank" class="btn-glass">Read Dev Diary</a>
            <a href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank" class="btn-glass">View Source</a>
            <a href="https://kokoro-gui.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
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
  title: 'Kokoro TTS Service | Self-Hosted AI Text-To-Speech | NemesisNet',
  meta: [
    { name: 'description', content: 'Self-hosted, high-fidelity AI text-to-speech API and web UI infrastructure built using Python, FastAPI, PyTorch, and Vue.' },
    { property: 'og:title', content: 'Kokoro TTS Service | Self-Hosted AI Text-To-Speech | NemesisNet' },
    { property: 'og:description', content: 'Low-latency, self-hosted, private and open-source neural text-to-speech web service and REST API built on the Kokoro model.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/kokoro-tts' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/kokoro-tts-service/optimized/hero.webp' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/projects/kokoro-tts-service/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/kokoro-tts' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Kokoro TTS Service',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'MultimediaApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A self-hosted, high-fidelity AI text-to-speech API and web user interface built with FastAPI, PyTorch, and Vue.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Kokoro TTS Service', 'item': 'https://nemesisnet.co.za/projects/kokoro-tts' }
        ]
      })
    }
  ]
})

const currentSlide = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const slides = [
  { src: '/images/projects/kokoro-tts-service/screenshots/light-home.webp', alt: 'Kokoro TTS — main interface' },
  { src: '/images/projects/kokoro-tts-service/screenshots/light-simple-synthesis.webp', alt: 'Kokoro TTS — Simple Synthesis tab' },
  { src: '/images/projects/kokoro-tts-service/screenshots/light-dialogue-scripting.webp', alt: 'Kokoro TTS — Dialogue & Scripting tab' },
  { src: '/images/projects/kokoro-tts-service/screenshots/light-voice-blender.webp', alt: 'Kokoro TTS — Voice Blender tab' },
  { src: '/images/projects/kokoro-tts-service/screenshots/light-benchmark.webp', alt: 'Kokoro TTS — Benchmark tab' },
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
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
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
