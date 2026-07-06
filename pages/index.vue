<template>
<div>
  <!-- Hero Section -->
  <header>
    <div class="hero-top">
      <div class="avatar-wrap" aria-hidden="false">
        <img :src="'/images/brand/Nemesis_Logo_Icon.webp'" class="avatar-img" alt="NemesisNet logo" loading="eager" fetchpriority="high" decoding="async" width="256" height="256">
      </div>
      <div>
        <h1>AI Infrastructure &amp; Platform Engineering</h1>
        <p class="hero-subtitle">We build real infrastructure — not API wrappers.</p>
      </div>
    </div>
    <div class="hero-content">
      <p class="hero-intro"><strong>NemesisNet</strong> builds custom AI systems, self-hosted infrastructure, and SaaS platforms for businesses that need control, scalability, and engineering-grade reliability.</p>
      <div class="hero-what-we-build">
        <span class="hero-tag">AI agents &amp; MCP integrations</span>
        <span class="hero-tag">Self-hosted LLM &amp; TTS pipelines</span>
        <span class="hero-tag">Multi-tenant SaaS platforms</span>
        <span class="hero-tag">Production automation &amp; infrastructure</span>
      </div>
      <div class="hero-links">
        <NuxtLink to="/projects" class="btn-glass">See Our Work</NuxtLink>
        <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass btn-primary">Scope Your Project</a>
      </div>
    </div>
    <a href="/projects" class="chevron" aria-label="Scroll to projects">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16.5l-6-6 1.4-1.4L12 13.7l4.6-4.6L18 10.5z"/></svg>
    </a>
  </header>

  <!-- Core Services Section -->
  <section id="services">
    <h2>Core Services</h2>
    <div class="services-grid">
      <div class="card">
        <div class="service-icon"><ClientOnly><Server :size="24" /></ClientOnly></div>
        <h3>Backend &amp; API Engineering</h3>
        <p>Custom APIs, data pipelines, system integrations, and backend architecture.</p>
        <NuxtLink to="/services/custom-software" class="btn-glass">Custom Software Details</NuxtLink>
      </div>
      <div class="card">
        <div class="service-icon"><ClientOnly><Cloud :size="24" /></ClientOnly></div>
        <h3>SaaS Development</h3>
        <p>Scalable multi-tenant platforms with authentication, billing, and APIs.</p>
        <NuxtLink to="/services/saas-development" class="btn-glass">SaaS Development Details</NuxtLink>
      </div>
      <div class="card">
        <div class="service-icon"><ClientOnly><Brain :size="24" /></ClientOnly></div>
        <h3>AI Development</h3>
        <p>MCP agents, self-hosted TTS pipelines, and multi-agent coding harnesses.</p>
        <NuxtLink to="/services/ai-development" class="btn-glass">AI Development Details</NuxtLink>
      </div>
      <div class="card">
        <div class="service-icon"><ClientOnly><Cpu :size="24" /></ClientOnly></div>
        <h3>Self-Hosted AI Infrastructure</h3>
        <p>GGUF models, GPU deployment, and vector databases — no vendor lock-in.</p>
        <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Self-Hosted AI Details</NuxtLink>
      </div>
      <div class="card">
        <div class="service-icon"><ClientOnly><Workflow :size="24" /></ClientOnly></div>
        <h3>Infrastructure & DevOps</h3>
        <p>Docker, CI/CD, cloud networking, and infrastructure automation.</p>
        <NuxtLink to="/services/infrastructure" class="btn-glass">Infrastructure Details</NuxtLink>
      </div>
      <div class="card">
        <div class="service-icon"><ClientOnly><Briefcase :size="24" /></ClientOnly></div>
        <h3>Consulting & Architecture</h3>
        <p>System design, code reviews, and technical leadership for teams.</p>
        <NuxtLink to="/services/consulting" class="btn-glass">Consulting Details</NuxtLink>
      </div>
    </div>
    <div class="section-cta">
      <NuxtLink to="/services" class="btn-glass">View Services & Pricing</NuxtLink>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section id="projects">
    <h2>Featured Projects</h2>
    <!-- v3 -->
    <div class="projects-grid">
      <div class="card">
        <span class="pill pill-client">Enterprise SaaS</span>
        <img :src="'/images/projects/codecritical-saas/optimized/hero.webp'" alt="CodeCritical SaaS" loading="lazy">
        <h3>CodeCritical SaaS</h3>
        <p>Enterprise B2B platform with role-based access, client portals, and automated billing.</p>
        <div class="card-links">
          <NuxtLink to="/projects/codecritical-saas" class="btn-glass">Detail</NuxtLink>
          <a href="https://codecritical.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-saas">SaaS Platform</span>
        <img :src="'/images/projects/since/optimized/hero.webp'" alt="Since" loading="lazy">
        <h3>Since</h3>
        <p>Accountability tracker — make claims, record events, set deadlines, verify outcomes over time.</p>
        <div class="card-links">
          <NuxtLink to="/projects/since" class="btn-glass">Detail</NuxtLink>
          <a href="https://since.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-saas">AI/ML</span>
        <img :src="'/images/projects/voxnemesis-supertonic/optimized/hero.webp'" alt="VoxNemesis Supertonic" loading="lazy">
        <h3>VoxNemesis Supertonic</h3>
        <p>WebGPU-powered local voice cloning with ONNX inference, real-time TTS, and zero cloud dependencies.</p>
        <div class="card-links">
          <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">Detail</NuxtLink>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-saas">AI/Tooling</span>
        <img :src="'/images/projects/pockettts-mcp/optimized/hero.webp'" alt="PocketTTS-MCP" loading="lazy">
        <h3>PocketTTS-MCP</h3>
        <p>Model Context Protocol server for local LLM-powered text-to-speech with audio streaming and voice cloning.</p>
        <div class="card-links">
          <NuxtLink to="/projects/pockettts-mcp" class="btn-glass">Detail</NuxtLink>
        </div>
      </div>
    </div>
    <div style="text-align:center; margin-top:40px;">
      <NuxtLink to="/projects" class="btn-glass">View All Projects</NuxtLink>
    </div>
  </section>

