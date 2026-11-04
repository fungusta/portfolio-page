import type { ReactElement, ReactNode } from "react"
import { CursorLight } from "@/components/cursor-light"
import { ContactSection } from "@/components/contact-section"
import { SiteNav } from "@/components/site-nav"

interface SiteFrameProps {
  // Decorative shapes spanning the whole page, painted behind all content
  backdrop?: ReactNode
  children: ReactNode
}

// Shared chrome for the portfolio pages: top nav, cursor-driven light and the contact block.
export const SiteFrame = ({ backdrop, children }: SiteFrameProps): ReactElement => (
  <>
    <CursorLight />
    <SiteNav />
    {/* No z-index on this wrapper, so the -z-10 backdrop sorts behind every section */}
    <div className="relative">
      {backdrop ? (
        <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block" aria-hidden="true">
          {backdrop}
        </div>
      ) : null}
      <main>{children}</main>
      <ContactSection />
    </div>
  </>
)
