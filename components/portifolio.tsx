'use client'
// import React, { useState } from 'react'
// import Gallery from './graphicswork'
// import Projects from './projects'

// function Portfolio() {
//   const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-center mb-8">
//         <button
//           className={`px-4 py-2 mx-2 rounded-md ${
//             activeTab === 'projects'
//               ? 'bg-yellow-500 text-white'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setActiveTab('projects')}
//         >
//           Projects
//         </button>
//         <button
//           className={`px-4 py-2 mx-2 rounded-md ${
//             activeTab === 'gallery'
//               ? 'bg-yellow-500 text-white'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setActiveTab('gallery')}
//         >
//           Graphics Work
//         </button>
//       </div>
      
//       {activeTab === 'projects' ? <Projects /> : <Gallery />}
//     </div>
//   )
// }

// export default Portfolio

import React, { useState } from 'react'
import Gallery from './graphicswork'
import Projects from './projects'

function Portfolio() {
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');

  return (
    <div className="container mx-auto px-4 py-2">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5">Portfolio</h2>
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-gray-200 rounded-full p-1  shadow-lg">
          <button
            className={`px-8 z-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === 'projects'
                ? 'text-white'
                : 'text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`px-8 py-3 z-10 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === 'gallery'
                ? 'text-white'
                : 'text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('gallery')}
          >
            Designs
          </button>
          <div
            className="absolute top-1 bottom-1 transition-all duration-300 ease-in-out bg-[#24273D]  rounded-full shadow-md"
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