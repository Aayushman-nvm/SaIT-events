"use client";

import { motion } from "framer-motion";
import { FaWrench, FaPaintBrush, FaCamera } from "react-icons/fa";
import TeamAccordion from "./TeamAccordion";
import { TeamInfo, TeamMember } from "../../../types/about";

interface TeamsAccordionSectionProps {
  technicalTeam: [TeamInfo, ...TeamMember[]];
  creativeTeam: [TeamInfo, ...TeamMember[]];
  prTeam: [TeamInfo, ...TeamMember[]];
  openAccordionIndex: number | null;
  setOpenAccordionIndex: (index: number | null) => void;
}

export default function TeamsAccordionSection({
  technicalTeam,
  creativeTeam,
  prTeam,
  openAccordionIndex,
  setOpenAccordionIndex,
}: TeamsAccordionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 sm:py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <h3 className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-2">
            Our Teams
          </h3>
          <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          <TeamAccordion
            teamData={technicalTeam}
            icon={<FaWrench />}
            isOpen={openAccordionIndex === 0}
            onToggle={() =>
              setOpenAccordionIndex(openAccordionIndex === 0 ? null : 0)
            }
          />
          <TeamAccordion
            teamData={creativeTeam}
            icon={<FaPaintBrush />}
            isOpen={openAccordionIndex === 1}
            onToggle={() =>
              setOpenAccordionIndex(openAccordionIndex === 1 ? null : 1)
            }
          />
          <TeamAccordion
            teamData={prTeam}
            icon={<FaCamera />}
            isOpen={openAccordionIndex === 2}
            onToggle={() =>
              setOpenAccordionIndex(openAccordionIndex === 2 ? null : 2)
            }
          />
        </div>
      </div>
    </motion.section>
  );
}