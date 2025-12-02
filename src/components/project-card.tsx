"use client";

import Image from "next/image"
import { useState, type KeyboardEvent, type MouseEvent } from "react"
import { OutdentCard } from "@/components/ui/card"

type StackItem = { name: string; icon: string; link?: string }
type ServiceItem = { name: string; link?: string }

interface ProjectCardProps {
  title: string
  description: string
  logo: string
  link?: string
  techStack?: StackItem[]
  coreStack?: StackItem[]
  infraServices?: ServiceItem[]
}

export function ProjectCard({
  title,
  description,
  logo,
  link,
  techStack = [],
  coreStack = [],
  infraServices = [],
}: ProjectCardProps) {
  const [showAllCoreStack, setShowAllCoreStack] = useState(false)

  const normalizedCoreStack = coreStack.length > 0 ? coreStack : techStack
  const maxVisibleCore = 4
  const hasCoreStack = normalizedCoreStack.length > 0
  const visibleCoreStack = showAllCoreStack ? normalizedCoreStack : normalizedCoreStack.slice(0, maxVisibleCore)
  const hiddenCoreCount = Math.max(normalizedCoreStack.length - maxVisibleCore, 0)

  const openLinkInNewTab = (targetLink?: string) => {
    if (!targetLink) return
    window.open(targetLink, "_blank", "noopener,noreferrer")
  }

  const handleCardClick = () => {
    openLinkInNewTab(link)
  }

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!link) return
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    openLinkInNewTab(link)
  }

  const handleTechClick = (event: MouseEvent<HTMLButtonElement>, targetLink?: string) => {
    event.stopPropagation()
    openLinkInNewTab(targetLink)
  }

  const handleTechKeyDown = (event: KeyboardEvent<HTMLButtonElement>, targetLink?: string) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    event.stopPropagation()
    openLinkInNewTab(targetLink)
  }

  const handleToggleCoreStack = (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if ("key" in event) {
      if (event.key !== "Enter" && event.key !== " ") return
      event.preventDefault()
    }
    setShowAllCoreStack((previous) => !previous)
  }

  const handleServiceClick = (event: MouseEvent<HTMLButtonElement>, targetLink?: string) => {
    event.stopPropagation()
    openLinkInNewTab(targetLink)
  }

  const handleServiceKeyDown = (event: KeyboardEvent<HTMLButtonElement>, targetLink?: string) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    event.stopPropagation()
    openLinkInNewTab(targetLink)
  }

  const TechStackIcons = () => {
    if (!hasCoreStack) {
      return null
    }

    return (
      <div className="flex gap-1 sm:gap-2 flex-wrap justify-end items-center">
        {visibleCoreStack.map((tech) => (
          <button
            key={tech.name}
            type="button"
            onClick={(event) => handleTechClick(event, tech.link)}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 relative rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-secondary/60"
            title={tech.name}
            aria-label={tech.name}
            tabIndex={0}
            onKeyDown={(event) => handleTechKeyDown(event, tech.link)}
          >
            <div className="absolute inset-0.5 sm:inset-1 md:inset-1.5">
              <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
            </div>
          </button>
        ))}
        {hiddenCoreCount > 0 && (
          <button
            type="button"
            onClick={handleToggleCoreStack}
            onKeyDown={handleToggleCoreStack}
            aria-expanded={showAllCoreStack}
            className="text-[11px] sm:text-xs md:text-sm px-2 py-1 rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary/20 focus-visible:ring-2 focus-visible:ring-secondary/60"
          >
            {showAllCoreStack ? "Show less" : `+${hiddenCoreCount} more`}
          </button>
        )}
      </div>
    )
  }

  const InfraServicesBadges = () => {
    if (infraServices.length === 0) {
      return null
    }

    return (
      <div className="flex flex-wrap gap-2 mt-4" aria-label="Infrastructure and services list">
        {infraServices.map((service) => (
          <button
            key={service.name}
            type="button"
            onClick={(event) => handleServiceClick(event, service.link)}
            onKeyDown={(event) => handleServiceKeyDown(event, service.link)}
            className="text-[11px] sm:text-xs md:text-sm px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-secondary/60"
            aria-label={service.link ? `Open ${service.name} details` : service.name}
            tabIndex={0}
          >
            {service.name}
          </button>
        ))}
      </div>
    )
  }

  const CardContent = () => (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
        <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain rounded-xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg md:text-xl text-secondary">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-primary/80">{description}</p>
        <InfraServicesBadges />
      </div>
      <TechStackIcons />
    </div>
  )

  return (
    <div
      className={`transition-transform duration-300 ease-in-out hover:scale-[1.02] ${link ? "cursor-pointer group relative" : ""}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={link ? "link" : "presentation"}
      aria-label={link ? `Visit ${title} website (opens in a new tab)` : undefined}
      tabIndex={link ? 0 : undefined}
    >
      <OutdentCard className="p-4 sm:p-6">
        <CardContent />
        {link && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 text-primary/60 group-hover:text-primary/80 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="sr-only">External link</span>
          </div>
        )}
      </OutdentCard>
    </div>
  )
}

