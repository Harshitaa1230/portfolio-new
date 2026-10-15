# TITARVL — Design System & Page Specification

A reverse-documented design spec for the TITARVL portfolio template (Framer). Source: provided screenshots plus the live page structure at titarvl.framer.website. Values marked *(estimated)* are inferred visually, not read from source CSS.

> **RULE — No pure white / pure black.** Never use `#000000`, `#000`, `black`, `bg-black`, `text-black`, `white`, `bg-white`, `text-white`, or any opacity variant (`white/50`, `black/10`, …). All colors come from the tokens in §2.

---

## 1. Design Philosophy

**Swiss / International Typographic meets brutalist-editorial.** The site is almost entirely type, hairlines and whitespace. Imagery is the only "color".

Principles:
1. **Type is the hero.** Oversized, tightly-tracked uppercase grotesque headings dominate every section.
2. **Two voices.** A proportional grotesque for statements, a monospace for metadata and labels.
3. **Neutral palette.** Flat `#FEFEFE` background; no pure white and no pure black. Work imagery supplies all color.
4. **Structure made visible.** Hairline rules, bracketed indices `[01]`, and a rigid column grid expose the layout like a spec sheet.
5. **Restrained motion.** Interaction is purposeful: count-up numbers, scroll-driven reveals, a 3D card fan in the hero.
6. **Utility as ornament.** Live clock, location, volume numbers and "scroll down" cues serve as decorative detail.

Mood keywords: *precise, editorial, confident, quiet, technical, curated.*

---

## 2. Color

| Token | Hex | Usage |
|---|---|---|
| `--color-background` `--bg` | `#FEFEFE` | Default page background |
| `--color-foreground` `--fg` | `#10100F` | All primary text, rules, large wordmark |
| `--color-dark-surface` `--bg-inverse` | `#10100F` | Dark surfaces (primary buttons) |
| `--color-text-on-dark` `--fg-inverse` | `#F5F4F0` | Text on dark surfaces |
| `--color-text-secondary` `--secondary-text` | `#10100F` at 55% | Secondary/quiet text, placeholders, inactive toggle, unrevealed text |
| `--color-border` | `#10100F` at 12% | Borders, dividers, form underlines, hairline rules |
| `--color-light-surface` `--light-surface` | `#F5F4F0` | Pills, cards, soft surfaces |

Rules:
- **No pure white / pure black** anywhere. See the rule at the top of this document.
- No accent color. Never introduce one in UI chrome.
- Secondary text (55% `#10100F`) is used only for *state* (placeholder, inactive, unrevealed), never decoration.
- Project thumbnails bring in warm reds, oranges, greens, and photo tones; keep the surrounding UI neutral so they pop.

**Background.** The page background is a flat `#FEFEFE` — set on `body` and also rendered once by `src/components/Background.tsx` as a fixed, full-screen, `pointer-events-none`, `-z-10` layer. No gradient, beams, streaks, glows, shadows, blur, or animation.

---

## 3. Typography

### Families
- **Display / Body — neo-grotesque sans** (Helvetica Now / Neue Haas / Inter Display style). Medium weight, uppercase for headings. Tight tracking. Suggested stack: `"Helvetica Now Display", "Neue Haas Grotesk Display", "Inter Tight", "Inter", Arial, sans-serif`.
- **Label / Meta — monospace** (Space Mono / JetBrains Mono / Geist Mono style), uppercase. Suggested stack: `"Geist Mono", "JetBrains Mono", "Space Mono", ui-monospace, monospace`.

### Scale *(estimated, desktop ≈ 1536px wide)*

