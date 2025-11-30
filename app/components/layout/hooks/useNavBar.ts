"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface NavLink {
  title: string;
  link: string;
}

export const navLinks: NavLink[] = [
  { title: "Home", link: "/" },
  { title: "Events", link: "/events" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];

export function useNavBar() {
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
  const closeMenu = () => setIsOpen(false);

  return {
    isOpen,
    scrolled,
    pathname,
    toggleMenu,
    closeMenu,
  };
}