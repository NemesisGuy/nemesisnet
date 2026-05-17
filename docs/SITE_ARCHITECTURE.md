# Site Architecture Documentation

## Overview

This document provides detailed architectural diagrams and documentation for the NemesisNet portfolio site, including navigation flows, link relationships, and ecosystem integration.

## Domain Structure

```mermaid
graph TB
    subgraph "NemesisNet Ecosystem"
        NN[ nemesisnet.co.za ]
        DEV[ dev.nemesisnet.co.za ]
        BLOG[ blog.nemesisnet.co.za ]
        BRAND[ brand.nemesisnet.co.za ]
        SCOPE[ scope.nemesisnet.co.za ]
    end

    subgraph "Project Demos"
        CC[ codecritical.nemesisnet.co.za ]
        SINCE[ since.nemesisnet.co.za ]
        OTGR[ otgr.nemesisnet.co.za ]
        NK[ nkassessments.nemesisnet.co.za ]
        FMF[ forkmyfolio.nemesisnet.co.za ]
    end

    NN --> BLOG
    NN --> BRAND
    NN --> SCOPE
    NN --> CC
    NN --> SINCE
    NN --> OTGR
    NN --> NK
    NN --> FMF
```

## Full Site Navigation Flow

```mermaid
flowchart TD
    subgraph "Homepage"
        H[Home] --> HP[Hero]
        H --> HS[Services]
        H --> HPJ[Projects]
        H --> HT[Testimonials]
        H --> HC[Contact]
    end

    subgraph "Services Branch"
        HS --> SV["/services"]
        SV --> SVCS["Custom Software"]
        SV --> SVSS["SaaS Development"]
        SV --> SVAI["AI Development"]
        SV --> SVSH["Self-Hosted AI"]
        SV --> SVID["Infrastructure"]
        SV --> SVC["Consulting"]
    end

    subgraph "Projects Branch"
        HPJ --> PJ["/projects"]
        PJ --> PJ1["CodeCritical SaaS"]
        PJ --> PJ2[Since]
        PJ --> PJ3[VoxNemesis Supertonic]
        PJ --> PJ4[PocketTTS-MCP]
        PJ --> PJ5[Kokoro TTS]
        PJ --> PJ6[WordPress MCP]
        PJ --> PJ7[Vibe-Type]
        PJ --> PJ8[ForkMyFolio]
        PJ --> PJ9[OnTheGoRentals]
        PJ --> PJ10[NK Assessments]
    end

    subgraph "Legal Branch"
        H --> LG["/legal"]
        LG --> LGP["Privacy"]
        LGT["Terms"]
        LGR["Refund"]
    end
```

## Internal/External Link Relationships

```mermaid
flowchart TB
    subgraph "Internal Navigation"
        HOME["/"] --> SVC["Services"]
        HOME --> PJH["Projects"]
        HOME --> ABT["About"]
        HOME --> CNT["Contact"]
    end

    subgraph "External Outbound"
        SVC --> SCOPE["scope.nemesisnet.co.za"]
        PJH --> DEMO1["codecritical.nemesisnet.co.za"]
        PJH --> DEMO2["since.nemesisnet.co.za"]
        PJH --> DEMO3["forkmyfolio.nemesisnet.co.za"]
        PJH --> DEMO4["otgr.nemesisnet.co.za"]
        PJH --> DEMO5["nkassessments.nemesisnet.co.za"]
        HOME --> BLOG["blog.nemesisnet.co.za"]
        HOME --> BRAND["brand.nemesisnet.co.za"]
        ABT --> GH["github.com/NemesisGuy"]
        ABT --> LI["linkedin.com/in/peter-buckingham"]
        CNT --> EMAIL["admin@nemesisnet.co.za"]
    end
```

## CTA Routing Paths

