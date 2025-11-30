"use client";

import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

interface FooterSocialProps {
  socialLinks: SocialLink[];
  delay?: number;
}

export default function FooterSocial({ socialLinks, delay = 0 }: FooterSocialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-6"
    >
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
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}