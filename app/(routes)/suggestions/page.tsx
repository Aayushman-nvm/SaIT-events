"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Background from "../events/component/Background";

function SuggestionsPage() {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    request: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("Name: ", userData.name);
    console.log("Email: ", userData.email);
    console.log("Request: ", userData.request);
  }, [userData]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setUserData({ email: "", name: "", request: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Background/>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 border border-red-500/10 rounded-full -top-48 -right-48"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-64 h-64 border border-red-500/5 rounded-full -bottom-32 -left-32"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8"
          >
            <FaLightbulb className="w-10 h-10 text-red-500" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-red-500 text-sm uppercase tracking-wider mb-2"
          >
            Suggestions
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Your Voice Matters
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Have an event idea? A doubt? Or just want to drop feedback? We&apos;re all ears. 
            You&apos;re the reason we do what we do - and yes, you&apos;ll be heard.
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
              </div>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Your Name"
                className="w-full pl-16 pr-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
              </div>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="example@gmail.com"
                className="w-full pl-16 pr-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
                required
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="relative group"
            >
              <div className="absolute top-4 left-0 pl-6 flex items-start pointer-events-none">
                <FaCommentDots className="h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors mt-1" />
              </div>
              <textarea
                value={userData.request}
                onChange={(e) => setUserData((prev) => ({ ...prev, request: e.target.value }))}
                placeholder="Enter your suggestion, request or feedback here..."
                rows={6}
                className="w-full pl-16 pr-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ 
                  scale: submitted ? 1 : 1.05,
                  boxShadow: submitted ? "none" : "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: submitted ? 1 : 0.95 }}
                className={`inline-flex items-center gap-3 px-12 py-4 font-semibold rounded-xl transition-all duration-300 shadow-xl ${
                  submitted
                    ? 'bg-green-600 text-white cursor-default'
                    : isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                }`}
              >
                {submitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 text-green-200"
                    >
                      ✓
                    </motion.div>
                    Thank you for your feedback!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Your Suggestion
                    <FaPaperPlane className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              We typically respond within 24 hours to a week
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SuggestionsPage;