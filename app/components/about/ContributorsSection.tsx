"use client";

import { motion } from "framer-motion";
import Contributor from "./Contributor";
import { ContributorData } from "../../../types/about";

interface ContributorsSectionProps {
  contributors: ContributorData[];
}

export default function ContributorsSection({
  contributors,
}: ContributorsSectionProps) {
  if (contributors.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 sm:py-16 px-4 pb-24 sm:pb-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-2">
            Our Contributors
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Built By The Community
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-8">
          {contributors
            .sort((a, b) => b.contributions - a.contributions)
            .map((data) => (
              <Contributor
                key={data.login}
                login={data.login}
                avatar_url={data.avatar_url}
                html_url={data.html_url}
                contributions={data.contributions}
              />
            ))}
        </div>
      </div>
    </motion.section>
  );
}