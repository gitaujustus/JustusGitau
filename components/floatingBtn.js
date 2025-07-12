
'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import WhatsAppButton from './whatsAppBtn';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttons = [
    { icon: <FaEnvelope />, href: "mailto:example@example.com", label: "Email" },
    { icon: <FaPhone />, href: "tel:+1234567890", label: "Phone" },
    { icon: <FaFacebookF />, href: "https://facebook.com/your-page", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/your-handle", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  ];

  return (
    <>
      {/* Back to Top Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={scrollToTop}
          className="bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-4 z-50">
        <div className={`flex flex-col-reverse items-end space-y-2 space-y-reverse ${isOpen ? 'mb-4' : ''}`}>
          {isOpen && buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
              aria-label={button.label}
            >
              {button.icon}
            </a>
          ))}
        </div>
        <div className="flex space-x-2">
          {/* <WhatsAppButton /> */}

          {/* <button
            onClick={toggleOpen}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
            aria-label="Toggle floating menu"
          >
            <IoIosArrowUp className={`text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FloatingActionButton;