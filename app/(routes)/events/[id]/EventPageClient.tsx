"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";

interface Event {
  _id: string;
  title: string;
  description: string;
  info: string;
  poster: string;
  status: string;
  socialLink: string;
  registrationLink: string;
}

interface EventPageClientProps {
  event: Event;
}

export default function EventPageClient({ event }: EventPageClientProps) {
  const isActive = event.status?.toLowerCase() === "active";
  const isPast = event.status?.toLowerCase() === "past";

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-96 h-96 border border-red-500/10 rounded-full -top-48 -right-48"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-64 h-64 border border-red-500/5 rounded-full -bottom-32 -left-32"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.4,
              delay: 0.2,
            }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-gray-900/50 to-black/50 border border-red-500/30 backdrop-blur-sm"
          >
            {isActive ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
                  Active Event
                </span>
              </>
            ) : isPast ? (
              <>
                <FaCheckCircle className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  Past Event
                </span>
              </>
            ) : (
              <>
                <FaClock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                  {event.status}
                </span>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {event.title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {event.description}
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Poster Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              {event.poster ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[3/4] w-full"
                >
                  <Image
                    src={event.poster}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ) : (
                <div className="aspect-[3/4] w-full flex items-center justify-center bg-gray-900/50">
                  <FaCalendarAlt className="w-24 h-24 text-red-500/30" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Details Card */}
            {event.info && (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl">
                    <FaInfoCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Event Details
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {event.info}
                </p>
              </motion.div>
            )}

            {/* Social Link Card */}
            {event.socialLink && event.registrationLink && (
              <motion.section
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl">
                    <FaExternalLinkAlt
                      className="w-6 h-6 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    Connect With Us
                  </h2>
                </div>

                {/* Register Button */}
                <motion.a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Register for the event"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 mb-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20 hover:border-red-400 hover:text-red-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg w-full justify-center"
                >
                  Register
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.a>

                {/* Social/Event Page Button */}
                <motion.a
                  href={event.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit event social page"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg w-full justify-center"
                >
                  Visit Socials
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.a>
              </motion.section>
            )}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-sm backdrop-blur-sm">
                <FaCalendarAlt className="w-4 h-4 text-red-500" />
                Stay tuned for more updates
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
