<template>
  <div class="detail-page">
    <PageHeader title="Platform / Enterprise" subtitle="Multi-tenant SaaS, AI pipelines, self-hosted LLM/TTS systems, and enterprise-grade infrastructure." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Platform / Enterprise</span>
        </div>

        <h2>What It Is</h2>
        <p>Platform and Enterprise builds are the highest-complexity systems NemesisNet delivers. Multi-tenant SaaS platforms, AI pipelines, self-hosted LLM/TTS infrastructure, MCP integrations, financial systems, and anything that requires DDD, microservices, full CI/CD, and compliance-grade architecture.</p>
        <p>This is not a product you ship once and forget. These are living systems that run critical business operations — they need proper monitoring, scaling strategies, security hardening, and long-term maintainability. The architecture has to be right from day one.</p>

        <h2>Who It's For</h2>
        <p><strong>SaaS companies</strong> building multi-tenant platforms with billing, RBAC, and data isolation. <strong>AI/ML teams</strong> deploying self-hosted LLM, TTS, or agent pipelines. <strong>Enterprises</strong> needing compliance-grade financial systems, CRMs, or billing platforms. <strong>Teams with complex integration requirements</strong> — MCP servers, multi-system data sync, and agent workflows.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>Spring Boot DDD architecture with clean separation</li>
          <li>Multi-tenant data isolation and RBAC</li>
          <li>Vue 3 frontend with complex dashboards</li>
          <li>PostgreSQL/MySQL with connection pooling and read replicas</li>
          <li>Redis caching and message queue integration</li>
          <li>Full CI/CD pipeline (build, test, deploy, monitor)</li>
          <li>Docker + Kubernetes or Nomad orchestration</li>
          <li>Comprehensive automated testing (unit, integration, E2E)</li>
          <li>Security audit and hardening</li>
          <li>Architecture documentation and runbooks</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Simple CRUD apps or internal tools (goes into App Starter)</li>
          <li>Static websites or brochure sites (goes into Static &amp; Brochure)</li>
          <li>One-time consulting sessions (available as separate engagement)</li>
          <li>Ongoing hosting management (available as retainer add-on)</li>
        </ul>

        <h2>Timeline Breakdown</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Week 1–3 — Deep Discovery</h4>
            <p>Full business analysis. Map all user roles, data flows, integration points, and compliance requirements. Define the domain model and bounded contexts.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Week 4–8 — Architecture &amp; Core</h4>
            <p>DDD domain model, database schema, authentication system, core API, and frontend shell. CI/CD pipeline from day one. Infrastructure as code.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Week 9–16 — Feature Build</h4>
            <p>Iterative feature delivery in two-week sprints. Each sprint includes backend, frontend, tests, and deployment. Regular demos and stakeholder review.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Week 17–24 — Hardening &amp; Launch</h4>
            <p>Load testing, security audit, compliance review, UAT. Monitoring, alerting, and rollback procedures. Staged rollout and go-live support.</p>
          </div>
        </div>

        <h2>How Pricing Works</h2>
        <p>Starting from <strong>R350,000</strong> for a well-scoped platform build. Most projects land between <strong>R350,000–R700,000+</strong> depending on the number of tenants, integrations, AI components, and compliance requirements.</p>
        <p>Factors that push the price higher: multi-tenant architecture, AI/ML pipeline integration, real-time data processing, financial compliance, custom MCP servers, and mobile apps.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>CodeCritical SaaS</h4>
            <p>Container security scanning platform with CVE tracking and CI/CD auditing.</p>
            <NuxtLink to="/projects/codecritical-saas" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>VoxNemesis Supertonic</h4>
            <p>Self-hosted AI pipeline with LLM routing, TTS, and multi-agent orchestration.</p>
            <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>PocketTTS MCP</h4>
            <p>MCP server for local LLM-powered text-to-speech with voice cloning.</p>
            <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Plan Build →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>16–30+ Weeks</strong></li>
            <li><span>Price:</span> <strong>From R350,000</strong></li>
            <li><span>Tier:</span> <strong>Tier 4</strong></li>
            <li><span>Stack:</span> <strong>Spring Boot DDD, Redis, AI</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems</NuxtLink>
            <NuxtLink to="/services/app-starter" class="btn-glass">App Starter</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Platform / Enterprise — Multi-Tenant SaaS, AI Pipelines | NemesisNet',
  meta: [
    { name: 'description', content: 'Enterprise-grade platforms: multi-tenant SaaS, AI pipelines, self-hosted LLM/TTS, MCP integrations. From R350,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Platform / Enterprise | NemesisNet' },
    { property: 'og:description', content: 'Multi-tenant SaaS, AI pipelines, self-hosted infrastructure. From R350,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/platform-enterprise' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/platform-enterprise' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Platform / Enterprise',
        'description': 'Enterprise-grade platforms: multi-tenant SaaS, AI pipelines, self-hosted LLM/TTS, MCP integrations.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/platform-enterprise'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Platform / Enterprise', 'item': 'https://nemesisnet.co.za/services/platform-enterprise' }
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
@media (max-width: 768px) { .breadcrumbs { display: none !important; } }
.feature-list { list-style: none; padding: 0; margin: 0 0 24px; }
.feature-list li { padding: 8px 0; padding-left: 20px; position: relative; color: var(--text-muted); }
.feature-list li::before { content: '✓'; position: absolute; left: 0; color: #22c55e; font-weight: 700; }
.feature-list--muted li::before { content: '✗'; color: #ef4444; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(50% - 10px); min-width: 280px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h4 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.related-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
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
