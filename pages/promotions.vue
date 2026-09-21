<template>
  <div class="detail-page">
    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span aria-current="page">Spring Special</span>
        </div>

        <div class="promo-hero">
          <div class="promo-hero-badge">Limited Time · Sep–Nov 2026</div>
          <h1 class="promo-hero-title">33% Off Entry-Tier Projects</h1>
          <p class="promo-hero-sub">Build your website, app, or CMS project for a third less. Perfect for startups, small businesses, and side projects ready to go live.</p>
          <NuxtLink to="/contact" class="btn--ignite">Book a Free Scoping Call →</NuxtLink>
        </div>

        <h2>What's Included</h2>
        <p>The 33% discount applies to the full project build — design, development, deployment, and handover. No hidden costs, no bait-and-switch.</p>

        <div class="promo-services">
          <div class="promo-service-card">
            <h3>Static &amp; Brochure</h3>
            <div class="promo-pricing">
              <span class="promo-price-line"><span class="promo-old">R7,000 – R25,000</span> → <span class="promo-new">R4,690 – R16,750</span></span>
            </div>
            <p>Landing pages, portfolio sites, business websites, and simple internal tools. Fast loading, mobile-first, SEO-ready.</p>
            <ul>
              <li>Custom responsive design</li>
              <li>Contact form with email notifications</li>
              <li>SEO meta tags and structured data</li>
              <li>Deployment and DNS assistance</li>
            </ul>
            <NuxtLink to="/services/static-sites" class="btn-glass">See Details</NuxtLink>
          </div>

          <div class="promo-service-card">
            <h3>App Starter</h3>
            <div class="promo-pricing">
              <span class="promo-price-line"><span class="promo-old">R35,000 – R80,000</span> → <span class="promo-new">R23,450 – R53,600</span></span>
            </div>
            <p>PocketBase-backed apps with auth, roles, databases, and admin dashboards. MVPs, prototypes, internal tools.</p>
            <ul>
              <li>PocketBase backend with auth</li>
              <li>Vue or React frontend</li>
              <li>Role-based access control</li>
              <li>Docker deployment included</li>
            </ul>
            <NuxtLink to="/services/app-starter" class="btn-glass">See Details</NuxtLink>
          </div>

          <div class="promo-service-card">
            <h3>CMS Development</h3>
            <div class="promo-pricing">
              <span class="promo-price-line"><span class="promo-old">From R7,000</span> → <span class="promo-new">From R4,690</span></span>
            </div>
            <p>Custom WordPress, WooCommerce, themes, plugins, and migrations. Get a CMS that actually fits your workflow.</p>
            <ul>
              <li>Custom theme development</li>
              <li>Plugin development and customisation</li>
              <li>WooCommerce and payment setup</li>
              <li>Performance optimisation</li>
            </ul>
            <NuxtLink to="/services/cms" class="btn-glass">See Details</NuxtLink>
          </div>
        </div>

        <h2>How It Works</h2>
        <div class="promo-steps">
          <div class="promo-step">
            <div class="promo-step-num">1</div>
            <h3>Book a Scoping Call</h3>
            <p>Free 30-minute call to clarify your requirements, timeline, and technical needs. No commitment.</p>
          </div>
          <div class="promo-step">
            <div class="promo-step-num">2</div>
            <h3>Get a Discounted Quote</h3>
            <p>We scope the project and apply the 33% spring discount to the full build price. What we quote is what you pay.</p>
          </div>
          <div class="promo-step">
            <div class="promo-step-num">3</div>
            <h3>Build &amp; Launch</h3>
            <p>We design, build, test, and deploy your project. Milestone-based payments — you approve each stage before we continue.</p>
          </div>
        </div>

        <div class="promo-terms-section">
          <h2>Terms &amp; Conditions</h2>

          <div class="promo-terms-summary">
            <p><strong>In short:</strong> 33% off Static &amp; Brochure, App Starter, and CMS projects. New clients only. Book and sign before 30 November 2026. Excludes retainers, AI, enterprise, and third-party costs.</p>
          </div>

          <button class="promo-terms-toggle" @click="showFullTerms = !showFullTerms" :aria-expanded="showFullTerms">
            {{ showFullTerms ? 'Hide full terms' : 'Read full terms & conditions' }}
            <span class="toggle-arrow" :class="{ 'toggle-arrow--open': showFullTerms }">▾</span>
          </button>

          <div v-show="showFullTerms" class="promo-terms">
            <div class="promo-term">
              <h3>Eligibility</h3>
              <p>This promotion is available to new clients who begin a project engagement between 1 September 2026 and 30 November 2026.</p>
            </div>
            <div class="promo-term">
              <h3>Discount Scope</h3>
              <p>The 33% discount applies to the project build fee for Static &amp; Brochure, App Starter, and CMS Development projects only. It does not apply to:</p>
              <ul>
                <li>Business Systems or Platform/Enterprise projects</li>
                <li>Retainer agreements (Support, DevOps, or Development)</li>
                <li>AI Consulting, MCP Integrations, or specialist engagements</li>
                <li>Hosting, maintenance, or ongoing support fees</li>
                <li>Third-party costs (domains, APIs, hosting providers)</li>
              </ul>
            </div>
            <div class="promo-term">
              <h3>Booking Period</h3>
              <p>The project must be scoped and a signed agreement submitted before 30 November 2026 to qualify for the discount. Projects started after this date are billed at standard rates.</p>
            </div>
            <div class="promo-term">
              <h3>Payment Terms</h3>
              <p>Standard milestone-based payments apply (40/40/20 unless otherwise agreed). The discounted rate is applied to the total project fee — not per milestone.</p>
            </div>
            <div class="promo-term">
              <h3>Scope Changes</h3>
              <p>If the project scope expands beyond the original agreement, additional work is billed at standard hourly rates (R850–R1,400/hr depending on band) without the spring discount.</p>
            </div>
            <div class="promo-term">
              <h3>Combinability</h3>
              <p>This promotion cannot be combined with other offers, discounts, or negotiated rates. The spring discount replaces any other applicable discount.</p>
            </div>
            <div class="promo-term">
              <h3>General</h3>
              <p>NemesisNet reserves the right to modify or withdraw this promotion at any time. Projects already under agreement at the time of withdrawal will honour the agreed discounted rate. This offer is subject to the <NuxtLink to="/legal/terms">Terms of Service</NuxtLink> and <NuxtLink to="/legal/refund">Refund Policy</NuxtLink>.</p>
            </div>
          </div>
        </div>

        <div class="section-cta section-cta--prominent">
          <NuxtLink to="/contact" class="btn--ignite">Book a Free Scoping Call →</NuxtLink>
          <p class="section-cta-sub">No commitment. We'll tell you if the spring special applies to your project.</p>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Promo Details</h3>
          <ul class="sidebar-list">
            <li><span>Discount:</span> <strong>33% Off</strong></li>
            <li><span>Valid:</span> <strong>Sep – Nov 2026</strong></li>
            <li><span>Applies to:</span> <strong>Static, App Starter, CMS</strong></li>
            <li><span>Excludes:</span> <strong>Retainers, AI, Enterprise</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/static-sites" class="btn-glass">Static &amp; Brochure</NuxtLink>
            <NuxtLink to="/services/app-starter" class="btn-glass">App Starter</NuxtLink>
            <NuxtLink to="/services/cms" class="btn-glass">CMS Development</NuxtLink>
            <NuxtLink to="/contact" class="btn-glass">Book a Call</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showFullTerms = ref(false)

