# NemesisNet Phase 5 — Topical Clusters & Measurement Planning

## Phase 5 Overview
**Goal**: Build topical authority through content clusters and establish measurement framework for Phase 2 success.

**Timeline**: Weeks 7-8 of Phase 2

---

## TC1: AI Infrastructure Cluster

### Cluster Goal
Establish NemesisNet as the authority on self-hosted AI infrastructure, MCP, and production AI deployment in the South African market.

### Article TC1-A: MCP Explained: The Future of AI Agent Tool Use

| Field | Value |
|-------|-------|
| **Title** | MCP Explained: The Future of AI Agent Tool Use |
| **URL** | `/blog/mcp-explained-future-ai-agents` |
| **Target Audience** | Developers, AI engineers, technical decision-makers |
| **Word Count** | 1,800-2,200 words |
| **Priority** | High |

**SEO Keywords:**
- Primary: MCP protocol, AI agent tools, model context protocol
- Secondary: AI agent integration, Claude tools, Anthropic MCP
- Long-tail: what is MCP, MCP vs API, AI agent framework

**Article Structure:**
```
1. Introduction (150 words)
   - Hook: "MCP is transforming how AI agents interact with tools"
   - Problem: AI models are limited without external tool access

2. What is MCP? (300 words)
   - Definition: Model Context Protocol
   - How it works: Request-response cycle
   - Key components: Resources, Tools, Prompts

3. MCP vs Traditional APIs (400 words)
   - Comparison table
   - Flexibility benefits
   - Standardization advantages

4. Real-World Use Cases (400 words)
   - WordPress automation (reference WP MCP Server)
   - Database querying
   - File system operations
   - Custom integrations

5. Implementation Guide (300 words)
   - Basic setup
   - Key considerations
   - Security best practices

6. The Future of MCP (200 words)
   - Industry adoption
   - NemesisNet's positioning

7. Conclusion & CTA (150 words)
   - Summary
   - CTA: Explore AI development services
```

**Internal Links:**
- → `/services/ai-development` (AI development services)
- → `/blog/wordpress-mcp-automation-case-study` (MCP case study)
- → `/projects` (project showcase)

---

### Article TC1-B: Running Local LLMs: A Practical Guide for Production

| Field | Value |
|-------|-------|
| **Title** | Running Local LLMs: A Practical Guide for Production |
| **URL** | `/blog/running-local-llms-production-guide` |
| **Target Audience** | DevOps engineers, CTOs, AI infrastructure teams |
| **Word Count** | 2,000-2,500 words |
| **Priority** | High |

**SEO Keywords:**
- Primary: local LLM, self-hosted LLM, LLM deployment
- Secondary: llama.cpp, Ollama, LLM inference optimization
- Long-tail: run LLM on own server, local AI deployment guide

**Article Structure:**
```
1. Introduction (150 words)
   - Hook: "You can run production-quality LLMs on your own infrastructure"
   - Context: Cost, privacy, control drivers

2. Why Run Local LLMs? (250 words)
   - Cost analysis: API calls vs hardware
   - Privacy: Data never leaves your infrastructure
   - Customisation: Fine-tuned models
   - Latency: No network dependency

3. Hardware Requirements (300 words)
   - GPU options: Consumer vs enterprise
   - Memory requirements
   - Storage considerations
   - Cost-effective configurations

4. Software Stack (400 words)
   - Ollama overview
   - llama.cpp
   - vLLM for production
   - Container options

5. Deployment Architecture (400 words)
   - Single server setup
   - Load balancing
   - Scaling strategies
   - Monitoring & observability

6. Performance Benchmarks (250 words)
   - Throughput metrics
   - Latency comparison
   - Cost per token

7. Challenges & Solutions (200 words)
   - Model updates
   - Hardware failures
   - Security hardening

8. Conclusion & CTA (150 words)
   - Summary
   - CTA: Discuss self-hosted AI infrastructure
```

**Internal Links:**
- → `/services/self-hosted-ai` (self-hosted AI services)
- → `/blog/self-hosted-ai-vs-openai-apis` (comparison article)
- → `/blog/kokoro-tts-production-case-study` (TTS case study)

