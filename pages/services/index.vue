<template>
  <div>
    <PageHeader title="Services" subtitle="Engineering platforms, systems, and infrastructure for real production workloads." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>Core Services</h2>
        <div class="service-columns">
          <div class="card">
            <h3>Custom Software Development</h3>
            <p>End-to-end application development with clean architecture and modern frameworks.</p>
            <NuxtLink to="/services/custom-software" class="btn-glass">Learn More</NuxtLink>
          </div>
          <div class="card">
            <h3>SaaS Development</h3>
            <p>Scalable multi-tenant platforms with authentication, billing, and APIs.</p>
            <NuxtLink to="/services/saas-development" class="btn-glass">Learn More</NuxtLink>
          </div>
          <div class="card">
            <h3>AI Development</h3>
            <p>MCP agents, self-hosted TTS pipelines, and multi-agent coding harnesses.</p>
            <NuxtLink to="/services/ai-development" class="btn-glass">Learn More</NuxtLink>
          </div>
          <div class="card">
            <h3>Self-Hosted AI Infrastructure</h3>
            <p>GGUF models, GPU deployment, and vector databases — no vendor lock-in.</p>
            <NuxtLink to="/services/self-hosted-ai" class="btn-glass">Learn More</NuxtLink>
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

        <h2>How NemesisNet Works With Clients</h2>
        <p class="section-intro">Every engagement starts with understanding the business context. NemesisNet does not ship boilerplate — each system is scoped to the actual operational constraints, user workflows, and growth trajectory of the organization it serves. The goal is never to maximise billable hours; it is to ship production-grade infrastructure that continues to work long after deployment.</p>
        <p class="section-intro">Some projects need a lightweight internal tool built in days. Others need a full-scale platform engineered over months. In both cases, the approach is identical: understand the problem deeply, architect the right solution, and deliver something that runs reliably in production.</p>

        <h2>Software Development Life Cycle</h2>
        <p class="section-intro">NemesisNet adapts its delivery methodology to the constraints of each project. Whether you need the iterative speed of Agile or the structured predictability of Waterfall, the process is aligned to your business context.</p>

        <div class="service-columns sdlc-columns">
          <div class="card">
            <h3>Agile & Iterative</h3>
            <p>Two-week sprints with continuous stakeholder feedback. Ideal for MVPs, product evolution, and environments where requirements shift based on market response.</p>
            <ul class="service-list">
              <li>Sprint planning & retrospectives</li>
              <li>Daily standups & async updates</li>
              <li>Continuous integration & delivery</li>
              <li>Backlog grooming & prioritization</li>
            </ul>
          </div>
          <div class="card">
            <h3>Waterfall & Structured</h3>
            <p>Full scope definition upfront with gated milestones. Best suited for compliance-heavy systems, fixed-budget builds, and integrations where downstream dependencies are rigid.</p>
            <ul class="service-list">
              <li>Requirements sign-off & traceability</li>
              <li>Phased design, build, test, deploy</li>
              <li>Formal change control process</li>
              <li>Documentation-driven handoff</li>
            </ul>
          </div>
        </div>

        <div class="service-block">
          <h4>Quality Assurance</h4>
          <p>Automated testing is not an afterthought. Unit, integration, and end-to-end tests are written as features are built, maintaining coverage thresholds and running full suites in CI before every merge.</p>
        </div>
        <div class="service-block">
          <h4>DevOps Integration</h4>
          <p>Infrastructure is defined as code from day one. Containerized deployments, environment parity, and rollback-ready releases mean your platform stays stable as it scales.</p>
        </div>

        <h2>Pricing Guide</h2>
        <p class="pricing-trust">Most projects begin with a short discovery call to clarify scope, architecture, and timelines.</p>
        <p class="pricing-intro">Transparent starting-from pricing to help with planning. Final quotes are confirmed after a short discovery call and technical scoping session.</p>

        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3 class="pricing-title">Starter / Rapid Delivery</h3>
            <div class="pricing-price">R7,000 – R20,000</div>
            <div class="pricing-unit">Range</div>
            <p class="pricing-description">Lightweight web systems, client onboarding tools, MVPs, prototypes, and simple admin dashboards.</p>
            <p class="pricing-timeline">Delivery: 7–14 days</p>
            <ul class="pricing-points">
              <li>PocketBase-based apps or static frontend</li>
              <li>React or Vue frontend</li>
              <li>Docker + Nginx deployment included</li>
              <li>Basic SEO setup (if public-facing)</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Start A Project</a>
            </div>
          </div>
          <div class="card pricing-card pricing-card--featured">
            <div class="pricing-title-row">
              <h3 class="pricing-title">Pro Full-Stack Platform</h3>
              <span class="pricing-badge">Most Popular</span>
            </div>
            <div class="pricing-price">R110,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">End-to-end product builds with Vue 3 frontend, Spring Boot backend, secure auth, dashboards, and infrastructure.</p>
            <p class="pricing-timeline">Typically 6-14 weeks depending on scope</p>
            <ul class="pricing-points">
              <li>Architecture, testing strategy, and CI/CD readiness included.</li>
              <li>Built to ship and scale, not just to demo.</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Discuss Scope</a>
            </div>
          </div>
          <div class="card pricing-card">
            <h3 class="pricing-title">AI-Powered and Advanced Tooling</h3>
            <div class="pricing-price">R220,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Self-hosted AI systems for real workloads, including TTS pipelines, agent workflows, and LLM integrations.</p>
            <p class="pricing-timeline">Typically 8-16 weeks, scoped after technical discovery</p>
            <ul class="pricing-points">
              <li>Designed for security, performance, and long-term maintainability.</li>
              <li>Final quote is set after discovery and technical scoping.</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Plan AI Build</a>
            </div>
          </div>
        </div>

        <div class="pricing-grid" style="margin-top: 24px;">
          <div class="card pricing-card">
            <h3 class="pricing-title">Maintenance and Retainers</h3>
            <div class="pricing-price">R850</div>
            <div class="pricing-unit">Monthly, from</div>
            <p class="pricing-description">Two ongoing support levels so you can match budget to operational needs.</p>
            <ul class="pricing-points">
              <li>Light Hosting: from R850/month for hosting, patches, and uptime checks.</li>
              <li>Managed Retainer: from R4,500/month for CI/CD, monitoring, fixes, and continuous improvement.</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Choose Support Tier</a>
            </div>
          </div>
          <div class="card pricing-card">
            <h3 class="pricing-title">AI Architecture / Consulting</h3>
            <div class="pricing-price">R10,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Half-day to full-day working sessions for teams making serious AI or platform decisions.</p>
            <p class="pricing-timeline">Half-day or full-day sessions, booked in advance</p>
            <ul class="pricing-points">
              <li>Platform reviews, workflow design, and technical roadmapping.</li>
              <li>Best before you build, not after something breaks.</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Book Session</a>
            </div>
          </div>
          <div class="card pricing-card">
            <h3 class="pricing-title">Custom MCP and Agent Integrations</h3>
            <div class="pricing-price">R55,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Custom MCP servers that connect AI agents to CMS, CRM, databases, and internal tooling.</p>
            <p class="pricing-timeline">Typically 3-6 weeks per integration</p>
            <ul class="pricing-points">
              <li>Role-safe pipelines with controlled data sync across systems.</li>
              <li>Multi-system automation without fragile glue-code sprawl.</li>
            </ul>
            <div class="pricing-foot">
              <a class="btn-glass" href="/#contact">Design Integration</a>
            </div>
          </div>
        </div>
        <p class="pricing-note"><strong>Note:</strong> prices are starting-from benchmarks for South Africa/Cape Town market context. Final pricing depends on scope, delivery timeline, integrations, and support requirements.</p>

        <h2>How NemesisNet Scopes Projects</h2>
        <p class="section-intro">Every system is classified based on complexity, business risk, data sensitivity, and workflow requirements. NemesisNet builds right-sized solutions — no overengineering, no underbuilding.</p>
        <div class="tiers-grid">
          <div class="card tier-card tier-1">
            <div class="tier-header">
              <span class="tier-badge tier-badge-green">Tier 1</span>
              <h3>Lightweight Systems</h3>
            </div>
            <p class="tier-desc">Fast build for MVPs, internal tools, automation, and simple workflows.</p>
            <div class="tier-details">
              <div class="tier-detail"><strong>Stack</strong><span>Vue/React + PocketBase + SQLite</span></div>
              <div class="tier-detail"><strong>Complexity</strong><span>Low — single dev maintainable</span></div>
              <div class="tier-detail"><strong>Delivery</strong><span>1–5 days</span></div>
              <div class="tier-detail"><strong>Examples</strong><span>Forms, Dashboards, CRUD, Simple Auth</span></div>
            </div>
          </div>
          <div class="card tier-card tier-2">
            <div class="tier-header">
              <span class="tier-badge tier-badge-yellow">Tier 2</span>
              <h3>Business Systems</h3>
            </div>
            <p class="tier-desc">Standard engineering for multi-user tools, permissions, and API integrations.</p>
            <div class="tier-details">
              <div class="tier-detail"><strong>Stack</strong><span>Spring Boot + MySQL/PostgreSQL + Vue</span></div>
              <div class="tier-detail"><strong>Complexity</strong><span>Medium — structured architecture</span></div>
              <div class="tier-detail"><strong>Delivery</strong><span>1–3 weeks</span></div>
              <div class="tier-detail"><strong>Examples</strong><span>Client Portals, CMS, Business Tools</span></div>
            </div>
          </div>
          <div class="card tier-card tier-3">
            <div class="tier-header">
              <span class="tier-badge tier-badge-red">Tier 3</span>
              <h3>Core / Enterprise</h3>
            </div>
            <p class="tier-desc">High complexity for financial systems, CRMs, and scalable enterprise platforms.</p>
            <div class="tier-details">
              <div class="tier-detail"><strong>Stack</strong><span>Spring Boot DDD + Redis + Message Queues</span></div>
              <div class="tier-detail"><strong>Complexity</strong><span>High — full CI/CD, microservices</span></div>
              <div class="tier-detail"><strong>Delivery</strong><span>1–3+ months</span></div>
              <div class="tier-detail"><strong>Examples</strong><span>CRMs, Billing, Financial Systems</span></div>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Not sure which tier fits? → Let's scope it together</a>
        </div>

        <h2>South Africa-Based, Globally Remote</h2>
        <p class="section-intro">NemesisNet is based in Cape Town, South Africa and works with clients across the country and internationally. All engagements are conducted remotely with structured online scoping, daily async updates, and regular video check-ins. South African clients benefit from local business context, POPIA compliance awareness, and SLA-friendly time zone alignment. International clients — particularly those in European time zones — benefit from overlapping working hours and cost-effective ZAR pricing.</p>

        <div class="local-signals">
          <div class="local-card">
            <strong>📍 Cape Town, South Africa</strong>
            <span>Registered and operating from the Western Cape</span>
          </div>
          <div class="local-card">
            <strong>🇬🇧🇪🇺 European Time Zone Overlap</strong>
            <span>CAT (UTC+2) aligns with CET — real-time collaboration</span>
          </div>
          <div class="local-card">
            <strong>🔒 POPIA-Aware</strong>
            <span>Data protection aligned with SA Protection of Personal Information Act</span>
          </div>
          <div class="local-card">
            <strong>💰 ZAR Pricing</strong>
            <span>Transparency from R7,000 to R220,000+ — no hidden fees</span>
          </div>
        </div>

        <h2>Delivery Rhythm</h2>
        <p class="section-intro">A structured process keeps delivery predictable and technical risk visible. Discovery comes first — requirements, constraints, and success metrics are mapped before any code is written. Architecture and scope are locked early to protect timelines. Build happens with testing and CI/CD from day one, with regular checkpoints to keep delivery aligned with intent. Deployment includes hardening, monitoring, and optional support retainers for stability after launch. Without proper scoping, projects drift into scope creep, deadline slips, and expensive rework. NemesisNet's process prevents that.</p>

        <div class="section-cta">
          <a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Ready to scope your project? →</a>
        </div>

        <h2>Related Services</h2>
        <p class="section-intro">Explore our full service offering to find the right solution for your business.</p>
        <div class="related-services-grid">
          <NuxtLink to="/services/custom-software" class="related-service-card">
            <strong>Custom Software Development</strong>
            <span>Enterprise-grade backend &amp; full-stack apps</span>
          </NuxtLink>
          <NuxtLink to="/services/saas-development" class="related-service-card">
            <strong>SaaS Development</strong>
            <span>Scalable multi-tenant platforms</span>
          </NuxtLink>
          <NuxtLink to="/services/ai-development" class="related-service-card">
            <strong>AI Development</strong>
            <span>MCP agents, TTS, multi-agent systems</span>
          </NuxtLink>
          <NuxtLink to="/services/self-hosted-ai" class="related-service-card">
            <strong>Self-Hosted AI Infrastructure</strong>
            <span>GGUF models, GPU, vector databases</span>
          </NuxtLink>
          <NuxtLink to="/services/infrastructure" class="related-service-card">
            <strong>Infrastructure Engineering</strong>
            <span>Docker, CI/CD, Redis, Nginx</span>
          </NuxtLink>
          <NuxtLink to="/services/consulting" class="related-service-card">
            <strong>System Design &amp; Consulting</strong>
            <span>Technical roadmapping &amp; architecture</span>
          </NuxtLink>
        </div>

        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'IT Services Cape Town — Software, SaaS, AI & Infrastructure | NemesisNet',
  meta: [
    { name: 'description', content: 'IT services in Cape Town, South Africa: Custom software, SaaS development, AI infrastructure, DevOps. ZAR pricing from R7,000. Cape Town-based engineering.' },
    { property: 'og:title', content: 'IT Services Cape Town | Software, SaaS, AI & Infrastructure' },
    { property: 'og:description', content: 'Custom software, SaaS, and AI infrastructure services based in Cape Town, South Africa. Starting from R7,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dev.nemesisnet.co.za/services' },
    { property: 'og:image', content: 'https://dev.nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What technologies does NemesisNet use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NemesisNet works with Vue 3, React, Spring Boot, Python, PocketBase, Docker, PostgreSQL, Redis, and AI frameworks including MCP, GGUF models, and CUDA-accelerated inference.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does pricing work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Transparent starting-from pricing is provided for planning. Final quotes are confirmed after a discovery call and technical scoping session. Most projects start at R7,000 for rapid delivery and range up to R220,000 for AI-powered builds.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does NemesisNet work with clients outside Cape Town?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. While based in Cape Town, South Africa, NemesisNet works with clients remotely across the country and internationally. Discovery calls and scoping sessions are conducted online.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the typical delivery timeline?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Lightweight systems ship in 1-5 days. Business systems typically take 1-3 weeks. AI-powered platforms and enterprise builds range from 8-16 weeks. All timelines are scoped during the discovery phase.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can NemesisNet integrate with existing systems?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. NemesisNet builds API integrations, MCP servers, and data pipelines that connect to existing CMS, CRM, and database systems. Custom MCP agents can automate workflows across multiple platforms.'
            }
          }
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' }
        ]
      })
    }
  ]
})
</script>