useHead({
  title: 'Spring Special — 33% Off Projects | NemesisNet',
  meta: [
    { name: 'description', content: '33% off Static & Brochure, App Starter, and CMS projects at NemesisNet. September–November 2026. Book a free scoping call.' },
    { property: 'og:title', content: 'Spring Special — 33% Off Projects | NemesisNet' },
    { property: 'og:description', content: '33% off Static & Brochure, App Starter, and CMS projects. September–November 2026. Book a free scoping call.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/promotions' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Spring Special — 33% Off Projects | NemesisNet' },
    { name: 'twitter:description', content: '33% off Static & Brochure, App Starter, and CMS projects. September–November 2026.' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/promotions' }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main h3 { font-size: 1.15rem; margin: 20px 0 10px; color: var(--text-color); }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h3 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 100px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; text-align: center; }
.section-cta { margin-top: 60px; text-align: center; }
.section-cta-sub { color: var(--text-muted); font-size: 0.9rem; margin-top: 10px; }

/* Promo hero */
.promo-hero { background: linear-gradient(135deg, rgba(0,255,255,0.08) 0%, rgba(255,0,80,0.05) 100%); border: 1px solid var(--glass-border); border-radius: 16px; padding: 48px 32px; margin: 0 0 32px; text-align: center; }
.promo-hero-badge { display: inline-block; background: var(--accent-color); color: #000; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 14px; border-radius: 4px; margin-bottom: 20px; }
.promo-hero-title { font-size: 2.4rem; margin: 0 0 16px; text-align: center; color: var(--text-color); }
.promo-hero-sub { color: var(--text-muted); font-size: 1.05rem; margin: 0 auto 28px; max-width: 540px; }

/* Promo service cards */
.promo-services { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0 40px; }
.promo-service-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; }
.promo-service-card h3 { margin: 0 0 12px; font-size: 1.15rem; }
.promo-pricing { margin-bottom: 14px; }
.promo-price-line { display: block; line-height: 1.6; }
.promo-old { text-decoration: line-through; color: var(--text-muted); font-size: 0.9rem; }
.promo-new { color: var(--accent-color); font-weight: 700; font-size: 1.1rem; }
.promo-service-card p { font-size: 0.9rem; }
.promo-service-card ul { padding-left: 18px; margin: 12px 0; }
.promo-service-card li { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px; }
.promo-service-card .btn-glass { display: inline-block; margin-top: auto; padding-top: 12px; }

/* Steps */
.promo-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 20px 0 40px; }
.promo-step { text-align: center; }
.promo-step-num { width: 40px; height: 40px; border-radius: 50%; background: var(--accent-color); color: #000; font-weight: 700; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
.promo-step h3 { font-size: 1rem; margin: 0 0 8px; }
.promo-step p { font-size: 0.9rem; margin: 0; }

/* Terms */
.promo-terms-section { margin-top: 40px; }
.promo-terms-summary { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px 24px; margin-bottom: 16px; }
.promo-terms-summary p { margin: 0; font-size: 0.95rem; color: var(--text-muted); }
.promo-terms-toggle { background: none; border: 1px solid var(--glass-border); border-radius: 8px; padding: 10px 20px; color: var(--accent-color); font-size: 0.9rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; margin-bottom: 20px; transition: background 0.2s; }
.promo-terms-toggle:hover { background: rgba(0,255,255,0.06); }
.toggle-arrow { transition: transform 0.2s; display: inline-block; }
.toggle-arrow--open { transform: rotate(180deg); }
.promo-terms { border-top: 1px solid var(--glass-border); padding-top: 20px; }
.promo-term { margin-bottom: 24px; }
.promo-term h3 { font-size: 1rem; color: var(--text-color); margin: 0 0 8px; }
.promo-term p { font-size: 0.9rem; margin: 0 0 8px; }
.promo-term ul { padding-left: 18px; margin: 8px 0; }
.promo-term li { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 4px; }
.promo-term a { color: var(--accent-color); }

@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .detail-sidebar { position: static; }
  .promo-hero-title { font-size: 1.8rem; }
  .promo-services { grid-template-columns: 1fr; }
  .promo-steps { grid-template-columns: 1fr; gap: 32px; }
}
</style>
