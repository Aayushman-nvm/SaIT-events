"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface FooterBrandProps {
  delay?: number;
}

export default function FooterBrand({ delay = 0 }: FooterBrandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="lg:col-span-2 space-y-6"
    >
      <div className="space-y-4">
        <div className="flex">
          {/* Sambhram logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logos/SaIT_svg.svg"
              alt="Sambhram Logo"
              className="h-8 w-auto sm:h-10 md:h-12 rounded"
              width={40}
              height={40}
              unoptimized
            />
          </motion.div>
          {/* OScode logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logos/OScode_svg.svg"
              alt="OS code Logo"
              className="h-8 w-auto sm:h-10 md:h-12"
              width={40}
              height={40}
              unoptimized
            />
          </motion.div>
        </div>
        <p className="text-lg text-gray-400 leading-relaxed max-w-md">
          Empowering the next generation of tech innovators through
          cutting-edge events, workshops, and community collaboration.
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-lg hover:border-red-500/50 transition-all duration-300 group"
      >
        <FiExternalLink
          size={18}
          className="text-red-400 group-hover:text-red-300"
        />
        <a
          href="https://sambhramit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 font-medium transition-colors"
        >
          Visit Official Website
        </a>
      </motion.div>
    </motion.div>
  );
}