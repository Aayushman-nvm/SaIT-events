"use client";

import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mb-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.4,
          delay: 0.3,
        }}
        className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4"
      >
        <FaSignInAlt className="w-8 h-8 text-red-500" />
      </motion.div>

      <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
      <p className="text-gray-400">Sign in to your account</p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4"
      />
    </motion.div>
  );
}