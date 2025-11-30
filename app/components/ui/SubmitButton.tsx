"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface SubmitButtonProps {
  isSubmitEnabled: boolean;
  isSubmitting: boolean;
  onClick: () => void;
  delay?: number;
}

export default function SubmitButton({
  isSubmitEnabled,
  isSubmitting,
  onClick,
  delay = 0.7,
}: SubmitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mt-12 text-center"
    >
      <motion.button
        onClick={onClick}
        disabled={!isSubmitEnabled || isSubmitting}
        whileHover={{
          scale: isSubmitEnabled && !isSubmitting ? 1.05 : 1,
          boxShadow:
            isSubmitEnabled && !isSubmitting
              ? "0 0 30px rgba(239, 68, 68, 0.5)"
              : "none",
        }}
        whileTap={{ scale: isSubmitEnabled && !isSubmitting ? 0.95 : 1 }}
        className={`inline-flex items-center gap-3 px-12 py-4 font-semibold rounded-xl transition-all duration-300 shadow-xl ${
          isSubmitting
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : isSubmitEnabled
            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
            />
            Creating Event...
          </>
        ) : (
          <>
            <FaCheck className="w-5 h-5" />
            Create Event
          </>
        )}
      </motion.button>
    </motion.div>
  );
}