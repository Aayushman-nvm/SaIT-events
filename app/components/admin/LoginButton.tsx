"use client";

import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";

interface LoginButtonProps {
  isFormValid: boolean;
  isSubmitting: boolean;
}

export default function LoginButton({ isFormValid, isSubmitting }: LoginButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="pt-4"
    >
      <motion.button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        whileHover={{
          scale: isFormValid && !isSubmitting ? 1.02 : 1,
          boxShadow:
            isFormValid && !isSubmitting
              ? "0 0 30px rgba(239, 68, 68, 0.5)"
              : "none",
        }}
        whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
        className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 shadow-xl ${
          isSubmitting
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : isFormValid
            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
            />
            Signing In...
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <FaSignInAlt className="w-5 h-5" />
            Sign In
          </div>
        )}
      </motion.button>
    </motion.div>
  );
}