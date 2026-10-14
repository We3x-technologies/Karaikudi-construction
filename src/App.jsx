import React, { useRef } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageShowcaseSection from './components/ImageShowcaseSection';
import ServicesSection from './components/ServicesSection';
import FindYourHome from './components/FindYourHome';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ModernVsTraditional from './components/ModernVsTraditional';
import WorkProcessSection from './components/WorkProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import MansionCloudSection from './components/MansionCloudSection';
import ConnectSection from './components/ConnectSection';
import MarqueeSection from './components/MarqueeSection';
import Footer from './components/Footer';

export default function App() {
  const headerRef = useRef(null);

  // ── Section Visibility Flags ──────────────────────────────
  // Set to `true` when genuine data is available to re-enable.
  const SHOW_TESTIMONIALS = false;
  const SHOW_BUILD_YOUR_HOME = false;

  return (
    <div className="app-root">
      <Preloader />
      <Header headerRef={headerRef} />
      <main>
        <HeroSection headerRef={headerRef} />
        <AboutSection />
        <ImageShowcaseSection />
        <ServicesSection />
        {SHOW_BUILD_YOUR_HOME && <FindYourHome />}
        <WhyChooseUsSection />
        <ModernVsTraditional />
        <WorkProcessSection />
        {SHOW_TESTIMONIALS && <TestimonialsSection />}
        <MansionCloudSection />
        <ConnectSection />
        <MarqueeSection />
      </main>
      <Footer />
    </div>
  );
}