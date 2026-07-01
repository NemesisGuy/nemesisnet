<template>
  <div class="detail-page">
    <PageHeader title="Backend &amp; API Engineering" subtitle="Custom APIs, data pipelines, system integrations, and backend architecture — the invisible infrastructure that makes everything else work." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Backend &amp; API Engineering</span>
        </div>

        <h2>The Problem: Glue Code and Fragile Integrations</h2>
        <p>Most businesses don't need a full application — they need the plumbing that connects systems together. A payment gateway that talks to the accounting system. A data pipeline that syncs CRM records to the warehouse. An API layer that exposes internal services to partners. These are backend problems that frontend frameworks can't solve.</p>
        <p>Off-the-shelf integration tools are expensive, brittle, and limited. Writing scripts to glue systems together works until the first edge case. And when the person who wrote the scripts leaves, nobody understands how it works. The result is fragile data flows, manual reconciliation, and a growing fear that something will silently break.</p>

        <h2>The Solution: Backend Engineering That Lasts</h2>
        <p>NemesisNet builds production-grade backend infrastructure — APIs, data pipelines, system integrations, and the invisible architecture that holds everything together. We don't build full-stack apps here (that's our Business Systems page). We build the backend layer: the services, endpoints, and data flows that other applications depend on.</p>
        <p>Our approach is Spring Boot for resilient APIs and data services. Every endpoint is documented, tested, and designed for consumers — whether that's a frontend, a mobile app, a partner system, or an internal tool. We handle the hard parts: authentication, rate limiting, pagination, error handling, and the kind of schema design that doesn't need rewriting six months later.</p>

        <h2>API Engineering</h2>
        <p>Designing secure, scalable, and well-documented APIs using Java Spring Boot. Every endpoint follows RESTful principles with proper versioning, pagination, filtering, and error handling. We implement comprehensive request validation, rate limiting, and circuit breaker patterns. API documentation is auto-generated and kept in sync with the codebase.</p>

        <h2>System Integrations</h2>
        <p>Connecting disparate systems that were never designed to talk to each other. CRM ↔ ERP, payment gateways ↔ accounting, marketing tools ↔ internal databases. We handle webhook receivers, polling services, message queues, and retry logic — the messy plumbing that integration platforms charge per-transaction for.</p>

        <h2>Data Pipelines</h2>
        <p>Moving, transforming, and syncing data between systems. ETL jobs, real-time event streams, batch processing, and data lake ingestion. We build reliable pipelines that handle failures gracefully, log everything, and maintain data integrity across system boundaries.</p>

        <h2>Secure Authentication &amp; Authorization</h2>
        <p>Implementing industry-standard security protocols including JWT for stateless authentication, RBAC for granular permissions, and OAuth2 for third-party integrations. Every user action is auditable, every resource access is controlled. Multi-factor authentication, session management, and secure token storage — security woven into the architecture from the database schema up.</p>

        <h2>Who This Is For</h2>
        <p><strong>Development teams</strong> needing a backend API layer for their frontend or mobile app. <strong>Operations teams</strong> with data that lives in three different systems and needs to be unified. <strong>Product companies</strong> requiring API engineering, data pipelines, or system integrations. <strong>Technical founders</strong> who need backend infrastructure but don't need a full-stack engagement.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Spring Boot REST APIs with OpenAPI/Swagger documentation</li>
          <li><CheckCircle :size="18" /> Database design and optimisation (MySQL, PostgreSQL, SQLite)</li>
          <li><CheckCircle :size="18" /> System integrations (webhooks, message queues, polling services)</li>
          <li><CheckCircle :size="18" /> Data pipelines and ETL jobs</li>
          <li><CheckCircle :size="18" /> Secure authentication (JWT, RBAC, OAuth2)</li>
          <li><CheckCircle :size="18" /> Automated testing (unit, integration)</li>
          <li><CheckCircle :size="18" /> Docker deployment and CI/CD setup</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Full-stack application builds (see Business Systems)</li>
          <li><XCircle :size="18" /> Multi-tenant SaaS architecture (see Platform/Enterprise)</li>
          <li><XCircle :size="18" /> Frontend UI development (not our scope here)</li>
        </ul>

        <h2>How We Build</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Integration Mapping</h4>
            <p>We map every system boundary, data flow, and integration point. API contracts are defined before code is written. No assumptions — every endpoint is justified by a real consumer.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Backend Architecture</h4>
            <p>Design the API surface, database schema, data models, and integration patterns. Technical decisions are documented and reviewed before development begins.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Iterative Development</h4>
            <p>APIs and pipelines are built in two-week sprints. Each sprint includes backend implementation, automated tests, and documentation. CI/CD ensures every change is tested and deployable.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Testing &amp; Handover</h4>
            <p>Load testing, security audits, and integration verification. We deploy, set up monitoring, and hand over documentation. Post-delivery support ensures smooth operations.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've built API layers, data pipelines, and system integrations across industries — from rental management platforms to portfolio tracking systems. Our strength is making disparate systems talk to each other reliably. Based in Cape Town, South Africa, we work with clients locally and across time zones to Europe and beyond.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">Spring Boot</span>
          <span class="pill pill-tools">PostgreSQL</span>
          <span class="pill pill-tools">MySQL</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">JWT</span>
          <span class="pill pill-tools">OAuth2</span>
          <span class="pill pill-tools">CI/CD</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>OnTheGoRentals — Booking API</h4>
            <p>Backend API for rental management with payment processing and multi-user support.</p>
            <NuxtLink to="/projects/onthegorentals" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>ForkMyFolio — Content API</h4>
            <p>Backend services for portfolio platform with user management and content workflows.</p>
            <NuxtLink to="/projects/forkmyfolio" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Since — Data Pipeline</h4>
            <p>Prediction tracking system with audit trail and outcome verification pipeline.</p>
            <NuxtLink to="/projects/since" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems →</NuxtLink>
          <NuxtLink to="/services/saas-development" class="btn-glass">SaaS Development →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
        </div>

        <CTAGroup :links="ctaLinks" />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>2–12 Weeks</strong></li>
            <li><span>Focus:</span> <strong>APIs, Integrations, Pipelines</strong></li>
            <li><span>Tiers:</span> <strong>Tier 2 / Tier 3</strong></li>
            <li><span>Stack:</span> <strong>Spring Boot, PostgreSQL, Docker</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems</NuxtLink>
            <NuxtLink to="/services/saas-development" class="btn-glass">SaaS Development</NuxtLink>
            <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure</NuxtLink>
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
  title: 'Backend & API Engineering | NemesisNet — APIs, Data Pipelines, System Integrations',
  meta: [
    { name: 'description', content: 'Backend and API engineering in South Africa: custom APIs, data pipelines, system integrations, and backend architecture with Spring Boot. Cape Town.' },
    { property: 'og:title', content: 'Backend & API Engineering | NemesisNet' },
    { property: 'og:description', content: 'Custom APIs, data pipelines, and system integrations with Spring Boot. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/custom-software' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/custom-software' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Backend & API Engineering',
        'description': 'Custom APIs, data pipelines, system integrations, and backend architecture with Spring Boot, PostgreSQL, and Docker.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Backend Engineering Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'REST API Development' }, 'price': '55000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'System Integration' }, 'price': '80000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Data Pipeline Engineering' }, 'price': '80000', 'priceCurrency': 'ZAR' }
          ]
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/custom-software'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Backend & API Engineering', 'item': 'https://nemesisnet.co.za/services/custom-software' }
        ]
      })
    }
  ]
})

const ctaLinks = [
  { label: 'Discuss This Service', to: '/contact', variant: 'primary', arrow: true },
  { label: 'Read Auth Deep Dive', href: 'https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/', variant: 'secondary' },
  { label: '← Back to Services', to: '/services', variant: 'cross-sell' }
]
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