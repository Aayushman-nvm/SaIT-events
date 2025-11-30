"use client";

import { useHeroParticles, useScrollToNext } from './hooks/useHero';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import FloatingParticles from './FloatingParticles';

function Hero() {
  const particles = useHeroParticles();
  const scrollToNext = useScrollToNext();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroBackground />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <HeroContent />
        <ScrollIndicator onClick={scrollToNext} />
      </div>

      <FloatingParticles particles={particles} />
    </section>
  );
}

export default Hero;
