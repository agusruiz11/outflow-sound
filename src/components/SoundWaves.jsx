import React from 'react';

const SoundWaves = ({ 
  waveCount = 3,
  color = 'purple',
  intensity = 'medium',
  position = 'center', // 'center', 'top', 'bottom', 'left', 'right'
  size = 'medium' // 'small', 'medium', 'large', 'extra-large'
}) => {
  const colorClasses = {
    purple: 'from-purple-500/8 via-pink-500/4 to-transparent',
    blue: 'from-blue-500/8 via-cyan-500/4 to-transparent',
    pink: 'from-pink-500/8 via-rose-500/4 to-transparent',
    mixed: 'from-purple-500/6 via-pink-500/4 via-blue-500/4 to-transparent'
  };

  const intensityClasses = {
    low: 'opacity-5',
    medium: 'opacity-8',
    high: 'opacity-12'
  };

  const sizeMultipliers = {
    small: { base: 80, increment: 40 },
    medium: { base: 120, increment: 60 },
    large: { base: 200, increment: 100 },
    'extra-large': { base: 300, increment: 150 }
  };

  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    top: 'top-1/4 left-1/2 -translate-x-1/2',
    bottom: 'bottom-1/4 left-1/2 -translate-x-1/2',
    left: 'top-1/2 left-1/4 -translate-y-1/2',
    right: 'top-1/2 right-1/4 -translate-y-1/2'
  };

  const sizeConfig = sizeMultipliers[size];
  
  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      {Array.from({ length: waveCount }).map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full border-2 bg-gradient-radial ${colorClasses[color]} ${intensityClasses[intensity]}`}
          style={{
            width: `${sizeConfig.base + index * sizeConfig.increment}px`,
            height: `${sizeConfig.base + index * sizeConfig.increment}px`,
            animation: `soundWave ${4 + index * 0.8}s ease-in-out infinite`,
            animationDelay: `${index * 0.8}s`,
            borderColor: 'transparent'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes soundWave {
          0% {
            transform: scale(0.3);
            opacity: 0.6;
          }
          30% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          70% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default SoundWaves;
