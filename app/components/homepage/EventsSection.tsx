import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function EventsSection() {
  return (
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
            imgPath="https://github.com/user-attachments/assets/5016bd04-0f02-4129-9f6f-8212a8eb1d7d"
            btnType="Primary"
            description="Join our ongoing events and be part of the tech community. Network, learn, and grow with fellow developers."
            index={0}
          />
          <Card
            title="Past Events"
            imgPath="https://github.com/user-attachments/assets/0996311c-098a-400b-935b-054f5c707b67"
            btnType="Secondary"
            description="Explore our collection of past events, workshops, and tech talks. Relive the moments and catch up on what you missed."
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
