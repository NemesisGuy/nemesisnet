<template>
  <div class="detail-page">
    <PageHeader title="AI Architecture / Consulting" subtitle="Half-day to full-day working sessions for teams making serious AI or platform decisions." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">AI Architecture / Consulting</span>
        </div>

        <h2>What It Is</h2>
        <p>A focused consulting engagement where you get direct access to an engineer who has built production AI systems — not a slide deck, not a sales pitch. Half-day or full-day working sessions where we review your architecture, design your AI workflow, or map out a technical roadmap.</p>
        <p>Best before you build, not after something breaks. These sessions are designed for teams who are about to make significant technical decisions and want an experienced second opinion before committing.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams evaluating AI adoption</strong> — unsure which model to use, how to integrate it, or whether to self-host. <strong>Engineering teams hitting architecture walls</strong> — performance issues, scaling bottlenecks, or integration complexity. <strong>Startups pre-build</strong> — need a technical roadmap before committing to a stack. <strong>CTOs and tech leads</strong> who want a senior engineer's perspective on a specific problem.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>Platform review — current architecture, bottlenecks, and improvement opportunities</li>
          <li>AI workflow design — model selection, deployment strategy, and integration patterns</li>
          <li>Technical roadmapping — phased delivery plan aligned to your business goals</li>
          <li>Stack evaluation — honest assessment of your current tech choices</li>
          <li>Cost modelling — infrastructure and operational cost projections</li>
          <li>Written summary of recommendations and next steps</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Hands-on coding or implementation (available as a separate engagement)</li>
          <li>Ongoing advisory retainers (available via Managed Retainer)</li>
          <li>Vendor-specific sales pitches — recommendations are stack-agnostic</li>
        </ul>

        <h2>Session Format</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Pre-Session Brief</h4>
            <p>You share context — current architecture, pain points, and what you want to achieve. We review before the session so time is spent on decisions, not catch-up.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Working Session</h4>
            <p>Half-day (4 hours) or full-day (8 hours) of focused technical discussion. Architecture diagrams, trade-off analysis, and concrete recommendations — not theory.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Written Deliverable</h4>
            <p>Summary of decisions made, recommendations, and a prioritised action plan. You leave with clarity on what to build, how to build it, and what to do first.</p>
          </div>
        </div>

        <h2>Pricing</h2>
        <p>Starting from <strong>R10,000</strong> for a half-day session. Full-day sessions available on request. Travel to Cape Town offices can be arranged for local clients.</p>
        <p>If the session leads to a build engagement, the consulting fee is credited toward the project.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>AI Development Services</h4>
            <p>Architecture consulting feeds directly into MCP agent design, self-hosted LLM deployment, and TTS pipeline builds.</p>
            <NuxtLink to="/services/ai-development" class="btn-glass">View Service</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Self-Hosted AI Infrastructure</h4>
            <p>Consulting often precedes GPU planning, model selection, and inference pipeline architecture.</p>
            <NuxtLink to="/services/self-hosted-ai" class="btn-glass">View Service</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Book a Session →</NuxtLink>
          <NuxtLink to="/services/consulting" class="btn-glass">General Technical Consulting →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services/mcp-integrations" class="btn-glass">See Also: MCP &amp; Agent Integrations →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Duration:</span> <strong>Half-Day or Full-Day</strong></li>
            <li><span>Price:</span> <strong>From R10,000</strong></li>
            <li><span>Format:</span> <strong>Remote (Video Call)</strong></li>
            <li><span>Deliverable:</span> <strong>Written Summary</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/mcp-integrations" class="btn-glass">MCP Integrations</NuxtLink>
            <NuxtLink to="/services/ai-development" class="btn-glass">AI Development</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Architecture & Consulting — Half-Day Sessions | NemesisNet',
  meta: [
    { name: 'description', content: 'AI architecture consulting sessions for teams making platform and AI decisions. Platform reviews, workflow design, technical roadmapping. From R10,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'AI Architecture & Consulting | NemesisNet' },
    { property: 'og:description', content: 'Half-day to full-day working sessions for teams making serious AI or platform decisions. From R10,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/ai-consulting' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/ai-consulting' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'AI Architecture & Consulting',
        'description': 'Half-day to full-day working sessions for teams making serious AI or platform decisions.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '10000', 'priceCurrency': 'ZAR' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/ai-consulting'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'AI Architecture & Consulting', 'item': 'https://nemesisnet.co.za/services/ai-consulting' }
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
.feature-list li { padding: 8px 0; padding-left: 20px; position: relative; color: var(--text-muted); }
.feature-list li::before { content: '✓'; position: absolute; left: 0; color: #22c55e; font-weight: 700; }
.feature-list--muted li::before { content: '✗'; color: #ef4444; }
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
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
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
