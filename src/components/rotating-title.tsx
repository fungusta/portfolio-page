'use client'

import { useEffect, useState, type ReactElement } from 'react'

interface RotatingTitleProps {
  words: string[]
  intervalMs?: number
  className?: string
}

// Embossed lettering lit like the rest of the page (follows --lx / --ly from <CursorLight />)
const EMBOSS =
  '[text-shadow:calc(var(--lx)*2px)_calc(var(--ly)*2px)_4px_rgb(var(--neu-dark)/0.6),calc(var(--lx)*-1px)_calc(var(--ly)*-1px)_1px_rgb(var(--neu-light))]'

// Cycles through words: the current one slides up and fades out as the next slides up into place.
// All words share one grid cell, so the slot is always as wide as the longest word (no layout shift).
export const RotatingTitle = ({ words, intervalMs = 2800, className = '' }: RotatingTitleProps): ReactElement => {
  const [{ current, previous }, setSlot] = useState<{ current: number; previous: number | null }>({
    current: 0,
    previous: null,
  })

  useEffect(() => {
    if (words.length <= 1) return

    const timer = setInterval(() => {
      setSlot((slot) => ({ current: (slot.current + 1) % words.length, previous: slot.current }))
    }, intervalMs)

    return () => clearInterval(timer)
  }, [words.length, intervalMs])

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span className="inline-grid" aria-hidden="true">
        {words.map((word, index) => {
          const isCurrent = index === current
          const isLeaving = index === previous

          // The first word is simply shown on load; motion starts with the first change
          const motionClass = isCurrent
            ? previous === null ? '' : 'motion-safe:animate-word-in'
            : isLeaving
              ? 'motion-safe:animate-word-out motion-reduce:invisible'
              : 'invisible'

          return (
            <span key={word} className={`col-start-1 row-start-1 whitespace-nowrap ${EMBOSS} ${motionClass}`}>
              {word}
            </span>
          )
        })}
      </span>
    </span>
  )
}
