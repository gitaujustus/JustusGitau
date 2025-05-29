// import React from 'react'
// import Image from 'next/image'
// import { MdEmail, MdPhone, MdSchool, MdLanguage } from 'react-icons/md';
// import { FaBriefcase } from 'react-icons/fa';

// function About() {
//   return (
//     <main>
//            <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md  mx-auto">
//   <h2 className="text-xl text-gray-600 mb-6">Software Engineer | Entrepreneur | Problem Solver</h2>
  
//   <p className="text-gray-700 mb-4">
//     Based in Nairobi, Kenya, I&apos;m a passionate software engineer dedicated to creating innovative solutions through technology. As the founder of JASTUTE, a tech and graphic design company, I specialize in developing user-friendly web interfaces with responsive design and intuitive graphics that can help reach a winder audience.
//   </p>
  
//   <p className="text-gray-700 mb-4">
//     Currently, I oversee Centri Closet, a thriving e-commerce platform serving Baraton University. My goal is to leverage technology to make a positive impact on society by addressing real-world challenges.
//   </p>
  
//   <p className="text-gray-700 mb-6">
//     Outside of work, I enjoy reading and exploring new places.
//   </p>
//   <div className="flex flex-col items-center lg:flex-row gap-8">
//   <div className="w-36 h-36 flex-shrink-0">
//     <Image src={"/photos/justus.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300" />
//   </div>
  
//   <div className="flex-grow">
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//       <div className="flex items-center">
//         <MdEmail size={26} className="text-gray-600 mr-2 text-xl" />
//         <div>
//           <p className="font-semibold text-gray-600">Email:</p>
//           <p className="text-gray-700">jgathiru02@gmail.com</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <MdPhone size={26} className="text-gray-600 mr-2 text-xl" />
//         <div>
//           <p className="font-semibold text-gray-600">Phone:</p>
//           <p className="text-gray-700">+254 729 144 533</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <MdSchool size={26} className="text-gray-600 mr-2 text-xl" />
//         <div>
//           <p className="font-semibold text-gray-600">Education:</p>
//           <p className="text-gray-700">B.S. in Software Engineering</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <MdLanguage size={26} className="text-gray-600 mr-2 text-xl" />
//         <div>
//           <p className="font-semibold text-gray-600">Languages:</p>
//           <p className="text-gray-700">English, Swahili</p>
//         </div>
//       </div>
//     </div>
    
//     <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
//       <button className="text-black font-bold border-4 border-blue-700 py-2 px-4 rounded-md bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//         <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//           <span>Download Resume</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </a>
//       </button>
//       <p className='text-blue-900 underline font-poppins font-semibold'><a target='_blank' href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share">Upwork</a></p>
//       <div className="flex items-center gap-2 text-green-600 font-semibold">
//         <FaBriefcase size={20} />
//         <span>Available for Freelance</span>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
//     </main>
//   )
// }

// export default About









// 'use client'
// import React, { useRef } from 'react'
// import Image from 'next/image'
// import { MdEmail, MdPhone, MdSchool, MdLanguage } from 'react-icons/md';
// import { FaBriefcase } from 'react-icons/fa';
// import { motion, useInView } from 'framer-motion';

// function About() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <main>
//       <motion.div 
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md mx-auto"
//       >
//         <motion.h2 
//           variants={childVariants}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-xl text-gray-600 mb-6"
//         >
//           Software Engineer | Entrepreneur | Problem Solver
//         </motion.h2>
        
//         <motion.p 
//           variants={childVariants}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-gray-700 mb-4"
//         >
//           Based in Nairobi, Kenya, I&apos;m a passionate software engineer dedicated to creating innovative solutions through technology. As the founder of JASTUTE, a tech and graphic design company, I specialize in developing user-friendly web interfaces with responsive design and intuitive graphics that can help reach a winder audience.
//         </motion.p>
        
//         <motion.p 
//           variants={childVariants}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="text-gray-700 mb-4"
//         >
//           Currently, I oversee Centri Closet, a thriving e-commerce platform serving Baraton University. My goal is to leverage technology to make a positive impact on society by addressing real-world challenges.
//         </motion.p>
        
//         <motion.p 
//           variants={childVariants}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-gray-700 mb-6"
//         >
//           Outside of work, I enjoy reading and exploring new places.
//         </motion.p>

//         <motion.div 
//           variants={childVariants}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="flex flex-col items-center lg:flex-row gap-8"
//         >
//           <div className="w-36 h-36 flex-shrink-0">
//             <Image src={"/photos/justus.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300" />
//           </div>
          
