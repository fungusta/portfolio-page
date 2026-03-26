'use client'

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react'

interface FullpageScrollProps {
  children: ReactNode[]
}

export function FullpageScroll({ children }: FullpageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)

  const totalSections = children.length

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isScrolling) return

    setIsScrolling(true)
    setCurrentSection(index)

    // Allow scrolling again after animation completes
    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }, [totalSections, isScrolling])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSection + 1)
      } else {
        // Scroll up
        scrollToSection(currentSection - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          scrollToSection(currentSection + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          scrollToSection(currentSection - 1)
          break
        case 'Home':
          e.preventDefault()
          scrollToSection(0)
          break
        case 'End':
          e.preventDefault()
          scrollToSection(totalSections - 1)
          break
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return

      const touchEndY = e.touches[0].clientY
      const diff = touchStartY.current - touchEndY

      // Minimum swipe distance
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe up - scroll down
          scrollToSection(currentSection + 1)
        } else {
          // Swipe down - scroll up
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchmove', handleTouchMove, { passive: true })
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSection, isScrolling, totalSections, scrollToSection])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${totalSections * 100}vh`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="h-screen w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Section indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'bg-secondary scale-125'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
