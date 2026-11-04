import type { ReactElement } from "react"
import { SiteFrame } from "@/components/site-frame"
import { ExperienceExplorer } from "@/components/experience-explorer"
import { RevealSection } from "@/components/ui/reveal-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FADE_UP } from "@/constants/motion"
import { pageMetadata } from "@/constants/site"

export const metadata = pageMetadata(
  "Experience | Peter Fung",
  "Where Peter Fung has worked, from game studio internships to AI software engineering at NCS.",
  "/experience"
)

const ExperiencePage = (): ReactElement => (
  <SiteFrame>
    {/* At least one screen tall, with the roles stretching to fill it, so Contact starts below the fold */}
    <RevealSection className="flex min-h-[100svh] flex-col px-4 sm:px-12 md:px-24 lg:px-28 xl:px-36 pt-28 sm:pt-36 pb-16">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <SectionHeading
          title="Where I've Worked"
          isPageTitle
          className="mb-6 sm:mb-8"
        />
        <div className={`flex flex-1 flex-col ${FADE_UP} [animation-delay:150ms]`}>
          <ExperienceExplorer />
        </div>
      </div>
    </RevealSection>
  </SiteFrame>
)

export default ExperiencePage
