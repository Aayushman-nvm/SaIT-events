"use client";

import { motion } from 'framer-motion';
import { FaCalendar, FaUsers } from "react-icons/fa";

interface CardHeaderProps {
  title: string;
  isActive: boolean;
  index: number;
}

export default function CardHeader({ title, isActive, index }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <motion.h4
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
      >
        {title}
      </motion.h4>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.4 + index * 0.1, type: "spring", bounce: 0.5 }}
        className={`p-2 rounded-full ${isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/20 text-gray-400'}`}
      >
        {isActive ? <FaUsers size={24} /> : <FaCalendar size={24} />}
      </motion.div>
    </div>
  );
}
