"use client";

import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";

interface QuickLink {
  title: string;
  href: string;
}

interface FooterLinksProps {
  links: QuickLink[];
  delay?: number;
}

export default function FooterLinks({ links, delay = 0 }: FooterLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
        <HiCode size={20} className="text-red-400" />
        Quick Links
      </h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
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
  );
}