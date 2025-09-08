"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  const [particles, setParticles] = useState<
    { x: number; delay: number; duration: number }[]
  >([]);

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

  const scrollToNext = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

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
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-96 h-96 border border-red-500/20 rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Welcome to{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600"
              >
                Sambhram's
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-red-500"
              >
                Tech Event Stop
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
          >
            Experience innovation, culture, and creativity — all in one place.
            <br className="hidden sm:block" />
            Discover our workshops, fests, and community-driven events.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl text-lg"
            >
              View Upcoming Events
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 hover:border-red-400 text-white hover:text-red-400 font-semibold rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <FaChevronDown size={24} />
          </motion.div>
        </motion.button>
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
    </section>
  );
}

export default Hero;
