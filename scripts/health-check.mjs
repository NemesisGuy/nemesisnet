#!/usr/bin/env node
/**
 * Post-deploy health check for NemesisNet.
 *
 * Usage:
 *   node scripts/health-check.mjs                      # checks live site
 *   node scripts/health-check.mjs --url https://...    # custom URL
 *   node scripts/health-check.mjs --rollback           # rollback to previous Docker image
 *
 * Checks:
 *   1. Key pages return 200 (home, projects, services, contact, about, legal, guide)
 *   2. Chat API responds to a basic message
 *   3. Pages contain expected content (not blank/error pages)
 *   4. No 5xx errors on any route
 *
 * Exit code: 0 = all pass, 1 = any failure
 */

const BASE_URL = (() => {
  const idx = process.argv.indexOf('--url')
  return idx !== -1 ? process.argv[idx + 1] : 'https://nemesisnet.co.za'
})()

const ROLLBACK = process.argv.includes('--rollback')

const PAGES = [
  { path: '/', expect: 'NemesisNet' },
  { path: '/about', expect: 'NemesisNet' },
  { path: '/contact', expect: 'contact' },
  { path: '/services', expect: 'services' },
  { path: '/projects', expect: 'projects' },
  { path: '/services/ai-development', expect: 'AI' },
  { path: '/services/custom-software', expect: 'software' },
  { path: '/projects/forkmyfolio', expect: 'ForkMyFolio' },
  { path: '/projects/voxnemesis-supertonic', expect: 'Supertonic' },
  { path: '/projects/onthegorentals', expect: 'OnTheGo' },
]

const CHAT_TEST = {
  message: 'what services do you offer?',
  expect: /services|help|nemesisnet/i,
}

let passed = 0
let failed = 0
const failures = []

async function check(name, fn) {
  try {
    await fn()
    console.log(`  ✓ ${name}`)
    passed++
  } catch (e) {
    console.log(`  ✗ ${name}: ${e.message}`)
    failed++
    failures.push({ name, error: e.message })
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg)
}

// --- Page checks ---
console.log(`\n🔍 Health check: ${BASE_URL}\n`)
console.log('Pages:')

for (const p of PAGES) {
  await check(`${p.path} → 200`, async () => {
    const res = await fetch(`${BASE_URL}${p.path}`, {
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    })
    assert(res.status === 200, `HTTP ${res.status}`)
    const html = await res.text()
    assert(html.length > 500, `Page too short (${html.length} bytes) — likely error page`)
    assert(!html.includes('502') && !html.includes('503'), 'Page contains 502/503 error text')
    if (p.expect) {
      const re = new RegExp(p.expect, 'i')
      assert(re.test(html), `Page missing expected text: "${p.expect}"`)
    }
  })
}

// --- Chat API check ---
console.log('\nChat API:')

await check('/api/chat responds', async () => {
  let lastErr
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': BASE_URL,
          'referer': `${BASE_URL}/`,
        },
        body: JSON.stringify({ message: CHAT_TEST.message, history: [] }),
        signal: AbortSignal.timeout(30000),
      })
      if (res.status === 503 && attempt === 0) {
        await new Promise(r => setTimeout(r, 3000))
        continue
      }
      assert(res.status === 200, `HTTP ${res.status}`)
      const data = await res.json()
      assert(data.text && data.text.length > 10, `Response too short: "${data.text}"`)
      assert(CHAT_TEST.expect.test(data.text), `Response doesn't match expected pattern`)
      return
    } catch (e) {
      lastErr = e
      if (attempt === 0) await new Promise(r => setTimeout(r, 3000))
    }
  }
  throw lastErr || new Error('Failed after 2 attempts')
})

// --- Summary ---
console.log(`\n${'='.repeat(40)}`)
console.log(`  Passed: ${passed}  Failed: ${failed}`)
console.log(`${'='.repeat(40)}`)

if (failed > 0) {
  console.log('\nFailed checks:')
  for (const f of failures) {
    console.log(`  - ${f.name}: ${f.error}`)
  }
}

// --- Rollback ---
if (ROLLBACK && failed > 0) {
  console.log('\n⚠️  Rollback requested — attempting Docker rollback...')
  const { execSync } = await import('child_process')
  try {
    // Stop current container
    execSync('wsl docker stop nemesisnet', { stdio: 'inherit' })
    execSync('wsl docker rm nemesisnet', { stdio: 'inherit' })
    // Find previous image (the one before current)
    const images = execSync('wsl docker images nemesisguy/nemesisnet:dev --format "{{.ID}} {{.CreatedAt}}"', { encoding: 'utf-8' })
      .trim().split('\n').filter(Boolean)
    if (images.length >= 2) {
      const prevId = images[1].split(' ')[0]
      console.log(`  Rolling back to image: ${prevId}`)
      execSync(`wsl docker run -d --name nemesisnet -p 80:3000 ${prevId}`, { stdio: 'inherit' })
      console.log('  ✓ Rollback complete')
    } else {
      console.log('  ✗ No previous image found to rollback to')
    }
  } catch (e) {
    console.error('  ✗ Rollback failed:', e.message)
  }
}

process.exit(failed > 0 ? 1 : 0)
