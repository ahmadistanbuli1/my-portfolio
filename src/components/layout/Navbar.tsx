import { useEffect, useState, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navigation'
import { personalInfo } from '../../data'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../utils/cn'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const isScrolled = useScrollPosition(24)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const brandName = personalInfo.name.split(' ')[0]

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (!href) return

    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-50 px-4 transition-all duration-500 md:px-6',
        isScrolled ? 'top-0' : 'top-4 md:top-6',
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          'mx-auto flex items-center justify-between transition-all duration-500',
          isScrolled
            ? 'h-16 max-w-7xl border-b rounded-2xl border-surface-border bg-background/85 px-5 shadow-card backdrop-blur-xl md:px-8 lg:px-10'
            : 'h-[3.75rem] max-w-5xl rounded-2xl border border-surface-border bg-surface/80 px-4 shadow-glow backdrop-blur-2xl md:px-6 lg:px-8',
        )}
      >
        <a
          href="#hero"
          onClick={handleNavLinkClick}
          className="font-heading text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-primary"
        >
          <span className="text-primary">{'<'}</span>
          {brandName}
          <span className="text-primary">{' />'}</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavLinkClick}
                className="rounded-xl px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:flex" />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-xl p-2 text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={cn(
            'mx-auto mt-2 max-w-5xl overflow-hidden border border-surface-border bg-background/95 backdrop-blur-2xl md:hidden',
            isScrolled ? 'rounded-xl' : 'rounded-2xl shadow-card',
          )}
        >
          <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
            <span className="text-xs font-medium uppercase tracking-widest text-text-secondary">
              Menu
            </span>
            <ThemeToggle />
          </div>
          <ul className="flex flex-col gap-1 px-3 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
