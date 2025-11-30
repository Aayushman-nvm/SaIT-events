"use client";

import { motion } from 'framer-motion';
import { Particle } from "./hooks/useHero";

interface FloatingParticlesProps {
  particles: Particle[];
}

export default function FloatingParticles({ particles }: FloatingParticlesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{
            x: particle.x,
            y: typeof window !== 'undefined' ? window.innerHeight + 10 : 0,
            opacity: 0,
          }}
          animate={{
            y: -10,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
        />
      ))}
    </div>
  );
}
