"use client";

import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";

interface ScrollIndicatorProps {
  onClick: () => void;
}

export default function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.0 }}
      onClick={onClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <FaChevronDown size={24} />
      </motion.div>
    </motion.button>
  );
}
