import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary'
  className?: string
}

const variantStyles = {
  default: 'bg-surface border-surface-border text-text-secondary',
  primary: 'bg-primary/15 border-primary/25 text-primary-light',
  secondary: 'bg-secondary/15 border-secondary/25 text-secondary-light',
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xl border px-2.5 py-1 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export const Tag = Badge
