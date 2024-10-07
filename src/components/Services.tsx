import React from 'react';
import { Brain, Building, Cog, Database } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Brain />, name: 'LLM Fine-tuning', description: 'Customized language models for your specific needs.' },
    { icon: <Building />, name: 'Building Management Systems', description: 'Intelligent solutions for efficient facility management.' },
    { icon: <Cog />, name: 'Machine Condition Monitoring', description: 'Real-time monitoring and predictive maintenance.' },
    { icon: <Database />, name: 'Digital Twin Technology', description: 'Virtual replicas for enhanced decision-making and optimization.' },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;