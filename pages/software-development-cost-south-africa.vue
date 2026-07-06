<template>
  <div>
    <PageHeader title="Software Development Cost in South Africa" subtitle="Transparent ZAR pricing for custom software, SaaS platforms, and AI systems. Real numbers — no fluff." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Pricing Guide</span>
        </div>

        <!-- Section 1 — Hero intro (no CTA, research page) -->
        <h1>What Does Custom Software Development Actually Cost in South Africa? (2026)</h1>
        <p>Most South African developers won't publish prices. We do. This guide covers what real custom software projects cost in 2026 — from a static marketing site to a multi-tenant SaaS platform with AI pipelines — based on NemesisNet's actual pricing, not industry averages or agency guesswork.</p>

        <!-- Section 2 — Market Context -->
        <p>The SA market splits into two camps: sub-R20k WordPress template shops, and R500k+ agency retainers. Almost nothing exists in the middle with transparent pricing. The word "website" and the word "app" cover completely different things. A brochure site and a multi-tenant SaaS platform are both "software" but have nothing in common in terms of cost.</p>
        <p>This guide uses NemesisNet's live pricing (updated 2026) as the reference point — not aggregated estimates. If you're budgeting for custom software in South Africa, these are the real numbers.</p>

        <!-- Section 3 — Pricing Tiers Table -->
        <h2>Project Build Pricing — What Does Each Tier Actually Include?</h2>
        <p class="section-intro">These are NemesisNet's 2026 starting-from prices for Cape Town and remote South African clients. International clients in EUR/GBP benefit from ZAR's cost advantage.</p>

        <div class="pricing-comparison-table">
          <table class="tier-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Price Range</th>
                <th>Delivery</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tier-question">Static &amp; Brochure</td>
                <td>R7,000 – R25,000</td>
                <td>2–4 weeks</td>
                <td>Marketing sites, landing pages, internal tools, no auth needed</td>
              </tr>
              <tr>
                <td class="tier-question">App Starter</td>
                <td>R35,000 – R80,000</td>
                <td>4–8 weeks</td>
                <td>MVPs, admin dashboards, PocketBase apps, basic auth &amp; roles</td>
              </tr>
              <tr>
                <td class="tier-question">Business Systems</td>
                <td>From R150,000</td>
                <td>8–16 weeks</td>
                <td>Full-stack products with Vue 3 + Spring Boot, RBAC, CI/CD</td>
              </tr>
              <tr>
                <td class="tier-question">Platform / Enterprise</td>
                <td>From R350,000</td>
                <td>16–30+ weeks</td>
                <td>Multi-tenant SaaS, AI pipelines, MCP agents, self-hosted LLMs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="pricing-note"><strong>Note:</strong> All prices are starting-from benchmarks. Final quotes are confirmed after a short discovery call and technical scoping session — no surprises.</p>

        <p>To put this in context: most South African app development agencies quote R80,000–R250,000 for a basic MVP with login and a few screens. NemesisNet's App Starter tier covers this at R35,000–R80,000 because there's no agency overhead, account management layer, or discovery-phase invoice. You're paying for engineering.</p>

        <!-- Section 4 — Specialist Engagements -->
        <h2>Specialist Engagements — AI Consulting &amp; MCP Integrations</h2>
        <p class="section-intro">These are fixed-scope engagements for teams with a specific technical decision to make or integration to build. Both are priced transparently — something no other South African provider currently does for AI-specific work.</p>

        <div class="pricing-grid">
          <NuxtLink to="/services/ai-consulting" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Brain :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">AI Architecture / Consulting</h4>
            <div class="pricing-price">R10,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Review your AI stack, model selection, self-host vs cloud decision, or integration strategy. You leave with a written action plan, not a slide deck.</p>
            <p class="pricing-timeline">Half-day or full-day sessions, booked in advance</p>
            <ul class="pricing-points">
              <li>Platform reviews, workflow design, and technical roadmapping</li>
              <li>Best before you build, not after something breaks</li>
            </ul>
            <span class="btn-glass">See Details</span>
          </NuxtLink>
          <NuxtLink to="/services/mcp-integrations" class="card pricing-card pricing-card--linked">
            <div class="pricing-icon"><ClientOnly><Workflow :size="24" /></ClientOnly></div>
            <h4 class="pricing-title">Custom MCP &amp; Agent Integrations</h4>
            <div class="pricing-price">R55,000</div>
            <div class="pricing-unit">Starting from</div>
            <p class="pricing-description">Connect AI agents to your CMS, CRM, or database via a structured MCP server. No fragile glue code — auditable, role-safe pipelines built to production standard.</p>
            <p class="pricing-timeline">Typically 3–6 weeks per integration</p>
            <ul class="pricing-points">
              <li>Role-safe pipelines with controlled data sync across systems</li>
              <li>Multi-system automation without fragile glue-code sprawl</li>
            </ul>
            <span class="btn-glass">See Details</span>
          </NuxtLink>
        </div>

        <!-- Section 5 — Ongoing Support -->
        <h2>Monthly Support &amp; Hosting</h2>
        <p class="section-intro">Maintenance adds 15–20% of initial build cost per year as a general rule — these retainers are structured to make that predictable.</p>

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
            <span class="btn-glass">See Details</span>
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
            <span class="btn-glass">See Details</span>
          </NuxtLink>
        </div>

        <!-- Section 6 — What Drives Cost Up -->
        <h2>What Makes a Project More Expensive?</h2>

        <p><strong>Multi-tenancy and RBAC complexity.</strong> Every tenant needing isolated data adds architecture complexity. Role-based access control across user types multiplies test surface area significantly. A system with three user roles is not "three times" a single-role system — the interaction matrix grows exponentially.</p>

        <p><strong>AI and LLM pipeline integration.</strong> Connecting to hosted LLMs (OpenAI, Anthropic) adds per-token operating cost on top of build cost. Self-hosted models (GGUF, Ollama) on local GPU/CPU infrastructure require infrastructure design upfront. Neither is a drop-in — both need monitoring, fallback logic, and cost forecasting.</p>

        <p><strong>POPIA compliance.</strong> Not optional for SA systems handling personal data. Adds data residency decisions, consent management, audit logging, and breach notification architecture. retrofitting POPIA after launch costs 3–5× more than building it in from day one.</p>

        <p><strong>Third-party integrations.</strong> Each SA payment provider (PayFast, Paystack, Ozow) requires webhook handling, reconciliation logic, and failed-payment flows. Each adds 1–3 weeks. CRM, ERP, and messaging integrations follow the same pattern — the API exists, but the edge cases don't appear until you're live.</p>

        <p><strong>Custom MCP agent development.</strong> Connecting agents to live business systems via MCP requires role-safe data pipelines, not just API wrappers. Complexity scales with the number of connected systems and the sensitivity of the data flowing between them.</p>

        <p><strong>Rush timelines.</strong> Accelerated delivery typically adds 20–50% to the base quote. Not because the work is harder, but because parallel workstreams need more coordination and fewer shortcuts are available.</p>

        <!-- Section 7 — International Client Advantage -->
        <h2>Why South African Development Costs Work Well for International Clients</h2>

        <p><strong>ZAR advantage.</strong> Senior Cape Town engineering talent bills at R500–R1,500/hour locally. International clients paying in EUR or GBP get this at a significant cost advantage vs UK/EU agencies charging £100–£200/hour for equivalent seniority. A project that costs R350,000 in Cape Town would cost R1.2M+ at a London agency for the same scope.</p>

        <p><strong>Time zone alignment.</strong> CAT (UTC+2) overlaps almost perfectly with CET. Real-time morning collaboration with European clients is practical, not theoretical. No 3am standups, no 12-hour feedback loops.</p>

        <p><strong>POPIA as a proxy for GDPR.</strong> Systems built POPIA-compliant are structurally very close to GDPR-compliant. For EU clients handling data about SA users, or SA clients with EU exposure, this is built-in rather than retrofitted.</p>

        <!-- Section 8 — What You're Not Paying For -->
        <h2>What's Not in the Price</h2>
        <p>NemesisNet is a lean engineering studio — no account managers, no project coordinators, no slide deck presentations before scoping begins. Quotes cover engineering time only. Discovery calls are free. There are no retainer requirements before a project starts. You own the codebase.</p>

        <!-- Section 9 — FAQ -->
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openFaq === i }">
            <button class="faq-toggle" @click="toggleFaq(i)">
              <h3>{{ faq.q }}</h3>
              <ClientOnly><ChevronDown :size="18" class="faq-chevron" /></ClientOnly>
            </button>
            <div class="faq-answer" :style="{ maxHeight: openFaq === i ? '600px' : '0' }">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <!-- Section 10 — CTA -->
        <div class="section-cta section-cta--prominent">
          <h2>Ready to Scope Your Project?</h2>
          <p class="section-cta-body">Every engagement starts with a free discovery call. Bring your brief — we'll tell you which tier fits, what's realistic in your timeline, and what to budget before you commit to anything.</p>
          <NuxtLink to="https://scope.nemesisnet.co.za" class="btn--ignite" target="_blank" rel="noopener noreferrer">Scope Your Project →</NuxtLink>
          <p class="section-cta-sub">
            <NuxtLink to="/services" class="cta-secondary-link">View Full Services &amp; Pricing →</NuxtLink>
          </p>
        </div>

        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Brain, Workflow, Server, Shield, ChevronDown } from 'lucide-vue-next'

