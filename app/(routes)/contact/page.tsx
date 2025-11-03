"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import Background from "../events/component/Background";

function ContactsPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    request: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Name: ", userData.name);
    console.log("Email: ", userData.email);
    console.log("Request: ", userData.request);
  }, [userData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    //removed emailJs and then integrated with Brevo. - Kushal Gowda
    try {
      
      // sending email using Brevo Transcation Email API with route api/contact
      const result = await fetch("/api/contact", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(userData),
        }  
      );

      //gathering results of the request
      const requestResult = await result.json();

      //check if the submission was successful
      if(requestResult.success) {

        setSubmitted(true);
        setUserData({email: "", name: "", request: ""});
        console.log("SUCCESS!", requestResult.status);//log the status
        setTimeout(() => setSubmitted(false), 3000);//set state to false after three seconds

      } else {
        
        throw new Error(requestResult.error || "could not process your request at the moment");

      }
      
    } catch (err) {
      
      console.error("FAILED...", err);
      setError("Failed to send message. Please try again.");
    
    } finally{

      setIsSubmitting(false);
    
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Background />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full mb-6 sm:mb-8"
          >
            <FaLightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-red-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
          >
            Contact us
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4"
          >
            Your Voice Matters
          </motion.h1>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6 sm:mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4"
          >
            Have an event idea? A doubt? Or just want to drop feedback?
            We&apos;re all ears. You&apos;re the reason we do what we do - and
            yes, you&apos;ll be heard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 sm:mt-8"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-6 py-3 bg-gray-900/30 border border-gray-700/50 rounded-full text-gray-400 text-xs sm:text-sm backdrop-blur-sm max-w-full">
              <span className="text-center sm:text-left">
                If the service below doesn&apos;t work, feel free to reach out to us at
              </span>
              <a
                href="mailto:oscodesaittechteam@gmail.com"
                className="text-red-400 hover:underline break-all"
              >
                oscodesaittechteam@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Form Section */}
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, request: e.target.value }))
                }
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
    </div>
  );
}

export default ContactsPage;