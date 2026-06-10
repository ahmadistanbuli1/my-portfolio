import { motion, useReducedMotion } from 'framer-motion'
import { HERO_FLOATING_TECH } from '../../constants/technologies'
import { cn } from '../../utils/cn'

export function HeroTechCloud() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative mx-auto h-[22rem] w-full max-w-lg sm:h-[26rem] lg:mx-0 lg:h-[32rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full border border-primary/10 bg-primary/5 blur-2xl dark:bg-primary/10"
      />

      {HERO_FLOATING_TECH.map((tech, index) => {
        const Icon = tech.icon

        return (
          <motion.div
            key={tech.id}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="absolute"
            style={{ top: tech.top, left: tech.left }}
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -14, 6, 0],
                      x: [0, 8, -6, 0],
                      rotate: [0, 4, -3, 0],
                    }
              }
              transition={{
                duration: tech.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: tech.delay,
              }}
              whileHover={{ scale: 1.12 }}
              className={cn(
                'flex flex-col items-center gap-1.5 rounded-2xl border border-surface-border',
                'bg-surface/90 px-3 py-2.5 shadow-card backdrop-blur-xl',
                'transition-shadow duration-300 hover:border-primary/30 hover:shadow-glow',
              )}
            >
              <Icon
                size={tech.size}
                style={{ color: tech.color }}
                aria-hidden
              />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
