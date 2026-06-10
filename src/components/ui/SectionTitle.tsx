import { Reveal } from '../motion/Reveal'
import { cn } from '../../utils/cn'

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <Reveal className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base text-text-secondary',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
