/**
 * Main navigation bar component with responsive design.
 * Includes logo, desktop navigation, and mobile menu.
 */
"use client";

import { motion } from 'framer-motion';
import { useNavBar, navLinks } from "./hooks/useNavBar";
import NavLogo from "./NavLogo";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";

function NavBar() {
  const { isOpen, scrolled, pathname, toggleMenu, closeMenu } = useNavBar();

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
        <NavLogo />
        <DesktopNav navLinks={navLinks} pathname={pathname} />
        <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <MobileNav
        isOpen={isOpen}
        navLinks={navLinks}
        pathname={pathname}
        onLinkClick={closeMenu}
      />
    </motion.nav>
  );
}

export default NavBar;
