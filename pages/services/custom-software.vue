<template>
  <div class="detail-page">
    <PageHeader title="Custom Software Development" subtitle="Enterprise-grade backend systems and high-performance full-stack applications." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Custom Software</span>
        </div>

        <h2>The Problem: Off-the-Shelf Software Doesn't Fit</h2>
        <p>Every business has processes that don't map cleanly to generic software. The CRM doesn't capture your workflow. The ERP requires workarounds that cost more time than they save. And every integration between systems becomes a fragile, manual bridge maintained by spreadsheets and tribal knowledge.</p>
        <p>Trying to force-fit standard tools creates a patchwork of disconnected systems. Data lives in silos. Processes require double-entry. Employees work around the software instead of with it. The result is wasted hours, frustrated teams, and decisions made on gut feeling because the data isn't accessible when it matters.</p>

        <h2>The Solution: Software Built Around How You Actually Work</h2>
        <p>NemesisNet builds custom software that solves specific business bottlenecks. We don't sell generic tools — we architect systems that integrate perfectly into your existing workflows and scale as your user base grows. Every feature is purpose-built for your operational reality, not adapted from a template.</p>
        <p>Our approach combines robust backend architectures with responsive, intuitive frontends. We use battle-tested frameworks — Spring Boot for resilient APIs, Vue 3 for performant interfaces — and implement proper security, testing, and observability from day one. The result is software that your team actually wants to use.</p>

        <h2>Full-Stack Mastery</h2>
        <p>Developing responsive, high-performance frontends using Vue.js and React, paired with robust backend architectures. We handle the entire stack: data models, APIs, business logic, user interfaces, and infrastructure — so everything works together seamlessly.</p>
        <p>Our Vue 3 applications leverage Composition API, Pinia for state management, and Vue Router for seamless navigation. Backends are built with Java Spring Boot, providing type-safe, performant APIs with comprehensive documentation via OpenAPI/Swagger.</p>

        <h2>REST API Engineering</h2>
        <p>Designing secure, scalable, and well-documented APIs using Java Spring Boot, ensuring seamless integration with third-party services. Every endpoint follows RESTful principles with proper versioning, pagination, filtering, and error handling.</p>
        <p>We implement comprehensive request validation, rate limiting, and circuit breaker patterns. API documentation is auto-generated and kept in sync with the codebase, making integration straightforward for any consumer.</p>

        <h2>Secure Authentication &amp; Authorization</h2>
        <p>Implementing industry-standard security protocols including JWT for stateless authentication, RBAC for granular permissions, and OAuth2 for third-party integrations. Every user action is auditable, every resource access is controlled.</p>
        <p>We implement multi-factor authentication, session management, password policies, and secure token storage. Security isn't bolted on — it's woven into the architecture from the database schema up.</p>

        <h2>Database Architecture</h2>
        <p>Designing optimized schemas for MySQL, PostgreSQL, and SQLite to ensure data integrity and lightning-fast query performance. We apply normalisation where it matters and strategic denormalisation where performance demands it.</p>
        <p>Every data layer includes migration strategies, seed data management, and backup/recovery procedures. We implement connection pooling, query caching, read replicas, and monitoring to maintain performance as your data grows.</p>

        <h2>Who This Is For</h2>
        <p><strong>Operations teams</strong> drowning in manual processes and disconnected tools. <strong>Product companies</strong> needing a custom platform that matches their unique business model. <strong>Engineering leaders</strong> who want a maintainable codebase with proper testing and documentation. <strong>Startups ready to scale</strong> beyond their prototype and need production-grade infrastructure.</p>

        <h2>How We Build</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Requirements &amp; Discovery</h4>
            <p>We work with your team to understand current workflows, pain points, and requirements. No assumptions — every feature is justified by a real business need.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Architecture &amp; Design</h4>
            <p>We define the system architecture, database schema, API contracts, and UI/UX wireframes. Technical decisions are documented and reviewed before development begins.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Iterative Development</h4>
            <p>Features are built and delivered in two-week sprints. Each sprint includes backend API work, frontend implementation, automated tests, and a demo. CI/CD ensures every change is tested and deployable.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Testing &amp; Launch</h4>
            <p>Load testing, security audits, and user acceptance testing before go-live. We handle deployment, DNS, SSL, and monitoring setup. Post-launch support ensures smooth operations.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've built custom platforms across industries — from rental management to portfolio tracking, from compliance registries to enterprise security scanning. Our strength is translating complex business requirements into clean, maintainable software. Based in Cape Town, South Africa, we work with clients locally and across time zones to Europe and beyond.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">Vue 3</span>
          <span class="pill pill-tools">React</span>
          <span class="pill pill-tools">Spring Boot</span>
          <span class="pill pill-tools">PostgreSQL</span>
          <span class="pill pill-tools">MySQL</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">JWT</span>
          <span class="pill pill-tools">OAuth2</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">CI/CD</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>OnTheGoRentals — Full-Stack Booking</h4>
            <p>Complete booking platform with payment processing and multi-user support.</p>
            <NuxtLink to="/projects/onthegorentals" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>ForkMyFolio — Multi-User Platform</h4>
            <p>Portfolio platform with user management and content creation workflows.</p>
            <NuxtLink to="/projects/forkmyfolio" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Since — Temporal Registry</h4>
            <p>Temporal claim management system with full audit trail.</p>
            <NuxtLink to="/projects/since" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/saas-development" class="btn-glass">SaaS Development →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
          <NuxtLink to="/services/consulting" class="btn-glass">Technical Consulting →</NuxtLink>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Discuss This Service →</NuxtLink>
          <a href="https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/" target="_blank" class="btn-glass">Read Auth Deep Dive</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>2–12 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Performance &amp; Scale</strong></li>
            <li><span>Tiers:</span> <strong>Tier 2 / Tier 3</strong></li>
            <li><span>Stack:</span> <strong>Vue 3, Spring Boot, Docker</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <a href="https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/" target="_blank" class="btn-glass">Auth Deep Dive</a>
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
useHead({
  title: 'Custom Software Development | NemesisNet — Spring Boot, Vue 3, Enterprise Grade',
  meta: [
    { name: 'description', content: 'Custom software development in South Africa: enterprise-grade backend systems and full-stack applications with Vue 3, Spring Boot, secure auth. Cape Town.' },
    { property: 'og:title', content: 'Custom Software Development | NemesisNet' },
    { property: 'og:description', content: 'Enterprise-grade backend and full-stack applications. Vue 3, Spring Boot, secure authentication. Based in Cape Town, South Africa.' },
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
        'name': 'Custom Software Development',
        'description': 'Enterprise-grade backend systems and high-performance full-stack applications with Vue 3 frontend, Spring Boot backend, JWT auth, and database architecture.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Custom Software Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Full-Stack Application' }, 'price': '110000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'REST API Development' }, 'price': '55000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Security & Auth Implementation' }, 'price': '20000', 'priceCurrency': 'ZAR' }
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Custom Software Development', 'item': 'https://nemesisnet.co.za/services/custom-software' }
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
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}
.service-feature { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 20px; border-radius: 15px; margin-bottom: 15px; transition: transform 0.3s ease; }
.service-feature:hover { transform: translateX(10px); border-color: var(--accent-color); }
.service-feature h3 { color: var(--accent-color); margin-bottom: 5px; font-size: 1.1rem; }
.service-feature p { margin: 0; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
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
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
.next-project { margin-top: 20px; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
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