# NemesisNet — Audit Tracker

> Living document. Update the **Status** column and **Last verified** date as issues are fixed.
> Status legend: ✅ Pass · ⚠️ Open (needs work) · 🔍 To verify

**Last verified:** 2026-08-13
**Scope:** Link health (GSC dead links / redirects), SEO, Accessibility, Performance, Crawl
**Method:** Repo-wide grep + live HTTP checks of every external URL via `curl` (GET, 20s timeout).

---

## Scorecard

| Dimension | Status | Notes |
|---|---|---|
| External link health | ✅ Pass | 31/31 URLs return `200`, no redirects |
| Internal link health | ✅ Pass | All `/projects/*` + `/services/*` slugs resolve |
| Redirect hygiene | ✅ Pass | No internal links hit the 5 `nuxt.config` 301s |
| `useHead` SEO coverage | ✅ Pass | Present on all 39 page files |
| Footer headings | ✅ Pass | Use `<strong class="footer-heading">` (no `<h4>`) |
| `rel="noopener noreferrer"` on external links | ✅ Pass | Added to all 83 external `target="_blank"` anchors (2026-08-13, F7) |
| `aria-label="…(opens in new tab)"` on external links | ✅ Pass | Added to all 83 external `target="_blank"` anchors (2026-08-13, F7) |
| Heading hierarchy (h1→h2→h3) per page | 🔍 To verify | Detail pages use h3/h4 subheads — confirm no skips |
| Meta description ≤155 / title ≤60 per page | 🔍 To verify | `useHead` present; need per-page length check |
| JSON-LD on service pages | 🔍 To verify | Need per-page confirm |
| Image perf (WebP, hero ≤100KB, srcset) | 🔍 To verify | Needs Lighthouse / file-size pass |

---

## 1. Link Health

### 1.1 External links — verified 2026-08-13 (all `200`)

**Live demos / client sites**
- `https://codecritical.nemesisnet.co.za`
- `https://kokoro-gui.nemesisnet.co.za`
- `https://forkmyfolio.nemesisnet.co.za` · `https://forkmyfolio.nemesisnet.co.za/nemesis`
- `https://since.nemesisnet.co.za`
- `https://torquebooks.nemesisnet.co.za`
- `https://otgr.nemesisnet.co.za`  ← OnTheGoRentals live demo (correct subdomain; `onthego.nemesisnet.co.za` is dead/unused)
- `https://nkassessments.nemesisnet.co.za`
- `https://boredroomcafe.nemesisnet.co.za`
- `https://scope.nemesisnet.co.za`

**Blog posts**
- `https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/`
- `https://blog.nemesisnet.co.za/self-hosted-tts-with-kokoro-onnx-what-cpu-only-inference-actually-gets-you/`
- `https://blog.nemesisnet.co.za/forkmyfolio-backend-designing-a-modern-multi-user-portfolio-platform-in-spring-boot/`
- `https://blog.nemesisnet.co.za/building-since-self-hosted-claim-tracker-pocketbase-react-express/`
- `https://blog.nemesisnet.co.za/torquebooks-building-a-workshop-management-system-for-south-african-auto-shops/`
- `https://blog.nemesisnet.co.za/onthegorentals-a-dev-diary-building-a-production-ready-rental-saas/`
- `https://blog.nemesisnet.co.za/codecritical-beta-release-know-if-your-code-is-ready-to-ship/`
- `https://blog.nemesisnet.co.za/vue-3-vs-react-for-enterprise-saas/`
- `https://blog.nemesisnet.co.za/self-hosted-ci-cd-on-a-home-rack-github-gitea-woodpecker-and-portainer/`
- `https://blog.nemesisnet.co.za/welcome-to-nemesisnet-why-i-started-this-blog/`
- `https://blog.nemesisnet.co.za/nemesisnet-overview/`
- `https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server/`  ← trailing slash added (was `301`)
- `https://blog.nemesisnet.co.za/theme-demo/`
- `https://blog.nemesisnet.co.za/bringing-gpu-support-to-neutts-air-a-dev-diary/`
- `https://blog.nemesisnet.co.za/self-hosted-ai-vs-cloud-apis-what-south-african-businesses-need-to-know/`
- `https://blog.nemesisnet.co.za/inside-the-nemesisnet-homelab-my-personal-data-center/`
- `https://blog.nemesisnet.co.za/from-rebuilding-authentication-in-every-app-to-a-shared-identity-layer/`
- `https://blog.nemesisnet.co.za` (blog index)

