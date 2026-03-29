"use client"

import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { OutdentCard } from "@/components/ui/card"

type StackItem = { name: string; icon: string; link?: string }

interface FeaturedProjectCardProps {
  title: string
  summary: string
  description: string
  logo: string
  year: string
  status: string
  category: string
  liveLink?: string
  codeLink?: string
  stack?: StackItem[]
  compact?: boolean
}

export function FeaturedProjectCard({
  title,
  summary,
  description,
  logo,
  year,
  status,
  category,
  liveLink,
  codeLink,
  stack = [],
  compact = false,
}: FeaturedProjectCardProps) {
  return (
    <OutdentCard className={compact ? "p-5 sm:p-6 h-full" : "p-6 sm:p-7 lg:p-8"}>
      <div className={`grid gap-6 ${compact ? "h-full" : "lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"}`}>
        <div className={`rounded-[2rem] border border-secondary/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(127,113,185,0.12))] flex flex-col justify-between ${compact ? "p-5 sm:p-6 min-h-[260px]" : "p-6 sm:p-7 min-h-[280px]"}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs sm:text-sm font-semibold tracking-[0.16em] text-secondary uppercase">
                  {year}
                </span>
                <span className="rounded-full bg-primary/5 px-3 py-1 text-xs sm:text-sm font-semibold tracking-[0.16em] text-primary/80 uppercase">
                  {category}
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-semibold tracking-[0.16em] text-emerald-700 uppercase">
                  {status}
                </span>
              </div>
              <div>
                <h3 className={`${compact ? "text-xl sm:text-2xl md:text-3xl" : "text-2xl sm:text-3xl md:text-4xl"} font-bold text-secondary`}>
                  {title}
                </h3>
                <p className={`${compact ? "mt-2 text-sm sm:text-base md:text-lg" : "mt-3 text-base sm:text-lg md:text-xl"} max-w-xl text-primary/80 leading-relaxed`}>
                  {summary}
                </p>
              </div>
            </div>

            <div className={`${compact ? "h-14 w-14 sm:h-16 sm:w-16 rounded-[1.25rem]" : "h-16 w-16 sm:h-20 sm:w-20 rounded-3xl"} relative shrink-0 bg-white/70 p-3 shadow-[inset_6px_6px_14px_rgba(255,255,255,0.9),inset_-8px_-8px_20px_rgba(127,113,185,0.16)]`}>
              <Image src={`/${logo}`} alt={`${title} logo`} fill className="object-contain p-3" />
            </div>
          </div>

          <div className={`${compact ? "mt-5 px-4 py-3" : "mt-8 px-5 py-4"} rounded-[1.5rem] border border-white/70 bg-white/70 shadow-[0_18px_40px_rgba(32,26,114,0.08)]`}>
            <p className={`${compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"} text-primary/75 leading-relaxed`}>
              {description}
            </p>
          </div>
        </div>

        <div className={`flex flex-col justify-between rounded-[2rem] container-neumorphic-inset ${compact ? "p-5 sm:p-6 gap-5" : "p-6 sm:p-7"}`}>
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-secondary/70 uppercase">
              Core Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {stack.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-3 rounded-2xl bg-white/70 transition-transform duration-300 hover:-translate-y-1 ${compact ? "px-3 py-2" : "px-3 py-2"}`}
                  aria-label={item.link ? `Open ${item.name}` : item.name}
                >
                  <div className="relative h-8 w-8 shrink-0">
                    <Image src={`/${item.icon}`} alt={item.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm sm:text-base text-primary/85">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-secondary font-semibold text-white transition-transform duration-300 hover:-translate-y-1 ${compact ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm sm:text-base"}`}
              >
                Live Demo
                <ArrowUpRight size={18} />
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-primary/10 font-semibold text-primary transition-transform duration-300 hover:-translate-y-1 ${compact ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm sm:text-base"}`}
              >
                View Code
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </OutdentCard>
  )
}
