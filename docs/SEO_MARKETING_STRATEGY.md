# NemesisNet SEO & Marketing Strategy — Phase 2

## Overview

This document outlines the SEO and content strategy for Phase 2 of NemesisNet's growth. The goal is to translate technical capability into discoverability while preserving engineering credibility.

## Current Position Analysis

### What We Do Well
- Technical depth and authentic engineering voice
- Project showcases with real architecture
- Pricing transparency (filters unserious leads)
- Self-hosted AI positioning ("Real AI infrastructure — not API wrappers")
- High-value niche: AI infra + self-hosting + backend engineering + MCP + consulting

### Biggest SEO Problem
Google does not fully understand WHO NemesisNet is. Content is:
- Broad
- Highly technical
- Project-centric
- Architecture-centric

SEO rewards: explicit intent targeting, problem-based content, keyword clustering, solution pages.

## Target Audience & Competitors

### Real Competitors (Not Just Local Web Devs)
- **Technical Consultancies**: AI infrastructure specialists, full-stack agencies
- **Dev Studios**: Spring Boot specialists, Vue/React agencies
- **Infrastructure Teams**: DevOps consultants, platform engineers
- **International**: Global AI development agencies targeting SA market

### Positioning Differentiation
- **NOT**: Generic web developer, frontend-only, portfolio site
- **IS**: Infrastructure engineering, AI systems, backend/platform architecture, self-hosted AI, production systems, consulting

## SEO Strategy

### 1. High Priority — Service Landing Pages

Create dedicated pages for:
- Custom AI Development South Africa
- Spring Boot Development Services
- Self-Hosted AI Infrastructure
- MCP Integration Consulting
- Docker Deployment Services
- Vue + Spring Boot Development
- AI Automation for Business
- Secure Authentication Systems
- OAuth2 Integration Services
- Custom SaaS Development Cape Town

### 2. Medium Priority — Content Types

- **Case Studies**: Measurable outcomes, before/after metrics
- **Comparison Articles**: "Self-hosted AI vs OpenAI APIs", "Vue vs React for Enterprise"
- **"How We Built X"**: Technical deep-dives
- **Problem/Solution Content**: Address specific client pain points
- **FAQs**: Schema markup, featured snippet opportunities
- **Glossary Pages**: MCP, OAuth2, DevOps terms

### 3. Very High Priority — Emerging Keywords

Target these lower-competition emerging markets:
- Self hosted AI
- MCP server
- AI infrastructure
- Spring Boot SaaS
- Secure AI systems
- Dockerized AI deployment
- Custom AI agent development

### 4. Topical Authority Clusters

Build content clusters to dominate topics:

**AI Infrastructure Cluster:**
- Self-hosted AI vs OpenAI APIs
- Running local LLMs
- GPU requirements
- AI deployment architecture
- MCP explained
- Agent security
- AI observability
- AI cost optimization

**Full-Stack Development Cluster:**
- Vue 3 best practices
- Spring Boot architecture patterns
- PostgreSQL optimization
- Redis caching strategies
- OAuth2 implementation
- Multi-tenant SaaS patterns

**DevOps & Infrastructure Cluster:**
- Docker Compose patterns
- Nginx configuration
- CI/CD best practices
- Infrastructure as Code
- Cloud deployment strategies

## Content Guidelines

### Human Search Phrases To Include
- "build SaaS South Africa"
- "custom business software"
- "AI developer Cape Town"
- "Spring Boot developer South Africa"
- "portfolio platform builder"
- "Docker deployment consultant"
- "self hosted AI services"
- "custom software development agency"

### SEO Framing Examples

**Current (Good for engineers):**
> "AI infrastructure and platform engineering"

**SEO Stronger:**
> "Custom AI Infrastructure & Full-Stack Software Development in South Africa"

Need BOTH to satisfy technical credibility AND search discoverability.

### DO NOT DO
- Generic SEO sludge
- Buzzword spam
- Thin content

### ALWAYS DO
- Preserve engineering credibility
- Technical depth
- Authentic voice
- Real project examples
- Measurable outcomes

## Phase 2 Status: Architecture Complete, Authority Layer Next

**Classification**: "SEO-Ready Service Shell" — structurally complete, content-realization pending. Core messaging is excellent ("We build real infrastructure — not API wrappers"). What's missing is depth and authority signals.

**SEO Audit Scores**:
- JSON-LD: MISS | Canonical: WEAK | OG: WEAK | Sitemap: MISS | H1: WEAK
- Copy depth: WEAK | Internal linking: FAIR | Local SEO: MISS | Contact form: MISS
- About page: FAIR | Testimonials: FAIR | Image optimisation: GOOD

