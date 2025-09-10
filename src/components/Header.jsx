import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 w-full z-50 glass-effect"
    >
      <nav className="container mx-auto px-4 py-2 sm:py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="/images/logo5.png" 
            alt="Sonido Outflow Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-none"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="hover:text-purple-400 transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-purple-400 transition-colors">Proceso</a>
          <a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/outflowparty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col space-y-6 p-6">
              <a href="#servicios" onClick={closeMenu} className="text-lg hover:text-purple-400 transition-colors">Servicios</a>
              <a href="#proceso" onClick={closeMenu} className="text-lg hover:text-purple-400 transition-colors">Proceso</a>
              <a href="#contacto" onClick={closeMenu} className="text-lg hover:text-purple-400 transition-colors">Contacto</a>
              <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
                <a href="https://instagram.com/outflowparty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;