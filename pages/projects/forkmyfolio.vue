<template>
  <div class="detail-page">
    <PageHeader title="ForkMyFolio" subtitle="The ultimate production-ready personal portfolio management system." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/forkmyfolio/optimized/hero.webp'" class="detail-image" alt="ForkMyFolio">
        
        <h2>The Challenge</h2>
        <p>Most developers struggle to keep their portfolios up to date. Manually editing HTML for every new project is tedious, and existing "portfolio builders" are often too generic or lack the technical depth needed to showcase real engineering work.</p>
        
        <h2>The Solution</h2>
        <p>ForkMyFolio is a full-featured management system that treats a portfolio as a dynamic data set. It provides an admin interface for project tracking, skill management, and metadata control, allowing the user to update their entire professional presence in seconds.</p>
        
        <h2>Technical Implementation</h2>
        <p>Built on a Vue frontend backed by a Java Spring Boot API with MySQL persistence and Redis caching. The platform sustains high traffic with low latency on dedicated infrastructure — no cloud scaling required. Includes dynamic project tracking, skill management, PDF export, and a full backup and restore system.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" class="btn-glass">View Source</a>
          <a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/codecritical" class="btn-glass">Next Project → CodeCritical</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>6 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Vue 3, Spring Boot, Java, MySQL, Redis</strong></li>
            <li><span>Role:</span> <strong>Full-Stack Developer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" class="btn-glass">View Source</a>
            <a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'ForkMyFolio | NemesisNet',
  meta: [
    { name: 'description', content: 'The ultimate production-ready personal portfolio management system.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/projects/forkmyfolio' }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }
</style>
