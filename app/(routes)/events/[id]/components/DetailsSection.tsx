import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

interface DetailsSectionProps {
  info: string;
}

export default function DetailsSection({ info }: DetailsSectionProps) {
  if (!info) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl">
          <FaInfoCircle className="w-6 h-6 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-white">
          Event Details
        </h2>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
        {info}
      </p>
    </motion.div>
  );
}