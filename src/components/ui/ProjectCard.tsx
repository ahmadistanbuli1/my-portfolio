import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../types'
import { cn } from '../../utils/cn'
import { Badge } from './Badge'
import { Button } from './Button'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={cn(
        'group overflow-hidden rounded-2xl border border-surface-border',
        'bg-surface/50 shadow-card backdrop-blur-xl',
        'transition-shadow duration-300 hover:border-primary/30 hover:shadow-glow',
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-background-elevated to-secondary/20">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.githubUrl && (
            <Button
              variant="outline"
              href={project.githubUrl}
              icon={<Github size={16} />}
              className="px-4 py-2"
            >
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="primary"
              href={project.liveUrl}
              icon={<ExternalLink size={16} />}
              className="px-4 py-2"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
