"use client";

import { motion } from "framer-motion";

export default function CommunityHeader() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 sm:py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3"
        >
          The Community
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
        >
          The Team Behind The Scenes
        </motion.h2>
        <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
      </div>
    </motion.section>
  );
}