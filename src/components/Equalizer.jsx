import React from 'react';
import { motion } from 'framer-motion';

const Bar = ({ index, heightClass, widthClass, colorClass }) => {
  const duration = Math.random() * 0.8 + 0.5;
  const initialDelay = Math.random() * 0.5;

  return (
    <motion.div
      className={`${widthClass} ${heightClass} ${colorClass} rounded-full`}
      style={{ originY: 1 }}
      animate={{ scaleY: [0.1, 1, 0.1] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: initialDelay + index * 0.1,
        ease: 'easeInOut',
      }}
    />
  );
};

const Equalizer = ({ 
  barCount = 7, 
  heightClass = "h-24", 
  widthClass = "w-2", 
  gapClass = "gap-1.5",
  colorClass = "bg-gradient-to-b from-purple-500/80 to-pink-500/50"
}) => {
  return (
    <div className={`flex items-end justify-center ${gapClass} ${heightClass}`}>
      {Array.from({ length: barCount }).map((_, i) => (
        <Bar 
          key={i} 
          index={i} 
          heightClass={heightClass} 
          widthClass={widthClass} 
          colorClass={colorClass}
        />
      ))}
    </div>
  );
};

export default Equalizer;