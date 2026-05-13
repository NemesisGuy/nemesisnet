<template>
  <div class="detail-page">
    <PageHeader title="Infrastructure Engineering" subtitle="High-performance backends and production-ready AI runtimes." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Offering</h2>
        <p>Infrastructure is the foundation of every successful digital product. NemesisNet specializes in building the "plumbing" that allows your application to be fast, secure, and virtually indestructible.</p>
        
        <h2>Infrastructure Expertise</h2>
        <div class="service-feature">
          <h3>Backend Performance</h3>
          <p>Implementing Redis caching and queue patterns to handle massive traffic spikes without breaking a sweat.</p>
        </div>
        <div class="service-feature">
          <h3>Dockerized Ecosystems</h3>
          <p>Creating immutable infrastructure with Docker and Docker Compose, ensuring your app runs exactly the same on your laptop as it does in production.</p>
        </div>
        <div class="service-feature">
          <h3>Nginx Edge Control</h3>
          <p>Professional reverse proxy setups for SSL termination, load balancing, and optimized content delivery.</p>
        </div>
        <div class="service-feature">
          <h3>AI Runtimes</h3>
          <p>Deploying local AI models and TTS pipelines for privacy and speed, bypassing expensive cloud dependencies.</p>
        </div>        <h2>Relevant Projects</h2>
        <div class="relevant-projects">
          <NuxtLink to="/projects/kokoro-tts" class="btn-glass">Kokoro TTS — AI Runtime</NuxtLink>
          <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">VoxNemesis Supertonic — WebGPU TTS</NuxtLink>
          <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">PocketTTS-MCP — MCP Server</NuxtLink>
        </div>

        
        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Secure Your Infra</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>1-6 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Uptime & Speed</strong></li>
            <li><span>Tiers:</span> <strong>Tier 1 / Tier 2</strong></li>
            <li><span>Pricing:</span> <strong>Custom Quote</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Infrastructure Engineering | NemesisNet',
  meta: [
    { name: 'description', content: 'Docker, CI/CD, Redis, Nginx, and production AI runtimes. High-performance backend infrastructure for South African businesses.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/infrastructure' }
  ],
  script: [{
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
      }
    })
  }]
})
</script>

<style scoped>
.detail-page {
  background: var(--bg-gradient);
  min-height: 100vh;
}



.detail-container { padding: 24px 20px 40px 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 60px;
}

.detail-main {
  text-align: left;
  line-height: 1.8;
}

.detail-main h2 {
  font-size: 2rem;
  margin: 40px 0 20px;
  text-align: left;
}

.detail-main p {
  color: var(--text-muted);
  margin-bottom: 20px;
}

.detail-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.sidebar-card h4 {
  color: var(--accent-color);
  margin-bottom: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.sidebar-list li {
  margin-bottom: 10px;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
}

.sidebar-list li strong {
  color: var(--text-color);
}

.service-feature {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.service-feature:hover {
  transform: translateX(10px);
  border-color: var(--accent-color);
}

.service-feature h3 {
  color: var(--accent-color);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.service-feature p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.cta-wrapper {
  margin-top: 60px;
  text-align: center;
}



.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
.relevant-projects { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
@media (max-width: 900px) {
  .detail-container {
    grid-template-columns: 1fr;
  }
    .detail-sidebar {
    position: static;
  }
}
</style>