**Other**
- `https://brand.nemesisnet.co.za` · `https://github.com/NemesisGuy` · `https://linkedin.com/in/peter-buckingham-65438757`

> Dead subdomains `vox.nemesisnet.co.za` and `dmi.nemesisnet.co.za` were confirmed **not referenced anywhere** in the codebase (grep: zero matches), so they do not affect crawl even though the hosts are down.

### 1.2 Internal links — ✅ Pass
- `to="/projects/*"` (59 refs) and `to="/services/*"` (84 refs) all resolve to real `.vue` pages (glob-verified).
- No internal links point to the 5 `nuxt.config.ts` 301 redirects (`/blog`, `/feed`, `/sitemap`, `/projects/light-hosting`, `/projects/managed-retainer`).

### 1.3 Fixes applied this session
| # | Issue | Fix | File(s) |
|---|---|---|---|
| F1 | TorqueBooks / Kokoro / OntheGo / ForkMyFolio / Since had no Blog button | Added `Blog` to canonical order `Details → Live Demo → Blog → Source` | `pages/projects/index.vue` |
| F2 | WordPress MCP blog link redirected (`301`, missing trailing slash) on detail page | Added trailing slash | `pages/projects/wordpress-mcp.vue:64` |
| F3 | VoxNemesis "Live Demo" → dead `vox.nemesisnet.co.za` | Replaced with verified blog post | `pages/index.vue` |
| F4 | WordPress Theme card mislabeled "Live Demo" (pointed at blog) | Relabeled "Blog" | `pages/projects/index.vue` |
| F5 | Homepage featured cards: wrong cross-links (CodeCritical→OnTheGo, VoxNemesis→DMI), "Detail" label, mixed classes | Corrected links, "Details" label, `btn-glass` class | `pages/index.vue` |
| F6 | `dmi.nemesisnet.co.za` / `onthego.nemesisnet.co.za` references | Confirmed absent (OnTheGo already uses `otgr`) | — |
| F7 | B1 — external links missing `rel="noopener noreferrer"` + `aria-label` | Added to **83** external `target="_blank"` anchors across 23 files via script | see table below |

**F7 — anchors fixed per file (2026-08-13)**

| File | Anchors fixed |
|---|---|
| pages/about.vue | 3 |
| pages/index.vue | 12 |
| pages/projects/bored-room-cafe.vue | 2 |
| pages/projects/codecritical-cli.vue | 1 |
| pages/projects/codecritical-saas.vue | 2 |
| pages/projects/forkmyfolio.vue | 3 |
| pages/projects/index.vue | 30 |
| pages/projects/kokoro-tts.vue | 3 |
| pages/projects/nemesisnet-wordpress-theme.vue | 2 |
| pages/projects/nk-assessments.vue | 2 |
| pages/projects/onthegorentals.vue | 2 |
| pages/projects/pockettts-mcp.vue | 2 |
| pages/projects/since.vue | 2 |
| pages/projects/torquebooks.vue | 1 |
| pages/projects/vibetype.vue | 2 |
| pages/projects/voxnemesis-supertonic.vue | 2 |
| pages/projects/wordpress-mcp.vue | 2 |
| pages/services/ai-development.vue | 1 |
| pages/services/infrastructure.vue | 2 |
| pages/services/saas-development.vue | 1 |
| pages/services/self-hosted-ai.vue | 1 |
| pages/software-development-cost-south-africa.vue | 1 |
| components/AppFooter.vue | 4 |
| **Total** | **83** |

> Excluded (already compliant or dynamic): `components/AppHeader.vue`, `components/ServiceFooter.vue`, `components/ChatWidget.vue`.

---

## 2. SEO

