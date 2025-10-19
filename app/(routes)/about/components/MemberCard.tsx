import { motion } from "framer-motion";

interface MemberCardProps {
  name: string;
  image: string;
  role: string;
  about?: string;
  showOneLiner?: boolean;
}

const MemberCard = ({ name, image, role, about, showOneLiner = false }: MemberCardProps) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-500/20 rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300 flex-shrink-0">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-start w-full">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 px-2 break-words">
              {name}
            </h3>

            <p className="text-xs sm:text-sm text-red-400 mb-2 uppercase tracking-wider break-words px-2">
              {role}
            </p>

            {showOneLiner && about && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-3 px-2 break-words">
                {about}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;