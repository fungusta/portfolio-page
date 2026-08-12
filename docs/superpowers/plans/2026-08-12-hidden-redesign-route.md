# Hidden Redesign Route Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an unlisted `/new` route containing an empty full-viewport canvas while leaving the existing `/` portfolio unchanged.

**Architecture:** Add one independent Next.js App Router page under `src/app/new`. It inherits the existing root layout and global styles but has no dependency on the current full-page portfolio component.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS

## Global Constraints

- `/` must continue rendering the existing portfolio without visible changes.
- `/new` must not be linked from the existing portfolio.
- `/new` is unlisted but not authenticated.
- Use Tailwind utilities only.

---

### Task 1: Add the empty redesign route

**Files:**
- Create: `src/app/new/page.tsx`

**Interfaces:**
- Consumes: The existing `src/app/layout.tsx` App Router layout and `src/app/globals.css` styles.
- Produces: The statically exported `/new` route.

- [x] **Step 1: Establish the failing route check**

Run `npm run build` and confirm the static route list does not contain `/new`.

- [x] **Step 2: Add the minimal page**

```tsx
const NewPortfolioPage = (): React.JSX.Element => {
  return <main className="min-h-screen" />
}

export default NewPortfolioPage
```

- [x] **Step 3: Run lint verification**

Run `npm run lint`. Expected: exit code 0. If the repository's lint script is incompatible with the installed Next.js version, record that tooling issue and use ESLint directly.

- [x] **Step 4: Run production verification**

Run `npx next build`. Expected: exit code 0, with both `/` and `/new` in the static route list and `out/new.html` present. The repository's `npm run build` wrapper additionally calls the Unix-only `cp` command, so it does not complete on Windows even when Next.js succeeds.

- [x] **Step 5: Confirm the route remains unlisted**

Run `rg -n 'href=[{]?[''\"]\/new' src`. Expected: no matches.

- [x] **Step 6: Commit**

```bash
git add src/app/new/page.tsx docs/superpowers/plans/2026-08-12-hidden-redesign-route.md
git commit -m "feat: add hidden redesign route"
```
