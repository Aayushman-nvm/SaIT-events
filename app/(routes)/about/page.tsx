"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCode, FaRocket } from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";
import Background from "../events/component/Background";
import Contributor from "./components/Contributor";

function AboutPage() {
  interface ContributorData {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
  }

  const [contributors, setContributors] = useState<ContributorData[]>([]);
  const aboutData = [
    {
      name: "Aayushman Jha",
      image: "",
      description:
        "Hey! I'm Aayushman Jha, the creator of this platform - built by students, for students. I often missed out on events and updates simply because there was no central place for it all. So, I made what I wish I had - a unified space to help you stay informed, connected, and in control of campus life.",
    },
    {
      name: "Balakrishna",
      image: "",
      description:
        "Meet Balakrishna Sir - our mentor and guiding force. By working closely with the student community, he helped us identify the real challenges students face in finding events. His support has been key in making this platform more effective and student-focused.",
    },
  ];

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
    const response = await fetch(
      "https://api.github.com/repos/Aayushman-nvm/SaIT-events/contributors"
    );
    const data = await response.json();
    setContributors(data);
    console.log(data);
  }

  useEffect(() => {
    getContributors();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <Background />
      {/* Contributors Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Contributors Section */}
          {contributors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="text-red-500 text-sm uppercase tracking-wider mb-2">
                Our Contributors
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Built By The Community
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8" />

              {/* Centered Contributors Grid */}
              <div className="mt-12">
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-8">
                  {contributors
                    .sort((a, b) => b.contributions - a.contributions)
                    .map((data, index) => (
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
            </motion.div>
          )}

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-red-500 text-sm uppercase tracking-wider mb-2">
              Meet The Team
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The People Behind
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aboutData.map((data, index) => (
              <ProfileCard
                key={index}
                name={data.name}
                imgPath={data.image}
                description={data.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-80 h-80 border border-red-500/5 rounded-full -bottom-40 -right-40"
          />
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8"
          >
            <FaUsers className="w-10 h-10 text-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-red-500 text-sm uppercase tracking-wider mb-4"
          >
            About Us
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Who We Are
          </motion.h1>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            We are a group of like-minded individuals from the Sambhram CS and
            IT community, brought together by a shared vision - to create a
            unified platform where we can showcase our work and keep you
            updated. This is a platform made by students for the students to use
            so you don&apos;t miss out on anything techie.
          </motion.p>
        </div>
      </motion.section>
      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-red-500 text-sm uppercase tracking-wider mb-2">
              Our Vision
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Drives Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default AboutPage;
