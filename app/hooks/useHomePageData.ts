/**
 * Custom hook providing static data for the homepage sections.
 * Returns homeFiller (dynamic sections) and stats data.
 */
import { FaLightbulb, FaUsers, FaCalendarAlt, FaMagic } from 'react-icons/fa';

export const useHomePageData = () => {
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

  return { homeFiller, stats };
};