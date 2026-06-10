import { personalInfo } from '../../data'
import { getSocialHref, getSocialIcon } from '../../utils/social'
import { cn } from '../../utils/cn'

export function Footer() {
  const year = new Date().getFullYear()
  const { name, socialLinks } = personalInfo

  return (
    <footer className="relative border-t border-surface-border px-6 py-12 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-text-secondary">
          &copy; {year} {name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = getSocialIcon(link.icon)
            const href = getSocialHref(link)

            return (
              <li key={link.label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl',
                    'text-text-secondary transition-all duration-200',
                    'hover:bg-surface-hover hover:text-primary',
                  )}
                >
                  <Icon size={18} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
