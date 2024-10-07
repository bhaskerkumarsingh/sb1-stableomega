import React from 'react';
import { Camera, Lock, Cpu, Wifi } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    { icon: <Camera />, name: 'IP-based Camera Systems', description: 'Advanced surveillance solutions for perimeter detection.' },
    { icon: <Lock />, name: 'Access Control Systems', description: 'Secure and customizable access management for your premises.' },
    { icon: <Cpu />, name: 'AI-based Software', description: 'Cutting-edge AI applications for various industries.' },
    { icon: <Wifi />, name: 'IoT Sensor Modules', description: 'Smart sensors for pressure, vibration, and smoke detection.' },
  ];

  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;