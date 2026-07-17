import { useRef } from 'react';
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui';
import { PremiumImage } from '../ui/PremiumImage';
import HeroSlideshow from './HeroSlideshow';
import { ArrowRight, Phone } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const parallaxDisabled = !!prefersReducedMotion;
  const imageY = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? [0, 0] : [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? [1, 1] : [1, 0.35]);
  const textY = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? [0, 0] : [0, -40]);

  // Subtle mouse-driven depth on the hero image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], parallaxDisabled || isMobile ? [0, 0] : [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], parallaxDisabled || isMobile ? [0, 0] : [-4, 4]);
  const depthX = useTransform(springX, [-0.5, 0.5], parallaxDisabled || isMobile ? [0, 0] : [-10, 10]);
  const depthY = useTransform(springY, [-0.5, 0.5], parallaxDisabled || isMobile ? [0, 0] : [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (parallaxDisabled || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const slideDistance = isMobile ? 20 : 36;

  return (
    <MotionConfig reducedMotion="never">
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-slate-50"
      >
        <HeroSlideshow />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ opacity: textOpacity, y: textY }}
              className="max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-7 text-xs font-semibold tracking-[0.25em] uppercase text-primary/80"
              >
                {siteConfig.clinic.tagline}
              </motion.p>

              <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-semibold tracking-tight text-foreground leading-[1.05] mb-8">
                <motion.span
                  initial={{ opacity: 0, y: slideDistance }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {siteConfig.hero.headline}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: slideDistance }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg"
              >
                {siteConfig.hero.subheading}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: slideDistance }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="group">
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shadow-md hover:shadow-[0_0_28px_rgba(0,131,138,0.5)] transition-shadow duration-300"
                  >
                    {siteConfig.hero.primaryCta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </Button>
                <Button asChild size="lg" variant="outline" className="group bg-white">
                  <motion.a
                    href={`tel:${siteConfig.clinic.phone.replace(/[^0-9]/g, '')}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="transition-colors duration-300 hover:bg-primary/5 hover:border-primary"
                  >
                    <Phone className="mr-2 w-4 h-4 text-primary" />
                    {siteConfig.hero.secondaryCta}
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              ref={imageWrapRef}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: imageY, perspective: 1200 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div style={{ rotateX, rotateY, x: depthX, y: depthY }}>
                <PremiumImage
                  src={siteConfig.hero.image}
                  alt={`${siteConfig.clinic.name} clinic`}
                  kenBurns
                  className="w-full aspect-[4/5] lg:aspect-[5/6]"
                />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
