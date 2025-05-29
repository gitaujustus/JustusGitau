'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Obadiah Kiptanui',
    image: '/photos/dummy-profile.png',
    quote: "Justus did an outstanding job on my website, showing exceptional attention to detail and dedication. He is reliable, professional, and a pleasure to work with. I highly recommend Justus for any web development projects.",
  },
  {
    id: 2,
    name: 'James Kamau',
    image: '/photos/dummy-profile.png',
    quote: "Justus exceeded our expectations with his expertise and creativity. Our website looks fantastic and performs flawlessly.",
  },
  {
    id: 3,
    name: 'Jack Okero',
    image: '/photos/dummy-profile.png',
    quote: "Working with Justus was a game-changer. His attention to detail and innovative solutions made our project a success.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '20px',
          duration: 1000,
          delay: 200,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        if (titleRef.current) {
          sr.reveal(titleRef.current, {
            origin: 'top',
            delay: 100,
          });
        }

        if (descriptionRef.current) {
          sr.reveal(descriptionRef.current, {
            origin: 'left',
            delay: 300,
          });
        }

        if (testimonialRef.current) {
          sr.reveal(testimonialRef.current, {
            origin: 'right',
            delay: 500,
          });
        }
      }
    };

    initScrollReveal();
  }, []);

  return (
    <div className="px-[18px] md:px-[55px] lg:px-[64px] xl:px-[80px] 2xl:px-[130px] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg py-[50px]">
      <h2 ref={titleRef} className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">Testimonials</h2>
      <p ref={descriptionRef} className='text-gray-800 mb-6 text-center text-[14px] md:text-[16px] lg:text-[18px]'>Words from my happy clients:</p>
      <div ref={testimonialRef} className="relative">
        <div className="flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          >
            <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>
          <div className="text-center px-12">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full border-4 border-[#52577c] mx-auto mb-4 object-cover"
            />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-sevillna mb-4 text-gray-700">&rdquo;{testimonials[currentIndex].quote}&rdquo;</p>
            <p className="font-semibold text-gray-800 text-[14px] md:text-[16px] lg:text-[18px]">{testimonials[currentIndex].name}</p>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          >
            <FaChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;