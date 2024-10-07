import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Stableomega Technology</h3>
            <p>Empowering the AI revolution with cutting-edge solutions.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#products" className="hover:text-gray-300">Products</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p>Follow us on social media for the latest updates and innovations.</p>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Stableomega Technology Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;