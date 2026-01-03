import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroScreen } from '@/components/IntroScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Events } from '@/components/Events';
import { Timeline } from '@/components/Timeline';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro was already shown this session
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      {introComplete && (
        <>
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Events />
            <Timeline />
            <Team />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
