# NemesisNet Refactor Plan (Final Refined)
*Incorporates all feedback: 90% original plan + 10% practical tweaks + final 5% adjustments. "Composable static system with explicit boundaries" — no framework overhead, fully under control.*

---

## Overview
Shift from monolithic single-page site to a **composable static system with explicit boundaries**: streamlined hybrid landing page + dedicated sub-pages, Python-based template partial composition, clean `/src` (source) → `/dist` (built output) separation. Preserves conversion-critical landing content, eliminates bloat, and avoids overengineering.

---

## Key Adjustments (15% Total Practical Tweaks)
### Original 10% Adjustments
1. Conservative page splits: [Mandatory] `/projects`, `/legal`; [Optional] `/services`, `/pricing` (keep summaries on landing)
2. Exclusive Option A (Python build script) — no JS dynamic partial loading
3. Use `src/partials/` for reusable components, include shared `nav.html` and `footer.html`
4. Mandatory Phase 1.5: Content trimming audit before coding
5. "Featured vs Full" project pattern, hybrid anchor + page navigation

### Final 5% Adjustments (New)
6. **Explicit build script contract**: Use `{{key}}` placeholder injection (no vague concatenation)
7. **Clean source/output separation**: `/src` = source (partials, templates); `/dist` = built output (deploy this, update Dockerfile to copy `/dist` instead of `/src`)
8. **Navigation consistency rules**: Explicit anchor + page link mapping to avoid broken links/scroll issues
9. **"View All Projects →" CTA**: Add under featured projects on landing to close UX loop
10. **Legal page split**: `/pages/legal/` subdirectory with separate `refund.html`, `terms.html`, `privacy.html`
11. **Anti-overengineering rule**: No templating engines, extra config layers, or unnecessary abstractions

---

## Phase 1: Architectural Restructure
### 1.1 Landing Page Scope (Keep High-Conversion Content)
Retain only these sections in `src/index.template.html` (template, not final built file):
- Hero (typing animation)
- Core services (3-4 short summaries) $\rightarrow$ Link to `/services`
- Featured projects (3-4 top items) $\rightarrow$ Link to `/projects`
- Testimonials (short, 2-3 items)
- CTA
- **"View All Projects →" button** linking to `/pages/projects.html`

### 1.2 Dedicated Sub-Pages (Create in `src/pages/`)
| Page | Status | Content |
|------|--------|---------|
| `projects.html` | [Mandatory] | **Portfolio Directory**: High-level grid of all projects |
| `projects/[project].html` | [Mandatory] | **Case Studies**: Deep dives for each project (Challenge, Solution, Stack, Results) |
| `services.html` | [Mandatory] | **Services Overview**: Summary of offerings and engagement models |
| `services/[service].html` | [Mandatory] | **Service Details**: Deep dives into specific offerings (Capabilities, Tiers, Pricing) |
| `legal/` | [Mandatory] | Subdirectory with `refund.html`, `terms.html`, `privacy.html` |
| `pricing.html` | [Optional] | Full pricing breakdown |

### 1.3 Hybrid Navigation (Explicit Consistency Rules)
Define link mapping upfront to avoid broken scrolls/links:
| Context | Services Link | Projects Link |
|---------|---------------|---------------|
| Landing page nav | `/#services` | `/#projects` |
| Sub-pages nav | `/services` | `/projects` |

Reuse same `nav.html` partial across landing and all sub-pages.

---

## Phase 1.5: Content Trimming (Do Before Coding)
1. Audit `src/index.html` (3267 lines) to explicitly mark:
   - What stays on landing (above sections)
   - What moves to sub-pages
   - What gets cut/deleted (redundant content)
2. Validate landing still has: credibility, clarity, conversion flow
3. No code changes until this audit is complete

---

