import React from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, Settings, Users } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Music,
      title: "Equipos Premium",
      description: "CDJ-3000 + DJM-900NXS2",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Volume2,
      title: "Sonido Profesional",
      description: "Electro-Voice + subs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Servicio Integral",
      description: "Traslado, instalación, prueba y retiro",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Know-how DJ",
      description: "Montado por DJs y técnicos expertos",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos tecnología de vanguardia con el expertise de profesionales que entienden la música
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 glow-border"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;