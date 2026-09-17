<template>
  <div class="detail-page">
    <PageHeader title="CI/CD Engineering" subtitle="Pipeline architecture, implementation, and maintenance — from new builds to production deployment automation." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">CI/CD Engineering</span>
        </div>

        <h2>What This Service Is</h2>
        <p>CI/CD engineering covers the design, implementation, and maintenance of continuous integration and deployment pipelines. This includes pipeline architecture, GitHub/Gitea/Woodpecker integration, Docker build pipelines, automated deployment, and pipeline security.</p>
        <p>New CI/CD implementation is generally a project. Ongoing maintenance can be handled through the DevOps Retainer or hourly engineering.</p>

        <h2>Who It's For</h2>
        <p><strong>Teams that need a deployment pipeline built</strong> — from zero to production-ready CI/CD. <strong>Projects moving from manual deploys to automated pipelines.</strong> <strong>Organisations needing pipeline modernisation</strong> — migrating from one CI/CD system to another.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> CI/CD architecture and design</li>
          <li><CheckCircle :size="18" /> Pipeline implementation (GitHub Actions, Woodpecker, Gitea)</li>
          <li><CheckCircle :size="18" /> Docker build pipelines</li>
          <li><CheckCircle :size="18" /> Automated deployment workflows</li>
          <li><CheckCircle :size="18" /> Pipeline troubleshooting and optimisation</li>
          <li><CheckCircle :size="18" /> Pipeline security improvements</li>
          <li><CheckCircle :size="18" /> Deployment automation</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Ongoing pipeline maintenance (use DevOps Retainer)</li>
          <li><XCircle :size="18" /> Application feature development</li>
          <li><XCircle :size="18" /> Server provisioning or infrastructure management</li>
          <li><XCircle :size="18" /> Monitoring or observability setup</li>
        </ul>
        <p class="scope-note">Ongoing pipeline maintenance is handled through the DevOps Retainer or hourly engineering.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Hourly</h3>
            <div class="compare-price">R1,200 – R1,400/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per task or per hour</li>
              <li>Ideal for pipeline troubleshooting</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Project-Scoped</h3>
            <div class="compare-price">Custom quote</div>
            <ul class="compare-list">
              <li>New CI/CD implementation</li>
              <li>Pipeline architecture and design</li>
              <li>Full build and deployment automation</li>
              <li>Scoped after discovery call</li>
            </ul>
          </div>
        </div>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Assessment</h3>
            <p>We review your current deployment process, tech stack, and requirements to design the right pipeline.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Design</h3>
            <p>Pipeline architecture is defined — triggers, stages, testing, deployment targets, and security controls.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Implement</h3>
            <p>Pipeline is built, tested, and deployed. Includes documentation and handover.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Ongoing</h3>
            <p>Ongoing maintenance is handled through the DevOps Retainer or hourly engineering as needed.</p>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'DevOps Retainer', description: 'Ongoing infrastructure and CI/CD maintenance capacity.', to: '/services/devops-retainer' },
            { title: 'Light Hosting', description: 'Infrastructure hosting for deployed systems.', to: '/services/light-hosting' }
          ]"
          exploring-note="From new pipeline builds to ongoing maintenance — choose the right service."
          :cta="{ heading: 'Need a deployment pipeline?', description: 'CI/CD architecture, implementation, and automation for your tech stack.', buttonLabel: 'Discuss Your Requirements', to: '/contact' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Hourly:</span> <strong>R1,200 – R1,400/hr</strong></li>
            <li><span>Project:</span> <strong>Custom quote</strong></li>
            <li><span>Scope:</span> <strong>Implementation</strong></li>
            <li><span>Maintenance:</span> <strong>DevOps Retainer</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/devops-retainer" class="btn-glass">DevOps Retainer</NuxtLink>
            <NuxtLink to="/services/light-hosting" class="btn-glass">Light Hosting</NuxtLink>
            <NuxtLink to="/contact" class="btn-glass">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle } from 'lucide-vue-next'

useHead({
  title: 'CI/CD Engineering — Pipeline Implementation | NemesisNet',
  meta: [
    { name: 'description', content: 'CI/CD pipeline architecture, implementation, and automation. GitHub Actions, Woodpecker, Docker build pipelines. R1,200–R1,400/hour. Cape Town, South Africa.' },
    { property: 'og:title', content: 'CI/CD Engineering | NemesisNet' },
    { property: 'og:description', content: 'Pipeline architecture, implementation, and automation for your tech stack. R1,200–R1,400/hour.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/cicd-engineering' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'CI/CD Engineering | Pipeline Implementation | NemesisNet' },
    { name: 'twitter:description', content: 'Pipeline architecture, implementation, and automation. R1,200–R1,400/hour.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/cicd-engineering' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'CI/CD Engineering',
        'description': 'CI/CD pipeline architecture, implementation, and automation.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '1500', 'priceCurrency': 'ZAR', 'description': 'Hourly rate, project-scoped quotes available' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/cicd-engineering'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' },
          { '@type': 'ListItem', 'position': 3, 'name': 'CI/CD Engineering', 'item': 'https://nemesisnet.co.za/services/cicd-engineering' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is CI/CD engineering?","acceptedAnswer":{"@type":"Answer","text":"The design, implementation, and maintenance of continuous integration and deployment pipelines. Includes pipeline architecture, Docker build pipelines, automated deployment, and pipeline security."}},{"@type":"Question","name":"Is CI/CD implementation a project or ongoing?","acceptedAnswer":{"@type":"Answer","text":"New CI/CD implementation is generally a project. Ongoing pipeline maintenance is handled through the DevOps Retainer or hourly engineering."}},{"@type":"Question","name":"What CI/CD systems do you support?","acceptedAnswer":{"@type":"Answer","text":"GitHub Actions, Woodpecker CI, Gitea Actions, and Docker-based pipelines. The right system is recommended based on your tech stack and requirements."}}]})
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) { .breadcrumbs { display: none !important; } }
.feature-list { list-style: none; padding: 0; margin: 0 0 24px; }
.feature-list li { padding: 8px 0; color: var(--text-muted); }
.scope-note { font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-top: -8px; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(50% - 10px); min-width: 280px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h3 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
.compare-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.compare-card--featured { border-color: var(--accent-color); }
.compare-card h3 { color: var(--accent-color); font-size: 1rem; margin: 0; }
.compare-price { font-size: 1.5rem; font-weight: 700; color: var(--text-color); }
.compare-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; flex: 1; }
.compare-list li { padding: 4px 0; color: var(--text-muted); }
.compare-list li::before { content: '✓ '; color: #22c55e; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h3 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: flex; justify-content: space-between; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .detail-sidebar { position: static; } .process-steps { grid-template-columns: 1fr; } .compare-grid { grid-template-columns: 1fr; } }
</style>
