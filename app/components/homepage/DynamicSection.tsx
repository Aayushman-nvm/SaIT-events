import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface DynamicSectionContent {
  title: string;
  subTitle: string;
  text: string;
  button: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DynamicSectionProps {
  content: DynamicSectionContent;
  index: number;
}

export default function DynamicSection({ content, index }: DynamicSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative py-20 ${
        index % 2 === 0
          ? 'bg-gradient-to-br from-black via-gray-950 to-red-950/20'
          : 'bg-gradient-to-br from-gray-950 via-black to-gray-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-8"
        >
          <content.icon className="w-8 h-8 text-red-500" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-red-500 text-sm uppercase tracking-wider mb-2"
        >
          {content.title}
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {content.subTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-lg leading-relaxed mb-10"
        >
          {content.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href={content.to}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl"
          >
            {content.button}
            <FaArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute w-96 h-96 border border-red-500/10 rounded-full ${
            index % 2 === 0 ? '-top-48 -right-48' : '-bottom-48 -left-48'
          }`}
        />
      </div>
    </motion.section>
  );
}