| Role | Family | Size | Weight | Tracking | Line-height | Case |
|---|---|---|---|---|---|---|
| Footer wordmark | Sans | ~full-width (≈ 380px+, fit to container) | 500 | -0.04em | 0.8 | UPPER |
| Section H2 (SAY BONJOUR, EXPERIENCE GUIDES THE WORK) | Sans | 64–72px | 400–500 | -0.04em | 0.95 | UPPER |
| Statement paragraph (WHAT I DO) | Sans | 56–60px | 400 | -0.04em | 1.0 | UPPER |
| Stat number (10+, 5+, 25+, 100%) | Sans | 40–48px | 400 | -0.03em | 1.0 | — |
| Intro paragraph (under SAY BONJOUR) | Sans | 16–18px | 400 | -0.01em | 1.1 | Sentence |
| Testimonial quote | Sans | 16–18px | 400 | 0 | 1.15 | Sentence |
| Nav, labels, indices, captions, buttons | Mono | 11–12px | 400–500 | 0.02em | 1.2 | UPPER |
| Form values / placeholders | Sans | 16px | 400 | 0 | 1.3 | Sentence |

Typographic rules:
- **Headings are always uppercase with negative tracking** (≈ -3 to -5%) and very tight leading; lines nearly touch.
- **Mono is always uppercase** and small. It never carries sentences, except short footer lines.
- Index numerals are always **bracketed**: `[01]`, `[02]` …
- Project index numbers are **unbracketed three-digit**: `001`, `002` …
- Action links are bracketed with inner spaces: `[ VIEW ALL ]`, `[ SUBMIT ]`, `[ SCROLL DOWN ]`, `[ ABOUT ME ]`, `[ NEXT ]`.
- Counts attach as superscript-style mono: `LATEST` with small `[10]`; nav `WORKS [10]`.

---

## 4. Layout & Grid

### Global
- Full-bleed, edge-to-edge. Outer page gutter ≈ **10–12px** (content hugs the viewport edge).
- **Two-anchor column system** on desktop:
  - **Left column** starts at x = 0 (gutter): section kicker/label (e.g. `CONTACT`, `THE ADVANTAGE`, `FREQUENTLY ASKED QUESTIONS`, `WHAT I DO`).
  - **Main column** starts at ≈ **50% of viewport (x ≈ 760 on 1536)**: headings, list content, form.
  - **Right edge** (x = viewport − gutter): right-aligned secondary label (`INQUIRY`, `EXECUTION`, `CLARITY`, `TESTIMONIAL`).
- This yields a **three-slot header row** for every section: `[left label] — [main heading at 50%] — [right label]`.
- Lists use a **four-slot row**: `[index @ left] — [content @ 50%] — [category/value @ ~80%] — [marker/value @ right edge]`.

### Spacing *(estimated)*
- Section vertical padding: 80–120px top; 100–160px bottom.
- Gap between section header and first list row: ~80–100px.
- List row height: **52–60px** (stats), **60px** (FAQ), larger for service rows (~224px with images).
- Form field vertical rhythm: label → input 8px; field → next label 24–32px.

### Breakpoints (Framer default)
- Desktop ≥ 1200px (as documented)
- Tablet 810–1199px: main column collapses toward ~40–50%, headings scale ~70%
- Mobile < 810px: single column, nav collapses to `[ MENU ]` / `[ CLOSE ]` overlay, headings ~40–48px, list rows stack index + title

---

## 5. Global Components

### 5.1 Header / Navigation
- Fixed top bar, transparent, **no background, no border**.
- **Left:** `TITARVL` wordmark, sans, ~28px, 500, -0.04em, uppercase.
- **Center-left (x ≈ 50%):** stacked links `HOME` / `WORKS [10]` in mono 12px.
- **Center-right (x ≈ 70%):** stacked links `ABOUT` / `CONTACT`.
- **Right:** live clock `HH:MM:SS GMT+N` and `BRATISLAVA, SLOVAKIA`, right-aligned mono. The clock **ticks every second** (JS).
- Mobile: replaced by `[ MENU ]`; overlay lists `HOME`, `WORKS [34]`, `ABOUT`, `CONTACT` plus clock and location; `[ CLOSE ]` dismisses.
- Hover: link inverts or underlines (subtle; keep it ≤ 200ms).

### 5.2 Section Header Pattern
```
LEFT-LABEL (mono)        HEADING (sans, 50% col)        RIGHT-LABEL (mono, right-aligned)
```
Every major section uses this. Left/right labels are semantic tags (e.g. `TRUST` / `TESTIMONIAL`). Headings use scroll-in text reveal or line-mask animation.