const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const faqs = [
  {
    q: 'Do you charge hourly or fixed price?',
    a: 'Fixed price after scoping for all project builds. Hourly (R850–R1,500/hour depending on complexity) only for retainer and ongoing work outside a defined scope. Every project build gets a fixed quote after a short discovery call and technical scoping session.'
  },
  {
    q: 'What\'s included in a project quote?',
    a: 'Discovery, architecture, build, testing, deployment, Docker configuration, and handover documentation. Hosting is a separate monthly cost (from R850/month). The quote covers everything from first commit to production deployment — no hidden line items.'
  },
  {
    q: 'Can you match a cheaper quote?',
    a: 'Probably not, and here\'s why: quotes below R15,000 for anything with auth, a database, or business logic are almost always template-based or underscoped. The rebuild cost is usually 2–3× the original quote. We\'ve been hired to rebuild more than a few "cheap" builds that fell apart after launch.'
  },
  {
    q: 'Do you work with startups on a limited budget?',
    a: 'Yes. The App Starter tier (R35,000–R80,000) exists exactly for this. Milestone-based payments available so you\'re not financing the entire build upfront. If your idea needs more than App Starter can deliver, we\'ll tell you honestly during scoping.'
  },
  {
    q: 'How does payment work?',
    a: 'Milestone-based. Typically 40% to start, 40% at functional build, 20% at delivery. No full upfront. Retainer and ongoing work is billed monthly in advance.'
  },
  {
    q: 'What\'s the difference between a website and a web app?',
    a: 'A website delivers content. A web app has user accounts, business logic, and data that changes based on who\'s using it. The cost difference is significant — R7k vs R80k+ — because the engineering complexity is entirely different. If you need login, a database, or custom workflows, you need a web app, not a website.'
  }
]

