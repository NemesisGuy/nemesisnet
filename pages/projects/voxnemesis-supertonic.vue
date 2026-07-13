<template>
  <div class="detail-page">
    <PageHeader title="VoxNemesis Supertonic" subtitle="Local-first, GPU-aware TTS browser extension with 100% privacy." />

    <div class="detail-container">
      <div class="detail-main">
        <img
          src="/images/projects/voxnemesis-supertonic/optimized/hero.webp"
          srcset="/images/projects/voxnemesis-supertonic/optimized/hero-480.webp 480w, /images/projects/voxnemesis-supertonic/optimized/hero-640.webp 640w, /images/projects/voxnemesis-supertonic/optimized/hero.webp 800w"
          sizes="(max-width: 640px) 480px, (max-width: 900px) 640px, 800px"
          class="detail-image"
          alt="VoxNemesis Supertonic"
          loading="lazy"
          decoding="async"
        >
        
        <h2>The Challenge</h2>
        <p>High-quality text-to-speech usually requires cloud APIs, sending user data to third-party servers. Users needed a private, fast, and truly local alternative that runs entirely in the browser without compromising on audio quality or latency.</p>
        
        <h2>The Solution</h2>
        <p>VoxNemesis Supertonic is a Chrome Extension (Manifest V3) that runs the Kokoro TTS model directly in the browser using ONNX Runtime Web. It achieves sub-second synthesis times with WebGPU acceleration, while falling back gracefully to WASM for compatibility. No data ever leaves the user's machine.</p>
        
        <h2>Technical Implementation</h2>
        <p>The extension uses the Offscreen API to create a dedicated audio engine that persists even when the popup closes. It implements a watchdog pattern to handle race conditions between the popup and background worker during initial model download. The architecture includes intelligent backend switching — attempting WebGPU first, then gracefully degrading to WASM with SIMD for broader hardware compatibility.</p>

        <div class="tech-pills">
          <span class="pill pill-lang">JavaScript</span>
          <span class="pill pill-tools">ONNX Runtime Web</span>
          <span class="pill pill-tools">WebGPU</span>
          <span class="pill pill-tools">WASM</span>
          <span class="pill pill-tools">Chrome Extension Manifest V3</span>
        </div>

        <ServiceFooter
          exploring-label="Related Projects"
          exploring-button-label="View Project"
          :exploring="[
            { title: 'Kokoro TTS Service', description: 'Self-hosted, high-fidelity AI text-to-speech infrastructure with a custom web interface and REST API.', to: '/projects/kokoro-tts' },
            { title: 'PocketTTS-MCP', description: 'MCP server exposing local neural TTS to AI agents — same local-first, privacy-preserving philosophy.', to: '/projects/pockettts-mcp' }
          ]"
          :reading="[
            { label: 'View Source on GitHub', href: 'https://github.com/NemesisGuy/voxnemesis-supertonic-extension' },
            { label: 'Read the Build Log', href: 'https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/' }
          ]"
          :cta="{ heading: 'Want something like this built?', description: 'ONNX Runtime Web, WebGPU, and Manifest V3 — production-built browser extensions with local-first AI and graceful hardware fallbacks.', buttonLabel: 'Start a Project', to: '/contact', note: 'Scoping calls are free.' }"
          :navigation="{ prev: { to: '/projects/vibetype', label: 'Vibe-Type' }, next: { to: '/projects/pockettts-mcp', label: 'PocketTTS-MCP' } }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>v0.2.0 Released</strong></li>
            <li><span>Stack:</span> <strong>JavaScript, ONNX Runtime Web, WebGPU, WASM, Chrome Extension API</strong></li>
            <li><span>Role:</span> <strong>Architect & Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/voxnemesis-supertonic-extension" target="_blank" class="btn-glass">View Source</a>
            <a href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank" class="btn-glass">Read Build Log</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'VoxNemesis Supertonic | GPU-Aware Local-First TTS Browser Extension | NemesisNet',
  meta: [
    { name: 'description', content: 'VoxNemesis Supertonic is a GPU-aware local-first TTS Chrome Extension built using ONNX Runtime Web, WebGPU, WASM and Manifest V3.' },
    { property: 'og:title', content: 'VoxNemesis Supertonic | GPU-Aware Local-First TTS Browser Extension | NemesisNet' },
    { property: 'og:description', content: 'Run high-fidelity Kokoro neural speech synthesis 100% privately in the browser with WebGPU hardware acceleration.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/voxnemesis-supertonic' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/voxnemesis-supertonic/optimized/hero.webp' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/projects/voxnemesis-supertonic/optimized/hero.webp' },
    { name: 'twitter:title', content: 'VoxNemesis SuperTonic | In-Browser Neural Speech Synthesis | NemesisNet' },
    { name: 'twitter:description', content: 'Run high-fidelity Kokoro neural speech synthesis 100% privately in the browser with WebGPU hardware acceleration.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/voxnemesis-supertonic' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'VoxNemesis Supertonic',
        'operatingSystem': 'Chrome, Edge, Chromium Browsers',
        'applicationCategory': 'MultimediaApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A GPU-aware local-first TTS Chrome Extension built using ONNX Runtime Web, WebGPU, WASM and Manifest V3.',
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
          { '@type': 'ListItem', 'position': 3, 'name': 'VoxNemesis Supertonic', 'item': 'https://nemesisnet.co.za/projects/voxnemesis-supertonic' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; min-width: 0; overflow: hidden; }
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
</style>
