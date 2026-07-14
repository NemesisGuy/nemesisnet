# Security Posture Report: NemesisNet
**Date:** 2026-07-14
**Auditor:** opencode (CSO Mode)
**Status:** PASS (with minor operational recommendations)

## 1. Executive Summary
NemesisNet maintains a high security posture characterized by a minimal attack surface and lean dependency tree. The system is designed as a public-facing portfolio with a very limited set of server-side endpoints, significantly reducing the potential for exploitation.

**Overall Risk Rating: LOW**

---

## 2. Attack Surface Map

### 2.1 Code Surface
| Component | Type | Access | Risk | Mitigation |
|-----------|------|--------|------|------------|
| `/api/chat` | POST | Public | Medium | Rate limiting (20req/min), Origin/Referer check, Input length caps |
| `/api/contact` | POST | Public | Low | Cloudflare Turnstile integration, Resend API validation |
| Static Pages | GET | Public | Very Low | Static prerendering, no server-side logic |

### 2.2 Infrastructure Surface
- **Deployment**: Docker $\rightarrow$ Docker Hub $\rightarrow$ VPS (Portainer)
- **CI/CD**: Woodpecker CI
- **Edge**: Cloudflare Tunnel / DNS
- **Integrations**: Resend (Email), Google AI Studio (LLM), Cloudflare Turnstile (Anti-bot)

---

## 3. Detailed Findings

### 3.1 Secrets & Archaeology
**Finding:** Placeholder secrets in draft content.
- **Location:** `blog-drafts/cs2-wordpress-mcp-automation.md`
- **Detail:** Contains `WORDPRESS_APP_PASSWORD=xxxx...`.
- **Severity:** Low
- **Remediation:** Remove all placeholder credentials from draft files to prevent pattern-matching tools from flagging the repo.

**Finding:** Secret echo in CI pipelines.
- **Location:** `.woodpecker.yml`
- **Detail:** Use of `echo $DOCKER_PASSWORD | docker login` can lead to secrets appearing in logs if masking fails.
- **Severity:** Medium
- **Remediation:** Use `docker login` with a configuration file or ensure Woodpecker's secret masking is strictly enforced.

### 3.2 Supply Chain Audit
**Finding:** Extremely lean dependency tree.
- **Detail:** Only 5 production dependencies. High use of Nuxt 4 (latest).
- **Severity:** N/A (Strength)
- **Observation:** The risk of a "left-pad" style supply chain attack is minimized by the small number of third-party packages.

### 3.3 OWASP Top 10 Analysis
- **A01: Broken Access Control**: Not applicable (no authenticated zones).
- **A03: Injection**: 
  - **LLM Injection**: Mitigated by a strict `SYSTEM_PROMPT` and input slicing.
  - **Command Injection**: No `eval()` or shell-execution paths found in server code.
- **A04: Insecure Design**: Site uses a "security-by-simplicity" approach.
- **A05: Security Misconfiguration**: 
  - Docker images use `node:20-alpine` (minimal surface).
  - Headers are handled by Cloudflare.

---

## 4. STRIDE Threat Model

| Threat | Source | Impact | Mitigation | Status |
|--------|--------|--------|------------|--------|
| **Spoofing** | API Client | Unauthorized chat use | Origin/Referer check + IP Rate limiting | ✅ |
| **Tampering** | API Client | Malicious payloads | Input length limits + LLM safety settings | ✅ |
| **Repudiation**| API Client | Bot spam | Cloudflare Turnstile on contact form | ✅ |
| **Info Leak** | API Client | System prompt leak | Explicit "Non-negotiable" identity rules | ✅ |
| **DoS** | Botnet | Server crash | Token-bucket rate limiting per IP | ✅ |
| **Elevation** | API Client | Admin access | No admin endpoints exist | ✅ |

---

## 5. Remediation Roadmap

### Immediate (P0)
- [x] Scrub `blog-drafts/` for any remaining placeholder credentials.

### Short Term (P1)
- [ ] Review Woodpecker CI logs to ensure `$DOCKER_PASSWORD` is being masked correctly.
- [ ] Consider implementing a more robust API Key rotation policy for `GEMMA_API_KEY`.

### Long Term (P2)
- [ ] Implement a Content Security Policy (CSP) header via Cloudflare to further mitigate XSS.
