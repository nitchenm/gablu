import React, { useState } from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';

export const ContactForm = () => {
  const { contact } = siteContent;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Simple fetch handler para no depender de librerías extra
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(contact.formSpreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 bg-secondary rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="flex-1 p-10 lg:p-16 bg-secondary text-white">
            <h2 className="text-3xl font-bold mb-6">{contact.title}</h2>
            <p className="text-gray-300 mb-8 text-lg">{contact.subtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="font-semibold opacity-50">Email:</div>
                <div>{contact.email}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="font-semibold opacity-50">Teléfono:</div>
                <div>{contact.phone}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="font-semibold opacity-50">Ubicación:</div>
                <div>{contact.address}</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-10 lg:p-16 bg-white">
            {status === 'success' ? (
              <div className="text-center h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-green-600 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-600">Te contactaremos a la brevedad.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="mt-4 text-primary underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input required type="text" name="name" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" name="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea required name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Quiero agendar una cita..." />
                </div>
                
                <Button fullWidth type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-2">Hubo un error al enviar. Intenta nuevamente.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};