---

### Article TC1-C: Dockerized AI Deployment: From Laptop to Production

| Field | Value |
|-------|-------|
| **Title** | Dockerized AI Deployment: From Laptop to Production |
| **URL** | `/blog/dockerized-ai-deployment-guide` |
| **Target Audience** | DevOps engineers, developers, platform teams |
| **Word Count** | 1,800-2,200 words |
| **Priority** | Medium |

**SEO Keywords:**
- Primary: Docker AI deployment, containerized ML
- Secondary: Docker Compose AI, GPU Docker, ML deployment
- Long-tail: deploy AI model Docker, containerized inference

**Article Structure:**
```
1. Introduction (150 words)
   - Hook: "Containerization is the key to reproducible AI deployment"
   - Context: DevOps best practices for ML

2. Why Docker for AI? (200 words)
   - Reproducibility
   - Portability
   - Version control
   - Isolation

3. Docker Setup for AI (350 words)
   - Base images
   - GPU access (NVIDIA Docker)
   - Volume mounting
   - Environment variables

4. Docker Compose Patterns (400 words)
   - Multi-service architecture
   - Health checks
   - Restart policies
   - Resource limits

5. CI/CD for AI Containers (300 words)
   - Build optimization
   - Testing strategies
   - Deployment pipelines

6. Production Considerations (250 words)
   - Monitoring
   - Logging
   - Security scanning
   - Update strategies

7. Conclusion & CTA (150 words)
   - Summary
   - CTA: Docker deployment consulting
```

**Internal Links:**
- → `/services/self-hosted-ai` (self-hosted AI)
- → `/services/ai-development` (AI development)
- → `/blog/running-local-llms-production-guide` (local LLMs article)

---

## TC2: Full-Stack Development Cluster

### Cluster Goal
Establish authority on Spring Boot + Vue 3 full-stack development patterns, particularly for SaaS applications.

### Article TC2-A: Spring Boot Patterns for Multi-Tenant SaaS

| Field | Value |
|-------|-------|
| **Title** | Spring Boot Patterns for Multi-Tenant SaaS: Architecture Deep Dive |
| **URL** | `/blog/spring-boot-multi-tenant-patterns` |
| **Target Audience** | Backend developers, architects, technical leads |
| **Word Count** | 2,000-2,500 words |
| **Priority** | High |

**SEO Keywords:**
- Primary: Spring Boot multi-tenant, SaaS architecture Spring
- Secondary: Spring Boot tenant isolation, multi-tenant PostgreSQL
- Long-tail: Spring Boot SaaS best practices, multi-tenant Spring Boot example

**Article Structure:**
```
1. Introduction (150 words)
   - Hook: "Multi-tenancy is the backbone of successful SaaS"
   - Context: Different approaches trade-offs

2. Multi-Tenancy Approaches (300 words)
   - Database per tenant
   - Schema per tenant
   - Row-level security
   - Comparison table

3. Row-Level Security Implementation (400 words)
   - PostgreSQL RLS setup
   - Spring Boot integration
   - Tenant context propagation
   - Performance considerations

4. Service Layer Patterns (350 words)
   - Tenant-aware services
   - Tenant context holder
   - Tenant filtering

5. Security & Authentication (300 words)
   - OAuth2 multi-tenant
   - JWT handling
   - Tenant-specific roles

6. Database Optimisation (200 words)
   - Indexing strategies
   - Connection pooling
   - Query optimization

7. Testing Multi-Tenant Systems (150 words)
   - Integration testing
   - Tenant isolation verification

8. Conclusion & CTA (150 words)
   - Summary
   - CTA: SaaS development services
```

**Internal Links:**
- → `/services/saas-development` (SaaS development)
- → `/blog/since-app-multi-tenant-saas-case-study` (case study)
- → `/projects` (project showcase)

---

### Article TC2-B: Vue 3 Composition API: Real-World Patterns

| Field | Value |
|-------|-------|
| **Title** | Vue 3 Composition API: Real-World Patterns from Production Apps |
| **URL** | `/blog/vue-3-composition-api-patterns` |
| **Target Audience** | Frontend developers, Vue engineers |
| **Word Count** | 1,800-2,200 words |
| **Priority** | Medium |

