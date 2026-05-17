<template>
  <div>
    <PageHeader title="About NemesisNet" subtitle="Engineering-first. Infrastructure-led. No API wrapper theatre." />

    <div class="detail-container about-container">
      <div class="detail-main">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">About</span>
        </nav>

        <h2>What NemesisNet Builds</h2>
        <p>NemesisNet builds AI infrastructure and full-stack systems for real production workloads. The portfolio includes self-hosted AI runtimes, text-to-speech pipelines, MCP integrations, agent automation backends, and production-grade full-stack platforms.</p>
        <p>Most studios offering "AI services" are connecting third-party APIs and calling it integration. <strong>NemesisNet architects, deploys, and operates the underlying systems:</strong> local AI runtimes, agent pipelines, automation infrastructure, and cloud-neutral deployments running on hardware that is physically controlled. Every system ships to production standards — clean architecture, automated testing, Dockerized deployment, and continuous delivery.</p>

        <h2>The Engineer Behind NemesisNet</h2>
        <div class="founder-grid">
          <div class="founder-photo">
            <img src="/images/about/founder.webp" alt="Peter Buckingham" class="founder-img" fetchpriority="high" loading="eager">
            <p class="photo-caption">Self-taught systems architect &amp; founder of NemesisNet, based in Cape Town.</p>
          </div>
          <div class="founder-bio">
            <p>NemesisNet is run by <strong>Peter Buckingham</strong> — a self-taught engineer and systems architect based in Cape Town, South Africa. His path into engineering was unconventional: he completed night school while working full-time, eventually earning a <strong>BTech in Information Technology from CPUT</strong> (Cape Peninsula University of Technology). The discipline of structured engineering education combined with years of hands-on self-directed learning gave him a rare ability to bridge theory and production practice.</p>
            <p>He has been building production systems from first principles since the GPT-2 era, watching the AI infrastructure landscape evolve from experimental research to mission-critical enterprise workloads. His early specialization in <strong>text-to-speech infrastructure</strong> dates back to 2013 — years before TTS became an industry trend — building voice synthesis pipelines that ran on constrained hardware with minimal latency.</p>
            <p>What sets Peter apart is the <strong>self-sufficiency angle</strong>: he doesn't just architect systems, he runs them. His <strong>14-node Dell rack homelab</strong> serves as the production backbone for NemesisNet's own products — the systems showcased on this site run on hardware he physically owns, configures, and maintains. This isn't cloud-only theory; it's infrastructure practice grounded in real hardware management, rack networking, power planning, and the kind of operational awareness that only comes from being the person who gets paged at 3 AM.</p>
            <p>All NemesisNet engagements leverage this hands-on infrastructure expertise. Peter leads architecture decisions, code reviews, and deployment strategy — ensuring every project benefits from production-grade engineering, not just development aesthetics.</p>
          </div>
        </div>

        <h2>Project Portfolio Highlights</h2>
        <p>A selection of systems Peter has architected or built at NemesisNet:</p>
        <div class="project-highlights">
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/pockettts-mcp">PocketTTS-MCP</NuxtLink></strong>
            <span>MCP server wrapping Kyutai's Pocket TTS for agent-native text-to-speech</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/kokoro-tts">Kokoro TTS Service</NuxtLink></strong>
            <span>Self-hosted AI TTS web service on the Kokoro open-source engine</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/voxnemesis-supertonic">VoxNemesis Supertonic</NuxtLink></strong>
            <span>Local-first TTS browser extension with WebGPU acceleration</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/wordpress-mcp">WordPress MCP Server</NuxtLink></strong>
            <span>MCP bridge for AI agents to manage WordPress content securely</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/since">Since — Temporal Claim Registry</NuxtLink></strong>
            <span>Full-stack multi-tenant temporal claim management platform</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/codecritical-saas">CodeCritical SaaS</NuxtLink></strong>
            <span>Enterprise security scanning platform with multi-tenant architecture</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/forkmyfolio">ForkMyFolio</NuxtLink></strong>
            <span>Multi-user portfolio platform with content creation workflows</span>
          </div>
          <div class="project-highlight">
            <strong><NuxtLink to="/projects/onthegorentals">OnTheGoRentals</NuxtLink></strong>
            <span>Complete rental booking platform with payment processing</span>
          </div>
        </div>

        <h2>Track Record</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <strong class="stat-number">20+</strong>
            <span class="stat-label">Systems Delivered</span>
          </div>
          <div class="stat-card">
            <strong class="stat-number">14</strong>
            <span class="stat-label">Homelab Nodes</span>
          </div>
          <div class="stat-card">
            <strong class="stat-number">10+</strong>
            <span class="stat-label">Years Engineering</span>
          </div>
          <div class="stat-card">
            <strong class="stat-number">Self-Hosted</strong>
            <span class="stat-label">AI Infrastructure & Pipelines</span>
          </div>
          <div class="stat-card">
            <strong class="stat-number">Open Source</strong>
            <span class="stat-label">Active Contributor</span>
          </div>
          <div class="stat-card">
            <strong class="stat-number">End-to-End</strong>
            <span class="stat-label">Full Stack Ownership</span>
          </div>
        </div>

        <h2>Core Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <strong>Infrastructure-First</strong>
            <span>We think about deployment, monitoring, and scaling before we write application code. Systems that can't be deployed reliably shouldn't exist.</span>
          </div>
          <div class="value-card">
            <strong>No Vendor Lock-in</strong>
            <span>Your infrastructure, your data, your models. We build systems you can run, modify, and own — not systems that require someone else's API to function.</span>
          </div>
          <div class="value-card">
            <strong>Production-Obsessed</strong>
            <span>We care about what happens at 3 AM under load, not just what looks good in a demo. Observability, graceful degradation, and automated recovery are non-negotiable.</span>
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
          <NuxtLink to="/projects" class="btn-glass">See the Work →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About | NemesisNet — AI Infrastructure Engineer in Cape Town, South Africa',
  meta: [
    { name: 'description', content: 'About NemesisNet — AI infrastructure, platform engineering, and full-stack development by Peter Buckingham. Based in Cape Town, South Africa.' },
    { property: 'og:title', content: 'About | NemesisNet' },
    { property: 'og:description', content: 'Systems architect specializing in AI infrastructure, TTS pipelines, and production full-stack platforms. Based in Cape Town, South Africa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dev.nemesisnet.co.za/about' },
    { property: 'og:image', content: 'https://dev.nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/about' }
  ],
  script: [
    {
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
        'description': 'Self-taught systems architect specializing in AI infrastructure, TTS pipelines, and production full-stack platforms. BTech in IT from CPUT, Cape Town.',
        'knowsAbout': ['Python', 'Spring Boot', 'Vue 3', 'Docker', 'AI Infrastructure', 'TTS', 'MCP', 'PostgreSQL', 'Redis', 'Kubernetes', 'CI/CD', 'Linux Systems Administration'],
        'alumniOf': {
          '@type': 'EducationalOrganization',
          'name': 'Cape Peninsula University of Technology',
          'location': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Cape Town',
              'addressRegion': 'Western Cape',
              'addressCountry': 'ZA'
            }
          }
        },
        'award': 'BTech in Information Technology',
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
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://nemesisnet.co.za/about' }
        ]
      })
    }
  ]
})
</script>

