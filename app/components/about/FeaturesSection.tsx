"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { Feature } from "../../../types/about";

const features: Feature[] = [
  {
    icon: FaUsers,
    title: "Community Driven",
    description:
      "Built by students, for students, ensuring we understand your needs",
  },
  {
    icon: FaCode,
    title: "Tech Focused",
    description: "Specifically designed for CS & IT community at Sambhram",
  },
  {
    icon: FaRocket,
    title: "Innovation First",
    description:
      "Constantly evolving to bring you the best tech events and opportunities",
  },
];

export default function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 sm:py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-2">
            Our Vision
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            What Drives Us
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full mb-4 sm:mb-6">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}