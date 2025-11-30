/**
 * Events page component displaying active and past events.
 * Uses client-side data fetching to load events from the API.
 */
"use client";

import { FaCalendarAlt, FaArchive } from "react-icons/fa";
import { useEvents } from "../../components/events/hooks/useEvents";
import EventsHeader from "../../components/events/EventsHeader";
import EventsSection from "../../components/events/EventsSection";
import Background from "./component/Background";

function Page() {
  const { loading, activeEvents, pastEvents } = useEvents();

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Fixed Background Section */}
      <Background />
      {/* Scrollable Content */}
      <div className="relative z-10 pt-20">
        <EventsHeader />

        <EventsSection
          title="Currently Active"
          icon={FaCalendarAlt}
          iconColor="text-red-500"
          iconBgColor="bg-red-500/20"
          underlineColor="bg-red-500"
          events={activeEvents}
          loading={loading}
          emptyStateType="active"
          backgroundAnimation={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            duration: 25,
            className: "",
            position: "-top-48 -right-48"
          }}
          delay={0.1}
        />

        <EventsSection
          title="Past Archives"
          icon={FaArchive}
          iconColor="text-gray-400"
          iconBgColor="bg-gray-500/20"
          underlineColor="bg-gray-400"
          events={pastEvents}
          loading={loading}
          emptyStateType="past"
          backgroundAnimation={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            duration: 30,
            className: "",
            position: "-bottom-48 -left-48"
          }}
          delay={0.2}
          className="bg-gradient-to-br from-black/50 via-gray-950/30 to-black/50"
        />

        {/* Bottom Padding */}
        <div className="h-20" />
      </div>
    </div>
  );
}

export default Page;
