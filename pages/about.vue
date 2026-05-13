<template>
  <div>
    <PageHeader title="About NemesisNet" subtitle="Engineering-first. Infrastructure-led. No API wrapper theatre." />

    <div class="detail-container about-container">
      <div class="detail-main">
        <h2>What NemesisNet Builds</h2>
        <p>NemesisNet builds AI infrastructure and full-stack systems for real production workloads. The portfolio includes self-hosted AI runtimes, text-to-speech pipelines, MCP integrations, agent automation backends, and production-grade full-stack platforms.</p>
        <p>Most studios offering "AI services" are connecting third-party APIs and calling it integration. <strong>NemesisNet architects, deploys, and operates the underlying systems:</strong> local AI runtimes, agent pipelines, automation infrastructure, and cloud-neutral deployments running on hardware that is physically controlled.</p>
        <p>Every system ships to production standards — clean architecture, automated testing, Dockerized deployment, and continuous delivery.</p>

        <h2>The Engineer</h2>
        <p>NemesisNet is run by Peter Buckingham — a self-taught engineer and systems architect based in Cape Town. He completed night school before earning a BTech in IT at CPUT, and has been building production systems from first principles since the GPT-2 era. His specialisation in text-to-speech infrastructure dates back to 2013, years before it became an industry trend. He operates a 14-node Dell rack homelab that serves as the production backbone for NemesisNet's own products — the systems on this site run on hardware he physically owns and maintains, not rented cloud capacity.</p>

        <h2>Track Record</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:24px;margin:40px 0;">
          <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:16px;padding:24px;text-align:center;">
            <strong style="display:block;font-size:2rem;color:var(--accent-color);">20+</strong>
            <span>Systems Delivered</span>
          </div>
          <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:16px;padding:24px;text-align:center;">
            <strong style="display:block;font-size:1.2rem;">Self-Hosted AI</strong>
            <span style="color:var(--text-muted);font-size:0.9rem;">Infrastructure & Pipelines</span>
          </div>
          <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:16px;padding:24px;text-align:center;">
            <strong style="display:block;font-size:1.2rem;">Open Source</strong>
            <span style="color:var(--text-muted);font-size:0.9rem;">Contributor</span>
          </div>
          <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:16px;padding:24px;text-align:center;">
            <strong style="display:block;font-size:1.2rem;">End-to-End</strong>
            <span style="color:var(--text-muted);font-size:0.9rem;">Infrastructure Expertise</span>
          </div>
        </div>

        <h2>Stack</h2>
        <div class="stack-tags">
          <span class="stack-tag">Java Spring Boot 3</span>
          <span class="stack-tag">Vue 3</span>
          <span class="stack-tag">Nuxt 3</span>
          <span class="stack-tag">React</span>
          <span class="stack-tag">Python</span>
          <span class="stack-tag">PostgreSQL</span>
          <span class="stack-tag">MySQL</span>
          <span class="stack-tag">Redis</span>
          <span class="stack-tag">Docker</span>
          <span class="stack-tag">Docker Compose</span>
          <span class="stack-tag">Nginx</span>
          <span class="stack-tag">PocketBase</span>
          <span class="stack-tag">Spring Security</span>
          <span class="stack-tag">JWT</span>
          <span class="stack-tag">RabbitMQ</span>
          <span class="stack-tag">Cloudflare</span>
          <span class="stack-tag">Linux</span>
          <span class="stack-tag">CI/CD</span>
          <span class="stack-tag">MCP</span>
          <span class="stack-tag">TTS</span>
          <span class="stack-tag">REST APIs</span>
          <span class="stack-tag">Git</span>
          <span class="stack-tag">ESPHome</span>
        </div>

        <div class="back-link">
          <NuxtLink to="/projects" class="btn-glass">See the work →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About | NemesisNet',
  meta: [
    { name: 'description', content: 'About NemesisNet — AI infrastructure, platform engineering, and full-stack development by Peter Buckingham. Cape Town, South Africa.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/about' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://nemesisnet.co.za/#person',
      'name': 'Peter Buckingham',
      'jobTitle': 'Systems Architect & Engineer',
      'worksFor': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
      'url': 'https://nemesisnet.co.za/about',
      'image': 'https://dev.nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png',
      'description': 'Self-taught systems architect specializing in AI infrastructure, TTS pipelines, and production full-stack platforms.',
      'knowsAbout': ['Python', 'Spring Boot', 'Vue 3', 'Docker', 'AI Infrastructure', 'TTS', 'MCP', 'PostgreSQL', 'Redis'],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Cape Town',
        'addressRegion': 'Western Cape',
        'addressCountry': 'ZA'
      },
      'sameAs': [
        'https://github.com/NemesisGuy',
        'https://www.linkedin.com/in/peter-buckingham-65438757'
      ]
    })
  }]
})
</script>

<style>
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px 20px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; color: var(--accent-color); }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.back-link { text-align: center; margin-top: 40px; }
.stack-tags { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px; }
.stack-tag { padding: 8px 16px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--text-color); font-size: 0.9rem; }
</style>
