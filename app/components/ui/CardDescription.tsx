"use client";

import { motion } from 'framer-motion';

interface CardDescriptionProps {
  description: string;
  index: number;
}

export default function CardDescription({ description, index }: CardDescriptionProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      className="text-gray-300 mb-6 leading-relaxed"
    >
      {description}
    </motion.p>
  );
}
