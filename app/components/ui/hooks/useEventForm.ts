import { useState } from "react";

export interface EventFormData {
  title: string;
  description: string;
  info: string;
  poster: string;
  registrationLink: string;
  status: string;
  socialLink: string;
}

const initialForm: EventFormData = {
  title: "",
  description: "",
  info: "",
  poster: "",
  registrationLink: "",
  status: "",
  socialLink: "",
};

export function useEventForm() {
  const [formData, setFormData] = useState<EventFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    title,
    description,
    info,
    poster,
    registrationLink,
    status,
    socialLink,
  } = formData;

  // Logic checks - all fields must be filled
  const isSubmitEnabled: boolean =
    !!(title &&
    description &&
    info &&
    poster &&
    registrationLink &&
    status &&
    socialLink);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Res: ", res);
      alert("Event created successfully!");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to create event:", error);
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    title,
    description,
    info,
    poster,
    registrationLink,
    status,
    socialLink,
    isSubmitEnabled,
    handleChange,
    handleSubmit,
  };
}