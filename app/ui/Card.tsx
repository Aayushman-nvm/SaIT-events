import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaUsers } from "react-icons/fa";
import {Types} from 'mongoose';

interface CardProps {
  id?:Types.ObjectId;
  title: string;
  imgPath: string;
  btnType: string;
  description:string;
  index?: number;
}

function Card({ id, title, imgPath, btnType, description, index = 0 }: CardProps) {
  const isActive = title.includes('Active');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500"
    >
      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20 z-0"
      />
      
      <div className="relative z-10 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.h4
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
          >
            {title}
          </motion.h4>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4 + index * 0.1, type: "spring", bounce: 0.5 }}
            className={`p-2 rounded-full ${isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/20 text-gray-400'}`}
          >
            {isActive ? <FaUsers size={24} /> : <FaCalendar size={24} />}
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
          className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gray-800"
        >
          <img
            src={imgPath}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
              isActive 
                ? 'bg-green-500/90 text-white' 
                : 'bg-gray-600/90 text-gray-200'
            } backdrop-blur-sm`}
          >
            {isActive ? 'Live Now' : 'Archive'}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-gray-300 mb-6 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Action Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: btnType === "Primary" ? "0 10px 40px rgba(239, 68, 68, 0.3)" : "0 10px 40px rgba(75, 85, 99, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className={`group/btn w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${
            btnType === "Primary"
              ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg"
              : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg"
          }`}
          href={id?`/events/${id}`:"/events"}
        >
          <span>Explore Now</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaArrowRight size={20} />
          </motion.div>
        </motion.a>
      </div>

      {/* Corner Decoration */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
        className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-xl"
      />
    </motion.div>
  );
}

export default Card;