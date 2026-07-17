import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setIsHidden(y > 160 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      animate={{ y: isHidden ? '-100%' : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-semibold tracking-tight text-primary transition-colors">
            {siteConfig.clinic.logoText}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="group relative overflow-hidden shadow-md hover:shadow-[0_0_24px_rgba(0,131,138,0.45)] transition-shadow duration-300">
            <motion.a href="#booking" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
              {siteConfig.hero.primaryCta}
            </motion.a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-5 flex justify-between items-center border-b">
                <span className="text-xl font-bold text-primary">{siteConfig.clinic.logoText}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-foreground/60 hover:text-foreground">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground/80"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4 pt-6 border-t flex flex-col gap-4">
                  <Button asChild size="lg" className="w-full">
                    <a href="#booking" onClick={() => setMobileMenuOpen(false)}>{siteConfig.hero.primaryCta}</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href={`tel:${siteConfig.clinic.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.hero.secondaryCta}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}