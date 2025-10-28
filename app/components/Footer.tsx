"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import Image from "next/image";

function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Aayushman-nvm/SaIT-events",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/oscode_sait/?igsh=MThsNGozdGxjaTVwcw%3D%3D#",
      label: "Instagram",
      color: "hover:text-red-400",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/oscode-sait-109b8a336/",
      label: "Linkedin",
      color: "hover:text-blue-600",
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/y2MkGmKQU7",
      label: "Discord",
      color: "hover:text-indigo-500",
    },
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: "Suggestions", href: "/suggestions" },
    { title: "About", href: "/about" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative bg-gradient-to-b from-gray-950 via-black to-black text-gray-300"
    >
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-red-500 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-red-500 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div variants={itemVariants} className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex">
                  {/* Sambhram logo */}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src="/logos/SaIT_svg.svg"
                    alt="Sambhram Logo"
                    className="h-8 w-auto sm:h-10 md:h-12 rounded"
                    width={40}
                    height={40}
                  />
                </motion.div>
                {/* OScode logo */}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src="/logos/OScode_svg.svg"
                    alt="OS code Logo"
                    className="h-8 w-auto sm:h-10 md:h-12"
                    width={40}
                    height={40}
                  />
                </motion.div>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                  Empowering the next generation of tech innovators through
                  cutting-edge events, workshops, and community collaboration.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-lg hover:border-red-500/50 transition-all duration-300 group"
              >
                <FiExternalLink
                  size={18}
                  className="text-red-400 group-hover:text-red-300"
                />
                <a
                  href="https://sambhramit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  Visit Official Website
                </a>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <HiCode size={20} className="text-red-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <AiFillHeart size={20} className="text-red-400" />
                Connect
              </h4>

              <div className="space-y-4">
                <p className="text-gray-400">
                  Join our community and stay updated with the latest tech
                  trends.
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        bounce: 0.5,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 ${social.color} group`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-gray-500 text-center md:text-left"
            >
              © 2025 Sambhram IT. All rights reserved.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <AiFillHeart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>by the community</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.1, 0],
              y: [100, -50, -100],
              x: [0, 50, -30],
            }}
            transition={{
              duration: 15 + i * 5,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full blur-sm"
            style={{
              left: `${20 + i * 30}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
}

export default Footer;
