import { motion, useReducedMotion } from 'framer-motion';

interface PremiumImageProps {
  src: string;
  alt: string;
  /** Sizing / aspect ratio classes for the outer frame, e.g. "aspect-[4/5] w-full" */
  className?: string;
  /** Slow continuous Ken Burns zoom loop — use for one hero-level image only */
  kenBurns?: boolean;
  /** Tailwind rounding class for the frame */
  rounded?: string;
  /**
   * Trigger the hover zoom when an *ancestor* with the `group` class is
   * hovered (e.g. the whole card), instead of only when the image itself
   * is directly hovered. Use for cards where the CTA/text should also
   * drive the image zoom.
   */
  zoomOnGroupHover?: boolean;
}

/**
 * Reusable "premium" image treatment: rounded corners, soft elevated shadow,
 * thin glass-style border, gentle hover zoom, and a subtle periodic light
 * reflection sweep. Swapping `src` is the only thing needed to use real
 * client photography — all motion is driven by this wrapper, not the image.
 */
export function PremiumImage({
  src,
  alt,
  className = '',
  kenBurns = false,
  rounded = 'rounded-[24px]',
  zoomOnGroupHover = false,
}: PremiumImageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`group relative overflow-hidden ${rounded} shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)] ring-1 ring-white/50 ${className}`}
    >
      {/* Ken Burns layer — slow, continuous, independent of hover */}
      <motion.div
        className="absolute inset-0"
        animate={
          prefersReducedMotion || !kenBurns
            ? undefined
            : { scale: [1, 1.03, 1] }
        }
        transition={
          kenBurns
            ? { duration: 24, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      >
        {/* Hover layer — independent scale on top of the Ken Burns layer */}
        {zoomOnGroupHover ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover ${
              prefersReducedMotion ? '' : 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]'
            }`}
          />
        ) : (
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </motion.div>

      {/* Thin glass-style inner border */}
      <div className={`pointer-events-none absolute inset-0 ${rounded} border border-white/40`} />

      {/* Subtle moving light reflection, sweeps across every ~12s */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)',
          }}
          initial={{ x: '-40%' }}
          animate={{ x: ['-40%', '340%'] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 11, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}
