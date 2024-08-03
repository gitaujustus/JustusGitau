



// import { IoHeart } from "react-icons/io5";

// const projects = [
  // {
  //   title: "Justprenuer",
  //   description: "Blog Website made with React, Nodejs/express and MySQL",
  //   previewLink: "https://blogging-website-five.vercel.app/",
  //   imageSrc: "/photos/BlogWeb.png",
  //   mainLink: "https://justpreneur.vercel.app/",
  //   alt: "Justprenuer",
  // },
  // {
  //   title: "Centri Closet",
  //   description: "Centri Closet is an online marketplace for Baraton University Student",
  //   previewLink: "https://campus-closet.vercel.app/",
  //   imageSrc: "/photos/closet.jpg",
  //   mainLink: "https://campus-closet.vercel.app/",
  //   alt: "Centri Closet",
  // },
  // {
  //   title: "UEAB Innovation",
  //   description: "UEAB innovation is a react website for UEA Baraton",
  //   previewLink: "https://ueabinnovation.vercel.app/",
  //   imageSrc: "/photos/innovation.jpeg",
  //   mainLink: "https://ueabinnovation.vercel.app/",
  //   alt: "UEAB Innovation",
  // },
  // {
  //   title: "UEAB Research Grants",
  //   description: "UEAB Research Grants is a react website for UEA Baraton",
  //   previewLink: "https://ueab-research.vercel.app/",
  //   imageSrc: "/photos/ueab-research.jpeg",
  //   mainLink: "https://ueab-research.vercel.app/",
  //   alt: "UEAB Research Grants",
  // },
  // {
  //   title: "Hillgan Bulk SMS",
  //   description: "Platform to enable managing of bulk sms",
  //   previewLink: "https://hillgan-bulksms.vercel.app/",
  //   imageSrc: "/photos/hillgan-sms.jpeg",
  //   mainLink: "https://hillgan-bulksms.vercel.app/",
  //   alt: "Hillgan Bulk SMS",
  // },
  // {
  //   title: "Kazi Desk",
  //   description: "Platform to help manage human resources in an organization",
  //   previewLink: "https://hillgan-bulksms.vercel.app/",
  //   imageSrc: "/photos/kazi-test.jpeg",
  //   mainLink: "https://hillgan-bulksms.vercel.app/",
  //   alt: "Kazi Desk",
  // },
  // {
  //   title: "Délicieux Recipes",
  //   description: "Délicieux Recipes is a PWA with fully offline capabilities",
  //   previewLink: "https://dericieux.vercel.app/",
  //   sourceLink: "https://github.com/gitaujustus/Delicieux",
  //   imageSrc: "/photos/recipe3.jpeg",
  //   mainLink: "https://dericieux.vercel.app/",
  //   alt: "Délicieux Recipes",
  // },
  // {
  //   title: "10 Star Hotel",
  //   description: "Hotel MIS made with Html/Css, Javascript Languages",
  //   previewLink: "https://young-professor-github-io.vercel.app/",
  //   sourceLink: "https://github.com/Young-Professor/Young-Professor.github.io",
  //   imageSrc: "/photos/Hotel.png",
  //   mainLink: "https://young-professor-github-io.vercel.app/",
  //   alt: "10 Star Hotel",
  // },
  // {
  //   title: "Front End Clone",
  //   description: "Front End Clone using react and Tailwind Css",
  //   previewLink: "https://the-challenge-blue.vercel.app/",
  //   sourceLink: "https://github.com/Young-Professor/Web.challenge",
  //   imageSrc: "/photos/challenge.png",
  //   mainLink: "https://the-challenge-blue.vercel.app/",
  //   alt: "Front End Clone",
  // },
// ];

// const Projects = () => {
//   return (
//     <div id='projects' className="mx-auto px-6 sm:px-10 md:px-20 bg-[#24273d] about font-poppins">
//       <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5">Portfolio</h2>
//       <p className="text-white my-2">These are some of the projects which I have been working on:</p>
//       <div className="flex flex-wrap justify-center sm:justify-between">
//         {projects.map((project, index) => (
//           <div key={index} className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff50] hover:shadow-[#00d0ff] transition ease-in-out duration-500 shadow-lg">
//             <div className='relative'>
//               <a href={project.mainLink} target="_blank" rel="noreferrer">
//                 <img className='rounded-t-md' src={project.imageSrc} alt={project.alt} />
//               </a>
//               <a href={project.mainLink} className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
//                 <p className="text-lg text-yellow-400 font-bold">{project.title}</p>
//               </a>
//             </div>
//             <p className='text-white px-2'>{project.description}</p>
//             <div className='flex justify-between px-2 p-1'>
//               <p className='text-yellow-500 border px-2 rounded-lg'>
//                 <a href={project.previewLink} target="_blank" rel="noreferrer">Preview</a>
//               </p>
//               {project.sourceLink ? (
//                 <p className='text-yellow-500 border px-2 rounded-lg'>
//                   <a href={project.sourceLink} target="_blank" rel="noreferrer">Source</a>
//                 </p>
//               ) : (
//                 <IoHeart color='red' size={26} />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

'use client'

import React, { useEffect, useRef } from 'react';
import { IoHeart } from "react-icons/io5";

interface Project {
  title: string;
  description: string;
  previewLink: string;
  imageSrc: string;
  mainLink: string;
  alt: string;
  sourceLink?: string;
}

