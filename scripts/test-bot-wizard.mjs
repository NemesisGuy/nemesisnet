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
const msg = 'ok imagine nemesisnet is a wizard. what spell would the wizard cast to turn my boring spreadsheet of rentals into a glowing portal where people book without emailing me at 2am. be weird about it'
for (let i = 1; i <= max; i++) {
  const raw = await ask(msg)
  const stiff = raw.includes("I'm here to help with NemesisNet questions")
  const ok = !raw.startsWith('[HTTP') && raw !== '[EMPTY]'
  if (ok && !stiff) { console.log('WIZARD #' + i + ' -> PLAYFUL\n' + raw); process.exit(0) }
  if (i < max) { console.log('wizard waiting (' + i + ') status=' + (raw.startsWith('[HTTP') ? raw : 'stiff') + '...'); await new Promise(r => setTimeout(r, 30000)) }
  else console.log('no playful after ' + max + '\n' + raw)
}
