"use client";

import { motion } from "framer-motion";

interface StatusOption {
  value: string;
  label: string;
  color: string;
}

const statusOptions: StatusOption[] = [
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

interface StatusSelectorProps {
  status: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay?: number;
}

export default function StatusSelector({ status, onChange, delay = 0.4 }: StatusSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
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
              onChange={onChange}
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
  );
}