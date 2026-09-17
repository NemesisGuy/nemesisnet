<template>
  <div class="detail-page">
    <PageHeader title="Development Retainer" subtitle="Reserved application engineering capacity — features, bug fixes, refactoring, and technical improvements on a monthly basis." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Development Retainer</span>
        </div>

        <h2>What This Service Is</h2>
        <p>A monthly retainer that reserves application engineering capacity. This is where actual software development lives — feature development, bug fixes, refactoring, code changes, framework upgrades, testing, debugging, and technical debt reduction.</p>
        <p>The retainer purchases engineering capacity. It does not purchase unlimited development outcomes. If you have 10 hours per month, you receive up to 10 hours of engineering work. Anything beyond that is billed separately.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams that need ongoing application development</strong> but not enough to justify a full-time hire. <strong>Projects with a feature backlog</strong> that needs consistent progress. <strong>Clients who want predictable engineering costs</strong> with reserved monthly capacity.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Application bug fixes</li>
          <li><CheckCircle :size="18" /> Feature development</li>
          <li><CheckCircle :size="18" /> Refactoring and code improvements</li>
          <li><CheckCircle :size="18" /> Framework/library upgrades requiring development</li>
          <li><CheckCircle :size="18" /> Testing and debugging</li>
          <li><CheckCircle :size="18" /> Application architecture work</li>
          <li><CheckCircle :size="18" /> Technical debt reduction</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Infrastructure or DevOps management</li>
          <li><XCircle :size="18" /> CI/CD pipeline maintenance</li>
          <li><XCircle :size="18" /> Server hosting or monitoring</li>
          <li><XCircle :size="18" /> Routine support tasks (use Support Retainer)</li>
        </ul>
        <p class="scope-note">For infrastructure and DevOps work, see the DevOps Retainer. For routine support tasks, see the Support Retainer.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Hourly</h3>
            <div class="compare-price">R1,200 – R1,400/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for specific development tasks</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Monthly Retainer</h3>
            <div class="compare-price">From R7,500/month</div>
            <ul class="compare-list">
              <li>6 hours included per month</li>
              <li>Effective rate: R1,250/hr (vs R1,400 ad hoc)</li>
              <li>Features, fixes, and improvements</li>
              <li>Unused hours do not roll over</li>
              <li>Additional hours billed at hourly rate</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">The exact number of included hours is determined during scoping based on your development requirements and expected volume.</p>

        <div class="retainer-disclaimer">
          <p><strong>Reserved development capacity.</strong> This retainer reserves the stated application development capacity for each billing period. Unused capacity does not accumulate or roll over into subsequent periods. Additional work beyond the included capacity is billed separately.</p>
          <NuxtLink to="/legal/retainer-terms" class="retainer-terms-link">View Retainer Terms &amp; Conditions →</NuxtLink>
        </div>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Scoping Call</h3>
            <p>We assess your development backlog, priorities, and expected monthly engineering needs.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Monthly Capacity</h3>
            <p>You receive reserved engineering hours each month, allocated to your priorities.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Develop &amp; Deliver</h3>
            <p>Engineering work is completed within your allowance — features, fixes, refactoring, improvements.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Overage &amp; Review</h3>
            <p>If work exceeds the included hours, you are notified before additional billing. Monthly summary provided.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Support Retainer', description: 'Reserved support hours for troubleshooting and routine maintenance.', to: '/services/support-retainer' },
            { title: 'DevOps Retainer', description: 'Reserved infrastructure and DevOps engineering capacity.', to: '/services/devops-retainer' }
          ]"
          exploring-note="From support to full engineering capacity — choose the right retainer type."
          :cta="{ heading: 'Need ongoing development?', description: 'Reserved application engineering capacity for features, fixes, and improvements.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Hourly:</span> <strong>R1,200 – R1,400/hr</strong></li>
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
            <NuxtLink to="/services/devops-retainer" class="btn-glass">DevOps Retainer</NuxtLink>
            <NuxtLink to="/services/maintenance" class="btn-glass">Maintenance</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'Development Retainer — Reserved Engineering Hours | NemesisNet',
  meta: [
    { name: 'description', content: 'Monthly development retainer for features, bug fixes, refactoring, and technical improvements. From R7,500/month with defined engineering capacity.' },
    { property: 'og:title', content: 'Development Retainer | NemesisNet' },
    { property: 'og:description', content: 'Reserved application engineering capacity for features, fixes, and improvements. From R7,500/month.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/dev-retainer' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Development Retainer | Reserved Engineering Hours | NemesisNet' },
    { name: 'twitter:description', content: 'Reserved application engineering capacity for features, fixes, and improvements. From R7,500/month.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/dev-retainer' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Development Retainer',
        'description': 'Reserved application engineering capacity for features, bug fixes, refactoring, and technical improvements.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '7500', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M', 'description': 'Monthly retainer with reserved engineering hours' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/dev-retainer'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Development Retainer', 'item': 'https://nemesisnet.co.za/services/dev-retainer' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a development retainer?","acceptedAnswer":{"@type":"Answer","text":"A monthly retainer that reserves application engineering capacity for feature development, bug fixes, refactoring, framework upgrades, and technical improvements. The retainer purchases engineering capacity, not unlimited outcomes."}},{"@type":"Question","name":"What is not included in the development retainer?","acceptedAnswer":{"@type":"Answer","text":"Infrastructure management, DevOps work, CI/CD pipeline maintenance, server hosting, monitoring, and routine support tasks. These are covered by the DevOps Retainer and Support Retainer respectively."}},{"@type":"Question","name":"What happens if I exceed my included hours?","acceptedAnswer":{"@type":"Answer","text":"Additional work beyond the included capacity is billed at the applicable hourly rate. You are notified before additional billing occurs."}}]})
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
