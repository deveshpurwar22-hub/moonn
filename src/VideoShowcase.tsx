import { motion, useReducedMotion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoShowcaseProps {
  /**
   * Path to a real video file, e.g. '/videos/technology.mp4'. Leave undefined
   * to render the premium placeholder — swapping this in later is the only
   * change needed, the container's size, shape, and chrome stay identical.
   */
  src?: string;
  poster?: string;
  className?: string;
}

/**
 * A 16:9 cinematic container that works as a polished "coming soon" video
 * placeholder today and becomes the real video player the moment `src` is
 * provided — no layout or styling changes required.
 */
export function VideoShowcase({ src, poster, className = '' }: VideoShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`w-full ${className}`}
    >
      <motion.div
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)] ring-1 ring-white/10 border border-white/10 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-950"
      >
        {src ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Loading shimmer sweep */}
            {!prefersReducedMotion && (
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-12"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                }}
                initial={{ x: '-20%' }}
                animate={{ x: ['-20%', '250%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
              />
            )}

            {/* Faint radial glow backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,138,0.25),transparent_60%)]" />

            {/* Play button with pulsing glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {!prefersReducedMotion && (
                  <motion.span
                    className="absolute inline-flex h-20 w-20 rounded-full bg-white/25"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
                <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:scale-105">
                  <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <p className="absolute bottom-6 left-0 right-0 text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Video Coming Soon
            </p>
          </>
        )}

        {/* Thin glass-style inner border, consistent with the rest of the site's imagery */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/10" />
      </motion.div>
    </motion.div>
  );
}
