import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function GlassCard({
  children,
  hover = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-surface-border  p-6 backdrop-blur-xl',
        'shadow-card',
        hover &&
          'transition-all duration-300 hover:border-primary/30 hover:shadow-glow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
