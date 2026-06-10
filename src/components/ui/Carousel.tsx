import { useState, type ReactNode } from 'react'
import { motion, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../utils/cn'

type CarouselVariant = 'default' | 'principles'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  variant?: CarouselVariant
  className?: string
}

const SWIPE_THRESHOLD = 50

export function Carousel<T>({
  items,
  renderItem,
  variant = 'default',
  className,
}: CarouselProps<T>) {
  const [current, setCurrent] = useState(0)
  const total = items.length

  if (total === 0) return null

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)))
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(current + 1)
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(current - 1)
  }

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'w-full shrink-0',
                variant === 'principles' ? 'px-1 md:px-2' : 'px-1',
              )}
            >
              <div
                className={cn(
                  variant === 'principles' && 'mx-auto max-w-2xl',
                )}
              >
                {renderItem(item, index)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous slide"
            className={cn(
              'absolute left-0 top-1/2 z-10 -translate-x-2 -translate-y-1/2 md:-translate-x-4',
              'flex h-10 w-10 items-center justify-center rounded-xl',
              'border border-surface-border bg-background/80 text-text-primary backdrop-blur-xl',
              'transition-all hover:border-primary/40 hover:bg-surface-hover',
              'disabled:pointer-events-none disabled:opacity-30',
            )}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
            aria-label="Next slide"
            className={cn(
              'absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 md:translate-x-4',
              'flex h-10 w-10 items-center justify-center rounded-xl',
              'border border-surface-border bg-background/80 text-text-primary backdrop-blur-xl',
              'transition-all hover:border-primary/40 hover:bg-surface-hover',
              'disabled:pointer-events-none disabled:opacity-30',
            )}
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current ? 'true' : undefined}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === current
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-surface-border hover:bg-text-secondary',
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
