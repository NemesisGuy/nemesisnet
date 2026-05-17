<template>
  <div class="detail-page">
    <PageHeader title="SaaS Development" subtitle="Scalable multi-tenant platforms built for rapid growth — from MVP to production-grade product." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">SaaS Development</span>
        </div>

        <h2>The Problem: Scaling a SaaS Product Kills Most Startups</h2>
        <p>Building a SaaS product is deceptively hard. The initial prototype works for 10 users, then collapses at 1,000. Multi-tenant data isolation leaks. Billing systems break under edge cases — prorated upgrades, plan downgrades, usage-based add-ons. And the infrastructure that worked in development becomes a bottleneck in production.</p>
        <p>Most teams spend months rebuilding the foundation after launch because the original architecture didn't account for real-world scale. Meanwhile, competitors ship faster on solid platforms. The cost of getting SaaS architecture wrong isn't just technical debt — it's lost market share.</p>

        <h2>The Solution: Platforms Built to Scale from Day One</h2>
        <p>NemesisNet builds scalable multi-tenant SaaS platforms with the right architecture from the start. We combine Spring Boot backends with Vue 3 frontends, containerised deployment, and battle-tested patterns for tenant isolation, subscription billing, and API-first design. Whether you're launching an MVP or re-architecting an existing product, we ensure your platform can grow with your user base without costly rewrites.</p>

        <h2>Multi-Tenant Architecture</h2>
        <p>Designing systems where a single instance of the software serves multiple customers, each with their own isolated data and configuration. We implement tenant isolation at the database level (schema-per-tenant or row-level security), enforce strict data boundaries in the application layer, and provide per-tenant customisation without code forks. This architecture reduces infrastructure cost while maintaining security and performance as your customer count grows.</p>

        <h2>Subscription &amp; Billing Management</h2>
        <p>Integrating seamless billing and subscription cycles, ensuring your revenue streams are automated and secure. We implement Stripe-powered billing with support for trials, tiered plans, usage-based pricing, coupons, and dunning management. Every billing flow is automated — from signup to upgrade to churn prevention — giving you predictable, recurring revenue without manual intervention.</p>

        <h2>API-First Design</h2>
        <p>Building the core of your SaaS as a set of well-documented APIs, allowing for easy expansion into mobile apps, third-party integrations, and ecosystem growth. Every feature we build exposes a clean REST API with OpenAPI documentation. This means your platform can be consumed by web, mobile, partner integrations, and automation tools — all from a single codebase.</p>

        <h2>Cloud-Native Deployment</h2>
        <p>Leveraging Docker, Nginx, and cloud-neutral infrastructure to ensure your platform is always online and scales horizontally. We deploy using containerised microservices with health checks, zero-downtime deployments, and automated scaling policies. Multi-region support and CDN-backed static asset delivery ensure low latency for global users.</p>

        <h2>Who This Is For</h2>
        <p><strong>Founders launching SaaS products</strong> who need a solid technical foundation from day one. <strong>Product teams at growing startups</strong> hitting scaling walls with their current architecture. <strong>Enterprise teams</strong> building internal SaaS tools that need multi-tenancy and SSO. <strong>Agencies and development shops</strong> looking for a reliable partner to build production-grade platforms.</p>

        <h2>How We Build</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Product Discovery</h4>
            <p>We map your business model, target users, core workflows, and growth projections. Technical decisions are driven by your product strategy, not the other way around.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Architecture &amp; Design</h4>
            <p>We design the full system: database schema for multi-tenancy, API contracts, authentication flow, billing integration, and deployment topology. You get detailed technical specs before development begins.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Incremental Development</h4>
            <p>We build in two-week sprints, delivering working features at the end of each cycle. CI/CD pipelines ensure every deployment is tested and automated. You can demo progress to stakeholders continuously.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Launch &amp; Scale</h4>
            <p>Production deployment with monitoring, error tracking, and performance baselines. We stay on for post-launch support, optimising performance and adding features as user feedback comes in.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've built multiple SaaS products from the ground up, including our own internal tools and client platforms. Our stack of choice — Spring Boot for the backend, Vue 3 for the frontend — gives you a maintainable, performant, and developer-friendly product. Based in Cape Town, South Africa, with experience deploying SaaS products for clients across Africa and Europe.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">Spring Boot</span>
          <span class="pill pill-tools">Vue 3</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">Nginx</span>
          <span class="pill pill-tools">Stripe</span>
          <span class="pill pill-tools">PostgreSQL</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">JWT</span>
          <span class="pill pill-tools">CI/CD</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>Since — Temporal Claim Registry</h4>
            <p>Full-stack platform for managing temporal claims with multi-tenant architecture.</p>
            <NuxtLink to="/projects/since" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>CodeCritical SaaS</h4>
            <p>Security scanning SaaS platform with enterprise multi-tenancy.</p>
            <NuxtLink to="/projects/codecritical-saas" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>ForkMyFolio</h4>
            <p>Portfolio platform built as a multi-user SaaS product.</p>
            <NuxtLink to="/projects/forkmyfolio" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/custom-software" class="btn-glass">Custom Software Development →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
          <NuxtLink to="/services/consulting" class="btn-glass">Technical Consulting →</NuxtLink>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Discuss Your SaaS Project →</NuxtLink>
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
            <li><span>Delivery:</span> <strong>4–16 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Multi-Tenant, Scale, Isolation</strong></li>
            <li><span>Tiers:</span> <strong>Tier 2 / Tier 3</strong></li>
            <li><span>Stack:</span> <strong>Spring Boot, Vue 3, Docker</strong></li>
            <li><span>Billing:</span> <strong>Stripe Integration</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <a href="https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/" target="_blank" class="btn-glass">Auth Deep Dive</a>
            <NuxtLink to="/services/custom-software" class="btn-glass">Custom Software</NuxtLink>
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
  title: 'SaaS Development | NemesisNet — Multi-Tenant Platforms, Spring Boot + Vue 3',
  meta: [
    { name: 'description', content: 'Scalable multi-tenant SaaS development in South Africa with Spring Boot + Vue 3, authentication, billing, and API-first architecture. Cape Town.' },
    { property: 'og:title', content: 'SaaS Development | NemesisNet' },
    { property: 'og:description', content: 'Scalable multi-tenant SaaS platforms with Spring Boot + Vue 3. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/saas-development' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/saas-development' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'SaaS Development',
        'description': 'Scalable multi-tenant SaaS platforms with Spring Boot backend, Vue 3 frontend, JWT authentication, Stripe billing, and API-first architecture.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'SaaS Development Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Multi-Tenant Platform Build' }, 'price': '110000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'API-First SaaS Architecture' }, 'price': '110000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Billing & Subscription Integration' }, 'price': '55000', 'priceCurrency': 'ZAR' }
          ]
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/saas-development'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'SaaS Development', 'item': 'https://nemesisnet.co.za/services/saas-development' }
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
  .related-projects { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
}
</style>