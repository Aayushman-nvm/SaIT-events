"use client";

import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full mb-6 sm:mb-8"
        >
          <FaLightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
        >
          Contact us
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4"
        >
          Your Voice Matters
        </motion.h1>

        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6 sm:mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4"
        >
          Have an event idea? A doubt? Or just want to drop feedback?
          We&apos;re all ears. You&apos;re the reason we do what we do - and
          yes, you&apos;ll be heard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 sm:mt-8"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-6 py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-xs sm:text-sm backdrop-blur-sm max-w-full">
            <span className="text-center sm:text-left">
              If the service below doesn&apos;t work, feel free to reach out to us at
            </span>
            <a
              href="mailto:oscodesaittechteam@gmail.com"
              className="text-red-400 hover:underline break-all"
            >
              oscodesaittechteam@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}