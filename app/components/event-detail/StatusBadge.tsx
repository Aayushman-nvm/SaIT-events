import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status?.toLowerCase() === "active";
  const isPast = status?.toLowerCase() === "past";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
        delay: 0.2,
      }}
      className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-gray-900/50 to-black/50 border border-red-500/30 backdrop-blur-sm"
    >
      {isActive ? (
        <>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
            Active Event
          </span>
        </>
      ) : isPast ? (
        <>
          <FaCheckCircle className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Past Event
          </span>
        </>
      ) : (
        <>
          <FaClock className="w-4 h-4 text-red-400" />
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
            {status}
          </span>
        </>
      )}
    </motion.div>
  );
}
