<template>
  <div class="detail-page">
    <PageHeader title="AI Development" subtitle="Custom AI agents, MCP servers, and self-hosted LLM infrastructure — engineered for real production workloads." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">AI Development</span>
        </div>

        <h2>The Problem: AI That Doesn't Ship to Production</h2>
        <p>Most businesses experimenting with AI hit the same wall: prototype demos that never make it to production. Generic API wrappers around OpenAI or Anthropic work in a demo but fail under real constraints — unpredictable latency, data privacy violations, vendor lock-in, and runaway costs the moment traffic scales. The gap between "it works in a sandbox" and "it works at 3 AM on a Friday under peak load" is where most AI projects die.</p>
        <p>Worse, bolting AI onto legacy systems through generic REST calls creates fragile architectures. There's no structured way for AI agents to interact with your internal tools, no role-based access control on what the model can touch, and no path to running it on your own infrastructure when compliance or cost demands it.</p>

        <h2>The Solution: Production-Grade AI, Built for Your Constraints</h2>
        <p>NemesisNet builds custom AI infrastructure — MCP agents, self-hosted TTS pipelines, multi-agent coding harnesses, and fine-tuned on-premise LLMs. Each system is designed for the operational constraints of the business it serves: latency budgets, hardware availability, security posture, and integration surface area.</p>
        <p>No API key dependency. No vendor lock-in. Architecture is portable across cloud providers, on-premise hardware, and hybrid deployments. You own the stack, you control the data, and the system works whether you're running on a Hetzner VPS or a rack of local GPUs.</p>

        <h2>MCP Agents &amp; Tool-Use Infrastructure</h2>
        <p>Model Context Protocol (MCP) servers let AI agents interact with real systems — databases, CMSs, CRMs, internal tooling — through structured, role-safe interfaces. Rather than generic API calls that the model hallucinates, MCP agents expose deterministic tools that agents can actually reason about.</p>
        <p>NemesisNet builds custom MCP servers that connect AI workflows to the specific tools and data your organization already runs. Built on FastMCP and Python, with Dockerized deployment for consistent environments. Works with Claude Desktop, Cursor, Windsurf, and any MCP-compatible client. Each server includes audit logging, permission scoping, and graceful error handling so the agent can't accidentally delete your production database.</p>

        <h2>Self-Hosted TTS Pipelines</h2>
        <p>Text-to-speech infrastructure that runs entirely on your own hardware. Using open-source models like Kyutai Labs' Pocket TTS and AIH parameters' Kokoro, NemesisNet builds TTS pipelines that deliver natural speech synthesis without cloud API dependencies. Sub-second latency. Full data privacy. Hardware-accelerated on CPU or GPU.</p>
        <p>Our PocketTTS-MCP project wraps Kyutai's model in an MCP server, letting AI agents generate speech as a native tool — useful for voice assistants, accessibility features, and automated content narration.</p>

        <h2>Multi-Agent Coding Systems</h2>
        <p>Production-grade multi-agent coding harnesses that orchestrate LLMs across complex engineering tasks. Built with Python, GGUF model files, and Docker sandboxes that isolate agent execution. Each agent has a defined role — research, implementation, testing, review — with structured communication protocols.</p>
        <p>This isn't a single prompt-and-pray interaction. It's a system where multiple specialized agents collaborate on multi-step engineering problems: one agent researches the API surface, another writes the implementation, a third writes and runs tests, and a fourth reviews the diff. Handles complex tasks that single-agent tools can't reliably complete.</p>

        <h2>Who This Service Is For</h2>
        <p><strong>Startups building AI-native products</strong> who need infrastructure that scales without handing control to a cloud vendor. <strong>Enterprise engineering teams</strong> integrating AI capabilities into existing systems with strict data governance. <strong>Agencies and consultancies</strong> who need reliable, reusable AI infrastructure for client projects. <strong>Research teams</strong> running experimental models that require custom pipeline orchestration.</p>

        <h2>How We Build It</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>Discovery &amp; Scoping</h4>
            <p>We map your use case, data constraints, latency requirements, and compliance needs. No assumptions — every architecture decision starts from your actual workload.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>Architecture Design</h4>
            <p>We design the full stack: model selection, inference optimization, MCP tool definitions, data flow, and deployment topology. You get a technical spec before we write a line of code.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Build &amp; Iterate</h4>
            <p>We build in Docker containers, test with your real data, and iterate on latency and accuracy. Infrastructure-as-code means every environment is reproducible.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Deploy &amp; Handoff</h4>
            <p>Deployed to your infrastructure or ours. Full documentation, monitoring dashboards, and a runbook so your team can operate the system independently.</p>
          </div>
        </div>

        <h2>Why NemesisNet</h2>
        <p>We've built production AI systems across fintech, healthcare, and media. Our approach is infrastructure-first: we care about what happens at 3 AM under load, not just what looks good in a demo. Based in Cape Town, South Africa, we work with clients across Africa, Europe, and beyond — with time zone overlap to EU markets.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">FastMCP</span>
          <span class="pill pill-tools">Pocket TTS</span>
          <span class="pill pill-tools">Kokoro TTS</span>
          <span class="pill pill-tools">Python</span>
          <span class="pill pill-tools">GGUF Models</span>
          <span class="pill pill-tools">Docker</span>
          <span class="pill pill-tools">Redis</span>
          <span class="pill pill-tools">CUDA</span>
        </div>

        <h2>Related Projects</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>PocketTTS-MCP</h4>
            <p>MCP server wrapping Kyutai's Pocket TTS for AI agent TTS access.</p>
            <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>Kokoro TTS Service</h4>
            <p>Self-hosted AI TTS web service on the Kokoro open-source engine.</p>
            <NuxtLink to="/projects/kokoro-tts" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>WordPress MCP Server</h4>
            <p>MCP bridge for AI agents to manage WordPress content securely.</p>
            <NuxtLink to="/projects/wordpress-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <h2>Related Services</h2>
        <div class="related-services">
          <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Self-Hosted AI Infrastructure →</NuxtLink>
          <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Engineering →</NuxtLink>
        </div>

        <div class="cta-wrapper">
          <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Scope an AI Build</a>
          <a href="https://blog.nemesisnet.co.za/self-hosted-ai-vs-cloud-apis-what-south-african-businesses-need-to-know/" target="_blank" class="btn-glass">Read Cost Analysis</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Next: Self-Hosted AI Infrastructure →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Focus:</span> <strong>MCP, TTS, Multi-Agent Systems</strong></li>
            <li><span>Stack:</span> <strong>Python, FastMCP, GGUF, Docker</strong></li>
            <li><span>Role:</span> <strong>Architecture &amp; Development</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
            <li><span>Delivery:</span> <strong>2–10 Weeks</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <a href="https://blog.nemesisnet.co.za/self-hosted-ai-vs-cloud-apis-what-south-african-businesses-need-to-know/" target="_blank" class="btn-glass">Read Cost Analysis</a>
            <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Self-Hosted AI</NuxtLink>
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
  title: 'Custom AI Development | NemesisNet — MCP Agents, TTS, Agent Workflows',
  meta: [
    { name: 'description', content: 'Custom AI development in South Africa: MCP agents, self-hosted TTS pipelines, multi-agent coding harnesses, and AI integration for production systems. Cape Town.' },
    { property: 'og:title', content: 'Custom AI Development | NemesisNet' },
    { property: 'og:description', content: 'MCP agents, self-hosted TTS pipelines, and AI integration. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/ai-development' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/ai-development' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'AI Development',
        'description': 'Custom AI agents, MCP servers, self-hosted TTS pipelines, and multi-agent coding harnesses for production workloads.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'AI Development Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'MCP Agent Development' }, 'price': '55000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Self-Hosted TTS Pipeline' }, 'price': '220000', 'priceCurrency': 'ZAR' },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Multi-Agent Coding Harness' }, 'price': '220000', 'priceCurrency': 'ZAR' }
          ]
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/ai-development'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'AI Development', 'item': 'https://nemesisnet.co.za/services/ai-development' }
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
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}
.process-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0; }
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
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.next-project { margin-top: 20px; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) {
  .detail-container { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2.5rem; }
  .detail-sidebar { position: static; }
  .related-projects { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
}
</style>