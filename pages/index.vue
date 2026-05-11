<template>
  <!-- Hero Section -->
  <header>
    <div class="hero-top">
      <div class="avatar-wrap" aria-hidden="false">
        <img :src="'/images/brand/Nemesis_Logo_Icon.webp'" class="avatar-img" alt="NemesisNet logo" loading="eager" fetchpriority="high" decoding="async" width="256" height="256">
      </div>
      <div>
        <h1>NemesisNet</h1>
        <p class="hero-subtitle">We build real infrastructure — not API wrappers.</p>
      </div>
    </div>
    <div class="hero-content">
      <p class="hero-intro"><strong>NemesisNet</strong> builds AI infrastructure and full-stack systems for real production workloads.</p>
      <div class="hero-links">
        <NuxtLink to="/projects">Our Work</NuxtLink>
        <a href="https://blog.nemesisnet.co.za/" target="_blank" rel="noopener noreferrer" title="Visit the NemesisNet Blog" aria-label="NemesisNet Blog">Our Blog</a>
        <a href="https://github.com/NemesisGuy" target="_blank">GitHub</a>
        <a href="/#contact" data-email-link="primary">Contact Us</a>
        <a href="https://forkmyfolio.nemesisnet.co.za/nemesis/" target="_blank">Our Portfolio</a>
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
        <h3>Custom Software Development</h3>
        <p>End-to-end application development with clean architecture and modern frameworks.</p>
        <NuxtLink to="/services/custom-software" class="btn-glass">Learn More</NuxtLink>
      </div>
      <div class="card">
        <h3>SaaS Development</h3>
        <p>Scalable multi-tenant platforms with authentication, billing, and APIs.</p>
        <NuxtLink to="/services/saas-dev" class="btn-glass">Learn More</NuxtLink>
      </div>
      <div class="card">
        <h3>Infrastructure & DevOps</h3>
        <p>Docker, CI/CD, cloud networking, and infrastructure automation.</p>
        <NuxtLink to="/services/infrastructure" class="btn-glass">Learn More</NuxtLink>
      </div>
      <div class="card">
        <h3>Consulting & Architecture</h3>
        <p>System design, code reviews, and technical leadership for teams.</p>
        <NuxtLink to="/services/consulting" class="btn-glass">Learn More</NuxtLink>
      </div>
    </div>
    <div class="section-cta">
      <NuxtLink to="/services" class="btn-glass">View Services & Pricing</NuxtLink>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section id="projects">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
      <div class="card">
        <span class="pill pill-ai">AI & TTS</span>
        <img :src="'/images/projects/voxnemesis-supertonic/optimized/hero.webp'" alt="VoxNemesis Supertonic" loading="lazy">
        <h3>VoxNemesis Supertonic</h3>
        <p>Local-first TTS browser extension with WebGPU.</p>
        <div class="card-links">
          <NuxtLink to="/projects/voxnemesis-supertonic" class="btn-glass">Detail</NuxtLink>
          <a href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank" class="btn-glass">Blog</a>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-saas">SaaS Platform</span>
        <img :src="'/images/projects/since/optimized/hero.webp'" alt="Since" loading="lazy">
        <h3>Since</h3>
        <p>Temporal claim registry with cryptographic proof.</p>
        <div class="card-links">
          <NuxtLink to="/projects/since" class="btn-glass">Detail</NuxtLink>
          <a href="https://since.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-saas">SaaS Platform</span>
        <img :src="'/images/projects/forkmyfolio/optimized/hero.webp'" alt="ForkMyFolio" loading="lazy">
        <h3>ForkMyFolio</h3>
        <p>Portfolio-as-a-service platform for developers.</p>
        <div class="card-links">
          <NuxtLink to="/projects/forkmyfolio" class="btn-glass">Detail</NuxtLink>
          <a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
      </div>
      <div class="card">
        <span class="pill pill-client">Showcase</span>
        <img :src="'/images/projects/onthegorentals/optimized/hero.webp'" alt="OnTheGoRentals" loading="lazy">
        <h3>OnTheGoRentals</h3>
        <p>Full-stack reference build with bookings, admin dashboard, and rental management.</p>
        <div class="card-links">
          <NuxtLink to="/projects/onthegorentals" class="btn-glass">Detail</NuxtLink>
          <a href="https://onthegorentals.co.za" target="_blank" class="btn-glass">Live Demo</a>
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
        <p>"The project was delivered quickly without compromising quality. Everything was set up and deployed with no issues."</p>
        <strong>— NK Assessments, Business Owner</strong>
      </div>
      <div class="card">
        <p>"NemesisNet delivered a clean, well-structured system that worked as expected from day one. Communication was clear and the process was smooth."</p>
        <strong>— Bored Room Cafe, Business Owner</strong>
      </div>
    </div>
  </section>

  <!-- Services Teaser -->
  <section id="services-teaser">
    <h2>Pricing & Scoping</h2>
    <p class="services-teaser-text">Every system is classified by complexity, risk, and workflow requirements — then right-sized with transparent starting-from pricing.</p>
    <NuxtLink to="/services" class="btn-glass">View Services & Pricing →</NuxtLink>
  </section>

  <!-- CTA Section -->
  <section id="cta">
    <h2>Ready to Start Your Project?</h2>
    <p class="services-teaser-text">Let's discuss how NemesisNet can engineer your next platform, infrastructure, or automation system.</p>
    <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Scope Your Project</a>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="contact-inner">
      <h2>Get in Touch</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <p>Get in touch. I review every submission personally and respond within 24 hours.</p>
          <div class="contact-links">
            <a href="mailto:admin@nemesisnet.co.za">Email</a>
            <a href="https://github.com/NemesisGuy" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/peter-buckingham-65438757" target="_blank">LinkedIn</a>
            <a href="https://forkmyfolio.nemesisnet.co.za/nemesis" target="_blank">Portfolio</a>
          </div>
        </div>
        <form class="contact-form" @submit="handleContact">
          <label for="cname">Name</label>
          <input id="cname" v-model="formName" type="text" placeholder="Your name" required>
          <label for="cemail">Email</label>
          <input id="cemail" v-model="formEmail" type="email" placeholder="you@domain.com" required>
          <label for="cmessage">Message</label>
          <textarea id="cmessage" v-model="formMessage" placeholder="How can I help?" required></textarea>
          <button type="submit">Send Message</button>
          <small style="color:var(--text-muted); text-align:center; margin-top:-8px;">Messages are sent via your email client.</small>
        </form>
      </div>
      <p class="contact-subnote">Also available for WordPress, WooCommerce, and CMS projects - enquire directly.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')

