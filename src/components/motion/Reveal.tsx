import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  defaultViewport,
  fadeIn,
  slideUp,
} from '../../animations/variants'

type RevealVariant = 'fadeIn' | 'slideUp'

interface RevealProps {
  variant?: RevealVariant
  delay?: number
  children: ReactNode
  className?: string
}

const variantMap = {
  fadeIn,
  slideUp,
}

export function Reveal({
  variant = 'slideUp',
  delay = 0,
  children,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variantMap[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
