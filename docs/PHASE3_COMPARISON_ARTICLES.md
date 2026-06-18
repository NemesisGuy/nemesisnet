# NemesisNet Phase 3 — Comparison Article Requirements

## Overview

This document outlines detailed requirements for two comparison articles to be created in Week 4 of Phase 2. These articles establish topical authority and drive organic traffic from decision-makers researching technology choices.

**Reference Blog Style**: https://blog.nemesisnet.co.za
- Tone: Engineer-to-business-person, practical, first-person voice
- Style: Long-form technical content, real metrics, project-based examples
- Philosophy: "Challenging the Status Quo" — contrarian takes backed by experience

---

## Article 1: Self-Hosted AI vs Cloud APIs

### Title

**Self-Hosted AI vs Cloud APIs: What South African Businesses Need to Know**

*Alternative titles:*
- "Why South African Companies Are Building Their Own AI Infrastructure"
- "The Hidden Costs of Cloud AI: When Self-Hosting Makes Sense"

### Target Audience

- **Primary**: CTOs, IT Directors, Technology Decision Makers at South African companies
- **Secondary**: Operations managers evaluating AI costs, founders of SA startups
- **Audience pain points**: Rising AI API costs, data privacy concerns, dependency on US-based providers, unreliable connectivity

### SEO Keywords to Target

**Primary keywords** (high volume):
- Self-hosted AI South Africa
- Local AI deployment
- AI infrastructure cost comparison
- Private AI vs cloud AI

**Secondary keywords** (lower competition):
- Run AI locally business
- AI API costs South Africa
- Self-hosted LLM deployment
- AI data privacy South Africa

**Long-tail**:
- Is self-hosted AI cheaper for South African business
- AI infrastructure without internet dependency
- on-premise AI vs cloud APIs

### Tone and Style

- **Voice**: Practical, cost-conscious, risk-aware
- **Angle**: Not "self-hosted is always better" — earn the decision by showing when cloud APIs make sense
- **South African context**: Mention data sovereignty, rand volatility, connectivity issues, load shedding
- **Persuasion**: Lead with cost, back with control and privacy

### Article Structure

#### 1. Introduction (200-300 words)
- Hook: "You're burning R50k/month on OpenAI calls. Here's the alternative no one talks about."
- Context: SA businesses face unique challenges — unreliable connectivity, dollar costs, data sovereignty
- Thesis: Self-hosted AI isn't for everyone, but for the right use cases, it's 10x cheaper and gives you control cloud APIs never will
- **Suggested word count**: 250

