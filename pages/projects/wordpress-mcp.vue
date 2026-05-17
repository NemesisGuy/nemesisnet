<template>
  <div class="detail-page">
    <PageHeader title="WordPress MCP Server" subtitle="Empowering AI agents with secure, local-first WordPress management." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/wordpress-mcp/optimized/hero.webp'" class="detail-image" alt="WordPress MCP Server" fetchpriority="high" loading="eager">
        
        <h2>The Challenge</h2>
        <p>Connecting AI agents to WordPress usually requires exposing sensitive API keys or opening precarious webhooks that increase the attack surface of a website. There was a need for a bridge that allows agents to manage content without compromising the security of the WordPress installation.</p>
        
        <h2>The Solution</h2>
        <p>The WordPress MCP Server acts as a local-first bridge. It implements a standardized protocol, allowing AI agents to interact with WordPress via a unified interface. The server handles authentication and request routing locally, meaning the AI agent never needs direct access to the WordPress admin panel.</p>
        
        <h2>Technical Implementation</h2>
        <p>Built with a focus on security and low latency, the server uses a secure bridge to the WordPress API. It translates protocol tool calls into authenticated requests, enabling agents to read posts, update categories, and manage media libraries in real-time. The system is containerized for instant deployment across any environment.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank" class="btn-glass">View Source</a>
          <a href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank" class="btn-glass">Deep Dive</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/nk-assessments" class="btn-glass">Next Project → NK Assessments</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>2 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Node.js, WordPress</strong></li>
            <li><span>Role:</span> <strong>Lead Engineer</strong></li>
            <li><span>Status:</span> <strong>Deployed</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank" class="btn-glass">View Source</a>
            <a href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank" class="btn-glass">Deep Dive</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'WordPress MCP Server | NemesisNet',
  meta: [
    { name: 'description', content: 'Empowering AI agents with secure, local-first WordPress management.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/projects/wordpress-mcp' }
  ]
})
</script>

<style scoped>
.detail-page {
  background: var(--bg-gradient);
  min-height: 100vh;
}

.detail-hero {
  padding: 120px 20px 60px;
  text-align: center;
  background: var(--bg-gradient);
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #fff 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.detail-hero p {
  font-size: 1.3rem;
  color: var(--text-muted);
}

.detail-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 20px 40px 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 60px;
}

.detail-main {
  text-align: left;
  line-height: 1.8;
}

.detail-main h2 {
  font-size: 2rem;
  margin: 40px 0 20px;
  text-align: left;
}

.detail-main p {
  color: var(--text-muted);
  margin-bottom: 20px;
}

.detail-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  margin: 30px 0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

.detail-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.sidebar-card h4 {
  color: var(--accent-color);
  margin-bottom: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.sidebar-list li {
  margin-bottom: 10px;
  color: var(--text-muted);
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 8px;
  align-items: start;
}

.sidebar-list li span {
  color: var(--text-muted);
}

.sidebar-list li strong {
  color: var(--text-color);
  text-align: left;
  word-break: break-word;
}

.cta-wrapper {
  margin-top: 60px;
  display: flex;
  gap: 15px;
}


@media (max-width: 900px) {
  .detail-container {
    grid-template-columns: 1fr;
  }
  .page-header h1 {
    font-size: 2.5rem;
  }
  .detail-sidebar {
    position: static;
  }
}
</style>
