"use client";

import { useEffect, useState } from 'react';

export interface Particle {
  x: number;
  delay: number;
  duration: number;
}

export function useHeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      }));
      setParticles(newParticles);
    }
  }, []);

  return particles;
}

export function useScrollToNext() {
  const scrollToNext = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return scrollToNext;
}