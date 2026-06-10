import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { slideUp } from '../../animations/variants'
import { personalInfo } from '../../data'
import { HeroTechCloud } from '../hero/HeroTechCloud'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Button } from '../ui/Button'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { name, title, tagline, bio } = personalInfo

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
      }

  return (
    <SectionWrapper id="hero" fullHeight className="flex items-center pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          {...motionProps}
          variants={slideUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {title}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {name}
          </h1>
          <p className="mt-6 text-lg text-text-secondary md:text-xl">
            {tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base lg:mx-0">
            {bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button variant="primary" href="#projects">
              View Projects
            </Button>
            <Button
              variant="outline"
              href="#contact"
              icon={<Mail size={16} />}
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-12 hidden lg:block">
            <a
              href="#journey"
              aria-label="Scroll to journey section"
              className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
            >
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <ArrowDown
                size={18}
                className={prefersReducedMotion ? '' : 'animate-bounce'}
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          {...motionProps}
          variants={slideUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <HeroTechCloud />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
