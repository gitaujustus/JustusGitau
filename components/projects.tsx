



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

import React, { useEffect, useRef, useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";


interface Project {
  title: string;
  description: string;
  previewLink: string;
  imageSrc: string;
  mainLink: string;
  alt: string;
  sourceLink?: string;
  techs?: string[];
}

const techList = [
  { name: 'React', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' },
  { name: 'Next.js', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' },
  { name: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' },
  { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200' },
  { name: 'PostgreSQL', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200' },
  { name: 'TypeScript', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200' },
  { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  { name: 'Brand Identity', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200' },
  { name: 'Graphic Design', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200' },
];

const projects: Project[] = [
  {
    title: "Justprenuer",
    description: "Blog Website made with React, Nodejs/express and MySQL",
    previewLink: "https://justprenuer.vercel.app/",
    imageSrc: "/photos/BlogWeb.png",
    mainLink: "https://justpreneur.vercel.app/",
    alt: "Justprenuer",
    techs: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    title: "Healjunction",
    description: "Modern poultry website showcasing chicks, hens, and farm products for customers.",
    previewLink: "https://kibunja-farm.vercel.app/",
    imageSrc: "/photos/kibunja-farm.png",
    mainLink: "https://kibunja-farm.vercel.app/",
    alt: "Healjunction",
    techs: ['Next', 'Tailwind CSS', 'Framer'],
  },
  {
    title: "Kenya Labour Export System (KLES)",
    description: "KLES is designed to streamline the labor export process for Kenyan workers.",
    previewLink: "https://labourexport.vercel.app/",
    imageSrc: "/photos/kles.jpeg",
    mainLink: "https://labourexport.vercel.app/",
    alt: "KLES",
    techs: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
  },
  {
    title: "Kaziafya",
    description: "Modern point-of-sale system tailored for hospitals and digital health service providers.",
    previewLink: "https://kaziafya.vercel.app/",
    imageSrc: "/photos/kaziafyaPOS.png",
    mainLink: "https://kaziafya.vercel.app/",
    alt: "Kaziafya",
    techs: ['Next', 'Framer', 'Tailwind CSS'],
  },
  {
    title: "MedRent",
    description: "An application designed to facilitate the process of renting medical equipments",
    previewLink: "https://medrent.vercel.app/",
    imageSrc: "/photos/medrent.jpeg",
    mainLink: "https://medrent.vercel.app/",
    alt: "Medrent",
    techs: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js'],
  },
  {
    title: "Centri Closet",
    description: "Centri Closet is an online marketplace for Baraton University Student",
    previewLink: "https://campus-closet.vercel.app/",
    imageSrc: "/photos/closet.jpg",
    mainLink: "https://campus-closet.vercel.app/",
    alt: "Centri Closet",
    techs: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: "UEAB Research Grants",
    description: "UEAB Research Grants is a react website for UEA Baraton",
    previewLink: "https://ueab-research.vercel.app/",
    imageSrc: "/photos/ueab-research.jpeg",
    mainLink: "https://ueab-research.vercel.app/",
    alt: "UEAB Research Grants",
    techs: ['React', 'Tailwind CSS'],
  },
  {
    title: "Kazipos",
    description: "Simple, web-based POS system for managing sales, stock, and customer records.",
    previewLink: "https://kazi-pos.vercel.app/",
    imageSrc: "/photos/kazipos.png",
    mainLink: "https://kazi-pos.vercel.app/",
    alt: "Kazipos",
    techs: ['Next', 'Tailwind CSS', 'Framer'],
  },
  {
    title: "Hillgan Bulk SMS",
    description: "Platform to enable managing of bulk sms",
    previewLink: "https://hillgan-bulksms.vercel.app/",
    imageSrc: "/photos/hillgan-sms.jpeg",
    mainLink: "https://hillgan-bulksms.vercel.app/",
    alt: "Hillgan Bulk SMS",
    techs: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: "Rays of Hope Neurodiversity",
    description: "Brand identity, digital platform, and promotional materials championing neurodiversity awareness and advocacy.",
    previewLink: "https://www.raysofhopeneurodiversity.org/",
    imageSrc: "/photos/raysofhope.png",
    mainLink: "https://www.raysofhopeneurodiversity.org/",
    alt: "Rays of Hope Neurodiversity",
    techs: ['Brand Identity', 'Graphic Design'],
  },
  {
    title: "DS Toriet Group",
    description: "Cohesive corporate brand identity, graphic design systems, and digital promotional collateral for business operations.",
    previewLink: "https://dstorietgroup.com/",
    imageSrc: "/photos/dstoriet.png",
    mainLink: "https://dstorietgroup.com/",
    alt: "DS Toriet Group",
    techs: ['Brand Identity', 'Graphic Design'],
  },
  {
    title: "Kazi Desk",
    description: "Platform to help manage human resources in an organization",
    previewLink: "https://kazidesk.vercel.app/admin",
    imageSrc: "/photos/kazi-test.jpeg",
    mainLink: "https://kazidesk.vercel.app/admin",
    alt: "Kazi Desk",
    techs: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    title: "10 Star Hotel",
    description: "Hotel Management System, support room reservices, bookings etc.My First Ever Project in web😁",
    previewLink: "https://young-professor-github-io.vercel.app/",
    sourceLink: "https://github.com/gitaujustus/Young-Professor.github.io",
    imageSrc: "/photos/Hotel.png",
    mainLink: "https://young-professor-github-io.vercel.app/",
    alt: "10 Star Hotel",
    techs: ['HTML', 'CSS', 'JavaScript', 'Nodejs',],
  },
  {
    title: "Front End Clone",
    description: "Front End Clone using react and Tailwind Css",
    previewLink: "https://the-challenge-blue.vercel.app/",
    sourceLink: "https://github.com/gitaujustus/Web.challenge",
    imageSrc: "/photos/challenge.png",
    mainLink: "https://the-challenge-blue.vercel.app/",
    alt: "Front End Clone",
    techs: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

const Projects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9); // default for desktop

  // Store the initial visible count for toggling back
  const [initialCount, setInitialCount] = useState(9);

  useEffect(() => {
    // Responsive logic for visible projects
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(6);
        setInitialCount(6);
      } else {
        setVisibleCount(9);
        setInitialCount(9);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          reset: false,
        });
        sr.reveal('#projects h2', { origin: 'top', delay: 100 });
        sr.reveal('#projects > p', { origin: 'left', delay: 300 });
        projectRefs.current.forEach((ref, index) => {
          if (ref) {
            sr.reveal(ref, { delay: 200 + (index * 100), interval: 100 });
          }
        });
      }
    };
    initScrollReveal();
  }, []);

  const projectsToShow = showAll ? projects : projects.slice(0, visibleCount);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setVisibleCount(initialCount);
    } else {
      setShowAll(true);
    }
  };

  const setProjectRef = (el: HTMLDivElement | null, index: number): void => {
    projectRefs.current[index] = el;
  };

  return (
    <div id='projects' className="mx-auto bg-white dark:bg-[#24273d] about font-poppins">
      <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-8 text-center gallery-title text-gray-900 dark:text-white">Development Portfolio</h1>
      {/* <p className="text-gray-900 dark:text-white my-2">These are some of the projects which I have been working on:</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[20px] lg:gap-[40px] 2xl:gap-[55px] justify-center sm:justify-between">
        {projectsToShow.map((project, index) => (
          <div 
            key={index} 
            ref={(el) => setProjectRef(el, index)}
            className="w-full box-border bg-gray-100 dark:bg-[#1F2235] rounded-[15px] xl:rounded-[30px] my-3 dark:shadow-[#00d0ff50] dark:hover:shadow-[#00d0ff] transition ease-in-out duration-500 shadow-sm hover:shadow-md pb-4 flex flex-col"
          >
            <div className='relative'>
              <a href={project.mainLink} target="_blank" rel="noreferrer">
                <img  src={project.imageSrc} alt={project.alt} 
                className='rounded-t-[15px] md:rounded-t-[30px] w-full h-40 sm:h-48 md:h-45 lg:h-55 xl:h-60 object-cover object-top' 
                />
              </a>
              <a href={project.mainLink} target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-gray-900/90 dark:bg-[#1F2235]/90 text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-[15px] md:rounded-t-[30px]">
                <p className="text-[14px] md:text-base lg:text-lg text-yellow-400 text-center font-bold">{project.title}</p>
              </a>
            </div>
            <p className='text-gray-900 dark:text-white py-4 px-[10px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] flex-grow'>{project.description}</p>
            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 px-[10px] pb-2">
              {project.techs && project.techs.map((tech) => {
                const techObj = techList.find(t => t.name === tech);
                return (
                  <span
                    key={tech}
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${techObj ? techObj.color : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
            <div className='flex justify-between px-2 p-1 mt-auto'>
              <p className='text-gray-900 dark:text-gray-200 px-2 my-auto'>
                <a href={project.previewLink} target="_blank" rel="noreferrer"><LuExternalLink size={20} /></a>
              </p>
              {project.sourceLink ? (
                <p className=' text-gray-900 dark:text-gray-200'>
                  <a href={project.sourceLink} target="_blank" rel="noreferrer"><FaGithub size={20}/></a>
                </p>
              ) : (
                <IoHeart color='red' size={20} />
              )}
            </div>
          </div>
        ))}
      </div>
      {!showAll && projects.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200"
          >
            See All
          </button>
        </div>
      )}
      {showAll && projects.length > initialCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200"
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;