<!-- Testimonials Section -->
   <section id="testimonials">
     <h2>Testimonials</h2>
     <div class="testimonials-grid">
       <div class="card">
         <div class="testimonial-header">
           <div class="testimonial-meta">
             <strong class="testimonial-name">NK Assessments</strong>
             <span class="testimonial-role">Business Owner — Cape Town, South Africa</span>
           </div>
         </div>
         <p>"The project was delivered quickly without compromising quality. Everything was set up and deployed with no issues. Highly recommend for any custom software or automation needs."</p>
<div class="testimonial-project">
            <span class="testimonial-project-label">Related:</span>
            <NuxtLink to="/projects/nk-assessments" class="testimonial-project-link">NK Assessments</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="testimonial-header">
            <div class="testimonial-meta">
              <strong class="testimonial-name">Bored Room Cafe</strong>
             <span class="testimonial-role">Business Owner — Cape Town, South Africa</span>
           </div>
         </div>
         <p>"NemesisNet delivered a clean, well-structured system that worked as expected from day one. Communication was clear and the process was smooth throughout."</p>
<div class="testimonial-project">
            <span class="testimonial-project-label">Related:</span>
            <NuxtLink to="/projects/bored-room-cafe" class="testimonial-project-link">Bored Room Cafe</NuxtLink>
         </div>
       </div>
      </div>
    </section>

   <!-- CTA Section -->
   <section id="cta">
     <h2>Ready to Start Your Project?</h2>
     <p class="services-teaser-text">Every system is scoped by complexity and workflow requirements — then right-sized with transparent pricing. Let's talk.</p>
     <div class="cta-buttons">
       <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Scope Your Project</a>
       <NuxtLink to="/services" class="btn-glass">View Pricing →</NuxtLink>
     </div>
   </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="contact-inner">
      <h2>Get in Touch</h2>
      <p class="services-teaser-text">I review every enquiry personally and respond within 24 hours.</p>
      <div class="contact-links">
        <a href="mailto:admin@nemesisnet.co.za">Email</a>
        <a href="https://github.com/NemesisGuy" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/peter-buckingham-65438757" target="_blank">LinkedIn</a>
        <a href="https://forkmyfolio.nemesisnet.co.za/nemesis" target="_blank">Portfolio</a>
      </div>
      <div class="cta-buttons" style="margin-top: 24px;">
        <NuxtLink to="/contact" class="btn-glass">Send a Message →</NuxtLink>
      </div>
      <p class="contact-subnote">Available for remote engagements globally. Also available for WordPress, WooCommerce, and CMS projects — enquire directly.</p>
    </div>
  </section>
</div>
</template>

<script setup>
import { Server, Cloud, Brain, Cpu, Workflow, Briefcase } from 'lucide-vue-next'

useHead({
  title: 'NemesisNet — AI Infrastructure & Platform Engineering in Cape Town, South Africa',
  meta: [
    { name: 'description', content: 'AI infrastructure, SaaS development, and self-hosted systems built for production. Based in Cape Town, South Africa. Engineering-grade reliability, ZAR pricing, and POPIA-aware data handling.' },
    { property: 'og:title', content: 'NemesisNet — AI Infrastructure & Platform Engineering in Cape Town' },
    { property: 'og:description', content: 'Custom AI systems, self-hosted infrastructure, and SaaS platforms built for production. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/' }
  ]
})
</script>

