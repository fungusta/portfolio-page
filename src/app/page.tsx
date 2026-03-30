import Image from "next/image"
import { ArrowDown, ArrowUpRight, Download, Linkedin, Github, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { WorkExperienceTimeline } from "@/components/work-experience-timeline"
// import { EducationCard } from "@/components/education-card"
import { ProfileImageCarousel } from "@/components/profile-image-carousel"
import { FullpageScroll } from "@/components/fullpage-scroll"

type FeaturedProject = {
  title: string
  summary: string
  note: string
  status?: string
  logo?: string
  liveLink?: string
  codeLink?: string
  stack: readonly { name: string; icon: string; link: string }[]
}

type ArchivedProject = {
  title: string
  description: string
  logo: string
  link: string
  coreStack: readonly { name: string; icon: string; link: string }[]
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "PayMeLah",
    summary: "A smart Singapore bill-splitting app that scans receipts, splits items among friends, and helps groups settle up instantly with PayNow or PayLah.",
    note:
      "I built PayMeLah because I want to reduce the hastle of keeping track how much each person owes you when you pay first, this app helps make sure you are aware and that your stingy friends PAY YOU.",
    status: "Currently in testing",
    stack: [
      { name: "FastAPI", icon: "images/tech-logos/fastapi.svg", link: "https://fastapi.tiangolo.com/" },
      { name: "React Native", icon: "images/tech-logos/react.svg", link: "https://reactnative.dev/" },
      { name: "Supabase", icon: "images/tech-logos/supabase.svg", link: "https://supabase.com/" },
      { name: "PostgreSQL", icon: "images/tech-logos/postgresql.svg", link: "https://www.postgresql.org/" },
    ],
  },
  {
    title: "HomeCooked",
    summary: "An AI-powered recipe app that turns messy web pages and Instagram posts into structured, reusable recipes.",
    note:
      "I built HomeCooked to make recipe creation feel less manual. Instead of copying scattered ingredients and steps by hand, I wanted a smoother way to turn unstructured content into something clean, personal, and easy to reuse.",
    logo: "images/homecooked-logo.png",
    liveLink: "https://home-cooked-gamma.vercel.app/",
    stack: [
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Supabase", icon: "images/tech-logos/supabase.svg", link: "https://supabase.com/" },
      { name: "OpenAI", icon: "images/tech-logos/openai.svg", link: "https://platform.openai.com/" },
      { name: "Node.js", icon: "images/tech-logos/nodejs.svg", link: "https://nodejs.org/" },
    ],
  },
] 

