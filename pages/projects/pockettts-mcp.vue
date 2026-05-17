<template>
  <div class="detail-page">
    <PageHeader title="PocketTTS-MCP" subtitle="MCP server for Kyutai's Pocket TTS — local, open-source neural TTS for AI agents." />

    <div class="detail-container">
      <div class="detail-main">
        <img
          src="/images/projects/pockettts-mcp/optimized/hero.webp"
          srcset="/images/projects/pockettts-mcp/optimized/hero-480.webp 480w, /images/projects/pockettts-mcp/optimized/hero-640.webp 640w, /images/projects/pockettts-mcp/optimized/hero.webp 800w"
          sizes="(max-width: 640px) 480px, (max-width: 900px) 640px, 800px"
          class="detail-image"
          alt="PocketTTS-MCP logo"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="600"
          height="608"
        >

        <h2>The Problem</h2>
        <p>AI agents that need to generate speech are forced to depend on cloud APIs — proprietary models, rate limits, privacy concerns, and vendor lock-in. When building agentic workflows that need real-time TTS, depending on a remote API is a fragile foundation.</p>

        <h2>The Solution</h2>
        <p>PocketTTS-MCP is a Model Context Protocol server that wraps Kyutai Labs' open-source Pocket TTS model. It exposes TTS generation through the MCP protocol, allowing AI agents and tools like Cursor, Claude Desktop, and n8n to call local neural TTS as a native tool — no API key required.</p>

        <h2>Technical Implementation</h2>
        <p>The server is built with FastMCP and Python, loading the Pocket TTS GGUF model directly. It handles voice selection, text tokenization, and audio synthesis entirely on the local machine. The MCP interface maps cleanly to the underlying model, exposing voices, synthesis parameters, and audio format options. Runs on CPU or GPU with automatic hardware detection.</p>

        <div class="tech-stack">
          <span class="pill pill-tools">FastMCP</span>
          <span class="pill pill-tools">Pocket TTS</span>
          <span class="pill pill-tools">Python</span>
          <span class="pill pill-tools">GGUF</span>
          <span class="pill pill-tools">MCP</span>
        </div>

        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/PocketTTS-MCP" target="_blank" class="btn-glass">View Source</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/kokoro-tts" class="btn-glass">Next Project → Kokoro TTS Service</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Type:</span> <strong>Open Source MCP Server</strong></li>
            <li><span>Stack:</span> <strong>Python, FastMCP, Pocket TTS</strong></li>
            <li><span>Role:</span> <strong>Architect & Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/PocketTTS-MCP" target="_blank" class="btn-glass">View Source</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'PocketTTS-MCP | NemesisNet',
  meta: [
    { name: 'description', content: 'MCP server for Kyutai Pocket TTS — local, open-source neural text-to-speech for AI agents.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/projects/pockettts-mcp' }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; max-height: 400px; object-fit: contain; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
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
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }
</style>