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

        <h2>What This Service Is</h2>
        <p>Routine troubleshooting and maintenance that does not constitute substantial application development. Covers routine updates, configuration changes, minor operational fixes, and troubleshooting.</p>
        <p>If work requires substantial engineering effort — framework upgrades, architectural changes, feature development — it moves to the Development Retainer or is billed separately.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Troubleshooting and diagnostics</li>
          <li><CheckCircle :size="18" /> Routine plugin and module updates</li>
          <li><CheckCircle :size="18" /> Configuration changes</li>
          <li><CheckCircle :size="18" /> Minor operational fixes</li>
          <li><CheckCircle :size="18" /> Assistance diagnosing service issues</li>
          <li><CheckCircle :size="18" /> Basic maintenance tasks within purchased allowance</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Major application bug fixes</li>
          <li><XCircle :size="18" /> Feature development</li>
          <li><XCircle :size="18" /> Architectural changes</li>
          <li><XCircle :size="18" /> Framework migrations</li>
          <li><XCircle :size="18" /> Significant dependency upgrades requiring code changes</li>
          <li><XCircle :size="18" /> New CI/CD systems</li>
          <li><XCircle :size="18" /> Full observability implementations</li>
        </ul>
        <p class="scope-note">If work requires substantial engineering effort, it becomes separately billable development or engineering work through the Development Retainer.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card compare-card--featured">
            <h3>Hourly</h3>
            <div class="compare-price">R850 – R1,100/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for occasional maintenance</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Support Retainer</h3>
            <div class="compare-price">From R7,500/mo</div>
            <ul class="compare-list">
              <li>Reserved monthly support hours</li>
              <li>Defined response targets</li>
              <li>Overage at hourly rate</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">The exact number of included hours and response targets are determined during scoping and specified in the applicable retainer agreement.</p>

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
            { title: 'Support Retainer', description: 'Reserved support hours for ongoing troubleshooting and maintenance.', to: '/services/support-retainer' },
            { title: 'Development Retainer', description: 'Reserved engineering capacity for features, fixes, and improvements.', to: '/services/dev-retainer' }
          ]"
          exploring-note="From ad-hoc fixes to ongoing engineering capacity — choose the right level."
          :cta="{ heading: 'Need ongoing support?', description: 'Routine maintenance and troubleshooting. Substantial engineering work is scoped separately.', buttonLabel: 'Get in Touch', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Hourly:</span> <strong>R850 – R1,100/hr</strong></li>
            <li><span>Retainer:</span> <strong>From R7,500/mo</strong></li>
            <li><span>Billing:</span> <strong>Monthly</strong></li>
            <li><span>Overage:</span> <strong>Hourly rate</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/support-retainer" class="btn-glass">Support Retainer</NuxtLink>
            <NuxtLink to="/services/dev-retainer" class="btn-glass">Development Retainer</NuxtLink>
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
  title: 'Maintenance & Support — Routine Troubleshooting & Maintenance | NemesisNet',
  meta: [
    { name: 'description', content: 'Routine troubleshooting and maintenance for websites and applications. R850–R1,100/hour or support retainer. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Maintenance & Support | NemesisNet' },
    { property: 'og:description', content: 'Routine troubleshooting, maintenance, and operational support. R850–R1,100/hour.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/maintenance' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Maintenance & Support | NemesisNet' },
    { name: 'twitter:description', content: 'Routine troubleshooting and maintenance. R850–R1,100/hour.' }
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
        'description': 'Routine troubleshooting and maintenance for websites and applications.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '850', 'priceCurrency': 'ZAR', 'description': 'Hourly rate from R850, support retainer available' },
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
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does maintenance cover?","acceptedAnswer":{"@type":"Answer","text":"Troubleshooting and diagnostics, routine plugin and module updates, configuration changes, minor operational fixes, and basic maintenance tasks within the purchased allowance."}},{"@type":"Question","name":"What is not included in maintenance?","acceptedAnswer":{"@type":"Answer","text":"Major application bug fixes, feature development, architectural changes, framework migrations, significant dependency upgrades requiring code changes, new CI/CD systems, and full observability implementations. Work requiring substantial engineering is separately billable."}},{"@type":"Question","name":"How does the support retainer work?","acceptedAnswer":{"@type":"Answer","text":"A monthly retainer that reserves a defined number of support hours. The exact number of hours and response targets are specified in the applicable retainer agreement. Additional hours beyond the included capacity are billed at the hourly rate."}}]})
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