### 5.3 Hairline List Row
- 1px rule under each row (full width, edge to edge).
- No hover background. Hover = text shift/underline or row arrow rotation.
- Used for stats, FAQ, services.

### 5.4 Bracket Link / Button
- Text-only, mono, uppercase, wrapped in `[ ]` with inner spaces.
- No fill, no border, no radius.
- Hover: brackets expand or text opacity shift; active: invert.

### 5.5 "Made in Framer" Badge
Platform-injected pill (bottom-right, light-surface `#F5F4F0`, soft shadow, ~8px radius). **Not part of the design** — omit when reimplementing outside Framer.

---

## 6. Page: Home — Section by Section

### 6.1 Hero — "Latest Work / Vol. 01"
- Full-viewport (100vh) over the flat `#FEFEFE` background (no solid fill; the `<Background />` layer shows through).
- **Centerpiece:** a **3D fan/carousel of project cards** rotated in perspective around a central diagonal axis. Cards are portrait (≈ 4:5), with rounded corners ≈ 8–12px, overlapping, fanned like opened book pages. Each card holds a project mockup (phone UI, magazine spread, brand photography). Cards are driven by looping video assets and/or scroll.
- Mixed content: some cards light-surface `#F5F4F0` UI mockups, some dark-surface `#10100F`, some full-bleed photographic.
- A thin diagonal hairline crosses the center as the fan's axis.
- **Left mid:** `LATEST WORK` (mono). **Right mid:** `VOL. 01` (mono).
- **Bottom center:** `[ SCROLL DOWN ]` anchors to `#latest`.
- Kicker above hero: `TITARVL — CREATIVE DIRECTION`.
- Motion: cards rotate / fan open on load, respond to scroll or pointer. Use CSS `perspective: ~1200px` and `transform: rotateY()/rotateZ()` with `transform-style: preserve-3d`.

### 6.2 Latest (Works carousel)
- Heading `LATEST` (sans, ~72px) with tiny `[10]` count superscript. Right: `[ VIEW ALL ]` → `/works`.
- **Horizontal strip of project cards**, bottom-aligned on a shared baseline so image **heights vary** (ragged top edge, flush bottom). Widths ≈ 290px.
- Card = image + caption row: `001` (left, mono) … `PROJECT NAME` (right, mono, uppercase).
- Projects: 001 Chronicae, 002 Arcane Studio, 003 Solara, 004 Edifier® Magazine, 005 Rowan Keats, 006 Big Baby Tape® Magazine, 007 Cartes d'Atelier, 008 Palmira, 009 Scene Pro, 010 Exaла(a).
- Gap between cards ≈ 8–10px. Strip is horizontally scrollable/draggable and bleeds off the right edge.
- Each card links to `/works/{slug}`.
- No card border, shadow, or radius on the image itself (flat, rectangular).

### 6.3 Service(s)
- Heading `SERVICE(S)` top-left (note: parenthetical plural), `[ VIEW ALL ]` top-right → `/about#services`.
- Four rows, each with a hairline rule below:
  | Idx | Title | Sub-label |
  |---|---|---|
  | [01] | WEB DESIGN & DEVELOPMENT | SITE STRUCTURE |
  | [02] | GRAPHIC DESIGN | VISUAL ASSETS |
  | [03] | BRAND IDENTITY | VISUAL SYSTEM |
  | [04] | BRAND GUIDELINES | IDENTITY SYSTEM |
- **Row layout:** left column (0–50%) holds `[NN]` + title at top and sub-label at bottom (mono); right half holds a **horizontal strip of 4 images** (≈ 160px × 200px, with one double-width) bleeding off the right edge.
- Bottom-right of the left column: toggle `IMAGES / DESCRIPTION` — the active state is foreground `#10100F`, the inactive is secondary text (`#10100F` at 55%). Clicking swaps the image strip for descriptive text.
- Row height ≈ 224px.

