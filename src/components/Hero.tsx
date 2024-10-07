import React from 'react';
import { Cpu, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering AI Revolution</h1>
        <p className="text-xl mb-8">Stableomega Technology: Your Complete Technology Solution Provider</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <Cpu className="mr-2" /> <span>AI & IoT Solutions</span>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2" /> <span>Access Control Systems</span>
          </div>
          <div className="flex items-center">
            <Zap className="mr-2" /> <span>Edge AI Computation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;