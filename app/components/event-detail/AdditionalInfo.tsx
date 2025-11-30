import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AdditionalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-center lg:text-left"
    >
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-sm backdrop-blur-sm">
        <FaCalendarAlt className="w-4 h-4 text-red-500" />
        Stay tuned for more updates
      </div>
    </motion.div>
  );
}
