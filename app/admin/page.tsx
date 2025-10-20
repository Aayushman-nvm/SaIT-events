//admin onboarding page
"use client";
import EventForm from '../components/EventForm'
import React from 'react'
import { motion } from 'framer-motion'
import { FaUserShield } from 'react-icons/fa'

function page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8"
          >
            <FaUserShield className="w-10 h-10 text-red-500" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-red-500 text-sm uppercase tracking-wider mb-2"
          >
            Admin Dashboard
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Welcome Admin
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
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Create and manage events with ease. Your administrative power starts here.
          </motion.p>
        </motion.div>

        {/* Admin Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <motion.a
            href="/admin/manage"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl text-lg"
          >
            Manage Events
          </motion.a>
        </motion.div>

        {/* Event Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <EventForm/>
        </motion.div>
      </div>
    </div>
  )
}

export default page