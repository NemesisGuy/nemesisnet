<template>
  <div class="detail-page">
    <PageHeader title="Observability" subtitle="Monitoring, metrics, logging, and dashboards — full visibility into your production systems." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Observability</span>
        </div>

        <h2>What This Service Is</h2>
        <p>Full observability goes beyond basic uptime monitoring. It provides comprehensive visibility into your systems through metrics collection, log aggregation, dashboards, alerting, and retention — so you can understand not just whether your system is up, but how it is performing.</p>
        <p>Basic uptime monitoring (included with Light Hosting) checks availability. Observability tells you what is happening inside your systems.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with production systems that need deep visibility</strong> — multiple services, complex deployments, performance-critical applications. <strong>Organisations that need metrics and logging for debugging and optimisation.</strong> <strong>Projects where understanding system behaviour is critical</strong> to business operations.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Prometheus metrics collection</li>
          <li><CheckCircle :size="18" /> Grafana dashboards</li>
          <li><CheckCircle :size="18" /> Log aggregation and centralisation</li>
          <li><CheckCircle :size="18" /> Alerting and notification configuration</li>
          <li><CheckCircle :size="18" /> Metrics and log retention</li>
          <li><CheckCircle :size="18" /> Service-specific monitoring</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Application feature development</li>
          <li><XCircle :size="18" /> Infrastructure hosting (use Light Hosting)</li>
          <li><XCircle :size="18" /> CI/CD pipeline management (use DevOps Retainer)</li>
          <li><XCircle :size="18" /> Disaster recovery (separate scope)</li>
        </ul>

        <h2>Basic vs Full Observability</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Basic Monitoring</h3>
            <div class="compare-price">Included with Light Hosting</div>
            <ul class="compare-list">
              <li>Service availability checks</li>
              <li>Basic alerts</li>
              <li>Uptime visibility</li>
              <li>Client notification</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Full Observability</h3>
            <div class="compare-price">Custom pricing</div>
            <ul class="compare-list">
              <li>Prometheus + Grafana</li>
              <li>Log aggregation</li>
              <li>Dashboards and alerting</li>
              <li>Metrics and log retention</li>
              <li>Service-specific monitoring</li>
            </ul>
          </div>
        </div>

        <h2>Pricing</h2>
        <p><strong>Custom pricing</strong> — depends on the number of services, containers, metrics volume, log volume, retention period, dashboard requirements, alerting requirements, and storage requirements.</p>
        <p>For serious observability, a separate monitoring instance may be required. If monitoring is hosted on the same VPS as the application, a VPS outage can also take down the monitoring system. That additional infrastructure is priced separately.</p>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Basic uptime monitoring included with infrastructure hosting.', to: '/services/light-hosting' },
            { title: 'DevOps Retainer', description: 'Ongoing infrastructure management and operational automation.', to: '/services/devops-retainer' }
          ]"
          exploring-note="From basic uptime monitoring to full observability — choose the right visibility level."
          :cta="{ heading: 'Need full system visibility?', description: 'Custom observability setup — metrics, logging, dashboards, and alerting.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Pricing:</span> <strong>Custom</strong></li>
            <li><span>Scope:</span> <strong>Project-based</strong></li>
            <li><span>Infrastructure:</span> <strong>Separate where needed</strong></li>
            <li><span>Maintenance:</span> <strong>DevOps Retainer</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/services/devops-retainer" class="btn-glass">DevOps Retainer</NuxtLink>
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
  title: 'Observability — Metrics, Logging & Dashboards | NemesisNet',
  meta: [
    { name: 'description', content: 'Full observability for production systems: Prometheus, Grafana, log aggregation, dashboards, and alerting. Custom pricing. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Observability | NemesisNet' },
    { property: 'og:description', content: 'Monitoring, metrics, logging, and dashboards for production systems. Custom pricing.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/observability' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Observability | Metrics, Logging & Dashboards | NemesisNet' },
    { name: 'twitter:description', content: 'Full observability for production systems. Custom pricing.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/observability' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Observability',
        'description': 'Full observability for production systems: metrics, logging, dashboards, and alerting.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'priceCurrency': 'ZAR', 'description': 'Custom pricing based on services, volume, and requirements' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/observability'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Observability', 'item': 'https://nemesisnet.co.za/services/observability' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is observability?","acceptedAnswer":{"@type":"Answer","text":"Full observability provides comprehensive visibility into your systems through metrics collection, log aggregation, dashboards, alerting, and retention. It goes beyond basic uptime monitoring to tell you how your systems are performing."}},{"@type":"Question","name":"How is observability different from basic monitoring?","acceptedAnswer":{"@type":"Answer","text":"Basic monitoring checks service availability and sends alerts. Full observability includes Prometheus metrics, Grafana dashboards, log aggregation, and detailed alerting — giving you deep insight into system behaviour."}},{"@type":"Question","name":"Why might I need a separate monitoring instance?","acceptedAnswer":{"@type":"Answer","text":"If monitoring is hosted on the same VPS as the application, a VPS outage can also take down the monitoring system. For serious observability, a separate monitoring instance ensures visibility even during infrastructure failures."}}]})
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
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 100px 1fr; gap: 8px; align-items: start; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .detail-sidebar { position: static; } .compare-grid { grid-template-columns: 1fr; } }
</style>
