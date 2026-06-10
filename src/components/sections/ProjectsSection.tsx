import { featuredProjects } from '../../data'
import { Stagger, StaggerItem } from '../motion/Stagger'
import { SectionWrapper } from '../layout/SectionWrapper'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="Work"
        title="Featured Projects"
        description="Selected projects that showcase my engineering and design capabilities."
      />

      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  )
}
