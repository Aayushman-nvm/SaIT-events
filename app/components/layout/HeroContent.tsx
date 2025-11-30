"use client";

import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
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
            Sambhram&apos;s
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
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl text-lg"
          href="/events"
        >
          View Upcoming Events
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-white/30 hover:border-red-400 text-white hover:text-red-400 font-semibold rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
          href="/about"
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
}
