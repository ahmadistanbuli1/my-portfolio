import { skillCategories } from '../../data'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { SectionWrapper } from '../layout/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { TechIcon } from '../ui/TechIcon'

export function TechnologiesSection() {
  return (
    <SectionWrapper id="technologies">
      <SectionTitle
        label="Stack"
        title="Technologies"
        description="Tools and technologies I use to build reliable, scalable applications."
      />

      <Stagger className="flex flex-col gap-10">
        {skillCategories.map((category) => (
          <StaggerItem key={category.id}>
            <GlassCard hover className="overflow-hidden">
              <h3 className="mb-6 font-heading text-lg font-semibold text-text-primary">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {category.skills.map((skill) => (
                  <TechIcon key={skill} name={skill} size="md" />
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  )
}
