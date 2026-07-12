<template>
  <div class="detail-page">
    <PageHeader title="Business Systems" subtitle="End-to-end product builds with Vue 3, Spring Boot, secure auth, dashboards, and production infrastructure." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Business Systems</span>
        </div>

        <h2>What It Is</h2>
        <p>A Business System is a full-stack application built for real operational work. Spring Boot backend with proper architecture, Vue 3 frontend, secure authentication, database design, CI/CD readiness, and deployment infrastructure. This is not an MVP or a prototype — it's software built to ship and scale.</p>
        <p>These systems handle multi-user workflows, role-based permissions, API integrations, and the kind of business logic that doesn't fit in a PocketBase CRUD app. Think client portals, booking systems, operational dashboards, and internal business tools that your team will use every day.</p>

        <h2>Who It's For</h2>
        <p><strong>Operations teams</strong> that need a custom tool to manage workflows, clients, or data. <strong>Service businesses</strong> building client portals, booking systems, or scheduling tools. <strong>SMEs</strong> replacing spreadsheets and manual processes with proper software. <strong>Teams that have outgrown PocketBase</strong> and need real business logic, integrations, and structured architecture.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Spring Boot backend with clean architecture</li>
          <li><CheckCircle :size="18" /> Vue 3 frontend with responsive design</li>
          <li><CheckCircle :size="18" /> Secure authentication (JWT, RBAC, optional OAuth2)</li>
          <li><CheckCircle :size="18" /> MySQL or PostgreSQL database design and optimisation</li>
          <li><CheckCircle :size="18" /> REST API with documentation (OpenAPI/Swagger)</li>
          <li><CheckCircle :size="18" /> Automated testing (unit, integration)</li>
          <li><CheckCircle :size="18" /> Docker + Nginx deployment</li>
          <li><CheckCircle :size="18" /> CI/CD pipeline setup</li>
          <li><CheckCircle :size="18" /> Architecture, testing strategy, and documentation</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Multi-tenant SaaS architecture (goes into Platform/Enterprise)</li>
          <li><XCircle :size="18" /> AI/ML pipelines or LLM integrations</li>
          <li><XCircle :size="18" /> Complex financial or compliance systems</li>
          <li><XCircle :size="18" /> Microservices architecture (monolith-first approach)</li>
          <li><XCircle :size="18" /> Ongoing hosting management (available as retainer add-on)</li>
        </ul>

        <h2>Timeline Breakdown</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Week 1–2 — Discovery &amp; Architecture</h4>
            <p>Deep-dive into business requirements. Define system architecture, database schema, API contracts, and UI wireframes. Lock technical decisions before code.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Week 3–4 — Backend Core</h4>
            <p>Spring Boot backend with authentication, database setup, core API endpoints, and business logic. Database migrations and seed data.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Week 5–8 — Frontend &amp; Integration</h4>
            <p>Vue 3 frontend build. Connect to backend APIs. Implement dashboards, CRUD workflows, and user-facing features. Automated testing.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Week 9–12 — Testing &amp; Launch</h4>
            <p>Load testing, security review, UAT. CI/CD pipeline finalisation. Deployment, monitoring, and go-live support.</p>
          </div>
        </div>

        <h2>How Pricing Works</h2>
        <p>Starting from <strong>R150,000</strong> for a well-scoped business system. Most projects land between <strong>R150,000–R250,000</strong> depending on the number of modules, integrations, and frontend complexity.</p>
        <p>Factors that push the price higher: multiple user roles, third-party API integrations (CRM, payment, email), advanced reporting, compliance requirements, and mobile-responsive dashboards.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>OnTheGoRentals — Booking Platform</h4>
            <p>Complete rental management with automated booking, invoicing, and fleet tracking.</p>
            <NuxtLink to="/projects/onthegorentals" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>CodeCritical SaaS — Security Scanning</h4>
            <p>Container security scanning with CVE tracking and CI/CD vulnerability auditing.</p>
            <NuxtLink to="/projects/codecritical-saas" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>ForkMyFolio — Portfolio Platform</h4>
            <p>Multi-user portfolio management with content creation workflows.</p>
            <NuxtLink to="/projects/forkmyfolio" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'App Starter', description: 'PocketBase-backed apps with auth and storage — the simpler foundation before custom business logic.', to: '/services/app-starter' },
            { title: 'Platform / Enterprise', description: 'Multi-tenant platforms with role-based access, real-time data, and enterprise-grade infrastructure.', to: '/services/platform-enterprise' }
          ]"
          exploring-note="From lightweight apps to enterprise platforms — find the right complexity level."
          :reading="[
            { label: 'Vue 3 vs React for Enterprise SaaS', href: 'https://blog.nemesisnet.co.za/vue-3-vs-react-for-enterprise-saas/' }
          ]"
          :cta="{ heading: 'Ready to systematise your operations?', description: 'Custom dashboards, CRMs, and internal tools that replace spreadsheets with software.', buttonLabel: 'Discuss Scope', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>8–16 Weeks</strong></li>
            <li><span>Price:</span> <strong>From R150,000</strong></li>
            <li><span>Tier:</span> <strong>Tier 3</strong></li>
            <li><span>Stack:</span> <strong>Spring Boot, Vue 3, PostgreSQL/MySQL</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/app-starter" class="btn-glass">App Starter</NuxtLink>
            <NuxtLink to="/services/platform-enterprise" class="btn-glass">Platform / Enterprise</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'Business Systems — Spring Boot, Vue 3, Full-Stack | NemesisNet',
  meta: [
    { name: 'description', content: 'Full-stack business systems with Spring Boot, Vue 3, secure auth, and production infrastructure. From R150,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Business Systems | NemesisNet' },
    { property: 'og:description', content: 'End-to-end product builds with Spring Boot, Vue 3, secure auth. From R150,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/business-systems' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/business-systems' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Business Systems',
        'description': 'Full-stack business systems with Spring Boot, Vue 3, secure auth, dashboards, and production infrastructure.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/business-systems'
        },
        'offers': {
          '@type': 'Offer',
          'price': '150000',
          'priceCurrency': 'ZAR',
          'priceSpecification': {
            '@type': 'PriceSpecification',
            'minPrice': '150000',
            'priceCurrency': 'ZAR'
          }
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Business Systems', 'item': 'https://nemesisnet.co.za/services/business-systems' }
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
.feature-list li { padding: 8px 0; color: var(--text-muted); }
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
