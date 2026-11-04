import type { ReactElement } from "react"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
// import { EducationCard } from "@/components/education-card"
import { ProfileImageCarousel } from "@/components/profile-image-carousel"
import { HomeBackdrop } from "@/components/home-backdrop"
import { RotatingTitle } from "@/components/rotating-title"
import { SiteFrame } from "@/components/site-frame"
import { RevealSection } from "@/components/ui/reveal-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FADE_UP, RISE } from "@/constants/motion"

// The hero's rotating role; the first word is shown on load, so keep the job title first
const heroRoles = ["Software Engineer", "AI Native", "Problem Solver", "Tinkerer", "Fan of good UIs"]

const exploreLinks = [
  {
    href: "/projects",
    title: "Projects",
    delay: "[animation-delay:350ms]",
  },
  {
    href: "/experience",
    title: "Experience",
    delay: "[animation-delay:450ms]",
  },
]

const HomePage = (): ReactElement => (
  <SiteFrame backdrop={<HomeBackdrop />}>
    <RevealSection className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 pt-24 pb-16 text-center">
      <div className={`relative mb-8 rounded-full neu-well p-3 sm:p-4 ${FADE_UP}`}>
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 overflow-hidden rounded-full container-neumorphic-outset p-0">
          <ProfileImageCarousel
            images={["images/headshot.jpg", "images/casualshot.jpg", "images/drone.jpeg"]}
            interval={3000}
            alt="Peter Fung profile photo"
          />
        </div>
      </div>

      <h1 className={`relative text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-secondary ${FADE_UP} [animation-delay:150ms]`}>
        Peter Fung
      </h1>
      <h2 className={`relative mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-primary ${FADE_UP} [animation-delay:230ms]`}>
        <RotatingTitle words={heroRoles} />
      </h2>
      <p className={`relative mt-3 max-w-xl text-base sm:text-lg md:text-xl text-ink-soft ${FADE_UP} [animation-delay:300ms]`}>
        I love to build fun and interesting apps.
      </p>

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className={`neu-button neu-pressable inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold text-secondary ${RISE} [animation-delay:420ms]`}
          tabIndex={0}
        >
          See my work
          <ArrowRight size={18} />
        </Link>
        <a
          href="/PeterJosephFungYuRen_Resume.pdf"
          download
          className={`neu-button neu-pressable inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold text-secondary ${RISE} [animation-delay:500ms]`}
          aria-label="Download resume"
          tabIndex={0}
        >
          Resume
          <Download size={18} />
        </a>
      </div>
    </RevealSection>

    <RevealSection className="px-4 sm:px-12 md:px-24 lg:px-28 xl:px-36 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading title="About Me" className="mb-4 sm:mb-5" />
        <p className={`mb-6 sm:mb-9 max-w-3xl text-base sm:text-lg text-ink-soft leading-relaxed ${FADE_UP} [animation-delay:60ms]`}>
          I&apos;m very interested in how to improve applications to help users use them, understand them and enjoy them more.
        </p>
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <div className={`container-neumorphic-inset rounded-3xl p-5 sm:p-7 ${FADE_UP} [animation-delay:120ms]`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">Software Engineering</h3>
            <p className="mt-2 text-base sm:text-lg text-ink-soft leading-relaxed">
              Experienced in production-level applications, implementing platforms, features and AI agent integrations.
            </p>
            <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed">
              Focusing on end-to-end implementations, from requirements to production deployment.
            </p>
          </div>
          <div className={`container-neumorphic-inset rounded-3xl p-5 sm:p-7 ${FADE_UP} [animation-delay:220ms]`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">AI Native</h3>
            <p className="mt-2 text-base sm:text-lg text-ink-soft leading-relaxed">
              I use AI in my daily life, from handling my life and tasks to my work. I have developed workflows to better
              communicate with AI and work side by side with it to be more effective.
            </p>
            <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed">
              I&apos;m always trying out new AI tools and keeping the ones that earn a place in my workflow.
            </p>
          </div>
        </div>

        {/* Raised = clickable, inset = information: the links stand out from the cards above */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {exploreLinks.map(({ href, title, delay }) => (
            <Link
              key={href}
              href={href}
              className={`group container-neumorphic-outset neu-pressable flex items-center justify-between gap-6 rounded-3xl p-5 sm:p-7 ${RISE} ${delay}`}
              aria-label={`See ${title.toLowerCase()}`}
              tabIndex={0}
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">{title}</span>
              <ArrowRight
                size={22}
                className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </RevealSection>
  </SiteFrame>
)

export default HomePage
