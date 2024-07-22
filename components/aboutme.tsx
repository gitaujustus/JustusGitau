import React from 'react'
import Image from 'next/image'
import { MdEmail, MdPhone, MdSchool, MdLanguage } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';

function About() {
  return (
    <main>
           <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md  mx-auto">
  <h2 className="text-xl text-gray-600 mb-6">Software Engineer | Entrepreneur | Problem Solver</h2>
  
  <p className="text-gray-700 mb-4">
    Based in Nairobi, Kenya, I&apos;m a passionate software engineer dedicated to creating innovative solutions through technology. As the founder of JASTUTE, a tech and graphic design company, I specialize in developing user-friendly web interfaces with responsive design and intuitive graphics that can help reach a winder audience.
  </p>
  
  <p className="text-gray-700 mb-4">
    Currently, I oversee Centri Closet, a thriving e-commerce platform serving Baraton University. My goal is to leverage technology to make a positive impact on society by addressing real-world challenges.
  </p>
  
  <p className="text-gray-700 mb-6">
    Outside of work, I enjoy reading and exploring new places.
  </p>
  <div className="flex flex-col items-center lg:flex-row gap-8">
  <div className="w-36 h-36 flex-shrink-0">
    <Image src={"/photos/justus.jpg"} height={1023} width={960} alt="Justus" className="w-full h-full object-cover rounded-full border-4 border-gray-300" />
  </div>
  
  <div className="flex-grow">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      <div className="flex items-center">
        <MdEmail size={26} className="text-gray-600 mr-2 text-xl" />
        <div>
          <p className="font-semibold text-gray-600">Email:</p>
          <p className="text-gray-700">jgathiru02@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <MdPhone size={26} className="text-gray-600 mr-2 text-xl" />
        <div>
          <p className="font-semibold text-gray-600">Phone:</p>
          <p className="text-gray-700">+254 729 144 533</p>
        </div>
      </div>
      <div className="flex items-center">
        <MdSchool size={26} className="text-gray-600 mr-2 text-xl" />
        <div>
          <p className="font-semibold text-gray-600">Education:</p>
          <p className="text-gray-700">B.S. in Software Engineering</p>
        </div>
      </div>
      <div className="flex items-center">
        <MdLanguage size={26} className="text-gray-600 mr-2 text-xl" />
        <div>
          <p className="font-semibold text-gray-600">Languages:</p>
          <p className="text-gray-700">English, Swahili</p>
        </div>
      </div>
    </div>
    
    <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
      <button className="text-black font-bold border-4 border-blue-700 py-2 px-4 rounded-md bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <a href="/photos/GitauJustusCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <span>Download Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </button>
      <div className="flex items-center gap-2 text-green-600 font-semibold">
        <FaBriefcase size={20} />
        <span>Available for Freelance</span>
      </div>
    </div>
  </div>
</div>

</div>
    </main>
  )
}

export default About