<style scoped>
.services-grid { display: flex !important; flex-wrap: wrap; gap: 20px; justify-content: center; }
.services-grid .card { flex: 0 1 calc(25% - 20px); min-width: 250px; max-width: 300px; }
@media (max-width: 1100px) { .services-grid .card { flex: 0 1 calc(50% - 20px); max-width: none; } }
@media (max-width: 768px) { .services-grid { flex-direction: column; gap: 14px; } .services-grid .card { flex: none; } }

.projects-grid { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 20px; }
@media (max-width: 1100px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; gap: 14px; } }

.hero-top { gap: 20px; margin-bottom: 24px; }
.avatar-wrap { width: 290px !important; height: 290px !important; border-width: 3px !important; box-shadow: 0 8px 30px rgba(0,0,0,0.4), 0 0 40px var(--accent-glow) !important; padding: 12px; }
.avatar-wrap .avatar-img { max-width: 100%; max-height: 100%; width: 100%; height: 100%; object-fit: contain; }
.hero-top h1 { font-size: 2.4rem; line-height: 1.2; margin-bottom: 4px; }
.hero-subtitle { font-size: 1.3rem; color: var(--text-muted); margin-top: 8px; }
.hero-location { font-size: 0.9rem; color: var(--accent-color); margin-top: 4px; opacity: 0.8; }
.hero-what-we-build { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 20px 0; }
.hero-tag { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 8px 16px; font-size: 0.85rem; color: var(--text-muted); }
.hero-links { display: flex; justify-content: center; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
.hero-links a, .hero-links .nuxt-link { padding: 14px 28px; }
.btn-primary { background: var(--accent-color); color: #0a0e27; font-weight: 700; }
.btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-glow); }

.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
.pill-ai { background: rgba(99, 102, 241, 0.2); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
.pill-saas { background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.pill-client { background: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.3); }

/* Services card alignment — buttons sit at bottom */
.services-grid .card { display: flex; flex-direction: column; }
.services-grid .card .btn-glass { margin-top: auto; }
.service-icon { color: var(--accent-color); margin-bottom: 12px; text-align: center; }

/* Project card buttons - vertical stack, equal width, glassmorphic */
.card-links { display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-top: 16px; }
.card-links a, .card-links .nuxt-link { display: block; width: 100%; text-align: center; font-size: 0.85rem; padding: 10px 16px; border-radius: 12px; text-decoration: none; font-weight: 600; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-color); transition: all 0.3s ease; box-sizing: border-box; }
.card-links a:hover, .card-links .nuxt-link:hover { background: var(--accent-hover); color: #0a0e27; border-color: var(--accent-hover); transform: translateY(-2px); }

/* Align buttons at bottom of project cards */
.projects-grid .card { display: flex !important; flex-direction: column !important; }
.projects-grid .card h3, .projects-grid .card p { flex: 1; }

/* Testimonial card alignment */
.testimonials-grid .card { display: flex !important; flex-direction: column !important; }
.testimonials-grid .card p { flex: 1; }
.testimonials-grid .card strong { margin-top: auto; }

.section-cta { text-align: center; }
#services, #projects, #testimonials, #cta, #contact { max-width: 1280px; margin: 0 auto; padding: 40px 20px; min-height: auto !important; justify-content: flex-start !important; }
.cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 20px; }

/* Mobile fixes */
@media (max-width: 768px) {
  #services, #projects, #testimonials, #cta, #contact {
    padding: 32px 16px;
    min-height: auto !important;
  }
  section { min-height: auto !important; }
}



/* Contact section */
section#contact { min-height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px 20px 30px; }
.contact-inner { max-width: 700px; width: 100%; text-align: center; }
.contact-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
.contact-links a { padding: 10px 20px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: var(--accent-color); text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.contact-links a:hover { background: var(--accent-color); color: #0a0e27; transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-glow); }
.contact-subnote { margin-top: 24px; color: var(--text-muted); font-size: 0.9rem; }
@media (max-width: 900px) { .contact-links { flex-direction: column; gap: 10px; } .contact-links a { width: 100%; text-align: center; } }

.services-teaser-text { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px; }

/* Testimonial enhancements */
.testimonial-header { margin-bottom: 16px; }
.testimonial-meta { display: flex; flex-direction: column; gap: 2px; }
.testimonial-name { font-size: 1rem; color: var(--text-color); }
.testimonial-role { font-size: 0.85rem; color: var(--text-muted); }
.testimonial-project { display: flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 0.85rem; }
.testimonial-project-label { color: var(--text-muted); font-weight: 600; }
.testimonial-project-link { color: var(--accent-color); text-decoration: none; font-weight: 600; }
.testimonial-project-link:hover { text-decoration: underline; }
.testimonial-sep { color: var(--text-muted); }


</style>