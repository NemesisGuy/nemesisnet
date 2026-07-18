# Agent Instructions for NemesisNet

## CRITICAL: Git Remote & Branch

- **Current branch**: `dev` (push here to trigger CI)
- **Remote**: `origin` (GitHub: `https://github.com/NemesisGuy/nemesisnet.git`)
- **CI triggers on push to `dev` or `master`**
- **Deploy command**: `git push origin dev`

```bash
# Quick deploy:
git add -A && git commit -m "your message" && git push origin dev
```

## CRITICAL: Docker Commands Must Run in WSL

**Docker is NOT available in the Windows PowerShell environment.** All Docker commands MUST be executed inside WSL.

### How to run Docker commands:

```bash
wsl docker build --no-cache -t nemesisguy/nemesisnet:dev .
wsl docker push nemesisguy/nemesisnet:dev
wsl docker ps
wsl docker images
```

### Full deploy workflow:

```bash
# 1. Build the Nuxt app (runs in Windows/PowerShell)
npm run build

# 2. Build Docker image (MUST run in WSL)
wsl docker build --no-cache -t nemesisguy/nemesisnet:dev .

# 3. Push to Docker Hub (MUST run in WSL)
wsl docker push nemesisguy/nemesisnet:dev
```

### Server-side commands (run on the VPS, not locally):
```bash
docker pull nemesisguy/nemesisnet:dev
docker stop nemesisnet && docker rm nemesisnet
docker run -d --name nemesisnet -p 80:3000 nemesisguy/nemesisnet:dev
```

## Project Structure

- **Framework**: Nuxt 4 (SSR + static prerendering)
- **Output**: `.output/` directory served by Node.js (Nitro SSR server)
- **Dockerfile**: Uses `node:20-alpine` with Nitro SSR server
- **Docker Hub**: `nemesisguy/nemesisnet:dev`

## Common Mistakes to Avoid

1. **Never run `docker` directly in PowerShell** - it will fail. Always prefix with `wsl`.
2. **Always run `npm run build` before `docker build`** - the Dockerfile copies `.output/` which must exist.
3. **Always use `--no-cache` for Docker builds** - ensures fresh static assets are included.

## Image Optimization (ImageMagick in WSL)

All hero images must be optimized for performance. Large images cause poor Lighthouse scores.

### Quick Optimize Single Project

```bash
# Optimize a project's hero images
./optimize-images.sh <project-folder>
# Example:
./optimize-images.sh codecritical-saas
./optimize-images.sh voxnemesis-supertonic
```

### Manual ImageMagick Commands

```bash
# Check image dimensions
wsl identify /mnt/c/Users/Reign/Projects/NemesisNet/public/images/projects/<project>/original/hero.png

# Create optimized WebP with progressive loading
wsl convert <input.png> -resize 1200x1200\> -quality 80 -interlace Plane <output.webp>

# Create responsive variants (640px and 480px)
wsl convert <input.png> -resize 640x640\> -quality 75 -interlace Plane <output-640.webp>
wsl convert <input.png> -resize 480x480\> -quality 70 -interlace Plane <output-480.webp>
```

### Image Requirements

- **Format**: WebP (primary), PNG (fallback)
- **Max dimensions**: 1200x1200 for main hero
- **Quality**: 80% for main, 75% for 640px, 70% for 480px
- **Progressive**: Always use `-interlace Plane` for progressive loading
- **Responsive**: Always create 640px and 480px variants for lazy loading
- **Target sizes**: Main < 100KB, 640 < 30KB, 480 < 20KB

### Before/After Example

```bash
# CodeCritical SaaS hero was 814KB → now 56KB (93% reduction)
# Original: 1860x2024px PNG (814KB)
# Optimized: 1200x1300px WebP (56KB) + 640px (24KB) + 480px (15KB)
```

## Lighthouse Auditing

Run site-wide Lighthouse audits to check performance:

