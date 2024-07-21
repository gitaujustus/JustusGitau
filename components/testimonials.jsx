'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'James Kamau',
    image: 'https://th.bing.com/th/id/R.d7068367c4367960647a732c708d3ca8?rik=kAnNBuF4K4Jo1Q&pid=ImgRaw&r=0',
    quote: "Justus exceeded our expectations with his expertise and creativity. Our website looks fantastic and performs flawlessly.",
  },
  {
    id: 2,
    name: 'Jack Okero',
    image: 'https://th.bing.com/th/id/R.d7068367c4367960647a732c708d3ca8?rik=kAnNBuF4K4Jo1Q&pid=ImgRaw&r=0',
    quote: "Working with Justus was a game-changer. His attention to detail and innovative solutions made our project a success.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" px-2 md:px-20 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Testimonials</h2>
      <p className='text-gray-800 mb-6 text-center'>Words from my happy clients:</p>
      <div className="relative">
        <div className="flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="text-center px-12">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full border-4 border-[#24273D] mx-auto mb-4 object-cover"
            />
            <p className="text-xl italic mb-4 text-gray-700">&rdquo;{testimonials[currentIndex].quote}&rdquo;</p>
            <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600" />
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