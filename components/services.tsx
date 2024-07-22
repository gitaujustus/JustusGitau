import React from 'react';
import { FaPalette, FaCode, FaPencilRuler, FaSearch } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">Services I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Web Design */}
          <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPalette /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Website Design</h3>
            <p className="text-gray-300">Create visually appealing and user-friendly websites that reflect your brand and engage your audience.</p>
          </div>

          {/* Web Development */}
          <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaCode /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Web Development</h3>
            <p className="text-gray-300">Build robust, scalable web applications using cutting-edge technologies to meet your business needs.</p>
          </div>

          {/* Graphic Design */}
          <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPencilRuler /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Graphic Design</h3>
            <p className="text-gray-300">Design eye-catching posters, flyers, and marketing materials to effectively promote your brand.</p>
          </div>

          {/* SEO */}
          <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaSearch /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">SEO Optimization</h3>
            <p className="text-gray-300">Boost your online visibility and rank higher in search results to attract more potential customers.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;