import React from 'react';
import { motion } from 'framer-motion';

interface ContributorProps {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

function Contributor({ login, avatar_url, html_url, contributions }: ContributorProps) {
  return (
    <motion.a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        bounce: 0.4
      }}
      whileHover={{ 
        scale: 1.1,
        y: -8,
      }}
      className="relative flex-shrink-0 group cursor-pointer"
    >
      {/* Profile image container */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-red-500/40 overflow-hidden bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/50">
        <img
          src={avatar_url}
          alt={login}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hover tooltip */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
        <div className="bg-black/90 backdrop-blur-sm border border-red-500/50 rounded-lg px-4 py-2 whitespace-nowrap">
          <p className="text-white text-sm font-medium mb-1">{login}</p>
          <p className="text-red-500 text-xs">
            {contributions} {contributions === 1 ? 'contribution' : 'contributions'}
          </p>
        </div>
        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-500/50" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/0 group-hover:bg-red-500/20 blur-xl -z-10 transition-all duration-300" />
    </motion.a>
  );
}

export default Contributor;