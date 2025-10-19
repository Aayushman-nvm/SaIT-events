import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import MemberCard from "./MemberCard";

interface TeamInfo {
  title: string;
  tagline: string;
}

interface TeamMember {
  NAME: string;
  ABOUT: string;
  ROLE: string;
  Image: string;
}

interface TeamAccordionProps {
  teamData: [TeamInfo, ...TeamMember[]];
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const TeamAccordion = ({
  teamData,
  icon,
  isOpen,
  onToggle,
}: TeamAccordionProps) => {
  const teamInfo = teamData[0] as TeamInfo;
  const teamMembers = teamData.slice(1) as TeamMember[];
  const lead = teamMembers.find(
    (member) => member.ROLE && member.ROLE.includes("LEAD")
  );
  const members = teamMembers.filter(
    (member) => member.NAME && !member.ROLE?.includes("LEAD")
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-red-500/5 transition-colors duration-300"
      >
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-red-500/40 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
              <span className="text-base sm:text-lg md:text-xl font-bold text-red-500">
                {icon}
              </span>
            </div>
          </div>

          <div className="text-left flex-1 min-w-0 pr-2">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 truncate">
              {teamInfo.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 sm:line-clamp-2 break-words">
              {teamInfo.tagline}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-2"
        >
          <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-6 pt-0 border-t border-red-500/10">
              {/* Team Lead Section - Centered */}
              {lead && (
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-sm">
                    <MemberCard
                      name={lead.NAME}
                      image={lead.Image}
                      role={lead.ROLE}
                      about={lead.ABOUT}
                      showOneLiner={false}
                    />
                  </div>
                </div>
              )}

              {/* Team Members Section - Centered Grid */}
              {members.length > 0 && (
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-5xl">
                    {members.map((member, idx) => (
                      <MemberCard
                        key={idx}
                        name={member.NAME}
                        image={member.Image}
                        role={member.ROLE}
                        about={member.ABOUT}
                        showOneLiner={false}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TeamAccordion;
