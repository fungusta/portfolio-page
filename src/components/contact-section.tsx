import type { ReactElement } from "react"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { RevealSection } from "@/components/ui/reveal-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { RISE } from "@/constants/motion"

const contactLinks = [
  { href: "https://linkedin.com/in/peterjosephfung", label: "LinkedIn Profile", icon: Linkedin, delay: "[animation-delay:150ms]" },
  { href: "https://github.com/fungusta", label: "GitHub Profile", icon: Github, delay: "[animation-delay:230ms]" },
  { href: "mailto:peterjosephfung@gmail.com", label: "Email Me", icon: Mail, delay: "[animation-delay:310ms]" },
]

// Closes every page so a visitor can reach out wherever they stop reading.
export const ContactSection = (): ReactElement => (
  <RevealSection ariaLabel="Contact" className="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-24 sm:py-32 text-center">
    <div className="mx-auto max-w-2xl">
      <SectionHeading
        title="Let's Connect"
        description="If you'd like to chat about a role, a project, or just say hi, I'd love to hear from you."
        centered
      />

      <div className="mt-10 flex items-center justify-center gap-5 sm:gap-7">
        {contactLinks.map(({ href, label, icon: Icon, delay }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`neu-button neu-pressable flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full text-secondary transition-colors hover:text-primary ${RISE} ${delay}`}
            aria-label={label}
            tabIndex={0}
          >
            <Icon size={24} />
          </a>
        ))}
      </div>

      <a
        href="/PeterJosephFungYuRen_Resume.pdf"
        download
        className={`neu-button neu-pressable mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold text-secondary ${RISE} [animation-delay:390ms]`}
        aria-label="Download resume"
        tabIndex={0}
      >
        Download Resume
        <Download size={18} />
      </a>
    </div>
  </RevealSection>
)
