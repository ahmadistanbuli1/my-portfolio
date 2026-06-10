import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-glow hover:bg-primary-light active:bg-primary-dark',
  ghost:
    'bg-transparent text-text-primary hover:bg-surface-hover',
  outline:
    'border border-surface-border bg-surface/50 text-text-primary backdrop-blur-sm hover:border-primary/40 hover:bg-surface-hover',
}

export function Button({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5',
    'text-sm font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
    'disabled:pointer-events-none disabled:opacity-50',
    variantStyles[variant],
    className,
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:')

    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
