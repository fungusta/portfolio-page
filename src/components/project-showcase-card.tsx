import type { ReactElement } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

import type { Project } from "@/constants/projects"

interface ProjectShowcaseCardProps {
  project: Project
  className?: string
}

const ACTION_CLASS =
  "neu-button neu-pressable inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-secondary"

// Every preview is the same 16:10 screenshot, sunk into the card like a screen
const PreviewWell = ({ project }: { project: Project }): ReactElement => (
  <div className="neu-well mb-5 rounded-2xl p-2">
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
      <Image
        src={`/${project.preview}`}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  </div>
)

export const ProjectShowcaseCard = ({ project, className = "" }: ProjectShowcaseCardProps): ReactElement => {
  const isLive = Boolean(project.liveLink || project.appStoreLink)

  return (
    <article className={`group flex h-full flex-col container-neumorphic-outset p-5 sm:p-6 ${className}`}>
      <PreviewWell project={project} />

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary">{project.title}</h3>
      <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">{project.summary}</p>

      {project.note ? (
        <p className="container-neumorphic-inset mt-4 rounded-2xl px-4 py-3 text-sm text-ink-soft leading-relaxed">
          {project.note}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
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

      <div className="mt-auto flex flex-wrap gap-3 pt-5">
        {project.liveLink ? (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={ACTION_CLASS} tabIndex={0}>
            Try me out!
            <ArrowUpRight size={18} />
          </a>
        ) : null}
        {project.appStoreLink ? (
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className={ACTION_CLASS}
            aria-label={`Download ${project.title} from the App Store`}
            tabIndex={0}
          >
            App Store
            <ArrowUpRight size={18} />
          </a>
        ) : null}
        {project.codeLink ? (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={ACTION_CLASS} tabIndex={0}>
            View Code
            <Github size={18} />
          </a>
        ) : null}
        {!isLive && !project.codeLink ? (
          <span className="neu-chip inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-ink-soft">
            {project.status ?? "Currently unavailable"}
          </span>
        ) : null}
      </div>
    </article>
  )
}
