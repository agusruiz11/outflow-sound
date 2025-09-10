import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Music, Heart } from 'lucide-react';

const ClientSegments = () => {
  const segments = [
    {
      icon: Users,
      title: "Productores de Eventos",
      description: "Eventos chicos y medianos",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building,
      title: "Bares y Salones",
      description: "en CABA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Music,
      title: "DJs Independientes",
      description: "Profesionales y emergentes",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Eventos Premium",
      description: "Bodas y cumpleaños exclusivos",
      color: "from-cyan-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabajamos con una amplia variedad de clientes que buscan calidad y profesionalismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${segment.color} flex items-center justify-center`}>
                <segment.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{segment.title}</h3>
              <p className="text-gray-300">{segment.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <img  
                className="w-full h-32 object-cover rounded-lg mb-4" 
                alt="Evento corporativo con setup de sonido profesional"
               src="https://images.unsplash.com/photo-1563680401337-b77b5e0be9f7" />
              <p className="text-gray-300">Eventos Corporativos</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <img  
                className="w-full h-32 object-cover rounded-lg mb-4" 
                alt="Boda elegante con cabina DJ discreta y sonido premium"
               src="https://images.unsplash.com/photo-1618107095181-e3ba0f53ee59" />
              <p className="text-gray-300">Bodas Premium</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <img  
                className="w-full h-32 object-cover rounded-lg mb-4" 
                alt="Fiesta privada con DJ profesional y público bailando"
               src="https://images.unsplash.com/photo-1650069740302-d7096f9daeea" />
              <p className="text-gray-300">Fiestas Privadas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSegments;