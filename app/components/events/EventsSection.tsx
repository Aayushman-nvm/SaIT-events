"use client";

import { motion } from 'framer-motion';
import { IconType } from "react-icons";
import { Event } from "./hooks/useEvents";
import Card from "../ui/Card";
import LoadingSkeleton from "../ui/LoadingSkeleton";
import EmptyState from "../ui/EmptyState";

interface EventsSectionProps {
  title: string;
  icon: IconType;
  iconColor: string;
  iconBgColor: string;
  underlineColor: string;
  events: Event[];
  loading: boolean;
  emptyStateType: "active" | "past";
  backgroundAnimation?: {
    rotate: number[];
    scale: number[];
    duration: number;
    className: string;
    position: string;
  };
  delay?: number;
  className?: string;
}

export default function EventsSection({
  title,
  icon: Icon,
  iconColor,
  iconBgColor,
  underlineColor,
  events,
  loading,
  emptyStateType,
  backgroundAnimation,
  delay = 0,
  className,
}: EventsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`relative py-12 px-6 ${className || ""}`}
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
            className={`inline-flex items-center justify-center w-12 h-12 ${iconBgColor} rounded-full`}
          >
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </motion.div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h2>
            <div className={`w-16 h-0.5 ${underlineColor} mt-2`} />
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loading ? (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <motion.div
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  id={event._id}
                  title={event.title}
                  imgPath={event.poster}
                  btnType={title === "Currently Active" ? "Primary" : "Secondary"}
                  description={event.description}
                  index={index}
                />
              </motion.div>
            ))
          ) : (
            <EmptyState type={emptyStateType} />
          )}
        </div>
      </div>

      {/* Background Decoration */}
      {backgroundAnimation && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              rotate: backgroundAnimation.rotate,
              scale: backgroundAnimation.scale,
            }}
            transition={{
              duration: backgroundAnimation.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute w-96 h-96 border border-red-500/5 rounded-full ${backgroundAnimation.className}`}
            style={{
              [backgroundAnimation.position.includes('top') ? 'top' : backgroundAnimation.position.includes('bottom') ? 'bottom' : 'top']: backgroundAnimation.position.includes('top') ? '-48' : backgroundAnimation.position.includes('bottom') ? '-48' : '-48',
              [backgroundAnimation.position.includes('right') ? 'right' : backgroundAnimation.position.includes('left') ? 'left' : 'right']: backgroundAnimation.position.includes('right') ? '-48' : backgroundAnimation.position.includes('left') ? '-48' : '-48',
            }}
          />
        </div>
      )}
    </motion.section>
  );
}
