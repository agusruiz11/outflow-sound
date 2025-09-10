import React from 'react';

const ButtonWaveEffect = ({ 
  color = 'purple',
  intensity = 'low'
}) => {
  const colorClasses = {
    purple: 'from-purple-500/6 via-pink-500/3 to-transparent',
    blue: 'from-blue-500/6 via-cyan-500/3 to-transparent',
    pink: 'from-pink-500/6 via-rose-500/3 to-transparent',
    mixed: 'from-purple-500/5 via-pink-500/3 via-blue-500/3 to-transparent'
  };

  const intensityClasses = {
    low: 'opacity-8',
    medium: 'opacity-12',
    high: 'opacity-16'
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
      {/* Ondas que se expanden desde el centro del botón */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={`wave-${index}`}
          className={`absolute rounded-full bg-gradient-radial ${colorClasses[color]} ${intensityClasses[intensity]}`}
          style={{
            width: `${200 + index * 100}px`,
            height: `${200 + index * 100}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `buttonWaveExpand ${5 + index * 0.8}s ease-out infinite`,
            animationDelay: `${index * 1.2}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes buttonWaveExpand {
          0% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0.8;
          }
          30% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.5;
          }
          60% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
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

export default ButtonWaveEffect;
