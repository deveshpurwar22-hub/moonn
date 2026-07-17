import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div>
            <span className="text-2xl font-semibold tracking-tight text-white block mb-6">
              {siteConfig.clinic.logoText}
            </span>
            <p className="text-white/70 mb-6 leading-relaxed">
              {siteConfig.clinic.tagline}
            </p>
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Patient Stories</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{siteConfig.clinic.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${siteConfig.clinic.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.clinic.email}`} className="hover:text-white transition-colors">
                  {siteConfig.clinic.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{siteConfig.clinic.hours}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-[200px] lg:h-auto rounded-xl overflow-hidden bg-white/5 relative">
            <iframe 
              src={siteConfig.clinic.mapUrl} 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.clinic.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}