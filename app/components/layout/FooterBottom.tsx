"use client";

import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";

interface FooterBottomProps {
  delay?: number;
}

export default function FooterBottom({ delay = 0 }: FooterBottomProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="border-t border-gray-800 py-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          whileHover={{ scale: 1.02 }}
          className="text-gray-500 text-center md:text-left"
        >
          © 2025 Sambhram IT. All rights reserved.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 text-gray-500"
        >
          <span>Made with</span>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <AiFillHeart size={16} className="text-red-500 fill-current" />
          </motion.div>
          <span>by the community</span>
        </motion.div>
      </div>
    </motion.div>
  );
}