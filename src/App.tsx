import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Route, Switch, Router as WouterRouter } from "wouter";

import { siteConfig } from "./siteConfig";

import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Services from "./Services";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Doctors from "./Doctors";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import BookingForm from "./BookingForm";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

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

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary",
      siteConfig.theme.primaryHSL
    );
    document.documentElement.style.setProperty(
      "--primary-foreground",
      siteConfig.theme.primaryForegroundHSL
    );
  }, []);

  return (
    <MotionConfig reducedMotion="never">
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </WouterRouter>
    </MotionConfig>
  );
}