//           <div className="flex-grow">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//               <div className="flex items-center">
//                 <MdEmail size={26} className="text-gray-600 mr-2 text-xl" />
//                 <div>
//                   <p className="font-semibold text-gray-600">Email:</p>
//                   <p className="text-gray-700">jgathiru02@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MdPhone size={26} className="text-gray-600 mr-2 text-xl" />
//                 <div>
//                   <p className="font-semibold text-gray-600">Phone:</p>
//                   <p className="text-gray-700">+254 729 144 533</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MdSchool size={26} className="text-gray-600 mr-2 text-xl" />
//                 <div>
//                   <p className="font-semibold text-gray-600">Education:</p>
//                   <p className="text-gray-700">B.S. in Software Engineering</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MdLanguage size={26} className="text-gray-600 mr-2 text-xl" />
//                 <div>
//                   <p className="font-semibold text-gray-600">Languages:</p>
//                   <p className="text-gray-700">English, Swahili</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
//               <button className="text-black font-bold border-4 border-blue-700 py-2 px-4 rounded-md bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                 <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                   <span>Download Resume</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </button>
//               <p className='text-blue-900 underline font-poppins font-semibold'>
//                 <a target='_blank' href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share">Upwork</a>
//               </p>
//               <div className="flex items-center gap-2 text-green-600 font-semibold">
//                 <FaBriefcase size={20} />
//                 <span>Available for Freelance</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </main>
//   )
// }

// export default About





// 'use client'

// import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { MdEmail, MdPhone, MdSchool, MdLanguage } from 'react-icons/md';
// import { FaBriefcase } from 'react-icons/fa';
// import ScrollReveal from 'scrollreveal';

// function About() {
//   const revealRefs = {
//     header: useRef<HTMLDivElement>(null),
//     image: useRef<HTMLDivElement>(null),
//     info: useRef<HTMLDivElement>(null),
//     buttons: useRef<HTMLDivElement>(null),
//   };

//   useEffect(() => {
//     const sr = ScrollReveal({
//       distance: '50px',
//       duration: 1000,
//       reset: true,
//     });

//     if (revealRefs.header.current) {
//       sr.reveal(revealRefs.header.current, {
//         delay: 200,
//         origin: 'top',
//       });
//     }

//     if (revealRefs.image.current) {
//       sr.reveal(revealRefs.image.current, {
//         delay: 400,
//         scale: 0.85,
//       });
//     }

//     if (revealRefs.info.current) {
//       sr.reveal(revealRefs.info.current, {
//         delay: 600,
//         origin: 'right',
//       });
//     }

//     if (revealRefs.buttons.current) {
//       sr.reveal(revealRefs.buttons.current, {
//         delay: 800,
//         origin: 'bottom',
//       });
//     }
//   }, []);

  // return (
  //   <main>
  //     <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md mx-auto">
  //       <div ref={revealRefs.header}>
  //         <h2 className="text-xl text-gray-600 mb-6">Software Engineer | Entrepreneur | Problem Solver</h2>
          
  //         <p className="text-gray-700 mb-4">
  //           Based in Nairobi, Kenya, I&apos;m a passionate software engineer dedicated to creating innovative solutions through technology. As the founder of JASTUTE, a tech and graphic design company, I specialize in developing user-friendly web interfaces with responsive design and intuitive graphics that can help reach a winder audience.
  //         </p>
          
  //         <p className="text-gray-700 mb-4">
  //           Currently, I oversee Centri Closet, a thriving e-commerce platform serving Baraton University. My goal is to leverage technology to make a positive impact on society by addressing real-world challenges.
  //         </p>
          
  //         <p className="text-gray-700 mb-6">
  //           Outside of work, I enjoy reading and exploring new places.
  //         </p>
  //       </div>

  //       <div className="flex flex-col items-center lg:flex-row gap-8">
  //         <div ref={revealRefs.image} className="w-36 h-36 flex-shrink-0">
  //           <Image src={"/photos/justus.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300" />
  //         </div>
          
  //         <div ref={revealRefs.info} className="flex-grow">
  //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
  //             <div className="flex items-center">
  //               <MdEmail size={26} className="text-gray-600 mr-2 text-xl" />
  //               <div>
  //                 <p className="font-semibold text-gray-600">Email:</p>
  //                 <p className="text-gray-700">jgathiru02@gmail.com</p>
  //               </div>
  //             </div>
  //             <div className="flex items-center">
  //               <MdPhone size={26} className="text-gray-600 mr-2 text-xl" />
  //               <div>
  //                 <p className="font-semibold text-gray-600">Phone:</p>
  //                 <p className="text-gray-700">+254 729 144 533</p>
  //               </div>
  //             </div>
  //             <div className="flex items-center">
  //               <MdSchool size={26} className="text-gray-600 mr-2 text-xl" />
  //               <div>
  //                 <p className="font-semibold text-gray-600">Education:</p>
  //                 <p className="text-gray-700">B.S. in Software Engineering</p>
  //               </div>
  //             </div>
  //             <div className="flex items-center">
  //               <MdLanguage size={26} className="text-gray-600 mr-2 text-xl" />
  //               <div>
  //                 <p className="font-semibold text-gray-600">Languages:</p>
  //                 <p className="text-gray-700">English, Swahili</p>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div ref={revealRefs.buttons} className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
  //             <button className="text-black font-bold border-4 border-blue-700 py-2 px-4 rounded-md bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  //               <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
  //                 <span>Download Resume</span>
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  //                   <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  //                 </svg>
  //               </a>
  //             </button>
  //             <p className='text-blue-900 underline font-poppins font-semibold'><a target='_blank' href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share">Upwork</a></p>
  //             <div className="flex items-center gap-2 text-green-600 font-semibold">
  //               <FaBriefcase size={20} />
  //               <span>Available for Freelance</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // )
