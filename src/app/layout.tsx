import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans', // This creates the CSS variable
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peterjosephfung.com"),
  title: "Peter Fung",
  description: "A little bit about me",
  openGraph: {
    title: "Peter Fung",
    description: "A little bit about me",
    url: "https://www.peterjosephfung.com",
    siteName: "Peter Fung",
    images: [
      {
        url: "/images/headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Peter Fung portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Fung",
    description: "A little bit about me",
    images: ["/images/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
