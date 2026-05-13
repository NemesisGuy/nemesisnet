# NemesisNet Phase 2.8 — Authority Injection (Strategic Correction)

## Classification: "SEO-Ready Service Shell Complete"

The site is structurally sound, schema-rich, and has excellent core messaging ("We build real infrastructure — not API wrappers"). What's missing is depth — and depth is what SEO actually rewards.

**Current state**: Technically correct, structurally solid, but: thin content, missing homepage schema, weak local SEO, broken mobile contact form, weak testimonials.

---

## SEO Audit Scorecard

| Area | Score | Notes |
|------|-------|-------|
| Meta titles & descriptions | FAIR | Inner service pages have thin/no keywords |
| Canonical tags | WEAK | Missing on Services, About, project pages — duplicate content risk |
| Structured data / JSON-LD | MISS | No JSON-LD found anywhere — highest ROI fix |
| Open Graph tags | WEAK | Homepage has them; inner pages missing entirely |
| robots.txt / sitemap.xml | MISS | Not confirmed present — essential for crawling |
| Heading hierarchy | WEAK | Homepage H1 is just "NemesisNet" — no keywords |
| Keyword targeting / copy depth | FAIR | Each service page ~200 words — needs 600-1000+ |
| Internal linking | FAIR | Homepage linked; service pages don't cross-link |
| Image optimisation | GOOD | WebP + AVIF, optimized/ folder — solid |
| Core messaging | SOLID | "Not API wrappers" = excellent differentiator |
| About page depth | FAIR | Thin — needs founder story, photo, differentiators |
| Services pricing detail | WEAK | Only "Custom Quote" — even ranges help qualify leads |
| Testimonials | FAIR | Both unnamed, no links, no logos — weak credibility |
| Projects portfolio | GOOD | 11 projects, VoxNemesis framing is excellent |
| Location signals | MISS | "Cape Town" once on About; no ZAR, no POPIA, no local keywords |
| Contact form UX | MISS | mailto: kills conversion on mobile |
| Blog integration | MISS | blog.nemesisnet.co.za = subdomain split; authority doesn't flow |

---

## Priority Gap Analysis (Rank Impact Order)

### 🔴 Priority 1 — JSON-LD on Every Page (HIGHEST ROI)

**No JSON-LD found on any page.** This is the single highest-ROI task.

**Required schemas**:
- **Homepage**: WebSite + Organization + SearchAction (enables sitelinks searchbox)
- **Service pages**: Service schema (already done on 6 pages)
- **About page**: Person schema (already added)
- **All pages**: Article schema for future blog posts

**Also needed**:
- Canonical tags on Services, About, all project detail pages
- OG tags on all inner pages (Services, About, projects)
- Sitemap.xml + robots.txt verification

**Task**: Add JSON-LD to homepage (WebSite + SearchAction), canonicals + OG to all inner pages.

### 🔴 Priority 2 — Contact Form: mailto → Backend (CONVERSION KILLER)

**Problem**: mailto: works on desktop with configured mail client. On mobile (large traffic segment) it tries to open the mail app — most people haven't configured one. You lose that lead.

**Solution**: Route through backend (Spring Boot endpoint) or a service like Resend/Brevo. You're already self-hosting infrastructure — this is trivial.

**Task**: Replace mailto: contact form with backend form submission.

### 🔴 Priority 3 — Service Pages: Expand to 600-1000+ Words

Each service page is ~200 words. Google won't rank a 200-word page against a competitor's 1500-word page with real examples, FAQs, and specifics.

**Each service page must include**:
- What the service includes (specifics, not just vibes)
- What it doesn't include (sets expectations, reduces unqualified enquiries)
- A real-world use case or two (even anonymised)
- An FAQ section (FAQ schema is gold for voice search and featured snippets)
- Actual process steps (the 4-step flow from Services index — adapt for each subpage)
- Pricing ranges (e.g. "from R15,000") — even ranges reduce bounce from tyre-kickers

**The VoxNemesis project page** with Challenge / Solution / Technical Implementation structure is the right template — replicate on every service page.

**Task**: Expand each service page to 600-1000+ words with: use cases, non-inclusions, FAQ, process steps, pricing ranges.

### 🟠 Priority 4 — Homepage H1 + Hero Rewrite

**Problem**: H1 is just "NemesisNet" — no keywords, wastes the most important heading.

**Required change**: Expand to include target keywords.

**Example**: "NemesisNet — AI Infrastructure & Platform Engineering in Cape Town"

**Also**: Rewrite hero to explicitly answer: "What does NemesisNet DO in one sentence?"

**Required structure**:
- Who you help
- What you build
- What outcome you deliver

**Example direction**:
> "We build custom AI systems, self-hosted infrastructure, and SaaS platforms for businesses that need control, scalability, and engineering-grade reliability."

**Task**: Expand H1 + rewrite hero + add "What we build" section (3-5 bullet systems).

### 🟠 Priority 5 — Local SEO (ZERO RIGHT NOW)

**Problem**: "Cape Town" appears once on the About page. No ZAR pricing, no POPIA, no African market mention, no local keywords.

**Required additions everywhere**:
- "Based in Cape Town, South Africa — available for remote engagements globally" in footer
- "Cape Town software engineer", "South Africa AI development" keywords on homepage, About, Services
- ZAR pricing prominently displayed
- POPIA mention as a differentiator (implemented on KayaStays, can reference)
- African time zone advantage: "Work in your timezone, overlap with European hours"
- Google Business Profile (if not already)