const handleContact = (e) => {
  e.preventDefault()
  const name = formName.value.trim()
  const email = formEmail.value.trim()
  const message = formMessage.value.trim()
  const subject = encodeURIComponent(`Website contact from ${name}`)
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`)
  const mailto = `mailto:admin@nemesisnet.co.za?subject=${subject}&body=${body}`
  window.location.href = mailto
}

useHead({
  title: 'NemesisNet — AI Infrastructure & Platform Engineering',
  meta: [
    { name: 'description', content: 'NemesisNet engineers AI-powered platforms, backend systems, and automation infrastructure.' },
    { property: 'og:title', content: 'NemesisNet — AI Infrastructure & Platform Engineering' },
    { property: 'og:description', content: 'Engineering AI-powered platforms, backend systems, and automation infrastructure.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dev.nemesisnet.co.za/' },
    { property: 'og:image', content: 'https://dev.nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/' }
  ]
})
</script>

<style scoped>
.services-grid { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 20px; }
@media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
@media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; gap: 14px; } }

.projects-grid { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 20px; }
@media (max-width: 1100px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; gap: 14px; } }

.hero-subtitle { font-size: 1.3rem; color: var(--text-muted); margin-top: 4px; }

.pill { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
.pill-ai { background: rgba(99, 102, 241, 0.2); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
.pill-saas { background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
.pill-tools { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }
.pill-client { background: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.3); }

/* Services card alignment — buttons sit at bottom */
.services-grid .card .btn-glass {
  margin-top: auto;
}

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
#services, #projects, #testimonials, #services-teaser, #cta, #contact { max-width: 1200px; margin: 0 auto; padding: 40px 20px; min-height: auto !important; justify-content: flex-start !important; }

/* Mobile fixes */
@media (max-width: 768px) {
  #services, #projects, #testimonials, #services-teaser, #cta, #contact {
    padding: 32px 16px;
    min-height: auto !important;
  }
  section { min-height: auto !important; }
}



/* Contact section */
section#contact { min-height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px 20px 30px; }
.contact-inner { max-width: 700px; width: 100%; text-align: center; }
.contact-grid { display: flex; flex-direction: column; gap: 24px; margin-top: 32px; }
.contact-info { text-align: center; padding: 32px; background: var(--glass-bg); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid var(--glass-border); border-radius: 20px; }
.contact-info p { margin-bottom: 12px; line-height: 1.7; font-size: 1rem; }
.contact-info p:first-child { font-size: 1.1rem; margin-bottom: 24px; color: var(--text-color); }
.contact-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 20px; }
.contact-links a { padding: 10px 20px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: var(--accent-color); text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.contact-links a:hover { background: var(--accent-color); color: #0a0e27; transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-glow); }
.contact-form { display: flex; flex-direction: column; gap: 16px; padding: 32px; background: var(--glass-bg); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid var(--glass-border); border-radius: 20px; }
.contact-form label { font-weight: 600; color: var(--text-color); text-align: left; font-size: 0.9rem; margin-bottom: -10px; }
.contact-form input, .contact-form textarea { width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid var(--glass-border); background: rgba(0,0,0,0.2); color: var(--text-color); font-size: 0.95rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); font-family: inherit; }
.contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 0 3px var(--accent-glow); background: rgba(0,0,0,0.3); }
.contact-form textarea { resize: vertical; min-height: 120px; }
.contact-form button { cursor: pointer; background: linear-gradient(135deg, var(--accent-color), var(--secondary-accent)); color: white; border: none; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 1rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 8px 24px var(--accent-glow); margin-top: 4px; }
.contact-form button:hover { transform: translateY(-2px); box-shadow: 0 12px 32px var(--accent-glow); }
.contact-subnote { margin-top: 24px; color: var(--text-muted); font-size: 0.9rem; }
@media (max-width: 900px) { .contact-inner { padding: 0; } .contact-info, .contact-form { padding: 24px; } .contact-links { flex-direction: column; gap: 10px; } .contact-links a { width: 100%; text-align: center; } }

/* Services Teaser */
#services-teaser { text-align: center; }
.services-teaser-text { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px; }
</style>