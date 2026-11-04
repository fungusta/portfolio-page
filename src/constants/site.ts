import type { Metadata } from "next"

const SITE_URL = "https://www.peterjosephfung.com"
const PREVIEW_IMAGE = {
  url: "/images/link-preview.png",
  width: 1200,
  height: 630,
  alt: "Peter Fung portfolio preview",
}

// Page-level metadata. Next replaces openGraph/twitter wholesale per page,
// so each page restates the shared preview image alongside its own title.
export const pageMetadata = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: "Peter Fung",
    images: [PREVIEW_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [PREVIEW_IMAGE.url],
  },
})
