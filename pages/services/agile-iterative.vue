<template>
  <div class="detail-page">
    <PageHeader title="Agile &amp; Iterative" subtitle="Two-week sprints, continuous feedback, and iterative delivery — built for projects where requirements evolve." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Agile &amp; Iterative</span>
        </div>

        <h2>What It Is</h2>
        <p>Agile and iterative delivery breaks projects into short, focused sprints — typically two weeks each. Each sprint produces working software that can be reviewed, tested, and refined. Instead of planning every detail upfront, the process adapts based on what you learn along the way.</p>
        <p>This is not "move fast and break things." It is structured flexibility: clear sprint goals, defined acceptance criteria, and regular stakeholder checkpoints — but with the freedom to reprioritise as the picture becomes clearer.</p>

        <h2>Who It's For</h2>
        <p><strong>Startups building MVPs</strong> where market response drives the roadmap. <strong>Product teams evolving an existing system</strong> based on user feedback. <strong>Businesses with shifting requirements</strong> — regulated industries, fast-moving markets, or projects where the end state is not fully known at kickoff. <strong>Any project where learning early and adjusting often is more valuable than locking everything down upfront.</strong></p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li>Two-week sprint cycles with defined goals</li>
          <li>Sprint planning and retrospectives</li>
          <li>Daily standups and async progress updates</li>
          <li>Continuous integration and delivery (CI/CD from sprint 1)</li>
          <li>Backlog grooming and prioritisation sessions</li>
          <li>Working software delivered at the end of each sprint</li>
          <li>Stakeholder review and feedback incorporation</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li>Fixed scope, fixed price contracts (scope is flexible by design)</li>
          <li>Upfront detailed design documents (design evolves with the build)</li>
          <li>Waterfall-style phase gates or sign-off milestones</li>
          <li>Multi-month planning before any code is written</li>
        </ul>

        <h2>Sprint Lifecycle</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Sprint Planning</h4>
            <p>Select backlog items for the sprint. Define acceptance criteria. Commit to what can realistically ship in two weeks.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Build &amp; Test</h4>
            <p>Develop features, write tests, open pull requests. Daily async check-ins keep blockers visible and the team aligned.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Review &amp; Demo</h4>
            <p>Present working software to stakeholders. Gather feedback, validate assumptions, and identify what needs to change.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Retrospective &amp; Adjust</h4>
            <p>What worked? What did not? Adjust the process, reprioritise the backlog, and set up the next sprint with clearer context.</p>
          </div>
        </div>

        <h2>When to Choose Agile</h2>
        <p>Agile is the right choice when the end state is not fully known, when user feedback will shape the product, or when speed to market matters more than having every detail planned. It works best for MVPs, product evolution, internal tools that grow over time, and any project where the requirements are likely to shift.</p>
        <p>If you need to show progress every two weeks, if your stakeholders want to be involved in shaping the product, or if the competitive landscape is moving fast — Agile keeps you responsive without losing structure.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>Since — Accountability Tracker</h4>
            <p>Built iteratively with PocketBase + React. Features evolved over multiple sprints based on actual usage patterns.</p>
            <NuxtLink to="/projects/since" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>TorqueBooks</h4>
            <p>MVP delivered in focused sprints. Core features shipped fast, then refined based on driver feedback.</p>
            <NuxtLink to="/projects/torquebooks" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <div class="cta-wrapper">
          <NuxtLink to="/contact" class="btn-glass">Plan a Sprint →</NuxtLink>
        </div>
        <div class="next-project">
          <NuxtLink to="/services/waterfall-structured" class="btn-glass">See Also: Waterfall &amp; Structured →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Sprint Length:</span> <strong>2 Weeks</strong></li>
            <li><span>Cadence:</span> <strong>Continuous</strong></li>
            <li><span>Ideal For:</span> <strong>MVPs, Product Evolution</strong></li>
            <li><span>Delivery:</span> <strong>Working software per sprint</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/waterfall-structured" class="btn-glass">Waterfall &amp; Structured</NuxtLink>
            <NuxtLink to="/services/app-starter" class="btn-glass">App Starter</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Agile & Iterative Delivery — Two-Week Sprints | NemesisNet',
  meta: [
    { name: 'description', content: 'Agile and iterative software delivery with two-week sprints, continuous feedback, and CI/CD from day one. Built for MVPs and evolving products. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Agile & Iterative Delivery | NemesisNet' },
    { property: 'og:description', content: 'Two-week sprints, continuous feedback, and iterative delivery for projects where requirements evolve.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/agile-iterative' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/agile-iterative' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Agile & Iterative Delivery',
        'description': 'Two-week sprints, continuous feedback, and iterative delivery for MVPs and evolving products.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/agile-iterative'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Agile & Iterative', 'item': 'https://nemesisnet.co.za/services/agile-iterative' }
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
.process-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0; }
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
