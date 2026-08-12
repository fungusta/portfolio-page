# Centered Planning Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved empty planning card to the center of `/new`.

**Architecture:** Keep the canvas page server-rendered and place a semantic section at its center. Use an absolutely positioned SVG rounded rectangle for precise long rounded dashes while Tailwind controls all CSS styling.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, inline SVG markup

## Global Constraints

- The card must remain empty and non-interactive.
- Its fill must match the page background (`#fafaf9`).
- It must use a 16:9 aspect ratio, long rounded black dashes, and curved corners.
- It must be centered and responsive.
- The former portfolio at `/` must remain unchanged.

---

### Task 1: Add the planning card

**Files:**
- Modify: `src/app/new/page.tsx`

- [x] **Step 1: Confirm the card is absent**

Run `rg -n "Portfolio card canvas|stroke-dasharray" src/app/new/page.tsx`. Expected: no matches.

- [x] **Step 2: Add the centered card**

Wrap the canvas in grid centering utilities. Add an empty, responsive 16:9 section with a matching background and an accessible label. Add a decorative SVG rounded rectangle using a `20 11` dash pattern, rounded line caps, and a three-pixel black stroke.

- [x] **Step 3: Verify without colliding with the running dev server**

Run `npm run lint`, request `http://localhost:3000/new`, and confirm HTTP 200 plus the rendered card label and dash class. Do not run `next build` while `next dev` is active because both write to `.next`.