<style>
.detail-container { max-width: 1100px; margin: 0 auto; padding: 24px 24px 40px; }
.detail-main { text-align: left !important; line-height: 1.8; }
.detail-main p, .detail-main h2, .detail-main h3, .detail-main h4, .detail-main li { text-align: left !important; }
.section-cta { text-align: center !important; }
.btn-glass { display: inline-block; }
.sdlc-columns { grid-template-columns: repeat(2, 1fr) !important; justify-items: center; }
.pricing-grid, .tiers-grid { justify-items: center; }

.back-link { text-align: center; margin-top: 48px; }
.local-signals { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 32px 0 24px; }
.local-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; text-align: center; }
.local-card strong { display: block; font-size: 0.95rem; margin-bottom: 6px; color: var(--accent-color); }
.local-card span { font-size: 0.85rem; color: var(--text-muted); }
.related-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.related-service-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 6px; text-align: center; text-decoration: none; transition: transform 0.2s ease, border-color 0.2s ease; }
.related-service-card:hover { transform: translateY(-2px); border-color: var(--accent-color); }
.related-service-card strong { color: var(--accent-color); font-size: 0.95rem; }
.related-service-card span { color: var(--text-muted); font-size: 0.85rem; }
@media (max-width: 1100px) { .service-columns, .process-steps { grid-template-columns: repeat(2, 1fr); } .related-services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .service-columns, .process-steps { grid-template-columns: 1fr; gap: 16px; }
  .detail-container { padding: 24px 16px 32px; }
  .detail-main h2 { font-size: 1.8rem; margin: 36px 0 20px; }
  .related-services-grid { grid-template-columns: 1fr; }
}
</style>