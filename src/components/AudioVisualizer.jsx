import React from 'react';
import { motion } from 'framer-motion';
import SoundWaves from './SoundWaves';

// Componente para barras verticales del equalizador
const EqualizerBar = ({ index, heightClass, widthClass, colorClass, delay = 0 }) => {
  const duration = Math.random() * 0.8 + 0.5;
  const initialDelay = Math.random() * 0.5 + delay;

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

// Componente para líneas horizontales onduladas
const WaveLine = ({ index, colorClass, delay = 0 }) => {
  const duration = Math.random() * 2 + 1;
  const initialDelay = Math.random() * 1 + delay;

  return (
    <motion.div
      className={`absolute w-full h-0.5 ${colorClass} opacity-30`}
      style={{ top: `${20 + index * 15}%` }}
      animate={{ 
        x: ['-100%', '100%'],
        opacity: [0, 0.3, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: initialDelay,
        ease: 'linear',
      }}
    />
  );
};

// Componente para líneas verticales onduladas
const VerticalWaveLine = ({ index, colorClass, delay = 0 }) => {
  const duration = Math.random() * 2 + 1;
  const initialDelay = Math.random() * 1 + delay;

  return (
    <motion.div
      className={`absolute h-full w-0.5 ${colorClass} opacity-20`}
      style={{ left: `${10 + index * 20}%` }}
      animate={{ 
        y: ['-100%', '100%'],
        opacity: [0, 0.2, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: initialDelay,
        ease: 'linear',
      }}
    />
  );
};

// Componente para partículas flotantes
const FloatingParticle = ({ index, colorClass, delay = 0 }) => {
  const duration = Math.random() * 3 + 2;
  const initialDelay = Math.random() * 2 + delay;
  const size = Math.random() * 4 + 2;

  return (
    <motion.div
      className={`absolute rounded-full ${colorClass} opacity-40`}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
      animate={{ 
        y: [0, -20, 0],
        x: [0, Math.random() * 10 - 5, 0],
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: initialDelay,
        ease: 'easeInOut',
      }}
    />
  );
};

// Componente para círculos concéntricos animados con efecto zoom sincronizado
const ConcentricCircle = ({ index, colorClass, delay = 0 }) => {
  const duration = 3; // Misma duración para todos: 3s
  const initialDelay = index * 0.5; // Delay progresivo: 0s, 0.5s, 1s
  const size = 70;

  return (
    <motion.div
      className={`absolute border-2 ${colorClass} rounded-full opacity-10`}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        left: '42%',
        top: '57%',
        transform: 'translate(-50%, -50%)'
      }}
      animate={{ 
        scale: [0.1, 1.8, 0.1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: initialDelay,
        ease: 'easeInOut',
      }}
    />
  );
};

const AudioVisualizer = ({ 
  intensity = 'medium', // 'low', 'medium', 'high'
  theme = 'purple' // 'purple', 'blue', 'pink', 'mixed'
}) => {
  // Configuraciones según la intensidad
  const configs = {
    low: {
      equalizerBars: 3,
      waveLines: 2,
      verticalWaves: 2,
      particles: 5,
      circles: 2,
      opacity: 0.1
    },
    medium: {
      equalizerBars: 5,
      waveLines: 4,
      verticalWaves: 3,
      particles: 8,
      circles: 3,
      opacity: 0.2
    },
    high: {
      equalizerBars: 8,
      waveLines: 6,
      verticalWaves: 5,
      particles: 12,
      circles: 4,
      opacity: 0.3
    }
  };

  // Configuraciones de color según el tema
  const colorConfigs = {
    purple: {
      equalizer: 'bg-gradient-to-b from-purple-500/60 to-pink-500/40',
      waves: 'bg-gradient-to-r from-purple-400/30 to-transparent',
      particles: 'bg-purple-400',
      circles: 'border-purple-400/20'
    },
    blue: {
      equalizer: 'bg-gradient-to-b from-blue-500/60 to-cyan-500/40',
      waves: 'bg-gradient-to-r from-blue-400/30 to-transparent',
      particles: 'bg-blue-400',
      circles: 'border-blue-400/20'
    },
    pink: {
      equalizer: 'bg-gradient-to-b from-pink-500/60 to-rose-500/40',
      waves: 'bg-gradient-to-r from-pink-400/30 to-transparent',
      particles: 'bg-pink-400',
      circles: 'border-pink-400/20'
    },
    mixed: {
      equalizer: 'bg-gradient-to-b from-purple-500/60 via-pink-500/50 to-blue-500/40',
      waves: 'bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20',
      particles: 'bg-gradient-to-r from-purple-400 to-pink-400',
      circles: 'border-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20'
    }
  };

  const config = configs[intensity];
  const colors = colorConfigs[theme];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Equalizadores en las esquinas */}
      <div className="absolute top-1/4 left-8 md:left-16 opacity-20">
        <div className="flex items-end justify-center gap-1.5 h-32">
          {Array.from({ length: 10 }).map((_, i) => (
            <EqualizerBar 
              key={i} 
              index={i} 
              heightClass="h-32" 
              widthClass="w-2.5" 
              colorClass={colors.equalizer}
              delay={0}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 right-8 md:right-16 opacity-20">
        <div className="flex items-end justify-center gap-1.5 h-32">
          {Array.from({ length: 10 }).map((_, i) => (
            <EqualizerBar 
              key={i} 
              index={i} 
              heightClass="h-32" 
              widthClass="w-2.5" 
              colorClass={colors.equalizer}
              delay={0.5}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-15 blur-sm">
        <div className="flex items-end justify-center gap-1 h-20">
          {Array.from({ length: Math.floor(config.equalizerBars / 2) }).map((_, i) => (
            <EqualizerBar 
              key={i} 
              index={i} 
              heightClass="h-20" 
              widthClass="w-1.5" 
              colorClass={colors.equalizer}
              delay={1}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3 opacity-15 blur-sm">
        <div className="flex items-end justify-center gap-1 h-20">
          {Array.from({ length: Math.floor(config.equalizerBars / 2) }).map((_, i) => (
            <EqualizerBar 
              key={i} 
              index={i} 
              heightClass="h-20" 
              widthClass="w-1.5" 
              colorClass={colors.equalizer}
              delay={1.5}
            />
          ))}
        </div>
      </div>

      {/* Equalizador horizontal en la parte inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/3 opacity-20">
        <div className="flex items-end justify-center gap-1 h-16">
          {Array.from({ length: 50 }).map((_, i) => (
            <EqualizerBar 
              key={i} 
              index={i} 
              heightClass="h-16" 
              widthClass="w-1" 
              colorClass={colors.equalizer}
              delay={2}
            />
          ))}
        </div>
      </div>

      {/* Líneas horizontales onduladas */}
      {Array.from({ length: config.waveLines }).map((_, i) => (
        <WaveLine 
          key={`wave-${i}`} 
          index={i} 
          colorClass={colors.waves}
          delay={i * 0.5}
        />
      ))}

      {/* Líneas verticales onduladas */}
      {Array.from({ length: config.verticalWaves }).map((_, i) => (
        <VerticalWaveLine 
          key={`vwave-${i}`} 
          index={i} 
          colorClass={colors.waves}
          delay={i * 0.3}
        />
      ))}

      {/* Partículas flotantes */}
      {Array.from({ length: config.particles }).map((_, i) => (
        <FloatingParticle 
          key={`particle-${i}`} 
          index={i} 
          colorClass={colors.particles}
          delay={i * 0.2}
        />
      ))}

      {/* Círculos concéntricos */}
      {/* {Array.from({ length: config.circles }).map((_, i) => (
        <ConcentricCircle 
          key={`circle-${i}`} 
          index={i} 
          colorClass={colors.circles}
          delay={i * 0.8}
        />
      ))} */}

      {/* Ondas de sonido centradas como fondo del botón */}
      <SoundWaves 
        waveCount={4} 
        color={theme} 
        intensity="low" 
        position="center" 
        size="extra-large"
      />
      <SoundWaves 
        waveCount={2} 
        color={theme} 
        intensity="low" 
        position="center" 
        size="large"
      />
    </div>
  );
};

export default AudioVisualizer;
