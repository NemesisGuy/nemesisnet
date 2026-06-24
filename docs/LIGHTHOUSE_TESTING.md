# Lighthouse Testing Documentation

This document details the Lighthouse CI configuration, testing approach, and how to add new routes.

## Overview

Lighthouse testing is integrated into the Woodpecker CI pipeline to ensure accessibility, best practices, and SEO quality across all important pages. Performance is not audited in CI because network latency skews results.

## Current Configuration

### Test Categories (CI Only)
- **Accessibility** - ARIA, contrast, keyboard navigation
- **Best Practices** - Security, HTTPS, modern APIs
- **SEO** - Meta tags, mobile-friendliness, crawlability

> **Note**: Performance is intentionally excluded from CI audits. Cloudflare proxy + VPS latency makes performance scores unreliable. Run performance audits locally instead.

### Thresholds (Fail if below)

| Category | Threshold |
|----------|-----------|
| Accessibility | 90 |
| Best Practices | 90 |
| SEO | 90 |

## Tested Routes

### Core Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/` | Critical | Desktop |
| `/projects` | High | Desktop |
| `/services` | High | Desktop |
| `/about` | Medium | Desktop |
| `/contact` | Medium | Desktop |
| `/services/custom-software` | High | Desktop |
| `/services/saas-development` | High | Desktop |
| `/services/ai-development` | High | Desktop |
| `/services/self-hosted-ai` | High | Desktop |
| `/services/infrastructure` | High | Desktop |
| `/services/consulting` | High | Desktop |
| `/services/static-sites` | High | Desktop |
| `/services/app-starter` | High | Desktop |
| `/services/business-systems` | High | Desktop |
| `/services/platform-enterprise` | High | Desktop |
| `/services/agile-iterative` | High | Desktop |
| `/services/waterfall-structured` | High | Desktop |
| `/services/ai-consulting` | High | Desktop |
| `/services/mcp-integrations` | High | Desktop |
| `/services/light-hosting` | Medium | Desktop |
| `/services/managed-retainer` | Medium | Desktop |

### Project Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/projects/codecritical-saas` | High | Desktop |
| `/projects/since` | High | Desktop |
| `/projects/voxnemesis-supertonic` | High | Desktop |
| `/projects/pockettts-mcp` | High | Desktop |
| `/projects/nemesisnet-wordpress-theme` | High | Desktop |

### Legal Pages

| Route | Priority | Device |
|-------|----------|--------|
| `/legal/privacy` | Low | Desktop |
| `/legal/terms` | Low | Desktop |
| `/legal/refund` | Low | Desktop |

## Route Manifest

Routes are defined directly in `lighthouse-audit.js`. No external JSON file is needed.

## Adding New Routes

### Option A: Update Lighthouse Script

1. Open `lighthouse-audit.js`
2. Add URL to the routes array:

```javascript
const routes = [
  'https://nemesisnet.co.za/',
  'https://nemesisnet.co.za/projects',
  // Add new route here
];
```

3. Commit changes - CI will automatically test the new route

### Option B: Create a Dedicated Script

For specialized audits, create a new script that imports the shared config from `lighthouse-audit.js`.

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

### Best Practices Issues

1. Check for mixed content (HTTP on HTTPS)
2. Verify console errors
3. Review deprecated APIs

## CI Artifacts

Lighthouse reports are saved as CI artifacts:

- `lighthouse-report-{page}.json` - Full JSON report
- `lighthouse-summary.log` - Human-readable summary

Access via Woodpecker CI artifacts section after build.

## Performance Budget (Local Testing)

Recommended budgets for local performance audits:

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
5. **Cache headers** - Configure Cloudflare caching

## Integration with Woodpecker

The Lighthouse step runs after deployment to test the live version on master:

```yaml
lighthouse:
  image: node:22
  commands:
    - npm ci
    - node lighthouse-audit.js
  when:
    event: [push, tag, manual]
    branch: master
```

### Failure Handling

- Pipeline fails if any threshold not met
- Review artifacts for detailed report
- Fix issues in code and redeploy
