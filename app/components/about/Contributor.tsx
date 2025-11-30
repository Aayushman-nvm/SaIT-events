import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ContributorProps {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Contributor = ({
  login,
  avatar_url,
  html_url,
  contributions,
}: ContributorProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center group"
    >
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300 bg-gray-800">
          <Image
            src={avatar_url}
            alt={login}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glow Ring */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-red-500/20 rounded-full"
        />

        <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full border-2 border-black shadow-lg">
          {contributions}
        </div>
      </div>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 font-medium text-center max-w-[80px] sm:max-w-[100px] md:max-w-[120px] truncate group-hover:text-white transition-colors duration-300">
        {login}
      </p>

{/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 z-50 whitespace-nowrap"
          >
            <div className="bg-gray-900/95 border border-red-500/40 rounded-lg px-3 py-2 backdrop-blur-md shadow-2xl">
              <p className="text-xs sm:text-sm text-white font-semibold mb-1">
                {login}
              </p>
              <p className="text-xs text-gray-400">
                {contributions} contribution{contributions !== 1 ? "s" : ""}
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-red-500/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default Contributor;
