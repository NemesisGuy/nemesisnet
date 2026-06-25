<template>
  <div class="detail-page">
    <PageHeader title="Waterfall &amp; Structured" subtitle="Full scope definition upfront with gated milestones — built for compliance-heavy systems and fixed-budget builds." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Waterfall &amp; Structured</span>
        </div>

        <h2>What It Is</h2>
        <p>Waterfall and structured delivery defines the full scope, requirements, and design before any code is written. Each phase — requirements, design, build, test, deploy — completes before the next begins. Milestones are gated: you sign off on one phase before moving to the next.</p>
        <p>This is not outdated or rigid. For the right projects, it is the most predictable and risk-controlled approach. When downstream dependencies are fixed, when compliance requires traceability, or when the budget is locked — structured delivery gives you clarity on cost, timeline, and deliverables from day one.</p>

        <h2>Who It's For</h2>
        <p><strong>Compliance-heavy industries</strong> where audit trails and documentation are non-negotiable. <strong>Fixed-budget government or enterprise projects</strong> where scope changes go through formal change control. <strong>Integration projects</strong> where downstream systems have rigid APIs and fixed contracts. <strong>Any project where predictability matters more than flexibility.</strong></p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>Full requirements documentation and sign-off</li>
          <li>Architecture and design phase with stakeholder approval</li>
          <li>Phased delivery with gated milestones</li>
          <li>Formal change control process for scope adjustments</li>
          <li>Documentation-driven handoff</li>
          <li>Comprehensive testing at each phase boundary</li>
          <li>Full audit trail for compliance requirements</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Mid-sprint scope changes (changes go through formal process)</li>
          <li>Continuous stakeholder reshaping of the product</li>
          <li>Working software until the build phase completes</li>
          <li>Flexible timelines — milestones are fixed once signed off</li>
        </ul>

        <h2>Phase Breakdown</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Requirements &amp; Sign-Off</h4>
            <p>Document every feature, integration, and constraint. Stakeholders review and sign off on the full scope before design begins.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Architecture &amp; Design</h4>
            <p>System architecture, database schema, API contracts, and UI mockups. Design is locked before any code is written.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Build &amp; Integrate</h4>
            <p>Implement features against the signed-off spec. Integration with downstream systems follows the documented contracts.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Test &amp; Deploy</h4>
            <p>Full regression testing, UAT with stakeholders, compliance validation, and staged rollout. Documentation handoff included.</p>
          </div>
        </div>

        <h2>When to Choose Waterfall</h2>
        <p>Waterfall is the right choice when the requirements are well understood and unlikely to change, when the budget is fixed and scope changes carry real cost, or when compliance requires formal documentation and sign-off at each phase. It works best for government contracts, enterprise integrations, financial systems, and any project where "measure twice, cut once" is the operating principle.</p>
        <p>If your stakeholders need predictability — fixed cost, fixed timeline, fixed deliverables — Waterfall gives them that certainty. The trade-off is less flexibility once the project is in motion.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>CodeCritical SaaS</h4>
            <p>Multi-tenant platform with fixed scope, compliance requirements, and structured phase delivery.</p>
            <NuxtLink to="/projects/codecritical-saas" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Business Systems</h4>
            <p>Enterprise-grade backends with formal architecture, documented APIs, and phased delivery.</p>
            <NuxtLink to="/services/business-systems" class="btn-glass">View Service</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Define Your Project →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services/agile-iterative" class="btn-glass">See Also: Agile &amp; Iterative →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Approach:</span> <strong>Phase-Gated</strong></li>
            <li><span>Sign-Off:</span> <strong>Required per phase</strong></li>
            <li><span>Ideal For:</span> <strong>Compliance, Fixed Budget</strong></li>
            <li><span>Delivery:</span> <strong>Milestone-based</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/agile-iterative" class="btn-glass">Agile &amp; Iterative</NuxtLink>
            <NuxtLink to="/services/business-systems" class="btn-glass">Business Systems</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Waterfall & Structured Delivery — Gated Milestones | NemesisNet',
  meta: [
    { name: 'description', content: 'Waterfall and structured software delivery with full scope definition, phased milestones, and formal change control. Built for compliance and fixed-budget projects. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Waterfall & Structured Delivery | NemesisNet' },
    { property: 'og:description', content: 'Full scope definition upfront with gated milestones for compliance-heavy and fixed-budget builds.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/waterfall-structured' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/waterfall-structured' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Waterfall & Structured Delivery',
        'description': 'Full scope definition upfront with gated milestones for compliance-heavy and fixed-budget builds.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/waterfall-structured'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Waterfall & Structured', 'item': 'https://nemesisnet.co.za/services/waterfall-structured' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
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
