<template>
  <div class="detail-page">
    <PageHeader title="DevOps Retainer" subtitle="Reserved infrastructure and DevOps engineering capacity — CI/CD, deployments, container management, and operational automation." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">DevOps Retainer</span>
        </div>

        <h2>What This Service Is</h2>
        <p>A monthly retainer that reserves DevOps and infrastructure engineering capacity. This covers the operational side of running production systems — CI/CD maintenance, container management, deployment troubleshooting, infrastructure configuration, and operational automation.</p>
        <p>This is not application development. If you need feature work, bug fixes, or code changes, see the Development Retainer.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with production infrastructure that needs ongoing attention</strong> — container orchestration, deployment pipelines, infrastructure configuration. <strong>Companies without a dedicated DevOps engineer</strong> who need infrastructure managed professionally. <strong>Projects where infrastructure complexity is growing</strong> and needs expert management.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Infrastructure administration and configuration</li>
          <li><CheckCircle :size="18" /> Container management and deployment</li>
          <li><CheckCircle :size="18" /> CI/CD pipeline maintenance</li>
          <li><CheckCircle :size="18" /> Deployment troubleshooting</li>
          <li><CheckCircle :size="18" /> Infrastructure security maintenance</li>
          <li><CheckCircle :size="18" /> Infrastructure improvements and optimisation</li>
          <li><CheckCircle :size="18" /> Operational automation</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Application feature development</li>
          <li><XCircle :size="18" /> Application bug fixes</li>
          <li><XCircle :size="18" /> Application architecture work</li>
          <li><XCircle :size="18" /> Framework or library upgrades requiring code changes</li>
          <li><XCircle :size="18" /> New CI/CD system implementation (project-scoped separately)</li>
        </ul>
        <p class="scope-note">Third-party infrastructure costs (VPS, storage, bandwidth) remain separate and are not included in the retainer.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Hourly</h3>
            <div class="compare-price">R1,200 – R1,400/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for specific DevOps tasks</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Monthly Retainer</h3>
            <div class="compare-price">From R7,500/month</div>
            <ul class="compare-list">
              <li>6 hours included per month</li>
              <li>Effective rate: R1,250/hr (vs R1,400 ad hoc)</li>
              <li>Infrastructure maintenance and improvements</li>
              <li>CI/CD pipeline management</li>
              <li>Additional hours billed at hourly rate</li>
            </ul>
          </div>
        </div>

        <div class="retainer-disclaimer">
          <p><strong>Reserved DevOps capacity.</strong> This retainer reserves the stated infrastructure and DevOps engineering capacity for each billing period. Unused capacity does not accumulate or roll over into subsequent periods. Additional work beyond the included capacity is billed separately.</p>
          <NuxtLink to="/legal/retainer-terms" class="retainer-terms-link">View Retainer Terms &amp; Conditions →</NuxtLink>
        </div>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Infrastructure Review</h3>
            <p>We assess your current infrastructure, pipelines, and operational needs to define the right capacity level.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Monthly Capacity</h3>
            <p>You receive reserved DevOps engineering hours each month for infrastructure work.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Execute &amp; Maintain</h3>
            <p>Infrastructure work is completed within your allowance — deployments, configuration, troubleshooting, automation.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Report &amp; Review</h3>
            <p>Monthly summary of infrastructure work completed, improvements made, and recommendations.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'CI/CD Engineering', description: 'New CI/CD pipeline implementation and architecture — project-scoped.', to: '/services/cicd-engineering' },
            { title: 'Support Retainer', description: 'Reserved support hours for troubleshooting and routine maintenance.', to: '/services/support-retainer' }
          ]"
          exploring-note="From pipeline builds to ongoing infrastructure management — choose the right service."
          :cta="{ heading: 'Need infrastructure managed?', description: 'Reserved DevOps engineering capacity for CI/CD, deployments, and infrastructure.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
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
            <NuxtLink to="/services/cicd-engineering" class="btn-glass">CI/CD Engineering</NuxtLink>
            <NuxtLink to="/services/support-retainer" class="btn-glass">Support Retainer</NuxtLink>
            <NuxtLink to="/services/dev-retainer" class="btn-glass">Development Retainer</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'DevOps Retainer — Infrastructure & CI/CD Management | NemesisNet',
  meta: [
    { name: 'description', content: 'Monthly DevOps retainer for infrastructure management, CI/CD maintenance, container management, and operational automation. From R7,500/month.' },
    { property: 'og:title', content: 'DevOps Retainer | NemesisNet' },
    { property: 'og:description', content: 'Reserved DevOps engineering capacity for CI/CD, deployments, and infrastructure management. From R7,500/month.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/devops-retainer' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'DevOps Retainer | Infrastructure & CI/CD | NemesisNet' },
    { name: 'twitter:description', content: 'Reserved DevOps engineering capacity for CI/CD, deployments, and infrastructure management. From R7,500/month.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/devops-retainer' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'DevOps Retainer',
        'description': 'Reserved DevOps and infrastructure engineering capacity for CI/CD, deployments, and operational automation.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '7500', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M', 'description': 'Monthly retainer with reserved DevOps engineering hours' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/devops-retainer'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'DevOps Retainer', 'item': 'https://nemesisnet.co.za/services/devops-retainer' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a DevOps retainer?","acceptedAnswer":{"@type":"Answer","text":"A monthly retainer that reserves DevOps and infrastructure engineering capacity for CI/CD maintenance, container management, deployment troubleshooting, and operational automation."}},{"@type":"Question","name":"What is not included in the DevOps retainer?","acceptedAnswer":{"@type":"Answer","text":"Application feature development, bug fixes, architecture work, framework upgrades requiring code changes, and new CI/CD system implementation. Third-party infrastructure costs remain separate."}},{"@type":"Question","name":"Can I use the DevOps retainer for new CI/CD implementation?","acceptedAnswer":{"@type":"Answer","text":"New CI/CD system implementation is generally a project. Ongoing pipeline maintenance is covered by the retainer. See CI/CD Engineering for new implementations."}}]})
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
