# NemesisBot Chat Widget — Bug Tracker

## BUG-001: Mobile Close Button Not Visible
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** Mobile (≤480px)
- **Root Cause:** Nav z-index 10000 > chat widget z-index 9999; panel started at top:0 behind nav
- **Solution:** Increased z-index to 10001; set mobile panel top:60px
- **Verified:** Both dev and prod

## BUG-002: Links in Chat Responses Not Clickable
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** All
- **Root Cause:** formatMessage() had no URL detection
- **Solution:** Added URL regex pattern to auto-link URLs
- **Verified:** Both dev and prod

## BUG-003: Bot Has No Access to Blog Posts
- **Status:** FIXED
- **Priority:** MEDIUM
- **Platform:** All
- **Root Cause:** System prompt missing blog info
- **Solution:** Added BLOG section to system prompt with full URL
- **Verified:** Both dev and prod

## BUG-004: Chat API Returns 502 Intermittently
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** Dev and Prod
- **Root Causes:** Rate limits (15 RPM free tier), env var mismatch, Gemma API instability
- **Solution:** Added retry logic (1 retry after 1s), multi-source env var check, debug logging
- **Note:** Intermittent failures may still occur at high usage (free tier limits)

## BUG-005: Jittery Scrolling
- **Status:** FIXED
- **Priority:** HIGH
- **Platform:** All
- **Root Cause:** background-attachment:fixed on both html and body caused repaint issues
- **Solution:** Removed background-attachment:fixed from body
- **Verified:** Both dev and prod

## BUG-006: CSS MIME Type Errors (Intermittent)
- **Status:** FIXED
- **Priority:** MEDIUM
- **Platform:** Prod
- **Root Cause:** Cloudflare caching serving CSS with wrong Content-Type; nosniff header blocking them
- **Solution:** Added explicit Content-Type headers for .css and .js in nginx config; purged Cloudflare cache
