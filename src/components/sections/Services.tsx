import { siteContent } from '../../data/content';

interface Service {
  icon: React.ElementType;
  title: string;
  price: string;
  description: string;
}

export const Services = () => {
  const { services } = siteContent;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {services.title}
          </h2>
          <p className="text-gray-600">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service: Service, index: number) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                <p className="text-primary font-bold text-lg mb-3">{service.price}</p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};