import { motion, useReducedMotion } from 'framer-motion'
import type { HeroFloatingTech } from '../../constants/technologies'
import { HERO_FLOATING_TECH } from '../../constants/technologies'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

interface TechBubbleProps {
  tech: HeroFloatingTech
  index: number
  compact?: boolean
}

function TechBubble({ tech, index, compact = false }: TechBubbleProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = tech.icon
  const iconSize = compact ? Math.max(tech.size - 6, 20) : tech.size

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.1 + index * 0.06,
        duration: 0.45,
        ease: 'easeOut',
      }}
      className={compact ? 'w-full' : 'absolute'}
      style={
        compact
          ? undefined
          : { top: tech.top, left: tech.left }
      }
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : compact
              ? { y: [0, -6, 0] }
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
        whileHover={{ scale: 1.08 }}
        className={cn(
          'flex flex-col items-center gap-1 rounded-2xl border border-surface-border',
          'bg-surface/90 shadow-card backdrop-blur-xl',
          'transition-shadow duration-300 hover:border-primary/30 hover:shadow-glow',
          compact ? 'px-2 py-2.5 sm:px-2.5 sm:py-3' : 'gap-1.5 px-3 py-2.5',
        )}
      >
        <Icon size={iconSize} style={{ color: tech.color }} aria-hidden />
        <span
          className={cn(
            'font-semibold uppercase tracking-wider text-text-secondary',
            compact ? 'text-[9px] sm:text-[10px]' : 'text-[10px]',
          )}
        >
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  )
}

function HeroTechGrid() {
  return (
    <div className="relative w-full px-2 sm:px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-1/2 h-40 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"
      />
      <div className="relative mx-auto grid max-w-md grid-cols-4 gap-2.5 sm:max-w-lg sm:gap-3 md:gap-4">
        {HERO_FLOATING_TECH.map((tech, index) => (
          <TechBubble key={tech.id} tech={tech} index={index} compact />
        ))}
      </div>
    </div>
  )
}

function HeroTechOrbit() {
  return (
    <div className="relative mx-auto h-[32rem] w-full lg:mx-0 lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full border border-primary/10 bg-primary/5 blur-2xl dark:bg-primary/10"
      />
      {HERO_FLOATING_TECH.map((tech, index) => (
        <TechBubble key={tech.id} tech={tech} index={index} />
      ))}
    </div>
  )
}

export function HeroTechCloud() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return isDesktop ? <HeroTechOrbit /> : <HeroTechGrid />
}
