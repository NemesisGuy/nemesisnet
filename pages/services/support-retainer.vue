<template>
  <div class="detail-page">
    <PageHeader title="Support Retainer" subtitle="Reserved support capacity for troubleshooting, routine maintenance, and operational assistance — without a full engineering commitment." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Support Retainer</span>
        </div>

        <h2>What This Service Is</h2>
        <p>A monthly retainer that reserves a defined number of support hours for troubleshooting, routine maintenance, configuration changes, and operational assistance. This is not unlimited support — you purchase a defined capacity each month.</p>
        <p>The Support Retainer covers routine and predictable work that does not require substantial application development. If work requires meaningful code changes, it moves to the Development Retainer or is billed separately.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with deployed systems that need occasional help</strong> — not enough to justify a full-time hire, but more than ad-hoc hourly billing. <strong>Projects that are feature-complete</strong> but need ongoing operational support. <strong>Clients who want predictable monthly support costs</strong> without committing to large engineering retainers.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Troubleshooting and diagnostics</li>
          <li><CheckCircle :size="18" /> Routine plugin/module updates</li>
          <li><CheckCircle :size="18" /> Configuration changes</li>
          <li><CheckCircle :size="18" /> Minor operational fixes</li>
          <li><CheckCircle :size="18" /> Assistance diagnosing service issues</li>
          <li><CheckCircle :size="18" /> Basic maintenance within purchased allowance</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Major application bug fixes</li>
          <li><XCircle :size="18" /> Feature development</li>
          <li><XCircle :size="18" /> Architectural changes</li>
          <li><XCircle :size="18" /> Framework migrations</li>
          <li><XCircle :size="18" /> Significant dependency upgrades requiring code changes</li>
          <li><XCircle :size="18" /> CI/CD pipeline implementation</li>
          <li><XCircle :size="18" /> Full observability implementations</li>
        </ul>
        <p class="scope-note">Work requiring substantial engineering effort is separately billable through the Development Retainer or hourly engineering.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Hourly</h3>
            <div class="compare-price">R850 – R1,100/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for occasional support</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Monthly Retainer</h3>
            <div class="compare-price">From R7,500/month</div>
            <ul class="compare-list">
              <li>8 hours included per month</li>
              <li>Effective rate: R938/hr (vs R1,100 ad hoc)</li>
              <li>Defined response target</li>
              <li>Unused hours do not roll over</li>
              <li>Additional hours billed at hourly rate</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">The exact number of included hours is determined during scoping based on your support requirements and expected volume.</p>

        <div class="retainer-disclaimer">
          <p><strong>Important:</strong> Retainer fees cover ongoing service availability and the specific services included in this package. They are not prepaid development hours or a bank of development credit. Unused retainer capacity does not accumulate or roll over into future development work. New features, enhancements, and work outside the included scope are quoted separately.</p>
          <NuxtLink to="/legal/retainer-terms" class="retainer-terms-link">View Retainer Terms &amp; Conditions →</NuxtLink>
        </div>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Scoping Call</h3>
            <p>We assess your support needs, expected volume, and response requirements to define the right capacity level.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Monthly Capacity</h3>
            <p>You receive a defined number of support hours each month, reserved for your use.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Request &amp; Deliver</h3>
            <p>Submit support requests as needed. Tasks within scope are handled within your allowance.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Overage &amp; Review</h3>
            <p>If work exceeds the included hours, you are notified before additional billing. Monthly summary provided.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Infrastructure hosting for deployed systems — SSL, monitoring, and security patches.', to: '/services/light-hosting' },
            { title: 'Development Retainer', description: 'Reserved application engineering capacity for features, fixes, and improvements.', to: '/services/dev-retainer' }
          ]"
          exploring-note="From basic hosting to full engineering capacity — choose the right level."
          :cta="{ heading: 'Need ongoing support?', description: 'A defined monthly support capacity for troubleshooting, maintenance, and operational assistance.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
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
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/services/dev-retainer" class="btn-glass">Development Retainer</NuxtLink>
            <NuxtLink to="/services/devops-retainer" class="btn-glass">DevOps Retainer</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'Support Retainer — Reserved Support Hours | NemesisNet',
  meta: [
    { name: 'description', content: 'Monthly support retainer for troubleshooting, maintenance, and operational assistance. From R7,500/month with defined capacity. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Support Retainer | NemesisNet' },
    { property: 'og:description', content: 'Reserved support capacity for troubleshooting, maintenance, and operational assistance. From R7,500/month.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/support-retainer' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Support Retainer | Reserved Support Hours | NemesisNet' },
    { name: 'twitter:description', content: 'Reserved support capacity for troubleshooting, maintenance, and operational assistance. From R7,500/month.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/support-retainer' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Support Retainer',
        'description': 'Reserved support capacity for troubleshooting, routine maintenance, and operational assistance.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '7500', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M', 'description': 'Monthly retainer with reserved support hours' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/support-retainer'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Support Retainer', 'item': 'https://nemesisnet.co.za/services/support-retainer' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a support retainer?","acceptedAnswer":{"@type":"Answer","text":"A monthly retainer that reserves a defined number of support hours for troubleshooting, routine maintenance, configuration changes, and operational assistance. It is not unlimited support — you purchase a defined capacity each month."}},{"@type":"Question","name":"What is not included in the support retainer?","acceptedAnswer":{"@type":"Answer","text":"Major application bug fixes, feature development, architectural changes, framework migrations, CI/CD pipeline implementation, and full observability implementations. Work requiring substantial engineering is separately billable."}},{"@type":"Question","name":"What happens if I exceed my included hours?","acceptedAnswer":{"@type":"Answer","text":"Additional work beyond the included capacity is billed at the applicable hourly rate. You are notified before additional billing occurs."}}]})
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
.process-steps .process-step { flex: 0 1 calc(50% - 10px); min-width: 280px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h3 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
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
.retainer-disclaimer { background: var(--glass-bg); border: 1px solid var(--accent-color); border-radius: 14px; padding: 20px; margin: 24px 0; }
.retainer-disclaimer p { margin: 0 0 10px; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.retainer-terms-link { color: var(--accent-color); text-decoration: none; font-size: 0.9rem; }
.retainer-terms-link:hover { text-decoration: underline; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .detail-sidebar { position: static; } .process-steps { grid-template-columns: 1fr; } .compare-grid { grid-template-columns: 1fr; } }
</style>
