import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { AnimatedCounter } from '../ui';

export default function TrustBar() {
  return (
    <section className="bg-primary py-16 text-primary-foreground relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 relative">
          {siteConfig.trustStats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center justify-center px-4">
              {i > 0 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-14 bg-primary-foreground/20 origin-center"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-semibold mb-3 flex items-center justify-center tracking-tight">
                  <AnimatedCounter value={stat.value} decimals={(stat as { decimals?: number }).decimals ?? 0} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-medium text-primary-foreground/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
