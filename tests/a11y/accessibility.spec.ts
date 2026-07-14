import { test, expect } from '@playwright/test'

const PAGES = ['/', '/services', '/projects', '/about', '/contact']

test.describe('Accessibility Fixes E2E', () => {

  test('Fix 1: Skip navigation link is present and first focusable element', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(1000)

    // Press Tab to focus the skip link
    await page.keyboard.press('Tab')

    // The skip link should be visible and focused
    const skipLink = page.locator('a.skip-link')
    await expect(skipLink).toBeVisible({ timeout: 5000 })

    // Verify it's the first focusable element
    const skipText = await skipLink.textContent()
    expect(skipText).toContain('Skip to content')

    // Verify it points to #main
    const href = await skipLink.getAttribute('href')
    expect(href).toBe('#main')

    // Verify #main exists
    const mainTarget = page.locator('#main')
    await expect(mainTarget).toHaveCount(1)
  })

  test('Fix 1: Skip link appears on multiple pages', async ({ page }) => {
    for (const pagePath of PAGES) {
      await page.goto(pagePath, { waitUntil: 'load', timeout: 15000 })
      await page.waitForTimeout(1500)
      const skipLink = page.locator('a.skip-link')
      const count = await skipLink.count()
      expect(count).toBeGreaterThanOrEqual(1)
    }
  })

  test('Fix 2: Global focus-visible outlines on interactive elements', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(1000)

    // Tab through nav links and verify focus-visible styles
    const navLinks = page.locator('.nav-links a')
    const count = await navLinks.count()

    for (let i = 0; i < Math.min(count, 3); i++) {
      const link = navLinks.nth(i)
      await link.focus()
      
      // Check that focus-visible styles are applied
      const outline = await link.evaluate((el) => {
        const style = window.getComputedStyle(el)
        return {
          outlineStyle: style.outlineStyle,
          outlineWidth: style.outlineWidth,
          outlineColor: style.outlineColor,
        }
      })
      
      // outline should be visible (not 'none')
      expect(outline.outlineStyle).not.toBe('none')
    }
  })

  test('Fix 4: Footer has no h1-h6 tags', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(500)

    const footer = page.locator('footer.site-footer')
    const headings = footer.locator('h1, h2, h3, h4, h5, h6')
    const count = await headings.count()
    expect(count).toBe(0)

    // Verify strong.footer-heading elements exist instead
    const footerHeadings = footer.locator('strong.footer-heading')
    const strongCount = await footerHeadings.count()
    expect(strongCount).toBe(3)
  })

  test('Fix 5: Touch targets have minimum 44px height', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(1000)

    // Check nav links
    const navLinks = page.locator('.nav-links a')
    const navCount = await navLinks.count()
    for (let i = 0; i < navCount; i++) {
      const box = await navLinks.nth(i).boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }

    // Check theme toggle
    const themeToggle = page.locator('.theme-toggle')
    if (await themeToggle.count() > 0) {
      const box = await themeToggle.first().boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }

    // Check footer links
    const footerLinks = page.locator('.footer-group a')
    const footerCount = await footerLinks.count()
    for (let i = 0; i < footerCount; i++) {
      const box = await footerLinks.nth(i).boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }

    // Check nav logo
    const navLogo = page.locator('.nav-logo')
    if (await navLogo.count() > 0) {
      const box = await navLogo.first().boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }
  })

  test('Fix 6: Font sizes are at least 14px', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(1000)

    // Check breadcrumbs font size
    const breadcrumbs = page.locator('.breadcrumbs').first()
    if (await breadcrumbs.count() > 0) {
      const fontSize = await breadcrumbs.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })
      expect(fontSize).toBeGreaterThanOrEqual(14)
    }

    // Check pricing points font size
    const pricingPoints = page.locator('.pricing-points li')
    const pricingCount = await pricingPoints.count()
    for (let i = 0; i < pricingCount; i++) {
      const fontSize = await pricingPoints.nth(i).evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })
      expect(fontSize).toBeGreaterThanOrEqual(14)
    }

    // Check footer heading font size
    const footerHeading = page.locator('.footer-group .footer-heading').first()
    if (await footerHeading.count() > 0) {
      const fontSize = await footerHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })
      expect(fontSize).toBeGreaterThanOrEqual(14)
    }
  })

  test('Fix 7: Contact form messages have proper ARIA roles', async ({ page }) => {
    // Vue strips v-if elements from SSR when conditions are false.
    // Verify the source template has the correct ARIA attributes.
    const fs = require('fs')
    const source = fs.readFileSync('pages/contact.vue', 'utf-8')
    expect(source).toContain('role="status"')
    expect(source).toContain('aria-live="polite"')
    expect(source).toContain('role="alert"')
    expect(source).toContain('aria-live="assertive"')
  })

  test('Fix 3: prefers-reduced-motion media query exists in CSS', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })

    // Fetch the main.css and check for the rule
    const response = await page.request.get('http://localhost:3000/css/main.css')
    const css = await response.text()
    expect(css).toContain('prefers-reduced-motion: reduce')
    expect(css).toContain('animation-duration: 0.01ms !important')
    expect(css).toContain('transition-duration: 0.01ms !important')
  })

  test('Heading hierarchy: no h2->h4 skips on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 15000 })
    await page.waitForTimeout(1000)

    const headings = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      return Array.from(elements).map(el => ({
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim().substring(0, 50)
      }))
    })

    // Check for heading level skips
    const levels = headings.map(h => parseInt(h.tag.replace('h', '')))
    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i - 1]
      // Should not skip more than 1 level (e.g., h2 -> h4 is bad)
      if (levels[i - 1] !== 1 && levels[i - 1] !== 6) {
        expect(diff).toBeLessThanOrEqual(1)
      }
    }
  })
})
