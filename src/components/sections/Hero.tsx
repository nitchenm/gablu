import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. VIDEO DE FONDO */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          // TIP DE DISEÑO: Si el video de Gablu tiene colores neón o luces interesantes, 
          // borra 'grayscale' de abajo para que se vea a color.
          className="w-full h-full object-cover grayscale opacity-50" 
        >
          {/* IMPORTANTE: El archivo "Godot.mp4" debe estar en la carpeta /public */}
          <source src="/Gablu_video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay degradado: más oscuro abajo para que el texto se lea mejor */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        
        {/* Título Artista */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl mb-2 italic tracking-tighter font-serif"
        >
          {hero.title}
        </motion.h1>
        
        {/* Subtítulo / Slogan */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm md:text-lg tracking-[0.4em] uppercase font-light text-gray-200 mb-10"
        >
          {hero.subtitle}
        </motion.p>

        {/* 3. BOTÓN (CTA) - Lo que faltaba */}
        {/* Solo se muestra si definiste ctaPrimary en content.ts */}
        {hero.ctaPrimary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button 
              // Usamos clases manuales aquí para un estilo "transparente/borde blanco" muy elegante
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-8 py-6 text-xs tracking-widest uppercase"
            >
              {hero.ctaPrimary} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
          </motion.div>
        )}
      </div>
    

      {/* 4. INDICADOR DE SCROLL (Adorno visual) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};