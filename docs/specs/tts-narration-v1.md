# NemesisNet Website Audio Narration Specification (v1)

## Goal

Allow visitors to listen to any page on the NemesisNet website with a single click while maintaining excellent performance, SEO, and accessibility.

## Objectives

- Improve accessibility.
- Allow users to consume content while multitasking.
- Keep page load times unaffected.
- Keep infrastructure simple.
- Work completely with static Nuxt deployments.

## Scope (v1)

**Supported pages:**

- Home
- About
- Services
- Projects
- Documentation
- Product pages

**Not included:**

- Blog (handled separately later)
- User-generated content
- Comments

## Voice Engine

**Primary engine:**

- Supertonic V3 (preferred if quality is better)

**Fallback:**

- Kokoro

**Voice count:**

- One narrator

**Reason:**

- Consistent branding.
- Simpler maintenance.
- Smaller storage footprint.

## Generation

Generated during CI/CD.

**Pipeline:**

```
Markdown/Vue Content
        ↓
Extract readable text
        ↓
Generate narration (Supertonic V3 / Kokoro)
        ↓
Compress to Opus
        ↓
Store in public assets
        ↓
Deploy
```

No runtime generation.

## Storage

Store audio as static assets.

**Example:**

```
public/
  audio/
    index.opus
    about.opus
    projects/
      codecritical.opus
      forkmyfolio.opus
```

Treat them exactly like images.

## Loading

No automatic download.

When a user presses Listen:

1. Audio URL requested.
2. Browser begins streaming.
3. Playback starts.
4. Browser caches file.

## Player

**Controls:**

- Play/Pause
- Seek bar
- Current time
- Remaining time
- Playback speed: 0.75x, 1x, 1.25x, 1.5x, 2x
- Volume / Mute

Responsive on desktop and mobile.

## UI

Each page has a small Listen button near the page title.

**Example:**

```
NemesisNet

[▶ Listen]
```

**When playing:**

```
⏸ Playing

00:52 / 06:18

━━━━━━━━━━━━━━

1x
```

## Accessibility

- Fully keyboard accessible.
- Screen-reader friendly.
- Proper ARIA labels.
- Focus indicators.
- High contrast.

## SEO

- Audio must not replace page text.
- HTML remains the primary content.
- Search engines continue indexing the normal page.

## Performance

- Audio loads only after interaction.
- No preload.
- Use browser caching.
- Prefer Opus for compression.

## Future (v2)

- Multiple voices.
- Male/Female narrator selection.
- Section-level narration.
- Paragraph highlighting while speaking.
- Audio summaries.
- Multilingual narration.
- Playlist mode across documentation.
- Remember playback speed preference.
- Resume where the listener stopped.

## Decisions Made

| Decision | Choice | Reason |
|----------|--------|--------|
| Voice engine | Supertonic V3 (primary), Kokoro (fallback) | Quality + self-hosted |
| Voice count | 1 narrator | Consistency, simplicity |
| Generation | CI/CD pipeline | No runtime cost |
| Storage | Static assets in `/public/audio/` | CDN-friendly, cached like images |
| Loading | On-demand (click to play) | No wasted bandwidth |
| Granularity | One file per page | Simple, covers 90% of use case |
| Format | Opus | Best compression, widely supported |

## TTS Content Tags (v1)

The text extraction step needs to know what to speak and what to skip. The pipeline extracts text from Vue templates, but some content shouldn't be narrated.

**Rules for text extraction:**

| Content | Include in TTS | Reason |
|---------|---------------|--------|
| `<h1>`, `<h2>`, `<h3>` headings | Yes | Natural narration structure |
| `<p>` paragraphs | Yes | Main content |
| `<li>` list items | Yes | Important content |
| `<strong>`, `<em>` text | Yes | Emphasis preserved in speech |
| `<a>` link text | Yes | Spoken as text, URL skipped |
| `<img>` alt text | No | Not useful for narration |
| `<nav>` navigation | No | UI, not content |
| `<footer>` | No | UI, not content |
| `<button>` text | No | UI, not content |
| Tech stack pills | No | Visual, not spoken |
| Breadcrumbs | No | UI, not content |
| Code blocks | No | Better read than heard |
| JSON-LD / meta | No | Hidden metadata |

**Implementation approach:**

1. Parse the rendered HTML of each page.
2. Walk the DOM tree, extracting text from allowed elements.
3. Strip URLs, numbers in code contexts, and UI elements.
4. Join extracted text with natural pauses (newlines between sections).
5. Feed the cleaned text to Supertonic V3 / Kokoro.

**Vue template consideration:**

Some pages use `<ClientOnly>` wrappers or conditional rendering. The extraction should run against the **SSR output** (`.output/public/*.html`) not the raw `.vue` source, so all conditional content is resolved.
