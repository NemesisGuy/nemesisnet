<template>
  <div class="detail-page">
    <PageHeader title="Backup Management" subtitle="Managed backup configuration, storage, and recovery — defined by your data requirements." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Backup Management</span>
        </div>

        <h2>What This Service Is</h2>
        <p>Managed backup configuration, storage, and recovery. Backups are not included in Light Hosting by default — they are a separate service because backup requirements vary significantly between clients.</p>
        <p>A client requiring 5 GB with daily backups and 30-day retention has fundamentally different needs from a client requiring 500 GB with hourly backups, 90-day retention, multiple copies, and full disaster recovery. Backup pricing reflects those differences.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams that need managed backups for their production systems</strong> — databases, application files, configuration data, and uploaded assets. <strong>Organisations with compliance requirements</strong> for data retention. <strong>Clients who want professional backup management</strong> instead of DIY.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Backup configuration and setup</li>
          <li><CheckCircle :size="18" /> Database backups</li>
          <li><CheckCircle :size="18" /> Application and file backups</li>
          <li><CheckCircle :size="18" /> Configuration data backups</li>
          <li><CheckCircle :size="18" /> Retention policy management</li>
          <li><CheckCircle :size="18" /> Recovery procedures</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Storage costs (passed through or separately billed)</li>
          <li><XCircle :size="18" /> Disaster recovery (separate scope)</li>
          <li><XCircle :size="18" /> Egress and recovery costs (third-party)</li>
          <li><XCircle :size="18" /> Application hosting (use Light Hosting)</li>
        </ul>
        <p class="scope-note">Storage costs from providers like Backblaze B2 are passed through or separately billed. They are not silently absorbed into the hosting price.</p>

        <h2>Pricing</h2>
        <p><strong>Custom pricing</strong> — depends on:</p>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Total data size</li>
          <li><CheckCircle :size="18" /> Backup frequency (daily, hourly, etc.)</li>
          <li><CheckCircle :size="18" /> Retention period</li>
          <li><CheckCircle :size="18" /> Number of backup copies</li>
          <li><CheckCircle :size="18" /> Backup type (database, files, configuration)</li>
          <li><CheckCircle :size="18" /> Recovery requirements</li>
          <li><CheckCircle :size="18" /> Storage provider and costs</li>
        </ul>
        <p>The website displays "Custom" because final pricing depends on your specific backup requirements. Storage costs are identified separately.</p>

        <h2>Backup Architecture</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Assessment</h3>
            <p>We assess your data sources, volume, and recovery requirements to design the right backup strategy.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Configuration</h3>
            <p>Backup processes are configured — frequency, retention, storage destination, and encryption.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Storage</h3>
            <p>Backups are stored at the defined destination. Storage costs are identified separately.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Recovery</h3>
            <p>Recovery procedures are documented and tested. Restore process is defined in the service agreement.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Infrastructure hosting for deployed systems — does not include backups by default.', to: '/services/light-hosting' },
            { title: 'Observability', description: 'Monitoring, metrics, and logging for production systems.', to: '/services/observability' }
          ]"
          exploring-note="From basic hosting to full infrastructure management — backups are an optional add-on."
          :cta="{ heading: 'Need managed backups?', description: 'Custom backup configuration, storage, and recovery for your production data.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Pricing:</span> <strong>Custom</strong></li>
            <li><span>Storage:</span> <strong>Separately billed</strong></li>
            <li><span>Scope:</span> <strong>Project-based</strong></li>
            <li><span>Recovery:</span> <strong>Defined in agreement</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/services/observability" class="btn-glass">Observability</NuxtLink>
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
  title: 'Backup Management — Managed Backups & Recovery | NemesisNet',
  meta: [
    { name: 'description', content: 'Managed backup configuration, storage, and recovery. Custom pricing based on data size, frequency, and retention. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Backup Management | NemesisNet' },
    { property: 'og:description', content: 'Managed backup configuration, storage, and recovery. Custom pricing.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/backup-management' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Backup Management | Managed Backups & Recovery | NemesisNet' },
    { name: 'twitter:description', content: 'Managed backup configuration, storage, and recovery. Custom pricing.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/backup-management' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Backup Management',
        'description': 'Managed backup configuration, storage, and recovery for production systems.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'priceCurrency': 'ZAR', 'description': 'Custom pricing based on data size, frequency, and retention requirements' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/backup-management'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Backup Management', 'item': 'https://nemesisnet.co.za/services/backup-management' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why are backups not included in Light Hosting?","acceptedAnswer":{"@type":"Answer","text":"Backup requirements vary significantly between clients. A client needing 5 GB daily backups has fundamentally different needs from one requiring 500 GB hourly backups with 90-day retention. Backup pricing reflects those differences."}},{"@type":"Question","name":"What are the storage costs?","acceptedAnswer":{"@type":"Answer","text":"Storage costs from providers like Backblaze B2 are passed through or separately billed. They are not silently absorbed into the hosting price. Final pricing depends on your specific backup requirements."}},{"@type":"Question","name":"What is included in Backup Management?","acceptedAnswer":{"@type":"Answer","text":"Backup configuration, database backups, application and file backups, retention policy management, and recovery procedures. Storage costs are identified separately."}}]})
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
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .detail-sidebar { position: static; } .compare-grid { grid-template-columns: 1fr; } }
</style>
