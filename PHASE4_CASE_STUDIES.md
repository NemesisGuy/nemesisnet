# NemesisNet Phase 4 — Case Study Planning Documents

## Phase 4 Overview
**Goal**: Create 3 detailed, SEO-optimized case studies that showcase real project outcomes with measurable metrics.

**Timeline**: Weeks 5-6 of Phase 2

---

## CS1: Building a Multi-Tenant SaaS with Spring Boot + Vue 3

### Metadata

| Field | Value |
|-------|-------|
| **Title** | Building a Multi-Tenant SaaS with Spring Boot + Vue 3: Lessons from the Since App |
| **Source Project** | Since (https://github.com/NemesisGuy/since) |
| **URL** | `/blog/since-app-multi-tenant-saas-case-study` |
| **Target Audience** | CTOs, technical leads, startup founders evaluating tech stacks for SaaS |
| **Word Count** | 2,000-2,500 words |
| **Publish Priority** | High |

### SEO Keywords

**Primary:**
- Multi-tenant SaaS architecture
- Spring Boot Vue 3 full stack
- SaaS development South Africa

**Secondary:**
- Multi-tenant PostgreSQL design
- Vue 3 composition API best practices
- Spring Boot security OAuth2
- SaaS pricing models implementation

**Long-tail:**
- How to build multi-tenant SaaS
- Spring Boot vs Node.js SaaS
- Vue 3 enterprise patterns

### Article Structure

```
1. Introduction (150 words)
   - Problem: Building SaaS that scales from startup to enterprise
   - Hook: "We built a multi-tenant SaaS handling 500+ organisations — here is what worked"

2. The Challenge (200 words)
   - Tenant isolation requirements
   - Scalability expectations
   - Tech stack constraints

3. Architecture Decisions (400 words)
   - Database: PostgreSQL row-level security
   - Backend: Spring Boot with tenant context
   - Frontend: Vue 3 Composition API with Pinia
   - Auth: OAuth2 with multi-tenant scopes
   [Include: Architecture diagram reference]

4. Key Technical Implementation (600 words)
   - 4.1 Tenant Context Filter (100 words)
   - 4.2 Row-Level Security (150 words)
   - 4.3 Vue 3 Composables for Multi-Tenancy (150 words)
   - 4.4 Caching Strategy with Redis (150 words)

5. What We Learned (300 words)
   - Mistakes: Over-engineering early
   - Wins: PostgreSQLRLS worked better than expected
   - Trade-offs: Complexity vs isolation

6. Results & Metrics (200 words)
   - User count: X organisations
   - Response time: Y ms p95
   - Uptime: 99.9%
   - Cost savings: Z% vs alternatives

7. Conclusion (150 words)
   - Summary: Spring Boot + Vue 3 works for multi-tenant
   - CTA: Discuss your SaaS architecture
```

### Metrics/Data Points to Include

- Organisation count (anonymised if needed)
- P95 response times
- Database query performance improvements
- Authentication latency
- Cost comparison vs alternatives (e.g., Firebase, Supabase)
- Feature delivery timeline

### Internal Linking Map

| Link From | Link To | Anchor Text |
|-----------|---------|-------------|
| This article | `/services/saas-development` | "SaaS development services" |
| This article | `/services/ai-development` | "AI integration for SaaS" |
| This article | `/services/self-hosted-ai` | "self-hosted AI infrastructure" |
| This article | `/projects` | "view our other projects" |
| Services pages | This article | "multi-tenant SaaS case study" |

### Tone & Style Guidance

- **Voice**: Engineer-to-business-person (explain the "why" behind technical choices)
- **South African context**: Reference local hosting, GDPR/POPIA compliance considerations
- **Authenticity**: Include real challenges and failures, not just successes
- **SEO-first**: Natural keyword placement in headings, first paragraph, and throughout

---

## CS2: MCP Integration for WordPress Automation

### Metadata

| Field | Value |
|-------|-------|
| **Title** | MCP Integration for WordPress Automation: Cutting Publishing Time by 80% |
| **Source Project** | WordPress MCP Server (https://github.com/NemesisGuy/wordpress-mcp-server) |
| **URL** | `/blog/wordpress-mcp-automation-case-study` |
| **Target Audience** | Marketing teams, content managers, WordPress site owners, developers |
| **Word Count** | 1,800-2,200 words |
| **Publish Priority** | High |

### SEO Keywords

**Primary:**
- MCP WordPress integration
- WordPress automation
- AI agent automation

**Secondary:**
- WordPress API automation
- MCP server setup
- Content automation tools

**Long-tail:**
- WordPress automation without plugins
- MCP for content management
- AI-powered WordPress publishing

### Article Structure

```
1. Introduction (150 words)
   - Problem: Manual WordPress publishing is repetitive and time-consuming
   - Hook: "We automated an entire content team's publishing workflow using MCP"

2. The Problem (200 words)
   - Manual copy-paste workflow
   - Time spent on formatting
   - Error rates
   - Scalability challenges

3. The Solution: MCP Architecture (400 words)
   - What is MCP (brief)
   - How it connects to WordPress
   - Workflow diagram
   - Tech: Node.js + WordPress REST API

4. Implementation Details (500 words)
   - 4.1 Setting up the MCP Server (150 words)
   - 4.2 WordPress Authentication (100 words)
   - 4.3 Content Pipeline Automation (150 words)
   - 4.4 Error Handling & Monitoring (100 words)

5. Results & Metrics (300 words)
   - Time saved: X hours/week
   - Publishing speed: Yx faster
   - Error reduction: Z%
   - Cost impact

6. Use Cases (200 words)
   - Multi-site publishers
   - Content agencies
   - E-commerce product updates
   - Member-only content

7. Conclusion & CTA (150 words)
   - Summary: MCP transforms WordPress workflows
   - CTA: Discuss your automation needs
```

### Metrics/Data Points to Include

- Hours saved per week/month
- Publishing time reduction (before/after)
- Error rate reduction
- Cost savings on plugins/automation tools
- Number of posts automated

### Internal Linking Map

| Link From | Link To | Anchor Text |
|-----------|---------|-------------|
| This article | `/services/ai-development` | "AI development services" |
| This article | `/services/self-hosted-ai` | "self-hosted AI infrastructure" |
| This article | `/projects` | "view our projects" |
| Services pages | This article | "WordPress automation case study" |

### Tone & Style Guidance

- **Voice**: Practical, results-focused, accessible to non-technical readers
- **South African context**: Reference local businesses with WordPress sites
- **Problem-solution**: Lead with the pain point, then show the solution
- **SEO-first**: Emphasize "automation" and "WordPress" keywords naturally

---

## CS3: Self-Hosted TTS Pipeline for Production

### Metadata

| Field | Value |
|-------|-------|
| **Title** | Self-Hosted TTS Pipeline for Production: From Prototype to 99.99% Uptime |
| **Source Project** | Kokoro TTS (https://github.com/NemesisGuy/kokoro-tts-deploy) |
| **URL** | `/blog/kokoro-tts-production-case-study` |
| **Target Audience** | DevOps engineers, AI product managers, CTOs evaluating TTS infrastructure |
| **Word Count** | 2,000-2,500 words |
| **Publish Priority** | High |

### SEO Keywords

**Primary:**
- Self-hosted TTS
- Kokoro TTS deployment
- AI voice infrastructure

**Secondary:**
- Production AI deployment
- TTS cost optimization
- Docker AI deployment

**Long-tail:**
- Self-hosted text to speech
- Running TTS in production
- AI voice API self-hosted

### Article Structure

```
1. Introduction (150 words)
   - Problem: Cloud TTS APIs are expensive, have rate limits, send data externally
   - Hook: "We built a self-hosted TTS pipeline handling 10,000+ requests/day at 1/10th the cost"

2. Why Self-Hosted TTS? (250 words)
   - Cost comparison: Cloud vs self-hosted
   - Privacy requirements
   - Customisation needs
   - Latency requirements

3. Architecture Overview (400 words)
   - Kokoro TTS model
   - Docker container setup
   - Load balancing approach
   - Monitoring stack
   [Include: Architecture diagram]

4. Implementation Details (600 words)
   - 4.1 Docker & GPU Setup (150 words)
   - 4.2 Model Optimisation (150 words)
   - 4.3 Caching Strategy (100 words)
   - 4.4 Monitoring & Observability (150 words)
   - 4.5 Scaling for Production (150 words)

5. Results & Metrics (300 words)
   - Latency: P50, P95, P99
   - Uptime: 99.99%
   - Cost: R/voice-hour vs cloud
   - Throughput: requests/day

6. Challenges & Solutions (250 words)
   - GPU memory limits
   - Model loading times
   - Fallback strategies

7. Conclusion (150 words)
   - Summary: Self-hosted TTS is viable for production
   - CTA: Discuss your AI infrastructure needs
```

### Metrics/Data Points to Include

- P50/P95/P99 latency numbers
- Uptime percentage
- Cost per 1,000 requests (self-hosted vs cloud)
- Daily request volume
- GPU utilization
- Model warm-up time

### Internal Linking Map

| Link From | Link To | Anchor Text |
|-----------|---------|-------------|
| This article | `/services/self-hosted-ai` | "self-hosted AI services" |
| This article | `/services/ai-development` | "AI development services" |
| This article | `/projects/kokoro-tts` | "Kokoro TTS project" |
| This article | `/blog/self-hosted-ai-vs-openai-apis` | "self-hosted vs cloud comparison" |
| Services pages | This article | "TTS infrastructure case study" |

### Tone & Style Guidance

- **Voice**: Technical but accessible, emphasise real production metrics
- **South African context**: Note that this infrastructure can run locally in SA data centres
- **Credibility**: Focus on uptime, latency, and cost metrics that matter to decision-makers
- **SEO-first**: Emphasize "self-hosted," "production," "deployment" keywords

---

## Case Study Writing Guidelines

### Common Elements Across All Case Studies

1. **Hero Section**: Title + 1-sentence hook + key metric
2. **Problem Statement**: Clear before-scenario
3. **Solution**: Technical but accessible explanation
4. **Metrics**: Quantifiable outcomes (emphasise)
5. **Lessons**: Honest assessment of what worked/didn't
6. **CTA**: Relevant service page link

### Content Quality Standards

- Every claim must be backed by a metric or specific example
- Include at least one diagram or code snippet where relevant
- Use blockquotes for key insights
- Link to source code where applicable (GitHub repos)
- Ensure 2+ internal links to service/project pages

### SEO Checklist for Each Case Study

- [ ] Primary keyword in title (H1)
- [ ] Primary keyword in first 100 words
- [ ] Secondary keywords in subheadings (H2/H3)
- [ ] At least 3 internal links to service pages
- [ ] At least 1 link to related project
- [ ] Meta description under 160 characters with keyword
- [ ] Open Graph image with alt text

---

*Document Version: 1.0*
*Phase: 4 - Case Studies*
*Last Updated: May 2026*