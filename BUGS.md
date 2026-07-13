# NemesisBot Chat Widget — Bug Tracker

## BUG-001: Mobile Close Button Not Visible
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** Mobile (≤480px)
- **Steps to Reproduce:**
  1. Open site on mobile (375px width)
  2. Click chat FAB to open chat
  3. Chat panel goes full-screen
  4. No X/close button visible in header to close the panel
- **Expected:** Close button (X) visible in chat header on mobile
- **Actual:** Close button is hidden or missing on mobile layout
- **Root Cause:** The `.chat-header` has `justify-content: space-between` but the close button may be obscured by the full-screen panel or the header layout doesn't render the X properly at 375px

## BUG-002: Links in Chat Responses Not Clickable
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** All
- **Steps to Reproduce:**
  1. Open chat
  2. Ask a question that would produce a URL (e.g. "what's the contact link?")
  3. Bot responds with a URL in text
  4. URL is rendered as plain text, not a clickable `<a>` tag
- **Expected:** URLs in bot responses should be clickable links
- **Actual:** URLs are plain text — the `formatMessage()` function only handles `**bold**`, `*italic*`, and `` `code` `` — no URL detection
- **Root Cause:** `formatMessage()` in `ChatWidget.vue` does not convert URLs to `<a href>` tags

## BUG-003: Bot Has No Access to Blog Posts
- **Status:** FIXED
- **Priority:** MEDIUM
- **Platform:** All
- **Steps to Reproduce:**
  1. Open chat
  2. Ask "Do you have any blog posts?"
  3. Bot responds it doesn't know or gives a generic answer
- **Expected:** Bot should know about the blog at blog.nemesisnet.co.za
- **Actual:** System prompt contains no mention of the blog
- **Root Cause:** The `SYSTEM_PROMPT` in `server/api/chat.post.ts` does not include blog information

## BUG-004: Chat API Returns 502 on Dev and Prod
- **Status:** OPEN
- **Priority:** HIGH
- **Platform:** Dev (dev.nemesisnet.co.za) and Prod (nemesisnet.co.za)
- **Steps to Reproduce:**
  1. Open site
  2. Send any message in chat
  3. Response: "Something went wrong"
- **Expected:** Chat responds with bot answer
- **Actual:** 502 error from API
- **Root Cause:** CI config passes `GEMMA_API_KEY` from Woodpecker secrets correctly (verified in `.woodpecker.yml`). The secret likely doesn't exist in Woodpecker yet, OR the Portainer stack needs a manual redeploy to pick up the new env var. Action needed: verify `GEMMA_API_KEY` exists as a Woodpecker secret, then trigger a redeploy on Portainer for both dev (stack 82) and prod (stack 32).
