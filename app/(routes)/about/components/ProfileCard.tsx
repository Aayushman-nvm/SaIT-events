"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaUser } from "react-icons/fa";

interface CardProps {
  imgPath: string;
  name: string;
  description: string;
  index: number;
  role: string;
}

function ProfileCard({ imgPath, name, description, role, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        bounce: 0.3,
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-500/20 hover:border-red-500/50 backdrop-blur-sm transition-all duration-500 overflow-hidden h-full flex flex-col"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300"
      >
        <FaQuoteLeft className="w-2 h-2 sm:w-3 sm:h-3 text-red-500" />
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6"
      >
        {/* Image Container */}
        <div className="relative flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300"
          >
            {imgPath && imgPath !== "" ? (
              <Image
                src={imgPath}
                alt={`${name} profile`}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <FaUser className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
              </div>
            )}
          </motion.div>

          {/* Glow Ring */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-red-500/20 rounded-full animate-pulse"
          />
        </div>

        {/* Name Section */}
        <div className="flex-1 text-center sm:text-left min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300 break-words">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-red-400 uppercase tracking-wider mb-2 break-words">
              {role}
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            className="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto sm:mx-0 group-hover:w-20 transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
        className="relative flex-1"
      >
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300 break-words">
          {description}
        </p>
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500/50 to-transparent group-hover:from-red-500 transition-all duration-500 rounded-full"
        style={{ width: "60%" }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 2,
          }}
          className="absolute w-2 h-2 bg-red-500/30 rounded-full top-1/4 left-1/4"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1 + index * 2,
          }}
          className="absolute w-1 h-1 bg-red-400/40 rounded-full top-3/4 right-1/3"
        />
      </div>
    </motion.div>
  );
}

export default ProfileCard;