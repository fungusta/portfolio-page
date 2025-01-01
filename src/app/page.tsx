'use client'

import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<{ id: number; section: 'company' | 'project' | 'education' } | null>(null)

  const getImagePath = (path: string) => {
    const isProd = process.env.NODE_ENV === 'production'
    return isProd ? `/portfolio-page${path}` : path
  }
  
  const companies = [
    { id: 1, src: getImagePath('/images/csa-logo.jpg'), title: 'CSA', description: 'Role and details here' },
    { id: 2, src: getImagePath('/images/dynamite-games-logo.jpg'), title: 'Dynamite Games', description: 'Role and details here' },
    { id: 3, src: getImagePath('/images/witzu-logo.jpg'), title: 'Witz-U', description: 'Role and details here' },
    { id: 4, src: getImagePath('/images/node-logo.jpg'), title: 'economy-v1', description: 'Role and details here' }
  ]

  const projects = [
    { id: 1, src: 'https://github.com/shadcn.png', title: 'Project 1', description: 'Project details here' },
    { id: 2, src: 'https://github.com/shadcn.png', title: 'Project 2', description: 'Project details here' },
    { id: 3, src: 'https://github.com/shadcn.png', title: 'Project 3', description: 'Project details here' }
  ]

  const education = [
    { id: 1, src: getImagePath('/images/acs-logo.png'), title: 'Anglo-Chinese School', description: 'Secondary Education' },
    { id: 2, src: getImagePath('/images/pjc-logo.png'), title: 'Pioneer Junior College', description: 'Junior College' },
    { id: 3, src: getImagePath('/images/nus-logo.png'), title: 'National University of Singapore', description: 'University' }
  ]

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
              <div className={`w-16 h-16 ${section === 'project' ? 'rounded-full' : 'rounded-lg'} transition-transform hover:scale-110 cursor-pointer`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={64}
                  height={64}
                  className={section === 'project' ? 'rounded-full' : 'rounded-lg'}
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
        <h1 className="text-4xl font-bold text-[#B19CD9] mb-2">Peter Fung</h1>
        <h2 className="text-xl mb-2">Software Engineer</h2>
        <p className="text-gray-400">Crafting digital experiences through code</p>
        <div className="mt-8">
          <ChevronDown className="w-8 h-8 mx-auto text-[#B19CD9]" />
        </div>
      </header>

      {/* About Me Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#B19CD9] mb-2">Software Engineering</h3>
            <p className="text-gray-400">
              Passionate about creating elegant solutions to
              complex problems through innovative software
              development with a focus on modern web
              technologies.
            </p>
          </div>
          <div>
            <h3 className="text-[#B19CD9] mb-2">Visual Creation</h3>
            <p className="text-gray-400">
              Blend creativity and logic into visual through my
              work, creating engaging digital experiences that
              people find truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <Timeline items={companies} section="company" />
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <Timeline items={projects} section="project" />
      </section>

      {/* Education Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <Timeline items={education} section="education" />
      </section>

      {/* Shared Overlay */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-[#1E1E1E] bg-opacity-95 z-50 flex items-center justify-center"
          onClick={() => setSelectedItem(null)}
        >
          <div className="bg-[#1E1E1E] max-w-3xl w-full mx-auto p-6 h-[33vh] rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 ${selectedItem.section === 'project' ? 'rounded-full' : 'rounded-lg'}`}>
                <Image
                  src={getSelectedItemDetails()?.src || ''}
                  alt={getSelectedItemDetails()?.title || ''}
                  width={48}
                  height={48}
                  className={selectedItem.section === 'project' ? 'rounded-full' : 'rounded-lg'}
                />
              </div>
              <h3 className="text-2xl text-[#B19CD9]">
                {getSelectedItemDetails()?.title}
              </h3>
            </div>
            <p className="text-gray-400">
              {getSelectedItemDetails()?.description}
            </p>
          </div>
        </div>
      )}

      {/* Interests Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Gaming",
              images: [
                "https://github.com/shadcn.png",
                "https://github.com/shadcn.png",
                // Add more image paths as needed
              ]
            },
            {
              title: "Photography",
              images: [
                "https://github.com/shadcn.png",
                "https://github.com/shadcn.png",
                // Add more image paths as needed
              ]
            },
            {
              title: "Music",
              images: [
                "https://github.com/shadcn.png",
                "https://github.com/shadcn.png",
                // Add more image paths as needed
              ]
            },
            {
              title: "Travel",
              images: [
                "https://github.com/shadcn.png",
                "https://github.com/shadcn.png",
                // Add more image paths as needed 
              ]
            }
          ].map((interest, index) => (
            <div
              key={index}
              className="aspect-video relative overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              {/* Display first image as default, can be enhanced to create image carousel */}
              <Image
                src={interest.images[0] || "/placeholder.svg"}
                alt={interest.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                <p className="text-white text-center">{interest.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
