# Agent Instructions for NemesisNet

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
