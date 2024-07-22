import React from 'react';
import { FaSquareUpwork } from "react-icons/fa6";
import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#1E2235] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gitau Justus</h3>
            <p className="text-sm">Web Developer & Designer</p>
          </div>
          <div className="flex space-x-4">
          <a href="https://www.facebook.com/@justoegitau1"><BsFacebook size={26} className="text-white hover:text-gray-200" /></a>
                <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400 hover:text-green-600" /></a>
                <a href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300 hover:text-red-500" /></a>
                <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400 hover:text-blue-500" /></a>
                <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="text-blue-500 hover:text-blue-700" /></a>
                <a href="https://github.com/Young-Professor"><BsGithub size={26} className="text-white hover:text-gray-100" /></a>
                <a href="https://www.upwork.com/freelancers/~01c6c0078b6adaedfc?mp_source=share"><FaSquareUpwork size={26} color="#14A800" className="" /></a>

          </div>
        </div>
        <div className="mt-8 text-center text-sm ">
          <p>&copy; 2023 - {new Date().getFullYear()} Gitau Justus. <span className='font-sevillana'>All rights reserved.</span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;