"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaUsers, FaCalendarAlt, FaMagic } from 'react-icons/fa';

import Hero from './components/Hero';
import Card from './ui/Card';

export default function EnhancedLandingPage() {
  const homeFiller = [
    {
      title: "Suggestions",
      subTitle: "Your Voice Matters",
      text: "Have an event idea? A doubt? Or just want to drop feedback? We're all ears. You're the reason we do what we do - and yes, you'll be heard. (Just give us a little time :))",
      button: "Share Your Suggestion",
      to: "/suggestions",
      icon: FaLightbulb,
    },
    {
      title: "About us",
      subTitle: "Who We Are",
      text: "We are a group of like-minded individuals from the Sambhram CS & IT technical community, brought together by a shared vision - to create a unified platform where we can showcase our work and keep you updated.",
      button: "Know More",
      to: "/about",
      icon: FaUsers,
    },
  ];

  const stats = [
    { number: "50+", label: "Events Hosted", icon: FaCalendarAlt },
    { number: "1000+", label: "Students Engaged", icon: FaUsers },
    { number: "25+", label: "Industry Experts", icon: FaMagic },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <Hero/>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-b from-black to-gray-950"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-red-500 text-sm uppercase tracking-wider mb-2">Events</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What&apos;s Up?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Active Events"
              imgPath="https://github.com/user-attachments/assets/d6f26046-313a-437d-b352-9bc2abb629f7"
              btnType="Primary"
              description="Join our ongoing events and be part of the tech community. Network, learn, and grow with fellow developers."
              index={0}
            />
            <Card
              title="Past Events"
              imgPath="https://github.com/user-attachments/assets/d6f26046-313a-437d-b352-9bc2abb629f7"
              btnType="Secondary"
              description="Explore our collection of past events, workshops, and tech talks. Relive the moments and catch up on what you missed."
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {homeFiller.map((content, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`relative py-20 ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-black via-gray-950 to-red-950/20' 
              : 'bg-gradient-to-br from-gray-950 via-black to-gray-900'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-8"
            >
              <content.icon className="w-8 h-8 text-red-500" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-red-500 text-sm uppercase tracking-wider mb-2"
            >
              {content.title}
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              {content.subTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed mb-10"
            >
              {content.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href={content.to}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl"
              >
                {content.button}
                <FaArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute w-96 h-96 border border-red-500/10 rounded-full ${
                index % 2 === 0 ? '-top-48 -right-48' : '-bottom-48 -left-48'
              }`}
            />
          </div>
        </motion.section>
      ))}
    </div>
  );
}