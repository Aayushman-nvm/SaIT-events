"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import FooterBackground from "./FooterBackground";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

interface QuickLink {
  title: string;
  href: string;
}

function Footer() {
  const socialLinks: SocialLink[] = [
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

  const quickLinks: QuickLink[] = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
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
      <FooterBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div variants={itemVariants} className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <FooterBrand delay={0} />
            <FooterLinks links={quickLinks} delay={0.1} />
            <FooterSocial socialLinks={socialLinks} delay={0.2} />
          </div>
        </motion.div>

        <FooterBottom delay={0.3} />
      </div>
    </motion.footer>
  );
}

export default Footer;
