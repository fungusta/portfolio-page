export type StackItem = { name: string; icon: string; link: string }

export type Project = {
  title: string
  summary: string
  // Highlight shown in an inset box under the summary
  note?: string
  status?: string
  // 16:10 screenshot (1280x800) shown at the top of the card
  preview: string
  liveLink?: string
  appStoreLink?: string
  codeLink?: string
  stack: readonly StackItem[]
}

// Newest first
export const projects: Project[] = [
  {
    title: "PayMeLah",
    summary: "A React Native and FastAPI group bill-splitting app for receipt scanning, shared expense tracking, and automated settlements.",
    note:
      "Its OCR and AI receipt-parsing pipeline reduces manual input time by over 70%, while itemised and shared-item splitting keeps every group settlement clear.",
    preview: "images/projects/paymelah.jpg",
    liveLink: "https://paymelah-app.vercel.app/",
    appStoreLink: "https://apps.apple.com/sg/app/paymelah/id6761058776",
    stack: [
      { name: "FastAPI", icon: "images/tech-logos/fastapi.svg", link: "https://fastapi.tiangolo.com/" },
      { name: "React Native", icon: "images/tech-logos/react.svg", link: "https://reactnative.dev/" },
      { name: "Supabase", icon: "images/tech-logos/supabase.svg", link: "https://supabase.com/" },
      { name: "PostgreSQL", icon: "images/tech-logos/postgresql.svg", link: "https://www.postgresql.org/" },
    ],
  },
  {
    title: "HomeCooked",
    summary: "A React and Next.js app for recipe management, web scraping, and AI-assisted recipe creation.",
    note:
      "OpenAI APIs turn web pages and Instagram content into clean, structured recipes in under 30 seconds.",
    preview: "images/projects/homecooked.jpg",
    codeLink: "https://github.com/fungusta/RecipeApp",
    stack: [
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
      { name: "Supabase", icon: "images/tech-logos/supabase.svg", link: "https://supabase.com/" },
      { name: "OpenAI", icon: "images/tech-logos/openai.svg", link: "https://platform.openai.com/" },
    ],
  },
  {
    title: "RainOracle",
    summary: "Minimalist weather app for fast, location-specific rain forecasts.",
    preview: "images/projects/rainoracle.jpg",
    liveLink: "https://rain-oracle-nu.vercel.app/",
    stack: [
      { name: "React", icon: "images/tech-logos/react.svg", link: "https://react.dev/" },
      { name: "Next.js", icon: "images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
      { name: "Tailwind", icon: "images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "FABook",
    summary: "Digital address book for financial advisors.",
    preview: "images/projects/fabook.jpg",
    codeLink: "https://github.com/fungusta/FABook",
    stack: [{ name: "Java", icon: "images/tech-logos/java.svg", link: "https://www.java.com/" }],
  },
  {
    title: "Stiks The Game",
    summary: "2D hack-and-slash platformer.",
    preview: "images/projects/stiks.jpg",
    codeLink: "https://github.com/fungusta/StiksTheGame",
    stack: [
      { name: "Unity", icon: "images/tech-logos/unity.svg", link: "https://unity.com/" },
      { name: "C Sharp", icon: "images/tech-logos/csharp.svg", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    ],
  },
]
