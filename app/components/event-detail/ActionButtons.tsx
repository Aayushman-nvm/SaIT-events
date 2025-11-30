import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ActionButtonsProps {
  socialLink: string;
  registrationLink: string;
}

export default function ActionButtons({ socialLink, registrationLink }: ActionButtonsProps) {
  if (!socialLink || !registrationLink) return null;

  return (
    <motion.section
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl">
          <FaExternalLinkAlt
            className="w-6 h-6 text-red-500"
            aria-hidden="true"
          />
        </div>
        <h2 className="text-2xl font-bold text-white leading-tight">
          Connect With Us
        </h2>
      </div>

      <motion.a
        href={registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for the event"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
        }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 py-4 mb-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20 hover:border-red-400 hover:text-red-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg w-full justify-center"
      >
        Register
        <FaExternalLinkAlt className="w-5 h-5" />
      </motion.a>

      <motion.a
        href={socialLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit event social page"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
        }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg w-full justify-center"
      >
        Visit Socials
        <FaExternalLinkAlt className="w-5 h-5" />
      </motion.a>
    </motion.section>
  );
}
