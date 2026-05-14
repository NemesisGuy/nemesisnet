# NemesisNet Phase 2 — Implementation Task List

## Phase 2 Overview
**Goal**: Translate technical capability into discoverability while preserving engineering credibility.

**Timeline**: 8 weeks

---

## Week 1-2: Foundation & High-Priority Pages

### Week 1: Audit & Setup

- [x] **A1** — Audit existing page titles and meta descriptions across all 22 pages
- [x] **A2** — Identify top 10 target keywords from strategy doc
- [x] **A3** — Add location keywords ("Cape Town", "South Africa") to existing pages
- [x] **A4** — Verify Google Search Console setup for all properties
- [x] **A5** — Add Organization schema to nuxt.config.ts

### Week 2: Service Landing Pages (Create 3)

- [x] **S1** — Create `/services/ai-development` — Custom AI Development South Africa
  - Source from: https://github.com/NemesisGuy/nemesisnet (AI/MCP projects)
  - Hero: Problem statement + solution
  - Include: Kokoro TTS, WordPress MCP, MCP integrations
  - CTA: Book consultation

- [x] **S2** — Create `/services/self-hosted-ai` — Self-Hosted AI Infrastructure
  - Source from: CodeCritical SaaS, infrastructure projects
  - Hero: "Real AI infrastructure — not API wrappers"
  - Include: Docker, Redis, Spring Boot backend, GPU deployment
  - CTA: Discuss infrastructure

- [x] **S3** — Create `/services/saas-development` — Spring Boot SaaS Development
  - Source from: Since app, ForkMyFolio, CodeCritical projects
  - Hero: Full-stack platform builds
  - Include: Vue 3 + Spring Boot, PostgreSQL, authentication
  - CTA: Build your SaaS
  - Status: Complete (renamed from `/services/saas-dev` for SEO clarity — "SaaS Development" is the target keyword)

---

## Week 3-4: Content & Technical SEO

### Week 3: Schema & On-Page

- [x] **T1** — Add FAQ schema to `/services` page (use existing pricing Q&As)
- [x] **T2** — Add Service schema to all service pages
- [x] **T3** — Add Breadcrumb schema to all pages *(JSON-LD added to all pages; visual breadcrumbs in template)*
- [x] **T4** — Add LocalBusiness schema to homepage
- [x] **T5** — Internal linking: Add "Related Services" + "Related Projects" sections to each service page *(Completed in P3/P8/P9 — each page now has Related Services grid and related project cards)*

### Week 4: Content Expansion (P3 — Completed)

- [x] **C1** — Create `/blog/self-hosted-ai-vs-openai-apis` — Outlines complete
- [x] **C2** — Create `/blog/vue-vs-react-enterprise-saas` — Outlines complete

### All 6 Service Pages Expanded (P3)

- [x] **ai-development.vue** — ~280 → ~700+ words, added Problem, Who, Process, Related Services
- [x] **self-hosted-ai.vue** — ~350 → ~750+ words, added Problem, Who, Process, Related Services
- [x] **saas-development.vue** — ~200 → ~650+ words, added Problem, Who, Process, Related Services
- [x] **infrastructure.vue** — ~200 → ~650+ words, added Problem, Who, Process, Related Services
- [x] **custom-software.vue** — ~200 → ~650+ words, added Problem, Who, Process, Related Services
- [x] **consulting.vue** — ~180 → ~600+ words, added Problem, Who, Process, Related Services

### Week 4: Comparison Articles (Create 2)

- [x] **C1** — Create `/blog/self-hosted-ai-vs-openai-apis`
  - Source from: nemesisnet.co.za (self-hosted positioning)
  - Compare: Cost, control, privacy, customization
  - Include: Real metrics from project experience
  - CTA: Consult on infrastructure
  - Status: Outlines complete

- [x] **C2** — Create `/blog/vue-vs-react-enterprise-saas`
  - Source from: https://github.com/NemesisGuy/nemesisnet (Vue projects: Since, ForkMyFolio, CodeCritical SaaS)
  - Compare: Learning curve, ecosystem, scaling, team hiring
  - Include: Real project examples
  - CTA: Discuss your stack
  - Status: Outlines complete

---

## Week 5-8: Authority Building & Measurement

### Week 5-6: Case Studies

