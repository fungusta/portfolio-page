import Image from "next/image"
import { OutdentCard } from "@/components/ui/card"

interface WorkExperienceCardProps {
  company: string
  role: string
  logo: string
  techStack?: { name: string; icon: string; link?: string }[]
  description?: string
  duration?: string
  achievements?: string[]
  link?: string
}

export function WorkExperienceCard({ 
  company, 
  role, 
  logo, 
  techStack = [], 
  description, 
  duration, 
  achievements = [],
  link
}: WorkExperienceCardProps) {
  
  const expandedContent = (description || duration || achievements.length > 0) ? (
    <div className="space-y-3 sm:space-y-4">
      {duration && (
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm text-primary/70">{duration}</span>
        </div>
      )}
      
      {description && (
        <p className="text-xs sm:text-sm md:text-base text-primary/80">{description}</p>
      )}
      
      {achievements.length > 0 && (
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs sm:text-sm font-semibold text-secondary">Key Achievements</h4>
          <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-xs sm:text-sm text-primary/80">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;

  return (
    <OutdentCard className="p-4 sm:p-6" expandedContent={expandedContent}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
          {link ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
              aria-label={`Visit ${company} website`}
              tabIndex={0}
            >
              <Image 
                src={logo || "/placeholder.svg"} 
                alt={`${company} logo`} 
                fill 
                className="object-contain rounded-xl" 
              />
            </a>
          ) : (
            <Image 
              src={logo || "/placeholder.svg"} 
              alt={`${company} logo`} 
              fill 
              className="object-contain rounded-xl" 
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-xl text-secondary">{company}</h3>
          <p className="text-xs sm:text-sm md:text-base text-primary/80">{role}</p>
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

