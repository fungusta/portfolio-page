import Image from "next/image"
import { Card } from "@/components/ui/card"

interface WorkExperienceCardProps {
  company: string
  role: string
  logo: string
  techStack?: { name: string; icon: string }[]
}

export function WorkExperienceCard({ company, role, logo, techStack = [] }: WorkExperienceCardProps) {
  return (
    <Card className="p-6 container-neumorphic-outset">
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
    </Card>
  )
}

