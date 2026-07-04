<template>
  <div class="detail-page">
    <PageHeader title="Custom MCP &amp; Agent Integrations" subtitle="Custom MCP servers that connect AI agents to CMS, CRM, databases, and internal tooling — without fragile glue code." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Custom MCP &amp; Agent Integrations</span>
        </div>

        <h2>What It Is</h2>
        <p>MCP (Model Context Protocol) servers let AI agents interact with your existing systems — CMS, CRM, databases, internal tools — through a structured, role-safe interface. Instead of building fragile point-to-point integrations, you get a clean API layer that agents can discover, query, and act on.</p>
        <p>This is not a chatbot bolted onto a form. It is infrastructure that lets AI agents read from and write to your actual systems — with permissions, audit trails, and controlled data flow.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams with AI agents that need real data access</strong> — agents that read from databases, update CMS content, or trigger workflows in external tools. <strong>Businesses automating multi-system workflows</strong> — syncing data between CRM, project management, and internal tools without manual glue code. <strong>Engineering teams building agent pipelines</strong> who want a clean, auditable integration layer instead of ad-hoc scripts.</p>

        <h2>What's Included</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> Custom MCP server design and implementation</li>
          <li><CheckCircle :size="18" /> Integration with CMS, CRM, databases, and internal APIs</li>
          <li><CheckCircle :size="18" /> Role-based access control for agent operations</li>
          <li><CheckCircle :size="18" /> Audit logging for all agent actions</li>
          <li><CheckCircle :size="18" /> Data validation and sanitization at the integration boundary</li>
          <li><CheckCircle :size="18" /> Documentation and handoff for your engineering team</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> AI model training or fine-tuning</li>
          <li><XCircle :size="18" /> Building the AI agents themselves (focus is on the integration layer)</li>
          <li><XCircle :size="18" /> Ongoing infrastructure management (available via Managed Retainer)</li>
          <li><XCircle :size="18" /> Third-party vendor API changes (handled through maintenance agreements)</li>
        </ul>

        <h2>Integration Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h4>System Mapping</h4>
            <p>Audit your existing systems, APIs, and data flows. Identify which systems the agent needs access to and what operations are required.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h4>MCP Server Design</h4>
            <p>Define the tools, resources, and permissions the MCP server exposes. Design role-safe pipelines that control what agents can read and write.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h4>Build &amp; Test</h4>
            <p>Implement the MCP server with validation, error handling, and audit logging. Test against live systems with realistic agent workflows.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h4>Deploy &amp; Handoff</h4>
            <p>Deploy the MCP server alongside your AI agent infrastructure. Document the integration for your team and provide handoff support.</p>
          </div>
        </div>

        <h2>Pricing</h2>
        <p>Starting from <strong>R55,000</strong> per integration. Most MCP integrations land between <strong>R55,000–R120,000</strong> depending on the number of systems involved, complexity of the data flows, and whether role-based access control is required.</p>
        <p>Factors that push the price higher: multiple downstream systems, complex permission models, real-time data sync requirements, and compliance or audit trail requirements.</p>

        <h2>Real Examples</h2>
        <div class="related-projects">
          <div class="related-card">
            <h4>WordPress MCP Server</h4>
            <p>MCP server for WordPress — agents can create, update, and query posts, pages, and media through a structured API.</p>
            <NuxtLink to="/projects/wordpress-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
          <div class="related-card">
            <h4>PocketTTS-MCP</h4>
            <p>MCP integration for text-to-speech — agents can generate and play audio through a custom MCP server.</p>
            <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">View Project</NuxtLink>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'AI Development', description: 'Custom AI agents, self-hosted LLMs, and multi-agent coding harnesses — the builds that need MCP.', to: '/services/ai-development' },
            { title: 'AI Architecture / Consulting', description: 'Architecture sessions that often lead to MCP — start with the design before the integration.', to: '/services/ai-consulting' }
          ]"
          exploring-note="MCP connects agents to systems. These services build the agents and design the architecture."
          :reading="[
            { label: 'MCP Explained: The Future of AI Agent Tool Use', href: 'https://blog.nemesisnet.co.za/mcp-explained-the-future-of-ai-agent-tool-use/' },
            { label: 'WordPress MCP Automation: Cutting Publishing Time by 80%', href: 'https://blog.nemesisnet.co.za/wordpress-mcp-automation-cutting-publishing-time-by-80/' }
          ]"
          :cta="{ heading: 'Ready to connect your agents?', description: 'Structured, auditable integrations between AI agents and your live systems.', buttonLabel: 'Design Your Integration', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>3–6 Weeks</strong></li>
            <li><span>Price:</span> <strong>From R55,000</strong></li>
            <li><span>Stack:</span> <strong>MCP, Node.js, Python</strong></li>
            <li><span>Deliverable:</span> <strong>MCP Server + Docs</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/ai-consulting" class="btn-glass">AI Consulting</NuxtLink>
            <NuxtLink to="/services/ai-development" class="btn-glass">AI Development</NuxtLink>
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
  title: 'Custom MCP & Agent Integrations — AI System Connectivity | NemesisNet',
  meta: [
    { name: 'description', content: 'Custom MCP servers connecting AI agents to CMS, CRM, databases, and internal tooling. Role-safe pipelines, audit logging. From R55,000. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Custom MCP & Agent Integrations | NemesisNet' },
    { property: 'og:description', content: 'Custom MCP servers that connect AI agents to your systems. Role-safe, auditable, no fragile glue code. From R55,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/mcp-integrations' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/mcp-integrations' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Custom MCP & Agent Integrations',
        'description': 'Custom MCP servers connecting AI agents to CMS, CRM, databases, and internal tooling.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '55000', 'priceCurrency': 'ZAR' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/mcp-integrations'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Custom MCP & Agent Integrations', 'item': 'https://nemesisnet.co.za/services/mcp-integrations' }
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
