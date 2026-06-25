<template>
  <div class="detail-page">
    <PageHeader title="Static &amp; Brochure Sites" subtitle="Fast, performant websites for display — no backend, no complexity, just content that loads instantly." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Static &amp; Brochure Sites</span>
        </div>

        <h2>What It Is</h2>
        <p>A static or brochure website is a content-focused site with no backend, no user accounts, and no database. It displays information — your business, your work, your contact details — and does it fast. These sites are built with Nuxt (static generation), plain HTML, or lightweight Vue/React frontends and deployed behind Docker + Nginx.</p>
        <p>No login forms. No dashboards. No data processing. Just a clean, fast website that loads in under a second and works perfectly on every device.</p>

        <h2>Who It's For</h2>
        <p><strong>Businesses that need an online presence</strong> — a landing page, portfolio, or company brochure site. <strong>Professionals and freelancers</strong> who want to showcase their work without maintaining a backend. <strong>Startups pre-launch</strong> that need a clean page to collect emails or explain their product. <strong>Any project where the goal is to inform, not to interact.</strong></p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Custom-designed responsive frontend (Nuxt static, Vue, or React)</li>
          <li><CheckCircle :size="18" /> Docker + Nginx deployment included</li>
          <li><CheckCircle :size="18" /> Basic SEO setup (meta tags, Open Graph, sitemap)</li>
          <li><CheckCircle :size="18" /> Performance optimisation (lazy loading, compressed assets)</li>
          <li><CheckCircle :size="18" /> SSL certificate and domain configuration</li>
          <li><CheckCircle :size="18" /> Contact form integration (if needed)</li>
          <li><CheckCircle :size="18" /> Analytics setup (optional)</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> User authentication or login systems</li>
          <li><XCircle :size="18" /> Database or data storage</li>
          <li><XCircle :size="18" /> Admin dashboards or content management</li>
          <li><XCircle :size="18" /> API integrations or backend logic</li>
          <li><XCircle :size="18" /> E-commerce or payment processing</li>
          <li><XCircle :size="18" /> Ongoing hosting management (available as add-on)</li>
        </ul>

        <h2>Timeline Breakdown</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Week 1 — Discovery &amp; Design</h4>
            <p>Understand your brand, content, and goals. Create wireframes and a visual direction. Lock the design before any code is written.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Week 2 — Build &amp; Content</h4>
            <p>Develop the responsive frontend. Integrate your content, images, and copy. Set up SEO meta tags and performance optimisations.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Week 3 — Review &amp; Revisions</h4>
            <p>Client review and feedback rounds. Adjust design, content, and layout based on your input. Up to two revision rounds included.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Week 4 — Deploy &amp; Launch</h4>
            <p>Docker deployment, SSL setup, domain configuration, and final testing. Your site goes live with monitoring in place.</p>
          </div>
        </div>

        <h2>How Pricing Works</h2>
        <p>Starting from <strong>R10,000</strong> for a simple single-page site. Most brochure sites land between <strong>R15,000–R25,000</strong> depending on number of pages, custom design complexity, and whether you need animations or interactive elements.</p>
        <p>Factors that push the price higher: custom illustrations or animations, multi-language support, extensive content migration, and integration with third-party booking or form tools.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>Bored Room Cafe</h4>
            <p>Hospitality management system with a public-facing brochure site.</p>
            <NuxtLink to="/projects/bored-room-cafe" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>NemesisNet WordPress Theme</h4>
            <p>Custom WordPress theme with glassmorphic dark/light UI.</p>
            <NuxtLink to="/projects/nemesisnet-wordpress-theme" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Scope This Project →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>2–4 Weeks</strong></li>
            <li><span>Price:</span> <strong>R10,000 – R25,000</strong></li>
            <li><span>Tier:</span> <strong>Tier 1</strong></li>
            <li><span>Stack:</span> <strong>Nuxt, Vue, React, Docker</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/app-starter" class="btn-glass">App Starter</NuxtLink>
            <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems</NuxtLink>
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
  title: 'Static & Brochure Sites — Fast, Performant Websites | NemesisNet',
  meta: [
    { name: 'description', content: 'Static and brochure websites built with Nuxt, Vue, and React. Fast, SEO-optimised, no backend complexity. Starting from R10,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Static & Brochure Sites | NemesisNet' },
    { property: 'og:description', content: 'Fast, performant websites for display. No backend, no complexity. Starting from R10,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/static-sites' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/static-sites' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Static & Brochure Sites',
        'description': 'Fast, performant websites built with Nuxt, Vue, and React. No backend, no complexity, just content that loads instantly.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/static-sites'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Static & Brochure Sites', 'item': 'https://nemesisnet.co.za/services/static-sites' }
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
.related-projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
.next-project { margin-top: 20px; }
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
}
</style>
