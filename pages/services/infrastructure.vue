<template>
  <div class="detail-page">
    <PageHeader title="Infrastructure Engineering" subtitle="High-performance backends and production-ready AI runtimes — Docker, CI/CD, Redis, Nginx." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Infrastructure Engineering</span>
        </div>

        <h2>The Problem: Infrastructure Failures Are Business Failures</h2>
        <p>When your backend can't handle traffic spikes, your database becomes the bottleneck, or your deployment pipeline breaks at 2 AM — your users don't care about your feature roadmap. They just see downtime.</p>
        <p>Infrastructure problems compound silently. A slow query here, a missing cache there, a deployment that should have been automated but isn't. Each one individually seems manageable, but together they create a system that's fragile, expensive to maintain, and painful to scale. By the time most teams address infrastructure, they're already firefighting.</p>
        <p>For AI and data-intensive applications, infrastructure challenges multiply. Model serving has different resource profiles than web APIs. TTS pipelines need low-latency GPU access. Vector databases require careful memory management. A one-size-fits-all infrastructure approach doesn't work when you're running fundamentally different workloads on the same cluster.</p>

        <h2>The Solution: Reliable, Observable, Scalable Infrastructure</h2>
        <p>NemesisNet builds infrastructure that's invisible when it works — and that's exactly how it should be. We design Docker-based ecosystems with clear service boundaries, implement caching and queue patterns that absorb traffic spikes, and set up monitoring so you see problems before your users do.</p>
        <p>Every deployment is reproducible through infrastructure-as-code. Every service has health checks and graceful degradation. Every pipeline is automated from commit to production.</p>

        <h2>Backend Performance &amp; Caching</h2>
        <p>Implementing Redis caching and queue patterns to handle massive traffic spikes without breaking a sweat. We architect multi-layer caching strategies — in-memory caches for hot data, distributed caches for shared state, and persistent queues for async processing.</p>
        <p>Our approach includes connection pooling, read replicas, query optimisation, and circuit breaker patterns. Whether you're serving 100 requests per second or 10,000, we design systems that maintain consistent response times under load.</p>

        <h2>Dockerised Ecosystems</h2>
        <p>Creating immutable infrastructure with Docker and Docker Compose, ensuring your app runs exactly the same on your laptop as it does in production. Every service, every dependency, every configuration file is version-controlled and reproducible.</p>
        <p>Containerised deployments eliminate "it works on my machine" problems and enable zero-downtime rolling updates. Multi-stage builds keep production images lean. Docker Compose orchestration simplifies local development while mirroring production topology.</p>

        <h2>Nginx Edge Control</h2>
        <p>Professional reverse proxy setups for SSL termination, load balancing, and optimised content delivery. We configure Nginx as an application-level gateway with rate limiting, request buffering, gzip compression, and intelligent routing.</p>
        <p>Static assets are served directly from Nginx, bypassing application servers entirely. Combined with CDN configuration, this delivers sub-100ms response times for static content globally.</p>

        <h2>AI Runtime Deployment</h2>
        <p>Deploying local AI models and TTS pipelines for privacy and speed, bypassing expensive cloud dependencies. We've built production AI serving infrastructure using vLLM, Ollama, and custom Python servers — with GPU memory management, request batching, and model hot-swapping.</p>
        <p>Our infrastructure handles the complexity of running AI workloads alongside traditional web services: GPU scheduling, model versioning, inference caching, and graceful fallback to CPU when GPUs are under heavy load.</p>

        <h2>Who This Is For</h2>
        <p><strong>Engineering teams that need production infrastructure</strong> without hiring a dedicated DevOps team. <strong>AI companies</strong> running model serving alongside web applications. <strong>Scaling startups</strong> that have outgrown their initial infrastructure. <strong>Teams migrating to microservices</strong> or containerised architectures.</p>

        <h2>How We Deploy</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Architecture Assessment</h4>
            <p>We review your current infrastructure, identify bottlenecks, and define the target architecture — including service boundaries, data flow, and scaling strategy.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Infrastructure as Code</h4>
            <p>Every component is defined in Docker Compose files and provisioning scripts. Environments are reproducible — development, staging, and production are structurally identical.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>CI/CD Pipeline</h4>
            <p>Automated build, test, and deployment pipelines. Every commit triggers tests; every merge triggers deployment. Rollback is a single command.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Monitoring &amp; Observability</h4>
            <p>Prometheus metrics, Grafana dashboards, and alerting rules configured for your specific SLAs. We set up error tracking, uptime monitoring, and performance baselines.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>Infrastructure is where we started, and it's what we keep coming back to. We've deployed production systems across bare metal, cloud VMs, and container orchestration platforms. We understand the full stack from hardware to HTTP — and we build infrastructure that your developers actually want to work with. Cape Town-based with remote-first workflows that span multiple time zones.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">Nginx</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">CI/CD</span>
          <span class="pill pill-tools">Prometheus</span>
          <span class="pill pill-tools">Grafana</span>
          <span class="pill pill-tools">Terraform</span>
          <span class="pill pill-tools">Python</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>Kokoro TTS — AI Runtime</h4>
            <p>Self-hosted TTS web service running on dedicated infrastructure.</p>
            <NuxtLink to="/projects/kokoro-tts" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>VoxNemesis Supertonic — WebGPU TTS</h4>
            <p>Local-first TTS browser extension with WebGPU acceleration.</p>
            <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>PocketTTS-MCP — MCP Server</h4>
            <p>MCP bridge for AI agents to manage content pipelines.</p>
            <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/ai-development" class="btn-glass">AI Development →</NuxtLink>
          <NuxtLink to="/services/custom-software" class="btn-glass">Custom Software →</NuxtLink>
          <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Self-Hosted AI →</NuxtLink>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Secure Your Infra</NuxtLink>
          <a href="https://blog.nemesisnet.co.za/self-hosted-ci-cd-on-a-home-rack-github-gitea-woodpecker-and-portainer/" target="_blank" class="btn-glass">Self-Hosted CI/CD</a>
          <a href="https://blog.nemesisnet.co.za/inside-the-nemesisnet-homelab-my-personal-data-center/" target="_blank" class="btn-glass">Homelab Deep Dive</a>
          <a href="https://blog.nemesisnet.co.za/build-once-deploy-anywhere-runtime-env-injection-docker-frontend/" target="_blank" class="btn-glass">Build Once, Deploy Anywhere</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>1–6 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Uptime &amp; Speed</strong></li>
            <li><span>Tiers:</span> <strong>Tier 1 / Tier 2</strong></li>
            <li><span>Stack:</span> <strong>Docker, Nginx, Redis</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <a href="https://blog.nemesisnet.co.za/self-hosted-ci-cd-on-a-home-rack-github-gitea-woodpecker-and-portainer/" target="_blank" class="btn-glass">Self-Hosted CI/CD</a>
            <a href="https://blog.nemesisnet.co.za/inside-the-nemesisnet-homelab-my-personal-data-center/" target="_blank" class="btn-glass">Homelab Deep Dive</a>
            <NuxtLink to="/services/ai-development" class="btn-glass">AI Development</NuxtLink>
            <NuxtLink to="/services/custom-software" class="btn-glass">Custom Software</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Infrastructure Engineering & DevOps | NemesisNet — Docker, CI/CD, Redis, Production Runtimes',
  meta: [
    { name: 'description', content: 'Infrastructure engineering and DevOps in South Africa: Docker, CI/CD, Redis, Nginx, and production AI runtimes. High-performance backend for Cape Town businesses.' },
    { property: 'og:title', content: 'Infrastructure Engineering & DevOps | NemesisNet' },
    { property: 'og:description', content: 'Docker, CI/CD, Redis, Nginx, and production AI runtimes. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/infrastructure' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/infrastructure' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Infrastructure Engineering',
        'description': 'Docker-based infrastructure, CI/CD pipelines, Redis caching, Nginx reverse proxy, and production AI runtime deployment.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Infrastructure Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Docker Infrastructure Setup' }, 'price': '20000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CI/CD Pipeline' }, 'price': '15000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Production AI Runtime' }, 'price': '55000', 'priceCurrency': 'ZAR' }
          ]
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/infrastructure'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Infrastructure Engineering', 'item': 'https://nemesisnet.co.za/services/infrastructure' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}
.service-feature { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 20px; border-radius: 15px; margin-bottom: 15px; transition: transform 0.3s ease; }
.service-feature:hover { transform: translateX(10px); border-color: var(--accent-color); }
.service-feature h3 { color: var(--accent-color); margin-bottom: 5px; font-size: 1.1rem; }
.service-feature p { margin: 0; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(50% - 10px); min-width: 280px; max-width: 360px; }
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
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
.next-project { margin-top: 20px; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: flex; justify-content: space-between; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .detail-sidebar { position: static; }
  .process-steps { grid-template-columns: 1fr; }
}
</style>