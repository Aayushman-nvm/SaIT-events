"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./hooks/useNavBar";

interface MobileNavProps {
  isOpen: boolean;
  navLinks: NavLink[];
  pathname: string;
  onLinkClick: () => void;
}

export default function MobileNav({ isOpen, navLinks, pathname, onLinkClick }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-black/95 backdrop-blur-lg mt-4 rounded-lg overflow-hidden"
        >
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((nav, index) => {
              const isActive = pathname === nav.link;
              return (
                <motion.a
                  key={nav.link}
                  href={nav.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={onLinkClick}
                  className={`block py-3 px-4 rounded-lg text-lg transition-all duration-300 ${
                    isActive
                      ? "text-red-500 bg-red-500/10 font-semibold"
                      : "text-white hover:text-red-400 hover:bg-red-500/5"
                  }`}
                >
                  {nav.title}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}