**SEO Keywords:**
- Primary: Vue 3 Composition API, Vue 3 patterns
- Secondary: Vue 3 composables, Vue 3 best practices
- Long-tail: Vue 3 real-world examples, Vue 3 composition API tutorial

**Article Structure:**
```
1. Introduction (150 words)
   - Hook: "Composition API isn't just a syntax change — it's a paradigm shift"
   - Context: Why we moved to Composition API

2. Why Composition API? (200 words)
   - Logic reuse
   - TypeScript support
   - Code organization
   - Testing improvements

3. Composable Patterns (400 words)
   - useFetch pattern
   - useAuth pattern
   - useTenant pattern (from multi-tenant)
   - Error handling composables

4. State Management with Pinia (300 words)
   - Store patterns
   - Composables vs stores
   - When to use which

5. Real-World Component Patterns (350 words)
   - Composable components
   - Composable composition
   - Testing composables

6. Performance Optimizations (200 words)
   - Computed properties
   - Watch vs watchEffect
   - Lifecycle optimization

7. Migration Strategy (150 words)
   - Incremental adoption
   - Common pitfalls

8. Conclusion & CTA (150 words)
   - Summary
   - CTA: Vue development services
```

**Internal Links:**
- → `/services/saas-development` (SaaS development)
- → `/blog/since-app-multi-tenant-saas-case-study` (case study)
- → `/blog/vue-vs-react-enterprise-saas` (comparison article)

---

## Measurement Tasks

### M1: Google Analytics Goals Setup

| Task | Description | Priority |
|------|-------------|----------|
| **M1.1** | Set up lead form submission as goal in GA4 | High |
| **M1.2** | Create funnel: Landing → Service → Contact | Medium |
| **M1.3** | Set up custom events: Blog read, CTA clicks | Medium |
| **M1.4** | Configure cross-domain tracking | Low |

**Deliverable:** Documented goal configuration with screenshots

---

### M2: SEO Dashboard Creation

| Metric | Source | Display |
|--------|--------|---------|
| Organic sessions | GA4 | Line chart |
| Top 10 keyword positions | GSC | Table |
| Page impressions | GSC | Bar chart |
| Service page conversions | GA4 | Number + trend |
| Blog engagement (time on page) | GA4 | Table |
| Backlinks acquired | Ahrefs/Ubersuggest | Number |

**Deliverable:** Custom dashboard in Looker Studio or GA4

---

### M3: Baseline Measurement

**Capture current state (pre-Phase 2):**

| Metric | Current Value | Target |
|--------|---------------|--------|
| Organic sessions/month | [TBD] | +30% YoY |
| Top 10 rankings | [TBD] | 5+ new |
| Service page traffic | [TBD] | Double |
| Lead form submissions | [TBD] | 50% increase |

**Deliverable:** Baseline document with screenshots

---

### M4: Week 8 Review Check-In

| Review Item | Actions |
|-------------|---------|
| Content published | Verify 3 case studies, 5 cluster articles |
| Keyword rankings | Check progress on target keywords |
| Traffic metrics | Compare to baseline |
| Conversion metrics | Review goal completions |
| Technical SEO | Verify schema, internal links |
| Next steps | Plan for Phase 3 |

**Deliverable:** Review document with recommendations

---

## Cluster Content Checklist

### Before Publishing Each Article

- [ ] Title includes primary keyword
- [ ] Meta description under 160 characters
- [ ] Primary keyword in first 100 words
- [ ] H2 headings include secondary keywords
- [ ] At least 3 internal links to service/pages
- [ ] At least 1 external link to authoritative source
- [ ] Featured image with alt text
- [ ] OG image configured
- [ ] Schema: Article or BlogPosting
- [ ] Linked from cluster hub page

### Cluster Hub Page

Each cluster should have a hub page (e.g., `/blog/ai-infrastructure`) that:
- Links to all cluster articles
- Provides context for the topic area
- Has internal links to relevant service pages

---

*Document Version: 1.0*
*Phase: 5 - Clusters & Measurement*
*Last Updated: May 2026*