| Check | Status | Notes |
|---|---|---|
| `useHead` on every page | ✅ Pass | 39/39 page files |
| Canonical URL set | 🔍 To verify | Present on main pages; confirm on all |
| Single `<h1>` per page | 🔍 To verify | |
| Title ≤60 chars | 🔍 To verify | |
| Meta description ≤155 chars | 🔍 To verify | |
| `twitter:*` + `og:*` tags | 🔍 To verify | AGENTS.md requires full set per page |
| JSON-LD on service pages | 🔍 To verify | |
| Sitemap coverage | ✅ Pass | `server/routes/sitemap.xml.ts` lists only `PRERENDER_ROUTES` (40 valid routes) |

---

## 3. Accessibility — ⚠️ Open

| Check | Status | Notes / Locations |
|---|---|---|
| Skip link | ✅ Pass | In `layouts/default.vue` |
| `:focus-visible` outline | ✅ Pass | In `main.css` |
| `prefers-reduced-motion` | ✅ Pass | In `main.css` |
| Footer headings use `<strong class="footer-heading">` | ✅ Pass | No `<h4>` in footers (grep-verified) |
| External links have `rel="noopener noreferrer"` | ✅ Pass | Added to all 83 external `target="_blank"` anchors 2026-08-13 (F7) |
| External links have `aria-label="…(opens in new tab)"` | ✅ Pass | Added to all 83 external `target="_blank"` anchors 2026-08-13 (F7) |
| Images have `alt` + `loading="lazy"` | 🔍 To verify | Project listing uses both; confirm detail pages |
| Form feedback `role="status"`/`role="alert"` | 🔍 To verify | Chat + contact forms |
| No `<NuxtLink>` nested in `<NuxtLink>` | 🔍 To verify | |
| Heading hierarchy h1→h2→h3 (no skips) | 🔍 To verify | Detail pages use h3/h4 section heads under h1 |

**Done 2026-08-13 (F7):** `rel="noopener noreferrer"` + `aria-label="… (opens in new tab)"` added to all 83 external `target="_blank"` anchors project-wide via script.

---

## 4. Performance — 🔍 To verify

| Check | Status | Notes |
|---|---|---|
| Hero images ≤100KB (main), ≤30KB (640), ≤20KB (480) | 🔍 To verify | Run ImageMagick size pass |
| WebP format everywhere | 🔍 To verify | |
| Responsive `srcset` on listing cards | ✅ Pass | Present on `/projects` cards |
| CSS cache-busting (`?v=YYYYMMDD`) | 🔍 To verify | |
| No duplicate CSS rules | 🔍 To verify | `main.css` is 2,708 lines (known tech debt) |
| Turnstile deferred on contact | ✅ Pass | Per AGENTS.md |

---

## 5. GSC / Crawl Notes

- **No dead links** and **no internal redirects** as of 2026-08-13 → the GSC "dead links / redirects" warnings should clear once the old crawled URLs (which pointed at wrong projects / dead `vox`/`dmi` hosts) drop from the index.
- Defensive 301s in `nuxt.config.ts` (`/blog`, `/feed`, `/sitemap`, `/projects/light-hosting`, `/projects/managed-retainer`) are **not** linked internally, so they won't be re-crawled as errors.
- `robots.txt` allows all and references `/sitemap.xml` (clean).

---

## 6. Backlog (tracking)

| ID | Issue | Priority | Status | Owner/Notes |
|---|---|---|---|---|
| B1 | Add `rel="noopener noreferrer"` + `aria-label` to all external links | High | ✅ Fixed | 83 anchors across 23 files (F7) |
| B2 | Per-page SEO length check (title ≤60, desc ≤155) | Med | 🔍 To verify | |
| B3 | Per-page heading hierarchy audit | Med | 🔍 To verify | Detail pages |
| B4 | Per-page JSON-LD confirm (service pages) | Med | 🔍 To verify | |
| B5 | Image size/WebP pass (Lighthouse) | Med | 🔍 To verify | |
| B6 | Split `main.css` (2,708 lines) | Low | ⚠️ Open | Tech debt from July audit |
| B7 | Re-run GSC crawl after deploy to confirm warnings cleared | High | 🔍 To verify | Post-deploy |
