import Image from "next/image"
import { OutdentCard } from "@/components/ui/card"

interface WorkExperienceCardProps {
  company: string
  role: string
  logo: string
  techStack?: { name: string; icon: string }[]
  description?: string
  duration?: string
  achievements?: string[]
}

export function WorkExperienceCard({ 
  company, 
  role, 
  logo, 
  techStack = [], 
  description, 
  duration, 
  achievements = [] 
}: WorkExperienceCardProps) {
  
  const expandedContent = (description || duration || achievements.length > 0) ? (
    <div className="space-y-4">
      {duration && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary/70">{duration}</span>
        </div>
      )}
      
      {description && (
        <p className="text-primary/80">{description}</p>
      )}
      
      {achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-secondary">Key Achievements</h4>
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-primary/80">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : undefined;

  return (
    <OutdentCard className="p-6" expandedContent={expandedContent}>
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative shrink-0">
          <Image src={logo || "/placeholder.svg"} alt={`${company} logo`} fill className="object-contain rounded-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-secondary">{company}</h3>
          <p className="text-primary">{role}</p>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="w-14 h-14 relative rounded-xl" 
              title={tech.name}
            >
              <div className="absolute inset-1.5">
                <Image 
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </OutdentCard>
  )
}

