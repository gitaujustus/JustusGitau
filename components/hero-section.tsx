'use client'

import React, { useEffect, useRef, useState } from 'react';
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
          reset: false,
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const images = [
    "/photos/Justus latest.png",
    "/photos/justus.jpg",
    "/photos/JASTUTE-Logo.png" 
  ];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next image
      goToNext();
    } else if (isRightSwipe) {
      // Swipe right - go to previous image
      goToPrevious();
    }
  };

  // Mouse handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(0);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === 0) return; // Only track if mouse is down
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="flex items-center flex-col lg:flex-row py-4 justify-around bg-[#1F2235]">
      <div>
        <div ref={revealRefs.image} className="relative">
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => {
              // Reset if mouse leaves the area
              setTouchStart(0);
              setTouchEnd(0);
            }}
          >
            <Image 
              height={3791} 
              width={2843} 
              src={images[currentImageIndex]} 
              className={`h-96 md:h-[56vh] lg:h-[70vh] 2xl:h-[70vh] w-auto transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
              alt="Justus" 
              draggable={false} // Prevent default drag behavior
            />
            
            {/* Swipe indicator overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={goToPrevious}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                disabled={isTransitioning}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={goToNext}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                disabled={isTransitioning}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Touch/Swipe instruction hint */}
            {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs bg-black bg-opacity-50 px-3 py-1 rounded-full opacity-70">
              Swipe or drag to navigate
            </div> */}
          </div>
          
          {/* Slider Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  currentImageIndex === index 
                    ? 'bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] scale-110' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="py-5 md:py-3">
          <h1 className="text-center font-cedarville text-white">Lets Connect</h1>
          <div ref={revealRefs.socialIcons} className="flex space-x-5 justify-center">
            <a target='_blank' href="https://www.facebook.com/@justoegitau1"><BsFacebook size={26} className="text-white " /></a>
            <a target='_blank' href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
            <a target='_blank' href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300" /></a>
            <a target='_blank' href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="text-white" /></a>
            <a target='_blank' href="https://github.com/gitaujustus"><BsGithub size={26} className="text-white" /></a>
            <a target='_blank' href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share"><FaSquareUpwork size={26} color="#14A800" /></a>
          </div>
        </div>
      </div>
      <div className="w-full md:px-[55px] lg:px-6 lg:w-1/2 px-4">
        <div className="welcome">
          <h1 ref={revealRefs.title} className="text-white font-poppins font-bold text-3xl md:text-5xl">GITAU JUSTUS</h1>
          <ul ref={revealRefs.skills} className="lg:text-lg text-yellow-500 mt-2 lg:mt-5 xl:mt-10 tracking-[0.35px]">
            <li className="flex items-center">
              <span className="mr-2">👨‍💻</span> Software Engineer
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span> Graphic Designer
            </li>
            <li className="flex items-center">
              <span className="mr-2">💻</span> Web Designer  | Developer
            </li>
          </ul>
        </div>
        <div ref={revealRefs.description} className="lg:max-w-md xl:max-w-[70%] 2xl:max-w-[80%] text-[15px] sm:text-base lg:text-lg text-white flex flex-col gap-2 xl:gap-5 py-4 xl:mt-5 xl:tracking-[0.25px]">
          <p>
            &quot;I craft clean, modern websites, web apps, and systems, built to perform fast and engage users and get your bland recognized
          </p>
          <p className="">
            I&apos;ve helped clients increase engagement by up to 50% by turning their ideas into standout digital experiences.
          </p>
          <p className="">
            If you&apos;re ready to make your brand shine online, let&apos;s create something amazing together.&quot;
          </p>
        </div>
        <div ref={revealRefs.buttons} className="flex flex-wrap gap-1 md:gap-2 xl:gap-5 mt-4 xl:mt-10">
          <button className="
          text-black font-medium border text-sm md:text-base xl:text-lg py-2 px-3 md:px-5 rounded-md  mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2  hover:from-[#EEF3FF] hover:to-[#2A97A5]   transition-all duration-500 ease-in-out 
          ">
            <a href="#projects" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>View Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </button>

          <a
            href="#contacts"
            className="text-sm md:text-base xl:text-lg font-medium text-black px-5 py-2 rounded-md  mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center gap-2 transition-all duration-300 ease-in-out hover:from-[#EEF3FF] hover:to-[#2A97A5] "
          >
            Request a Quote
            <FaArrowRight className="text-sm" />
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Herosection;