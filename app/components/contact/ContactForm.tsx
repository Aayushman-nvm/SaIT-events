"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import { useContactForm } from "./hooks/useContactForm";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { userData, isSubmitting, submitted, error, handleSubmit, updateField } = useContactForm();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 sm:py-12 px-4 pb-24 sm:pb-32"
    >
      <div className="max-w-2xl mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
              <FaUser className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
            </div>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Your Name"
              className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
              <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
            </div>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="example@gmail.com"
              className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
              required
            />
          </motion.div>

          {/* Message/request Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute top-3 sm:top-4 left-0 pl-4 sm:pl-6 flex items-start pointer-events-none">
              <FaCommentDots className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 group-focus-within:text-red-400 transition-colors mt-1" />
            </div>
            <textarea
              name="request"
              value={userData.request}
              onChange={(e) => updateField("request", e.target.value)}
              placeholder="Enter your suggestion, request or feedback here..."
              rows={6}
              className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none"
              required
            />
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs sm:text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{
                scale: submitted ? 1 : 1.05,
                boxShadow: submitted
                  ? "none"
                  : "0 0 30px rgba(239, 68, 68, 0.5)",
              }}
              whileTap={{ scale: submitted ? 1 : 0.95 }}
              className={`inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-xl ${
                submitted
                  ? "bg-green-600 text-white cursor-default"
                  : isSubmitting
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              }`}
            >
              {submitted ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-200"
                  >
                    ✓
                  </motion.div>
                  <span className="hidden sm:inline">Thank you for contacting us!</span>
                  <span className="sm:hidden">Submitted!</span>
                </>
              ) : isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 border-t-transparent rounded-full"
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Submit Your Response</span>
                  <span className="sm:hidden">Submit</span>
                  <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-xs sm:text-sm backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="hidden sm:inline">We typically respond within 24 hours to a week</span>
            <span className="sm:hidden">Response in 24hrs - 1 week</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}