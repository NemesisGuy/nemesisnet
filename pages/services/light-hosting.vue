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
        <p>Light Hosting is managed hosting billed monthly per project — pick the tier that matches the system: a static site, a small app, a CMS, or a full-stack business application. Every tier bundles hosting, SSL management, Cloudflare/DNS configuration, uptime monitoring, and OS security patches. You built it or we built it, either way it stays online without you thinking about infrastructure.</p>
        <p>No feature development, no bug fixes, no new integrations. Just reliable hosting with someone watching the dashboards so you do not have to. You pay for managed hosting as a service — the underlying infrastructure is our implementation detail, not your line item.</p>

        <h2>Who It's For</h2>
        <p><strong>Static and brochure sites</strong> that need fast, boringly reliable hosting. <strong>Small apps and APIs</strong> (PocketBase, Node, small databases) that need Docker hosting without DevOps overhead. <strong>WordPress and WooCommerce sites</strong> that need application-plus-database hosting. <strong>Business systems</strong> (Spring Boot, full-stack apps) that need allocated resources and monitoring. <strong>Anyone who wants peace of mind</strong> without paying for a full support or DevOps retainer.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Containerised deployment and hosting</li>
          <li><CheckCircle :size="18" /> Domain and SSL configuration assistance</li>
          <li><CheckCircle :size="18" /> Client-owned Cloudflare/DNS configuration support</li>
          <li><CheckCircle :size="18" /> Basic uptime monitoring and alerts</li>
          <li><CheckCircle :size="18" /> Infrastructure-level OS security maintenance</li>
          <li><CheckCircle :size="18" /> Monthly status report</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Application bug fixing or code changes</li>
          <li><XCircle :size="18" /> Feature development or new builds</li>
          <li><XCircle :size="18" /> Application dependency upgrades requiring code changes</li>
          <li><XCircle :size="18" /> Application rebuilds caused by dependency or framework changes</li>
          <li><XCircle :size="18" /> CI/CD pipeline management</li>
          <li><XCircle :size="18" /> Full observability (see Observability service)</li>
          <li><XCircle :size="18" /> Backup storage or disaster recovery (see Backup Management)</li>
          <li><XCircle :size="18" /> Unlimited redeployment or reconfiguration work</li>
          <li><XCircle :size="18" /> Uptime or SLA guarantees controlled by third-party providers</li>
          <li><XCircle :size="18" /> Domain registration fees (paid directly to your registrar)</li>
        </ul>
        <p class="scope-note">SSL certificates issued through Let's Encrypt or Cloudflare carry no separate charge. Ongoing SSL configuration, renewal management, and monitoring are bundled into every hosting tier — they are part of the service, not itemized extras. Deployment and configuration work is engineering; the certificate itself is free.</p>

        <h2>What You Get Each Month</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Infrastructure Monitoring</h3>
            <p>24/7 uptime monitoring with instant alerts. We know if your system goes down before your users do.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Security Patching</h3>
            <p>OS and infrastructure security updates applied during maintenance windows. Application dependency upgrades requiring code changes are separately billable engineering work.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Monthly Report</h3>
            <p>Uptime stats, patch log, and any issues flagged. You always know the state of your infrastructure.</p>
          </div>
        </div>

        <h2>Hosting Tiers</h2>
        <p>One tier per project, billed monthly. Project builds include initial deployment and setup — ongoing hosting below is always billed separately.</p>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Static</h3>
            <div class="compare-price">R300/mo</div>
            <ul class="compare-list">
              <li>Static and brochure websites</li>
              <li>Hosting + SSL management</li>
              <li>Cloudflare/DNS configuration</li>
              <li>Basic uptime monitoring</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>App</h3>
            <div class="compare-price">R600/mo</div>
            <ul class="compare-list">
              <li>Small apps and APIs</li>
              <li>Docker hosting + SSL management</li>
              <li>Cloudflare/DNS configuration</li>
              <li>Uptime monitoring</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>CMS</h3>
            <div class="compare-price">R850/mo</div>
            <ul class="compare-list">
              <li>WordPress / WooCommerce + database</li>
              <li>Application + database hosting</li>
              <li>SSL management + Cloudflare/DNS</li>
              <li>Uptime monitoring</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Business</h3>
            <div class="compare-price">From R1,200/mo</div>
            <ul class="compare-list">
              <li>Full-stack and business applications</li>
              <li>Application + database + Docker</li>
              <li>Allocated resources + monitoring</li>
              <li>OS security maintenance</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Custom / Production</h3>
            <div class="compare-price">Quote</div>
            <ul class="compare-list">
              <li>High-traffic or complex systems</li>
              <li>Dedicated resources + redundancy</li>
              <li>Backup and recovery planning</li>
              <li>Scoped per project</li>
            </ul>
          </div>
        </div>

        <h2>Optional Add-Ons</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> External/off-site backups — +R100–R200/month depending on storage (heavy needs quoted)</li>
          <li><CheckCircle :size="18" /> Secondary/failover node — +R100–R200/month</li>
          <li><CheckCircle :size="18" /> Priority support response — +R200–R500/month</li>
          <li><CheckCircle :size="18" /> Additional storage — quoted (pass-through + management)</li>
          <li><CheckCircle :size="18" /> Major migration or recovery work — quoted separately</li>
        </ul>
        <p class="scope-note">Domain registration and renewal are paid directly to your registrar — we handle the DNS configuration. Every tier already includes SSL management, Cloudflare/DNS setup, monitoring, and OS security patches; the add-ons above cover everything beyond that baseline.</p>
        <p>If your system needs grow beyond basic hosting, the Support Retainer (from R7,500/month) provides reserved support capacity for troubleshooting and maintenance. The DevOps Retainer covers infrastructure and CI/CD management.</p>

        <ServiceFooter
          :exploring="[
            { title: 'Support Retainer', description: 'Reserved support capacity for troubleshooting and routine maintenance.', to: '/services/support-retainer' },
            { title: 'Backup Management', description: 'Managed backup configuration, storage, and recovery.', to: '/services/backup-management' }
          ]"
          exploring-note="Need more hands-on support or managed backups? These services scale up from light hosting."
          :reading="[
            { label: 'Self-Hosted CI/CD on a Home Rack — GitHub, Gitea, Woodpecker & Portainer', href: 'https://blog.nemesisnet.co.za/self-hosted-ci-cd-on-a-home-rack-github-gitea-woodpecker-and-portainer/' },
            { label: 'Self-Hosted AI vs Cloud APIs — What South African Businesses Need to Know', href: 'https://blog.nemesisnet.co.za/self-hosted-ai-vs-cloud-apis-what-south-african-businesses-need-to-know/' }
          ]"
          :cta="{ heading: 'Ready to get hosted?', description: 'Infrastructure hosting for deployed systems — SSL, monitoring, and security patches included.', buttonLabel: 'Choose Light Hosting', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Price:</span> <strong>From R300/month</strong></li>
            <li><span>Billing:</span> <strong>Monthly</strong></li>
            <li><span>Tiers:</span> <strong>Static → Custom</strong></li>
            <li><span>Response:</span> <strong>Best-effort</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/support-retainer" class="btn-glass">Support Retainer</NuxtLink>
            <NuxtLink to="/services/backup-management" class="btn-glass">Backup Management</NuxtLink>
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
  title: 'Managed Hosting | From R300/mo | NemesisNet',
  meta: [
    { name: 'description', content: 'Managed hosting tiers from R300/month: static, app, CMS, business hosting with SSL, monitoring, patches. South Africa.' },
    { property: 'og:title', content: 'Managed Hosting | NemesisNet' },
    { property: 'og:description', content: 'Hosting tiers from R300/month: static, app, CMS, business. SSL, monitoring, patches.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/light-hosting' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Managed Hosting | From R300/mo | NemesisNet' },
    { name: 'twitter:description', content: 'Hosting tiers from R300/month: static, app, CMS, business. SSL, monitoring, patches.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/light-hosting' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Light Hosting',
        'description': 'Managed hosting tiers from R300/month: static, app, CMS, and business hosting with SSL management, monitoring, and security patches.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '300', 'priceCurrency': 'ZAR', 'billingDuration': 'P1M', 'description': 'Starting price for managed hosting tiers' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/light-hosting'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Light Hosting', 'item': 'https://nemesisnet.co.za/services/light-hosting' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Light Hosting?","acceptedAnswer":{"@type":"Answer","text":"Managed hosting billed monthly per project, from R300/month. Tiers cover static sites, small apps, CMS, business applications, and custom production systems. Every tier bundles hosting, SSL management, Cloudflare/DNS configuration, monitoring, and OS security patches."}},{"@type":"Question","name":"Where are sites hosted?","acceptedAnswer":{"@type":"Answer","text":"On managed infrastructure run by NemesisNet. Domain registration is paid directly to your registrar; DNS configuration is handled by us. SSL management is bundled, not itemized."}},{"@type":"Question","name":"Do you handle application updates?","acceptedAnswer":{"@type":"Answer","text":"Light Hosting covers infrastructure-level security patching only. Application dependency upgrades, bug fixes, and feature development are not included and are available through separate engineering services."}}]})
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
.process-step h3 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.compare-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0; }
.compare-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.compare-card h3 { color: var(--accent-color); font-size: 1rem; margin: 0; }
.compare-price { font-size: 1.5rem; font-weight: 700; color: var(--text-color); }
.compare-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; flex: 1; }
.compare-list li { padding: 4px 0; color: var(--text-muted); }
.compare-list li::before { content: '✓ '; color: #22c55e; }

.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h3 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 100px 1fr; gap: 8px; align-items: start; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .detail-sidebar { position: static; }
  .process-steps { grid-template-columns: 1fr; }
}
</style>
