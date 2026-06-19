<template>
  <div class="detail-page">
    <PageHeader title="App Starter" subtitle="PocketBase-backed applications with auth, roles, and real data — a real application with moving parts." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">App Starter</span>
        </div>

        <h2>What It Is</h2>
        <p>An App Starter is a real application — not just a website. It has a backend (PocketBase or Firebase), user accounts with login, data that persists, and basic role-based access. Think CRUD dashboards, admin panels, internal tools, MVPs, and booking systems.</p>
        <p>PocketBase gives you a Go-based backend with SQLite, authentication, real-time subscriptions, and an admin UI — all in a single binary. Combined with a Vue or React frontend, you get a production-ready app without the overhead of Spring Boot or a full DevOps stack.</p>

        <h2>Who It's For</h2>
        <p><strong>Internal teams</strong> that need a custom tool for data entry, tracking, or reporting. <strong>Small businesses</strong> building an MVP to validate a product idea. <strong>Solo founders</strong> who need a working app before they raise funding or scale. <strong>Workshops, clinics, and service businesses</strong> that need booking, scheduling, or client management tools.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>PocketBase or Firebase backend with SQLite/Cloud Firestore</li>
          <li>Vue 3 or React frontend with responsive design</li>
          <li>User authentication (email/password, optional OAuth2)</li>
          <li>Basic role-based access control (admin, user, viewer)</li>
          <li>CRUD operations with collection/schema design</li>
          <li>Real-time data updates (PocketBase subscriptions)</li>
          <li>Docker + Nginx deployment included</li>
          <li>Basic admin panel setup</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Multi-tenant architecture (goes into Business Systems tier)</li>
          <li>Complex business logic or workflow engines</li>
          <li>Payment processing or billing integration</li>
          <li>Third-party API integrations (CRM, ERP, etc.)</li>
          <li>Advanced reporting or analytics dashboards</li>
          <li>Full CI/CD pipeline setup</li>
        </ul>

        <h2>Timeline Breakdown</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Week 1–2 — Discovery &amp; Schema</h4>
            <p>Map out your data model, user roles, and core workflows. Design the PocketBase collections and define the API surface.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Week 3–4 — Backend &amp; Auth</h4>
            <p>Set up PocketBase, configure authentication, build the collection schemas, and implement role-based access. Deploy the backend.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Week 5–6 — Frontend Build</h4>
            <p>Build the Vue or React frontend. CRUD interfaces, dashboards, and real-time data views. Connect to the PocketBase API.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Week 7–8 — Polish &amp; Deploy</h4>
            <p>Testing, bug fixes, and client review. Docker deployment, SSL, domain setup, and go-live.</p>
          </div>
        </div>

        <h2>How Pricing Works</h2>
        <p>Starting from <strong>R15,000</strong> for a simple CRUD app with basic auth. Most App Starter projects land between <strong>R20,000–R35,000</strong> depending on the number of collections, user roles, and frontend complexity.</p>
        <p>Factors that push the price higher: multiple user roles, file upload/storage, real-time subscriptions, custom dashboards, and integration with external services.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>TorqueBooks — Workshop Management</h4>
            <p>PocketBase + React with OAuth2 SSO, four-tier RBAC, and PDF invoicing.</p>
            <NuxtLink to="/projects/torquebooks" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Since — Temporal Claim Registry</h4>
            <p>PocketBase + React with temporal tracking, prediction recording, and outcome verification.</p>
            <NuxtLink to="/projects/since" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Scope This Project →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>4–8 Weeks</strong></li>
            <li><span>Price:</span> <strong>R15,000 – R35,000</strong></li>
            <li><span>Tier:</span> <strong>Tier 2</strong></li>
            <li><span>Stack:</span> <strong>PocketBase, Vue, React</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/static-sites" class="btn-glass">Static &amp; Brochure</NuxtLink>
            <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'App Starter — PocketBase MVP Development | NemesisNet',
  meta: [
    { name: 'description', content: 'PocketBase-backed apps with auth, roles, and real data. CRUD dashboards, MVPs, admin panels. Starting from R15,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'App Starter | NemesisNet' },
    { property: 'og:description', content: 'PocketBase-backed applications with auth, roles, and real data. Starting from R15,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/app-starter' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/app-starter' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'App Starter',
        'description': 'PocketBase-backed applications with auth, roles, and real data. CRUD dashboards, MVPs, admin panels.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/app-starter'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'App Starter', 'item': 'https://nemesisnet.co.za/services/app-starter' }
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
@media (max-width: 768px) { .breadcrumbs { display: none !important; } }
.feature-list { list-style: none; padding: 0; margin: 0 0 24px; }
.feature-list li { padding: 8px 0; padding-left: 20px; position: relative; color: var(--text-muted); }
.feature-list li::before { content: '✓'; position: absolute; left: 0; color: #22c55e; font-weight: 700; }
.feature-list--muted li::before { content: '✗'; color: #ef4444; }
.process-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h4 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.related-projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
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
