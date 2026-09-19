'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MdEmail, MdPhone, MdSchool, MdLanguage, MdVerified } from 'react-icons/md';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const certifications = [
  {
    title: "CCNA 1: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1Z6R-FGLZDJ8Hq0qHtEGeMTTVjdhT5lcE/view?usp=drive_link",
  },
  {
    title: "CCNA 2: Switching, Routing & Wireless",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/12XLXbn-W2vM4HSx_Ww8_GLN6yFPkUPNj/view?usp=drive_link",
  },
  {
    title: "CCNA 3: Enterprise Networking & Automation",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1vEBHh0E4nRkI2Clc5Ya1d9uG2Ll3AH2l/view?usp=drive_link",
  },
  {
    title: "Digital Awareness (2026)",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1KZJL6-x8CNpcLmeXyxTE9flChDg7u3ak/view?usp=drive_link",
  },
  // {
  //   title: "Python Essentials (2026)",
  //   issuer: "Cisco Networking Academy",
  //   link: "https://drive.google.com/file/d/13bOxLpB29zHqEjVHHuDcPCqveE8okYl9/view?usp=drive_link",
  // },
  {
    title: "JavaScript Essentials (2026)",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1z3XuxF2PvqQutpYyYtrqAueqBBAEAvTv/view?usp=drive_link",
  },
  {
    title: "Introduction to SEO Fundamentals (2024)",
    issuer: "Simplilearn Skill Up",
    link: "https://drive.google.com/file/d/1VQMb3jxzSghAbjS2Y8V_dSbi6_iD_pGO/view?usp=drive_link",
  },
];

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
            origin: 'bottom',
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
      <div className="bg-[#fcfaf4] dark:bg-[#24273D] px-[18px] md:px-[55px] lg:px-[64px] xl:px-[80px] 2xl:px-[130px] py-[40px] md:py-[30px] xl:py-[50px] rounded-lg shadow-md mx-auto ">
        <div ref={revealRefs.header}>
          <h2 className="text-[17px] lg:text-xl text-gray-600 dark:text-gray-300 mb-6 font-semibold uppercase">Software Engineer & ICT Professional</h2>
          
          <div className='flex flex-col gap-4 text-gray-700 dark:text-gray-200 mb-6 text-[15px] sm:text-base lg:text-lg'>
            <p>
              Based in Nairobi, Kenya, I&apos;m a certified software engineer (B.S., <a href="https://ueab.ac.ke/" className='text-blue-700 dark:text-blue-500 underline'>University of Eastern Africa, Baraton</a>) currently serving as an ICT Officer at the Communications Authority of Kenya, where I build automation for administrative workflows and contribute to process improvements adopted across the department. I&apos;m also CCNA certified. Outside of that role, I oversee JASTUTE, a tech and graphic design company delivering client projects across web development, automation, and brand design. I care about building things that reduce friction for the people using them — whether that&apos;s a customer-facing website or an internal process.
            </p>
            <p>
              Outside of work, I enjoy reading and exploring new places.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-8">
          <div ref={revealRefs.image} className="w-36 h-36 flex-shrink-0">
            <Image src={"/photos/Graduate.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300 object-top" />
          </div>
          
          <div ref={revealRefs.info} className="flex-grow text-gray-700 dark:text-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-[12px] sm:text-sm">
              <div className="flex items-center">
               <span> <MdEmail size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">Email:</p>
                  <a href="mailto:jgathiru02@gmail.com" className="hover:underline">jgathiru02@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdPhone size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">Phone:</p>
                  <p className="">+254 729 144 533</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdSchool size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">Education:</p>
                  <p className="">B.S. in Software Engineering</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><MdLanguage size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">Languages:</p>
                  <p className="">English, Swahili</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><FaWhatsapp size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">WhatsApp:</p>
                  <p className="">+254 729 144 533</p>
                </div>
              </div>
              <div className="flex items-center">
                <span><FaBriefcase size={26} className=" mr-2 text-xl" /></span>
                <div>
                  <p className="font-semibold ">Upwork:</p>
                  <p className="">
                    <span> <a href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share">Gitau Justus</a></span>
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <MdVerified size={24} className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white uppercase tracking-wider">
                  Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-[#1E2235] border border-gray-200/80 dark:border-gray-700/70 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-200 shadow-sm group"
                  >
                    <div className="pr-2 min-w-0">
                      <p className="font-semibold text-[12px] sm:text-[13px] text-gray-900 dark:text-gray-100 truncate">
                        {cert.title}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 truncate">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 px-2 py-1 rounded transition-colors flex-shrink-0"
                      >
                        <span>Certificate</span>
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={revealRefs.buttons} className="mt-6 flex space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="
               text-black text-[13px] md:text-base 2xl:text-lg py-2 px-3 md:px-5 rounded-md md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 hover:from-[#EEF3FF] hover:to-[#2A97A5] transition-all duration-500 ease-in-out border border-[#1F2235]/70">
                <a href="/photos/Gitau-Justus-CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>Download CV</span>
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