### 6.4 What I Do (scroll-reveal statement)
- Left label `WHAT I DO`, right label `A SELECTED APPROACH`.
- Giant uppercase paragraph, full width, ~56–60px, tight leading:
  > TITARVL IS A DIGITAL PRACTICE WORKING AT THE INTERSECTION OF BRAND IDENTITY AND WEB, DESIGNING AND BUILDING DISTINCT DIGITAL EXPERIENCES WHERE CONCEPT, TYPOGRAPHY, AND EXECUTION COME TOGETHER AS ONE
- **Scroll-linked character/word reveal:** unrevealed text is secondary text (`#10100F` at 55%), turns to foreground `#10100F` progressively as the user scrolls (visible mid-sentence: "EXECUTI|ON COME TOGETHER AS ONE").
- Followed by a looping muted video, then a meta block: `TITARVL` / `2026` / `BRATISLAVA, SK` / `視覚 文字` (Japanese for "visual / text") + tagline *"Design is the silent ambassador of your brand"* + `[ ABOUT ME ]`.

### 6.5 The Advantage (stats)
- Left `THE ADVANTAGE`, right `EXECUTION`. Heading (main column, two lines): `EXPERIENCE / GUIDES THE WORK`.
- Four hairline rows:
  | Idx | Value | Label (right-aligned, mono) |
  |---|---|---|
  | [01] | 10+ | CLIENT COLLABORATIONS |
  | [02] | 5+ | YEARS IN PRACTICE |
  | [03] | 25+ | DELIVERED WORKS |
  | [04] | 100% | END-TO-END DELIVERY |
- Values sit at the 50% column in sans ~44px; labels at the right edge in mono.
- **Count-up animation** from 0 on viewport entry (~1.2–1.6s, ease-out). Rolling/odometer digits are used on the live site.
- A looped background video and a "SHOW / CASE" typographic block follow.

### 6.6 FAQ — "Clarity Builds the Image"
- Left `FREQUENTLY ASKED QUESTIONS`, right `CLARITY`. Heading: `CLARITY / BUILDS THE IMAGE`.
- Six accordion rows, each with hairline underline:
  `[01]` What services do you offer? — SERVICES
  `[02]` What is your typical turnaround time? — TIMELINE
  `[03]` Do you only work in Framer? — TOOLS
  `[04]` Can you handle both design and development? — WORKFLOW
  `[05]` Do you offer brand strategy as well? — SCOPE
  `[06]` What does your process look like? — PROCESS
- Row columns: index (left) · question (50%, **mono bold-ish uppercase**) · category tag (~80%) · **▼ caret** (right edge).
- Click expands answer inline, caret rotates 180°. Only one open at a time is recommended. Height animation ≈ 300ms ease.

### 6.7 Testimonials — Inverted Section
- **Full dark-surface background** (`#10100F`), text on dark (`#F5F4F0`). Only dark section on the site.
- Left `TRUST`, right `TESTIMONIAL`. Centered heading `VOICES BEHIND THE WORK` (text on dark `#F5F4F0`, ~72px, **centered**, breaking the left-anchored grid on purpose).
- Below: centered quote (~16–18px, max-width ≈ 440px, centered), quotation marks included.
- Avatar (≈ 50px, grayscale portrait, squared or small radius), then `NAME` (mono, text on dark, bold) and `ROLE — COMPANY` (mono, secondary text on dark).
- Right edge: `[ NEXT ]` control cycles testimonials (Maya Lee / Atelier Noir; Julian Carter / Studio Arc). Transition: crossfade or slide, ~400ms.
- All portraits are **grayscale** to hold the monochrome rule.

### 6.8 Contact — "Say Bonjour"
- Left `CONTACT`, right `INQUIRY`. Heading `SAY BONJOUR` (main column).
- Intro paragraph beneath (≈ 17px, narrow measure ≈ 320px).
- A left-hand image stack (portrait photos) sits in the empty left half and swaps on interaction.
- **Form (main column, spans 50% → right edge):**
  - `NAME` — full width
  - `EMAIL` + `PHONE` — two columns, 50/50 with ~16px gap
  - `TOPIC` — select, options: Web Design & Development, Brand Identity, Brand Guidelines, Graphic Design, Other (chevron at right)
  - `YOUR MESSAGE` — textarea, resizable handle shown
  - `[ SUBMIT ]` — bracket button, left-aligned
