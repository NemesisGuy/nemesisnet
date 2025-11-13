# NemesisNet

[![Website](https://img.shields.io/badge/site-nemesisnet.co.za-0a0e27?style=flat&logo=web)](https://nemesisnet.co.za)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

NemesisNet — Software Engineering & AI Solutions

A small, elegant static site showcasing NemesisNet's services, open-source projects, and brand guide. Built with static HTML/CSS and a few lightweight JavaScript helpers. The site includes multiple visual themes (Nemesis / Aurora / Light) and glassmorphic, responsive components.

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

Files of interest
- `index.html` — Main site, includes inline critical CSS and JS helpers.
- `nemesis-mode.css` — Nemesis-mode variables and accents.
- `aurora-mode.css` — Aurora-mode variables and accents.
- `assets/` — Logo, icons, and screenshots used across the page.

Local preview (Windows / PowerShell)
1. Open a PowerShell terminal in the repo root (where `index.html` lives).
2. Start a tiny static server (Python is the easiest):

```powershell
# If you have Python 3 installed
py -3 -m http.server 8000
# or, if python maps to Python 3
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

Theme controls & troubleshooting
- Toggle themes with the round buttons in the navbar (Aurora / Nemesis) and the sun/moon theme-button.
- Nemesis is a special mode (high-contrast, cyan/magenta accents). If you use `Nemesis + Light`, the navbar is purposely forced to keep Nemesis styling so the contrast remains correct. If you see white nav backgrounds after toggling, try a full refresh (Ctrl+F5) — the site relies on CSS specificity and `data-*` attributes.

Developer notes
- No build step: edit `index.html` and the CSS files directly.
- Critical CSS is inlined for convenience; longer mode-specific CSS lives in `nemesis-mode.css` and `aurora-mode.css`.
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

If you want the README to include screenshots, badges (CI), or a short animated GIF showing theme toggles, tell me where to place the image and I’ll add them to the README.
