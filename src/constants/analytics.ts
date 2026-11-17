// Umami Cloud analytics: cookieless page views plus click events read off data attributes.
// Kept out of 'use client' so server components can spread trackClick() onto their links.

// Public by design (it ships in the HTML), so it lives in the repo and every build has it
export const UMAMI_WEBSITE_ID = "74baad91-2bef-483d-bf34-4d78c1c84ef8"

export const UMAMI_SCRIPT_SRC = "https://cloud.umami.is/script.js"

// Only these hosts are counted, so local dev visits never show up in the stats
export const UMAMI_DOMAINS = "peterjosephfung.com,www.peterjosephfung.com"

export type TrackedEvent = "resume-download" | "contact-click" | "project-click" | "company-click"

type EventAttributes = Record<`data-umami-event${string}`, string>

// Umami listens for clicks on any element carrying data-umami-event and sends each
// data-umami-event-<key> attribute along as an event property.
export const trackClick = (event: TrackedEvent, props: Record<string, string> = {}): EventAttributes => {
  const attributes: EventAttributes = { "data-umami-event": event }

  Object.entries(props).forEach(([key, value]) => {
    attributes[`data-umami-event-${key}`] = value
  })

  return attributes
}
