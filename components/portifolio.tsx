'use client'

import React, { useState } from 'react'
import Gallery from './graphicswork'
import Projects from './projects'

function Portfolio() {
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');

  return (
    <div className="container mx-auto px-4 py-2 bg-white dark:bg-[#24273D]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#c45f30] dark:text-yellow-500 pt-5">Portfolio</h2>
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-gray-200 dark:bg-[#1F2235] rounded-full p-1  shadow-lg">
          <button
            className={`text-[14px] md:text-[16px] px-8 z-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === 'projects'
                ? 'text-white dark:text-gray-900 bg-[#24273D] dark:bg-gray-100'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`text-[14px] md:text-[16px] px-8 py-3 z-10 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === 'gallery'
                ? 'text-white dark:text-gray-900 bg-[#24273D] dark:bg-gray-100'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('gallery')}
          >
            Designs
          </button>
          <div
            className="absolute top-1 bottom-1 transition-all duration-300 ease-in-out bg-[#24273D] dark:bg-gray-100 rounded-full shadow-md"
            style={{
              width: '50%',
              left: activeTab === 'projects' ? '2px' : 'calc(50% - 2px)',
              zIndex: 0,
            }}
          />
        </div>
      </div>
      
      {activeTab === 'projects' ? <Projects /> : <Gallery />}
    </div>
  )
}

export default Portfolio