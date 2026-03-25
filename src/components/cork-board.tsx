"use client";

import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { CorkBoardItem } from "@/components/cork-board-item";
import { DetailView } from "@/components/detail-view";
import { ContactBadge } from "@/components/contact-badge";
import type { BoardItem, ContactBadge as ContactBadgeType } from "@/types/board-types";

export function CorkBoard() {
  const [selectedItem, setSelectedItem] = useState<BoardItem | null>(null);

  // Board items data
  const boardItems: BoardItem[] = [
    {
      id: "about",
      title: "About Me",
      category: "about",
      images: [
        "/images/headshot.jpg",
        "/images/casualshot.jpg",
        "/images/drone.jpeg"
      ],
      caption: "About Me",
      rotation: 3,
      content: {
        type: "about",
        bio: "Software engineer passionate about building elegant solutions. I work across the full stack with modern web technologies, and enjoy exploring UI/UX design patterns like neumorphism. When I'm not coding, you'll find me capturing landscapes with my camera and drone."
      }
    },
    {
      id: "experiences",
      title: "Experiences",
      category: "experiences",
      images: [
        "/images/ncs-logo.png",
        "/images/ryde-logo.png",
        "/images/economy-v1-logo.png",
        "/images/csa-logo.jpg",
        "/images/witzu-logo.png",
        "/images/dynamite-games-logo.png"
      ],
      caption: "Experiences",
      rotation: -5,
      content: {
        type: "experiences",
        experiences: [
          {
            company: "NCS",
            role: "Software Engineer",
            logo: "/images/ncs-logo.png",
            link: "https://www.ncs.co/en-sg/",
            duration: "Sept 2025 - Present",
            description: "Building an internal AI productivity tool at NCS to improve how teams access knowledge and complete tasks.",
            achievements: [
              "Enhanced LLM orchestration flow with multi-provider support (OpenAI & Anthropic), improving model switching flexibility with latest models.",
              "Designed and shipped agent workflows that streamlined internal knowledge retrieval, reducing average query resolution time."
            ],
            techStack: [
              { name: "Python", icon: "/images/tech-logos/python.svg", link: "https://www.python.org/" },
              { name: "PostgreSQL", icon: "/images/tech-logos/postgresql.svg", link: "https://www.postgresql.org/" },
              { name: "React", icon: "/images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Langfuse", icon: "/images/tech-logos/langfuse.svg", link: "https://langfuse.com/" }
            ]
          },
          {
            company: "Ryde",
            role: "Software Engineering Intern",
            logo: "/images/ryde-logo.png",
            link: "https://rydesharing.com/",
            duration: "Jan 2025 - June 2025",
            description: "Developed and maintained WeChat Mini Programs for ride-hailing services, focusing on user experience and performance optimization.",
            achievements: [
              "Built a secure one-on-one chat platform within WeChat Mini Program",
              "Implemented end to end calling between WeChat Mini Program and Ryde's Driver App"
            ],
            techStack: [
              { name: "Javascript", icon: "/images/tech-logos/javascript.svg", link: "https://www.javascript.com/" },
              { name: "WeChat", icon: "/images/tech-logos/wechat.svg", link: "https://www.wechat.com/" },
              { name: "WeChat Mini Program", icon: "/images/tech-logos/wechat-1.svg", link: "https://developers.weixin.qq.com/miniprogram/en/dev/framework/" }
            ]
          },
          {
            company: "Economy-v1",
            role: "Frontend Developer",
            logo: "/images/economy-v1-logo.png",
            link: "https://economy-v1.com/",
            duration: "Oct 2024 - Dec 2024",
            description: "Built a responsive web application that integrates Bitcoin Lightning to empower clients in building and running AI agents.",
            achievements: [
              "Developed Bitcoin Lightning integration for AI agent platform for clients to build and run AI agents"
            ],
            techStack: [
              { name: "Next.js", icon: "/images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "/images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "React", icon: "/images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Tailwind", icon: "/images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" }
            ]
          },
          {
            company: "Cyber Security Agency of Singapore (CSA)",
            role: "Mobile Cybersecurity Intern",
            logo: "/images/csa-logo.jpg",
            link: "https://www.csa.gov.sg/",
            duration: "Dec 2023 - Mar 2024",
            description: "Pioneered a comprehensive evaluation of mobile antivirus solutions on iOS and Android for the general public.",
            achievements: [
              "Tested 20 antivirus apps across iOS and Android platforms",
              "Developed grading scheme to assess effectiveness against threats",
              "Used Kali Linux for secure malware sample storage"
            ],
            techStack: [
              { name: "VMWare", icon: "/images/tech-logos/vmware.svg", link: "https://www.vmware.com/" }
            ]
          },
          {
            company: "Witz-U",
            role: "Mobile App Developer Intern",
            logo: "/images/witzu-logo.png",
            link: "https://www.witzuhealth.com/",
            duration: "May 2023 - Aug 2023",
            description: "Designed and developed mobile applications using Flutter framework, focusing on cross-platform compatibility and user experience.",
            achievements: [
              "Built feed page for users to view and interact with posts"
            ],
            techStack: [
              { name: "Figma", icon: "/images/tech-logos/figma.svg", link: "https://www.figma.com/" },
              { name: "Flutter", icon: "/images/tech-logos/flutter.svg", link: "https://flutter.dev/" }
            ]
          },
          {
            company: "Dynamite Games",
            role: "Software Engineer Intern",
            logo: "/images/dynamite-games-logo.png",
            link: "https://www.dynamitegames.io/",
            duration: "Dec 2022 - Jan 2023",
            description: "Developed an automated broadcast Telegram bot capable of broadcasting messages to multiple groups simultaneously.",
            achievements: [
              "Ensured 24/7 uptime through Google Apps Script integration",
              "Implemented targeted alerts to multiple audience groups"
            ],
            techStack: [
              { name: "TypeScript", icon: "/images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Telegram", icon: "/images/tech-logos/telegram.svg", link: "https://telegram.org/" },
              { name: "Google Sheets", icon: "/images/tech-logos/google-sheets.svg", link: "https://www.google.com/sheets/about/" }
            ]
          }
        ]
      }
    },
    {
      id: "projects",
      title: "Projects",
      category: "projects",
      images: [
        "/images/homecooked-logo.png",
        "/images/rain-oracle-logo.png",
        "/images/FABook-logo.png",
        "/images/sticks-logo.png"
      ],
      caption: "Projects",
      rotation: 4,
      content: {
        type: "projects",
        projects: [
          {
            title: "HomeCooked",
            description: "HomeCooked saves your recipes and instantly converts website or Instagram posts into clean, usable cooking instructions.",
            logo: "/images/homecooked-logo.png",
            link: "https://home-cooked-gamma.vercel.app/",
            coreStack: [
              { name: "React", icon: "/images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Next.js", icon: "/images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "/images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Node.js", icon: "/images/tech-logos/nodejs.svg", link: "https://nodejs.org/" },
              { name: "Tailwind", icon: "/images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" }
            ],
            infraServices: [
              { name: "Supabase", link: "https://supabase.com/" },
              { name: "MySQL", link: "https://www.mysql.com/" },
              { name: "Azure", link: "https://azure.microsoft.com/" },
              { name: "Vercel", link: "https://vercel.com/" }
            ]
          },
          {
            title: "RainOracle",
            description: "A fast, one-button weather app built to provide immediate weather forecasts",
            logo: "/images/rain-oracle-logo.png",
            link: "https://rain-oracle-nu.vercel.app/",
            coreStack: [
              { name: "React", icon: "/images/tech-logos/react.svg", link: "https://react.dev/" },
              { name: "Next.js", icon: "/images/tech-logos/next-js.svg", link: "https://nextjs.org/" },
              { name: "TypeScript", icon: "/images/tech-logos/typescript.svg", link: "https://www.typescriptlang.org/" },
              { name: "Node.js", icon: "/images/tech-logos/nodejs.svg", link: "https://nodejs.org/" },
              { name: "Tailwind", icon: "/images/tech-logos/tailwind-css.svg", link: "https://tailwindcss.com/" }
            ],
            infraServices: [
              { name: "Vercel", link: "https://vercel.com/" }
            ]
          },
          {
            title: "FABook",
            description: "Digital address book for financial advisors",
            logo: "/images/FABook-logo.png",
            link: "https://github.com/fungusta/FABook",
            coreStack: [
              { name: "Java", icon: "/images/tech-logos/java.svg", link: "https://www.java.com/" }
            ]
          },
          {
            title: "Stiks The Game",
            description: "2D hack-and-slash platformer",
            logo: "/images/sticks-logo.png",
            link: "https://github.com/fungusta/StiksTheGame",
            coreStack: [
              { name: "Unity", icon: "/images/tech-logos/unity.svg", link: "https://unity.com/" },
              { name: "C Sharp", icon: "/images/tech-logos/csharp.svg", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
            ]
          }
        ]
      }
    },
    {
      id: "interests",
      title: "Interests",
      category: "interests",
      images: [
        "/images/interests/chelsea.jpg",
        "/images/interests/dota.jpg",
        "/images/interests/drone-shot.jpg",
        "/images/interests/frisbee.png"
      ],
      caption: "Interests",
      rotation: -3,
      content: {
        type: "interests",
        interests: [
          {
            name: "Chelsea FC",
            description: "Lifelong Chelsea FC supporter",
            image: "/images/interests/chelsea.jpg"
          },
          {
            name: "Dota 2",
            description: "Competitive gaming enthusiast",
            image: "/images/interests/dota.jpg"
          },
          {
            name: "Drone Photography",
            description: "Capturing aerial perspectives",
            image: "/images/interests/drone-shot.jpg"
          },
          {
            name: "Ultimate Frisbee",
            description: "Weekend ultimate frisbee player",
            image: "/images/interests/frisbee.png"
          }
        ]
      }
    }
  ];

  // Contact badges data
  const contactBadges: ContactBadgeType[] = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/peterjosephfung",
      rotation: -5
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com/fungusta",
      rotation: 3
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      link: "mailto:peterjosephfung@gmail.com",
      rotation: -2
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Cork Board Container */}
      <div className="w-full max-w-5xl">
        {/* Main Board Items - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 justify-items-center">
          {boardItems.map((item) => (
            <CorkBoardItem
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Contact Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {contactBadges.map((badge, index) => (
            <ContactBadge key={index} badge={badge} />
          ))}
        </div>
      </div>

      {/* Detail View */}
      {selectedItem && (
        <DetailView
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
