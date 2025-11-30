import React from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';

interface EventHeaderProps {
  title: string;
  description: string;
  status: string;
}

export default function EventHeader({ title, description, status }: EventHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <StatusBadge status={status} />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
      >
        {title}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
