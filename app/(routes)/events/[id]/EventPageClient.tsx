"use client";

import React from "react";
import { motion } from "framer-motion";
import BackgroundDecorations from "../../../components/event-detail/BackgroundDecorations";
import EventHeader from "../../../components/event-detail/EventHeader";
import PosterSection from "../../../components/event-detail/PosterSection";
import DetailsSection from "../../../components/event-detail/DetailsSection";
import ActionButtons from "../../../components/event-detail/ActionButtons";
import AdditionalInfo from "../../../components/event-detail/AdditionalInfo";

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
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BackgroundDecorations />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <EventHeader
          title={event.title}
          description={event.description}
          status={event.status}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <PosterSection poster={event.poster} title={event.title} />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <DetailsSection info={event.info} />

            <ActionButtons
              socialLink={event.socialLink}
              registrationLink={event.registrationLink}
            />

            <AdditionalInfo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
