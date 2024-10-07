import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Stableomega</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <a href="#home" className="py-2 hover:text-gray-300">Home</a>
            <a href="#products" className="py-2 hover:text-gray-300">Products</a>
            <a href="#services" className="py-2 hover:text-gray-300">Services</a>
            <a href="#about" className="py-2 hover:text-gray-300">About</a>
            <a href="#contact" className="py-2 hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;