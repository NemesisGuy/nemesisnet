<template>
  <div class="detail-page">
    <PageHeader title="Maintenance & Support" subtitle="Keep your website or application running with ongoing maintenance and technical support." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Maintenance &amp; Support</span>
        </div>

        <h2>What It Is</h2>
        <p>Ongoing maintenance and technical support for websites and applications built by NemesisNet or third parties. Covers routine updates, small fixes, content changes, configuration, and troubleshooting — without the overhead of a full retainer.</p>
        <p>If you need more than ad-hoc fixes but less than a full managed retainer, this is the right tier.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> WordPress, plugin, and dependency updates</li>
          <li><CheckCircle :size="18" /> Content changes and text updates</li>
          <li><CheckCircle :size="18" /> Broken link fixes and redirects</li>
          <li><CheckCircle :size="18" /> Minor configuration changes</li>
          <li><CheckCircle :size="18" /> Routine troubleshooting and diagnostics</li>
          <li><CheckCircle :size="18" /> Minor fixes to existing functionality</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> New features, integrations, or major changes</li>
          <li><XCircle :size="18" /> Architecture work or complete rewrites</li>
          <li><XCircle :size="18" /> CI/CD pipeline management or monitoring</li>
          <li><XCircle :size="18" /> Third-party vendor management</li>
        </ul>

        <p class="scope-note">New features, integrations, major changes, and other engineering work are scoped and quoted separately.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Pay-As-You-Go</h3>
            <div class="compare-price">R500/hour</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for occasional fixes</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Monthly Retainer</h3>
            <div class="compare-price">R1,000/month</div>
            <ul class="compare-list">
              <li>Up to 2 hours included</li>
              <li>Priority scheduling</li>
              <li>Unused hours do not roll over</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Custom Support</h3>
            <div class="compare-price">Custom</div>
            <ul class="compare-list">
              <li>Larger support requirements</li>
              <li>Ongoing weekly/monthly blocks</li>
              <li>Scoped after discovery call</li>
            </ul>
          </div>
        </div>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Request</h3>
            <p>Email or message your maintenance request with a clear description of the issue or change needed.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Quote</h3>
            <p>For tasks under 30 minutes, we proceed directly. For larger work, you receive a time estimate before work begins.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Deliver</h3>
            <p>Maintenance is completed and you receive a summary of what was done. Retainer clients get a monthly report.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Managed hosting for Nuxt and static sites — SSL, backups, and monitoring included.', to: '/services/light-hosting' },
            { title: 'Managed Retainer', description: 'Full CI/CD management, monitoring, and bug fixes for production systems.', to: '/services/managed-retainer' }
          ]"
          exploring-note="From hosting to full production support — choose the right level."
          :cta="{ heading: 'Need ongoing support?', description: 'Maintenance covers updates, fixes, and troubleshooting. New features and integrations are quoted separately.', buttonLabel: 'Get in Touch', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Pay-as-you-go:</span> <strong>R500/hour</strong></li>
            <li><span>Retainer:</span> <strong>R1,000/month</strong></li>
            <li><span>Includes:</span> <strong>Up to 2 hours</strong></li>
            <li><span>Billing:</span> <strong>Monthly</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/services/managed-retainer" class="btn-glass">Managed Retainer</NuxtLink>
            <NuxtLink to="/contact" class="btn-glass">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'Maintenance & Support — R500/hr or R1,000/month Retainer | NemesisNet',
  meta: [
    { name: 'description', content: 'Website and application maintenance: WordPress updates, content changes, bug fixes, troubleshooting. R500/hour or R1,000/month retainer. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Maintenance & Support | NemesisNet' },
    { property: 'og:description', content: 'Website maintenance and technical support: updates, fixes, troubleshooting. R500/hour or R1,000/month.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/maintenance' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Maintenance & Support | NemesisNet' },
    { name: 'twitter:description', content: 'Website maintenance and technical support: updates, fixes, troubleshooting. R500/hour or R1,000/month.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/maintenance' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Maintenance & Support',
        'description': 'Website and application maintenance: WordPress updates, content changes, bug fixes, troubleshooting.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': [
          { '@type': 'Offer', 'price': '500', 'priceCurrency': 'ZAR', 'description': 'Pay-as-you-go hourly rate' },
          { '@type': 'Offer', 'price': '1000', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M', 'description': 'Monthly retainer with up to 2 hours' }
        ],
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/maintenance'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Maintenance & Support', 'item': 'https://nemesisnet.co.za/services/maintenance' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does maintenance cover?","acceptedAnswer":{"@type":"Answer","text":"WordPress and plugin updates, content changes, broken link fixes, minor configuration changes, routine troubleshooting, and small maintenance tasks."}},{"@type":"Question","name":"What is not included in maintenance?","acceptedAnswer":{"@type":"Answer","text":"New features, integrations, major changes, architecture work, CI/CD pipeline management, and third-party vendor management. These are scoped and quoted separately."}},{"@type":"Question","name":"How does the monthly retainer work?","acceptedAnswer":{"@type":"Answer","text":"R1,000/month covers up to 2 hours of maintenance work. Unused hours do not roll over. Larger requirements are quoted separately."}}]})
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 0 40px; padding: 24px 20px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; min-width: 0; overflow: hidden; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) { .breadcrumbs { display: none !important; } }
.feature-list { list-style: none; padding: 0; margin: 0 0 24px; }
.feature-list li { padding: 8px 0; color: var(--text-muted); }
.scope-note { font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-top: -8px; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(33% - 14px); min-width: 240px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h3 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.compare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.compare-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.compare-card--featured { border-color: var(--accent-color); }
.compare-card h3 { color: var(--accent-color); font-size: 1rem; margin: 0; }
.compare-price { font-size: 1.5rem; font-weight: 700; color: var(--text-color); }
.compare-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; flex: 1; }
.compare-list li { padding: 4px 0; color: var(--text-muted); }
.compare-list li::before { content: '✓ '; color: #22c55e; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h3 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: flex; justify-content: space-between; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } .compare-grid { grid-template-columns: 1fr; } .process-steps { grid-template-columns: 1fr; } }
</style>