- **Field style:** label in mono 11–12px uppercase; input is sans 16px; **no box, only a 1px bottom border** in border color (`#10100F` at 12%); placeholder in secondary text (`#10100F` at 55%) (`Jane Smith`, `your@email.com`, `+00 0123456789`, `Select topic`, `Type here…`).
- Focus: border thickens to 2px or label fades in; keep outline off but never remove a visible focus indicator (use the border change).
- Validation: inline, mono error text under the field, foreground `#10100F` (no red).

### 6.9 Footer
- **Giant wordmark** `TITARVL` spanning the full viewport width, foreground `#10100F`, bottom-anchored, ~380px+ cap height, tightest tracking; letters fill edge to edge.
- Above wordmark, two columns at x = 50% and ~74%:
  - `CONTACT` / `FOR ALL ENQUIRIES PLEASE CONTACT INFO@TITARVL.COM` (mono)
- Below wordmark, overlapping its baseline row:
  - Left: `TITARVL`
  - 50%: `© 2025 / ALL RIGHTS RESERVED`
  - ~74%: `COOKIES POLICY / PRIVACY POLICY`
  - Right: `INSTAGRAM / BEHANCE`
- All mono, 11–12px, uppercase. The wordmark may be implemented as an SVG that scales to container width.

---

## 7. Imagery

- **Aspect ratios:** portrait 4:5 (1080×1350) is the dominant card; landscape 2:1 (2160×1350) for wide service frames; tall 4:5 / 2:3 for contact stack.
- **Treatment:** high-quality device mockups (phone UI on studio surfaces), editorial magazine spreads, product still lifes, analog-feeling photography. Cool neutral grays contrasted with saturated red/orange accents inside the imagery.
- **Edges:** square, no borders, no shadows (except the hero fan where the cards have natural depth).
- **Video:** muted, looped, autoplay, `playsinline`; used in hero cards and section backgrounds. Provide poster images.
- **Testimonial portraits:** grayscale only.

---

## 8. Motion & Interaction

| Element | Behavior | Suggested spec |
|---|---|---|
| Hero fan | 3D rotate/fan on load; subtle scroll or pointer parallax | 1.2s ease-out-expo intro; `perspective: 1200px` |
| Live clock | Ticks each second with timezone label | JS `setInterval(1000)` |
| Headings | Line-mask reveal (translateY 100% → 0 inside overflow hidden) | 700ms, `cubic-bezier(.2,.7,.1,1)`, stagger 60ms |
| Statement paragraph | Scroll-scrubbed color reveal gray → black | Per-character, tied to scroll progress |
| Stats | Count-up / odometer on enter | 1.4s, ease-out, trigger once at 30% visible |
| Latest strip | Drag / wheel horizontal scroll; hover lifts image slightly or shows cursor label | Cursor: custom or `grab` |
| Service rows | Toggle IMAGES ⇄ DESCRIPTION crossfade; images may auto-slide horizontally | 300ms |
| FAQ | Accordion expand with caret rotate | 300ms ease |
| Testimonials | `[ NEXT ]` crossfade/slide | 400ms |
| Links/buttons | Opacity or underline hover | ≤ 200ms |
| Page transitions | Fast fade or wipe between routes | 400–600ms |

Respect `prefers-reduced-motion`: disable the fan rotation, count-ups, and scrubbed reveals; show final states.

---

## 9. Site Map & Content Model

- `/` Home
- `/works` Works index (nav shows `[10]` here, mobile overlay shows `[34]`)
- `/works/{slug}` Case study (CMS collection: title, index, hero media, gallery, services tags)
- `/about` About (includes `#services` anchor)
- `/contact` Contact (form)
- `/cookies-policy`, `/privacy-policy`
- External: Instagram, Behance

