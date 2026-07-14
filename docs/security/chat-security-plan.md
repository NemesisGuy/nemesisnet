# Chat Endpoint Security Hardening Plan

**File:** `server/api/chat.post.ts`
**Risk level:** Marketing-site chatbot with no tool access — low blast radius for jailbreak, but real cost/abuse risk.

---

## Fix 1: Per-IP Rate Limiting
**Priority:** HIGH — concrete abuse vector

Add an in-memory token bucket rate limiter. Cap at ~20 requests per IP per minute (generous for a chatbot, blocks scripted loops).

- Use `event.node.req.socket.remoteAddress` or `getRequestHeader(event, 'x-forwarded-for')` for IP (Cloudflare sets XFF).
- In-memory Map with TTL cleanup (no external deps needed for a single-server site).
- Return 429 with `Retry-After` header.

## Fix 2: Origin/Referer Validation
**Priority:** HIGH — prevents other sites from piggybacking on the API key

Check `Origin` or `Referer` header matches `nemesisnet.co.za`. Skip check for same-origin requests (no Origin header = likely server-side or same-origin).

- Allow missing Origin (same-origin / direct browser access without Origin = fine).
- If Origin present, validate it ends with `.nemesisnet.co.za` or `nemesisnet.co.za`.
- Check Referer as fallback if Origin missing.

## Fix 3: Strip Client-Supplied `role: 'model'` History
**Priority:** MEDIUM — jailbreak vector but low blast radius here

The client sends full conversation history including fabricated model turns. Strip any `role: 'model'` entries from client history and only keep `role: 'user'` entries. This prevents few-shot poisoning where a user injects fake assistant responses.

## Fix 4: Remove Debug console.log
**Priority:** LOW — debug noise, not a vulnerability

Remove the `console.log('GEMMA_API_KEY source:', ...)` line. It doesn't leak the key value but is unnecessary in prod.

## Fix 5: Handle Empty/Blocked Responses
**Priority:** LOW — UX gap, not security

When Gemma returns 200 but with no usable text (safety filter block, empty candidates), return a user-friendly message instead of falling through to the retry loop and 502.

---

## Implementation Order

1. Fix 4 (trivial — just delete a line)
2. Fix 3 (small change — filter history)
3. Fix 5 (small change — check text before retry)
4. Fix 2 (origin check middleware)
5. Fix 1 (rate limiter — most code, but self-contained)

## Verification

- Hit `/api/chat` directly without Origin header → should work (same-origin)
- Hit with `Origin: https://evil.com` → 403
- Hit 20+ times in a minute → 429 after threshold
- Send history with fake model turns → only user turns preserved
- Send message → get response, no debug log in console
