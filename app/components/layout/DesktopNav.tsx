"use client";

import { motion } from "framer-motion";
import { NavLink } from "./hooks/useNavBar";

interface DesktopNavProps {
  navLinks: NavLink[];
  pathname: string;
}

export default function DesktopNav({ navLinks, pathname }: DesktopNavProps) {
  return (
    <div className="hidden md:flex gap-8 text-lg">
      {navLinks.map((nav, index) => {
        const isActive = pathname === nav.link;
        return (
          <motion.a
            key={nav.link}
            href={nav.link}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, color: "#ef4444" }}
            className={`relative ${
              isActive
                ? "text-red-500 font-semibold"
                : "text-white hover:text-red-400"
            } transition-all duration-300`}
          >
            {nav.title}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.a>
        );
      })}
    </div>
  );
}