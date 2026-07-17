import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PremiumImage } from '../ui/PremiumImage';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = siteConfig.gallerySection.images;

  return (
    <section className="py-28 md:py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {siteConfig.gallerySection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteConfig.gallerySection.subtitle}
          </motion.p>
        </div>

        <div className="[column-fill:_balance] sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <RevealOnScroll key={img.src} delay={(i % 3) * 0.12} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="block w-full text-left"
                aria-label={`Open ${img.alt} in fullscreen`}
              >
                <PremiumImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full"
                />
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.img
              key={images[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              loading="lazy"
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