## Phase 2: Modular Partials + Python Build
### 2.1 Folder Structure
```
src/                          # Source (never deployed directly)
  index.template.html         # Landing page template with {{placeholders}}
  /pages/                     # Sub-page templates
    projects.html             # Portfolio Directory
    /projects/                # Project Case Studies (e.g., wordpress-mcp.html)
    services.html             # Services Overview
    /services/                # Service Detail Pages (e.g., custom-software.html)
    legal/
      refund.html
      terms.html
      privacy.html
    pricing.html (optional)
  /partials/                  # Reusable static partials
    nav.html                  # Shared navbar
    footer.html               # Shared footer
    hero.html
    core-services.html
    featured-projects.html
    testimonials.html
    cta.html
  /styles/                    # Extracted CSS
  /scripts/                   # Extracted JS
  /assets/                    # Existing images/media (copied to /dist)

dist/                         # Built output (deploy this, Docker copies this)
  index.html                  # Composed landing page
  /pages/                     # Built sub-pages
  /styles/
  /scripts/
  /assets/
```

### 2.2 Python Build Script (`scripts/build.py`)
Use explicit `{{key}}` placeholder injection (no vague concatenation):
```python
def load_partial(name):
    with open(f"src/partials/{name}.html") as f:
        return f.read()

# Build landing page
template = open("src/index.template.html").read()
for key in ["nav", "hero", "core-services", "featured-projects", "testimonials", "cta", "footer"]:
    template = template.replace(f"{{{{{key}}}}}", load_partial(key))
with open("dist/index.html", "w") as f:
    f.write(template)

# Build sub-pages (inject shared nav/footer)
# Repeat similar logic for each sub-page, replacing {{nav}} and {{footer}} placeholders
```

- Zero runtime overhead, fully static output
- Aligns with existing Python tooling
- Run command: `python scripts/build.py` (update README workflow)
- **Update Dockerfile** to copy `/dist/` to nginx html directory instead of `/src/`

---

## Phase 3: Performance Optimizations
1. **Asset Extraction**
   - Move non-critical inline CSS (lines 147-~2000) to `src/styles/main.css`
   - Keep only above-fold hero CSS inline in `src/partials/hero.html` for FCP
   - Move inline JS (lines ~2500-3263) to `src/scripts/main.js`, load with `defer`
2. **Image & Resource Optimizations**
   - Add `preconnect` for `fonts.gstatic.com`, Cloudflare, metrics subdomain
   - Add `loading="lazy"` to all below-fold images
   - Add `srcset`/`sizes` to project images using existing optimized WebPs
   - Add explicit `width`/`height` to all images to fix CLS
3. **Code Cleanup**
   - Consolidate CSS variables, audit unused rules with PurgeCSS
   - Refactor JS into modular functions, add JSDoc/error handling

---

## Phase 4: Quality & DX
1. **Expand Test Suite** (`tests/test_structure.py`):
   - Verify `/dist` output exists, sub-pages present
   - Validate nav links follow consistency rules (Phase 1.3)
   - Check image `alt`, `loading="lazy"`, `srcset` attributes
   - Confirm shared `nav.html`/`footer.html` injected into all pages
   - Verify "View All Projects" button links to `/pages/projects.html`
   - Confirm legal pages split into `/pages/legal/` subdirectory
2. **Tooling (Optional)**:
   - Add `htmlhint`, `stylelint`, `eslint` linters
   - Pre-commit hooks for tests/linters
3. **Asset Upgrades**:
   - Extend `scripts/optimize_assets.py` to generate AVIF images
   - Audit/remove unused assets

---

## Success Criteria
- **Content Parity**: 100% of original technical depth preserved and mapped to detail pages
- `/src` contains only source templates/partials; `/dist` contains built deployable files
- `dist/index.html` reduced from ~3267 to <500 lines
- All README roadmap items (preconnect, lazy load, srcset, CLS fixes) implemented
- `/projects` and `/legal` fully separated from landing; legal split into subdirectory
- Featured projects (3-4) on landing with "View All Projects →" button
- Hybrid navigation follows explicit consistency rules, no broken links
- Shared nav/footer partials reused across all pages
- Build script uses explicit `{{key}}` placeholder injection
- Dockerfile updated to copy `/dist/` to nginx html directory instead of `/src/`
- Lighthouse 90+ for performance, accessibility, SEO
- All tests pass


---

## Mindset Check (Do Not Skip)
- Do **NOT** turn this into a mini framework engineering project
- No templating engines (Jinja2, etc.), no extra config layers, no unnecessary abstractions
- Keep it: *Composable static system with explicit boundaries*
- Preserve your advantage: speed, control, zero framework overhead
- Static site with components, no Nuxt/React/Vue overhead
