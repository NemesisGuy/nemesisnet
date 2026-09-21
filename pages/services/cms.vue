<template>
  <div class="detail-page">
    <PageHeader title="CMS Development" subtitle="WordPress, WooCommerce, and CMS projects — custom themes, plugin development, and integration work." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">CMS Development</span>
        </div>

        <h2>What It Is</h2>
        <p>Custom WordPress and CMS development — theme builds, plugin development, WooCommerce integration, content architecture, and migration work. Not template installs. Custom engineering on top of CMS platforms when a CMS is the right tool for the job.</p>
        <p>CMS work is scoped separately from custom application development. If the project needs a CMS, this is the service. If it needs a custom app, see Business Systems or App Starter instead.</p>

        <h2>Who It's For</h2>
        <p><strong>Businesses that need a WordPress or WooCommerce site</strong> with custom functionality beyond what templates offer. <strong>Teams migrating from one CMS to another</strong> and need the content architecture done right. <strong>Clients who want a custom theme</strong> built on their brand rather than a off-the-shelf template. <strong>E-commerce stores</strong> needing WooCommerce configuration, payment integration, or custom plugin work.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Custom WordPress theme development</li>
          <li><CheckCircle :size="18" /> Plugin development and customisation</li>
          <li><CheckCircle :size="18" /> WooCommerce setup, configuration, and payment integration</li>
          <li><CheckCircle :size="18" /> Content architecture and taxonomy design</li>
          <li><CheckCircle :size="18" /> CMS migration and data import</li>
          <li><CheckCircle :size="18" /> Performance optimisation and caching</li>
          <li><CheckCircle :size="18" /> SEO plugin configuration and on-page SEO</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Custom application development (see Business Systems)</li>
          <li><XCircle :size="18" /> AI or MCP integrations (see AI Development)</li>
          <li><XCircle :size="18" /> Hosting or server management (see Light Hosting)</li>
          <li><XCircle :size="18" /> Ongoing maintenance beyond initial build (see Maintenance &amp; Support)</li>
        </ul>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card compare-card--featured">
            <h3>Project-Based</h3>
            <div class="compare-price">From R7,000</div>
            <ul class="compare-list">
              <li>Scoped per project</li>
              <li>Fixed price after discovery</li>
              <li>Covers theme, plugin, or migration work</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Ongoing Work</h3>
            <div class="compare-price">R850 – R1,100/hr</div>
            <ul class="compare-list">
              <li>Ad-hoc CMS development tasks</li>
              <li>Billed per task or per hour</li>
              <li>Plugin updates, content changes, fixes</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">CMS projects follow the same scoping process as other project builds. A short discovery call determines scope and confirms pricing before work begins.</p>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Discovery</h3>
            <p>We review your content requirements, existing site (if any), and business goals. This determines whether WordPress is the right fit or if a custom solution is needed.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Build</h3>
            <p>Custom theme development, plugin configuration, content architecture, and integration work. Milestone-based delivery so you see progress at each stage.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Launch</h3>
            <p>Deployment, DNS configuration, SSL setup, and handover documentation. Your team gets access credentials and a walkthrough of the admin interface.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Light Hosting', description: 'Hosting, SSL, and uptime monitoring for your CMS once it\'s live.', to: '/services/light-hosting' },
            { title: 'Maintenance & Support', description: 'Ongoing troubleshooting, updates, and configuration changes.', to: '/services/maintenance' }
          ]"
          exploring-note="From build to hosting to ongoing support — we cover the full lifecycle."
          :cta="{ heading: 'Need a CMS built or migrated?', description: 'WordPress, WooCommerce, and CMS projects — custom themes, plugins, and integration work.', buttonLabel: 'Get in Touch', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Project:</span> <strong>From R7,000</strong></li>
            <li><span>Hourly:</span> <strong>R850 – R1,100/hr</strong></li>
            <li><span>Platforms:</span> <strong>WordPress, WooCommerce</strong></li>
            <li><span>Delivery:</span> <strong>2–4 weeks typical</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/services/maintenance" class="btn-glass">Maintenance &amp; Support</NuxtLink>
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
  title: 'CMS Development | WordPress & WooCommerce | NemesisNet',
  meta: [
    { name: 'description', content: 'Custom WordPress and CMS development: themes, plugins, WooCommerce, migration. From R7,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'CMS Development | NemesisNet' },
    { property: 'og:description', content: 'Custom WordPress and CMS development: themes, plugins, WooCommerce, and migration. From R7,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/cms' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'CMS Development | NemesisNet' },
    { name: 'twitter:description', content: 'Custom WordPress and CMS development: themes, plugins, WooCommerce. From R7,000.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/cms' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'CMS Development',
        'description': 'Custom WordPress and CMS development: theme builds, plugin development, WooCommerce integration, and migration work.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '7000', 'priceCurrency': 'ZAR', 'description': 'Starting price for CMS projects' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/cms'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'CMS Development', 'item': 'https://nemesisnet.co.za/services/cms' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do you build custom WordPress themes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Custom WordPress theme development built on your brand identity, not off-the-shelf templates. Includes responsive design, performance optimisation, and admin interface customisation."}},{"@type":"Question","name":"Can you migrate from another CMS to WordPress?","acceptedAnswer":{"@type":"Answer","text":"Yes. CMS migration and data import is included. We handle content architecture, taxonomy design, and data migration from other platforms to WordPress or WooCommerce."}},{"@type":"Question","name":"Is hosting included?","acceptedAnswer":{"@type":"Answer","text":"Hosting is a separate service. See Light Hosting for hosting, SSL, uptime monitoring, and security patches. CMS development covers the build, not the hosting."}}]})
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
.compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
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
