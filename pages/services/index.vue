<template>
  <div>
    <PageHeader title="Services" subtitle="Engineering platforms, systems, and infrastructure for real production workloads." />


    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span aria-current="page">Services</span>
        </div>

        <h2>Pricing Guide</h2>
        <p class="pricing-trust">Most projects begin with a short discovery call to clarify scope, architecture, and timelines.</p>
        <p class="pricing-intro">Transparent starting-from pricing to help with planning. Final quotes are confirmed after a short discovery call and technical scoping session.</p>

        <h3 class="pricing-group-label">Project Builds</h3>
        <p class="pricing-group-desc">One-time engagements to design, build, and deploy production systems.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <div class="pricing-icon"><ClientOnly><Globe :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Static &amp; Brochure</h4>
            <div class="pricing-price">R10,000 – R25,000</div>
            <div class="pricing-unit">Range</div>
            <p class="pricing-description">Static sites, landing pages, brochure sites, and simple internal tools with no auth complexity.</p>
            <p class="pricing-timeline">Delivery: 2–4 weeks</p>
            <ul class="pricing-points">
              <li>Nuxt static or simple Vue/React frontend</li>
              <li>Docker + Nginx deployment included</li>
              <li>Basic SEO setup (if public-facing)</li>
            </ul>
            <div class="pricing-foot">
              <NuxtLink class="btn-glass" to="/services/static-sites">See Details</NuxtLink>
            </div>
          </div>
          <div class="card pricing-card">
            <div class="pricing-icon"><ClientOnly><Layers :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">App Starter</h4>
            <div class="pricing-price">R35,000 – R80,000</div>
            <div class="pricing-unit">Range</div>
            <p class="pricing-description">PocketBase-backed apps, CRUD dashboards, MVPs, prototypes, and admin tools with auth and roles.</p>
            <p class="pricing-timeline">Delivery: 4–8 weeks</p>
            <ul class="pricing-points">
              <li>PocketBase backend</li>
              <li>Vue or React frontend</li>
              <li>Basic auth and role-based access</li>
              <li>Docker + Nginx deployment included</li>
            </ul>
            <div class="pricing-foot">
              <NuxtLink class="btn-glass" to="/services/app-starter">See Details</NuxtLink>
            </div>
          </div>
          <div class="card pricing-card pricing-card--featured">
            <div class="pricing-icon"><ClientOnly><Briefcase :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Business Systems</h4>
            <div class="pricing-price">R150,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">End-to-end product builds with Vue 3 frontend, Spring Boot backend, secure auth, dashboards, and infrastructure.</p>
            <p class="pricing-timeline">Typically 8–16 weeks depending on scope</p>
            <ul class="pricing-points">
              <li>Architecture, testing strategy, and CI/CD readiness included</li>
              <li>Built to ship and scale, not just to demo</li>
            </ul>
            <div class="pricing-foot">
              <NuxtLink class="btn-glass" to="/services/business-systems">See Details</NuxtLink>
            </div>
          </div>
          <div class="card pricing-card">
            <div class="pricing-icon"><ClientOnly><Cpu :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Platform / Enterprise</h4>
            <div class="pricing-price">R350,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Multi-tenant SaaS, AI pipelines, self-hosted LLM/TTS systems, MCP integrations, and agent workflows.</p>
            <p class="pricing-timeline">Typically 16–30+ weeks, scoped after technical discovery</p>
            <ul class="pricing-points">
              <li>Designed for security, performance, and long-term maintainability</li>
              <li>Final quote is set after discovery and technical scoping</li>
            </ul>
            <div class="pricing-foot">
              <NuxtLink class="btn-glass" to="/services/platform-enterprise">See Details</NuxtLink>
            </div>
          </div>
        </div>

        <h3 class="pricing-group-label">Specialist Engagements</h3>
        <p class="pricing-group-desc">Scoped sessions and integrations for teams with specific technical needs.</p>
        <div class="pricing-grid">
          <NuxtLink to="/services/ai-consulting" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Brain :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">AI Architecture / Consulting</h4>
            <div class="pricing-price">R10,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Half-day to full-day working sessions for teams making serious AI or platform decisions.</p>
            <p class="pricing-timeline">Half-day or full-day sessions, booked in advance</p>
            <ul class="pricing-points">
              <li>Platform reviews, workflow design, and technical roadmapping</li>
              <li>Best before you build, not after something breaks</li>
            </ul>
            <span class="pricing-link">See Details →</span>
          </NuxtLink>
          <NuxtLink to="/services/mcp-integrations" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Workflow :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Custom MCP &amp; Agent Integrations</h4>
            <div class="pricing-price">R55,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Custom MCP servers that connect AI agents to CMS, CRM, databases, and internal tooling.</p>
            <p class="pricing-timeline">Typically 3–6 weeks per integration</p>
            <ul class="pricing-points">
              <li>Role-safe pipelines with controlled data sync across systems</li>
              <li>Multi-system automation without fragile glue-code sprawl</li>
            </ul>
            <span class="pricing-link">See Details →</span>
          </NuxtLink>
        </div>

        <h3 class="pricing-group-label">Ongoing Support</h3>
        <p class="pricing-group-desc">Monthly retainers for hosting, maintenance, and continuous improvement.</p>
        <div class="pricing-grid">
          <NuxtLink to="/services/light-hosting" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Server :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Light Hosting</h4>
            <div class="pricing-price">R850</div>
            <div class="pricing-unit">Monthly</div>
            <p class="pricing-description">Hosting, SSL, uptime monitoring, and security patches for deployed systems.</p>
            <ul class="pricing-points">
              <li>Server hosting and SSL management</li>
              <li>OS and dependency patching</li>
              <li>Uptime monitoring and alerts</li>
            </ul>
            <span class="pricing-link">See Details →</span>
          </NuxtLink>
          <NuxtLink to="/services/managed-retainer" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Shield :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Managed Retainer</h4>
            <div class="pricing-price">R7,500</div>
            <div class="pricing-unit">Monthly</div>
            <p class="pricing-description">CI/CD pipeline management, monitoring, bug fixes, and continuous improvement for production systems.</p>
            <ul class="pricing-points">
              <li>CI/CD pipeline management and deployments</li>
              <li>Application monitoring and alerting</li>
              <li>Bug fixes and continuous improvement</li>
              <li>Priority support and SLA coverage</li>
            </ul>
            <span class="pricing-link">See Details →</span>
          </NuxtLink>
        </div>
        <p class="pricing-note"><strong>Note:</strong> prices are starting-from benchmarks for South Africa/Cape Town market context. Final pricing depends on scope, delivery timeline, integrations, and support requirements.</p>

        <div class="section-cta section-cta--prominent">
          <NuxtLink to="/contact" class="btn--ignite">Book a Scoping Session →</NuxtLink>
          <p class="section-cta-sub">Free 30-minute call to clarify scope, architecture, and timelines.</p>
        </div>

        <h2>Which build fits your project?</h2>
        <p class="section-intro">Not sure which tier you need? Use this to find your fit — then explore the detail page.</p>
        <div class="tier-selector">
          <!-- Desktop table -->
          <table class="tier-table">
            <thead>
              <tr>
                <th/>
                <th>Static &amp; Brochure</th>
                <th>App Starter</th>
                <th>Business Systems</th>
                <th>Platform / Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tier-question">Need user accounts?</td>
                <td class="tier-no">✗</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Multiple user roles / RBAC?</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Multi-tenant or SaaS?</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">AI pipelines or LLM integration?</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Custom business logic?</td>
                <td class="tier-no">✗</td>
                <td class="tier-partial">Basic</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Third-party API integrations?</td>
                <td class="tier-no">✗</td>
                <td class="tier-partial">Basic</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Compliance requirements (POPIA etc)?</td>
                <td class="tier-no">✗</td>
                <td class="tier-no">✗</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr>
                <td class="tier-question">Client manages own content?</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
                <td class="tier-yes">✓</td>
              </tr>
              <tr class="tier-cta-row">
                <td/>
                <td><NuxtLink to="/services/static-sites" class="btn-glass">See Details →</NuxtLink></td>
                <td><NuxtLink to="/services/app-starter" class="btn-glass">See Details →</NuxtLink></td>
                <td><NuxtLink to="/services/business-systems" class="btn-glass">See Details →</NuxtLink></td>
                <td><NuxtLink to="/services/platform-enterprise" class="btn-glass">See Details →</NuxtLink></td>
              </tr>
            </tbody>
          </table>
          <!-- Mobile stacked cards -->
          <div class="tier-mobile-cards">
            <div class="tier-mobile-card">
              <h4>Static &amp; Brochure</h4>
              <div class="tier-row"><span>Need user accounts?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Multiple user roles?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Multi-tenant or SaaS?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>AI or LLM integration?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Custom business logic?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>API integrations?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Compliance (POPIA)?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Client manages content?</span><span class="tier-yes">✓</span></div>
              <NuxtLink to="/services/static-sites" class="btn-glass">See Details →</NuxtLink>
            </div>
            <div class="tier-mobile-card">
              <h4>App Starter</h4>
              <div class="tier-row"><span>Need user accounts?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Multiple user roles?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Multi-tenant or SaaS?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>AI or LLM integration?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Custom business logic?</span><span class="tier-partial">Basic</span></div>
              <div class="tier-row"><span>API integrations?</span><span class="tier-partial">Basic</span></div>
              <div class="tier-row"><span>Compliance (POPIA)?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Client manages content?</span><span class="tier-yes">✓</span></div>
              <NuxtLink to="/services/app-starter" class="btn-glass">See Details →</NuxtLink>
            </div>
            <div class="tier-mobile-card">
              <h4>Business Systems</h4>
              <div class="tier-row"><span>Need user accounts?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Multiple user roles?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Multi-tenant or SaaS?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>AI or LLM integration?</span><span class="tier-no">✗</span></div>
              <div class="tier-row"><span>Custom business logic?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>API integrations?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Compliance (POPIA)?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Client manages content?</span><span class="tier-yes">✓</span></div>
              <NuxtLink to="/services/business-systems" class="btn-glass">See Details →</NuxtLink>
            </div>
            <div class="tier-mobile-card">
              <h4>Platform / Enterprise</h4>
              <div class="tier-row"><span>Need user accounts?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Multiple user roles?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Multi-tenant or SaaS?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>AI or LLM integration?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Custom business logic?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>API integrations?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Compliance (POPIA)?</span><span class="tier-yes">✓</span></div>
              <div class="tier-row"><span>Client manages content?</span><span class="tier-yes">✓</span></div>
              <NuxtLink to="/services/platform-enterprise" class="btn-glass">See Details →</NuxtLink>
            </div>
          </div>
        </div>

        <h2>Software Development Life Cycle</h2>
        <p class="section-intro">NemesisNet adapts its delivery methodology to the constraints of each project. Whether you need the iterative speed of Agile or the structured predictability of Waterfall, the process is aligned to your business context.</p>

        <div class="service-columns sdlc-columns">
          <NuxtLink to="/services/agile-iterative" class="card sdlc-card">
            <h3>Agile &amp; Iterative</h3>
            <p>Two-week sprints with continuous stakeholder feedback. Ideal for MVPs, product evolution, and environments where requirements shift based on market response.</p>
            <ul class="service-list">
              <li>Sprint planning &amp; retrospectives</li>
              <li>Daily standups &amp; async updates</li>
              <li>Continuous integration &amp; delivery</li>
              <li>Backlog grooming &amp; prioritization</li>
            </ul>
            <span class="sdlc-link">See Details →</span>
          </NuxtLink>
          <NuxtLink to="/services/waterfall-structured" class="card sdlc-card">
            <h3>Waterfall &amp; Structured</h3>
            <p>Full scope definition upfront with gated milestones. Best suited for compliance-heavy systems, fixed-budget builds, and integrations where downstream dependencies are rigid.</p>
            <ul class="service-list">
              <li>Requirements sign-off &amp; traceability</li>
              <li>Phased design, build, test, deploy</li>
              <li>Formal change control process</li>
              <li>Documentation-driven handoff</li>
            </ul>
            <span class="sdlc-link">See Details →</span>
          </NuxtLink>
        </div>

        <h2>South Africa-Based, Globally Remote</h2>
        <p class="section-intro">NemesisNet is based in Cape Town, South Africa and works with clients across the country and internationally. All engagements are conducted remotely with structured online scoping, daily async updates, and regular video check-ins. South African clients benefit from local business context, POPIA compliance awareness, and SLA-friendly time zone alignment. International clients — particularly those in European time zones — benefit from overlapping working hours and cost-effective ZAR pricing.</p>

        <div class="local-signals">
          <div class="local-card">
            <strong>Cape Town, South Africa</strong>
            <span>Based in the Western Cape, working remotely across the country</span>
          </div>
          <div class="local-card">
            <strong>European Time Zone Overlap</strong>
            <span>CAT (UTC+2) aligns with CET — real-time collaboration</span>
          </div>
          <div class="local-card">
            <strong>POPIA-Aware</strong>
            <span>Data protection aligned with SA Protection of Personal Information Act</span>
          </div>
          <div class="local-card">
            <strong>ZAR Pricing</strong>
            <span>Transparency from R10,000 to R350,000+ — no hidden fees</span>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openFaq === i }">
            <button class="faq-toggle" @click="toggleFaq(i)">
              <h3>{{ faq.q }}</h3>
              <ClientOnly><ChevronDown :size="18" class="faq-chevron" /></ClientOnly>
            </button>
            <div class="faq-answer" :style="{ maxHeight: openFaq === i ? '400px' : '0' }">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Globe, Layers, Briefcase, Cpu, Brain, Workflow, Server, Shield, ChevronDown } from 'lucide-vue-next'