useHead({
  title: 'Custom Software Development Cost in South Africa (2026) | NemesisNet',
  meta: [
    { name: 'description', content: 'Transparent ZAR pricing for custom software, SaaS platforms, and AI systems built in South Africa. Real numbers from R7,000 to R350,000+ — from a Cape Town engineer who publishes actual prices.' },
    { property: 'og:title', content: 'Custom Software Development Cost in South Africa (2026) | NemesisNet' },
    { property: 'og:description', content: 'Transparent ZAR pricing for custom software, SaaS platforms, and AI systems. Real numbers from R7,000 to R350,000+.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/software-development-cost-south-africa' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/software-development-cost-south-africa' }
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
            'name': 'Do you charge hourly or fixed price?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fixed price after scoping for all project builds. Hourly (R850–R1,500/hour depending on complexity) only for retainer and ongoing work outside a defined scope. Every project build gets a fixed quote after a short discovery call and technical scoping session.'
            }
          },
          {
            '@type': 'Question',
            'name': "What's included in a project quote?",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Discovery, architecture, build, testing, deployment, Docker configuration, and handover documentation. Hosting is a separate monthly cost (from R850/month). The quote covers everything from first commit to production deployment — no hidden line items.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you match a cheaper quote?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "Probably not, and here's why: quotes below R15,000 for anything with auth, a database, or business logic are almost always template-based or underscoped. The rebuild cost is usually 2–3× the original quote. We've been hired to rebuild more than a few \"cheap\" builds that fell apart after launch."
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you work with startups on a limited budget?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "Yes. The App Starter tier (R35,000–R80,000) exists exactly for this. Milestone-based payments available so you're not financing the entire build upfront. If your idea needs more than App Starter can deliver, we'll tell you honestly during scoping."
            }
          },
          {
            '@type': 'Question',
            'name': 'How does payment work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Milestone-based. Typically 40% to start, 40% at functional build, 20% at delivery. No full upfront. Retainer and ongoing work is billed monthly in advance.'
            }
          },
          {
            '@type': 'Question',
            'name': "What's the difference between a website and a web app?",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "A website delivers content. A web app has user accounts, business logic, and data that changes based on who's using it. The cost difference is significant — R7k vs R80k+ — because the engineering complexity is entirely different. If you need login, a database, or custom workflows, you need a web app, not a website."
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Pricing Guide', 'item': 'https://nemesisnet.co.za/software-development-cost-south-africa' }
        ]
      })
    }
  ]
})
</script>

