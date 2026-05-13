<template>
  <div class="detail-page">
    <PageHeader title="Self-Hosted AI Infrastructure" subtitle="Production-grade AI that runs on your own hardware — no API key dependency, no vendor lock-in, full data privacy." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Problem</h2>
        <p>Cloud AI APIs are convenient at the prototype stage but become a liability in production. Latency spikes, API cost inflation, data privacy concerns, and the inability to customize model behavior for specific domains all compound into systems that are harder to maintain and harder to trust. When AI is a core part of your product, depending on a third-party API is a structural risk.</p>

        <h2>The Solution</h2>
        <p>NemesisNet engineers self-hosted AI infrastructure — systems that run on cloud VPS instances, on-premise servers, or hybrid configurations. The architecture is portable: models can be swapped, hardware can scale independently of vendor pricing, and the entire stack can be replicated across environments without licensing constraints. Not locked into vendor APIs. Architecture is portable.</p>

        <h2>Infrastructure Architecture</h2>
        <p>Self-hosted AI stacks are built around GGUF model files — quantized LLM and TTS models that run efficiently on CPU or GPU hardware without the overhead of full-precision serving. Infrastructure is Dockerized end-to-end: model serving, API layer, authentication, and monitoring all run in containers with defined resource boundaries. Redis handles caching and job queuing. The result is a system that delivers consistent latency, predictable cost, and full data sovereignty.</p>

        <h2>Cloud, VPS, and Hybrid Deployments</h2>
        <p>Different workloads suit different infrastructure profiles. NemesisNet designs and deploys self-hosted AI across all three models:</p>
        <ul class="service-list" style="margin: 16px 0 24px 20px; color: var(--text-muted); line-height: 1.8;">
          <li><strong>Cloud VPS</strong> — GPU-accelerated instances on Hetzner, AWS, or DigitalOcean for scalable, pay-as-you-go inference.</li>
          <li><strong>On-Premise</strong> — Dedicated hardware for maximum data privacy, zero network latency, and unlimited inference at fixed cost.</li>
          <li><strong>Hybrid</strong> — Local inference for sensitive workloads, cloud fallback for peak load. Best of both worlds.</li>
        </ul>

        <h2>GPU Infrastructure</h2>
        <p>For TTS and LLM inference workloads, GPU acceleration significantly reduces generation time. NemesisNet configures CUDA environments, optimizes VRAM usage through quantization, and implements batch processing for throughput optimization. The infrastructure handles model loading, memory management, and hardware failover — keeping the system stable under variable load.</p>

        <h2>Vector Databases & Semantic Search</h2>
        <p>Production AI systems need more than raw model inference — they need retrieval-augmented generation pipelines. NemesisNet integrates vector databases (Qdrant, Chroma) for semantic search, document chunking strategies, and embedding pipelines that feed context into LLM inference. The result is AI that has access to your specific data, not just generic training knowledge.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">GGUF Models</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">CUDA</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">Qdrant</span>
          <span class="pill pill-tools">FastAPI</span>
          <span class="pill pill-tools">Python</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>Kokoro TTS Service</h4>
            <p>Self-hosted TTS web service running on dedicated infrastructure.</p>
            <NuxtLink to="/projects/kokoro-tts" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>VoxNemesis Supertonic</h4>
            <p>Local-first TTS browser extension with WebGPU acceleration.</p>
            <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>AI Development</h4>
            <p>Custom AI agents and MCP infrastructure for production.</p>
            <NuxtLink to="/services/ai-development" class="btn-glass">View Service</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Discuss Infrastructure</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Focus:</span> <strong>LLM, TTS, Vector DB Infrastructure</strong></li>
            <li><span>Stack:</span> <strong>Python, Docker, CUDA, Redis</strong></li>
            <li><span>Role:</span> <strong>Architecture & Deployment</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/ai-development" class="btn-glass">AI Development</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Self-Hosted AI Infrastructure | NemesisNet',
  meta: [
    { name: 'description', content: 'Self-hosted AI infrastructure: GGUF models, Docker, GPU deployment, vector databases. Cape Town, South Africa.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/self-hosted-ai' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Self-Hosted AI Infrastructure',
      'description': 'Production-grade AI infrastructure on cloud VPS, on-premise, or hybrid deployments — GGUF models, GPU acceleration, and vector databases.',
      'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
      'areaServed': { '@type': 'Country', 'name': 'South Africa' },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'AI Infrastructure Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Self-Hosted LLM Deployment' }, 'price': '220000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'GPU Infrastructure Setup' }, 'price': '220000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Vector Database Integration' }, 'price': '55000', 'priceCurrency': 'ZAR' }
        ]
      }
    })
  }]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p, .detail-main li { color: var(--text-muted); margin-bottom: 16px; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.related-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
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
.next-project { margin-top: 20px; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } .related-projects { grid-template-columns: 1fr; } }
</style>