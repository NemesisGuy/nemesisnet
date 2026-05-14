<template>
  <div class="detail-page">
    <PageHeader title="Self-Hosted AI Infrastructure" subtitle="Production-grade AI that runs on your own hardware — no API key dependency, no vendor lock-in, full data privacy." />

    <div class="detail-container">
      <div class="detail-main">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Self-Hosted AI</span>
        </nav>

        <h2>The Problem: When AI Doesn't Belong in Someone Else's Cloud</h2>
        <p>Cloud AI APIs are convenient at the prototype stage but become a liability in production. Latency spikes during peak hours, API cost inflation that outpaces revenue growth, data privacy concerns that block enterprise deals, and the inability to customize model behavior for specific domains — all compound into systems that are harder to maintain and harder to trust.</p>
        <p>When AI is a core part of your product, depending on a third-party API is a structural risk. Pricing changes without notice. Rate limits throttle your users. Your data flows through servers you don't control. And the moment you need fine-tuned behavior for a niche domain, generic APIs fall flat. For businesses operating in regulated industries or handling sensitive data, the cloud-only model is a non-starter.</p>

        <h2>The Solution: AI Infrastructure You Own</h2>
        <p>NemesisNet engineers self-hosted AI infrastructure — systems that run on cloud VPS instances, on-premise servers, or hybrid configurations. The architecture is portable: models can be swapped, hardware can scale independently of vendor pricing, and the entire stack can be replicated across environments without licensing constraints.</p>
        <p>Not locked into vendor APIs. Not dependent on someone else's uptime. Full sovereignty over your data, your models, and your inference pipeline. Whether you need a single TTS endpoint or a fleet of LLM workers serving thousands of requests per minute, we build infrastructure that's yours.</p>

        <h2>Infrastructure Architecture</h2>
        <p>Self-hosted AI stacks are built around GGUF model files — quantized LLM and TTS models that run efficiently on CPU or GPU hardware without the overhead of full-precision serving. Infrastructure is Dockerized end-to-end: model serving, API layer, authentication, and monitoring all run in containers with defined resource boundaries.</p>
        <p>Redis handles caching and job queuing. Prometheus and Grafana provide real-time observability. Every deployment is reproducible through infrastructure-as-code, meaning your staging environment matches production exactly. The result is a system that delivers consistent latency, predictable cost, and full data sovereignty.</p>

        <h2>Deployment Models: Cloud, On-Premise, and Hybrid</h2>
        <p>Different workloads suit different infrastructure profiles. NemesisNet designs and deploys self-hosted AI across all three models:</p>
        <ul class="service-list">
          <li><strong>Cloud VPS</strong> — GPU-accelerated instances on Hetzner, AWS, or DigitalOcean for scalable, pay-as-you-go inference. Ideal for teams that need elastic capacity without managing physical hardware.</li>
          <li><strong>On-Premise</strong> — Dedicated hardware for maximum data privacy, zero network latency, and unlimited inference at fixed cost. Perfect for regulated industries, defense, and organizations with strict data residency requirements.</li>
          <li><strong>Hybrid</strong> — Local inference for sensitive workloads, cloud fallback for peak load. Best of both worlds — keep PII on your hardware, burst to the cloud when demand spikes.</li>
        </ul>

        <h2>GPU Infrastructure &amp; Optimization</h2>
        <p>For TTS and LLM inference workloads, GPU acceleration significantly reduces generation time. NemesisNet configures CUDA environments, optimizes VRAM usage through quantization (GPTQ, AWQ, and GGUF formats), and implements batch processing for throughput optimization.</p>
        <p>The infrastructure handles model loading, memory management, and hardware failover — keeping the system stable under variable load. We've benchmarked inference on hardware ranging from consumer-grade GPUs to multi-GPU server configurations, always optimizing for cost-per-token.</p>

        <h2>Vector Databases &amp; Semantic Search</h2>
        <p>Production AI systems need more than raw model inference — they need retrieval-augmented generation (RAG) pipelines. NemesisNet integrates vector databases (Qdrant, Chroma, pgvector) for semantic search, document chunking strategies, and embedding pipelines that feed context into LLM inference.</p>
        <p>The result is AI that has access to your specific data — not just generic training knowledge. We've built RAG systems that search across thousands of internal documents, codebases, and knowledge bases with sub-second response times.</p>

        <h2>Who This Is For</h2>
        <p><strong>Product teams building AI-powered features</strong> that need reliable inference without per-request API costs. <strong>Enterprises in regulated industries</strong> (finance, healthcare, legal) where data cannot leave your infrastructure. <strong>SaaS companies</strong> who want to offer AI features without handing margins to API providers. <strong>Government and defense organizations</strong> requiring air-gapped or sovereign AI capability.</p>

        <h2>How We Deploy</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Requirements Analysis</h4>
            <p>We assess your workload: model size, request volume, latency requirements, data sensitivity, and budget constraints. This determines the deployment model — cloud, on-prem, or hybrid.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Hardware &amp; Cloud Selection</h4>
            <p>We select the right hardware profile for your needs — from single-GPU inference servers to multi-node clusters. Cloud deployments use Terraform for reproducible infrastructure provisioning.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Model Optimization</h4>
            <p>Models are quantized, benchmarked, and containerized. We optimize for your specific latency-throughput tradeoff, whether that's sub-100ms TTS or high-throughput batch inference.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Production Deployment</h4>
            <p>Docker containers deployed with orchestration (Docker Compose or Kubernetes). Monitoring, alerting, and auto-scaling configured. Full runbook and handoff documentation provided.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've deployed self-hosted AI infrastructure across South Africa, the EU, and the UK. Our strength is making complex infrastructure reliable and maintainable — not just deploying it, but ensuring your team can operate and evolve it. Cape Town-based with time zone overlap to European markets, we provide hands-on support across the full deployment lifecycle.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">GGUF Models</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">CUDA</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">Qdrant</span>
          <span class="pill pill-tools">Chroma</span>
          <span class="pill pill-tools">FastAPI</span>
          <span class="pill pill-tools">Python</span>
          <span class="pill pill-tools">Terraform</span>
          <span class="pill pill-tools">Prometheus</span>
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

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/ai-development" class="btn-glass">AI Development →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
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
            <li><span>Role:</span> <strong>Architecture &amp; Deployment</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
            <li><span>Delivery:</span> <strong>2–8 Weeks</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/ai-development" class="btn-glass">AI Development</NuxtLink>
            <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Self-Hosted AI Infrastructure | NemesisNet — GGUF, GPU, No Vendor Lock-in',
  meta: [
    { name: 'description', content: 'Self-hosted AI infrastructure in South Africa: GGUF models, Docker deployment, GPU setup, and vector databases. Real AI — not API wrappers. Cape Town.' },
    { property: 'og:title', content: 'Self-Hosted AI Infrastructure | NemesisNet' },
    { property: 'og:description', content: 'GGUF models, Docker, GPU deployment, and vector databases. No vendor lock-in. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dev.nemesisnet.co.za/services/self-hosted-ai' },
    { property: 'og:image', content: 'https://dev.nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/self-hosted-ai' }
  ],
  script: [
    {
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
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://dev.nemesisnet.co.za/services/self-hosted-ai'
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Self-Hosted AI Infrastructure', 'item': 'https://nemesisnet.co.za/services/self-hosted-ai' }
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
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
.service-list { margin: 16px 0 24px 20px; color: var(--text-muted); line-height: 1.8; }
.process-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h4 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.related-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
.related-services { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.next-project { margin-top: 20px; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2.5rem; }
  .detail-sidebar { position: static; }
  .related-projects { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
}
</style>