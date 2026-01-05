import { siteContent } from '../../data/content';

export const Portfolio = () => {
  const { portfolio } = siteContent; // Tendremos que agregar esto al content.ts luego

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl italic mb-4">Portafolio Selecto</h2>
          <div className="w-12 h-0.5 bg-black mx-auto"></div>
        </div>

        {/* Grid estilo Masonry simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item: any, index: number) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl text-center font-serif italic">{item.title}</h3>
              <p className="text-center text-xs tracking-widest uppercase text-gray-500 mt-2">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};