**Task**: Add location keywords throughout + footer tagline + GMB setup.

### 🟠 Priority 6 — About Page: Beef Up Founder Story

**Problem**: "20+ systems delivered" with no context feels like a placeholder.

**What would actually work**:
- Named kind of work (multi-tenant SaaS platforms, self-hosted AI infra on commodity hardware, TTS pipelines at sub-150ms latency)
- Academic background (BTech research)
- Self-hosted homelab angle
- Self-sufficiency story: architect, build, deploy, and operate the whole stack (genuinely rare at solo level — clients who've been burned by devs who can't do DevOps will respond to this)
- **A photo** — even a clean, slightly-dark headshot fits the brand aesthetic

**Task**: Expand founder bio with specifics + add photo.

### 🟡 Priority 7 — Testimonials: Add Credibility Weight

**Problem**: "Business Owner" tells a visitor nothing. No photo, no company logo, no URL to client site.

**Required additions**:
- Client location: "Business Owner, Cape Town" or "Business Owner, financial services"
- Link to the live demo site of the work ("See the work" link)
- Client logo if available
- Named clients if happy to be named and linked (massively better)

**Task**: Add location context + project links to all testimonials.

### 🟡 Priority 8 — Internal Linking (T5 REINSTATED)

**Why it matters**: Google needs to understand related services, clusters, primary vs secondary intent. Without it, pages rank weaker individually.

**Required links on each service page**:
- AI Dev → Self-hosted AI
- Self-hosted AI → SaaS dev
- SaaS dev → AI Dev
- All → homepage
- Related project links

**Task**: Add "Related Services" + "Related Projects" sections to all service pages.

### 🟡 Priority 9 — Breadcrumbs (T3 REINSTATED)

Improves crawl structure and UX. Cheap win, not critical.

**Task**: Add breadcrumb schema to primary pages.

### ⚠️ Blog Subdomain (DEFERRED)

**Problem**: blog.nemesisnet.co.za is a separate subdomain. Google treats subdomains as separate sites — all blog authority accrues to the subdomain, not the main site.

**Recommendation**: Move to nemesisnet.co.za/blog (future).

**Current mitigation**: Add rel="canonical" on every blog post pointing back to main domain + cross-link aggressively from main site.

**Priority**: Low — deferred to future. Above tasks are higher priority.

---

## Quick Wins (This Week)

1. Homepage JSON-LD (WebSite + Organization + SearchAction schema)
2. Add canonicals + OG tags to Services, About, and every project detail page
3. Add sitemap.xml and verify robots.txt
4. Submit sitemap to Google Search Console (set up if not already)
5. Expand homepage H1 to include keywords
6. Add "Based in Cape Town, South Africa" to footer
7. Fix contact form (mailto → backend)

---

## Implementation Plan

### 🔴 Immediate (this sprint)

1. Homepage JSON-LD: WebSite + Organization + SearchAction
2. Canonical tags on all inner pages (Services, About, projects)
3. OG tags on all inner pages
4. Sitemap.xml + robots.txt check + GSC submission
5. Homepage H1 expansion + hero rewrite
6. Fix contact form (mailto → backend)
7. Add "Cape Town, South Africa" to footer + local SEO elements

### 🟠 Next sprint

8. Expand service pages to 600-1000+ words each
9. Add FAQ sections to service pages with FAQ schema
10. Add pricing ranges to service pages
11. Add "Related Services" + "Related Projects" links
12. About page: expand founder bio + add photo
13. Testimonials: add location context + project links

### 🟡 Later

14. Breadcrumbs on primary pages
15. Blog canonical + aggressive cross-linking
16. Google Business Profile setup

---

## What's Already Done (Don't Re-do)

- Service architecture (3 core money pages)
- Service schema on 6 service pages
- Organization schema in nuxt.config.ts
- LocalBusiness schema in nuxt.config.ts
- Person schema on About page
- FAQ schema on /services page
- /services/saas-development renamed from /saas-dev

---

## SEO Scoring Breakdown

| Signal | Score | Action |
|--------|-------|--------|
| JSON-LD | MISS | Add WebSite + SearchAction to homepage |
| Canonical tags | WEAK | Add to Services, About, all projects |
| OG tags | WEAK | Add to all inner pages |
| Sitemap/robots | MISS | Verify + submit to GSC |
| Homepage H1 | WEAK | Expand with keywords |
| Copy depth | WEAK | Expand service pages to 600-1000+ words |
| Internal linking | FAIR | Add Related Services to all pages |
| Local SEO | MISS | Add Cape Town + ZAR throughout |
| Contact form | MISS | Replace mailto with backend |
| About page | FAIR | Expand founder story + add photo |
| Testimonials | FAIR | Add location + project links |
| Blog | MISS | Add canonicals + cross-link |

---

*Document Version: 1.3*
*Status: Phase 2.8 — Authority Layer (Full integration: SEO audit + Claude's deep-dive + authority gap analysis)*
*Last Updated: May 2026*
*Sources: SEO scorecard audit + Claude full-site crawl feedback + authority gap analysis*
*Note: Blog subdomain migration deferred — not current priority*