"use client";

import { motion } from "framer-motion";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginData } from "./hooks/useAdminLogin";

interface LoginFormProps {
  userData: LoginData;
  showPassword: boolean;
  updateField: (field: keyof LoginData, value: string) => void;
  togglePasswordVisibility: () => void;
}

export default function LoginForm({
  userData,
  showPassword,
  updateField,
  togglePasswordVisibility,
}: LoginFormProps) {
  return (
    <div className="space-y-6">
      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative group"
      >
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
            required
          />
        </div>
      </motion.div>

      {/* Password Input */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative group"
      >
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={userData.password}
            onChange={(e) => updateField("password", e.target.value)}
            className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5" />
            ) : (
              <FaEye className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}