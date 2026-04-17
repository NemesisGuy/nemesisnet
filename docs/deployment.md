# Deployment Guide

This document defines the release workflow for the NemesisNet static site, including the staging branch and Docker Hub staging tag for A/B testing.

## Branch Strategy

- `master`: production-ready branch.
- `staging`: pre-production branch for verification and A/B testing.

## Standard Staging Release Flow

Run from the repository root.

```powershell
# Create/switch to staging branch
git switch staging 2>$null
if ($LASTEXITCODE -ne 0) { git switch -c staging }

# Stage intended files only (avoid local Lighthouse reports)
git add src/index.html src/sitemap.xml docs/deployment.md README.md

# Commit
git commit -m "chore: fix anchor links and add staging deployment playbook"

# Push staging branch
git push -u origin staging
```

# Build And Push Docker Staging Tag

> **Note:** On Windows, always prefix Docker commands with `wsl` to ensure compatibility with Docker Desktop.

```powershell
# Build current code
wsl docker build -t nemesisnet:staging .

# Tag for Docker Hub
wsl docker tag nemesisnet:staging nemesisguy/nemesisnet:staging

# Push staging image
wsl docker push nemesisguy/nemesisnet:staging
```

## Suggested A/B Test Plan

Goal: compare current production (`latest`) against candidate (`staging`) before promoting.

Option A: Host-level split
- Keep production host on `nemesisguy/nemesisnet:latest`.
- Route staging host (for example `staging.nemesisnet.co.za`) to `nemesisguy/nemesisnet:staging`.
- Send controlled traffic (internal + selected users) to staging and measure behavior.

Option B: Time-boxed rollout
- Deploy `staging` image to a temporary environment for 24-72 hours.
- Validate conversion and engagement metrics versus production baseline.
- Promote only if no regression in SEO, navigation, form interactions, and performance.

## Promotion To Production

After A/B test acceptance:

```powershell
# Fast-forward merge staging to master (if policy allows)
git switch master
git pull origin master
git merge --ff-only staging
git push origin master

# Re-tag staging build as latest if using same artifact
wsl docker pull nemesisguy/nemesisnet:staging
wsl docker tag nemesisguy/nemesisnet:staging nemesisguy/nemesisnet:latest
wsl docker push nemesisguy/nemesisnet:latest
```

## Pre-Push Checklist

- Internal anchors navigate correctly (`#services`, `#projects`, `#contact`, legal anchors).
- `robots.txt` and `sitemap.xml` are reachable.
- No accidental artifacts committed (for example Lighthouse JSON outputs).
- Manual smoke test on desktop and mobile viewport.
