/**
 * Homepage component for the SaIT Events application.
 * Displays hero, stats, events, and dynamic sections using client-side data fetching.
 */
"use client";

import React from 'react';
import Hero from './components/layout/Hero';
import StatsSection from './components/homepage/StatsSection';
import EventsSection from './components/homepage/EventsSection';
import DynamicSection from './components/homepage/DynamicSection';
import { useHomePageData } from './hooks/useHomePageData';

export default function EnhancedLandingPage() {
  const { homeFiller, stats } = useHomePageData();

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Events Section */}
      <EventsSection />

      {/* Dynamic Sections */}
      {homeFiller.map((content, index) => (
        <DynamicSection key={index} content={content} index={index} />
      ))}
    </div>
  );
}