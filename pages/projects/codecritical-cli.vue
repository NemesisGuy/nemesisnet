<template>
  <div class="detail-page">
    <PageHeader title="CodeCritical CLI" subtitle="Comprehensive Java code analysis CLI tool for measuring quality and maintainability." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/codecritical/optimized/hero.webp'" class="detail-image" alt="CodeCritical CLI" loading="lazy">
        
        <h2>The Challenge</h2>
        <p>In large Java codebases, technical debt accumulates rapidly. Manual code reviews are time-consuming and often miss subtle structural issues that lead to long-term maintainability problems.</p>
        
        <h2>The Solution</h2>
        <p>CodeCritical is a Java code analysis tool that gives developers in-depth insights into their codebase. It tracks metrics like lines of code, functions, classes, maintainability index, and code duplication — helping teams measure and improve code quality, maintainability, and readability.</p>
        
        <h2>Key Features</h2>
        <ul class="arch-list">
          <li><strong>File Line Counting:</strong> Total lines, code lines, comment lines, and blank lines per file</li>
          <li><strong>Function Counting:</strong> Detects and counts method signatures to evaluate complexity</li>
          <li><strong>Class & Interface Detection:</strong> Identifies object-oriented components in the architecture</li>
          <li><strong>Code Duplication Detection:</strong> Finds identical code blocks to enforce DRY principles</li>
          <li><strong>Maintainability Index:</strong> Calculates MI score based on LOC, cyclomatic complexity, and comment density</li>
          <li><strong>Markdown Report Generation:</strong> Outputs professional reports with file-level metrics</li>
          <li><strong>Grand Totals:</strong> Project-wide metric summaries for tracking trends over time</li>
        </ul>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass">View Source</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/codecritical-saas" class="btn-glass">Next Project → CodeCritical SaaS</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Stack:</span> <strong>Java 100%</strong></li>
            <li><span>Role:</span> <strong>Lead Engineer</strong></li>
            <li><span>Type:</span> <strong>CLI Analysis Tool</strong></li>
            <li><span>License:</span> <strong>MIT</strong></li>
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
  title: 'CodeCritical CLI | Java Code Analysis & Quality Metric Tool | NemesisNet',
  meta: [
    { name: 'description', content: 'Comprehensive Java code analysis CLI tool for measuring LOC, class complexity, code duplication, and maintainability index scores.' },
    { property: 'og:title', content: 'CodeCritical CLI | Java Code Analysis & Quality Metric Tool | NemesisNet' },
    { property: 'og:description', content: 'Measure Java code maintainability, duplication, complexity and LOC using a professional, local static analysis CLI.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/codecritical-cli' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/codecritical/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/codecritical-cli' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'CodeCritical CLI',
        'operatingSystem': 'Windows, Linux, macOS',
        'applicationCategory': 'DeveloperApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'Comprehensive Java static analysis CLI tool to inspect code duplications, line counting metrics, and calculate maintainability index scores.',
        'author': {
          '@type': 'Person',
          'name': 'Peter Buckingham',
          'url': 'https://nemesisnet.co.za/about'
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
          { '@type': 'ListItem', 'position': 3, 'name': 'CodeCritical CLI', 'item': 'https://nemesisnet.co.za/projects/codecritical-cli' }
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
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-main ul { margin: 15px 0 25px 20px; color: var(--text-muted); }
.detail-main li { margin-bottom: 8px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
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
