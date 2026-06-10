import { principles } from '../../data'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Carousel } from '../ui/Carousel'
import { PrincipleCard } from '../ui/PrincipleCard'
import { SectionTitle } from '../ui/SectionTitle'

export function PrinciplesSection() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <SectionWrapper id="principles">
      <SectionTitle
        label="Philosophy"
        title="Development Principles"
        description="Engineering methodologies, clean-code patterns, and automated testing mentalities I practice."
      />

      {isDesktop ? (
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <StaggerItem key={principle.id}>
              <PrincipleCard principle={principle} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <Carousel
          items={principles}
          variant="principles"
          renderItem={(principle) => (
            <PrincipleCard principle={principle} />
          )}
        />
      )}
    </SectionWrapper>
  )
}
