"use client";

import { motion } from "framer-motion";
import { FaInbox } from "react-icons/fa";
const EmptyState = ({ type }: { type: "active" | "past" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="col-span-full flex flex-col items-center justify-center py-16 px-6"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
        type === "active"
          ? "bg-red-500/10 border-2 border-red-500/30"
          : "bg-gray-500/10 border-2 border-gray-500/30"
      }`}
    >
      <FaInbox
        className={`w-12 h-12 ${
          type === "active" ? "text-red-500/50" : "text-gray-500/50"
        }`}
      />
    </motion.div>
    <h3 className="text-2xl font-bold text-gray-400 mb-2">
      {type === "active" ? "No Active Events" : "No Past Events"}
    </h3>
    <p className="text-gray-500 text-center max-w-md">
      {type === "active"
        ? "There are currently no active or upcoming events. Check back soon for exciting new events!"
        : "No events have been archived yet. Past events will appear here once they conclude."}
    </p>
  </motion.div>
);
export default EmptyState;
