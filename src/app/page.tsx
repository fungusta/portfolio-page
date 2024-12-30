import Image from "next/image"
import { ChevronDown } from 'lucide-react'

export default function PortfolioPage() {
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
        <div className="relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-[#B19CD9]" />
          <div className="flex justify-between items-center px-6">
            {[
              { id: 1, src: 'https://github.com/shadcn.png' },
              { id: 2, src: 'https://github.com/shadcn.png' },
              { id: 3, src: 'https://github.com/shadcn.png' },
              { id: 4, src: 'https://github.com/shadcn.png' }
            ].map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center py-12">
                <div className={`flex items-center justify-center ${index % 2 === 0 ? '-mt-20' : 'mt-20'}`}>
                  <div className="w-16 h-16 bg-gray-800 rounded-lg transition-transform hover:scale-110">
                    <Image
                      src={item.src}
                      alt="Company logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-3 h-3 bg-[#B19CD9] rounded-full absolute top-1/2 transform -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-[#B19CD9]" />
          <div className="flex justify-between items-center px-6">
            {[
              { id: 1, src: 'https://github.com/shadcn.png' },
              { id: 2, src: 'https://github.com/shadcn.png' },
              { id: 3, src: 'https://github.com/shadcn.png' }
            ].map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center py-12">
                <div className={`flex items-center justify-center ${index % 2 === 0 ? '-mt-20' : 'mt-20'}`}>
                  <div className="w-16 h-16 bg-gray-800 rounded-full transition-transform hover:scale-110 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt="Project logo"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="w-3 h-3 bg-[#B19CD9] rounded-full absolute top-1/2 transform -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-[#B19CD9]" />
          <div className="flex justify-between items-center px-6">
            {[
              { id: 1, src: 'https://github.com/shadcn.png' },
              { id: 2, src: 'https://github.com/shadcn.png' },
              { id: 3, src: 'https://github.com/shadcn.png' }
            ].map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center py-12">
                <div className={`flex items-center justify-center ${index % 2 === 0 ? '-mt-20' : 'mt-20'}`}>
                  <div className="w-16 h-16 bg-gray-800 rounded-lg transition-transform hover:scale-110">
                    <Image
                      src={item.src}
                      alt="Institution logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-3 h-3 bg-[#B19CD9] rounded-full absolute top-1/2 transform -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
