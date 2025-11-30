"use client";

import { useEffect, useState } from "react";
import { Types } from "mongoose";

export type Event = {
  _id: Types.ObjectId;
  title: string;
  description: string;
  poster: string;
  status: "ongoing" | "ended" | "upcoming";
  socialLink: string;
};

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getPosts() {
    try {
      setLoading(true);
      const result = await fetch("/api/events");
      if (!result.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts = await result.json();
      console.log(posts);
      setEvents(posts);
      console.log(posts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

  return {
    events,
    loading,
    activeEvents,
    pastEvents,
    refetch: getPosts,
  };
}