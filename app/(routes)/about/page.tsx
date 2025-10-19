"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCode,
  FaRocket,
  FaWrench,
  FaPaintBrush,
  FaCamera,
} from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";
import MemberCard from "./components/MemberCard";
import TeamAccordion from "./components/TeamAccordion";
import Background from "../events/component/Background";
import Contributor from "./components/Contributor";
import officeInfo from "../../office-info";

interface TeamInfo {
  title: string;
  tagline: string;
}

interface TeamMember {
  NAME: string;
  ABOUT: string;
  ROLE: string;
  Image: string;
}

function AboutPage() {
  interface ContributorData {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
  }

  const [contributors, setContributors] = useState<ContributorData[]>([]);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const features = [
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

  async function getContributors() {
    try {
      const response = await fetch(
        "https://api.github.com/repos/Aayushman-nvm/SaIT-events/contributors"
      );
      const data = await response.json();
      setContributors(data);
    } catch (error) {
      console.error("Failed to fetch contributors:", error);
    }
  }

  useEffect(() => {
    getContributors();
  }, []);

  const mentors = officeInfo[0].Mentors;
  const management = officeInfo[0].Management;
  const technicalTeam = officeInfo[0]["Technical Team"];
  const creativeTeam = officeInfo[0]["Creative Team"];
  const prTeam = officeInfo[0]["Public Relations Team"];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Background />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full mb-6 sm:mb-8"
          >
            <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
          >
            About Us
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4"
          >
            Who We Are
          </motion.h1>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6 sm:mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4"
          >
            We are a group of like-minded individuals from the Sambhram CS and
            IT community, brought together by a shared vision - to create a
            unified platform where we can showcase our work and keep you
            updated. This is a platform made by students for the students to use
            so you don&apos;t miss out on anything techie.
          </motion.p>
        </div>
      </motion.section>

      {/* Community Section Header */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-12 sm:py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3"
          >
            The Community
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
          >
            The Team Behind The Scenes
          </motion.h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </div>
      </motion.section>

      {/* Mentors Section */}
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
              {mentors[0].title}
            </h3>
            <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {mentors.slice(1).map((mentor, index) => (
              <ProfileCard
                key={index}
                imgPath={mentor.Image!}
                name={mentor.NAME!}
                description={mentor.ABOUT!}
                role={mentor.ROLE!}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Management Section */}
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
              {management[0].title}
            </h3>
            <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {management.slice(1).map((member, index) => (
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
            ))}
          </div>
        </div>
      </motion.section>

      {/* Teams Section */}
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
              teamData={technicalTeam as [TeamInfo, ...TeamMember[]]}
              icon={<FaWrench />}
              isOpen={openAccordionIndex === 0}
              onToggle={() =>
                setOpenAccordionIndex(openAccordionIndex === 0 ? null : 0)
              }
            />
            <TeamAccordion
              teamData={creativeTeam as [TeamInfo, ...TeamMember[]]}
              icon={<FaPaintBrush />}
              isOpen={openAccordionIndex === 1}
              onToggle={() =>
                setOpenAccordionIndex(openAccordionIndex === 1 ? null : 1)
              }
            />
            <TeamAccordion
              teamData={prTeam as [TeamInfo, ...TeamMember[]]}
              icon={<FaCamera />}
              isOpen={openAccordionIndex === 2}
              onToggle={() =>
                setOpenAccordionIndex(openAccordionIndex === 2 ? null : 2)
              }
            />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
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

      {/* Contributors Section */}
      {contributors.length > 0 && (
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
      )}
    </div>
  );
}

export default AboutPage;
