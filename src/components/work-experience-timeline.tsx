'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import { workExperiences, WorkExperience } from '@/constants/work-experience'

type OverlayState = 'closed' | 'opening' | 'open' | 'closing'

// Oldest → newest, top → bottom
const orderedJobs = [...workExperiences].reverse()

// ViewBox 1000 × 540 — 3 horizontal rows with 2 smooth semicircular U-turns.
// Rows at y=100, 280, 460 (gap=180). Arc radius = 90 (half the gap).
// Right U-turn at x=875 (sweep=1, clockwise → goes right), left U-turn at x=125 (sweep=0).
const SNAKE_PATH =
  'M 60 100 L 875 100 A 90 90 0 0 1 875 280 L 125 280 A 90 90 0 0 0 125 460 L 940 460'

const ANCHORS: [number, number][] = [
  [328, 100],
  [676, 100],
  [622, 280],
  [378, 280],
  [340, 460],
  [690, 460],
]

// Full teardrop pin with its tip anchored at (0, 0) so it sits exactly on the timeline.
// The logo sits inside the circular head, centered at (0, -34).
const PIN = 'M 0 0 C -7 -6, -24 -15, -24 -34 A 24 24 0 1 1 24 -34 C 24 -15, 7 -6, 0 0 Z'

function getStartDateLabel(duration: string) {
  return duration.split(' - ')[0]
}

