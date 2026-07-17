import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { PremiumImage } from '../ui/PremiumImage';
import { VideoShowcase } from '../ui/VideoShowcase';
import { Button } from '../ui';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function AboutBlock({
  eyebrow,
  title,
  subtitle,
  image,
  bullets,
  reverse,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  bullets?: string[];
  reverse?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [40, -40]);

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: imageY }}
        className={`max-w-md mx-auto lg:max-w-none ${reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}
      >
        <PremiumImage src={image} alt={title} className="w-full aspect-[4/5]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-5">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          {subtitle}
        </p>

        {bullets && (
          <ul className="space-y-5">
            {bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                className="flex items-center text-foreground font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

function TechShowcaseBlock() {
  const { about } = siteConfig;

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="order-1"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-5">
          {about.secondEyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
          {about.secondTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          {about.secondSubtitle}
        </p>

        <ul className="space-y-5 mb-10">
          {about.secondFeatures.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
              className="flex items-center text-foreground font-medium"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          <Button asChild size="lg" className="group">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="shadow-md hover:shadow-[0_0_28px_rgba(0,131,138,0.5)] transition-shadow duration-300"
            >
              {about.secondCta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="order-2"
      >
        <VideoShowcase src={about.videoSrc} />
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 space-y-28 md:space-y-36">
        <AboutBlock
          eyebrow={siteConfig.about.eyebrow}
          title={siteConfig.about.title}
          subtitle={siteConfig.about.subtitle}
          image={siteConfig.about.image}
          bullets={siteConfig.about.bullets}
        />
        <TechShowcaseBlock />
      </div>
    </section>
  );
}
