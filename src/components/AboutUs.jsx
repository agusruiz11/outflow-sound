import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Music } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Nuestra Esencia
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sonido Outflow es más que un alquiler de equipos; es la evolución de{' '}
              <strong className="text-purple-400">Outflow Party</strong>, una comunidad de música electrónica con base en Caballito.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos DJs y productores escalando un modelo premium, con un foco obsesivo en la{' '}
              <strong className="text-pink-400">calidad técnica</strong>, la{' '}
              <strong className="text-blue-400">confiabilidad</strong> y un know-how que entiende las necesidades reales de un evento inolvidable.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:justify-start">
              <div className="flex items-center space-x-3">
                <Music className="text-purple-400" />
                <span className="font-semibold">By DJs, for DJs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-blue-400" />
                <span className="font-semibold">Comunidad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="text-pink-400" />
                <span className="font-semibold">Calidad Premium</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden p-1 glow-border"
          >
            <div className="h-full w-full rounded-xl">
              <img  alt="Una fiesta de Outflow Party con gente bailando y luces de neón" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583512246035-e87eac19acbd" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-2xl drop-shadow-lg">#OutflowCommunity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;