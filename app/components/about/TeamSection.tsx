"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import MemberCard from "./MemberCard";
import { TeamMember } from "../../../types/about";

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  useProfileCard?: boolean;
  gridCols?: string;
}

export default function TeamSection({
  title,
  members,
  useProfileCard = false,
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: TeamSectionProps) {
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
            {title}
          </h3>
          <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className={`grid ${gridCols} gap-4 sm:gap-5 lg:gap-6`}>
          {members.map((member, index) =>
            useProfileCard ? (
              <ProfileCard
                key={index}
                imgPath={member.Image!}
                name={member.NAME!}
                description={member.ABOUT!}
                role={member.ROLE!}
                index={index}
              />
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MemberCard
                  name={member.NAME!}
                  image={member.Image!}
                  role={member.ROLE!}
                  about={member.ABOUT}
                  showOneLiner={true}
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}