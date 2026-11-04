'use client'

import { useEffect } from 'react'

// How far the light can swing either side of its resting top-left position.
// 1 is the resting value; the range stays positive so highlights never flip sides.
const LIGHT_SWING = 0.8

// Moves the page's light source with the pointer by updating --lx / --ly,
// which every neumorphic shadow in tailwind.config.ts multiplies its offsets by.
export const CursorLight = (): null => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !hasFinePointer) return

    const root = document.documentElement
    let frame = 0

    const handlePointerMove = (e: PointerEvent) => {
      if (frame) return

      frame = requestAnimationFrame(() => {
        frame = 0
        const nx = e.clientX / window.innerWidth
        const ny = e.clientY / window.innerHeight
        // Pointer in the top-left = lamp far top-left = longer shadows down-right
        root.style.setProperty('--lx', (1 + (0.5 - nx) * 2 * LIGHT_SWING).toFixed(3))
        root.style.setProperty('--ly', (1 + (0.5 - ny) * 2 * LIGHT_SWING).toFixed(3))
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(frame)
      root.style.removeProperty('--lx')
      root.style.removeProperty('--ly')
    }
  }, [])

  return null
}
