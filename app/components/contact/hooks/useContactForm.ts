import { useState } from "react";

interface UserData {
  email: string;
  name: string;
  request: string;
}

export function useContactForm() {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    name: "",
    request: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const requestResult = await result.json();

      if (requestResult.success) {
        setSubmitted(true);
        setUserData({ email: "", name: "", request: "" });
        console.log("SUCCESS!", requestResult.status);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error(requestResult.error || "could not process your request at the moment");
      }
    } catch (err) {
      console.error("FAILED...", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    userData,
    isSubmitting,
    submitted,
    error,
    handleSubmit,
    updateField,
  };
}