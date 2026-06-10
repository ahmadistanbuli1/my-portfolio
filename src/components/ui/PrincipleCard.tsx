import type { Principle } from '../../types'
import { getLucideIcon } from '../../utils/getLucideIcon'
import { cn } from '../../utils/cn'
import { Badge } from './Badge'
import { GlassCard } from './GlassCard'

const categoryLabels: Record<Principle['category'], string> = {
  methodology: 'Methodology',
  architecture: 'Architecture',
  testing: 'Testing',
}

const categoryBadgeVariant: Record<
  Principle['category'],
  'primary' | 'secondary' | 'default'
> = {
  methodology: 'primary',
  architecture: 'default',
  testing: 'secondary',
}

interface PrincipleCardProps {
  principle: Principle
  className?: string
}

export function PrincipleCard({ principle, className }: PrincipleCardProps) {
  const Icon = getLucideIcon(principle.icon)

  return (
    <GlassCard hover className={cn('flex h-full flex-col gap-4', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Icon size={20} />
        </div>
        <Badge variant={categoryBadgeVariant[principle.category]}>
          {categoryLabels[principle.category]}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-heading text-lg font-semibold text-text-primary">
          {principle.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-text-secondary">
          {principle.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {principle.keywords.map((keyword) => (
          <Badge key={keyword} variant="default">
            {keyword}
          </Badge>
        ))}
      </div>
    </GlassCard>
  )
}