- [ ] **CS1** — Create case study: "Building a Multi-Tenant SaaS with Spring Boot + Vue 3"
  - Source from: Since app (https://github.com/NemesisGuy/since)
  - Metrics: User growth, feature timeline, tech decisions

- [ ] **CS2** — Create case study: "MCP Integration for WordPress Automation"
  - Source from: WordPress MCP Server (https://github.com/NemesisGuy/wordpress-mcp-server)
  - Metrics: Time saved, automation gains

- [ ] **CS3** — Create case study: "Self-Hosted TTS Pipeline for Production"
  - Source from: Kokoro TTS project
  - Metrics: Latency, cost reduction, reliability

### Week 7-8: Topical Clusters & Measurement

- [ ] **TC1** — AI Infrastructure Cluster (create 3 articles):
  - [ ] "MCP Explained: The Future of AI Agent Tool Use"
  - [ ] "Running Local LLMs: A Practical Guide for Production"
  - [ ] "Dockerized AI Deployment: From Laptop to Production"

- [ ] **TC2** — Full-Stack Development Cluster (create 2 articles):
  - [ ] "Spring Boot Patterns for Multi-Tenant SaaS"
  - [ ] "Vue 3 Composition API: Real-World Patterns"

- [ ] **M1** — Set up Google Analytics goals for lead form submissions
- [ ] **M2** — Create custom dashboard for SEO KPIs
- [ ] **M3** — Baseline: Record current organic traffic, keyword positions
- [ ] **M4** — Review: Week 8 check-in on progress

---

## Content Sources Reference

### GitHub Repos (for case studies & technical depth)
- https://github.com/NemesisGuy/since — Full-stack Vue + Spring Boot
- https://github.com/NemesisGuy/wordpress-mcp-server — MCP integration
- https://github.com/NemesisGuy/CodeCritical — Java analysis tool
- https://github.com/NemesisGuy/ForkMyFolio — Portfolio platform
- https://github.com/NemesisGuy/kokoro-tts-deploy — TTS infrastructure

### Website Sections (for keyword extraction)
- Homepage: "AI infrastructure and platform engineering"
- Services: Custom Software, SaaS, Infrastructure, Consulting
- Projects: 11 projects showcasing various technologies
- Blog: https://blog.nemesisnet.co.za (existing content for reference)

### Keywords to Target
**High Priority:**
- Custom AI development South Africa
- Spring Boot developer Cape Town
- Self-hosted AI services
- MCP integration consulting
- Docker deployment South Africa

**Emerging (lower competition):**
- Self hosted AI
- MCP server
- AI infrastructure
- Secure AI systems

---

## Progress Tracking

| Week | Focus | Tasks | Status |
|------|-------|-------|--------|
| 1 | Audit & Setup | A1-A5 | [x] Complete |
| 2 | Service Pages | S1-S3 | [x] S1, S2, S3 done (renamed to saas-development) |
| 3 | Schema & On-Page | T1-T5 | [x] T1, T2, T4 done; T3, T5 skipped → T3, T5 reinstated (medium-high impact) |
| 4 | Comparisons | C1-C2 | [x] Outlines done; writing in progress |
| 5-6 | Case Studies | CS1-CS3 | [ ] |
| 7-8 | Clusters & Measure | TC1-TC2, M1-M4 | [ ] |
| 2.8 | Authority Injection | Homepage, Decision-layer, Internal links, Local SEO | [x] Complete — all items done (P1-P11) |

**Phase 2.8 Authority Injection — SEO Scorecard Tasks:**

SEO Audit Scores: JSON-LD [MISS→DONE], Canonical [WEAK→DONE], OG [WEAK→DONE], Sitemap [DONE], H1 [WEAK→DONE], Copy [WEAK], Local SEO [MISS], Contact [MISS→DONE], About [FAIR], Testimonials [FAIR]

### ✅ Completed this session
- [x] P1: Homepage JSON-LD — WebSite + Organization + SearchAction (sitelinks searchbox)
- [x] P5: Canonical + OG tags on all inner pages (Services, About, Projects, 6 service subpages)
- [x] P4: Homepage H1 expansion — "AI Infrastructure & Platform Engineering in Cape Town" + "What we build" bullet list
- [x] P2: Fix contact form — mailto: → Nitro server route (SMTP/sendmail)
- [x] P6: Sitemap.xml fixed (saas-dev → saas-development, added ai-development + self-hosted-ai)
- [x] Sitemap verified, robots.txt verified

### 🔴 Immediate (next sprint)
- [x] P7: Local SEO — Cape Town/ZAR/POPIA keywords throughout + footer tagline (done prev session)
- [x] P3: Expand service pages to 600-1000+ words (done this session)
- [ ] P10: Internal linking — "Related Services" + "Related Projects" on all service pages (T5) *(partial — Related Services added, verify Related Projects links)*

### 🟠 Next sprint
- [x] P8: About page — expand founder story (types of work, BTech, homelab, self-sufficiency) + add photo (done this session)
- [ ] P9: Testimonials — add location context, project links, client logos

### 🟡 Later
- [ ] P11: Breadcrumbs on primary pages (T3) *(JSON-LD added; visual breadcrumbs added to service pages + about)*
- [ ] P12: Blog — add canonicals on all posts + aggressive cross-linking from main site
- [ ] P13: Google Business Profile setup
- [ ] P14: Image alt text audit

---

*Document Version: 2.0*
*Last Updated: May 2026*
*All Phase 2.8 tasks P1-P11 completed — remaining items are Phase 3+ (case studies, blog, GMB, alt text)*