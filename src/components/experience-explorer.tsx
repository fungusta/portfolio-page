'use client'

import { useRef, useState, type KeyboardEvent, type ReactElement } from 'react'
import Image from 'next/image'
import { workExperiences, type WorkExperience } from '@/constants/work-experience'

const LogoWell = ({ job, size = 'md' }: { job: WorkExperience; size?: 'sm' | 'md' }): ReactElement => {
  const box = size === 'sm' ? 'h-12 w-12 rounded-2xl' : 'h-12 w-12 sm:h-16 sm:w-16 rounded-2xl'
  const img = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8 sm:h-10 sm:w-10'

  return (
    <span className={`neu-well relative flex shrink-0 items-center justify-center ${box}`}>
      <span className={`relative ${img}`}>
        <Image src={`/${job.logo}`} alt="" fill className="rounded-md object-contain" />
      </span>
    </span>
  )
}

const RoleHeader = ({ job }: { job: WorkExperience }): ReactElement => (
  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
    <div className="flex items-center gap-4">
      <LogoWell job={job} />
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-secondary">{job.role}</h3>
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base lg:text-lg text-ink-soft underline-offset-4 hover:text-secondary hover:underline"
          tabIndex={0}
        >
          {job.company}
        </a>
      </div>
    </div>
    <p className="text-sm lg:text-base text-ink-soft">{job.duration}</p>
  </div>
)

const RoleDetails = ({ job }: { job: WorkExperience }): ReactElement => (
  <>
    <RoleHeader job={job} />
    <p className="mt-5 text-base lg:text-lg text-ink-soft leading-relaxed">{job.description}</p>
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm sm:text-base lg:text-[1.0625rem] text-ink-soft leading-relaxed marker:text-primary">
      {job.achievements.map((achievement) => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
    <div className="mt-6 flex flex-wrap gap-2.5">
      {job.techStack.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-chip neu-pressable inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:text-sm text-ink-soft"
          aria-label={`Open ${item.name}`}
          tabIndex={0}
        >
          <span className="relative h-4 w-4 shrink-0">
            <Image src={`/${item.icon}`} alt="" fill className="object-contain" />
          </span>
          {item.name}
        </a>
      ))}
    </div>
  </>
)

// Desktop: a sunken list of roles beside a raised panel; the selected role rises out of the list.
// Phones: every role stacked as its own card, since a side panel has no room there.
export const ExperienceExplorer = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const activeJob = workExperiences[activeIndex]

  // Arrow keys move between roles, as in any tab list
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    const last = workExperiences.length - 1
    const nextIndex = {
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <>
      {/* flex-1: fills whatever height the page leaves; auto-rows-fr keeps the six roles equally tall */}
      <div className="hidden md:grid md:flex-1 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] gap-8 lg:gap-10">
        <div
          role="tablist"
          aria-label="Roles"
          aria-orientation="vertical"
          className="container-neumorphic-inset grid auto-rows-fr gap-2 rounded-3xl p-3 lg:p-4"
        >
          {workExperiences.map((job, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={job.company}
                ref={(el) => { tabRefs.current[index] = el }}
                type="button"
                role="tab"
                id={`role-tab-${index}`}
                aria-selected={isActive}
                aria-controls="role-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={handleTabKeyDown}
                className={`flex items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-shadow duration-300 ${
                  isActive ? 'neu-button neu-pressable' : 'border-transparent hover:bg-white/30'
                }`}
              >
                <LogoWell job={job} size="sm" />
                <span className="min-w-0">
                  <span className="block text-base lg:text-lg font-bold leading-snug text-secondary">{job.role}</span>
                  <span className="block text-sm leading-snug text-ink-soft">{job.company}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id="role-panel"
          aria-labelledby={`role-tab-${activeIndex}`}
          className="container-neumorphic-outset rounded-3xl p-7 lg:p-10"
        >
          {/* Re-keyed per role so the new details fade in on every switch */}
          <div key={activeJob.company} className="motion-safe:animate-fade-up">
            <RoleDetails job={activeJob} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:hidden">
        {workExperiences.map((job) => (
          <article key={job.company} className="container-neumorphic-outset rounded-3xl p-5">
            <RoleDetails job={job} />
          </article>
        ))}
      </div>
    </>
  )
}