```bash
# Single page audit
node lighthouse-audit.js

# Full site audit (all 35 routes: 14 projects, 16 services, about/contact/legal/guide)
node lighthouse-full-audit.js
```

Target scores: Performance >90, Accessibility >90, Best Practices >90, SEO >90

---

## New Page Checklist

Every new page MUST include the following. Failure to include any item will cause audit failures.

### Required `useHead` Meta Tags

```js
useHead({
  title: 'Page Title | NemesisNet',
  meta: [
    { name: 'description', content: '≤155 char description with keywords' },
    { property: 'og:title', content: 'Page Title | NemesisNet' },
    { property: 'og:description', content: '≤155 char description' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/page-path' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Page Title | NemesisNet' },
    { name: 'twitter:description', content: '≤155 char description' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/page-path' }
  ]
})
```

**For project pages**, use the project's hero image for `og:image` and `twitter:image`:
```js
{ property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/<project-slug>/optimized/hero.webp' },
{ name: 'twitter:image', content: 'https://nemesisnet.co.za/images/projects/<project-slug>/optimized/hero.webp' }
```

### Required JSON-LD (Service Pages)

```js
useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Service Name',
      provider: { '@type': 'Organization', name: 'NemesisNet' },
      areaServed: { '@type': 'Country', name: 'South Africa' },
      offers: { '@type': 'Offer', priceCurrency: 'ZAR', price: '7000' }
    })
  }]
})
```

### Required Image Setup

Every project page needs responsive hero images:

1. **Main hero**: `optimized/hero.webp` (1200px wide, ≤100KB)
2. **640px variant**: `optimized/hero-640.webp` (≤30KB)
3. **480px variant**: `optimized/hero-480.webp` (≤20KB)
4. **srcset on listing page** (pages/projects/index.vue):
   ```html
   <img src="/images/projects/<slug>/optimized/hero.webp"
        srcset="/images/projects/<slug>/optimized/hero-480.webp 480w, /images/projects/<slug>/optimized/hero-640.webp 640w, /images/projects/<slug>/optimized/hero.webp 800w"
        sizes="(max-width: 640px) 480px, 280px"
        alt="Project Name" loading="lazy" width="900" height="615">
   ```

### Required CSS Patterns

- **Max width**: All page containers use `max-width: 1280px`
- **Card alignment**: Use `margin-top: auto` on card buttons to push them to bottom
- **No nested NuxtLinks**: Use `<span class="btn-glass">` inside `<NuxtLink>` card wrappers
- **Theme support**: Cards need styles for both dark and light themes using CSS variables
- **Nemesis light mode**: Add overrides for `html[data-theme="light"][data-nemesis="on"]` if the page has custom card styles

### Required Accessibility

- **Skip link**: Already in `layouts/default.vue` — do not remove
- **Focus-visible**: Already in `main.css` — do not override with `outline: none`
- **Reduced motion**: Already in `main.css` — do not add animations without respecting it
- **Form ARIA**: All form feedback needs `role="status"` (success) and `role="alert"` (error)
- **External links**: All `target="_blank"` links need `rel="noopener noreferrer"` and `aria-label="... (opens in new tab)"`
- **Footer headings**: Use `<strong class="footer-heading">` not `<h4>` or `<h3>`
- **Lucide icons**: Use `<ClientOnly><IconName :size="20" /></ClientOnly>` in templates

---

## Audit Verification Checklist

Before shipping, verify these items (they cause audit failures every time):

### SEO
- [ ] Every page has `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Every page has `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Meta descriptions ≤155 characters
- [ ] Title tags ≤60 characters
- [ ] Single `<h1>` per page
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)
- [ ] JSON-LD renders in SSR (check `.output/public/index.html`)
- [ ] Canonical URL set on every page
- [ ] `/contact` in sitemap (`config/prerender-routes.ts`)

