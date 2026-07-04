<template>
  <div class="detail-page">
    <PageHeader title="Managed Retainer" subtitle="CI/CD management, monitoring, bug fixes, and continuous improvement — your production systems, fully supported." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Managed Retainer</span>
        </div>

        <h2>What It Is</h2>
        <p>A monthly retainer that covers the full operational lifecycle of your production systems — CI/CD pipeline management, application monitoring, bug fixes, and continuous improvement. This is not just hosting. It is an ongoing engineering partnership where your systems stay stable, secure, and improving.</p>
        <p>If Light Hosting keeps the lights on, the Managed Retainer keeps everything running at production quality.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with production systems that need active maintenance</strong> — SaaS platforms, business-critical apps, multi-tenant systems. <strong>Companies without a dedicated DevOps team</strong> who need someone managing their pipelines, deployments, and infrastructure. <strong>Projects that are actively evolving</strong> and need continuous improvement, not just uptime. <strong>Any system where downtime costs money.</strong></p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> CI/CD pipeline management and deployments</li>
          <li><CheckCircle :size="18" /> Application monitoring and alerting</li>
          <li><CheckCircle :size="18" /> Bug fixes and continuous improvement</li>
          <li><CheckCircle :size="18" /> Priority support and SLA coverage</li>
          <li><CheckCircle :size="18" /> Security patching and dependency updates</li>
          <li><CheckCircle :size="18" /> Infrastructure optimisation and cost review</li>
          <li><CheckCircle :size="18" /> Monthly reporting and health checks</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Large feature builds or new project development</li>
          <li><XCircle :size="18" /> Complete rewrites or architecture overhauls</li>
          <li><XCircle :size="18" /> Third-party vendor management beyond core infrastructure</li>
        </ul>

        <h2>What You Get Each Month</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Pipeline &amp; Deployments</h4>
            <p>Manage your CI/CD pipelines, run deployments, verify releases. Your team ships code; we make sure it lands safely in production.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Monitor &amp; Alert</h4>
            <p>Application monitoring, error tracking, and performance alerts. We catch issues before your users do and respond within SLA.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Fix &amp; Improve</h4>
            <p>Bug fixes, dependency updates, security patches, and small improvements. Continuous refinement without the overhead of a full-time hire.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Report &amp; Review</h4>
            <p>Monthly health report: uptime, incidents resolved, patches applied, improvements made. Full transparency on what was done and what is next.</p>
          </div>
        </div>

        <h2>Pricing</h2>
        <p><strong>R7,500/month</strong> — flat rate, no hidden fees. Covers up to 3 production systems. Additional systems quoted separately.</p>
        <p>If you only need basic hosting and monitoring (no CI/CD, no bug fixes), the Light Hosting plan (R850/month) covers the basics.</p>

        <h2>How It Compares</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h4>Light Hosting</h4>
            <div class="compare-price">R850/mo</div>
            <ul class="compare-list">
              <li>Server hosting &amp; SSL</li>
              <li>Security patching</li>
              <li>Uptime monitoring</li>
              <li>Monthly status report</li>
            </ul>
            <NuxtLink to="/services/light-hosting" class="btn-glass">View Details</NuxtLink>
          </div>
          <div class="compare-card compare-card--featured">
            <h4>Managed Retainer</h4>
            <div class="compare-price">R7,500/mo</div>
            <ul class="compare-list">
              <li>Everything in Light Hosting</li>
              <li>CI/CD pipeline management</li>
              <li>Bug fixes &amp; improvements</li>
              <li>Application monitoring</li>
              <li>Priority support &amp; SLA</li>
            </ul>
            <NuxtLink to="/contact" class="btn-glass">Choose Managed</NuxtLink>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Managed hosting for Nuxt and static sites — SSL, backups, and monitoring included.', to: '/services/light-hosting' },
            { title: 'System Design & Consulting', description: 'Architecture sessions for technical decisions — ad-hoc when you do not need a retainer.', to: '/services/consulting' }
          ]"
          exploring-note="From managed hosting to ad-hoc consulting — find the right support model."
          :reading="[]"
          :cta="{ heading: 'Ready for ongoing support?', description: 'Dedicated engineering hours for maintenance, feature work, and technical decisions.', buttonLabel: 'Choose Managed Retainer', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Price:</span> <strong>R7,500/month</strong></li>
            <li><span>Billing:</span> <strong>Monthly</strong></li>
            <li><span>Systems:</span> <strong>Up to 3</strong></li>
            <li><span>Response:</span> <strong>SLA-backed</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
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
  title: 'Managed Retainer — R7,500/mo Production Support | NemesisNet',
  meta: [
    { name: 'description', content: 'Managed retainer for production systems: CI/CD management, monitoring, bug fixes, priority support. R7,500/month. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Managed Retainer | NemesisNet' },
    { property: 'og:description', content: 'CI/CD management, monitoring, bug fixes, and continuous improvement. R7,500/month.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/managed-retainer' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/managed-retainer' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Managed Retainer',
        'description': 'CI/CD management, monitoring, bug fixes, and continuous improvement for production systems.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '7500', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/managed-retainer'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Managed Retainer', 'item': 'https://nemesisnet.co.za/services/managed-retainer' }
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
.compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
.compare-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.compare-card--featured { border-color: var(--accent-color); }
.compare-card h4 { color: var(--accent-color); font-size: 1rem; margin: 0; }
.compare-price { font-size: 1.5rem; font-weight: 700; color: var(--text-color); }
.compare-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; flex: 1; }
.compare-list li { padding: 4px 0; color: var(--text-muted); }
.compare-list li::before { content: '✓ '; color: #22c55e; }
.compare-card .btn-glass { margin-top: auto; }

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
  .compare-grid { grid-template-columns: 1fr; }
}
</style>
