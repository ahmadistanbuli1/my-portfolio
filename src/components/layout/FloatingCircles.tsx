import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../utils/cn'

export function FloatingCircles() {
  const prefersReducedMotion = useReducedMotion()

  const circleBase = cn(
    'pointer-events-none absolute rounded-full will-change-transform',
    'border border-primary/20 dark:border-primary/25',
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className={cn(
          circleBase,
          'left-[-12%] top-[18%] h-[28rem] w-[28rem] md:h-[36rem] md:w-[36rem]',
          'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent',
          'shadow-glow dark:from-primary/15',
        )}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 60, 20, 0],
                y: [0, -40, 30, 0],
                rotate: [0, 180, 360],
              }
        }
        transition={{
          x: { duration: 28, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 28, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 48, repeat: Infinity, ease: 'linear' },
        }}
      />

      <motion.div
        className={cn(
          circleBase,
          'bottom-[8%] right-[-10%] h-[22rem] w-[22rem] md:h-[30rem] md:w-[30rem]',
          'border-secondary/20 bg-gradient-to-tl from-secondary/10 via-secondary/5 to-transparent',
          'dark:border-secondary/25 dark:from-secondary/12',
        )}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -50, -10, 0],
                y: [0, 35, -25, 0],
                rotate: [360, 180, 0],
              }
        }
        transition={{
          x: { duration: 32, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 32, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 42, repeat: Infinity, ease: 'linear' },
        }}
      />
    </div>
  )
}
