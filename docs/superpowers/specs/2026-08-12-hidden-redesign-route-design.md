# Hidden Redesign Route Design

## Goal

Preserve the existing portfolio as the public homepage while providing a clean, empty page where the replacement portfolio can be designed independently.

## Routes

- `/` continues to render the existing portfolio without visible changes.
- `/new` renders an empty, full-viewport redesign canvas.
- The existing portfolio does not link to `/new`, so the redesign is not exposed through the public interface.

The `/new` route is an unlisted preview, not an authenticated private page. Someone who knows or guesses the URL can still visit it.

## Structure

The existing homepage remains in `src/app/page.tsx`. A separate App Router page at `src/app/new/page.tsx` owns the redesign canvas. Keeping the routes independent prevents unfinished redesign work from affecting the current portfolio and avoids adding client-side toggle state to the existing page.

The initial redesign page contains only an empty `main` element sized to the viewport. Its design canvas uses a subtly warm off-white (`#fafaf9`) background with crisp one-pixel black grid lines spaced 32 pixels apart. It introduces no copy, controls, or placeholder layout.

At the center of the canvas, an empty 16:9 planning card provides a boundary for arranging future portfolio elements. Its solid fill matches the page background, masking the grid within the card. A three-pixel black outline uses long, rounded dashes and a 32-pixel corner radius. The card contains no placeholder text or interactive behavior.

## Behavior and Accessibility

The new page has no interactive elements, so it requires no keyboard handlers or ARIA labels. It inherits the application's root layout and global styling. The current homepage behavior, full-page scrolling, and navigation remain unchanged.

## Verification

- Run linting and the production build.
- Confirm `/` still builds from the existing homepage.
- Confirm `/new` is emitted by the static export.
- Confirm there is no link to `/new` in the existing portfolio interface.

## Publishing Later

When the redesign is ready, publishing it will be a separate deliberate change that replaces the `/` route. This initial change does not automate or enable that switchover.