const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const faqs = [
  { q: 'What technologies does NemesisNet use?', a: 'NemesisNet works with Vue 3, React, Nuxt 4, Spring Boot, Python, PocketBase, Docker, PostgreSQL, Redis, and AI frameworks including MCP, GGUF models, and CUDA-accelerated inference.' },
  { q: 'How does pricing work?', a: 'Transparent starting-from pricing is provided for planning. Final quotes are confirmed after a discovery call and technical scoping session. Project builds range from R10,000 for static sites to R350,000+ for platform and enterprise work. Specialist engagements start from R10,000. Ongoing support starts at R850/month.' },
  { q: 'Does NemesisNet work with clients outside Cape Town?', a: 'Yes. While based in Cape Town, South Africa, NemesisNet works with clients remotely across the country and internationally. Discovery calls and scoping sessions are conducted online.' },
  { q: 'What is the typical delivery timeline?', a: 'Static sites ship in 2–4 weeks. App starters typically take 4–8 weeks. Business systems range from 8–16 weeks. Platform and enterprise builds run 16–30+ weeks. All timelines are scoped during the discovery phase.' },
  { q: 'Can NemesisNet integrate with existing systems?', a: 'Yes. NemesisNet builds API integrations, MCP servers, and data pipelines that connect to existing CMS, CRM, and database systems. Custom MCP agents can automate workflows across multiple platforms.' }
]

