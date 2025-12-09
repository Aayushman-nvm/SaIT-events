"use client";

import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="md:hidden text-white hover:text-red-400 transition-colors p-2"
    >
      {isOpen ? <FaXmark size={24} /> : <IoMenu size={24} />}
    </motion.button>
  );
}