# NemesisNet

[![Website](https://img.shields.io/badge/site-nemesisnet.co.za-0a0e27?style=flat&logo=web)](https://nemesisnet.co.za)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

NemesisNet — Software Engineering & AI Solutions

A small, elegant static site showcasing NemesisNet's services, open-source projects, and brand guide. Built with static HTML/CSS and a few lightweight JavaScript helpers. The site includes multiple visual themes (Nemesis / Aurora / Light) and glassmorphic, responsive components.

## Repository layout

```
src/
	index.html                # Main landing page (authoring source)
	nemesis-mode-demo.html    # Visual concept sandbox
	styles/                   # Theme stylesheets
	assets/                   # Brand + project imagery (mirrored + optimized)
	robots.txt, sitemap.xml   # SEO helpers
config/nginx/default.conf   # Container/server configuration
scripts/                    # Utility automation (image optimizer)
docs/                       # Asset inventory and other documentation
Dockerfile                  # Ships the src/ bundle via nginx
```

Why this repo
- Lightweight, privacy-first static site (no build step required).
- Demonstrates theme toggles and glassmorphism style tokens.
- Portfolio and project highlights with deploy/demo links.

Quick demo
- Live: https://nemesisnet.co.za
- Brand guide: https://brand.nemesisnet.co.za

Highlights / Features
- Theme system: `data-theme="light"` + special modes `data-nemesis` and `data-aurora`.
- Glassmorphic UI components (cards, contact form, hero) tuned for light/dark.
- Mobile-friendly navigation with overlay and auto-close behaviors.
- SEO + JSON-LD Organization markup included in the document head.
- Nemesis-on-light mode adds pulsing hero + nav branding and neon button treatments for better contrast.

Files of interest
- `src/index.html` — Main site, includes inline critical CSS and JS helpers.
- `src/styles/nemesis-mode.css` — Nemesis-mode variables and accents.
- `src/styles/aurora-mode.css` — Aurora-mode variables and accents.
- `src/assets/` — Logo, icons, and screenshots used across the page.
- `docs/AI_PROFILE.md` — AI/LLM profile block used across NemesisNet properties.

### Build + preview workflow (Windows / PowerShell)

```powershell
# Serve the authoring source directly
python -m http.server 8000 --directory src
```

Then open http://localhost:8000 in your browser.

### Docker image workflow

```powershell
wsl docker build -t nemesisguy/nemesisnet:latest .


 cd /Projects/NemesisNet; docker build --no-cache -t nemesisnet:latest .; docker tag nemesisnet:latest nemesisguy/nemesisnet:latest; docker push nemesisguy/nemesisnet:latest


```

The container now copies the `src/` tree directly into the nginx image.

### Tests

```powershell
python -m unittest tests.test_structure
```

These structural checks ensure the single-source layout, favicon paths, and Nemesis visual overrides stay intact.

Asset workflow & media hygiene
- Every externally hosted project screenshot now lives under `src/assets/images/projects/<slug>/{original,optimized}`.
- Originals keep their source format; run `python scripts/optimize_assets.py` to regenerate the 72 DPI, max-1600px WebP copies inside each `optimized/` folder plus the brand logo.
- `docs/asset-inventory.md` tracks the source URL, local storage path, and status for each asset so we can audit media drift quickly.

Theme controls & troubleshooting
- Toggle themes with the round buttons in the navbar (Aurora / Nemesis) and the sun/moon theme-button.
- Nemesis is a special mode (high-contrast, cyan/magenta accents). If you use `Nemesis + Light`, the navbar is purposely forced to keep Nemesis styling so the contrast remains correct. If you see white nav backgrounds after toggling, try a full refresh (Ctrl+F5) — the site relies on CSS specificity and `data-*` attributes.

Developer notes
- No build step: edit `index.html` and the CSS files directly.
- Critical CSS is inlined for convenience; longer mode-specific CSS lives in `src/styles/nemesis-mode.css` and `src/styles/aurora-mode.css`.
- JS helpers (in `index.html`) manage theme persistence, mobile menu overlay, and a small typing animation.

Accessibility
- Buttons and nav controls include ARIA attributes and keyboard handlers (chevron, mobile overlay, nav links).
- Images include `alt` text. Consider adding `width` / `height` or `srcset` for improved CLS.

Roadmap & TODO (selected)
- Add preconnect & preload for fonts and hero/logo to improve FCP/LCP.
- Lazy-load project images and add sizes/srcset.
- Defer non-critical JS and preload main CSS.
- Optimize large images to WebP/AVIF.

Contributing
- Fork, change, and submit pull requests. Keep changes focused and create small commits (e.g. `feat: add project card`, `fix: nav theme overlap`).

License
This project is provided under the MIT License. See the LICENSE file for details.

Contact
- Email: hello@nemesisnet.co.za
- GitHub: https://github.com/NemesisGuy

---


