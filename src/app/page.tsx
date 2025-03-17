import { ArrowDown, Linkedin, Github, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { WorkExperienceCard } from "@/components/work-experience-card"
import { ProjectCard } from "@/components/project-card"
// import { EducationCard } from "@/components/education-card"
import { ProfileImageCarousel } from "@/components/profile-image-carousel"

export default function Page() {
  return (
    <main className="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative rounded-full overflow-hidden mb-6 border-4 border-secondary/20 shadow-lg">
          <ProfileImageCarousel 
            images={["images/headshot.jpg", "images/casualshot.jpg", "images/drone.jpeg"]} 
            interval={3000} 
            alt="Peter Fung profile photo"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary">Peter Fung</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary mt-2">Software Engineer</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary mt-2">Crafting digital experiences through code</p>
        <ArrowDown className="mt-8 text-primary animate-bounce" size={24} />
      </section>

      {/* About Me Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-secondary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="p-4 sm:p-6 container-neumorphic-inset">
            <h3 className="text-base sm:text-lg font-bold text-primary mb-2">Software Engineering</h3>
            <p className="text-sm sm:text-base text-primary/80 font-light">
              Passionate about creating elegant solutions to complex problems. Experienced in full stack development
              with a focus on modern web technologies.
            </p>
          </Card>
          <Card className="p-4 sm:p-6 container-neumorphic-inset min-h-[px]">
            <h3 className="text-base sm:text-lg font-bold text-primary mb-2">Visual Creation</h3>
            <p className="text-sm sm:text-base text-primary/80 font-light">
              I enjoy exploring different UI design techniques, my current favourite: Neumorphism.
              <br></br>
              <br></br>
              And when I am not coding, I enjoy taking beautiful landscapes using my camera and drone.
            </p>
          </Card>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-secondary">Work Experience</h2>
        <div className="space-y-4">
          <WorkExperienceCard
            company="Ryde"
            role="Software Engineering Intern"
            logo="images/ryde-logo.png"
            link="https://rydesharing.com/"
            duration="Jan 2025 - Present"
            description="Developed and maintained WeChat Mini Programs for ride-hailing services, focusing on user experience and performance optimization."
            achievements={[
              "Built a secure one-on-one chat platform within WeChat Mini Program",
              "Implemented end to end calling between WeChat Mini Program and Ryde's Driver App"
            ]}
            techStack={[
              { name: "Javascript", icon: "images/tech-logos/javascript.svg", link: "https://www.javascript.com/" },
              { name: "WeChat", icon: "images/tech-logos/wechat.svg", link: "https://www.wechat.com/" },
              { name: "WeChat Mini Program", icon: "images/tech-logos/wechat-1.svg", link: "https://developers.weixin.qq.com/miniprogram/en/dev/framework/" },
            ]}
          />
          <WorkExperienceCard
            company="Economy-v1"
            role="Frontend Developer"
            logo="images/economy-v1-logo.png"
            link="https://economy-v1.com/"
            duration="Oct 2024 - Dec 2024"
            description="Built a responsive web application that integrates Bitcoin Lightning to empower clients in building and running AI agents."
            achievements={[
              "Developed Bitcoin Lightning integration for AI agent platform for clients to build and run AI agents"
            ]}
            techStack={[
              { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" }
            ]}
          />
          <WorkExperienceCard
            company="Cyber Security Agency of Singapore (CSA)"
            role="Mobile Cybersecurity Intern"
            logo="images/csa-logo.jpg"
            link="https://www.csa.gov.sg/"
            duration="Dec 2023 - Mar 2024"
            description="Pioneered a comprehensive evaluation of mobile antivirus solutions on iOS and Android for the general public."
            achievements={[
              "Tested 20 antivirus apps across iOS and Android platforms",
              "Developed grading scheme to assess effectiveness against threats",
              "Used Kali Linux for secure malware sample storage",
            ]}
            techStack={[{ name: "VMWare", icon: "images/tech-logos/vmware.svg", link: "https://www.vmware.com/" }]}
          />
          <WorkExperienceCard
            company="Witz-U"
            role="Mobile App Developer Intern"
            logo="images/witzu-logo.png"
            link="https://www.witzuhealth.com/"
            duration="May 2023 - Aug 2023"
            description="Designed and developed mobile applications using Flutter framework, focusing on cross-platform compatibility and user experience."
            achievements={[
              "Built feed page for users to view and interact with posts"
            ]}
            techStack={[{ name: "Figma", icon: "images/tech-logos/figma.svg", link: "https://www.figma.com/" },
            { name: "Flutter", icon: "images/tech-logos/flutter.svg", link: "https://flutter.dev/" },
            ]}
          />
          <WorkExperienceCard
            company="Dynamite Games"
            role="Software Engineer Intern"
            logo="images/dynamite-games-logo.png"
            link="https://www.dynamitegames.io/"
            duration="Dec 2022 - Jan 2023"
            description= "Developed an automated broadcast Telegram bot capable of broadcasting messages to multiple groups simultaneously."
            achievements={[
              "Ensured 24/7 uptime through Google Apps Script integration",
              "Implemented targeted alerts to multiple audience groups"
            ]}
            techStack={[
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Telegram", icon: "images/tech-logos/telegram.svg", link: "https://telegram.org/" },
              { name: "Google Sheets", icon: "images/tech-logos/google-sheets.svg", link: "https://www.google.com/sheets/about/" }]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-secondary">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="FABook"
            description="Digital address book for financial advisors"
            logo="images/FABook-logo.png"
            link="https://github.com/fungusta/FABook"
            techStack={[{ name: "Java", icon: "images/tech-logos/java.svg", link: "https://www.java.com/" }]}
          />
          <ProjectCard
            title="Stiks The Game"
            description="2D hack-and-slash platformer"
            logo="images/sticks-logo.png"
            link="https://github.com/fungusta/StiksTheGame"
            techStack={[{ name: "Unity", icon: "images/tech-logos/unity.svg", link: "https://unity.com/" },
            { name: "C Sharp", icon: "images/tech-logos/csharp.svg", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
            ]}
          />
        </div>
      </section>

      {/* Education Section
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
      </section> */}

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-sm sm:text-base text-primary/60">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-secondary">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/peterjosephfung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-primary hover:scale-110"
              aria-label="LinkedIn Profile"
              tabIndex={0}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/fungusta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-primary hover:scale-110"
              aria-label="GitHub Profile"
              tabIndex={0}
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:peterjosephfung@gmail.com" 
              className="transition-all duration-300 hover:text-primary hover:scale-110"
              aria-label="Email Me"
              tabIndex={0}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <p>🚧 This website is still under construction 🚧</p>
      </footer>
    </main>
  )
}
