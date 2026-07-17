import { useEffect } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { MotionConfig } from 'framer-motion';
import { siteConfig } from './config/siteConfig';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Services from './components/sections/Services';
import About from './components/sections/About';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Doctors from './components/sections/Doctors';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import BookingForm from './components/sections/BookingForm';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <Doctors />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  // Inject theme config globally at runtime
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', siteConfig.theme.primaryHSL);
    document.documentElement.style.setProperty('--primary-foreground', siteConfig.theme.primaryForegroundHSL);
  }, []);

  // Support deep-linking to a section via URL hash (e.g. shared links, back/forward nav)
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'auto', block: 'start' }));
    }
  }, []);

  return (
    // Site-wide: always play our own carefully-scoped entrance/hover animations in full,
    // regardless of the OS "reduce motion" setting. Continuous decorative loops (Ken Burns,
    // parallax, shine sweeps) are separately gated behind explicit useReducedMotion() checks
    // in the components that use them, so accessibility is still respected where it matters.
    <MotionConfig reducedMotion="never">
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </WouterRouter>
    </MotionConfig>
  );
}

export default App;