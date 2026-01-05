import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../../data/content';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { nav } = siteContent;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-secondary tracking-tighter">
          {nav.logo}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {nav.links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="container flex flex-col py-4 px-4 space-y-4">
            {nav.links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};