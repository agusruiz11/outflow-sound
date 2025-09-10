import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import VisualizationPresets from '@/components/VisualizationPresets';
import ButtonWaveEffect from '@/components/ButtonWaveEffect';

const Hero = () => {
  const handleCTA = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: "🚧 Sección no encontrada",
        description: "No se pudo encontrar la sección de contacto.",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-purple"></div>
        {/* Enhanced Audio Visualizer with Hero Preset */}
        <VisualizationPresets preset="hero" />
      </div>

      <div className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* <p className="text-lg md:text-xl text-purple-300 mb-4">
              Una empresa premium de alquiler de cabinas DJ y sistemas de sonido nacida de la serie de eventos exclusivos de música electrónica "Outflow Party"
            </p> */}
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              El sonido de los mejores clubs, ahora en tu fiesta privada.
            </p>
          </motion.div>

          <img 
            src="/images/logo5.png" 
            alt="Sonido Outflow" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text"
          >
            Hacé vibrar tu evento con el{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              sonido más premium
            </span>{' '}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            {/* <p className="text-xl md:text-2xl text-gray-300 mb-4">
              El sonido de los mejores clubs, ahora en tu fiesta privada.
            </p> */}
            {/* <p className="text-lg md:text-xl text-gray-400">
              Pioneer CDJ-3000 + sistema profesional, instalación y cero preocupaciones.
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="relative">
              {/* Ondas de fondo específicas para el botón */}
              {/* <ButtonWaveEffect color="mixed" intensity="low" /> */}
              
              <Button 
                onClick={handleCTA}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full neon-glow transition-all duration-300 transform hover:scale-105 w-full sm:w-auto relative z-10"
              >
                Cotizá tu evento
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <img  
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl neon-glow" 
              alt="Cabina DJ profesional Pioneer CDJ-3000 iluminada en evento nocturno"
             src="https://images.unsplash.com/photo-1650631072662-6770e1a0e7d5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;