import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { PremiumImage } from '../ui/PremiumImage';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export default function Doctors() {
  return (
    <section id="doctors" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {siteConfig.doctorsSection.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteConfig.doctorsSection.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 max-w-5xl mx-auto">
          {siteConfig.doctorsSection.doctors.map((doctor, i) => (
            <RevealOnScroll key={doctor.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[24px] bg-slate-50 border border-border/60 overflow-hidden transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
              >
                <div className="relative">
                  <PremiumImage
                    src={doctor.photo}
                    alt={doctor.name}
                    rounded="rounded-none"
                    className="w-full aspect-[4/5]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {doctor.socials.map((social) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          aria-label={social.name}
                          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <SocialIcon className="w-4.5 h-4.5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
