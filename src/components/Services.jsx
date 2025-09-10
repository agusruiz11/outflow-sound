
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Clock, CheckCircle, GraduationCap } from 'lucide-react';
    
    const Services = () => {
      const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
    
      return (
        <section id="servicios" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
                Nuestros Servicios
              </h2>
              <div className="flex items-center justify-center space-x-4 text-gray-300 mb-8">
                <Clock size={24} />
                <span className="text-lg">Nos ajustamos a las necesidades de tu evento y te armamos un pack a medida</span>
              </div>
            </motion.div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Servicio 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 glow-border"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Alquiler Cabina & Sonido Premium</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  En Outflow nos ocupamos de todo: asesoramiento previo, reserva exclusiva, instalación y prueba antes del evento, desmontaje y retiro al finalizar.
                </p>
                <p className="text-gray-300 mb-6 text-lg">
                  Pioneer CDJ-3000 + sistema profesional, instalación y cero preocupaciones.
                </p>
                
                <div className="mb-6">
                  <img  
                    className="w-full h-48 object-cover rounded-xl" 
                    alt="Setup completo de cabina Pioneer DJ con sistema de sonido profesional"
                   src="https://images.unsplash.com/photo-1657208449170-da7e46291563" />
                </div>
                
                <p className="text-sm text-gray-400 mb-6">
                  * Incluye hasta 8h. Extras se cotizan aparte.
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                >
                  👉 Consultá disponibilidad de tu fecha
                </Button>
              </motion.div>
    
              {/* Servicio 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 glow-border"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Clases de DJ Profesionales</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  Clases presenciales dictadas por DJs con experiencia, en Pioneer CDJ-3000 + DJM-900NXS2.
                </p>
                
                <div className="mb-6">
                  <img  
                    className="w-full h-48 object-cover rounded-xl" 
                    alt="Instructor DJ enseñando técnicas en Pioneer CDJ-3000"
                   src="https://images.unsplash.com/photo-1657208449170-da7e46291563" />
                </div>
                
                <p className="text-gray-300 mb-6">
                  Opciones: individuales, packs o workshops intensivos.
                </p>
    
                {/* Extras moved here */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3 text-white">Extras Disponibles:</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Luces', 'DJ', 'Operador', 'Microfonía'].map((extra, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                  👉 Quiero aprender a mezclar
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    
    export default Services;
  