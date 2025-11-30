"use client";

import { motion } from "framer-motion";

interface EventsHeaderProps {
  delay?: number;
}

export default function EventsHeader({ delay = 0 }: EventsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="text-center mb-16 px-6"
    >
      <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
          Events
        </span>
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
    </motion.div>
  );
}
