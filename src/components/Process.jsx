import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileSignature, Settings2, Disc, Star, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contacto Inicial",
      description: "Contanos tu idea por formulario o WhatsApp.",
      color: "text-purple-400",
      borderColor: "border-purple-400/30"
    },
    {
      icon: FileSignature,
      title: "Reserva de Fecha",
      description: "Aseguramos tu día con un contrato y una seña.",
      color: "text-pink-400",
      borderColor: "border-pink-400/30"
    },
    {
      icon: Settings2,
      title: "Instalación Profesional",
      description: "Llegamos 2 horas antes para dejar todo listo y probado.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30"
    },
    {
      icon: Disc,
      title: "¡A Vibrar!",
      description: "Disfrutá de hasta 9 horas de servicio premium y sonido impecable.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: Star,
      title: "Retiro y Feedback",
      description: "Desmontamos al finalizar y valoramos tu opinión.",
      color: "text-green-400",
      borderColor: "border-green-400/30"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Nuestro Proceso Simplificado
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un camino claro y sin complicaciones para que tu evento suene increíble.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-9 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-blue-500/20"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-6"
              >
                {/* Icon and circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-18 h-18 rounded-full bg-gray-900 border-2 border-purple-500/30 flex items-center justify-center neon-glow">
                    <div className={`w-14 h-14 rounded-full bg-black flex items-center justify-center`}>
                      <step.icon size={28} className={step.color} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`pt-2 pl-4 border-l-2 ${step.borderColor} glass-effect rounded-r-xl p-4 w-full`}>
                   <span className={`text-sm font-bold uppercase tracking-wider ${step.color}`}>Paso {index + 1}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-lg text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;