import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { PremiumImage } from '../ui/PremiumImage';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {siteConfig.servicesSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteConfig.servicesSection.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.servicesSection.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[24px] bg-white border border-border/60 overflow-hidden transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
              >
                <PremiumImage
                  src={service.image}
                  alt={service.title}
                  rounded="rounded-none"
                  zoomOnGroupHover
                  className="w-full aspect-[4/3]"
                />
                <div className="p-8">
                  <div className="w-14 h-14 -mt-16 mb-6 relative rounded-2xl bg-white text-primary flex items-center justify-center shadow-lg ring-1 ring-black/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-7">
                    {service.description}
                  </p>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full pl-5 pr-4 py-2.5 text-sm font-semibold text-primary bg-primary/[0.06] backdrop-blur-sm border border-primary/20 transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_10px_28px_-8px_rgba(0,131,138,0.45)] hover:-translate-y-[3px] cursor-pointer"
                  >
                    Explore Treatment
                    <ArrowRight className="w-4 h-4 transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2" />
                  </a>

                  <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    {service.trustLine}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
