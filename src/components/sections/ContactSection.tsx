import { Send } from 'lucide-react'
import { personalInfo } from '../../data'
import { getSocialHref, getSocialIcon } from '../../utils/social'
import { cn } from '../../utils/cn'
import { Reveal } from '../motion/Reveal'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactSection() {
  const { email, location, socialLinks } = personalInfo

  return (
    <SectionWrapper id="contact" className="pb-8">
      <SectionTitle
        label="Get in Touch"
        title="Contact"
        description="Open to collaborations, internships, and interesting engineering challenges."
        align="center"
      />

      <Reveal variant="fadeIn">
        <GlassCard className="mx-auto max-w-xl text-center">
          <p className="text-text-secondary">
            The best way to reach me is via email. I typically respond within 48
            hours.
          </p>

          {location && (
            <p className="mt-2 text-sm text-text-secondary">{location}</p>
          )}

          <Button
            variant="primary"
            href={`mailto:${email}`}
            icon={<Send size={16} />}
            className="mt-6"
          >
            {email}
          </Button>

          <ul className="mt-8 flex items-center justify-center gap-3">
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
                      'flex h-11 w-11 items-center justify-center rounded-xl',
                      'border border-surface-border bg-surface/50 text-text-secondary',
                      'transition-all duration-200 hover:border-primary/40 hover:text-primary',
                    )}
                  >
                    <Icon size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </GlassCard>
      </Reveal>
    </SectionWrapper>
  )
}
