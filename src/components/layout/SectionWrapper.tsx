import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full px-6 py-24 md:px-8 lg:px-12',
        fullHeight && 'min-h-screen',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
