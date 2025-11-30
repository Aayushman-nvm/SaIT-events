"use client";

import { motion } from "framer-motion";

export default function FooterBackground() {
  return (
    <>
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-red-500 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-red-500 rounded-full" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.1, 0],
              y: [100, -50, -100],
              x: [0, 50, -30],
            }}
            transition={{
              duration: 15 + i * 5,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full blur-sm"
            style={{
              left: `${20 + i * 30}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>
    </>
  );
}