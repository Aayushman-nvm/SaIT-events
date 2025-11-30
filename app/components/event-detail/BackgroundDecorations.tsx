import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 border border-red-500/10 rounded-full -top-48 -right-48"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-64 h-64 border border-red-500/5 rounded-full -bottom-32 -left-32"
      />
    </div>
  );
}
