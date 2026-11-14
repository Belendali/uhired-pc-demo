# Uhired AI — PC demo

Clickable prototype of the Uhired AI desktop site and product flow. It is a design reference for development, not production code.

- **Live demo:** https://belendali.github.io/uhired-pc-demo/
- **Figma (page "PC"):** https://www.figma.com/design/AmwUV9dpNkUxJg5K6qqSwK/?node-id=32-38596

## What's inside

| Path | What it is |
|---|---|
| `index.html` | Entry page |
| `app.js` | All screens + interactions (vanilla JS, no build step) |
| `style.css` | All styles, incl. the motion section at the bottom |
| `img/` | **Web-ready assets used by the demo** — use these on the site |
| `assets/original/` | Original source files (full-quality video + images) |

### Assets

| Web-ready (`img/`) | Original (`assets/original/`) | Used for |
|---|---|---|
| `hero.mp4` — 1080p H.264, 8.6 MB, fast start | `hero-video.mp4` — 14.7 MB | Homepage hero video (autoplay, muted, loop) |
| `hero.jpg` | — (first frame of the video) | Video poster (shows before the video loads) |
| `role-maya.jpg` / `role-leo.jpg` / `role-ana.jpg` | `role-*.png` (1672×941) | "Who it's for" cards |
| `logo.png` | — (Figma node 130:41435) | Logo in header + Compare table |

## Screens

- **Site:** Home · Jobs · Learn · Compare (deep links `#jobs`, `#learn`, `#compare`; FAQ is on the homepage)
- **Start now flow:** upload resume (02) → reading (03) → results in chat + pinned above the box (04 / 04b) → practice set panel (05) → open roles panel (05b) → new bot (07 / 08)
- **AI mock interview:** M01 – M13 (30-second free preview → paywall → Pro → results → per-answer review)
- **Mock history:** H01, H02

Use the round menu button on the left edge to jump to any screen, or open one directly with a hash, e.g. `#m13`, `#05b`, `#h02`.

## Layout + motion specs (site pages)

- Same as uhiredai.com: rendered 1:1, **80px side padding**, content stretches with the window; H1 60 / H2 36 / body 16–18 / nav 14 (Poppins). Below 1440px wide the page scales down.
- "See it in action": 160px side padding. "Who it's for": centered, 3 cards × 360px.
- Scroll reveal: sections and cards fade + slide up 36px (0.8s, 80ms stagger) when they enter the viewport, fade out when they leave.
- Card hover: tilt toward the cursor (max 5°, 2.5° for wide panels), lift 6px, scale 1.02, soft highlight.
- Jobs: search bar sticks under the header and compacts; filter panel is sticky; only the job list scrolls.
- Compare: the Uhired AI column is the highlighted pick (pulsing glow, shimmering "Most affordable" tag, checks pop in).
- All motion is off when the OS "reduce motion" setting is on.

## Run locally

Any static server works, e.g. `python3 -m http.server 8793` in this folder, then open http://localhost:8793/.