<style>
.pricing-comparison-table { margin: 24px 0; }
.pricing-comparison-table .tier-table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; overflow: hidden; }
.pricing-comparison-table .tier-table th { padding: 16px 14px; font-size: 0.85rem; font-weight: 700; color: var(--accent-color); text-align: left; border-bottom: 1px solid var(--glass-border); background: rgba(41, 121, 255, 0.05); }
.pricing-comparison-table .tier-table td { padding: 14px 14px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.9rem; line-height: 1.6; }
.pricing-comparison-table .tier-table tr:last-child td { border-bottom: none; }
.pricing-comparison-table .tier-question { font-weight: 600; color: var(--text-primary); }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 24px 40px; }
.detail-main { text-align: left !important; line-height: 1.8; }
.detail-main p, .detail-main h1, .detail-main h2, .detail-main h3, .detail-main h4, .detail-main li { text-align: left !important; }
.detail-main h1 { font-size: 2rem; color: var(--accent-color); margin: 0 0 16px; line-height: 1.3; }
.detail-main h2 { font-size: 1.4rem; color: var(--accent-color); margin: 40px 0 16px; padding-bottom: 8px; border-bottom: 1px solid var(--glass-border); }
.detail-main p { margin: 0 0 16px; color: var(--text-muted); font-size: 0.95rem; }
.detail-main p strong { color: var(--text-primary); }
.section-intro { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; }
.section-cta { text-align: center !important; margin: 48px 0 32px; }
.section-cta--prominent { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 40px 32px; }
.section-cta--prominent h2 { font-size: 1.4rem; color: var(--accent-color); margin: 0 0 12px; border: none; padding: 0; text-align: center; }
.section-cta-body { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; text-align: center; }
.section-cta--prominent .btn--ignite { font-size: 1.05rem; padding: 14px 32px; display: inline-block; }
.section-cta-sub { margin-top: 16px; font-size: 0.9rem; }
.cta-secondary-link { color: var(--accent-color); text-decoration: none; }
.cta-secondary-link:hover { text-decoration: underline; }
.btn-glass { display: inline-block; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; padding-left: 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
.pricing-note { font-size: 0.85rem; color: var(--text-muted); margin: 16px 0 24px; padding: 12px 16px; background: rgba(41, 121, 255, 0.05); border-radius: 12px; border: 1px solid var(--glass-border); }
.pricing-note strong { color: var(--accent-color); }
.pricing-grid { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 20px 0 32px; }
.pricing-card { flex: 0 1 calc(50% - 8px); min-width: 280px; }
.pricing-card--linked { text-decoration: none !important; color: inherit !important; cursor: pointer; }
.pricing-card--linked:hover { transform: translateY(-6px); border-color: var(--accent-hover) !important; box-shadow: 0 20px 70px rgba(2,6,23,0.55), 0 8px 30px rgba(0,0,0,0.4), 0 0 60px var(--accent-glow) !important; }
.pricing-icon { color: var(--accent-color); margin-bottom: 8px; text-align: center; }
.pricing-title { font-size: 1.18rem; color: var(--accent-color); margin: 0 0 8px; font-weight: 700; text-align: center; }
.pricing-price { font-size: 1.55rem; font-weight: 800; text-align: center; margin-bottom: 2px; }
.pricing-unit { font-size: 0.8rem; color: var(--text-muted); text-align: center; margin-bottom: 12px; }
.pricing-description { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 8px; }
.pricing-timeline { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px; font-style: italic; }
.pricing-points { list-style: none; padding: 0; margin: 0 0 16px; }
.pricing-points li { font-size: 0.85rem; color: var(--text-muted); padding: 4px 0 4px 16px; position: relative; }
.pricing-points li::before { content: ''; position: absolute; left: 0; top: 12px; width: 6px; height: 6px; background: var(--accent-color); border-radius: 50%; }
.faq-list { margin: 24px 0; }
.faq-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px 24px; margin-bottom: 12px; }
.faq-item h3 { font-size: 1rem; color: var(--accent-color); margin: 0 0 8px; }
.faq-item p { margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; }
.faq-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; background: none; border: none; cursor: pointer; padding: 0; text-align: left; }
.faq-toggle h3 { margin: 0; flex: 1; }
.faq-chevron { color: var(--accent-color); transition: transform 0.3s ease; flex-shrink: 0; margin-left: 12px; }
.faq-item--open .faq-chevron { transform: rotate(180deg); }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.faq-answer p { margin-top: 12px; }
.back-link { text-align: center; margin-top: 48px; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
  .detail-container { padding: 24px 16px 32px; }
  .detail-main h1 { font-size: 1.6rem; }
  .detail-main h2 { font-size: 1.2rem; margin: 32px 0 14px; }
  .pricing-comparison-table .tier-table { font-size: 0.8rem; }
  .pricing-comparison-table .tier-table th,
  .pricing-comparison-table .tier-table td { padding: 10px 8px; }
  .pricing-grid { flex-direction: column; }
  .pricing-card { flex: none; }
  .section-cta--prominent { padding: 28px 20px; }
}
</style>
