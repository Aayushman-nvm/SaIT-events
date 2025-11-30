"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaImage, FaLink } from "react-icons/fa";
import { useEventForm } from "./hooks/useEventForm";
import FormField from "./FormField";
import StatusSelector from "./StatusSelector";
import SubmitButton from "./SubmitButton";

function EventForm() {
  const {
    formData,
    handleChange,
    isSubmitEnabled,
    isSubmitting,
    handleSubmit,
  } = useEventForm();

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
          <FormField
            label="Event Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title..."
            delay={0.1}
          />

          <FormField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Abstract description of your event..."
            type="textarea"
            rows={4}
            delay={0.2}
          />

          <FormField
            label="Event Information"
            name="info"
            value={formData.info}
            onChange={handleChange}
            placeholder="Give detail info of your event..."
            type="textarea"
            rows={5}
            delay={0.2}
          />

          <FormField
            label="Poster URL"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
            icon={FaImage}
            delay={0.3}
          />

          <FormField
            label="Registration Link"
            name="registrationLink"
            value={formData.registrationLink}
            onChange={handleChange}
            placeholder="https://registration-link.com"
            icon={FaLink}
            delay={0.4}
          />
        </div>

        {/* Right Column - Status & Additional Info */}
        <div className="space-y-6">
          <StatusSelector
            status={formData.status}
            onChange={handleChange}
            delay={0.4}
          />

          <FormField
            label="Social Post Link"
            name="socialLink"
            value={formData.socialLink}
            onChange={handleChange}
            placeholder="https://social-platform.com/post"
            icon={FaLink}
            delay={0.6}
            helperText="Social posts: logo with link"
          />
        </div>
      </div>

      {/* Submit Button */}
      <SubmitButton
        onClick={handleSubmit}
        isSubmitEnabled={isSubmitEnabled}
        isSubmitting={isSubmitting}
        delay={0.7}
      />
    </motion.div>
  );
}

export default EventForm;
