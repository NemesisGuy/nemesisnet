# WordPress MCP Integration Log

## 1. Change Log
| Date (SAST)        | Component                          | Change                                                                                       | Reason                                                                                           | Dependencies |
|--------------------|------------------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------|
| 2025-11-25 14:32   | `src/index.html` (Projects grid)   | Added “WordPress MCP Server” card with hero image slot, GitHub link, and deep-dive blog link.  | Showcase the new MCP project in the public portfolio so LLM crawlers and visitors see it.        | FontAwesome icons, local asset paths |
| 2025-11-25 14:34   | Assets (`src/assets/images/...`)   | Created `projects/wordpress-mcp/{original,optimized}` directories with placeholder hero art.    | Maintain single-source asset hygiene and prep for real screenshots.                              | Asset optimization script |
| 2025-11-25 14:35   | `docs/asset-inventory.md`          | Documented the new asset slots and flagged the placeholder status for follow-up.               | Keep media inventory accurate for audits and future replacements.                                | Documentation tooling |
| 2025-11-25 14:37   | Tests (`python -m unittest ...`)   | Re-ran `tests.test_structure` (7/7 passing).                                                   | Ensure structural regressions weren’t introduced by the new card or assets.                     | unittest |
| 2025-11-25 14:40   | Deployment (Docker image)          | Rebuilt `nemesisguy/nemesisnet:latest` with `--no-cache` and pushed to Docker Hub (digest `sha256:bb4ae0c6673ec694d845f93827106581dd6f4334f7c938c469a67e95edae362a`). | Publish the updated site so the WordPress MCP project is live.                                   | Docker, Docker Hub |

## 2. Issues Encountered
| Issue Title                                   | Description                                                                                                       | Steps to Reproduce                                                | Impact                            | Priority |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------|----------|
| Missing dedicated WordPress MCP hero capture  | No unique screenshot was available during this update; placeholder Nemesis logo is temporarily used.              | View the new card on the Projects grid; note the reused logo art. | Diminishes visual consistency.    | Medium   |

## 3. Fixes / Mitigations Implemented
| Date        | Issue Reference                                | Fix / Mitigation                                                                                     | Verification |
|-------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------|--------------|
| 2025-11-25  | Missing dedicated WordPress MCP hero capture    | Seeded placeholder assets and documented the gap in `docs/asset-inventory.md` for easy follow-up.     | Manual review + asset inventory entry |

## 4. Readme / Overview
- **Project:** WordPress MCP Server
- **Purpose:** Provide a local-first Model Context Protocol (MCP) bridge that lets autonomous agents or LLM-powered tools interact with WordPress sites (read, update, publish) without exposing credentials to third parties.
- **Key Modules:**
  - Express-based MCP service wrapper (Node)
  - WordPress REST API client with token rotation
  - Content normalization and diff pipeline so agents can preview changes
  - Safety layer (rate limiting + ACLs) before write operations reach WordPress
- **Dependencies:** Node 20+, npm, WordPress site with REST + application passwords, Docker (optional containerization), MCP-capable client.
- **Installation:**
  1. Clone `https://github.com/NemesisGuy/WordPress-MCP`.
  2. Copy `.env.example` → `.env` and set WordPress URL + credentials.
  3. Run `npm install`.
  4. Start locally via `npm run dev` or `docker compose up`.
- **Usage:**
  - Register the MCP server endpoint in your agent client (e.g., Cursor, Claude Desktop, or custom orchestrator).
  - Agents can list posts, fetch specific content, create drafts, or update blocks while the server enforces ACLs.
  - Logging output appears in the terminal; HTTP health check exposed at `/health`.

## 5. Lessons Learned / Next Steps
1. Capture an actual WordPress MCP UI/dashboard screenshot, run it through `scripts/optimize_assets.py`, and replace the placeholder WebP to keep visual parity with other cards.
2. Add a regression test asserting that the new project’s GitHub/blog URLs remain present in `src/index.html` so future edits don’t remove them accidentally.
3. Consider writing a companion blog post (following `docs/agents/agent_wordpress_content_guide.md`) that dives deeper into MCP server security patterns; link it from the project card once published.
