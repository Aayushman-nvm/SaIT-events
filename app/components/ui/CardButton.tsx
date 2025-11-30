"use client";

import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import { Types } from 'mongoose';
import { getButtonStyles } from './cardUtils';

interface CardButtonProps {
  id?: Types.ObjectId;
  btnType: string;
  index: number;
}

export default function CardButton({ id, btnType, index }: CardButtonProps) {
  const buttonStyles = getButtonStyles(btnType);

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: buttonStyles.shadow
      }}
      whileTap={{ scale: 0.95 }}
      className={`group/btn w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${buttonStyles.gradient} text-white shadow-lg`}
      href={id ? `/events/${id}` : "/events"}
    >
      <span>Explore Now</span>
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FaArrowRight size={20} />
      </motion.div>
    </motion.a>
  );
}
