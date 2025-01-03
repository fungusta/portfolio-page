'use client'

import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"
import { companies, projects, education, interests } from '@/constants/resources'

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<{ id: number; section: 'company' | 'project' | 'education' } | null>(null)


  const getSelectedItemDetails = () => {
    if (!selectedItem) return null

    const collections = {
      company: companies,
      project: projects,
      education: education
    }

    return collections[selectedItem.section].find(item => item.id === selectedItem.id)
  }

  // Shared Timeline Component
  const Timeline = ({ items, section }: { items: typeof companies, section: 'company' | 'project' | 'education' }) => (
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-[#B19CD9]" />
      <div className="flex justify-between items-center px-6">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center py-12">
            <div
              className={`flex items-center justify-center ${index % 2 === 0 ? '-mt-20' : 'mt-24'}`}
              onClick={() => setSelectedItem({ id: item.id, section })}
            >
              <div className={`w-16 h-16 rounded-lg transition-transform hover:scale-110 cursor-pointer`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={64}
                  height={64}
                  className='rounded-lg'
                />
              </div>
            </div>
            <div className="w-3 h-3 bg-[#B19CD9] rounded-full absolute top-1/2 transform -translate-y-1/2" />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative w-full overflow-x-auto min-h-screen bg-[#1A1D21] text-white px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto text-center mb-16 flex flex-col justify-center min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B19CD9] mb-2 tracking-tight">Peter Fung</h1>
        <h2 className="text-xl md:text-2xl mb-2 font-light">Software Engineer</h2>
        <p className="text-gray-400 text-lg font-light">Crafting digital experiences through code</p>
        <div className="mt-8">
          <ChevronDown className="w-8 h-8 mx-auto text-[#B19CD9]" />
        </div>
      </header>

      {/* About Me Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#B19CD9] text-xl font-medium mb-2">Software Engineering</h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating elegant solutions to
              complex problems through innovative software
              development with a focus on modern web
              technologies.
            </p>
          </div>
          <div>
            <h3 className="text-[#B19CD9] text-xl font-medium mb-2">Visual Creation</h3>
            <p className="text-gray-400 leading-relaxed">
              Blend creativity and logic into visual through my
              work, creating engaging digital experiences that
              people find truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Work Experience</h2>
        <Timeline items={companies} section="company" />
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Projects</h2>
        <Timeline items={projects} section="project" />
      </section>

      {/* Education Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Education</h2>
        <Timeline items={education} section="education" />
      </section>

      {/* Shared Overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-[#1E1E1E] bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-[#1E1E1E] max-w-3xl w-full mx-auto p-8 rounded-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-6">
              <Image
                src={getSelectedItemDetails()?.src || ''}
                alt={getSelectedItemDetails()?.title || ''}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="pl-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#B19CD9] tracking-tight">
                  {getSelectedItemDetails()?.title}
                </h2>
                <h3 className="text-lg md:text-xl text-gray-400 font-light">
                  {getSelectedItemDetails()?.time}
                </h3>
              </div>
            </div>
            <p className="text-gray-400 whitespace-pre-wrap leading-relaxed text-base md:text-lg">
              {getSelectedItemDetails()?.description}
            </p>
          </div>
        </div>
      )}

      {/* Interests Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="aspect-video relative overflow-hidden rounded-lg transition-transform hover:scale-105 group"
            >
              <Image
                src={interest.images[0] || "/placeholder.svg"}
                alt={interest.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-center text-sm md:text-base font-medium tracking-wide">
                  {interest.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
