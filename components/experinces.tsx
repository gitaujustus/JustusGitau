
// const Experience = () => {
//   return (
//     <div id="experience" className="mx-auto px-3 py-4 sm:px-10 md:px-20 about bg-[#1F2235]">
//       <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5"> My Experience</h2>
      
//       <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
//         <div className="w-full flex  flex-col md:flex-row gap-6">
//           <p>
//             I have worked as a software engineer focusing on front-end development and design at <a href="#" className="underline text-blue-500">Hillgan Innovations</a> Company. I create efficient and user-friendly web applications. Check out my Projects.
//           </p>
//           <p>
//             As a graphic designer at the <span className="text-blue-500 underline"><a href="https://ueab.ac.ke">University of Eastern Africa Baraton Crested Crane</a></span>, I
//             contributed to the successful production of the yearbook with visually appealing designs.
//           </p>
//         </div>
//       </div>
//       {/* progress bar of each skill */}
//         <h3 className="text-xl text-yellow-500 font-bold my-3  text-center">
//         Skill Spectrum: Development
//         </h3>
//       <div className="sm:flex justify-between flex-wrap">
//         {/* JavaScript Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-3">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Javascript</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
//           </div>
//         </div>

//          {/* Typescript Skill */}
//         <div className="sm:w-[45%] mb-6 ">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Typescript</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
//           </div>
//         </div>

//          {/* Nodejs Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Node.js</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">90%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
//           </div>
//         </div>

//           {/* React Skill */}
//           <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">ReactJS/NextJS</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">98%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "98%"}}></div>
//           </div>
//         </div>

//          {/* SEO Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">SEO</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">90%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "92%"}}></div>
//           </div>
//         </div>
//          {/* CMS/wordpress Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">CMS/Wordpress</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">80%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
//           </div>
//         </div>

//          {/* MySQL/Postgres Skill */}
//          <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">MySQL/Postgres</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">98%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "98%"}}></div>
//           </div>
//          </div>

//          {/* Prisma Skill */}
//          <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Prisma</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
//           </div>
//          </div>
//          {/* Tailwind Skill */}
//          <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Tailwind CSS</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
//           </div> 
//           </div> 
      

//           {/* Flutter and Dart Skill(mobile development) */}
//           <div className="sm:w-[45%] mb-6">
//             <div className="flex justify-between mb-2">
//               <span className="text-base font-medium text-blue-700 dark:text-white">Flutter and Dart</span>
//               <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//               <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
//             </div>
//           </div>
//       </div>
//       <h3 className="text-xl text-yellow-500 font-bold my-3  text-center">
//         Skill Spectrum: Designing
//       </h3>
//        <div className="sm:flex justify-between flex-wrap">
//         {/* Adobe Photoshop Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Photoshop</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
//           </div>
//         </div>
//         {/* Adobe Lightroom Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Lightroom</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
//           </div>
//         </div>
//         {/* Adobe Illustrator Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Illustrator</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
//           </div>
//         </div>
//         {/* Adobe InDesign Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Adobe InDesign</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
//           </div>
//         </div>
//         {/* Figma Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Figma</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
//           </div>
//         </div>
//         {/* Canva Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Canva</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
//           </div>
//         </div>

//         {/* Adobe Premier Pro Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Premier Pro</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
//           </div>
//         </div>
//         {/* Capcut Skill */}
//         <div className="sm:w-[45%] mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="text-base font-medium text-blue-700 dark:text-white">Capcut</span>
//             <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
//           </div>
//         </div>
//        </div>
//     </div>
//   );
// };

// export default Experience;





// const SkillBar = ({ skill, percentage }: { skill: string, percentage: number }) => (
//   <div className="sm:w-[45%] mb-6">
//     <div className="flex justify-between mb-2">
//       <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
//       <span className="text-sm font-medium text-blue-700 dark:text-white">{percentage}%</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//       <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
//     </div>
//   </div>
// );

// const Experience = () => {
//   const developmentSkills = [
//     { skill: "Javascript", percentage: 95 },
//     { skill: "Typescript", percentage: 75 },
//     { skill: "Node.js", percentage: 90 },
//     { skill: "ReactJS/NextJS", percentage: 98 },
//     { skill: "SEO", percentage: 90 },
//     { skill: "CMS/Wordpress", percentage: 80 },
//     { skill: "MySQL/Postgres", percentage: 98 },
//     { skill: "Prisma", percentage: 65 },
//     { skill: "Tailwind CSS", percentage: 95 },
//     { skill: "Flutter and Dart", percentage: 65 },
//   ];

//   const designSkills = [
//     { skill: "Adobe Photoshop", percentage: 95 },
//     { skill: "Adobe Lightroom", percentage: 85 },
//     { skill: "Adobe Illustrator", percentage: 65 },
//     { skill: "Adobe InDesign", percentage: 85 },
//     { skill: "Figma", percentage: 65 },
//     { skill: "Canva", percentage: 85 },
//     { skill: "Adobe Premier Pro", percentage: 65 },
//     { skill: "Capcut", percentage: 95 },
//   ];

