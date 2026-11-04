import type { ReactElement } from "react"
import { FADE_UP } from "@/constants/motion"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  // Each page's first heading is its h1
  isPageTitle?: boolean
  className?: string
}

// Section title with optional lede. Fades in when its RevealSection scrolls into view.
export const SectionHeading = ({
  title,
  description,
  centered = false,
  isPageTitle = false,
  className = "",
}: SectionHeadingProps): ReactElement => {
  const Heading = isPageTitle ? "h1" : "h2"

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <Heading className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary ${FADE_UP}`}>
        {title}
      </Heading>
      {description ? (
        <p className={`mt-3 text-base sm:text-lg text-ink-soft leading-relaxed ${FADE_UP} [animation-delay:80ms]`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
