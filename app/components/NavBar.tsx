"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Events", link: "/events" },
  { title: "Suggestions", link: "/suggestions" },
  { title: "About", link: "/about" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto relative">
        {/* os code logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Image
            src="/logos/OScode_svg.svg"
            alt="OS code Logo"
            className="h-8 w-auto sm:h-10 md:h-12"
            width={40}
            height={40}
          />
          <span className="hidden md:block text-cyan-400 text-base font-medium tracking-wide">
            Chapter 3
          </span>
        </motion.div>

        {/* sambhram logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <Image
            src="/logos/SaIT_svg.svg"
            alt="Sambhram Logo"
            className="h-8 w-auto sm:h-10 md:h-12 rounded"
            width={40}
            height={40}
          />
        </motion.div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-red-400 transition-colors p-2"
        >
          {isOpen ? <FaXmark size={24} /> : <IoMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
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
                    onClick={() => setIsOpen(false)}
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
    </motion.nav>
  );
}

export default NavBar;
