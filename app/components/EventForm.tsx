"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaImage, FaLink, FaCheck } from "react-icons/fa";

const initialForm = {
  title: "",
  description: "",
  info: "",
  poster: "",
  registrationLink: "",
  status: "",
  socialLink: "",
};

function EventForm() {
  const [formData, setFormData] = useState(initialForm);
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
  const isSubmitEnabled =
    title &&
    description &&
    info &&
    poster &&
    registrationLink &&
    status &&
    socialLink;

  const handleSubmit = async () => {
    // Simulate API call
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
      setIsSubmitting(false);
    }
  };

  const statusOptions = [
    {
      value: "ongoing",
      label: "Ongoing",
      color: "text-green-400 border-green-400",
    },
    {
      value: "upcoming",
      label: "Upcoming",
      color: "text-blue-400 border-blue-400",
    },
    { value: "ended", label: "Ended", color: "text-gray-400 border-gray-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8 bg-gray-900/50 border border-gray-700 rounded-2xl backdrop-blur-sm"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaCalendarAlt className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Create Event
          </h2>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Main Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Event Title
            </label>
            <input
              placeholder="Enter event title..."
              name="title"
              value={title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              placeholder="Abstract description of your event..."
              name="description"
              value={description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Event Information
            </label>
            <textarea
              placeholder="Give detail info of your event..."
              name="info"
              value={info}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Poster URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaImage className="h-5 w-5 text-red-500" />
              </div>
              <input
                placeholder="https://example.com/poster.jpg"
                name="poster"
                value={poster}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Registration Link
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLink className="h-5 w-5 text-red-500" />
              </div>
              <input
                placeholder="https://registration-link.com"
                name="registrationLink"
                value={registrationLink}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column - Status & Additional Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Event Status
            </label>
            <div className="space-y-3">
              {statusOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-800/30 ${
                    status === option.value
                      ? `${option.color} bg-gray-800/50`
                      : "border-gray-600 text-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="status"
                    value={option.value}
                    checked={status === option.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                      status === option.value ? option.color : "border-gray-600"
                    }`}
                  >
                    {status === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-current"
                      />
                    )}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </label>
              ))}
            </div>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-gray-800/30 border border-gray-700 rounded-lg"
              >
                <p className="text-sm text-gray-400">
                  Selected Status:{" "}
                  <span className="text-white font-medium">{status}</span>
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social Link Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Social Post Link
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLink className="h-5 w-5 text-red-500" />
              </div>
              <input
                placeholder="https://social-platform.com/post"
                name="socialLink"
                value={socialLink}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Social posts: logo with link
            </p>
          </motion.div>
        </div>
      </div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-12 text-center"
      >
        <motion.button
          onClick={handleSubmit}
          disabled={!isSubmitEnabled || isSubmitting}
          whileHover={{
            scale: isSubmitEnabled && !isSubmitting ? 1.05 : 1,
            boxShadow:
              isSubmitEnabled && !isSubmitting
                ? "0 0 30px rgba(239, 68, 68, 0.5)"
                : "none",
          }}
          whileTap={{ scale: isSubmitEnabled && !isSubmitting ? 0.95 : 1 }}
          className={`inline-flex items-center gap-3 px-12 py-4 font-semibold rounded-xl transition-all duration-300 shadow-xl ${
            isSubmitting
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : isSubmitEnabled
              ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
              />
              Creating Event...
            </>
          ) : (
            <>
              <FaCheck className="w-5 h-5" />
              Create Event
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default EventForm;
