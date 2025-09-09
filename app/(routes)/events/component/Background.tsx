"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function Background() {
      const [particles, setParticles] = useState<
    { x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newParticles = Array.from({ length: 15 }, () => ({
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      }));
      setParticles(newParticles);
    }
  }, []);
  return (
    <div className="fixed inset-0 z-0">
        {/* Background Image with Overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.1, 0],
                scale: [0, 2, 4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                delay: i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-96 h-96 border border-red-500/10 rounded-full"
              style={{
                top: `${20 + i * 30}%`,
                right: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
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
      </div>
  )
}

export default Background