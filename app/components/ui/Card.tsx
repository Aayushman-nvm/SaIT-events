import React from 'react';
import { motion } from 'framer-motion';
import { CardProps, getCardStatus } from './cardUtils';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardDescription from './CardDescription';
import CardButton from './CardButton';
import CardDecoration from './CardDecoration';

function Card({ id, title, imgPath, btnType, description, index = 0 }: CardProps) {
  const { isActive, statusText } = getCardStatus(title);

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
        <CardHeader title={title} isActive={isActive} index={index} />
        <CardImage
          imgPath={imgPath}
          title={title}
          isActive={isActive}
          statusText={statusText}
          index={index}
        />
        <CardDescription description={description} index={index} />
        <CardButton id={id} btnType={btnType} index={index} />
      </div>

      <CardDecoration index={index} />
    </motion.div>
  );
}

export default Card;
