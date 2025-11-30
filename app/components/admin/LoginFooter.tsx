"use client";

import { motion } from "framer-motion";

export default function LoginFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-8 text-center space-y-4"
    >
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Secure login protected
      </div>
    </motion.div>
  );
}