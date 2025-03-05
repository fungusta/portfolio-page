import Image from "next/image"
import { OutdentCard } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  logo: string
  techStack?: { name: string; icon: string }[]
}

export function ProjectCard({ title, description, logo, techStack = [] }: ProjectCardProps) {
  return (
    <OutdentCard className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative shrink-0">
          <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="text-secondary">{title}</h3>
          <p className="text-primary text-sm">{description}</p>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="w-14 h-14 relative" 
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

