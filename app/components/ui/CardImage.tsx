"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardImageProps {
  imgPath: string;
  title: string;
  isActive: boolean;
  statusText: string;
  index: number;
}

export default function CardImage({ imgPath, title, isActive, statusText, index }: CardImageProps) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
      className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gray-800"
    >
      <Image
        src={imgPath}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        unoptimized
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Status Badge */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 + index * 0.1 }}
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          isActive
            ? 'bg-green-500/90 text-white'
            : 'bg-gray-600/90 text-gray-200'
        } backdrop-blur-sm`}
      >
        {statusText}
      </motion.div>
    </motion.div>
  );
}