#### 2. The Cost Reality (400-500 words)
- Break down real costs: API call costs at scale vs. self-hosted infrastructure
- Include comparison table: Cloud API (ChatGPT-4o, Claude) vs. self-hosted (Mistral, Llama 3)
- Factor in: GPU infrastructure (what you'd need), maintenance, electricity (RSA context)
- Real metric example: "Our Kokoro TTS deployment runs on a single RTX 4080 and costs R2,500/month — equivalent to ~15,000 OpenAI TTS calls"
- **Suggested word count**: 450

#### 3. Control and Data Privacy (300-400 words)
- What "control" actually means: model customization, fine-tuning, uptime
- Data privacy: Your data stays in your infrastructure
- Compliance: POPIA considerations, data leaving South Africa
- Use case: Financial services, healthcare, legal — where data can't leave
- **Suggested word count**: 350

#### 4. When Cloud APIs Win (200-300 words)
- Be fair: acknowledge where cloud makes sense
- Use cases: prototyping, low-volume, bleeding-edge models
- Hybrid approach: self-hosted for core, cloud for experimentation
- **Suggested word count**: 250

#### 5. Infrastructure Requirements (300-400 words)
- What you actually need: Hardware, software, expertise
- Entry-level: Consumer GPU (RTX 4090) — what it can and can't do
- Production: Multi-GPU setup, clustering, monitoring
- The skills gap: Who manages this?
- Reference: Our self-hosted infrastructure projects
- **Suggested word count**: 350

#### 6. The Hybrid Path (200-250 words)
- Most companies shouldn't go all-in on either
- Practical approach: Core functions self-hosted, edge cases cloud
- Reference: MCP architecture pattern
- **Suggested word count**: 225

#### 7. Conclusion + CTA (150-200 words)
- Summary: Self-hosted makes sense at scale, when privacy matters, or when you need offline capability
- CTA: "Talk to us about your AI infrastructure" → `/services/self-hosted-ai`
- Alternative CTA: "Prototype first" → `/services/ai-development`
- **Suggested word count**: 175

### Internal Linking Opportunities

| From | To | Anchor text |
|------|-----|-------------|
| Cost section | /services/self-hosted-ai | "self-hosted AI infrastructure" |
| Infrastructure | /services/self-hosted-ai | "our self-hosted AI services" |
| Hybrid path | /services/ai-development | "AI development services" |
| Conclusion | /services/self-hosted-ai | Book infrastructure consultation |
| Related services | /services | View all services |

### External Linking (Building Authority)

- Link to Ollama, LM Studio, vLLM (tool references)
- Link to Hugging Face (model hub)
- Reference: South African AI initiatives or cloud providers with JHB/CPT data centers

### Word Count Summary

| Section | Words |
|---------|-------|
| Introduction | 250 |
| Cost Reality | 450 |
| Control & Privacy | 350 |
| Cloud APIs Win | 250 |
| Infrastructure | 350 |
| Hybrid Path | 225 |
| Conclusion + CTA | 175 |
| **Total** | **~2,050** |

---

## Article 2: Vue 3 vs React for Enterprise SaaS

### Title

**Vue 3 vs React for Enterprise SaaS: A Developer's Perspective**

*Alternative titles:*
- "Why We Chose Vue 3 for Enterprise — And When We'd Pick React"
- "Vue 3 vs React: The Honest Comparison After 5 Years of Enterprise SaaS"

### Target Audience

- **Primary**: Technical leads, software architects, engineering managers
- **Secondary**: Full-stack developers evaluating frameworks, startup founders choosing tech stack
- **Audience pain points**: Framework burnout, team hiring challenges, scaling pain, maintenance burden

### SEO Keywords to Target

**Primary keywords** (high volume):
- Vue 3 vs React enterprise
- Vue 3 enterprise SaaS
- React vs Vue performance
- best frontend framework SaaS

**Secondary keywords** (lower competition):
- Vue 3 Spring Boot integration
- React enterprise scalability
- Vue vs React developer experience
- frontend framework comparison 2025

**Long-tail**:
- Vue 3 for large scale application
- React vs Vue learning curve enterprise
- Vue 3 composition API patterns

### Tone and Style

- **Voice**: Experience-based, not fan-boy, practical
- **Angle**: We've built production SaaS with both — here's what actually matters
- **Differentiation**: Don't rehash "React has more jobs" — focus on what matters for building maintainable enterprise software
- **Evidence**: Reference real projects: Since app, ForkMyFolio, CodeCritical SaaS

### Article Structure

#### 1. The Uncomfortable Truth (200-250 words)
- Hook: "Both frameworks can build your SaaS. Only one will make your life easier in year 3."
- Context: We're not here to declare a winner — we're here to help you pick based on your situation
- The real differentiators no one talks about: Team composition, maintenance horizon, ecosystem lock-in
- **Suggested word count**: 225

#### 2. Learning Curve and Team Onboarding (300-400 words)
- Vue 3: Gentler learning curve, better documentation, faster ramp-up
- React: Steeper curve, more concepts to learn (hooks, context, effects)
- Real metric: "New developer to first PR — Vue: 3 days, React: 7 days (our experience)"
- Consider: What your existing team knows
- **Suggested word count**: 350

#### 3. Ecosystem and Tooling (350-450 words)
- Package ecosystem: React has more, Vue has better integration
- State management: Pinia (Vue) vs Redux/Zustand (React) — which is simpler?
- Developer experience: Vite, TypeScript support, hot reloading
- The " npm package hell" problem — React's dependency churn
- **Suggested word count**: 400

#### 4. Scalability and Maintenance (400-500 words)
- How each handles large codebases
- Component architecture patterns that work at scale
- Real project example: ForkMyFolio (Vue) vs hypothetical React equivalent
- The composition API vs hooks debate
- **Suggested word count**: 450

#### 5. Hiring and Team Dynamics (250-300 words)
- The South African context: Vue jobs vs React jobs locally
- Global market: React has more candidates, Vue has higher quality per capita (argument)
- Team flexibility: Multi-framework reality
- **Suggested word count**: 275

#### 6. Our Verdict by Use Case (300-350 words)
- Pick Vue 3 when: Small team, fast build, maintain for 3+ years, Vue talent in your market
- Pick React when: Need specific React-only libraries, large existing React codebase, hiring is your bottleneck
- The grey area: Greenfield projects where either works
- **Suggested word count**: 325

#### 7. Practical Migration Notes (200-250 words)
- If you're already on one: When to migrate, when not to
- Hybrid approach: Micro-frontends, different frameworks for different parts
- **Suggested word count**: 225

#### 8. Conclusion + CTA (150-200 words)
- Summary: Neither is wrong — match to your team and goals
- CTA: "Need help architecting your SaaS?" → `/services/saas-development`
- Alternative: "Full-stack team" → Contact page
- **Suggested word count**: 175

### Internal Linking Opportunities

| From | To | Anchor text |
|------|-----|-------------|
| Ecosystem section | /services/saas-development | "Spring Boot + Vue 3 SaaS development" |
| Scalability section | /services/saas-development | "enterprise SaaS we build" |
| Verdict section | /services/saas-development | "SaaS development services" |
| Conclusion | /services | View all services |
| Projects page | /projects | See our Vue 3 projects |

### Project References to Include

- **Since app**: Full-stack Vue 3 + Spring Boot, multi-tenant
- **ForkMyFolio**: Multi-user platform, complex auth
- **CodeCritical SaaS**: Analytics dashboard, real-time data

### Word Count Summary

| Section | Words |
|---------|-------|
| Uncomfortable Truth | 225 |
| Learning Curve | 350 |
| Ecosystem | 400 |
| Scalability | 450 |
| Hiring Dynamics | 275 |
| Verdict by Use Case | 325 |
| Migration Notes | 225 |
| Conclusion + CTA | 175 |
| **Total** | **~2,425** |

---

## Content Guidelines (Both Articles)

### Writing Standards

- **First-person voice**: Use "we" when referring to NemesisNet experience
- **Specific over general**: Always cite real numbers, projects, metrics
- **South African context**: Mention local considerations (cost in rand, local hiring, data centers)
- **No fluff**: Every paragraph should add insight or evidence

### Formatting Requirements

- Use **H2** for major sections, **H3** for subsections
- Include **comparison tables** where relevant
- Add **callout boxes** for key insights or warnings
- Use **bullet points** for lists, **numbered** for sequential steps
- Include **code snippets** only where relevant (don't pad with code)

### CTA Placement

1. **In-content**: 2-3 natural contextual links to services
2. **End of article**: Primary CTA with full context
3. **Related services**: Link to relevant service pages

### Meta Requirements

**Article 1**:
- Meta title: Self-Hosted AI vs Cloud APIs: What South African Businesses Need to Know
- Meta description: Comparing self-hosted AI to cloud APIs for South African businesses. Real cost analysis, infrastructure requirements, and when each makes sense.
- Focus keyphrase: Self-hosted AI South Africa

**Article 2**:
- Meta title: Vue 3 vs React for Enterprise SaaS: A Developer's Perspective
- Meta description: Honest comparison of Vue 3 vs React for enterprise SaaS. Based on real projects — ForkMyFolio, Since app, CodeCritical. Which should you choose?
- Focus keyphrase: Vue 3 vs React enterprise

---

## Publishing Checklist

- [ ] Draft in WordPress blog
- [ ] Add featured image (1200x630, WebP)
- [ ] Set focus keyphrase in SEO plugin
- [ ] Add meta title and description
- [ ] Add tags: relevant technology tags
- [ ] Add category: Comparison / Technology
- [ ] Link to related service pages (2-3 internal links minimum)
- [ ] Add to sitemap
- [ ] Social share image generated

---

*Document Version: 1.0*
*Created: May 2026*
*Reference: https://blog.nemesisnet.co.za*