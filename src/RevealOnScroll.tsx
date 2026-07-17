import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Fades content in and moves it up as it enters the viewport. Used for
 * staggered reveals across galleries, service cards, and clinic imagery.
 */
export function RevealOnScroll({ children, delay = 0, className, y = 32 }: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 60, damping: 16, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
