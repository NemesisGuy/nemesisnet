const LIVE_ENDPOINT = 'https://nemesisnet.co.za/api/chat'

async function ask(message, history = []) {
  const res = await fetch(LIVE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // The endpoint only accepts requests whose origin/referer contains nemesisnet.co.za
      'origin': 'https://nemesisnet.co.za',
      'referer': 'https://nemesisnet.co.za/'
    },
    body: JSON.stringify({ message, history })
  })
  if (!res.ok) {
    const err = await res.text()
    return `[HTTP ${res.status}]: ${err.slice(0, 400)}`
  }
  const data = await res.json()
  return data.text || '[EMPTY RESPONSE]'
}

const conversations = [
  {
    name: '1. Vague / non-direct opener',
    turns: [
      "hi so like... i dunno, i have this idea thing in my head, its kinda messy but its been bugging me. its like a website? but also does stuff. you know what i mean??"
    ]
  },
  {
    name: '2. Rambling, no clear question',
    turns: [
      "my cousin said i should talk to someone who actually builds stuff because i keep complaining about how my workshop is a mess and the paper job cards get lost and the accountant yells at me lol. anyway hows your day"
    ]
  },
  {
    name: '3. Indirect "show me youre real"',
    turns: [
      "everyone online claims they can build anything. prove to me you arent just another chatbot reading a script. what have you actually made that i could click on right now"
    ]
  },
  {
    name: '4. Emotional / hesitant buyer',
    turns: [
      "im scared to spend money on dev again, last guy ghosted me after 40k. but i kinda need a small thing for my cafe, just so people can see the menu and call. is that... even something worth talking to you about"
    ]
  },
  {
    name: '5. Weird metaphor / playful',
    turns: [
      "ok imagine nemesisnet is a wizard. what spell would the wizard cast to turn my boring spreadsheet of rentals into a glowing portal where people book without emailing me at 2am. be weird about it"
    ]
  }
]

let history = []
for (const conv of conversations) {
  console.log('\n' + '='.repeat(70))
  console.log(conv.name)
  console.log('='.repeat(70))
  for (const turn of conv.turns) {
    console.log('\nUSER >> ' + turn)
    const reply = await ask(turn, history)
    console.log('\nBOT  >> ' + reply)
    history.push({ role: 'user', content: turn })
    history.push({ role: 'model', content: reply })
  }
}
