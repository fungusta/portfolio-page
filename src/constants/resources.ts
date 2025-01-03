import { get } from "http"

const getImagePath = (path: string) => {
    const isProd = process.env.NODE_ENV === 'production'
    return isProd ? `/portfolio-page${path}` : path
}

export const companies = [
    {
        id: 1,
        src: getImagePath('/images/dynamite-games-logo.jpg'),
        title: 'Dynamite Games',
        time:'Dec 2022 - Jan 2023',
        description: 'Utilized the Telegram Bot API to create an automated broadcast Telegram bot with continuous 24/7 uptime, enabling the company to distribute targeted alerts to multiple audiences.'
    },
    {
        id: 2,
        src: getImagePath('/images/witzu-logo.jpg'),
        title: 'Witz-U',
        time:'May 2023 - Aug 2023',
        description: 'Spearheaded the design of mobile application interfaces using Figma, creating interactive prototypes for new functionalities and adding over 40 new UI screens, while collaborating with cross-functional teams to build features in Flutter and Dart, ensuring a seamless user experience.'
    },
    {
        id: 3,
        src: getImagePath('/images/csa-logo.jpg'),
        title: 'Cybersecurity Agency of Singapore',
        time:'Dec 2023 - Mar 2024',
        description: 'Conducted in-depth research and testing of 20 antivirus applications on iOS and Android and developed a detailed grading scheme to assess how effectively each product safeguarded users against identified threats.'
    },
    {
        id: 4,
        src: getImagePath('/images/node-logo.jpg'),
        title: 'economy-v1',
        time:'Oct 2024 - Dec 2024',
        description: 'Developed a web application integrating Bitcoin Lightning to enable clients to build and run AI agents, leveraging Next.js, TypeScript, React, and Tailwind CSS to deliver responsive and efficient user interfaces.'
    }
]

export const projects = [
    {
        id: 1,
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiMTljZDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zd29yZHMiPjxwb2x5bGluZSBwb2ludHM9IjE0LjUgMTcuNSAzIDYgMyAzIDYgMyAxNy41IDE0LjUiLz48bGluZSB4MT0iMTMiIHgyPSIxOSIgeTE9IjE5IiB5Mj0iMTMiLz48bGluZSB4MT0iMTYiIHgyPSIyMCIgeTE9IjE2IiB5Mj0iMjAiLz48bGluZSB4MT0iMTkiIHgyPSIyMSIgeTE9IjIxIiB5Mj0iMTkiLz48cG9seWxpbmUgcG9pbnRzPSIxNC41IDYuNSAxOCAzIDIxIDMgMjEgNiAxNy41IDkuNSIvPjxsaW5lIHgxPSI1IiB4Mj0iOSIgeTE9IjE0IiB5Mj0iMTgiLz48bGluZSB4MT0iNyIgeDI9IjQiIHkxPSIxNyIgeTI9IjIwIi8+PGxpbmUgeDE9IjMiIHgyPSI1IiB5MT0iMTkiIHkyPSIyMSIvPjwvc3ZnPg==',
        title: 'Sticks The Game',
        time:'May 2022 - Aug 2022',
        description: 'Built an engaging 2D hack-and-slash platformer game with immersive graphics and smooth gameplay, leveraging Git and GitHub for efficient project management and version control.'
    },
    {
        id: 2,
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiMTljZDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3QiPjxwYXRoIGQ9Ik0xMiA4VjRIOCIvPjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgeD0iNCIgeT0iOCIgcng9IjIiLz48cGF0aCBkPSJNMiAxNGgyIi8+PHBhdGggZD0iTTIwIDE0aDIiLz48cGF0aCBkPSJNMTUgMTN2MiIvPjxwYXRoIGQ9Ik05IDEzdjIiLz48L3N2Zz4=',
        title: 'Alert Bot',
        time:'Dec 2022 - Jan 2023',
        description: 'Developed a robust Telegram bot capable of broadcasting messages to multiple groups simultaneously, ensuring continuous 24/7 uptime through Google Apps Script integration.'
    },
    {
        id: 3,
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiMTljZDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rIj48cGF0aCBkPSJNNCAxOS41di0xNUEyLjUgMi41IDAgMCAxIDYuNSAySDE5YTEgMSAwIDAgMSAxIDF2MThhMSAxIDAgMCAxLTEgMUg2LjVhMSAxIDAgMCAxIDAtNUgyMCIvPjwvc3ZnPg==',
        title: 'FABook',
        time:'Jan 2023 - Apr 2023',
        description: 'Created a customized address book for financial advisors, enhancing a basic template with advanced capabilities like PDF assignment and viewing, robust search and filter functionalities, and improved usability'
    }
]

export const education = [
    {
        id: 1,
        src: getImagePath('/images/acs-logo.png'),
        title: 'Anglo-Chinese School',
        time:'Jan 2013 - Dec 2016',
        description: ''
    },
    {
        id: 2,
        src: getImagePath('/images/pjc-logo.png'),
        title: 'Pioneer Junior College',
        time:'Jan 2017 - Dec 2018',
        description: ''
    },
    {
        id: 3,
        src: getImagePath('/images/nus-logo.png'),
        title: 'National University of Singapore',
        time:'Aug 2021 - Present',
        description: ''
    }
]

export interface Interest {
  title: string;
  images: string[];
}

export const interests: Interest[] = [
  {
    title: "Football",
    images: [
      getImagePath('/images/interests/chelsea.jpg'),
    ]
  },
  {
    title: "Drone Photography",
    images: [
      getImagePath('/images/interests/drone-shot.jpg'),
    ]
  },
  {
    title: "Gaming",
    images: [
      getImagePath('images/interests/dota.jpg')
    ]
  },
  {
    title: "Frisbee",
    images: [
      getImagePath('/images/interests/frisbee.png')
    ]
  }
]