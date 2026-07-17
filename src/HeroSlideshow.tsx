import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SLIDES = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

const SLIDE_DURATION = 7000; // ms between crossfades

export default function HeroSlideshow() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={SLIDES[index]}
            alt=""
            loading="lazy"
            decoding="async"
            initial={{ scale: 1 }}
            animate={{ scale: prefersReducedMotion ? 1 : 1.03 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.8, ease: 'linear' }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Readability overlay — keeps headline/CTA legible over the slideshow */}
      <div className="absolute inset-0 bg-white/[0.88]" />
    </div>
  );
}
