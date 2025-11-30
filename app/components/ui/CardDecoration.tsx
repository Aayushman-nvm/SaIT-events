"use client";

import { motion } from 'framer-motion';

interface CardDecorationProps {
  index: number;
}

export default function CardDecoration({ index }: CardDecorationProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
      className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-xl"
    />
  );
}
