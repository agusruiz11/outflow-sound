import React from 'react';
import AudioVisualizer from './AudioVisualizer';

// Presets predefinidos para diferentes secciones
export const visualizationPresets = {
  hero: {
    intensity: 'medium',
    theme: 'mixed',
    description: 'Efecto completo para la sección principal'
  },
  services: {
    intensity: 'low',
    theme: 'blue',
    description: 'Efecto sutil para secciones de contenido'
  },
  contact: {
    intensity: 'high',
    theme: 'purple',
    description: 'Efecto intenso para llamadas a la acción'
  },
  about: {
    intensity: 'low',
    theme: 'pink',
    description: 'Efecto suave para secciones informativas'
  },
  minimal: {
    intensity: 'low',
    theme: 'purple',
    description: 'Efecto mínimo para no distraer del contenido'
  },
  party: {
    intensity: 'high',
    theme: 'mixed',
    description: 'Efecto máximo para crear ambiente festivo'
  }
};

const VisualizationPresets = ({ 
  preset = 'hero',
  customConfig = null,
  className = ''
}) => {
  const config = customConfig || visualizationPresets[preset] || visualizationPresets.hero;

  return (
    <div className={`audio-visualizer-container ${className}`}>
      <AudioVisualizer 
        intensity={config.intensity}
        theme={config.theme}
      />
    </div>
  );
};

// Componente para mostrar información del preset actual
export const PresetInfo = ({ preset }) => {
  const config = visualizationPresets[preset];
  
  if (!config) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-xs z-50">
      <div className="font-semibold mb-1">Preset: {preset}</div>
      <div className="text-gray-300">{config.description}</div>
      <div className="mt-1 text-gray-400">
        Intensidad: {config.intensity} | Tema: {config.theme}
      </div>
    </div>
  );
};

export default VisualizationPresets;
