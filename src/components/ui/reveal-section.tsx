'use client'

import { useEffect, useRef, useState, type ReactElement, type ReactNode } from 'react'

interface RevealSectionProps {
  className?: string
  ariaLabel?: string
  children: ReactNode
}

// A page section that flips data-active once it scrolls into view, which starts the
// RISE / FADE_UP animations (see constants/motion.ts) on everything inside it.
export const RevealSection = ({ className = '', ariaLabel, children }: RevealSectionProps): ReactElement => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsRevealed(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`group/section ${className}`} data-active={isRevealed} aria-label={ariaLabel}>
      {children}
    </section>
  )
}
