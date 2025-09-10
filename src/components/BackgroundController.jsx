import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AudioVisualizer from './AudioVisualizer';

const BackgroundController = ({ 
  defaultIntensity = 'medium',
  defaultTheme = 'mixed',
  enableControls = false 
}) => {
  const [intensity, setIntensity] = useState(defaultIntensity);
  const [theme, setTheme] = useState(defaultTheme);
  const [isVisible, setIsVisible] = useState(true);

  // Efecto para cambiar automáticamente la intensidad basada en la hora del día
  useEffect(() => {
    const hour = new Date().getHours();
    
    // Cambiar intensidad según la hora
    if (hour >= 6 && hour < 12) {
      setIntensity('low'); // Mañana - más sutil
    } else if (hour >= 12 && hour < 18) {
      setIntensity('medium'); // Tarde - moderado
    } else {
      setIntensity('high'); // Noche - más intenso
    }
  }, []);

  // Efecto para cambiar automáticamente el tema
  useEffect(() => {
    const themes = ['purple', 'blue', 'pink', 'mixed'];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    // Cambiar tema cada 30 segundos
    const interval = setInterval(() => {
      setTheme(randomTheme);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative">
      <AudioVisualizer intensity={intensity} theme={theme} />
      
      {enableControls && (
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-lg p-3 space-y-2">
          <div className="text-white text-xs mb-2">Controles de Fondo</div>
          
          <div className="space-y-1">
            <label className="text-white text-xs">Intensidad:</label>
            <div className="flex gap-1">
              {['low', 'medium', 'high'].map((level) => (
                <button
                  key={level}
                  onClick={() => setIntensity(level)}
                  className={`px-2 py-1 text-xs rounded ${
                    intensity === level 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-white text-xs">Tema:</label>
            <div className="flex gap-1">
              {['purple', 'blue', 'pink', 'mixed'].map((colorTheme) => (
                <button
                  key={colorTheme}
                  onClick={() => setTheme(colorTheme)}
                  className={`px-2 py-1 text-xs rounded ${
                    theme === colorTheme 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  }`}
                >
                  {colorTheme}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
          >
            Ocultar
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundController;