//   return (
//     <div id="experience" className="mx-auto px-3 py-4 sm:px-10 md:px-20 about bg-[#1F2235]">
//       <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5">My Experience</h2>
//       <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
//         <div className="w-full flex flex-col md:flex-row gap-6">
//           <p>
//             I have worked as a software engineer focusing on front-end development and design at <a href="#" className="underline text-blue-500">Hillgan Innovations</a> Company. I create efficient and user-friendly web applications. Check out my Projects.
//           </p>
//           <p>
//             As a graphic designer at the <span className="text-blue-500 underline"><a href="https://ueab.ac.ke">University of Eastern Africa Baraton Crested Crane</a></span>, I
//             contributed to the successful production of the yearbook with visually appealing designs.
//           </p>
//         </div>
//       </div>
//       <h3 className="text-xl text-yellow-500 font-bold my-3 text-center">Skill Spectrum: Development</h3>
//       <div className="sm:flex justify-between flex-wrap">
//         {developmentSkills.map(({ skill, percentage }) => (
//           <SkillBar key={skill} skill={skill} percentage={percentage} />
//         ))}
//       </div>
//       <h3 className="text-xl text-yellow-500 font-bold my-3 text-center">Skill Spectrum: Designing</h3>
//       <div className="sm:flex justify-between flex-wrap">
//         {designSkills.map(({ skill, percentage }) => (
//           <SkillBar key={skill} skill={skill} percentage={percentage} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;



'use client'

import React, { useEffect, useRef } from 'react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  const skillRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          duration: 1000,
          distance: '20px',
          origin: 'bottom',
          opacity: 0,
          scale: 0.8,
        });

        if (skillRef.current) {
          sr.reveal(skillRef.current, {
            afterReveal: (domEl: HTMLElement) => {
              const countElement = domEl.querySelector<HTMLSpanElement>('.skill-count');
              const progressBar = domEl.querySelector<HTMLDivElement>('.progress-bar');
              if (countElement && progressBar) {
                let count = 0;
                const interval = setInterval(() => {
                  count++;
                  countElement.textContent = `${count}%`;
                  progressBar.style.width = `${count}%`;
                  if (count >= percentage) {
                    clearInterval(interval);
                  }
                }, 20);
              }
            }
          });
        }
      }
    };

    initScrollReveal();
  }, [percentage]);
  

  return (
    <div ref={skillRef} className="sm:w-[45%] mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-white skill-count">0%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full progress-bar" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
};

const Experience = () => {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal();

        sr.reveal('#experience h2', {
          duration: 1000,
          distance: '20px',
          origin: 'top',
          opacity: 0
        });

        sr.reveal('#experience p', {
          duration: 1000,
          distance: '20px',
          origin: 'left',
          opacity: 0,
          delay: 300
        });

        sr.reveal('#experience h3', {
          duration: 1000,
          distance: '20px',
          origin: 'right',
          opacity: 0,
          delay: 500
        });
      }
    };

    initScrollReveal();
  }, []);

  const developmentSkills = [
    { skill: "Javascript", percentage: 95 },
    { skill: "Typescript", percentage: 75 },
    { skill: "Node.js", percentage: 90 },
    { skill: "ReactJS/NextJS", percentage: 98 },
    { skill: "SEO", percentage: 90 },
    { skill: "CMS/Wordpress", percentage: 80 },
    { skill: "MySQL/Postgres", percentage: 98 },
    { skill: "Prisma", percentage: 65 },
    { skill: "Tailwind CSS", percentage: 95 },
    { skill: "Flutter and Dart", percentage: 65 },
  ];

  const designSkills = [
    { skill: "Adobe Photoshop", percentage: 95 },
    { skill: "Adobe Lightroom", percentage: 85 },
    { skill: "Adobe Illustrator", percentage: 65 },
    { skill: "Adobe InDesign", percentage: 85 },
    { skill: "Figma", percentage: 65 },
    { skill: "Canva", percentage: 85 },
    { skill: "Adobe Premier Pro", percentage: 65 },
    { skill: "Capcut", percentage: 95 },
  ];

  return (
    <div id="experience" className="mx-auto px-3 py-4 sm:px-10 md:px-20 about bg-[#1F2235]">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500 pt-5">My Experience</h2>
      <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
        <div className="w-full flex flex-col md:flex-row gap-6">
          <p>
            I have worked as a software engineer focusing on front-end development and design at <a href="#" className="underline text-blue-500">Hillgan Innovations</a> Company. I create efficient and user-friendly web applications. Check out my Projects.
          </p>
          <p>
            As a graphic designer at the <span className="text-blue-500 underline"><a href="https://ueab.ac.ke">University of Eastern Africa Baraton Crested Crane</a></span>, I
            contributed to the successful production of the yearbook with visually appealing designs.
          </p>
        </div>
      </div>
      <h3 className="text-xl text-yellow-500 font-bold my-3 text-center">Skill Spectrum: Development</h3>
      <div className="sm:flex justify-between flex-wrap">
        {developmentSkills.map(({ skill, percentage }) => (
          <SkillBar key={skill} skill={skill} percentage={percentage} />
        ))}
      </div>
      <h3 className="text-xl text-yellow-500 font-bold my-3 text-center">Skill Spectrum: Designing</h3>
      <div className="sm:flex justify-between flex-wrap">
        {designSkills.map(({ skill, percentage }) => (
          <SkillBar key={skill} skill={skill} percentage={percentage} />
        ))}
      </div> 
    </div>
  );
};

export default Experience;