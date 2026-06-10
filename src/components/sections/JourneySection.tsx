import { personalInfo } from '../../data'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { SectionWrapper } from '../layout/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { cn } from '../../utils/cn'

export function JourneySection() {
  return (
    <SectionWrapper id="journey">
      <SectionTitle
        label="My Story"
        title="The Journey"
        description="A timeline of milestones that shaped my path in software engineering."
      />

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary/50 via-surface-border to-transparent md:left-1/2 md:-translate-x-px"
        />

        <Stagger className="flex flex-col gap-8">
          {personalInfo.journey.map((milestone, index) => (
            <StaggerItem
              key={milestone.id}
              className={cn(
                'relative flex flex-col gap-4 md:w-1/2',
                index % 2 === 0
                  ? 'md:mr-auto md:pr-12 md:text-right'
                  : 'md:ml-auto md:pl-12',
              )}
            >
              <div
                className={cn(
                  'absolute top-6 h-3 w-3 rounded-full border-2 border-primary bg-background md:top-8',
                  index % 2 === 0
                    ? 'left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2'
                    : 'left-4 -translate-x-1/2 md:left-0 md:-translate-x-1/2',
                )}
              />

              <GlassCard className="ml-10 md:ml-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {milestone.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionWrapper>
  )
}
