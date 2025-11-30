"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NavLogo() {
  return (
    <>
      {/* OS code logo */}
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.oscode.oscode"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="flex items-center cursor-pointer"
      >
        <Image
          src="/logos/OScode_svg.svg"
          alt="OS code Logo"
          className="h-8 w-auto sm:h-10 md:h-12"
          width={40}
          height={40}
          unoptimized
        />
        <span className="hidden md:block text-cyan-400 text-base font-medium tracking-wide">
          Chapter 3
        </span>
      </motion.a>

      {/* Sambhram logo */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Image
          src="/logos/SaIT_svg.svg"
          alt="Sambhram Logo"
          className="h-8 w-auto sm:h-10 md:h-12 rounded"
          width={40}
          height={40}
          unoptimized
        />
      </motion.a>
    </>
  );
}