import { chromium } from 'playwright'

const URL = process.env.BASE_URL || 'https://nemesisnet.co.za/'
const convo = [
  'whats the time there?',
  'ok tell me about this ?',
  'ok yeah that',
  'tell me more about the cost page on your site please',
  'https://nemesisnet.co.za/software-development-cost-south-africa',
  'can we make a pornhub for south africa ? what that gna cost in dev?',
  'ok what about a car rental platform ?'
]

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function waitForBot(page, expectedCount, timeoutMs = 20000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    const count = await page.evaluate(() => document.querySelectorAll('.chat-msg--model').length)
    if (count >= expectedCount) {
      const text = await page.evaluate(() => {
        const bubbles = Array.from(document.querySelectorAll('.chat-msg--model .chat-msg-content'))
        const el = bubbles[bubbles.length - 1]
        return el ? (el.textContent || '').trim() : ''
      })
      if (text.length > 0) return text
    }
    await sleep(500)
  }
  return await page.evaluate(() => {
    const bubbles = Array.from(document.querySelectorAll('.chat-msg--model .chat-msg-content'))
    const el = bubbles[bubbles.length - 1]
    return el ? (el.textContent || '').trim() : '(timeout)'
  })
}

const browser = await chromium.launch()
const page = await browser.newPage()
const pageErrors = []
page.on('pageerror', e => pageErrors.push(String(e)))
page.on('console', m => { if (m.type() === 'error') pageErrors.push('console: ' + m.text()) })

await page.goto(URL, { waitUntil: 'networkidle' })
await sleep(1500)
await page.locator('button.chat-fab').click()
await sleep(1000)

const input = page.locator('textarea, input[type="text"]').last()
console.log('input enabled:', await input.isEnabled())

for (let i = 0; i < convo.length; i++) {
  const msg = convo[i]
  // Wait for input to be enabled (API response or timeout must complete first)
  await input.waitFor({ state: 'visible', timeout: 40000 })
  const startWait = Date.now()
  while (!(await input.isEnabled()) && Date.now() - startWait < 40000) {
    await sleep(1000)
  }
  if (!(await input.isEnabled())) {
    console.log(`\n[${i + 1}] USER: ${msg}`)
    console.log(`    SKIPPED: input still disabled after 40s`)
    continue
  }
  const bubblesBefore = await page.evaluate(() => document.querySelectorAll('.chat-msg--model').length)
  await input.fill(msg)
  await input.press('Enter')
  const text = await waitForBot(page, bubblesBefore + 1, 25000)
  const bubbles = await page.evaluate(() => document.querySelectorAll('.chat-msg--model').length)
  const refused = text.includes("not something NemesisNet builds")
  const hasLinks = /nemesisnet\.co\.za|blog\.nemesisnet/.test(text)
  console.log(`\n[${i + 1}] USER: ${msg}`)
  console.log(`    BOT(${bubbles} bubbles): ${text.slice(0, 300) || '(EMPTY)'}`)
  console.log(`    refused=${refused} hasLinks=${hasLinks}`)
  await sleep(300)
}

console.log('\nPAGE ERRORS:', pageErrors.length ? pageErrors : 'none')
await browser.close()
console.log('DONE')
