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
    company: "GovTech Singapore",
    role: "Software Engineer",
    logo: "images/govtech-logo.jpg",
    link: "https://www.tech.gov.sg/",
    duration: "Nov 2026 - Present",
    description: "Software Engineer in the Singpass team.",
    achievements: [],
    techStack: [],
  },
  {
    company: "NCS",
    role: "AI Engineer",
    logo: "images/ncs-logo.png",
    link: "https://www.ncs.co/en-sg/",
    duration: "Sep 2025 - Nov 2026",
    description: "Worked on NCSgpt, an internal AI platform used by 1,000+ employees.",
    achievements: [
      "Built FastAPI services and LLM pipelines with OpenAI and Anthropic models and real-time streaming.",
      "Developed a PowerPoint agent that creates and refines NCS template presentations in containerised Python environments, with built-in visual quality checks.",
      "Developed an Email Agent harness that lets users search, summarise, and draft replies to their emails within NCSgpt.",
    ],
    techStack: [
      { name: "Python", icon: "images/tech-logos/python.svg", link: "https://www.python.org/" },
      { name: "FastAPI", icon: "images/tech-logos/fastapi.svg", link: "https://fastapi.tiangolo.com/" },
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "PostgreSQL", icon: "images/tech-logos/postgresql.svg", link: "https://www.postgresql.org/" },
      { name: "Docker", icon: "images/tech-logos/docker.svg", link: "https://www.docker.com/" },
      { name: "OpenAI", icon: "images/tech-logos/openai.svg", link: "https://platform.openai.com/" },
      { name: "Anthropic", icon: "images/tech-logos/anthropic.svg", link: "https://www.anthropic.com/" },
    ],
  },
  {
    company: "Ryde",
    role: "Frontend Engineer Intern",
    logo: "images/ryde-logo.png",
    link: "https://rydesharing.com/",
    duration: "Jan 2025 - Jun 2025",
    description: "Built Ryde's WeChat Mini Program frontend from scratch as the sole frontend developer.",
    achievements: [
      "Developed real-time chat with WebSockets, read receipts, and push notifications.",
      "Integrated in-app calling via WebView.",
      "Cut chat history load time by about 60% with lazy-loading pagination.",
    ],
    techStack: [
      { name: "JavaScript", icon: "images/tech-logos/javascript.svg", link: "https://www.javascript.com/" },
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
    description: "Built a web platform for creating, managing, and hosting AI agent nodes, with live status for each node.",
    achievements: [
      "Designed and built the landing, node details, and node update pages.",
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
    description: "Evaluated how well mobile antivirus apps protect everyday users.",
    achievements: [
      "Tested 20 antivirus apps across iOS and Android.",
      "Developed a grading scheme for each app's effectiveness and presented the findings to senior cyber security professionals.",
      "Used Kali Linux to securely store malware samples for evaluation.",
    ],
    techStack: [
      { name: "VMWare", icon: "images/tech-logos/vmware.svg", link: "https://www.vmware.com/" },
    ],
  },
  {
    company: "Witz-U",
    role: "Mobile App Developer",
    logo: "images/witzu-logo.png",
    link: "https://www.witzuhealth.com/",
    duration: "May 2023 - Aug 2023",
    description: "Designed and built mobile app features with Flutter and Dart.",
    achievements: [
      "Designed 40 mobile screens and interactive prototypes in Figma.",
      "Implemented a feed of other users' content backed by RESTful APIs.",
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
    description: "Developed a Telegram bot that broadcasts messages to multiple groups at once.",
    achievements: [
      "Kept it running 24/7 with Google Apps Script.",
      "Implemented targeted alerts for different audience groups.",
    ],
    techStack: [
      { name: "TypeScript", icon: "images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
      { name: "Telegram", icon: "images/tech-logos/telegram.svg", link: "https://telegram.org/" },
      { name: "Google Sheets", icon: "images/tech-logos/google-sheets.svg", link: "https://www.google.com/sheets/about/" },
    ],
  },
]
