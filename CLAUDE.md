# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production (also copies CNAME to out/)
npm run lint       # Run ESLint
npm run deploy     # Build + deploy to GitHub Pages (gh-pages → out/)
```

No test suite is configured.

## Architecture

**Stack:** React 19 + Next.js 15 (App Router) + TypeScript + Tailwind CSS. Deployed as a fully static export (`output: 'export'`) to GitHub Pages at peterjosephfung.com.

**Pages:** `/` (Hero, About Me, links to the other pages), `/projects` (featured + archived projects) and `/experience` (work timeline). Each page wraps its content in `SiteFrame` (`src/components/site-frame.tsx`), which adds the floating top nav, the cursor-driven light and the shared Contact section.

**Scrolling:** Plain native browser scrolling with no snapping or scroll-jacking (the owner tried both and prefers free scroll). Sections are `RevealSection`s (`src/components/ui/reveal-section.tsx`), which set `data-active` once scrolled into view; the `RISE` / `FADE_UP` class strings in `src/constants/motion.ts` animate children off that. Keep those strings in a non-`'use client'` module so server components can import them.

**Data layer (`src/constants/`):** Portfolio content lives here as typed constants: `projects.ts` (featured and archived projects), `work-experience.ts` (timeline roles), `resources.ts` (older content), `site.ts` (per-page metadata helper).

**Neumorphic design system:** Custom Tailwind plugin in `tailwind.config.ts` defines `.container-neumorphic-outset` / `.container-neumorphic-inset` plus `.neu-well`, `.neu-button`, `.neu-chip`, `.neu-pressed` and `.neu-pressable` (sinks in while held). Shadow offsets multiply `--lx` / `--ly`, which `src/components/cursor-light.tsx` moves with the pointer. The surface is `#ECEAF4`; primary is `#7F71B9`, secondary `#201A72`, body text `ink-soft` `#574C8F`. Keep it minimal: no accent glows or badges.

**`OutdentCard` (`src/components/ui/card.tsx`):** Expandable card component — click handling distinguishes link clicks from expansion triggers. Uses `max-height` CSS transition for smooth expand/collapse.

## Code Conventions (from .cursorrules)

- **Tailwind only** — no custom CSS or inline styles
- Use early returns for readability
- All interactive elements need `tabIndex`, `aria-label`, and `onKeyDown` handlers (accessibility)
- Name event handlers with `handle*` prefix
- Declare components as `const` arrow functions with explicit TypeScript type annotations
- All components that use browser APIs or React hooks must have `'use client'` at the top