const archivedProjects: ArchivedProject[] = [
  {
    title: "RainOracle",
    description: "Minimalist weather app for fast, location-specific rain forecasts.",
    logo: "images/rain-oracle-logo.png",
    link: "https://rain-oracle-nu.vercel.app/",
    coreStack: [
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
      { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "FABook",
    description: "Digital address book for financial advisors",
    logo: "images/FABook-logo.png",
    link: "https://github.com/fungusta/FABook",
    coreStack: [{ name: "Java", icon: "images/tech-logos/java.svg", link: "https://www.java.com/" }],
  },
  {
    title: "Stiks The Game",
    description: "2D hack-and-slash platformer",
    logo: "images/sticks-logo.png",
    link: "https://github.com/fungusta/StiksTheGame",
    coreStack: [
      { name: "Unity", icon: "images/tech-logos/unity.svg", link: "https://unity.com/" },
      { name: "C Sharp", icon: "images/tech-logos/csharp.svg", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    ],
  },
]

export default function Page() {
  const mobileFeaturedProjects = featuredProjects.slice(0, 1)
  const mobileArchivedProjects: ArchivedProject[] = [
    ...featuredProjects.slice(1).map((project) => ({
      title: project.title,
      description: project.summary,
      logo: project.logo ?? "",
      link: project.liveLink ?? project.codeLink ?? "#",
      coreStack: project.stack,
    })),
    ...archivedProjects,
  ]

  const sectionLabels = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Archive",
    "Contact",
  ]

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
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary mt-2">I build digital experiences through code.</p>
        <ArrowDown className="mt-8 text-primary animate-bounce" size={24} />
      </section>,

    // About Me Section
    <section key="about" className="flex flex-col justify-center h-screen px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 sm:mb-9 text-secondary">About</h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Card className="p-5 sm:p-7 container-neumorphic-inset">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">Software Engineering</h3>
              <p className="text-base sm:text-lg md:text-xl text-primary/80 font-light leading-relaxed">
                I care deeply about building applications that can genuinely improve people&apos;s lives.
                <br></br>
                <br></br>
                I&apos;m especially drawn to AI-powered products because I believe they&apos;re shaping the next generation of software.
              </p>
            </Card>
            <Card className="p-5 sm:p-7 container-neumorphic-inset min-h-[px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">Curious Mind</h3>
              <p className="text-base sm:text-lg md:text-xl text-primary/80 font-light leading-relaxed">
                I love exploring, experimenting, and following my curiosity. 
                <br></br>
                <br></br>
                Whether it&apos;s drone photography, new AI tools, or a random idea I can&apos;t stop thinking about, I enjoy trying things that stretch how I see and build.
              </p>
            </Card>
          </div>
        </div>
      </section>,

    // Featured Projects Section
    <section key="projects-featured" className="h-screen flex flex-col justify-center px-4 sm:px-12 md:px-24 lg:px-28 xl:px-36 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mb-7 sm:mb-9">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Recent Projects</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-primary/75 leading-relaxed">
              These are some of the projects that best show how I like to design, build, and ship products today.
            </p>
          </div>

          <div className="grid gap-6 items-stretch md:hidden">
            {mobileFeaturedProjects.map((project) => (
              <article
                key={project.title}
                className="h-full container-neumorphic-outset p-5 sm:p-6 lg:p-7"
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>
                      </div>

                      {project.logo ? (
                        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0">
                          <Image
                            src={`/${project.logo}`}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="container-neumorphic-inset rounded-2xl px-4 py-3">
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary/55">
                        Personal Note
                      </p>
                      <p className="mt-2 text-sm sm:text-base text-primary/80 leading-relaxed">
                        {project.note}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target={item.link ? "_blank" : undefined}
                          rel={item.link ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm text-primary/85 transition-transform duration-300 hover:scale-[1.02]"
                          aria-label={item.link ? `Open ${item.name}` : item.name}
                        >
                          <span className="relative h-4 w-4 shrink-0">
                            <Image src={`/${item.icon}`} alt={item.name} fill className="object-contain" />
                          </span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full container-neumorphic-outset px-4 py-2.5 text-sm font-semibold text-secondary transition-transform duration-300 hover:scale-[1.02]"
                      >
                        Try me out!
                        <ArrowUpRight size={18} />
                      </a>
                    ) : null}
                    {project.codeLink ? (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full container-neumorphic-outset px-4 py-2.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-[1.02]"
                      >
                        View Code
                        <Github size={18} />
                      </a>
                    ) : null}
                    {!project.liveLink && !project.codeLink ? (
                      <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-2.5 text-sm font-semibold text-primary/60">
                        {project.status ?? "Currently unavailable"}
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:grid lg:grid-cols-2 gap-6 items-stretch">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="h-full container-neumorphic-outset p-5 sm:p-6 lg:p-7"
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>
                      </div>

                      {project.logo ? (
                        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0">
                          <Image
                            src={`/${project.logo}`}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="container-neumorphic-inset rounded-2xl px-4 py-3">
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary/55">
                        Personal Note
                      </p>
                      <p className="mt-2 text-sm sm:text-base text-primary/80 leading-relaxed">
                        {project.note}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target={item.link ? "_blank" : undefined}
                          rel={item.link ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm text-primary/85 transition-transform duration-300 hover:scale-[1.02]"
                          aria-label={item.link ? `Open ${item.name}` : item.name}
                        >
                          <span className="relative h-4 w-4 shrink-0">
                            <Image src={`/${item.icon}`} alt={item.name} fill className="object-contain" />
                          </span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full container-neumorphic-outset px-4 py-2.5 text-sm font-semibold text-secondary transition-transform duration-300 hover:scale-[1.02]"
                      >
                        Try me out!
                        <ArrowUpRight size={18} />
                      </a>
                    ) : null}
                    {project.codeLink ? (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full container-neumorphic-outset px-4 py-2.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-[1.02]"
                      >
                        View Code
                        <Github size={18} />
                      </a>
                    ) : null}
                    {!project.liveLink && !project.codeLink ? (
                      <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-2.5 text-sm font-semibold text-primary/60">
                        {project.status ?? "Currently unavailable"}
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>,

    // Work Experience Section
    <section key="experience" className="h-screen overflow-hidden px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-8 sm:py-10 md:py-8 lg:py-10">
        <div className="max-w-6xl mx-auto flex h-full w-full flex-col">
          <h2 className="shrink-0 text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-5 lg:mb-6 text-secondary">Where I&apos;ve Worked</h2>
          <div className="min-h-0 flex-1">
            <WorkExperienceTimeline />
          </div>
        </div>
      </section>,

    // Other Projects Section
    <section key="projects-archive" className="h-screen flex flex-col justify-center px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl mb-7 sm:mb-9">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Other Projects</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-primary/75 leading-relaxed">
              These are earlier builds and experiments that still reflect the kinds of things I love making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mobileArchivedProjects.map((project) => (
              <a
                key={`mobile-${project.title}`}
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                className="group container-neumorphic-outset p-4 sm:p-5 transition-transform duration-300 hover:scale-[1.02] md:hidden"
              >
                <div className="flex items-start gap-4">
                  {project.logo ? (
                    <div className="relative h-11 w-11 shrink-0">
                      <Image
                        src={`/${project.logo}`}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  ) : null}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-secondary">
                        {project.title}
                      </h3>
                      {project.link !== "#" ? (
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-primary/50 transition-colors group-hover:text-primary"
                        />
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            {archivedProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group container-neumorphic-outset p-5 sm:p-6 transition-transform duration-300 hover:scale-[1.02] hidden md:block"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={`/${project.logo}`}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-secondary">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-primary/50 transition-colors group-hover:text-primary"
                      />
                    </div>
                    <p className="mt-1 text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.coreStack.map((item) => (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs sm:text-sm text-primary/80"
                        >
                          <span className="relative h-4 w-4 shrink-0">
                            <Image src={`/${item.icon}`} alt={item.name} fill className="object-contain" />
                          </span>
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>,

    // Footer
    <footer key="footer" className="h-screen flex flex-col justify-center items-center py-6 sm:py-8 text-center px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Let&apos;s Connect</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-primary/65">
            If you&apos;d like to chat about a role, a project, or just say hi, I&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6">
            <a
              href="https://linkedin.com/in/peterjosephfung"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/10 bg-white/55 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-primary"
              aria-label="LinkedIn Profile"
              tabIndex={0}
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/fungusta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/10 bg-white/55 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-primary"
              aria-label="GitHub Profile"
              tabIndex={0}
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:peterjosephfung@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/10 bg-white/55 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-primary"
              aria-label="Email Me"
              tabIndex={0}
            >
              <Mail size={22} />
            </a>
          </div>

          <a
            href="/PeterJosephFungYuRen_Resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-white/60 px-5 py-3 text-sm sm:text-base font-semibold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85"
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>
      </footer>
  ];

  return <FullpageScroll sectionLabels={sectionLabels}>{sections}</FullpageScroll>
}
