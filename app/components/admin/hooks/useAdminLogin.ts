"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface LoginData {
  email: string;
  password: string;
}

export function useAdminLogin() {
  const [userData, setUserData] = useState<LoginData>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("Server res: ", data);

      if (data.success) {
        router.push("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof LoginData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    userData,
    isSubmitting,
    showPassword,
    error,
    isFormValid: Boolean(userData.email && userData.password),
    handleSubmit,
    updateField,
    togglePasswordVisibility,
  };
}