useHead({
  title: 'IT Services Cape Town — Software, SaaS, AI & Infrastructure | NemesisNet',
  meta: [
    { name: 'description', content: 'IT services in Cape Town, South Africa: Custom software, SaaS development, AI infrastructure, DevOps. ZAR pricing from R10,000. Cape Town-based engineering.' },
    { property: 'og:title', content: 'IT Services Cape Town | Software, SaaS, AI & Infrastructure' },
    { property: 'og:description', content: 'Custom software, SaaS, and AI infrastructure services based in Cape Town, South Africa. Starting from R10,000.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services' }
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
              'text': 'NemesisNet works with Vue 3, React, Nuxt 4, Spring Boot, Python, PocketBase, Docker, PostgreSQL, Redis, and AI frameworks including MCP, GGUF models, and CUDA-accelerated inference.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does pricing work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Transparent starting-from pricing is provided for planning. Final quotes are confirmed after a discovery call and technical scoping session. Project builds range from R10,000 for static sites to R350,000+ for platform and enterprise work. App Starter projects range from R35,000–R80,000. Specialist engagements (consulting, MCP integrations) start from R10,000 and R55,000 respectively. Ongoing support starts at R850/month for light hosting and R7,500/month for managed retainers.'
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
              'text': 'Static &amp; Brochure sites ship in 2–4 weeks. App Starter projects typically take 4–8 weeks. Business Systems range from 8–16 weeks. Platform and Enterprise builds run 16–30+ weeks. All timelines are scoped during the discovery phase.'
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
.services-grid { display: flex !important; flex-wrap: wrap; gap: 16px !important; justify-content: center !important; }
.services-grid .card { flex: 0 1 calc(25% - 16px) !important; min-width: 220px !important; max-width: 250px !important; display: flex !important; flex-direction: column !important; }
.services-grid .card .btn-glass { margin-top: auto !important; }
@media (max-width: 1100px) { .services-grid .card { flex: 0 1 calc(50% - 16px) !important; max-width: none !important; } }
@media (max-width: 768px) { .services-grid { flex-direction: column !important; gap: 14px !important; } .services-grid .card { flex: none !important; } }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 24px 40px; }
.detail-main { text-align: left !important; line-height: 1.8; }
.detail-main p, .detail-main h2, .detail-main h3, .detail-main h4, .detail-main li { text-align: left !important; }
.section-cta { text-align: center !important; }
.section-cta--prominent { margin: 32px 0 40px; }
.section-cta--prominent .btn--ignite { font-size: 1.05rem; padding: 14px 32px; display: inline-block; }
.section-cta-sub { font-size: 0.85rem; color: var(--text-muted); margin-top: 10px; }
.btn-glass { display: inline-block; }
.sdlc-columns { grid-template-columns: repeat(2, 1fr) !important; justify-items: center; }
.pricing-grid, .tiers-grid { /* pricing-grid now flexbox, centered via main.css */ }
.pricing-group-label { font-size: 1.1rem; color: var(--accent-color); margin: 32px 0 8px; padding-bottom: 8px; border-bottom: 1px solid var(--glass-border); }
.pricing-group-desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px; }
.tier-card { text-decoration: none !important; color: inherit !important; display: flex !important; flex-direction: column !important; }
.tier-card:hover { transform: translateY(-6px); border-color: var(--accent-hover) !important; box-shadow: 0 20px 70px rgba(2,6,23,0.55), 0 8px 30px rgba(0,0,0,0.4), 0 0 60px var(--accent-glow) !important; }
.tier-link { margin-top: auto; padding-top: 16px; color: var(--accent-color); font-size: 0.9rem; font-weight: 600; }

.back-link { text-align: center; margin-top: 48px; }
.local-signals { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 32px 0 24px; }
.local-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; text-align: center; }
.local-card strong { display: block; font-size: 0.95rem; margin-bottom: 6px; color: var(--accent-color); }
.local-card span { font-size: 0.85rem; color: var(--text-muted); }
.faq-list { margin: 24px 0; }
.faq-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px 24px; margin-bottom: 12px; }
.faq-item h3 { font-size: 1rem; color: var(--accent-color); margin: 0 0 8px; }
.faq-item p { margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; }
.pricing-icon { color: var(--accent-color); margin-bottom: 8px; text-align: center; }
.faq-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; background: none; border: none; cursor: pointer; padding: 0; text-align: left; }
.faq-toggle h3 { margin: 0; flex: 1; }
.faq-chevron { color: var(--accent-color); transition: transform 0.3s ease; flex-shrink: 0; margin-left: 12px; }
.faq-item--open .faq-chevron { transform: rotate(180deg); }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.faq-answer p { margin-top: 12px; }
.pricing-card--linked { text-decoration: none !important; color: inherit !important; cursor: pointer; }
.pricing-card--linked:hover { transform: translateY(-6px); border-color: var(--accent-hover) !important; box-shadow: 0 20px 70px rgba(2,6,23,0.55), 0 8px 30px rgba(0,0,0,0.4), 0 0 60px var(--accent-glow) !important; }
.pricing-link { display: block; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--glass-border); color: var(--accent-color); font-size: 0.9rem; font-weight: 600; text-align: center; }
.sdlc-card { text-decoration: none !important; color: inherit !important; cursor: pointer; display: flex !important; flex-direction: column !important; }
.sdlc-card:hover { transform: translateY(-6px); border-color: var(--accent-hover) !important; box-shadow: 0 20px 70px rgba(2,6,23,0.55), 0 8px 30px rgba(0,0,0,0.4), 0 0 60px var(--accent-glow) !important; }
.sdlc-link { margin-top: auto; padding-top: 16px; color: var(--accent-color); font-size: 0.9rem; font-weight: 600; }
@media (max-width: 1100px) { .process-steps { grid-template-columns: repeat(2, 1fr); } }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; padding-left: 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
.tier-selector { margin: 24px 0 40px; }
.tier-table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; overflow: hidden; }
.tier-table th { padding: 16px 12px; font-size: 0.85rem; font-weight: 700; color: var(--accent-color); text-align: center; border-bottom: 1px solid var(--glass-border); background: rgba(41, 121, 255, 0.05); }
.tier-table td { padding: 14px 12px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.9rem; }
.tier-table tr:last-child td { border-bottom: none; }
.tier-question { text-align: left !important; color: var(--text-primary); font-weight: 500; padding-left: 20px !important; }
.tier-yes { color: var(--accent-color); font-weight: 600; }
.tier-no { color: rgba(255, 255, 255, 0.2); }
.tier-partial { color: rgba(255, 255, 255, 0.5); font-size: 0.8rem; }
.tier-cta-row td { padding: 16px 12px 20px; border-bottom: none; }
.tier-cta-row .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: inline-block; }
.tier-mobile-cards { display: none; }
.tier-mobile-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.tier-mobile-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0 0 12px; }
.tier-mobile-card .tier-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.85rem; }
.tier-mobile-card .tier-row:last-of-type { border-bottom: none; }
.tier-mobile-card .tier-row span:first-child { color: var(--text-muted); }
.tier-mobile-card .btn-glass { display: block; text-align: center; margin-top: 12px; font-size: 0.85rem; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
  .process-steps { grid-template-columns: 1fr; gap: 16px; }
  .detail-container { padding: 24px 16px 32px; }
  .detail-main h2 { font-size: 1.8rem; margin: 36px 0 20px; }
  .tier-table { display: none !important; }
  .tier-mobile-cards { display: flex !important; flex-direction: column; gap: 16px; }
  .sdlc-columns { grid-template-columns: 1fr !important; }
}
</style>