### Accessibility
- [ ] Skip link present and functional
- [ ] `:focus-visible` outlines visible on all interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] Footer headings use `<strong>` not `<h4>`
- [ ] Form messages have `role="status"` / `role="alert"`
- [ ] External links have `aria-label` with "(opens in new tab)"
- [ ] Mobile nav: Escape closes, first link gets focus, body scroll locked
- [ ] All images have `alt` text
- [ ] All images use `loading="lazy"` (except above-fold hero)

### Performance
- [ ] Hero images ≤100KB (main), ≤30KB (640px), ≤20KB (480px)
- [ ] WebP format for all images
- [ ] Responsive srcset on project listing cards
- [ ] No duplicate CSS rules
- [ ] CSS files use `?v=YYYYMMDD` cache-busting
- [ ] Turnstile deferred on contact page (loads on form interaction)

### Links & Navigation
- [ ] No broken internal links
- [ ] No broken external links
- [ ] No hydration errors in console
- [ ] No `<NuxtLink>` nested inside `<NuxtLink>`

---

## Common Audit Issues (Historical)

These issues have been found and fixed in past audits. Watch for regressions:

1. **Twitter Card tags missing** — Every page needs `twitter:title`, `twitter:description`, `twitter:image` in `useHead`
2. **JSON-LD empty** — `useHead({ script: [{ children: JSON.stringify(...) }] })` renders correctly in SSR
3. **Hero image distortion** — Add `object-fit: cover; width: 100%; height: auto;` to `.project-hero img`
4. **Card text underline** — NuxtLink-wrapped cards need `* { text-decoration: none !important; }` in card CSS
5. **Nemesis light mode broken** — Full CSS override block needed for `html[data-theme="light"][data-nemesis="on"]`
6. **Blog gradient missing from dark mode** — Use layered radial glows, not flat linear-gradient
7. **Services page btn--ignite underline** — Add `text-decoration: none; display: inline-block;` to `.btn--ignite`
8. **Footer h4 headings** — WCAG violation; use `<strong class="footer-heading">` instead
9. **Missing /contact in sitemap** — Must be in `config/prerender-routes.ts`
10. **Dev site indexed** — Triple protection: `NUXT_PUBLIC_NO_INDEX=true`, robots Disallow, no-store cache

---

## Project Audit (July 2026)

### Score: 8/10 — Production-ready

### Completed Fixes
- [x] Chat history increased from 1 to 10 turns (`chat.post.ts:190`)
- [x] `.env.example` created with all required vars (force-tracked past gitignore)
- [x] About page: "Nuxt 3" → "Nuxt 4" (`about.vue:125`)
- [x] `twitter:site` unified to `@NemesisGuy` (was `@NemesisNet` in nuxt.config)
- [x] XSS sanitizer added to ChatWidget `formatMessage()` — strips `<script>`, `<iframe>`, `on*` events
- [x] Pre-check regex guardrails for porn/gambling (catches before API call)

### Remaining Tech Debt
1. **`main.css` is 2,708 lines** — Split into nav, cards, footer, tokens, responsive
2. **Unscoped `<style>` in `about.vue` and `services/index.vue`** — Convert to `<style scoped>`
3. **No error monitoring** — Add Sentry free tier or similar
4. **API keys in `.env`** — Rotate: `GEMMA_API_KEY`, `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`
5. **Chat API key in URL query string** — Google API pattern, can't avoid, but ensure server logs aren't public
6. **No streaming** — Bot waits for full response (3-5s dead air). Consider streaming tokens.
7. **Rate limiter is in-memory** — Resets on restart, single-instance only (fine for current setup)

### Architecture Notes
- Knowledge base: `server/data/nemesis-knowledge.json` (loaded at startup, injected into system prompt)
- Bot: `server/api/chat.post.ts` (Gemma 4 31B IT via Google AI Studio)
- Guardrails: regex pre-check → API safety settings → system prompt hard limits
- Deploy: Woodpecker CI → Docker Hub → Portainer API (dev + prod tracks)
- Themes: dark/light + aurora/nemesis via CSS variables and data attributes
