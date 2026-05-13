<template>
  <div class="detail-page">
    <PageHeader title="AI Development" subtitle="Custom AI agents, MCP servers, and self-hosted LLM infrastructure — engineered for real production workloads." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Problem</h2>
        <p>AI features bolted onto systems via generic API calls are rarely production-ready. They bring vendor lock-in, unpredictable latency, privacy risks, and costs that scale faster than value. Businesses need AI that runs reliably, stays private, and fits their specific domain — not a generic wrapper around someone else's model.</p>

        <h2>The Solution</h2>
        <p>NemesisNet builds custom AI infrastructure — MCP agents, self-hosted TTS pipelines, multi-agent coding harnesses, and fine-tuned on-premise LLMs. Each system is designed for the operational constraints of the business it serves: latency budgets, hardware availability, security posture, and integration surface area. No API key dependency. No vendor lock-in. Architecture is portable.</p>

        <h2>MCP Agents & Tool-Use Infrastructure</h2>
        <p>Model Context Protocol servers let AI agents interact with real systems — databases, CMSs, CRMs, internal tooling. Rather than generic API calls, MCP agents expose structured, role-safe interfaces that agents can actually reason about. NemesisNet builds custom MCP servers that connect AI workflows to the specific tools and data your organization already runs.</p>
        <p>Built on FastMCP and Python, with Dockerized deployment for consistent environments. Works with Claude Desktop, Cursor, Windsurf, and any MCP-compatible client.</p>

        <h2>Self-Hosted TTS Pipelines</h2>
        <p>Text-to-speech infrastructure that runs entirely on your own hardware. Using open-source models like Kyutai Labs' Pocket TTS and AIH parameters' Kokoro, NemesisNet builds TTS pipelines that deliver natural speech synthesis without cloud API dependencies. Sub-second latency. Full data privacy. Hardware-accelerated on CPU or GPU.</p>

        <h2>Multi-Agent Coding Systems</h2>
        <p>Production-grade multi-agent coding harnesses that orchestrate LLMs across coding tasks. Built with Python, GGUF model files, and Docker sandboxes that isolate agent execution. Each agent has a defined role — research, implementation, testing, review — with structured communication protocols. Handles complex, multi-step engineering tasks that single-agent tools can't reliably complete.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">FastMCP</span>
          <span class="pill pill-tools">Pocket TTS</span>
          <span class="pill pill-tools">Kokoro TTS</span>
          <span class="pill pill-tools">Python</span>
          <span class="pill pill-tools">GGUF Models</span>
          <span class="pill pill-tools">Docker</span>
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

        <div class="cta-wrapper">
          <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Scope an AI Build</a>
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
            <li><span>Role:</span> <strong>Architecture & Development</strong></li>
            <li><span>Location:</span> <strong>Cape Town, South Africa</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Self-Hosted AI</NuxtLink>
            <NuxtLink to="/projects" class="btn-glass">View Projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Development | NemesisNet',
  meta: [
    { name: 'description', content: 'Custom AI development: MCP agents, self-hosted TTS pipelines, multi-agent coding harnesses. Cape Town, South Africa.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/ai-development' }
  ],
  script: [{
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
      }
    })
  }]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.related-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
.related-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.related-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.related-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
.next-project { margin-top: 20px; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } .related-projects { grid-template-columns: 1fr; } }
</style>