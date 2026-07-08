<template>
  <div class="detail-page">
    <PageHeader title="System Design & Consulting" subtitle="Technical roadmapping and architectural optimization for scale — from CTO advisory to codebase restructuring." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">System Design & Consulting</span>
        </div>

        <h2>The Problem: Expensive Software Built on Bad Foundations</h2>
        <p>The most expensive mistake in software is building the wrong thing. Teams ship features for months only to discover the architecture can't support the next 10x of growth. Technical debt compounds — each quick fix makes the next one harder. By the time a CTO brings in outside help, the system is held together by workarounds and the team is burning out.</p>
        <p>Without a clear technical strategy, every product decision becomes a gamble. Should we use microservices? Is our database the bottleneck? Can we handle 100x our current traffic? These aren't questions you want to answer after you've already built the thing. The cost of not planning is always higher than the cost of planning too much.</p>

        <h2>The Solution: Strategic Clarity Before a Single Line of Code</h2>
        <p>NemesisNet provides high-level technical advisory to ensure your architecture is sound before development begins — or to rescue systems already in trouble. We bring decades of experience across startups, enterprises, and research environments to diagnose problems others miss and prescribe solutions that actually fit your constraints.</p>
        <p>Whether you need a one-time architecture review, an ongoing technical advisory retainer, or hands-on restructuring of a legacy codebase, we work at the level that makes sense for your situation. Our goal is to make our own involvement unnecessary — we teach your team to fish.</p>

        <h2>Architecture Planning</h2>
        <p>Using Domain-Driven Design (DDD) and Clean Architecture to ensure your system is maintainable and logically structured from the start. We map bounded contexts, define service boundaries, and establish clear data flow patterns that prevent the monolithic-to-microservice migration trap.</p>
        <p>Every architecture engagement produces a technical specification document, decision log, and visual architecture diagram — artifacts your team can reference long after we're gone.</p>

        <h2>Performance Optimization</h2>
        <p>Identifying bottlenecks in your existing stack and implementing high-impact fixes to reduce latency and server costs. We profile applications at every level — database queries, API response times, frontend rendering, and infrastructure resource utilization.</p>
        <p>Many of our clients see 3–10x performance improvements from targeted optimizations rather than expensive hardware upgrades. We don't guess — we measure, identify the real bottleneck, and fix it.</p>

        <h2>Codebase Restructuring</h2>
        <p>Converting legacy "spaghetti code" into modular, testable, and scalable systems without interrupting production. Our approach uses the Strangler Fig pattern — incrementally replacing components while the system stays live.</p>
        <p>We establish testing coverage first, restructure in small safe increments, and leave behind documentation and patterns your team can maintain. No big-bang rewrites that put your business at risk.</p>

        <h2>Technical Advisory</h2>
        <p>Strategic guidance on tool selection, cloud migration, and AI integration strategies for your business. We stay vendor-neutral and evaluate options based on your specific requirements — not what's trending on Hacker News.</p>
        <p>Advisory engagements range from a single architecture review to a monthly retainer with ongoing code review and strategic check-ins. We've served as fractional CTOs for startups that can't justify a full-time hire yet.</p>

        <h2>AI &amp; Platform Decisions</h2>
        <p>For teams evaluating AI adoption, we provide focused working sessions on model selection, self-hosted vs cloud trade-offs, MCP agent architecture, and TTS pipeline design. These are working sessions — not slide decks. You leave with a concrete integration plan, cost model, and implementation roadmap.</p>
        <p>If the session leads to a build engagement, the consulting fee is credited toward the project.</p>

        <h2>Who This Is For</h2>
        <p><strong>CTOs and tech leads</strong> who need an experienced second opinion on architecture decisions. <strong>Startups preparing to scale</strong> and want to avoid the technical debt that kills growth. <strong>Enterprise teams</strong> dealing with legacy systems that everyone's afraid to touch. <strong>Non-technical founders</strong> who need trustworthy guidance to evaluate technical partners and decisions. <strong>Teams evaluating AI adoption</strong> — unsure which model to use, how to integrate it, or whether to self-host.</p>

        <h2>How We Work</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Intake &amp; Context Gathering</h4>
            <p>We review existing code, documentation, and stakeholder requirements. For greenfield projects, we conduct domain research and competitive analysis.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Assessment &amp; Recommendations</h4>
            <p>We deliver a findings report with prioritized recommendations — what to fix immediately, what to plan for, and what to avoid. No jargon, just clear technical advice.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Implementation Support</h4>
            <p>We can execute recommendations directly, pair-program with your team, or provide ongoing advisory — whatever level of involvement you need.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Knowledge Transfer</h4>
            <p>Every engagement includes documentation, training sessions, and recorded walkthroughs. Your team should be self-sufficient when we're done.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've built, broken, and rebuilt systems of every size and complexity. Our consulting comes from real implementation experience — we've personally dealt with the problems we advise on. Based in Cape Town, South Africa, with a track record across fintech, healthcare, media, and logistics domains.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">Domain-Driven Design</span>
          <span class="pill pill-tools">Clean Architecture</span>
          <span class="pill pill-tools">Spring Boot</span>
          <span class="pill pill-tools">Python</span>
          <span class="pill pill-tools">AWS</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">Kubernetes</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>CodeCritical CLI — Java Analysis Tool</h4>
            <p>Static analysis tool for enterprise Java codebases.</p>
            <NuxtLink to="/projects/codecritical-cli" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>CodeCritical SaaS — Enterprise Scanner</h4>
            <p>SaaS security scanning platform for development teams.</p>
            <NuxtLink to="/projects/codecritical-saas" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/ai-consulting" class="btn-glass">AI Architecture / Consulting →</NuxtLink>
          <NuxtLink to="/services/custom-software" class="btn-glass">Backend &amp; API Engineering →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'AI Architecture / Consulting', description: 'Specialised AI sessions — model selection, deployment strategy, and self-hosted infrastructure.', to: '/services/ai-consulting' },
            { title: 'MCP & Agent Integrations', description: 'Connect AI agents to live systems with a structured, auditable integration layer.', to: '/services/mcp-integrations' }
          ]"
          exploring-note="Need AI-specific guidance? These services go deeper into architecture and agent infrastructure."
          :reading="[
            { label: 'Building a Shared Identity Layer Across Applications', href: 'https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/' },
            { label: 'Maximizing Personal Productivity with AI Tools', href: 'https://blog.nemesisnet.co.za/maximizing-personal-productivity-with-ai-tools/' }
          ]"
          :cta="{ heading: 'Ready for a technical roadmap?', description: 'Half-day sessions that give you clarity on what to build, how to build it, and what to do first.', buttonLabel: 'Book a Session', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Format:</span> <strong>Half/Full Day</strong></li>
            <li><span>Focus:</span> <strong>Strategy &amp; Design</strong></li>
            <li><span>Tiers:</span> <strong>Consulting</strong></li>
            <li><span>Delivery:</span> <strong>1–4 Weeks</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/ai-consulting" class="btn-glass">AI Consulting</NuxtLink>
            <NuxtLink to="/services/custom-software" class="btn-glass">Backend & API</NuxtLink>
            <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'System Design & Consulting | NemesisNet — Technical Roadmapping, Architecture',
  meta: [
    { name: 'description', content: 'Technical consulting and system design in South Africa: architectural optimization, technical roadmapping, and strategic guidance for software teams. Cape Town.' },
    { property: 'og:title', content: 'System Design & Consulting | NemesisNet' },
    { property: 'og:description', content: 'Technical roadmapping and architectural guidance. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/consulting' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/consulting' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'System Design & Consulting',
        'description': 'Technical roadmapping, architecture planning, performance optimization, and code restructuring for software teams and CTOs.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Consulting Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Architecture Planning Session' }, 'price': '10000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Performance Audit' }, 'price': '15000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Codebase Restructuring' }, 'price': '55000', 'priceCurrency': 'ZAR' }
          ]
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/consulting'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'System Design & Consulting', 'item': 'https://nemesisnet.co.za/services/consulting' }
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
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}
.service-feature { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 20px; border-radius: 15px; margin-bottom: 15px; transition: transform 0.3s ease; }
.service-feature:hover { transform: translateX(10px); border-color: var(--accent-color); }
.service-feature h3 { color: var(--accent-color); margin-bottom: 5px; font-size: 1.1rem; }
.service-feature p { margin: 0; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(50% - 10px); min-width: 280px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h4 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.related-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
.related-services { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }

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