import { siteContent } from '../../data/content';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Asegúrate de tener estos iconos

export const Footer = () => {
  const { contact, nav, footer } = siteContent;

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Descripción Breve */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 tracking-tighter">{nav.logo}</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Elevando los estándares de servicio. Tu satisfacción es nuestra prioridad número uno en cada visita.
            </p>
            <div className="flex space-x-4">
              {/* Iconos sociales dummy - Puedes agregarlos a content.ts si quieres */}
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Navegación</h3>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li>{contact.address}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{footer.copyright}</p>
          <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};