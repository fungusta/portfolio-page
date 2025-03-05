import { ArrowDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { WorkExperienceCard } from "@/components/work-experience-card"
import { ProjectCard } from "@/components/project-card"
import { EducationCard } from "@/components/education-card"

export default function Page() {
  return (
    <main className="min-h-screen px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl md:text-7xl font-bold text-secondary">Peter Fung</h1>
        <h2 className="text-2xl md:text-5xl font-semibold text-primary mt-2">Software Engineer</h2>
        <p className="md:text-2xl text-primary mt-2">Crafting digital experiences through code</p>
        <ArrowDown className="mt-8 text-primary animate-bounce" size={24} />
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-secondary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="p-6 container-neumorphic-inset">
            <h3 className="text-lg font-bold text-primary mb-2">Software Engineering</h3>
            <p className="text-primary font-light">
              Passionate about creating elegant solutions to complex problems. Experienced in full stack development
              with a focus on modern web technologies.
            </p>
          </Card>
          <Card className="p-6 container-neumorphic-inset min-h-[px]">
            <h3 className="text-lg font-bold text-primary mb-2">Visual Creation</h3>
            <p className="text-primary font-light">
              I enjoy exploring different UI design techniques, my current favourite: Neumorphism.
              <br></br>
              <br></br>
              And when I am not coding, I enjoy taking beautiful landscapes using my camera and drone.
            </p>
          </Card>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Work Experience</h2>
        <div className="space-y-4">
          <WorkExperienceCard
            company="Ryde Technologies"
            role="Software Engineering Intern"
            logo="images/ryde-logo.png"
            duration="Jun 2022 - Aug 2022"
            description="Developed and maintained WeChat Mini Programs for ride-hailing services, focusing on user experience and performance optimization."
            achievements={[
              "Improved app loading time by 30% through code optimization",
              "Implemented new payment integration with WeChat Pay",
              "Collaborated with design team to revamp the user interface"
            ]}
            techStack={[
              { name: "Javascript", icon: "images/tech-logos/javascript.svg" },
              { name: "WeChat", icon: "images/tech-logos/wechat-1.svg" },
              { name: "WeChat Mini Program", icon: "images/tech-logos/wechat.svg" },
            ]}
          />
          <WorkExperienceCard
            company="Economy-v1"
            role="Frontend Developer"
            logo="images/economy-v1-logo.png"
            duration="Jan 2022 - May 2022"
            description="Built responsive web applications using modern frontend technologies, focusing on creating intuitive user interfaces and seamless user experiences."
            achievements={[
              "Developed key features for the company's flagship product",
              "Implemented responsive design principles for mobile compatibility",
              "Reduced bundle size by 25% through code splitting and lazy loading"
            ]}
            techStack={[
              { name: "Next.js", icon: "images/tech-logos/next-js.svg" },
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg" },
              { name: "React", icon: "images/tech-logos/react.svg" },
              { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg" }
            ]}
          />
          <WorkExperienceCard
            company="Cyber Security Agency of Singapore (CSA)"
            role="Mobile Cybersecurity Intern"
            logo="images/csa-logo.jpg"
            duration="May 2021 - Aug 2021"
            description="Conducted security assessments on mobile applications and developed tools to automate vulnerability detection processes."
            achievements={[
              "Identified critical vulnerabilities in government mobile applications",
              "Created documentation for secure mobile development practices",
              "Participated in security awareness training programs"
            ]}
            techStack={[{ name: "VMWare", icon: "images/tech-logos/vmware.svg" }]}
          />
          <WorkExperienceCard
            company="Witz-U"
            role="Mobile App Developer Intern"
            logo="images/witzu-logo.png"
            duration="Jan 2021 - Apr 2021"
            description="Designed and developed mobile applications using Flutter framework, focusing on cross-platform compatibility and user experience."
            achievements={[
              "Created UI/UX designs for educational mobile applications",
              "Implemented cross-platform features using Flutter",
              "Collaborated with backend team for API integration"
            ]}
            techStack={[{ name: "Figma", icon: "images/tech-logos/figma.svg" },
            { name: "Flutter", icon: "images/tech-logos/flutter.svg" },
            ]}
          />
          <WorkExperienceCard
            company="Dynamite Games"
            role="Software Engineer Intern"
            logo="images/dynamite-games-logo.png"
            duration="May 2020 - Aug 2020"
            description="Developed game features and tools using TypeScript, focusing on performance optimization and user engagement."
            achievements={[
              "Implemented new game mechanics that increased user retention by 15%",
              "Optimized rendering pipeline for better performance on mobile devices",
              "Created developer tools to streamline content creation process"
            ]}
            techStack={[
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg" },
              { name: "Telegram", icon: "images/tech-logos/telegram.svg" },
              { name: "Google Sheets", icon: "images/tech-logos/google-sheets.svg" }]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Stiks The Game"
            description="Unity Game"
            logo="images/sticks-logo.png"
            techStack={[{ name: "Unity", icon: "images/tech-logos/unity.svg" },
            { name: "C Sharp", icon: "images/tech-logos/csharp.svg" }
            ]}
          />
          <ProjectCard
            title="FABook"
            description="Digital address book for financial advisors"
            logo="images/FABook-logo.png"
            techStack={[{ name: "Java", icon: "images/tech-logos/java.svg" }]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EducationCard
            school="National University of Singapore"
            logo="images/nus-logo.png"
          />
          <EducationCard
            school="Pioneer Junior College"
            logo="images/pjc-logo.png"
          />
          <EducationCard
            school="Anglo-Chinese School (Primary)"
            logo="images/acs-logo.png"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-primary/60">
        <p>🚧 This website is still under construction 🚧</p>
      </footer>
    </main>
  )
}
