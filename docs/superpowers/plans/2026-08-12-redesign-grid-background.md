# Redesign Grid Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the empty `/new` redesign canvas a clean black square grid on white.

**Architecture:** Apply two CSS linear gradients directly through Tailwind arbitrary-value utilities on the existing page-level `main` element. No global styling or legacy portfolio code changes.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS

## Global Constraints

- Change only the `/new` canvas appearance.
- Use a white background, one-pixel black grid lines, and 32-pixel spacing.
- Use Tailwind utilities only.

---

### Task 1: Style the redesign canvas

**Files:**
- Modify: `src/app/new/page.tsx`

- [x] **Step 1: Confirm the current page has no grid utilities**

Run `rg -n "linear-gradient|size:32px" src/app/new/page.tsx`. Expected: no matches.

- [x] **Step 2: Apply the grid background**

Set the `main` class to `min-h-screen bg-white bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]`.

- [x] **Step 3: Verify**

Run `npm run lint` and `npx next build`. Confirm `/new` remains in the static route list.
