// import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { AiFillLinkedin } from "react-icons/ai";
// import { FaArrowRight } from "react-icons/fa";
// import { FaSquareUpwork } from "react-icons/fa6";
// import Image from "next/image";


// const Herosection = () => {
//   return (
//     <div className="flex items-center py-4  justify-around flex-wrap bg-[#1F2235]">
//       <div className="">
//          <Image height={3791} width={2843} src={"/photos/Justus latest.png"} className="h-96 md:h-[80vh] w-auto" alt="Justus"/>
        
//         <div className="py-3">
//             <h1 className="text-center font-cedarville">Lets Connect</h1>
//             <div className="flex space-x-5   justify-center">
//                 <a href="https://www.facebook.com/@justoegitau1"><BsFacebook size={26} className="text-white" /></a>
//                 <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
//                 <a href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300" /></a>
//                 <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
//                 <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="" /></a>
//                 <a href="https://github.com/Young-Professor"><BsGithub size={26} className="" /></a>
//                 <a href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share"><FaSquareUpwork size={26} color="#14A800" className="bg-[#14A800]" /></a>
//             </div>
//         </div>
//       </div>
//       <div className=" w-full md:w-1/2 px-4 ">
//         <div className="welcome">
//         <h1 className=" text-white font-poppins font-bold text-3xl md:text-5xl ">GITAU JUSTUS</h1>
//             <ul className="text-lg text-yellow-500">
//                 <li className="flex items-center">
//                 <span className="mr-2">👨‍💻</span> Software Engineer
//                 </li>
//                 <li className="flex items-center">
//                 <span className="mr-2">💻</span> Web Developer/Designer
//                 </li>
//                 <li className="flex items-center">
//                 <span className="mr-2">🎨</span> Graphic Designer
//                 </li>
//             </ul>
//         </div>
//         <div className="md:max-w-md ">
//           <p className="text-white">
//           I&apos;m <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/" className="text-blue-200">Gitau Justus</a>, CEO and Founder of <span className="text-blue-200">J&apos;ASTUTE </span>
//            and a full-stack developer with expertise in software engineering. As a senior developer at the University of Eastern Africa, Baraton, I specialize in leveraging cutting-edge technologies to create dynamic and innovative web applications. <br /> My passion for artificial intelligence and machine learning drives me to explore the frontiers of technology continuously.
//           </p>
//         </div>
//        <div className="flex flex-wrap gap-2">
//        <button className="text-black flex-nowrap font-bold border-4 border-blue-700 py-2 px-4 rounded-md my-4 mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//         <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//           <span className="flex-nowrap">Download&nbsp;Resume</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </a>
//       </button>
//         <a  href="#contacts"  className="text-black px-10   flex-nowrap font-bold py-6 h-8 rounded-md my-4 mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF]  flex items-center p-2 gap-2">
//             Get in touch  <FaArrowRight />
//           </a>
//        </div>
//         <br />
       
//        <div className="mx-5 md:mx-0">
//        <a href="https://visitcount.itsvg.in">
//             <img src="https://visitcount.itsvg.in/api?id=myportifolio&label=Views&color=2&icon=5&pretty=true" alt="views" />
//         </a>
//        </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;

'use client'

import React, { useEffect, useRef } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import Image from "next/image";

const Herosection: React.FC = () => {
  const revealRefs = {
    image: useRef<HTMLDivElement>(null),
    socialIcons: useRef<HTMLDivElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    skills: useRef<HTMLUListElement>(null),
    description: useRef<HTMLDivElement>(null),
    buttons: useRef<HTMLDivElement>(null),
    viewCount: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          duration: 1000,
          reset: true,
        });

        Object.entries(revealRefs).forEach(([key, ref]) => {
          if (ref.current) {
            sr.reveal(ref.current, {
              delay: 200 + Object.keys(revealRefs).indexOf(key) * 200,
              origin: key === 'image' ? 'left' : 'bottom',
              distance: '50px',
            });
          }
        });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <div className="flex items-center py-4 justify-around flex-wrap bg-[#1F2235]">
      <div className="">
        <div ref={revealRefs.image}>
          <Image height={3791} width={2843} src={"/photos/Justus latest.png"} className="h-96 md:h-[80vh] w-auto" alt="Justus"/>
        </div>
        
        <div className="py-3">
          <h1 className="text-center font-cedarville">Lets Connect</h1>
          <div ref={revealRefs.socialIcons} className="flex space-x-5 justify-center">
            <a href="https://www.facebook.com/@justoegitau1"><BsFacebook size={26} className="text-white" /></a>
            <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
            <a href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300" /></a>
            <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
            <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="" /></a>
            <a href="https://github.com/Young-Professor"><BsGithub size={26} className="" /></a>
            <a href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share"><FaSquareUpwork size={26} color="#14A800"  /></a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="welcome">
          <h1 ref={revealRefs.title} className="text-white font-poppins font-bold text-3xl md:text-5xl">GITAU JUSTUS</h1>
          <ul ref={revealRefs.skills} className="text-lg text-yellow-500">
            <li className="flex items-center">
              <span className="mr-2">👨‍💻</span> Software Engineer
            </li>
            <li className="flex items-center">
              <span className="mr-2">💻</span> Web Developer/Designer
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span> Graphic Designer
            </li>
          </ul>
        </div>
        <div ref={revealRefs.description} className="md:max-w-md">
          <p className="text-white">
            I&apos;m <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/" className="text-blue-200">Gitau Justus</a>, CEO and Founder of <span className="text-blue-200">J&apos;ASTUTE </span>
            and a full-stack developer with expertise in software engineering. As a senior developer at the University of Eastern Africa, Baraton, I specialize in leveraging cutting-edge technologies to create dynamic and innovative web applications. <br /> My passion for artificial intelligence and machine learning drives me to explore the frontiers of technology continuously.
          </p>
        </div>
        <div ref={revealRefs.buttons} className="flex flex-wrap gap-2">
          <button className="text-black flex-nowrap font-bold border-4 border-blue-700 py-2 px-4 rounded-md my-4 mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span className="flex-nowrap">Download&nbsp;Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </button>
          <a href="#contacts" className="text-black px-10 flex-nowrap font-bold py-6 h-8 rounded-md my-4 mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center p-2 gap-2">
            Get in touch <FaArrowRight />
          </a>
        </div>
        <br />
        
        <div ref={revealRefs.viewCount} className="mx-5 md:mx-0">
          <a href="https://visitcount.itsvg.in">
            <img src="https://visitcount.itsvg.in/api?id=myportifolio&label=Views&color=2&icon=5&pretty=true" alt="views" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;