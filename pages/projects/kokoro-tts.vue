<template>
  <div class="detail-page">
    <PageHeader title="Kokoro TTS Service" subtitle="Self-hosted, high-fidelity AI text-to-speech infrastructure." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/kokoro-tts-service/optimized/hero.webp'" class="detail-image" alt="Kokoro TTS Service" loading="lazy">
        
        <h2>The Challenge</h2>
        <p>Most high-quality text-to-speech services are locked behind expensive monthly subscriptions and restrictive APIs, with significant latency and zero privacy. For production workloads, a local, low-latency, and high-fidelity alternative was needed.</p>
        
        <h2>The Solution</h2>
        <p>The Kokoro TTS Service is a full-stack implementation of the open-source Kokoro engine. I built a custom web interface and API layer that allows users to generate natural-sounding speech synthesis instantly without relying on third-party cloud providers.</p>
        
        <h2>Technical Implementation</h2>
        <p>The system uses a Python-based backend to handle the model inference, wrapped in a high-performance API. The frontend is a modern, responsive web interface that allows for real-time audio preview and batch processing. The entire stack is containerized and runs on self-hosted infrastructure, delivering sub-second response times without cloud dependencies.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank" class="btn-glass">View Source</a>
          <a href="https://kokoro-gui.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          <a href="https://blog.nemesisnet.co.za/bringing-gpu-support-to-neutts-air-a-dev-diary/" target="_blank" class="btn-glass">Read Dev Diary</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/wordpress-mcp" class="btn-glass">Next Project → WordPress MCP</NuxtLink>
        </div>
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
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/kokoro-tts-service/optimized/hero.webp' }
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
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
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
