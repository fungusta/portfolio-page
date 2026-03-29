export interface TechStackItem {
  name: string
  icon: string
  link: string
}

export interface WorkExperience {
  company: string
  role: string
  logo: string
  link: string
  duration: string
  description: string
  achievements: string[]
  techStack: TechStackItem[]
}

export const workExperiences: WorkExperience[] = [
  {
    company: "NCS",
    role: "Software Engineer",
    logo: "images/ncs-logo.png",
    link: "https://www.ncs.co/en-sg/",
    duration: "Sept 2025 - Present",
    description: "Building an internal AI productivity tool at NCS to improve how teams access knowledge and complete tasks.",
    achievements: [
      "Enhanced LLM orchestration flow with multi-provider support (OpenAI & Anthropic), improving model switching flexibility with latest models.",
      "Designed and shipped agent workflows that streamlined internal knowledge retrieval, reducing average query resolution time.",
    ],
    techStack: [
      { name: "Python", icon: "images/tech-logos/python.svg", link: "https://www.python.org/" },
      { name: "PostgreSQL", icon: "images/tech-logos/postgresql.svg", link: "https://www.postgresql.org/" },
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Langfuse", icon: "images/tech-logos/langfuse.svg", link: "https://langfuse.com/" },
    ],
  },
  {
    company: "Ryde",
    role: "Software Engineering Intern",
    logo: "images/ryde-logo.png",
    link: "https://rydesharing.com/",
    duration: "Jan 2025 - June 2025",
    description: "Developed and maintained WeChat Mini Programs for ride-hailing services, focusing on user experience and performance optimization.",
    achievements: [
      "Built a secure one-on-one chat platform within WeChat Mini Program",
      "Implemented end to end calling between WeChat Mini Program and Ryde's Driver App",
    ],
    techStack: [
      { name: "Javascript", icon: "images/tech-logos/javascript.svg", link: "https://www.javascript.com/" },
      { name: "WeChat", icon: "images/tech-logos/wechat.svg", link: "https://www.wechat.com/" },
      { name: "WeChat Mini Program", icon: "images/tech-logos/wechat-1.svg", link: "https://developers.weixin.qq.com/miniprogram/en/dev/framework/" },
    ],
  },
  {
    company: "Economy-v1",
    role: "Frontend Developer",
    logo: "images/economy-v1-logo.png",
    link: "https://economy-v1.com/",
    duration: "Oct 2024 - Dec 2024",
    description: "Built a responsive web application that integrates Bitcoin Lightning to empower clients in building and running AI agents.",
    achievements: [
      "Developed Bitcoin Lightning integration for AI agent platform for clients to build and run AI agents",
    ],
    techStack: [
      { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
      { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" },
    ],
  },
  {
    company: "Cyber Security Agency of Singapore (CSA)",
    role: "Mobile Cybersecurity Intern",
    logo: "images/csa-logo.jpg",
    link: "https://www.csa.gov.sg/",
    duration: "Dec 2023 - Mar 2024",
    description: "Pioneered a comprehensive evaluation of mobile antivirus solutions on iOS and Android for the general public.",
    achievements: [
      "Tested 20 antivirus apps across iOS and Android platforms",
      "Developed grading scheme to assess effectiveness against threats",
      "Used Kali Linux for secure malware sample storage",
    ],
    techStack: [
      { name: "VMWare", icon: "images/tech-logos/vmware.svg", link: "https://www.vmware.com/" },
    ],
  },
  {
    company: "Witz-U",
    role: "Mobile App Developer Intern",
    logo: "images/witzu-logo.png",
    link: "https://www.witzuhealth.com/",
    duration: "May 2023 - Aug 2023",
    description: "Designed and developed mobile applications using Flutter framework, focusing on cross-platform compatibility and user experience.",
    achievements: [
      "Built feed page for users to view and interact with posts",
    ],
    techStack: [
      { name: "Figma", icon: "images/tech-logos/figma.svg", link: "https://www.figma.com/" },
      { name: "Flutter", icon: "images/tech-logos/flutter.svg", link: "https://flutter.dev/" },
    ],
  },
  {
    company: "Dynamite Games",
    role: "Software Engineer Intern",
    logo: "images/dynamite-games-logo.png",
    link: "https://www.dynamitegames.io/",
    duration: "Dec 2022 - Jan 2023",
    description: "Developed an automated broadcast Telegram bot capable of broadcasting messages to multiple groups simultaneously.",
    achievements: [
      "Ensured 24/7 uptime through Google Apps Script integration",
      "Implemented targeted alerts to multiple audience groups",
    ],
    techStack: [
      { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
      { name: "Telegram", icon: "images/tech-logos/telegram.svg", link: "https://telegram.org/" },
      { name: "Google Sheets", icon: "images/tech-logos/google-sheets.svg", link: "https://www.google.com/sheets/about/" },
    ],
  },
]
