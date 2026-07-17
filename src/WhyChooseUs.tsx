import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

export default function WhyChooseUs() {
  return (
    <section className="py-28 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-4"
          >
            {siteConfig.whyChooseUs.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {siteConfig.whyChooseUs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteConfig.whyChooseUs.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyChooseUs.features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-[24px] border border-border/60 bg-white overflow-hidden transition-colors duration-300 hover:border-primary/40"
              >
                <div className="pointer-events-none absolute -inset-8 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="relative text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
