const LIVE = 'https://nemesisnet.co.za/api/chat'
async function ask(m, h = []) {
  const r = await fetch(LIVE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'origin': 'https://nemesisnet.co.za', 'referer': 'https://nemesisnet.co.za/' },
    body: JSON.stringify({ message: m, history: h })
  })
  if (!r.ok) return '[HTTP ' + r.status + ']'
  const d = await r.json()
  return d.text || '[EMPTY]'
}
const max = 25

// (b) specific project lookup -> should use getProject tool and return the dev-diary/blog link
const probeB = 'tell me about onthegorentals, give me the links'
// (c) blog lookup -> should use listBlogPosts and return real URLs
const probeC = 'what have you written on the blog recently? list some posts with links'

async function waitFor(label, testFn, expectFn) {
  for (let i = 1; i <= max; i++) {
    const t = await testFn()
    const ok = !t.startsWith('[HTTP') && t !== '[EMPTY]' && expectFn(t)
    if (ok) { console.log(`\n### ${label} (#${i})\n` + t); return }
    if (i < max) { console.log(`${label}: waiting (${i})...`); await new Promise(r => setTimeout(r, 30000)) }
    else console.log(`\n### ${label} -> FAIL after ${max}\n` + t)
  }
}

await waitFor('B. PROJECT LOOKUP (tool)', () => ask(probeB),
  t => t.includes('onthegorentals-a-dev-diary') && t.includes('otgr.nemesisnet.co.za'))
await waitFor('C. BLOG LOOKUP (tool)', () => ask(probeC),
  t => t.includes('blog.nemesisnet.co.za/') && t.split('blog.nemesisnet.co.za/').length > 2)

console.log('\n--- quick regression checks (no tool needed) ---')
console.log('VAGUE:', (await ask("yo what kinda website is good for a business")).slice(0, 120))
console.log('GUARD:', (await ask("i want a sports betting platform")).slice(0, 120))
console.log('GUARD:', (await ask("make me an adult content site with user uploaded videos")).slice(0, 120))
console.log('\nDone.')