export function WorkExperienceTimeline() {
  const [activeJob,    setActiveJob]    = useState<WorkExperience | null>(null)
  const [overlayState, setOverlayState] = useState<OverlayState>('closed')
  const [originPos,    setOriginPos]    = useState({ x: 0, y: 0 })
  const [animated,     setAnimated]     = useState(false)
  const [mounted,      setMounted]      = useState(false)

  const svgRef         = useRef<SVGSVGElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // Draw-on animation when section enters viewport
  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Advance opening → open across two rAF frames (browser paints the small circle first)
  useEffect(() => {
    if (overlayState !== 'opening') return
    let b: number
    const a = requestAnimationFrame(() => { b = requestAnimationFrame(() => setOverlayState('open')) })
    return () => { cancelAnimationFrame(a); cancelAnimationFrame(b) }
  }, [overlayState])

  // Block fullpage-scroll wheel events while overlay is up
  useEffect(() => {
    if (overlayState === 'closed') return
    const block = (e: WheelEvent) => e.stopPropagation()
    window.addEventListener('wheel', block, { capture: true, passive: false })
    return () => window.removeEventListener('wheel', block, { capture: true })
  }, [overlayState])

  useEffect(() => {
    if (overlayState === 'open') closeButtonRef.current?.focus()
  }, [overlayState])

  const openOverlay = useCallback((job: WorkExperience, el: HTMLElement | SVGGElement) => {
    const r = el.getBoundingClientRect()
    setOriginPos({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
    setActiveJob(job)
    setOverlayState('opening')
  }, [])

  const closeOverlay = useCallback(() => {
    setOverlayState('closing')
    setTimeout(() => { setOverlayState('closed'); setActiveJob(null) }, 360)
  }, [])

  const origin = `${originPos.x}px ${originPos.y}px`
  const overlayStyle: React.CSSProperties = {
    clipPath: overlayState === 'open'
      ? `circle(200vmax at ${origin})`
      : `circle(40px at ${origin})`,
    transition: overlayState === 'open'
      ? 'clip-path 420ms cubic-bezier(0.4, 0, 0.2, 1)'
      : overlayState === 'closing'
      ? 'clip-path 360ms cubic-bezier(0.4, 0, 1, 0.6)'
      : 'none',
  }
  const overlayContentStyle: React.CSSProperties = {
    opacity: overlayState === 'open' ? 1 : 0,
    transform: overlayState === 'open'
      ? 'translateY(0) scale(1)'
      : 'translateY(16px) scale(0.98)',
    transition: overlayState === 'opening'
      ? 'opacity 240ms ease 120ms, transform 320ms cubic-bezier(0.22, 1, 0.36, 1) 120ms'
      : overlayState === 'closing'
      ? 'opacity 160ms ease, transform 220ms cubic-bezier(0.4, 0, 1, 1)'
      : 'none',
  }

  return (
    <div className="w-full">
      <div className="md:hidden relative pr-2 py-4">
        <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-secondary/20" aria-hidden="true" />
        {orderedJobs.map((job) => (
          <button
            key={job.company}
            type="button"
            className="relative mb-5 flex w-full items-start gap-4 pl-16 text-left last:mb-0"
            aria-label={`${job.role} at ${job.company}`}
            onClick={e => openOverlay(job, e.currentTarget)}
          >
            <span className="absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#F3F3F3] ring-2 ring-secondary/25 shadow-sm">
              <span className="relative h-7 w-7 overflow-hidden rounded-full">
                <Image
                  src={`/${job.logo}`}
                  alt={job.company}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </span>
            </span>
            <span className="w-full rounded-2xl border border-secondary/10 bg-white/65 px-4 py-3 shadow-sm transition-transform duration-300 active:scale-[0.99]">
              <span className="block text-base font-bold leading-tight text-secondary">
                {job.role}
              </span>
              <span className="mt-1 block text-sm font-semibold text-primary">
                {job.company}
              </span>
              <span className="mt-1 block text-xs text-primary/55">
                {job.duration}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="hidden h-full w-full md:flex md:items-center">
        <svg
          ref={svgRef}
          viewBox="0 0 1000 540"
          className="block h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Work experience timeline"
        >
        <defs>
          {/* Circular clip applied to every logo image via objectBoundingBox */}
          <clipPath id="logo-clip" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3"
              floodColor="#7F71B9" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Start label + dot */}
        <text x="60" y="74" textAnchor="middle" fontSize="16" fill="#7F71B9" fillOpacity="0.5"
              fontFamily="Nunito Sans, Arial, sans-serif" fontWeight="300">
          Dec 2022
        </text>
        <circle cx="60" cy="100" r="7" fill="#7F71B9" fillOpacity="0.5" />

        {/* Snake — 3 rows, 2 right-angle turns */}
        <path
          d={SNAKE_PATH}
          fill="none"
          stroke="#7F71B9"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="miter"
          className="timeline-snake-base"
        />
        <path
          d={SNAKE_PATH}
          fill="none"
          stroke="#F5EDFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className={animated ? 'timeline-snake-glow' : 'timeline-snake-glow-hidden'}
        />

        {/* End — pulsing dot + label */}
        <circle cx="940" cy="460" r="7" fill="#7F71B9" fillOpacity="0.5">
          <animate attributeName="r"            values="7;9;7"     dur="2s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="940" y="492" textAnchor="middle" fontSize="16" fill="#7F71B9" fillOpacity="0.5"
              fontFamily="Nunito Sans, Arial, sans-serif" fontWeight="300">
          Present
        </text>

        {/* Pin markers */}
        {orderedJobs.map((job, i) => {
          const [ax, ay] = ANCHORS[i]
          const startDateLabel = getStartDateLabel(job.duration)
          return (
            <g
              key={job.company}
              transform={`translate(${ax},${ay})`}
              className="timeline-droplet"
              style={{ cursor: 'pointer', outline: 'none', pointerEvents: 'all' }}
              role="button"
              tabIndex={0}
              aria-label={`${job.role} at ${job.company}`}
              onClick={e  => openOverlay(job, e.currentTarget as SVGGElement)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openOverlay(job, e.currentTarget as SVGGElement)
                }
              }}
            >
              {/* Pin-only visual group scales independently from the date label */}
              <g className="timeline-droplet-visual" style={{ pointerEvents: 'none' }}>
                {/* Solid teardrop pin */}
                <path d={PIN} fill="#7F71B9" stroke="#6C5FA6" strokeWidth="2"
                      filter="url(#drop-shadow)" />

                {/* Light inset keeps the logo visually contained within the teardrop head */}
                <circle cx="0" cy="-34" r="19" fill="#F3F3F3" />

                {/* Logo held inside the teardrop head */}
                <image
                  href={`/${job.logo}`}
                  x="-17" y="-51"
                  width="34" height="34"
                  clipPath="url(#logo-clip)"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Role — bold, above pin */}
                <text x="0" y="-88" textAnchor="middle"
                      fontSize="15.5" fontWeight="700" fill="#201A72"
                      fontFamily="Nunito Sans, Arial, sans-serif">
                  {job.role}
                </text>
                {/* Company name */}
                <text x="0" y="-71" textAnchor="middle"
                      fontSize="12.75" fill="#7F71B9"
                      fontFamily="Nunito Sans, Arial, sans-serif">
                  {job.company}
                </text>
              </g>

              {/* Date stays fixed so hover scale does not distort its position */}
              <g style={{ pointerEvents: 'none' }}>
                <text x="0" y="28" textAnchor="middle"
                      fontSize="14.5" fill="#7F71B9" fillOpacity="0.5"
                      fontFamily="Nunito Sans, Arial, sans-serif" fontWeight="300">
                  {startDateLabel}
                </text>
              </g>

              {/* Transparent hit area (outside visual group so it doesn't affect fill-box) */}
              <rect x="-112" y="-100" width="224" height="144" fill="transparent" />
            </g>
          )
        })}
        </svg>
      </div>

      {/* Full-page circle-reveal overlay */}
      {mounted && overlayState !== 'closed' && ReactDOM.createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="overlay-job-title"
          className="fixed inset-0 z-[200] bg-[#F3F3F3] overflow-y-auto"
          style={overlayStyle}
          onKeyDown={e => { if (e.key === 'Escape') closeOverlay() }}
        >
          <div
            className="min-h-full px-6 py-8 sm:px-10 sm:py-10 md:px-20 md:py-14 max-w-3xl mx-auto"
            style={overlayContentStyle}
          >
            {/* Close */}
            <div className="flex justify-end mb-6">
              <button
                ref={closeButtonRef}
                onClick={closeOverlay}
                className="w-10 h-10 flex items-center justify-center rounded-full
                           container-neumorphic-outset text-secondary font-bold text-base
                           transition-transform hover:scale-110
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {activeJob && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <a
                    href={activeJob.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20
                               rounded-full overflow-hidden border border-secondary/10 shadow-sm
                               transition-transform hover:scale-105"
                    aria-label={`Visit ${activeJob.company} website`}
                  >
                    <Image src={activeJob.logo} alt={activeJob.company} fill
                           className="object-cover" sizes="80px" />
                  </a>
                  <div>
                    <h2 id="overlay-job-title"
                        className="text-xl sm:text-2xl font-bold text-secondary leading-tight">
                      {activeJob.role}
                    </h2>
                    <p className="text-primary font-semibold mt-0.5">{activeJob.company}</p>
                    <p className="text-primary/50 text-sm mt-0.5">{activeJob.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="container-neumorphic-inset rounded-2xl p-4 sm:p-6">
                  <p className="text-primary/80 text-sm sm:text-base leading-relaxed">
                    {activeJob.description}
                  </p>
                </div>

                {/* Achievements */}
                {activeJob.achievements.length > 0 && (
                  <div>
                    <h3 className="font-bold text-secondary mb-3 text-sm sm:text-base">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {activeJob.achievements.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm sm:text-base text-primary/80">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {activeJob.techStack.length > 0 && (
                  <div>
                    <h3 className="font-bold text-secondary mb-3 text-sm sm:text-base">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeJob.techStack.map(tech => (
                        <a
                          key={tech.name}
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 container-neumorphic-outset
                                     rounded-xl transition-transform hover:scale-105
                                     text-xs sm:text-sm text-primary/80"
                          aria-label={`${tech.name} documentation`}
                        >
                          <div className="relative w-5 h-5 shrink-0">
                            <Image src={tech.icon} alt={tech.name} fill
                                   className="object-contain" sizes="20px" />
                          </div>
                          <span>{tech.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
