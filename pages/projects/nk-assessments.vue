<template>
  <div class="detail-page">
    <PageHeader title="NK Assessments" subtitle="High-speed deployment of a professional client-facing portal." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/nk-assessments/optimized/hero.webp'" class="detail-image" alt="NK Assessments">
        
        <h2>The Challenge</h2>
        <p>The client needed a professional, secure, and highly available static portal to present their assessment services. The primary constraint was a critical timeline—the site needed to be live and fully functional in under 48 hours.</p>
        
        <h2>The Solution</h2>
        <p>I architected a lightweight, static portal using HTML5 and Bootstrap, ensuring maximum load speeds and perfect mobile responsiveness. By leveraging a Dockerized Nginx configuration, I was able to deploy the site to a production environment with zero downtime and instant global availability.</p>
        
        <h2>Technical Implementation</h2>
        <p>The focus was on stability and speed. I used a clean, semantic HTML structure and optimized assets to ensure a near-perfect Lighthouse score. The Docker deployment allowed for an immutable infrastructure approach, making updates and scaling effortless.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/NKAssessments" target="_blank" class="btn-glass">View Source</a>
          <a href="https://nkassessments.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/forkmyfolio" class="btn-glass">Next Project → ForkMyFolio</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>48 Hours</strong></li>
            <li><span>Stack:</span> <strong>HTML5, Bootstrap, Nginx, Docker</strong></li>
            <li><span>Role:</span> <strong>Lead Engineer</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/NKAssessments" target="_blank" class="btn-glass">View Source</a>
            <a href="https://nkassessments.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'NK Assessments | NemesisNet',
  meta: [
    { name: 'description', content: 'High-speed deployment of a professional client-facing portal.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/projects/nk-assessments' }
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
