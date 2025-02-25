import Image from "next/image"
import { Card } from "@/components/ui/card"

interface EducationCardProps {
  school: string
  logo: string
}

export function EducationCard({ school, logo }: EducationCardProps) {
  return (
    <Card className="aspect-square p-4 flex items-center justify-center container-neumorphic-outset">
      <div className="w-full h-full relative">
        <Image src={logo || "/placeholder.svg"} alt={`${school} logo`} fill className="object-contain p-2 rounded-2xl"/>
      </div>
    </Card>
  )
}

