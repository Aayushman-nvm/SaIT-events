import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

interface PosterSectionProps {
  poster: string;
  title: string;
}

export default function PosterSection({ poster, title }: PosterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
        {poster ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[3/4] w-full"
          >
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ) : (
          <div className="aspect-[3/4] w-full flex items-center justify-center bg-gray-900/50">
            <FaCalendarAlt className="w-24 h-24 text-red-500/30" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
