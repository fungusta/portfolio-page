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
              "Developed a secure one-on-one chat platform as a WeChat Mini Program using WXML, WXSS, and JavaScript.",
              "Leveraged WeChat’s OAuth 2.0 for robust user authentication and integrated MongoDB to efficiently store and retrieve conversation histories.",
              "Implemented real-time messaging with WebSockets, incorporating status indicators (sent, delivered, read) and push notifications to ensure instant and reliable communication.",
              "Designed and developed lazy-loading functionality for older chats, enhancing user experience by reducing load times and maintaining interface responsiveness.",
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
            duration="Oct 2024 - Dec 2024"
            description="Built a responsive web application that integrates Bitcoin Lightning to empower clients in building and running AI agents."
            achievements={[
              "Utilized a modern tech stack including Next.js, TypeScript, React, and Tailwind CSS to create efficient, scalable, and user-friendly interfaces.",
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
            duration="Dec 2023 - Mar 2024"
            description="Pioneered a comprehensive evaluation of mobile antivirus solutions on iOS and Android for the general public."
            achievements={[
              "Conducted in-depth research and testing on 20 antivirus applications across iOS and Android platforms.",
              "Developed a comprehensive grading scheme to assess the effectiveness of each application in safeguarding users against identified threats.",
              "Presented findings to senior cyber security professionals, influencing decisions on future security enhancements.",
              "Utilized Kali Linux for secure storage of malware samples used in mobile antivirus testing.",
            ]}
            techStack={[{ name: "VMWare", icon: "images/tech-logos/vmware.svg" }]}
          />
          <WorkExperienceCard
            company="Witz-U"
            role="Mobile App Developer Intern"
            logo="images/witzu-logo.png"
            duration="May 2023 - Aug 2023"
            description="Designed and developed mobile applications using Flutter framework, focusing on cross-platform compatibility and user experience."
            achievements={[
              "Created UI/UX designs for witz-u's mobile applications",
              "Implemented a feed like interface for users to view and interact with content",
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
            duration="Dec 2022 - Jan 2023"
            description= "Developed an automated broadcast Telegram bot capable of broadcasting messages to multiple groups simultaneously."
            achievements={[
              "Ensured continuous 24/7 uptime of the bot through Google Apps Script integration.",
              "Enabled targeted alert distribution to multiple audiences, enhancing internal communication and ensuring timely delivery of critical notifications.",
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
