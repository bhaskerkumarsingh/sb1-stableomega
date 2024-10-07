import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center mb-4">
                <Mail className="mr-2 text-indigo-600" />
                <span>info@stableomega.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2 text-indigo-600" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-indigo-600" />
                <span>123 Tech Street, Innovation City, 12345</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border rounded" />
                <textarea placeholder="Your Message" rows={4} className="w-full mb-4 p-2 border rounded"></textarea>
                <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;