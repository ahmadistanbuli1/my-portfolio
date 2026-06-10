import { ExternalLink } from 'lucide-react'
import { experienceTypeConfig } from '../../constants/experience'
import { experienceItems } from '../../data'
import { formatDateRange } from '../../utils/formatDate'
import { cn } from '../../utils/cn'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Badge } from '../ui/Badge'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Background"
        title="Experience"
        description="Academic milestones, university projects, internships, volunteering, and hackathons."
      />

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-gradient-to-b from-primary/40 via-surface-border to-transparent"
        />

        <Stagger className="flex flex-col gap-8">
          {experienceItems.map((item) => {
            const config = experienceTypeConfig[item.type]
            const Icon = config.icon

            return (
              <StaggerItem key={item.id} className="relative pl-12">
                <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-xl border border-surface-border bg-background/80 text-primary backdrop-blur-sm">
                  <Icon size={16} />
                </div>

                <GlassCard hover>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <Badge variant="default" className="mb-3">
                        {config.label}
                      </Badge>
                      <h3 className="font-heading text-lg font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-primary/80">
                        {item.organization}
                      </p>
                    </div>
                    <time className="shrink-0 text-xs text-text-secondary">
                      {formatDateRange(item.startDate, item.endDate)}
                    </time>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary',
                        'transition-colors hover:text-primary-light',
                      )}
                    >
                      View details
                      <ExternalLink size={14} />
                    </a>
                  )}
                </GlassCard>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </SectionWrapper>
  )
}
