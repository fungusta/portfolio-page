import Image from "next/image"
import { OutdentCard } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  logo: string
  link?: string
  techStack?: { name: string; icon: string; link?: string }[]
}

export function ProjectCard({ title, description, logo, link, techStack = [] }: ProjectCardProps) {
  return (
    <OutdentCard className="p-4 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        {link ? (
          <a 
            href={link}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
            title={`Visit ${title}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} website`}
            tabIndex={0}
          >
            <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain rounded-xl" />
          </a>
        ) : (
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain rounded-xl" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-xl text-secondary">{title}</h3>
          <p className="text-xs sm:text-sm md:text-base text-primary/80">{description}</p>
        </div>
        <div className="flex gap-1 sm:gap-2 flex-wrap justify-end">
          {techStack.map((tech) => (
            <a 
              key={tech.name} 
              href={tech.link}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 relative rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80" 
              title={tech.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0.5 sm:inset-1 md:inset-1.5">
                <Image 
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </OutdentCard>
  )
}

