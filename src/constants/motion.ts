// Entrance animations, played once when a <RevealSection> scrolls into view.
// Content is hidden until then; visitors who prefer reduced motion just see it.
// Raised surfaces extrude out of the page; everything else fades up.
export const RISE =
  "motion-safe:group-data-[active=false]/section:opacity-0 motion-safe:group-data-[active=true]/section:animate-neu-rise"
export const FADE_UP =
  "motion-safe:group-data-[active=false]/section:opacity-0 motion-safe:group-data-[active=true]/section:animate-fade-up"