**What's done**:
- Service architecture (3 core money pages: AI Dev, Self-hosted AI, SaaS Development)
- Service schema on 6 service pages
- Organization + LocalBusiness schema in nuxt.config.ts
- Person schema on About page
- FAQ schema on /services page
- WebP + AVIF image optimisation

**What's missing** (Phase 2.8 priorities):
- Homepage JSON-LD (WebSite + SearchAction — highest ROI fix)
- Canonical tags on Services, About, all projects
- OG tags on all inner pages
- Sitemap.xml + robots.txt + GSC submission
- Homepage H1 expansion (currently just "NemesisNet")
- Service pages expanded to 600-1000+ words each
- Local SEO signals (Cape Town, ZAR, POPIA throughout)
- Contact form fix (mailto → backend)
- About page: founder story depth + photo
- Testimonials: location context + project links
- Internal linking (T5 reinstated)
- Breadcrumbs (T3 reinstated)

**Phase shift**: Adding more pages ≠ more SEO. Improving semantic clarity + authority signals = ranking boost.

---

## Technical SEO Improvements

### Phase 2.8 Authority Layer (HIGHEST PRIORITY)

- [ ] Homepage JSON-LD — WebSite + Organization + SearchAction (enables sitelinks searchbox in Google)
- [ ] Fix contact form — mailto: kills mobile conversion; use backend or Resend
- [ ] Expand service pages to 600-1000+ words each (use cases, non-inclusions, FAQ, process, pricing)
- [ ] Homepage H1 expansion — "AI Infrastructure & Platform Engineering in Cape Town"
- [ ] Add canonicals + OG tags to all inner pages (Services, About, projects)
- [ ] Sitemap.xml + robots.txt verification + submit to Google Search Console
- [ ] Local SEO — Cape Town + ZAR pricing + POPIA mention throughout
- [ ] About page — expand founder story + add photo
- [ ] Testimonials — add location context + project links
- [ ] Internal linking — "Related Services" on all pages (T5)
- [ ] Breadcrumbs on primary pages (T3)

### Schema Markup To Add
- [ ] WebSite + SearchAction on homepage *(highest ROI)*
- [x] Organization schema
- [x] Service schema
- [ ] Breadcrumb schema *(reinstated)*
- [x] LocalBusiness schema
- [x] FAQ schema on /services
- [x] Person schema on About

### Blog Subdomain Note
blog.nemesisnet.co.za is a separate subdomain — blog authority doesn't flow to main site. **Deferred** to future. Mitigation: add rel="canonical" on blog posts + aggressive cross-linking.

## Landing Page Templates

### Service Page Template
```
1. Hero: Problem statement + solution
2. Who this is for (buyer personas)
3. What we deliver (outcomes)
4. How it works (process)
5. Tech stack / approach
6. Case study snippet
7. Pricing range or "get quote"
8. CTA: Book consultation
9. Related services (internal links)
```

### Comparison Article Template
```
1. Introduction (search intent)
2. Option A overview
3. Option B overview
4. Feature comparison table
5. Pros/cons each
6. Use case recommendations
7. Our take / recommendation
8. CTA to discuss your situation
```

## Measurement & Goals

### KPI Targets
- Organic traffic growth: +30% YoY
- Service page rankings: Top 10 for target keywords
- Lead form submissions: Track from SEO vs other channels
- Time on page: 2+ minutes for service pages

### Tracking
- Google Search Console: Keyword positions, impressions
- Google Analytics: Traffic sources, goals
- PageSpeed: Maintain 90+ scores

## Implementation Priority

### Week 1-2
1. Create 3 service landing pages (highest value)
2. Add FAQ schema to existing pages
3. Optimize homepage title/meta

### Week 3-4
4. Create 2 comparison articles
5. Add internal linking structure
6. Add location keywords throughout

### Week 5-8
7. Create case study templates
8. Build first 2 case studies
9. Start topical cluster content

## Notes

This is standard, ethical marketing practice:
- Competitor analysis
- SEO gap analysis
- Content positioning
- Keyword research
- Messaging differentiation

Tools: Ubersuggest, Ahrefs, SEMrush, Google Search Console, Google Trends

NOT ethical: copying code, impersonating brands, scraping private data.

We are firmly in the ethical category.

---

*Document Version: 1.0*
*Status: Ready for Phase 2 Implementation*