const projects: Project[] = [
  {
    title: "Justprenuer",
    description: "Blog Website made with React, Nodejs/express and MySQL",
    previewLink: "https://blogging-website-five.vercel.app/",
    imageSrc: "/photos/BlogWeb.png",
    mainLink: "https://justpreneur.vercel.app/",
    alt: "Justprenuer",
  },
  {
    title: "Kenya Labour Export System (KLES)",
    description: "KLES is designed to streamline the labor export process for Kenyan workers.",
    previewLink: "https://labourexport.vercel.app/",
    imageSrc: "/photos/kles.jpeg",
    mainLink: "https://labourexport.vercel.app/",
    alt: "KLES",
  },
  {
    title: "MedRent",
    description: "An application designed to facilitate the process of renting medical equipments",
    previewLink: "https://medrent.vercel.app/",
    imageSrc: "/photos/medrent.jpeg",
    mainLink: "https://medrent.vercel.app/",
    alt: "Medrent",
  },
  {
    title: "Centri Closet",
    description: "Centri Closet is an online marketplace for Baraton University Student",
    previewLink: "https://campus-closet.vercel.app/",
    imageSrc: "/photos/closet.jpg",
    mainLink: "https://campus-closet.vercel.app/",
    alt: "Centri Closet",
  },
  {
    title: "UEAB Innovation",
    description: "UEAB innovation is a react website for UEA Baraton",
    previewLink: "https://ueabinnovation.vercel.app/",
    imageSrc: "/photos/innovation.jpeg",
    mainLink: "https://ueabinnovation.vercel.app/",
    alt: "UEAB Innovation",
  },
  {
    title: "UEAB Research Grants",
    description: "UEAB Research Grants is a react website for UEA Baraton",
    previewLink: "https://ueab-research.vercel.app/",
    imageSrc: "/photos/ueab-research.jpeg",
    mainLink: "https://ueab-research.vercel.app/",
    alt: "UEAB Research Grants",
  },
  {
    title: "Hillgan Bulk SMS",
    description: "Platform to enable managing of bulk sms",
    previewLink: "https://hillgan-bulksms.vercel.app/",
    imageSrc: "/photos/hillgan-sms.jpeg",
    mainLink: "https://hillgan-bulksms.vercel.app/",
    alt: "Hillgan Bulk SMS",
  },
  {
    title: "Kazi Desk",
    description: "Platform to help manage human resources in an organization",
    previewLink: "https://hillgan-bulksms.vercel.app/",
    imageSrc: "/photos/kazi-test.jpeg",
    mainLink: "https://hillgan-bulksms.vercel.app/",
    alt: "Kazi Desk",
  },
  {
    title: "Délicieux Recipes",
    description: "Délicieux Recipes is a PWA with fully offline capabilities",
    previewLink: "https://dericieux.vercel.app/",
    sourceLink: "https://github.com/gitaujustus/Delicieux",
    imageSrc: "/photos/recipe3.jpeg",
    mainLink: "https://dericieux.vercel.app/",
    alt: "Délicieux Recipes",
  },
  {
    title: "10 Star Hotel",
    description: "Hotel MIS made with Html/Css, Javascript Languages",
    previewLink: "https://young-professor-github-io.vercel.app/",
    sourceLink: "https://github.com/Young-Professor/Young-Professor.github.io",
    imageSrc: "/photos/Hotel.png",
    mainLink: "https://young-professor-github-io.vercel.app/",
    alt: "10 Star Hotel",
  },
  {
    title: "Front End Clone",
    description: "Front End Clone using react and Tailwind Css",
    previewLink: "https://the-challenge-blue.vercel.app/",
    sourceLink: "https://github.com/Young-Professor/Web.challenge",
    imageSrc: "/photos/challenge.png",
    mainLink: "https://the-challenge-blue.vercel.app/",
    alt: "Front End Clone",
  },
];

const Projects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setProjectRef = (el: HTMLDivElement | null, index: number): void => {
    projectRefs.current[index] = el;
  };

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

        sr.reveal('#projects h2', {
          origin: 'top',
          delay: 100,
        });

        sr.reveal('#projects > p', {
          origin: 'left',
          delay: 300,
        });

        projectRefs.current.forEach((ref, index) => {
          if (ref) {
            sr.reveal(ref, {
              delay: 200 + (index * 100),
              interval: 100,
            });
          }
        });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <div id='projects' className="mx-auto px-6 sm:px-10 md:px-20 bg-[#24273d] about font-poppins">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5">Portfolio</h2>
      <p className="text-white my-2">These are some of the projects which I have been working on:</p>
      <div className="flex flex-wrap justify-center sm:justify-between">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={(el) => setProjectRef(el, index)}
            className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff50] hover:shadow-[#00d0ff] transition ease-in-out duration-500 shadow-lg"
          >
            <div className='relative'>
              <a href={project.mainLink} target="_blank" rel="noreferrer">
                <img className='rounded-t-md' src={project.imageSrc} alt={project.alt} />
              </a>
              <a href={project.mainLink} className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                <p className="text-lg text-yellow-400 text-center font-bold">{project.title}</p>
              </a>
            </div>
            <p className='text-white px-2'>{project.description}</p>
            <div className='flex justify-between px-2 p-1'>
              <p className='text-yellow-500 border px-2 rounded-lg'>
                <a href={project.previewLink} target="_blank" rel="noreferrer">Preview</a>
              </p>
              {project.sourceLink ? (
                <p className='text-yellow-500 border px-2 rounded-lg'>
                  <a href={project.sourceLink} target="_blank" rel="noreferrer">Source</a>
                </p>
              ) : (
                <IoHeart color='red' size={26} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;