<style>
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px 20px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; color: var(--accent-color); }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
.back-link { text-align: center; margin-top: 40px; }
.stack-tags { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px; }
.stack-tag { padding: 8px 16px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--text-color); font-size: 0.9rem; }

.founder-grid { display: grid; grid-template-columns: 280px 1fr; gap: 32px; margin: 24px 0; align-items: start; }
.founder-photo { position: sticky; top: 100px; }
.founder-img { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
.photo-placeholder { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 40px 20px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.photo-icon { font-size: 3rem; }
.photo-label { font-size: 0.9rem; color: var(--text-muted); font-weight: 600; }
.photo-caption { font-size: 0.85rem; color: var(--text-muted); text-align: center; margin-top: 12px; }
.founder-bio p { color: var(--text-muted); margin-bottom: 16px; font-size: 0.95rem; }

.project-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
.project-highlight { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; padding: 16px; }
.project-highlight strong { display: block; color: var(--accent-color); margin-bottom: 4px; font-size: 0.95rem; }
.project-highlight span { font-size: 0.85rem; color: var(--text-muted); }
.project-highlight a { color: inherit; text-decoration: none; }
.project-highlight a:hover { text-decoration: underline; }

.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.stat-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; text-align: center; }
.stat-number { display: block; font-size: 1.8rem; color: var(--accent-color); font-weight: 700; margin-bottom: 4px; }
.stat-label { font-size: 0.85rem; color: var(--text-muted); }

.values-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0; }
.value-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.value-card strong { color: var(--accent-color); display: block; margin-bottom: 8px; font-size: 1rem; }
.value-card span { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }

@media (max-width: 900px) {
  .founder-grid { grid-template-columns: 1fr; }
  .founder-photo { position: static; }
  .project-highlights { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>