"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: "input" | "textarea";
  rows?: number;
  icon?: IconType | ReactNode;
  delay?: number;
  helperText?: string;
}

export default function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "input",
  rows = 4,
  icon,
  delay = 0.1,
  helperText,
}: FormFieldProps) {
  const InputComponent = type === "textarea" ? "textarea" : "input";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {typeof icon === 'function' ? React.createElement(icon as IconType) : icon}
          </div>
        )}
        <InputComponent
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          rows={type === "textarea" ? rows : undefined}
          className={`w-full ${icon ? "pl-12" : "px-4"} pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 ${
            type === "textarea" ? "resize-none" : ""
          }`}
        />
      </div>
      {helperText && (
        <p className="text-sm text-gray-400 mt-2">{helperText}</p>
      )}
    </motion.div>
  );
}