Content collections: **Works** (10 items), **Testimonials** (2), **FAQ** (6), **Services** (4).

---

## 10. Design Tokens (CSS)

```css
:root {
  /* color */
  --bg: #FEFEFE;
  --fg: #10100F;
  --secondary-text: rgba(16, 16, 15, 0.55);
  --bg-inverse: #10100F;
  --fg-inverse: #F5F4F0;
  --light-surface: #F5F4F0;
  --border: #10100F at 12%;
  --rule: 1px solid rgba(16, 16, 15, 0.12);

  /* type */
  --font-sans: "Helvetica Now Display", "Neue Haas Grotesk Display", "Inter Tight", Inter, Arial, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", "Space Mono", ui-monospace, monospace;

  --fs-wordmark: clamp(120px, 24.5vw, 420px);
  --fs-h2: clamp(40px, 4.6vw, 72px);
  --fs-statement: clamp(32px, 3.8vw, 60px);
  --fs-stat: clamp(28px, 3vw, 48px);
  --fs-body: 17px;
  --fs-mono: 12px;

  --track-display: -0.04em;
  --track-mono: 0.02em;
  --lh-display: 0.95;

  /* layout */
  --gutter: 11px;
  --col-main: 50%;
  --row-h: 56px;

  /* motion */
  --ease-out: cubic-bezier(.2, .7, .1, 1);
  --dur-fast: 200ms;
  --dur-base: 400ms;
  --dur-slow: 800ms;
}

body { background: var(--bg); color: var(--fg); font-family: var(--font-sans); }
.display { font-family: var(--font-sans); text-transform: uppercase; letter-spacing: var(--track-display); line-height: var(--lh-display); font-weight: 500; }
.mono { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: var(--track-mono); font-size: var(--fs-mono); }
.row { display: grid; grid-template-columns: 50% 1fr auto; border-bottom: var(--rule); min-height: var(--row-h); align-items: center; }
.field { border: 0; border-bottom: var(--rule); background: transparent; padding: 8px 0; font: 16px var(--font-sans); outline: none; }
.field:focus { border-bottom-width: 2px; }
.field::placeholder { color: var(--secondary-text); }
```

---

## 11. Accessibility Notes

- Primary text on the background has strong contrast (`#10100F` on `#FEFEFE`); secondary text (55% `#10100F`) is ~3:1, so **use only for placeholders and non-essential states**, and raise opacity where text must be read.
- Small mono at 11–12px: keep ≥ 12px and sufficient line-height.
- All-caps long paragraphs reduce readability; keep them to short statements.
- Bracket links must keep real `<a>`/`<button>` semantics and visible focus states.
- Accordion: `button` with `aria-expanded`, `aria-controls`.
- Carousels / video: pause control, `prefers-reduced-motion` support, alt text on all imagery.
- Live clock: `aria-hidden` or `role="timer"` with `aria-live="off"` so screen readers aren't spammed.

---

## 12. Do / Don't

**Do**
- Keep every heading uppercase, tight and large.
- Use mono only for labels, indices, and utilities.
- Let hairlines and whitespace do the structuring work.
- Keep imagery edge-sharp and unframed.
- Anchor content to the 0 / 50% / right-edge columns.

**Don't**
- Add accent colors, gradients, shadows, or rounded buttons.
- Use sentence-case headings or loose letter-spacing.
- Box inputs or cards with borders.
- Mix more than two typefaces.
- Center content except the testimonial block (the intentional exception).

---

## 13. Build Notes (if re-implementing)

- **Framer:** the original; sections map to Stacks with a 2-column Grid; use Variants for accordion/toggle; Framer's built-in Appear/Scroll Transform effects cover most motion.
- **Code stack suggestion:** Next.js + Tailwind + Framer Motion (or GSAP + ScrollTrigger for the scrubbed text reveal and Lenis for smooth scroll); `three.js` or CSS 3D for the hero fan.
- Keep the wordmark as an SVG for exact edge-to-edge fit.
- Placeholder text in the template (names, companies, `info@titarvl.com`) should be replaced with real content.
