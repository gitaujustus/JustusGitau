// import React from 'react';
// import { FaPalette, FaCode, FaPencilRuler, FaSearch } from 'react-icons/fa';

// const ServicesSection = () => {
//   return (
//     <section className="py-16 bg-[#1F2937]">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">Services I Offer</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Web Design */}
//           <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
//             <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPalette /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Website Design</h3>
//             <p className="text-gray-300">Create visually appealing and user-friendly websites that reflect your brand and engage your audience.</p>
//           </div>

//           {/* Web Development */}
//           <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
//             <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaCode /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Web Development</h3>
//             <p className="text-gray-300">Build robust, scalable web applications using cutting-edge technologies to meet your business needs.</p>
//           </div>

//           {/* Graphic Design */}
//           <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
//             <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPencilRuler /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Graphic Design</h3>
//             <p className="text-gray-300">Design eye-catching posters, flyers, and marketing materials to effectively promote your brand.</p>
//           </div>

//           {/* SEO */}
//           <div className="group p-6 rounded-lg shadow-md transition   shadow-[#00d0ff34]   hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
//             <div className="text-4xl   text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaSearch /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">SEO Optimization</h3>
//             <p className="text-gray-300">Boost your online visibility and rank higher in search results to attract more potential customers.</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



'use client'

import React, { useEffect, useRef } from 'react';
import { FaPalette, FaCode, FaPencilRuler, FaSearch } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serviceRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          duration: 1000,
          distance: '50px',
          reset: true,
        });

        if (titleRef.current) {
          sr.reveal(titleRef.current, {
            origin: 'top',
            delay: 200,
          });
        }

        serviceRefs.forEach((ref, index) => {
          if (ref.current) {
            sr.reveal(ref.current, {
              origin: 'bottom',
              delay: 400 + index * 200,
            });
          }
        });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12 text-yellow-500">Services I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Web Design */}
          <div ref={serviceRefs[0]} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPalette /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Website Design</h3>
            <p className="text-gray-300">Create visually appealing and user-friendly websites that reflect your brand and engage your audience.</p>
          </div>

          {/* Web Development */}
          <div ref={serviceRefs[1]} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaCode /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Web Development</h3>
            <p className="text-gray-300">Build robust, scalable web applications using cutting-edge technologies to meet your business needs.</p>
          </div>

          {/* Graphic Design */}
          <div ref={serviceRefs[2]} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
              <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPencilRuler /></span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Graphic Design</h3>
            <p className="text-gray-300">Design eye-catching posters, flyers, and marketing materials to effectively promote your brand.</p>
          </div>

          {/* SEO */}
          <div ref={serviceRefs[3]} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700 ">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
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
















// 'use client'

// import React, { useRef } from 'react';
// import { FaPalette, FaCode, FaPencilRuler, FaSearch } from 'react-icons/fa';
// import { motion, useInView } from 'framer-motion';

// const ServicesSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={ref} className="py-16 bg-[#1F2937]">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           initial={{ opacity: 0, y: -20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold text-center mb-12 text-yellow-500"
//         >
//           Services I Offer
//         </motion.h2>
        
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
          
//           {/* Web Design */}
//           <motion.div variants={itemVariants} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700">
//             <div className="text-4xl text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPalette /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Website Design</h3>
//             <p className="text-gray-300">Create visually appealing and user-friendly websites that reflect your brand and engage your audience.</p>
//           </motion.div>

//           {/* Web Development */}
//           <motion.div variants={itemVariants} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700">
//             <div className="text-4xl text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaCode /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Web Development</h3>
//             <p className="text-gray-300">Build robust, scalable web applications using cutting-edge technologies to meet your business needs.</p>
//           </motion.div>

//           {/* Graphic Design */}
//           <motion.div variants={itemVariants} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700">
//             <div className="text-4xl text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaPencilRuler /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">Graphic Design</h3>
//             <p className="text-gray-300">Design eye-catching posters, flyers, and marketing materials to effectively promote your brand.</p>
//           </motion.div>

//           {/* SEO */}
//           <motion.div variants={itemVariants} className="group p-6 rounded-lg shadow-md transition shadow-[#00d0ff34] hover:shadow-[#00d0ff90] ease-in-out duration-700">
//             <div className="text-4xl text-blue-500 mb-4 flex justify-center">
//               <span className='group-hover:bg-[#3c4e68] transition ease-in-out duration-700 p-3 rounded-full'><FaSearch /></span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-100">SEO Optimization</h3>
//             <p className="text-gray-300">Boost your online visibility and rank higher in search results to attract more potential customers.</p>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

