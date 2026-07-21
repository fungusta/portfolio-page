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
    role: "AI Software Engineer",
    logo: "images/ncs-logo.png",
    link: "https://www.ncs.co/en-sg/",
    duration: "Sep 2025 - Present",
    description: "Building FastAPI backend services and LLM pipelines for NCSgpt, an internal AI platform used by more than 1,000 employees.",
    achievements: [
      "Developed a Retrieval-Augmented Generation pipeline over enterprise knowledge sources, combining vector search with LLM generation to ground responses and reduce hallucinations.",
      "Instrumented NCSgpt with Langfuse and OpenTelemetry for end-to-end observability across prompt tracing, latency monitoring, and cost tracking.",
      "Designed an Email Agent harness over Microsoft Graph APIs with intent routing and retrieval for secure email search, summarisation, and reply drafting.",
      "Engineered an AI PowerPoint generation service with Dockerised Python agents that autonomously generate, modify, and adapt decks.",
    ],
    techStack: [
      { name: "Python", icon: "images/tech-logos/python.svg", link: "https://www.python.org/" },
      { name: "FastAPI", icon: "images/tech-logos/fastapi.svg", link: "https://fastapi.tiangolo.com/" },
      { name: "OpenAI", icon: "images/tech-logos/openai.svg", link: "https://platform.openai.com/" },
      { name: "Anthropic", icon: "images/tech-logos/anthropic.svg", link: "https://www.anthropic.com/" },
      { name: "Langfuse", icon: "images/tech-logos/langfuse.svg", link: "https://langfuse.com/" },
      { name: "Microsoft Azure", icon: "images/tech-logos/azure.svg", link: "https://azure.microsoft.com/" },
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
      "Developed real-time one-on-one chat with WebSockets, delivery statuses, read receipts, and push notifications.",
      "Integrated in-app calling via WebView, handling call initiation, join, and termination states.",
      "Reduced initial chat history load time by approximately 60% using lazy-loading pagination.",
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
    description: "Built a responsive web platform that lets users create, manage, and host nodes for AI agents, with real-time visibility into each node's specifications and status.",
    achievements: [
      "Designed and implemented key product surfaces including the landing page, node details page, and node update page.",
      "Used Next.js, TypeScript, React, and Tailwind CSS to deliver an intuitive and scalable frontend experience.",
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
    description: "Conducted in-depth research and evaluation of mobile antivirus applications across iOS and Android to assess how well they protect everyday users.",
    achievements: [
      "Tested 20 antivirus applications across iOS and Android platforms.",
      "Developed a grading scheme to assess each application's effectiveness against identified threats and presented the findings to senior cyber security professionals.",
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
    description: "Designed and built mobile app features with Flutter and Dart, collaborating across functions to improve both interface quality and content delivery.",
    achievements: [
      "Designed 40 new mobile interfaces in Figma and created interactive prototypes to communicate new functionality clearly.",
      "Implemented a dynamic feed system backed by RESTful APIs so users could view content from other users more smoothly.",
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
