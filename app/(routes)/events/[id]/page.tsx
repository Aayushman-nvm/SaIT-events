import connectDB from "@/app/api/lib/dbConnection";
import Post from "@/app/api/models/Post";
import { notFound } from "next/navigation";
import EventPageClient from "./EventPageClient";

interface EventPageProps {
  params: Promise<{ id: string }>;
}

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

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  await connectDB();

  const event = await Post.findById(id).lean<Event>();
  console.log(event);

  if (!event) {
    notFound();
  }

  return <EventPageClient event={event} />;
}