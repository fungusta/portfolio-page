import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans', // This creates the CSS variable
})

export const metadata: Metadata = {
  title: "Peter Fung",
  description: "A little bit about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>{children}</body>
    </html>
  );
}