```mermaid
flowchart LR
    subgraph "Primary CTAs"
        C1["See Our Work"] --> /projects
        C2["Scope Your Project"] --> https://scope.nemesisnet.co.za
        C3["View Services & Pricing"] --> /services
    end

    subgraph "Service CTAs"
        C4["Learn More - Custom Software"] --> /services/custom-software
        C5["Learn More - SaaS Development"] --> /services/saas-development
        C6["Learn More - AI Development"] --> /services/ai-development
        C7["Learn More - Self-Hosted AI"] --> /services/self-hosted-ai
        C8["Learn More - Infrastructure"] --> /services/infrastructure
        C9["Learn More - Consulting"] --> /services/consulting
    end

    subgraph "Project CTAs"
        P1["Live Demo - CodeCritical"] --> https://codecritical.nemesisnet.co.za
        P2["Live Demo - Since"] --> https://since.nemesisnet.co.za
        P3["Live Demo - ForkMyFolio"] --> https://forkmyfolio.nemesisnet.co.za
        P4["Live Demo - OnTheGoRentals"] --> https://otgr.nemesisnet.co.za
    end
```

## Blog Integration Flow

```mermaid
flowchart TB
    subgraph "Blog Ecosystem"
        BLOG[blog.nemesisnet.co.za]
        BG[Blog Home]
        BP[Blog Posts]
        BC[Categories]
        BT[Tags]
        BA[Archives]
    end

    subgraph "Integration Points"
        HOME --> BLOG
        FOOTER[Footer Links] --> BLOG
        POST[Blog Articles] --> PRJ[Project Links]
    end
```

## Contact Funnel

```mermaid
flowchart LR
    subgraph "Contact Entry Points"
        C1[Homepage Contact Form]
        C2[Footer Email Link]
        C3[External Scope Form]
    end

    subgraph "Form Submission"
        C1 --> POST["/api/contact"]
        POST --> RESEND["Resend API"]
        POST --> Cloudflare["Cloudflare Turnstile"]
    end

    subgraph "Response"
        RESEND --> EMAIL["admin@nemesisnet.co.za"]
        POST --> SUCCESS["Thank You Page"]
    end
```

## Mobile Navigation Structure

```mermaid
flowchart TB
    subgraph "Mobile Nav"
        HAM["Hamburger Menu"]
        DROP["Dropdown Nav"]
    end

    subgraph "Mobile Pages"
        DROP --> HOME_M["/"]
        DROP --> SVC_M["/services"]
        DROP --> PJ_M["/projects"]
        DROP --> ABT_M["/about"]
        DROP --> TST_M["#testimonials"]
        DROP --> CNT_M["#contact"]
    end
```

## User Journey Maps

### Landing to Project Demo Journey

```mermaid
flowchart TD
    A[Landing on Home] --> B[View Featured Projects]
    B --> C[Click Project Detail]
    C --> D[Read Project Description]
    D --> E[Click Live Demo]
    E --> F[External Demo Site]
```

### Landing to Contact Journey

```mermaid
flowchart TD
    A[Landing on Home] --> B[Scroll to Services]
    B --> C[Click Service Detail]
    C --> D[View Pricing]
    D --> E[Click Contact Form]
    E --> F[Fill Form]
    F --> G[Submit]
    G --> H[Confirmation]
```

### Landing to Blog Journey

```mermaid
flowchart TD
    A[Landing on Home] --> B[Click Blog Link in Nav]
    B --> C[Blog Homepage]
    C --> D[Browse Articles]
    D --> E[Read Article]
    E --> F[View Related Projects]
```

## Deployment Architecture

```mermaid
flowchart TB
    subgraph "Development"
        DEV[Dev Branch]
        GITHUB[GitHub]
    end

    subgraph "CI/CD"
        WP[Woodpecker CI]
        BUILD[Build & Test]
        LH[Lighthouse Audit]
        DOCKER[Docker Build & Push]
    end

    subgraph "Production"
        DH[Docker Hub]
        PORT[Portainer]
        NGINX[Nginx Reverse Proxy]
        PROD[Production Server]
    end

    DEV --> GITHUB
    GITHUB --> WP
    WP --> BUILD
    BUILD --> LH
    LH --> DOCKER
    DOCKER --> DH
    DH --> PORT
    PORT --> PROD
```

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Nuxt | 4.4.4 |
| Runtime | Node.js | 22 |
| Styling | Custom CSS | - |
| Deployment | Docker + nginx | 1.27-alpine |
| CI/CD | Woodpecker | - |
| Contact | Resend + Turnstile | - |
| Hosting | Self-hosted VPS | - |

## Performance Budgets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 2s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |
| Speed Index | < 3s |
| Time to Interactive | < 3.5s |

## Security Configuration

- CSP headers via Nitro config
- Cloudflare Turnstile on contact form
- Resend for email delivery
- No sensitive data in client bundle