import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Trust = () => {
  const testimonials = [
    {
      name: "Outflow Party",
      text: "El sonido que define nuestros eventos. Calidad incomparable y servicio impecable.",
      rating: 5
    },
    {
      name: "Evento Corporativo",
      text: "Profesionalismo total. La instalación fue perfecta y el sonido espectacular.",
      rating: 5
    },
    {
      name: "Boda Premium",
      text: "Hicieron que nuestra boda fuera perfecta. Sonido cristalino y servicio excepcional.",
      rating: 5
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
            Confianza y Experiencia
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <Quote size={32} className="text-purple-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img  
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
              alt="Instalación de cabina DJ Pioneer en evento nocturno"
             src="https://images.unsplash.com/photo-1686242585085-dc1b1a0a0cb8" />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img  
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
              alt="Sistema de sonido profesional en boda elegante"
             src="https://images.unsplash.com/photo-1563680401337-b77b5e0be9f7" />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img  
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
              alt="Público disfrutando en evento con sonido Outflow"
             src="https://images.unsplash.com/photo-1638949514177-05a198357e72" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;