// }

// export default About

'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MdEmail, MdPhone, MdSchool, MdLanguage } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

function About() {
  const revealRefs = {
    header: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    info: useRef<HTMLDivElement>(null),
    buttons: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1000,
          reset: false,
          // reset: true,
        });

        if (revealRefs.header.current) {
          sr.reveal(revealRefs.header.current, {
            delay: 200,
            origin: 'top',
          });
        }

        if (revealRefs.image.current) {
          sr.reveal(revealRefs.image.current, {
            delay: 400,
            scale: 0.85,
          });
        }

        if (revealRefs.info.current) {
          sr.reveal(revealRefs.info.current, {
            delay: 600,
            origin: 'right',
          });
        }

        if (revealRefs.buttons.current) {
          sr.reveal(revealRefs.buttons.current, {
            delay: 800,
            origin: 'bottom',
          });
        }
      }
    };

    initScrollReveal();
  }, []);

  
  return (
    <main>
      <div className="bg-gray-100 px-[18px] md:px-[55px] lg:px-[64px] xl:px-[80px] 2xl:px-[130px] py-[40px] md:py-[30px] xl:py-[50px] rounded-lg shadow-md mx-auto ">
        <div ref={revealRefs.header}>
          <h2 className="text-[17px] lg:text-xl text-gray-600 mb-6 font-semibold uppercase">Software Engineer | Entrepreneur | Problem Solver</h2>
          
          <div className='flex flex-col gap-4 text-gray-700 mb-6 text-[15px] sm:text-base lg:text-lg'>
              <p >
              Based in Nairobi, Kenya, I&apos;m a passionate and certified software engineer from <a href="https://ueab.ac.ke/" className='text-blue-700 underline'>University of Eastern Africa, Baraton</a> dedicated to creating innovative solutions through technology. As the founder of JASTUTE, a tech and graphic design company, I specialize in developing user-friendly web interfaces with responsive design and intuitive graphics that can help reach a winder audience.
            </p>
            
            <p>
              Currently, I oversee Centri Closet, a thriving e-commerce platform serving Baraton University. My goal is to leverage technology to make a positive impact on society by addressing real-world challenges.
            </p>
            
            <p >
              Outside of work, I enjoy reading and exploring new places.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-8">
          <div ref={revealRefs.image} className="w-36 h-36 flex-shrink-0">
            <Image src={"/photos/justus.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300" />
          </div>
          
          <div ref={revealRefs.info} className="flex-grow">
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-[12px] sm:text-sm">
              <div className="flex items-center">
               <span> <MdEmail size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">Email:</p>
                  <p className="text-gray-700">jgathiru02@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdPhone size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">Phone:</p>
                  <p className="text-gray-700">+254 729 144 533</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdSchool size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">Education:</p>
                  <p className="text-gray-700">B.S. in Software Engineering</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdLanguage size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">Languages:</p>
                  <p className="text-gray-700">English, Swahili</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><FaWhatsapp size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">WhatsApp:</p>
                  <p className="text-gray-700">+254 729 144 533</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><FaBriefcase size={26} className="text-gray-600 mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold text-gray-600">Upwork:</p>
                  <p className="text-gray-700">
                    <span> <a href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share">Gitau Justus</a></span>
                  </p>
                </div>
              </div>
            </div>
            
            <div ref={revealRefs.buttons} className="mt-6 flex  space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="
               text-black    text-[13px] md:text-base 2xl:text-lg py-2 px-3 md:px-5 rounded-md   md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2  hover:from-[#EEF3FF] hover:to-[#2A97A5]   transition-all duration-500 ease-in-out border border-[#1F2235]/70">
                <a href="/photos/Gitau_Justus-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>Download Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
