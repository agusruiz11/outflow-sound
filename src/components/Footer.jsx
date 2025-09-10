import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="./public/images/logo5.png" 
              alt="Sonido Outflow Logo" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Alquiler de cabinas Pioneer DJ y sonido profesional premium en CABA y AMBA. 
              Calidad técnica y confiabilidad para eventos exclusivos.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-semibold mb-4 block">Links Rápidos</span>
            <div className="space-y-2">
              <a href="#servicios" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Servicios
              </a>
              <a href="#proceso" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Proceso
              </a>
              <a href="#contacto" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Contacto
              </a>
              <span className="block text-gray-400 text-sm cursor-pointer hover:text-purple-400 transition-colors">
                Política de Cancelación
              </span>
              <span className="block text-gray-400 text-sm cursor-pointer hover:text-purple-400 transition-colors">
                Contrato
              </span>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-semibold mb-4 block">Redes Sociales</span>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/outflowparty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={18} />
                <span className="text-sm">@outflowparty</span>
              </a>
              <a 
                href="https://instagram.com/sonidooutflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={18} />
                <span className="text-sm">@sonidooutflow</span>
              </a>
              <a 
                href="https://wa.me/5491123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a 
                href="mailto:info@sonidooutflow.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> Sonido Outflow no es responsable por fallas eléctricas del venue. 
            El cliente debe garantizar una instalación eléctrica segura y adecuada para el funcionamiento del equipo.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Sonido Outflow. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;