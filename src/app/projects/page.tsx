import type { ReactElement } from "react"
import { SiteFrame } from "@/components/site-frame"
import { ProjectShowcaseCard } from "@/components/project-showcase-card"
import { RevealSection } from "@/components/ui/reveal-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { RISE } from "@/constants/motion"
import { projects } from "@/constants/projects"
import { pageMetadata } from "@/constants/site"

export const metadata = pageMetadata(
  "Projects | Peter Fung",
  "Apps Peter Fung has designed, built and shipped, from AI receipt splitting to recipe generation.",
  "/projects"
)

// Cards rise in one after another; listed in full so Tailwind can see each class
const cardDelays = [
  "[animation-delay:150ms]",
  "[animation-delay:260ms]",
  "[animation-delay:370ms]",
  "[animation-delay:480ms]",
  "[animation-delay:590ms]",
]

const ProjectsPage = (): ReactElement => (
  <SiteFrame>
    <RevealSection className="px-4 sm:px-12 md:px-24 lg:px-28 xl:px-36 pt-28 sm:pt-36 pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Projects"
          description="Things I've designed, built and shipped."
          isPageTitle
          className="mb-8 sm:mb-10"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.title}
              project={project}
              className={`${RISE} ${cardDelays[index] ?? ""}`}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  </SiteFrame>
)

export default ProjectsPage
