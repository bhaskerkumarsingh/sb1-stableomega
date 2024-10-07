import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Stableomega Technology</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            STABLEOMEGA TECHNOLOGY Pvt. Ltd. (STOPL) is a complete technology solution provider focused on
            providing safe & secure complete hardware solutions to our clients. Founded by a group of technical
            experts with years of combined experience in the industry, we are committed to empowering the AI revolution.
          </p>
          <p className="text-lg mb-6">
            Our team excels in emerging technologies like Artificial Intelligence (AI), Image Processing, and
            Internet of Things (IoT). We specialize in RISC-V based SoC design to provide world-class solutions.
          </p>
          <p className="text-lg">
            Our aim is to improve AI capabilities for edge devices by developing AI chips & SoCs specific for edge
            computation with a fraction of power and enhanced computational capabilities. We design our hardware
            with the help of AI, focusing on custom solutions for industrial equipment with mill-grade technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;