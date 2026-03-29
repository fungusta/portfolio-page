import { ArrowDown, Linkedin, Github, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { WorkExperienceTimeline } from "@/components/work-experience-timeline"
import { ProjectCard } from "@/components/project-card"
// import { EducationCard } from "@/components/education-card"
import { ProfileImageCarousel } from "@/components/profile-image-carousel"
import { FullpageScroll } from "@/components/fullpage-scroll"

export default function Page() {
  const sections = [
    // Hero Section
    <section key="hero" className="flex flex-col items-center justify-center h-screen text-center p-4 px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48">
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
      </section>,

    // About Me Section
    <section key="about" className="flex flex-col justify-center h-screen px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 sm:mb-9 text-secondary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Card className="p-5 sm:p-7 container-neumorphic-inset">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">Software Engineering</h3>
              <p className="text-base sm:text-lg md:text-xl text-primary/80 font-light leading-relaxed">
                Passionate about creating elegant solutions to complex problems. Experienced in full stack development
                with a focus on modern web technologies.
              </p>
            </Card>
            <Card className="p-5 sm:p-7 container-neumorphic-inset min-h-[px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">Visual Creation</h3>
              <p className="text-base sm:text-lg md:text-xl text-primary/80 font-light leading-relaxed">
                I enjoy exploring different UI design techniques, my current favourite: Neumorphism.
                <br></br>
                <br></br>
                And when I am not coding, I enjoy taking beautiful landscapes using my camera and drone.
              </p>
            </Card>
          </div>
        </div>
      </section>,

    // Work Experience Section
    <section key="experience" className="h-screen flex flex-col justify-center px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 sm:mb-9 text-secondary">Work Experience</h2>
          <WorkExperienceTimeline />
        </div>
      </section>,

    // Projects Section
    <section key="projects" className="h-screen flex flex-col px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto w-full overflow-y-auto flex-1 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 sm:mb-9 text-secondary">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
            title="FABook"
            description="Digital address book for financial advisors"
            logo="images/FABook-logo.png"
            link="https://github.com/fungusta/FABook"
            coreStack={[{ name: "Java", icon: "images/tech-logos/java.svg", link: "https://www.java.com/" }]}
            />
            <ProjectCard
            title="Stiks The Game"
            description="2D hack-and-slash platformer"
            logo="images/sticks-logo.png"
            link="https://github.com/fungusta/StiksTheGame"
            coreStack={[
              { name: "Unity", icon: "images/tech-logos/unity.svg", link: "https://unity.com/" },
              { name: "C Sharp", icon: "images/tech-logos/csharp.svg", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
            ]}
            />
          </div>
          <ProjectCard
            title="HomeCooked"
            description="HomeCooked saves your recipes and instantly converts website or Instagram posts into clean, usable cooking instructions."
            logo="images/homecooked-logo.png"
            link="https://home-cooked-gamma.vercel.app/"
            coreStack={[
              { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Node.js", icon: "images/tech-logos/nodejs.svg", link: "https://nodejs.org/" },
              { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" },
            ]}
            infraServices={[
              { name: "Supabase", link: "https://supabase.com/" },
              { name: "MySQL", link: "https://www.mysql.com/" },
              { name: "Azure", link: "https://azure.microsoft.com/" },
              { name: "Vercel", link: "https://vercel.com/" }
            ]}
          />
          <ProjectCard
            title="RainOracle"
            description="A fast, one-button weather app built to provide immediate weather forecasts"
            logo="images/rain-oracle-logo.png"
            link="https://rain-oracle-nu.vercel.app/"
            coreStack={[
              { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Node.js", icon: "images/tech-logos/nodejs.svg", link: "https://nodejs.org/" },
              { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" },
            ]}
            infraServices={[
              { name: "Vercel", link: "https://vercel.com/" }
            ]}
          />
        </div>
      </section>,

    // Footer
    <footer key="footer" className="h-screen flex flex-col justify-center items-center py-6 sm:py-8 text-center text-base sm:text-lg text-primary/60 px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-secondary">Contact Me</h2>
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
      </footer>
  ];

  return <FullpageScroll>{sections}</FullpageScroll>
}
