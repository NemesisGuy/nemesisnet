<template>
  <div>
    <PageHeader title="Projects" subtitle="A portfolio of production-grade systems, platforms, and infrastructure builds." />
    <div class="projects-container">
      <div class="breadcrumbs" aria-label="Breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">Projects</span>
      </div>
      <main>
        <section id="projects">
          <h2 class="project-group-title">AI & TTS</h2>
        <div class="projects-grid">
          <div class="card">
            <img src="/images/projects/voxnemesis-supertonic/optimized/hero.webp" srcset="/images/projects/voxnemesis-supertonic/optimized/hero-480.webp 480w, /images/projects/voxnemesis-supertonic/optimized/hero-640.webp 640w, /images/projects/voxnemesis-supertonic/optimized/hero.webp 800w" sizes="(max-width: 640px) 480px, 280px" alt="VoxNemesis Supertonic" loading="lazy" width="900" height="483">
            <h3>VoxNemesis Supertonic</h3>
            <p>A local-first, GPU-aware TTS browser extension that runs entirely in the browser using ONNX Runtime Web with WebGPU acceleration.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/voxnemesis-supertonic-extension" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/voxnemesis-supertonic">Detail</NuxtLink>
              <a class="btn-glass" href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank">Blog</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/kokoro-tts-service/optimized/hero.webp" srcset="/images/projects/kokoro-tts-service/optimized/hero-480.webp 480w, /images/projects/kokoro-tts-service/optimized/hero-640.webp 640w, /images/projects/kokoro-tts-service/optimized/hero.webp 900w" sizes="(max-width: 640px) 480px, 280px" alt="Kokoro TTS Service" loading="lazy" width="900" height="483">
            <h3>Kokoro TTS Service</h3>
            <p>A self-hosted AI text-to-speech web service built on top of the open-source Kokoro TTS engine — enabling natural-sounding speech synthesis via a user-friendly web interface.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/kokoro-tts">Detail</NuxtLink>
              <a class="btn-glass" href="https://kokoro-gui.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/pockettts-mcp/optimized/hero.webp" srcset="/images/projects/pockettts-mcp/optimized/hero-480.webp 480w, /images/projects/pockettts-mcp/optimized/hero-640.webp 640w, /images/projects/pockettts-mcp/optimized/hero.webp 800w" sizes="(max-width: 640px) 480px, 280px" alt="PocketTTS-MCP" loading="lazy" width="480" height="487">
            <h3>PocketTTS-MCP</h3>
            <p>MCP server wrapping Kyutai Labs' Pocket TTS — local, open-source neural text-to-speech for AI agent workflows.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/PocketTTS-MCP" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/pockettts-mcp">Detail</NuxtLink>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/vibetype/optimized/hero.webp" srcset="/images/projects/vibetype/optimized/hero-480.webp 480w, /images/projects/vibetype/optimized/hero-640.webp 640w, /images/projects/vibetype/optimized/hero.webp 900w" sizes="(max-width: 640px) 480px, 280px" alt="Vibe-Type" loading="lazy" width="900" height="611">
            <h3>Vibe-Type</h3>
            <p>An experimental AI-powered coding/typing assistant — offering voice or smart-typing support, to speed up coding and writing workflows.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/Vibe-Type" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/vibetype">Detail</NuxtLink>
              <a class="btn-glass" href="https://blog.nemesisnet.co.za/vibetype-building-a-local-first-voice-coding-companion/" target="_blank">Blog</a>
            </div>
          </div>
        </div>

        <h2 class="project-group-title">SaaS Platforms</h2>
        <div class="projects-grid">
          <div class="card">
            <img src="/images/projects/codecritical-saas/optimized/hero.webp" srcset="/images/projects/codecritical-saas/optimized/hero-480.webp 480w, /images/projects/codecritical-saas/optimized/hero-640.webp 640w, /images/projects/codecritical-saas/optimized/hero.webp 1103w" sizes="(max-width: 640px) 480px, 280px" alt="CodeCritical SaaS" loading="lazy" width="900" height="615">
            <h3>CodeCritical SaaS</h3>
            <p>Enterprise security scanning SaaS with multi-tenant architecture, JWT auth, Redis job queue, and static analysis pipeline.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/CodeCritical" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/codecritical-saas">Detail</NuxtLink>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/forkmyfolio/optimized/hero.webp" srcset="/images/projects/forkmyfolio/optimized/hero-480.webp 480w, /images/projects/forkmyfolio/optimized/hero-640.webp 640w, /images/projects/forkmyfolio/optimized/hero.webp 900w" sizes="(max-width: 640px) 480px, 280px" alt="ForkMyFolio" loading="lazy" width="900" height="459">
            <h3>ForkMyFolio</h3>
            <p>A fully-featured, production-ready personal portfolio management system with dynamic project tracking, skill management, PDF export, and backup & restore capabilities.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/forkmyfolio">Detail</NuxtLink>
              <a class="btn-glass" href="https://forkmyfolio.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/since/optimized/hero.webp" srcset="/images/projects/since/optimized/hero-480.webp 480w, /images/projects/since/optimized/hero-640.webp 640w, /images/projects/since/optimized/hero.webp 1200w" sizes="(max-width: 640px) 480px, 280px" alt="Since" loading="lazy" width="900" height="615">
            <h3>Since</h3>
            <p>Accountability tracker — make claims, record events, set deadlines, verify outcomes over time.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/Since" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/since">Detail</NuxtLink>
              <a class="btn-glass" href="https://since.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>

        <h2 class="project-group-title">Tools & Open Source</h2>
        <div class="projects-grid">
          <div class="card">
            <img src="/images/projects/wordpress-mcp/optimized/hero.webp" srcset="/images/projects/wordpress-mcp/optimized/hero-480.webp 480w, /images/projects/wordpress-mcp/optimized/hero-640.webp 640w, /images/projects/wordpress-mcp/optimized/hero.webp 800w" sizes="(max-width: 640px) 480px, 280px" alt="WordPress MCP Server" loading="lazy" width="900" height="506">
            <h3>WordPress MCP Server</h3>
            <p>Lightweight MCP bridge that lets AI agents read, update, and manage WordPress content securely via a local-first server.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/wordpress-mcp">Detail</NuxtLink>
              <a class="btn-glass" href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank">Blog</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/codecritical/optimized/hero.webp" srcset="/images/projects/codecritical/optimized/hero-480.webp 480w, /images/projects/codecritical/optimized/hero-640.webp 640w, /images/projects/codecritical/optimized/hero.webp 1170w" sizes="(max-width: 640px) 480px, 280px" alt="CodeCritical CLI" loading="lazy" width="900" height="615">
            <h3>CodeCritical CLI</h3>
            <p>Java code analysis tool — measures LOC, functions, classes, duplication, and maintainability index with markdown reports.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/CodeCritical" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/codecritical-cli">Detail</NuxtLink>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/nemesisnet-wordpress-theme/optimized/hero.webp" srcset="/images/projects/nemesisnet-wordpress-theme/optimized/hero-480.webp 480w, /images/projects/nemesisnet-wordpress-theme/optimized/hero-640.webp 640w, /images/projects/nemesisnet-wordpress-theme/optimized/hero.webp 800w" sizes="(max-width: 640px) 480px, 280px" alt="NemesisNet WordPress Theme" loading="lazy" width="256" height="256">
            <h3>NemesisNet WordPress Theme</h3>
            <p>Custom WordPress theme built on the NemesisNet brand — glassmorphic dark/light UI, component library, and Umami analytics.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/NemesisNet-WordPress-Theme" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/nemesisnet-wordpress-theme">Detail</NuxtLink>
              <a class="btn-glass" href="https://blog.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>

        <h2 class="project-group-title">Client Work / Full-Stack Builds</h2>
        <div class="projects-grid">
          <div class="card">
            <img src="/images/projects/torquebooks/optimized/hero.webp" srcset="/images/projects/torquebooks/optimized/hero-480.webp 480w, /images/projects/torquebooks/optimized/hero-640.webp 640w, /images/projects/torquebooks/optimized/hero.webp 929w" sizes="(max-width: 640px) 480px, 280px" alt="TorqueBooks" loading="lazy" width="1200" height="683">
            <h3>TorqueBooks</h3>
            <p>Workshop management for auto shops — job cards, invoicing, CRM, vehicle tracking. React + PocketBase + OAuth2 SSO.</p>
            <div class="project-links">
              <NuxtLink class="btn-glass" to="/projects/torquebooks">Detail</NuxtLink>
              <a class="btn-glass" href="https://torquebooks.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/onthegorentals/optimized/hero-v2.webp" srcset="/images/projects/onthegorentals/optimized/hero-480-v2.webp 480w, /images/projects/onthegorentals/optimized/hero-640-v2.webp 640w, /images/projects/onthegorentals/optimized/hero-v2.webp 1024w" sizes="(max-width: 640px) 480px, 280px" alt="OntheGoRentals" loading="lazy" width="202" height="188">
            <h3>OntheGoRentals</h3>
            <p>Full-stack reference build — bookings, rental history, admin dashboard, and rental management with Spring Boot and Vue.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/onthegorentals">Detail</NuxtLink>
              <a class="btn-glass" href="https://otgr.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/nk-assessments/optimized/hero.webp" srcset="/images/projects/nk-assessments/optimized/hero-480.webp 480w, /images/projects/nk-assessments/optimized/hero-640.webp 640w, /images/projects/nk-assessments/optimized/hero.webp 900w" sizes="(max-width: 640px) 480px, 280px" alt="NK Assessments" loading="lazy" width="900" height="900">
            <h3>NK Assessments</h3>
            <p>Client-facing static portal built with HTML5, Bootstrap, and Dockerized Nginx — designed, shipped, and deployed in under 48 hours.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/NKAssessments" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/nk-assessments">Detail</NuxtLink>
              <a class="btn-glass" href="https://nkassessments.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>

          <div class="card">
            <img src="/images/projects/bored-room-cafe/optimized/hero.webp" srcset="/images/projects/bored-room-cafe/optimized/hero-480.webp 480w, /images/projects/bored-room-cafe/optimized/hero-640.webp 640w, /images/projects/bored-room-cafe/optimized/hero.webp 900w" sizes="(max-width: 640px) 480px, 280px" alt="Bored Room Cafe" loading="lazy" width="900" height="445">
            <h3>Bored Room Cafe</h3>
            <p>A local homestyle takeaway and food-service spot based in Ferness Estate — showcasing local flavour and simple ordering for busy families.</p>
            <div class="project-links">
              <a class="btn-glass" href="https://github.com/NemesisGuy/Bored-Room-Cafe" target="_blank">Source</a>
              <NuxtLink class="btn-glass" to="/projects/bored-room-cafe">Detail</NuxtLink>
              <a class="btn-glass" href="https://boredroomcafe.nemesisnet.co.za" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </section>
    </main>
  </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Projects | NemesisNet — Production-Grade AI, SaaS, and Infrastructure Builds',
  meta: [
    { name: 'description', content: 'Full portfolio of production systems built by NemesisNet: AI agents, TTS pipelines, multi-tenant SaaS platforms, MCP integrations, and DevOps infrastructure. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Projects | NemesisNet' },
    { property: 'og:description', content: 'Production-grade AI, SaaS, and infrastructure builds. VoxNemesis, Kokoro TTS, Since, ForkMyFolio, and more.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects' }
  ]
})
</script>

<style scoped>
.projects-container {
  max-width: 1280px;
  margin: auto;
  padding: 24px 20px 40px;
}

.projects-container section#projects {
  padding: 0;
  min-height: auto;
  margin: 0;
}

.project-group-title:first-of-type {
  margin-top: 0;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1192px;
  margin: 0 auto 40px;
}

.projects-grid .card {
  width: 280px;
  flex: none;
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  padding-top: 16px;
}

.project-links :deep(.btn-glass) {
  display: block;
  width: 95%;
  margin: 0 auto;
  padding: 12px 20px;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .project-links :deep(.btn-glass) {
    width: 100%;
  }
  .projects-grid .card {
    width: 100%;
  }
}

.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; padding-left: 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}

.back-link {
  text-align: center;
  margin-top: 40px;
}

.project-group-title {
  font-size: 1.1rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 40px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--glass-border);
}
</style>
