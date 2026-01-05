import { Briefcase, Scissors, Star, Clock } from 'lucide-react'; // Importa iconos según necesites

export const siteContent = {
  seo: {
    title: "Gablu | Artista Musical",
    description: "Sitio oficial de Gablu. Música, arte visual y fechas en vivo desde Chile.",
  },
  nav: {
    logo: "GABLU", // En mayúsculas se ve más imponente como marca de artista
    links: [
      { name: "Inicio", href: "#hero" },
      { name: "Música", href: "#portfolio" }, // Cambiamos "Portafolio" por "Música" o "Lanzamientos"
      { name: "Bio", href: "#about" },
      { name: "Booking", href: "#contact" },
    ],
  },
  hero: {
    title: "GABLU",
    subtitle: "Sonido • Atmósfera • Frecuencia", // Palabras más abstractas y artísticas
    ctaPrimary: "Escuchar Último Single", // Opcional, si usas botones en el hero
  },
  
  // Aquí mostramos Singles, Portadas de álbumes o Fotos de shows
  portfolio: [
    { 
      title: "Ecos del Valle", 
      category: "Último Lanzamiento", 
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80" // Humo/Atmósfera oscura
    },
    { 
      title: "Sesión en Vivo", 
      category: "Live Session", 
      image: "Gablu.png" // Cantante con micrófono y luces
    },
    { 
      title: "Nocturno", 
      category: "Videoclip Oficial", 
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" // Luces de neón/Ciudad
    },
    { 
      title: "Frecuencias", 
      category: "EP 2023", 
      image: "Gablu_3.png" // Abstracto artístico
    },
    { 
      title: "Lollapalooza CL", 
      category: "Galería Tour", 
      image: "Gablu_2.png" // Multitud/Concierto
    },
    { 
      title: "Colaboraciones", 
      category: "Feat. Artistas", 
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80" // Estudio de grabación
    },
  ],
  
  // Texto para la sección "Bio" (puedes ajustarlo en el componente About)
  about: {
    title: "Sobre Gablu",
    text: "Músico y compositor chileno explorando la intersección entre melodías orgánicas y texturas electrónicas. Mi obra busca crear atmósferas inmersivas que transporten al oyente, fusionando influencias del indie alternativo con la escena urbana de Santiago.",
  },

  contact: {
    title: "Contacto & Booking",
    subtitle: "Disponible para festivales, colaboraciones y prensa.",
    email: "contacto@gablumusic.com", // Pon el correo real
    phone: "+56 9 1234 5678", // Pon el número real de management
    address: "Santiago, Chile", // Para músicos basta con la ciudad
    formSpreeEndpoint: "https://formspree.io/f/TU_ID", // Tu ID de Formspree
  },
  
  footer: {
    copyright: "© 2024 Gablu Music. Todos los derechos reservados.",
  }
};