# Lighthouse Testing Documentation

This document details the Lighthouse CI configuration, testing approach, and how to add new routes.

## Overview

Lighthouse testing is integrated into the Woodpecker CI pipeline to ensure performance, accessibility, best practices, and SEO quality across all important pages.

## Current Configuration

### Test Categories
- **Performance** - Page load speed, Core Web Vitals
- **Accessibility** - ARIA, contrast, keyboard navigation
- **Best Practices** - Security, HTTPS, modern APIs
- **SEO** - Meta tags, mobile-friendliness, crawlability

### Thresholds (Fail if below)

| Category | Threshold |
|----------|-----------|
| Performance | 80 |
| Accessibility | 90 |
| Best Practices | 90 |
| SEO | 90 |

## Tested Routes

### Core Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/` | Critical | Desktop + Mobile |
| `/projects` | High | Desktop |
| `/services` | High | Desktop |
| `/about` | Medium | Desktop |
| `/services/custom-software` | High | Desktop |
| `/services/saas-development` | High | Desktop |
| `/services/ai-development` | High | Desktop |
| `/services/self-hosted-ai` | High | Desktop |
| `/services/infrastructure` | High | Desktop |
| `/services/consulting` | High | Desktop |

### Project Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/projects/codecritical-saas` | High | Desktop |
| `/projects/since` | High | Desktop |
| `/projects/voxnemesis-supertonic` | High | Desktop |
| `/projects/pockettts-mcp` | High | Desktop |

### Legal Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/legal/privacy` | Low | Desktop |
| `/legal/terms` | Low | Desktop |
| `/legal/refund` | Low | Desktop |

## Route Manifest

Routes are defined in a JSON manifest for easy maintenance:

```json
[
  { "path": "/", "priority": "critical", "device": "desktop, mobile" },
  { "path": "/projects", "priority": "high", "device": "desktop" }
]
```

## Adding New Routes

### Option A: Add to Route Manifest

1. Open `lighthouse-routes.json` in project root
2. Add new route entry:

```json
{
  "path": "/new-page",
  "priority": "high",
  "device": "desktop"
}
```

3. Commit changes - CI will automatically test the new route

### Option B: Update Lighthouse Script

1. Open `lighthouse-audit.js`
2. Add URL to the routes array:

```javascript
const routes = [
  'https://dev.nemesisnet.co.za/',
  'https://dev.nemesisnet.co.za/projects',
  // Add new route here
];
```

3. Commit changes

## Understanding Results

### Core Web Vitals

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| FCP | < 1.8s | 1.8s - 3s | > 3s |
| LCP | < 2.5s | 2.5s - 4s | > 4s |
| CLS | < 0.1 | 0.1 - 0.25 | > 0.25 |
| TBT | < 200ms | 200ms - 600ms | > 600ms |

### Scoring

- **0-49**: Poor (red)
- **50-89**: Needs Improvement (orange)
- **90-100**: Good (green)

## Debugging Failures

### Performance Issues

1. Check Lighthouse report in CI artifacts
2. Review specific audit failures:
   - **Render-blocking resources** - Minify CSS/JS
   - **Large layouts** - Optimize images
   - **Slow server response** - Check hosting

### Accessibility Issues

1. Review failed accessibility audits
2. Common issues:
   - Missing alt text on images
   - Low contrast ratios
   - Missing form labels
   - Missing ARIA attributes

### SEO Issues

1. Check meta tags and headers
2. Verify:
   - Meta description present
   - Title tag unique per page
   - Viewport meta tag
   - Document has lang attribute

## CI Artifacts

Lighthouse reports are saved as CI artifacts:

- `lighthouse-report-{page}.json` - Full JSON report
- `lighthouse-summary.log` - Human-readable summary

Access via Woodpecker CI artifacts section after build.

## Skipping Tests

To skip Lighthouse for a specific commit:

```bash
git commit --allow-empty -m "chore: skip lighthouse"
```

Or add `[skip lighthouse]` to commit message.

## Performance Budget

Recommended budgets:

| Resource | Budget |
|----------|--------|
| JS Bundle | < 200KB gzipped |
| CSS | < 50KB gzipped |
| Images (above fold) | < 500KB total |
| DOM Size | < 1500 nodes |

## Continuous Improvement

1. **Monitor trends** - Track scores over time
2. **Address regressions** - Fix before deploying
3. **Optimize images** - Use WebP with srcset
4. **Lazy load** - Defer off-screen content
5. **Cache headers** - Configure nginx caching

## Integration with Woodpecker

The Lighthouse step runs after deployment to test the live version:

```yaml
lighthouse:
  image: node:22
  commands:
    - npm ci
    - node lighthouse-audit.js
  when:
    event: [push, tag, manual]
    branch: dev
```

### Failure Handling

- Pipeline fails if any threshold not met
- Review artifacts for detailed report
- Fix issues in code and redeploy

## Questions?

For issues or questions about Lighthouse testing:
1. Check CI logs for specific failures
2. Review Lighthouse documentation
3. Examine browser DevTools