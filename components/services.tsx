import React from 'react';
import { FaPalette, FaCode, FaPencilRuler, FaSearch } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">Services I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Web Design */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl text-blue-500 mb-4">
              <FaPalette />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Website Design</h3>
            <p className="text-gray-600">Create visually appealing and user-friendly websites that reflect your brand and engage your audience.</p>
          </div>

          {/* Web Development */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl text-green-500 mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Web Development</h3>
            <p className="text-gray-600">Build robust, scalable web applications using cutting-edge technologies to meet your business needs.</p>
          </div>

          {/* Graphic Design */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl text-purple-500 mb-4">
              <FaPencilRuler />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Graphic Design</h3>
            <p className="text-gray-600">Design eye-catching posters, flyers, and marketing materials to effectively promote your brand.</p>
          </div>

          {/* SEO */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">SEO Optimization</h3>
            <p className="text-gray-600">Boost your online visibility and rank higher in search results to attract more potential customers.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;