<template>
  <div class="detail-page">
    <PageHeader title="CodeCritical SaaS" subtitle="Enterprise-grade security scanning SaaS with multi-tenant architecture." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/codecritical-saas/optimized/hero.webp'" class="detail-image" alt="CodeCritical SaaS" loading="lazy">
        
        <h2>The Challenge</h2>
        <p>In large codebases, technical debt accumulates rapidly. Manual code reviews are time-consuming and often miss subtle structural issues that lead to long-term maintainability problems. Enterprise teams needed a unified platform that combines security scanning, static analysis, and architecture validation.</p>
        
        <h2>The Solution</h2>
        <p>CodeCritical SaaS is a security scanning platform that combines container vulnerability scanning, static analysis, and custom architecture rules into a single platform. It gives developers immediate visibility into vulnerabilities, code quality issues, and architectural drift before they reach production.</p>
        
        <h2>Technical Implementation</h2>
        <p>The platform uses a Spring Boot backend with a modern Java runtime, fronted by a Vue 3 SPA with Pinia state management. The system implements shared-database multi-tenancy with row-level security using tenant-aware partitioning. Authentication uses custom JWT handlers with refresh token rotation and role-based access control.</p>

        <h3>Architecture Highlights</h3>
        <ul class="arch-list">
          <li><strong>Edge Layer:</strong> Nginx Gateway handles routing and SSL termination</li>
          <li><strong>Application Layer:</strong> Vue 3 frontend + Spring Boot API</li>
          <li><strong>Data Layer:</strong> PostgreSQL relational store + Redis cache layer</li>
          <li><strong>Multi-Tenancy:</strong> Shared database with tenant isolation and row-level security</li>
          <li><strong>Authentication:</strong> Stateless JWTs with role-based claims</li>
          <li><strong>Scan Pipeline:</strong> Redis-backed queue with async job processing</li>
          <li><strong>Cache Strategy:</strong> Write-through pattern with configurable TTL for scan results and dashboard stats</li>
        </ul>

        <h3>Frontend Architecture</h3>
        <p>The Vue 3 frontend uses a composite navigation header with component-based architecture. The Admin Hub provides admin sections for user management, request handling, scan monitoring, capacity planning, and feedback. A platform banner system enables announcement management.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass">View Source</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/onthegorentals" class="btn-glass">Next Project → OntheGoRentals</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>Stable Release</strong></li>
            <li><span>Stack:</span> <strong>Java, Spring Boot, Vue 3, PostgreSQL, Redis, Nginx</strong></li>
            <li><span>Role:</span> <strong>Lead Engineer</strong></li>
            <li><span>Status:</span> <strong>In Development</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Components</h4>
          <ul class="sidebar-list">
            <li><span>Gateway:</span> <strong>Nginx</strong></li>
            <li><span>Frontend:</span> <strong>Vue3 SPA</strong></li>
            <li><span>Backend:</span> <strong>Spring Boot</strong></li>
            <li><span>Database:</span> <strong>PostgreSQL</strong></li>
            <li><span>Cache:</span> <strong>Redis</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass">View Source</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'CodeCritical SaaS | Enterprise Security Scanning Platform | NemesisNet',
  meta: [
    { name: 'description', content: 'Enterprise-grade security scanning SaaS with multi-tenant architecture, custom JWT authentication, and high-performance async scan pipelines.' },
    { property: 'og:title', content: 'CodeCritical SaaS | Enterprise Security Scanning Platform | NemesisNet' },
    { property: 'og:description', content: 'Multi-tenant security scanning platform with container vulnerability checks, static analysis, and custom architectural validation.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/codecritical-saas' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/codecritical-saas/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/codecritical-saas' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'CodeCritical SaaS',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'DeveloperApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'Enterprise-grade security scanning SaaS with multi-tenant architecture, custom JWT authentication, and high-performance async scan pipelines.',
        'author': {
          '@type': 'Person',
          'name': 'Peter Buckingham',
          'url': 'https://nemesisnet.co.za/about'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'NemesisNet',
          'url': 'https://nemesisnet.co.za'
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://nemesisnet.co.za/projects' },
          { '@type': 'ListItem', 'position': 3, 'name': 'CodeCritical SaaS', 'item': 'https://nemesisnet.co.za/projects/codecritical-saas' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main h3 { font-size: 1.4rem; margin: 30px 0 15px; text-align: left; color: var(--text-color); }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-main ul { margin: 15px 0 25px 20px; color: var(--text-muted); }
.detail-main li { margin-bottom: 8px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
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
.arch-list { list-style: none; padding: 0; margin: 15px 0 25px 0; }
.arch-list li { padding: 8px 0; border-bottom: 1px solid var(--glass-border); }
.arch-list li:last-child { border-bottom: none; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }
</style>
