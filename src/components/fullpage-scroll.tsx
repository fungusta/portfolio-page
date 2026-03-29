'use client'

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react'

interface FullpageScrollProps {
  children: ReactNode[]
  sectionLabels?: string[]
}

const SCROLL_LOCK_MS = 1000
const TRACKER_IDLE_MS = 900
const WHEEL_GESTURE_IDLE_MS = 180
const WHEEL_DELTA_THRESHOLD = 8

export function FullpageScroll({ children, sectionLabels }: FullpageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isTrackerVisible, setIsTrackerVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchLocked = useRef(false)
  const wheelGestureLocked = useRef(false)
  const scrollLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const trackerTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wheelGestureTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentSectionRef = useRef(0)
  const isScrollingRef = useRef(false)

  const totalSections = children.length
  const labels = sectionLabels && sectionLabels.length === totalSections
    ? sectionLabels
    : Array.from({ length: totalSections }, (_, index) => `Section ${index + 1}`)

  const showTracker = useCallback(() => {
    setIsTrackerVisible(true)

    if (trackerTimeoutRef.current) {
      clearTimeout(trackerTimeoutRef.current)
    }

    trackerTimeoutRef.current = setTimeout(() => {
      setIsTrackerVisible(false)
      trackerTimeoutRef.current = null
    }, TRACKER_IDLE_MS)
  }, [])

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isScrollingRef.current) return

    showTracker()

    if (scrollLockTimeoutRef.current) {
      clearTimeout(scrollLockTimeoutRef.current)
    }

    isScrollingRef.current = true
    setIsScrolling(true)
    setCurrentSection(index)

    // Keep the scroll locked until the page transition has fully completed.
    scrollLockTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
      touchLocked.current = false
      isScrollingRef.current = false
      scrollLockTimeoutRef.current = null
    }, SCROLL_LOCK_MS)
  }, [showTracker, totalSections])

  useEffect(() => {
    currentSectionRef.current = currentSection
  }, [currentSection])

  useEffect(() => {
    isScrollingRef.current = isScrolling
  }, [isScrolling])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      showTracker()

      if (wheelGestureTimeoutRef.current) {
        clearTimeout(wheelGestureTimeoutRef.current)
      }

      wheelGestureTimeoutRef.current = setTimeout(() => {
        wheelGestureLocked.current = false
        wheelGestureTimeoutRef.current = null
      }, WHEEL_GESTURE_IDLE_MS)

      if (Math.abs(e.deltaY) < WHEEL_DELTA_THRESHOLD) return
      if (isScrollingRef.current || wheelGestureLocked.current) return

      wheelGestureLocked.current = true

      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSectionRef.current + 1)
      } else {
        // Scroll up
        scrollToSection(currentSectionRef.current - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      showTracker()

      if (isScrollingRef.current) return

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          scrollToSection(currentSectionRef.current + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          scrollToSection(currentSectionRef.current - 1)
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
      if (isScrollingRef.current) return

      showTracker()
      touchStartY.current = e.touches[0].clientY
      touchLocked.current = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      showTracker()

      if (isScrollingRef.current || touchLocked.current) return

      const touchEndY = e.touches[0].clientY
      const diff = touchStartY.current - touchEndY

      // Minimum swipe distance
      if (Math.abs(diff) > 50) {
        touchLocked.current = true

        if (diff > 0) {
          // Swipe up - scroll down
          scrollToSection(currentSectionRef.current + 1)
        } else {
          // Swipe down - scroll up
          scrollToSection(currentSectionRef.current - 1)
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
  }, [showTracker, totalSections, scrollToSection])

  useEffect(() => {
    return () => {
      if (scrollLockTimeoutRef.current) {
        clearTimeout(scrollLockTimeoutRef.current)
      }
      if (trackerTimeoutRef.current) {
        clearTimeout(trackerTimeoutRef.current)
      }
      if (wheelGestureTimeoutRef.current) {
        clearTimeout(wheelGestureTimeoutRef.current)
      }
    }
  }, [])

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

      <nav
        aria-label="Page sections"
        className={`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 md:opacity-100 md:pointer-events-auto ${
          isTrackerVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-end gap-2 rounded-2xl bg-white/35 px-3 py-3 backdrop-blur-sm">
          {labels.map((label, index) => (
            <button
              key={label}
              onClick={() => scrollToSection(index)}
              className={`text-right text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
                index === currentSection
                  ? 'text-secondary'
                  : 'text-primary/30 hover:text-primary/55'
              }`}
              aria-current={index === currentSection ? 'page' : undefined}
              aria-label={`Go to ${label}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
