<template>
  <div class="detail-page">
    <PageHeader title="Light Hosting" subtitle="Hosting, SSL, uptime monitoring, and security patches — keep your deployed systems running without the overhead." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Light Hosting</span>
        </div>

        <h2>What It Is</h2>
        <p>Light Hosting is a monthly retainer that keeps your deployed systems running — server hosting, SSL certificates, uptime monitoring, and security patches. You built it or we built it, either way it needs to stay online. This covers the basics so you do not have to think about infrastructure maintenance.</p>
        <p>No feature development, no bug fixes, no new integrations. Just reliable hosting with someone watching the dashboards so you do not have to.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with deployed systems that need basic maintenance</strong> — static sites, brochure pages, simple apps with low traffic. <strong>Projects that are feature-complete</strong> and just need to stay online. <strong>Clients who want peace of mind</strong> without paying for a full managed retainer. <strong>Any system where uptime matters but active development is not needed.</strong></p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>Server hosting and SSL management</li>
          <li>OS and dependency security patching</li>
          <li>Uptime monitoring and alerts</li>
          <li>Automated backups (where applicable)</li>
          <li>DNS management support</li>
          <li>Monthly status report</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Feature development or new builds</li>
          <li>Bug fixes or code changes</li>
          <li>CI/CD pipeline management</li>
          <li>Application monitoring or APM</li>
          <li>Priority support or SLA coverage</li>
          <li>Database administration</li>
        </ul>

        <h2>What You Get Each Month</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Infrastructure Monitoring</h4>
            <p>24/7 uptime monitoring with instant alerts. We know if your system goes down before your users do.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Security Patching</h4>
            <p>Regular OS and dependency updates applied during maintenance windows. No surprises, no vulnerabilities left unpatched.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Monthly Report</h4>
            <p>Uptime stats, patch log, and any issues flagged. You always know the state of your infrastructure.</p>
          </div>
        </div>

        <h2>Pricing</h2>
        <p><strong>R850/month</strong> — flat rate, no hidden fees. Covers up to 2 deployed systems. Additional systems quoted separately.</p>
        <p>If your system needs grow beyond basic hosting, the Managed Retainer (R7,500/month) includes CI/CD management, bug fixes, application monitoring, and priority support.</p>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Choose Light Hosting →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services/managed-retainer" class="btn-glass">Need more? See Managed Retainer →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Price:</span> <strong>R850/month</strong></li>
            <li><span>Billing:</span> <strong>Monthly</strong></li>
            <li><span>Systems:</span> <strong>Up to 2</strong></li>
            <li><span>Response:</span> <strong>Best-effort</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/managed-retainer" class="btn-glass">Managed Retainer</NuxtLink>
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
  title: 'Light Hosting — R850/mo Server Hosting & Monitoring | NemesisNet',
  meta: [
    { name: 'description', content: 'Light hosting for deployed systems: server hosting, SSL, uptime monitoring, security patches. R850/month. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Light Hosting | NemesisNet' },
    { property: 'og:description', content: 'Hosting, SSL, uptime monitoring, and security patches. R850/month flat rate.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/light-hosting' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/light-hosting' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Light Hosting',
        'description': 'Server hosting, SSL, uptime monitoring, and security patches for deployed systems.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '850', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/light-hosting'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Light Hosting', 'item': 'https://nemesisnet.co.za/services/light-hosting' }
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
