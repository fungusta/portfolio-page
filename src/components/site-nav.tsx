'use client'

import type { ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Home } from 'lucide-react'

const pageLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
]

const LINK_CLASS =
  'rounded-full px-3 py-2 sm:px-4 text-sm font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40'

// Floating soft-UI pill shared by every page; the current page sits pressed into it.
export const SiteNav = (): ReactElement => {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-3 sm:top-4 z-50 flex justify-center px-4">
      <div className="neu-button flex items-center gap-1 rounded-full p-1.5">
        <Link
          href="/"
          className={`${LINK_CLASS} text-secondary ${pathname === '/' ? 'neu-pressed' : 'hover:text-primary'}`}
          aria-label="Peter Fung, home"
          aria-current={pathname === '/' ? 'page' : undefined}
          tabIndex={0}
        >
          <Home size={18} className="sm:hidden" aria-hidden="true" />
          <span className="hidden sm:inline">Peter Fung</span>
        </Link>

        <span className="mx-1 h-5 w-px bg-primary/25" aria-hidden="true" />

        {pageLinks.map(({ href, label }) => {
          const isCurrent = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={`${LINK_CLASS} ${isCurrent ? 'neu-pressed text-secondary' : 'text-ink-soft hover:text-secondary'}`}
              aria-current={isCurrent ? 'page' : undefined}
              tabIndex={0}
            >
              {label}
            </Link>
          )
        })}

        <a
          href="/PeterJosephFungYuRen_Resume.pdf"
          download
          className={`${LINK_CLASS} inline-flex items-center gap-1.5 text-ink-soft hover:text-secondary`}
          aria-label="Download resume"
          tabIndex={0}
        >
          Resume
          <Download size={15} aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}
