
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { toast } from '@/components/ui/use-toast';
    import { MessageCircle, Mail, Instagram, Send, Loader2 } from 'lucide-react';
    import { Label } from '@/components/ui/label';
    import { supabase } from '@/lib/customSupabaseClient';
    
    const ContactForm = () => {
      const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        tipoEvento: '',
        asistentes: '',
        fecha: '',
        lugar: '',
        telefono: '',
        email: ''
      });
      const [loading, setLoading] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('Input changed:', name, value); // Debug log
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData); // Debug log
        setLoading(true);
    
        const requiredFields = ['nombre', 'apellido', 'tipoEvento', 'asistentes', 'fecha', 'lugar', 'telefono', 'email'];
        for (const key of requiredFields) {
          if (!formData[key]) {
            toast({
              title: "✋ Formulario Incompleto",
              description: "Por favor, completá todos los campos.",
              variant: "destructive",
            });
            setLoading(false);
            return;
          }
        }
    
        const { error } = await supabase
          .from('contact_submissions')
          .insert([{
            nombre: formData.nombre,
            apellido: formData.apellido,
            tipo_evento: formData.tipoEvento,
            asistentes: parseInt(formData.asistentes, 10),
            fecha_evento: formData.fecha,
            lugar: formData.lugar,
            telefono: formData.telefono,
            email: formData.email
          }]);
    
        setLoading(false);
    
        if (error) {
          console.error('Supabase error:', error);
          toast({
            title: "❌ Error al enviar",
            description: "Hubo un problema al enviar tu cotización. Por favor, intentá de nuevo.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "✅ ¡Cotización enviada!",
            description: "Recibimos tu solicitud. Nos pondremos en contacto a la brevedad.",
          });
          setFormData({
            nombre: '',
            apellido: '',
            tipoEvento: '',
            asistentes: '',
            fecha: '',
            lugar: '',
            telefono: '',
            email: ''
          });
        }
      };
    
      return (
        <section id="contacto" className="py-20 relative overflow-hidden bg-black">
           <div className="absolute inset-0 bg-grid-purple opacity-30"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 neon-text">
                ¿Listo para hacer vibrar tu evento?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Completá el formulario o contactanos directamente. Hablemos de tu idea.
              </p>
            </motion.div>
    
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <input 
                        id="nombre" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleInputChange} 
                        placeholder="Tu nombre" 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <input 
                        id="apellido" 
                        name="apellido" 
                        value={formData.apellido} 
                        onChange={handleInputChange} 
                        placeholder="Tu apellido" 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tipoEvento">Tipo de Evento</Label>
                    <select id="tipoEvento" name="tipoEvento" value={formData.tipoEvento} onChange={handleInputChange} className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
                      <option value="">Seleccionar tipo de evento</option>
                      <option value="boda">Casamiento</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="fiesta-privada">Fiesta Privada / DJ Set</option>
                      <option value="bar-salon">Bar / Salón</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
    
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="asistentes">Nº de Asistentes (aprox.)</Label>
                      <input 
                        id="asistentes" 
                        name="asistentes" 
                        type="number" 
                        value={formData.asistentes} 
                        onChange={handleInputChange} 
                        placeholder="Ej: 100" 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha del Evento</Label>
                      <input 
                        id="fecha" 
                        name="fecha" 
                        type="date" 
                        value={formData.fecha} 
                        onChange={handleInputChange} 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
    
                  <div className="space-y-2">
                    <Label htmlFor="lugar">Barrio / Localidad</Label>
                    <input 
                      id="lugar" 
                      name="lugar" 
                      value={formData.lugar} 
                      onChange={handleInputChange} 
                      placeholder="Dirección o nombre del lugar" 
                      required
                      className="flex h-12 w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300"
                    />
                  </div>
    
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
                      <input 
                        id="telefono" 
                        name="telefono" 
                        type="tel" 
                        value={formData.telefono} 
                        onChange={handleInputChange} 
                        placeholder="+54 9 11..." 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="tu@email.com" 
                        required
                        className="w-full h-12 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
    
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Cotizar mi Evento
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
    
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                <ContactInfoCard
                  icon={MessageCircle}
                  title="WhatsApp Directo"
                  content="+54 9 11 2345-6789"
                  link="https://wa.me/5491123456789"
                  color="from-green-500 to-cyan-500"
                  cta="Chateá con nosotros"
                />
                <ContactInfoCard
                  icon={Instagram}
                  title="Seguinos en Instagram"
                  content="@sonidooutflow"
                  link="https://instagram.com/sonidooutflow"
                  color="from-purple-500 to-pink-500"
                  cta="Ver instalaciones"
                />
                <ContactInfoCard
                  icon={Mail}
                  title="Email"
                  content="info@sonidooutflow.com"
                  link="mailto:info@sonidooutflow.com"
                  color="from-blue-500 to-indigo-500"
                  cta="Escribinos"
                />
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    
    
    const ContactInfoCard = ({ icon: Icon, title, content, link, color, cta }) => (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block p-1 rounded-2xl bg-gradient-to-br hover:scale-105 transition-transform duration-300 glass-effect">
        <div className={`relative bg-gray-900/80 rounded-xl p-6 flex items-center space-x-5 overflow-hidden`}>
           <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-tl ${color} opacity-20 blur-2xl rounded-full`}></div>
          <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon size={32} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">{title}</p>
            <span className="text-gray-300 text-md">{content}</span>
            <span className="block text-sm text-purple-400 mt-1">{cta} →</span>
          </div>
        </div>
      </a>
    );
    
    export default ContactForm;
  