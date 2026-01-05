import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';

import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/layout/Footer';
import { siteContent } from './data/content';
import { Portfolio } from './components/sections/Portfolio';

function App() {
  useEffect(() => {
    document.title = siteContent.seo.title;
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-gray-200">
      
      {/* Navbar con fondo blanco para contraste limpio */}
      <Navbar /> 
      
      <main className="flex-grow">
        <Hero />
        
        {/* Sección BIO simple (Inline para ahorrar archivos, o crea un componente About.tsx) */}
        <section id="about" className="py-24 px-6 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl italic font-serif mb-8">Sobre el Proyecto</h3>
          <p className="text-gray-600 leading-loose text-lg font-light">
            "La música es el lenguaje de lo invisible. Mi obra explora la delgada línea 
             entre el sonido ambiente y la melodía estructurada, creando paisajes sonoros que 
             invitan a la introspección. Cada composición es una atmósfera diseñada 
             para desconectar del ruido y conectar con la esencia."
          </p>
        </section>

        <Portfolio />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App
