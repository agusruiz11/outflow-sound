import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Services from '@/components/Services';
import Process from '@/components/Process';
import ClientSegments from '@/components/ClientSegments';
import Trust from '@/components/Trust';
import ContactForm from '@/components/ContactForm';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Sonido Outflow - Alquiler de Cabinas Pioneer DJ y Sonido Premium en CABA</title>
        <meta name="description" content="Alquiler de equipos Pioneer CDJ-3000 y sonido profesional premium en Buenos Aires. Servicio integral con instalación y retiro incluidos para eventos exclusivos." />
        <meta property="og:title" content="Sonido Outflow - Alquiler de Cabinas Pioneer DJ y Sonido Premium" />
        <meta property="og:description" content="El sonido de los mejores clubs, ahora en tu fiesta privada. Pioneer CDJ-3000 + sistema profesional, instalación y cero preocupaciones." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <ValueProposition />
        <Services />
        {/* <Process /> */}
        <ClientSegments />
        <Trust />
        <ContactForm />
        <AboutUs />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;