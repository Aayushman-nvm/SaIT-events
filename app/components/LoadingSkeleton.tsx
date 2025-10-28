"use client";

import { motion } from "framer-motion";
const LoadingSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-700/50"
  >
    <div className="relative z-10 p-6 sm:p-8">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 bg-gray-700/50 rounded-lg w-2/3 animate-pulse" />
        <div className="w-12 h-12 bg-gray-700/50 rounded-full animate-pulse" />
      </div>

      {/* Image Skeleton */}
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gray-800 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent animate-shimmer" />
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-700/50 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-700/50 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-gray-700/50 rounded w-4/6 animate-pulse" />
      </div>

      {/* Button Skeleton */}
      <div className="h-14 bg-gray-700/50 rounded-xl w-full sm:w-auto animate-pulse" />
    </div>

    {/* shimmer animation */}
    <style jsx>{`
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `}</style>
  </motion.div>
);
export default LoadingSkeleton;
