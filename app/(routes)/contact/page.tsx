"use client";

import Background from "../events/component/Background";
import HeroSection from "../../components/contact/HeroSection";
import ContactForm from "../../components/contact/ContactForm";

function ContactsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Background />
      <HeroSection />
      <ContactForm />
    </div>
  );
}

export default ContactsPage;