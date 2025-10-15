"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaArchive } from "react-icons/fa";
import { Types } from "mongoose";
import Card from "../../ui/Card";
import Background from "./component/Background";

function Page() {
  type Event = {
    _id: Types.ObjectId;
    title: string;
    description: string;
    poster: string;
    status: "ongoing" | "ended" | "upcoming";
    socialLink: string;
  };
  const [events, setEvents] = useState<Event[]>([]);

  async function getPosts() {
    try {
      const result = await fetch("/api/events");
      if (!result.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts = await result.json();
      console.log(posts);
      setEvents(posts);
      console.log(posts);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const activeEvents = events.filter((event) =>
    ["ongoing", "upcoming"].includes(event.status)
  );

  const pastEvents = events.filter((event) => event.status === "ended");

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Fixed Background Section */}
      <Background />
      {/* Scrollable Content */}
      <div className="relative z-10 pt-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Events
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* Active Events Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-12 px-6"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full"
              >
                <FaCalendarAlt className="w-6 h-6 text-red-500" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Currently Active
                </h2>
                <div className="w-16 h-0.5 bg-red-500 mt-2" />
              </div>
            </motion.div>

            {/* Active Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activeEvents.map((event, index) => (
                <motion.div
                  key={`active-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    id={event._id}
                    title={event.title}
                    imgPath={event.poster}
                    btnType="Primary"
                    description={event.description}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-96 h-96 border border-red-500/5 rounded-full -top-48 -right-48"
            />
          </div>
        </motion.section>

        {/* Past Events Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-12 px-6 bg-gradient-to-br from-black/50 via-gray-950/30 to-black/50"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gray-500/20 rounded-full"
              >
                <FaArchive className="w-6 h-6 text-gray-400" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Past Archives
                </h2>
                <div className="w-16 h-0.5 bg-gray-400 mt-2" />
              </div>
            </motion.div>

            {/* Past Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={`inactive-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    id={event._id}
                    title={event.title}
                    imgPath={event.poster}
                    btnType="Secondary"
                    description={event.description}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-96 h-96 border border-gray-500/5 rounded-full -bottom-48 -left-48"
            />
          </div>
        </motion.section>

        {/* Bottom Padding */}
        <div className="h-20" />
      </div>
    </div>
  );
}

export default Page;
