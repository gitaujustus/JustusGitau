'use client'

import React, { useEffect, useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

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
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          reset: false
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
        <span className="text-[13px] md:text-base font-medium text-blue-700 dark:text-white">{skill}</span>
        <span className="text-[12px] md:text-sm font-medium text-blue-700 dark:text-white skill-count">0%</span>
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

        sr.reveal('.timeline-item', {
          duration: 1000,
          distance: '20px',
          origin: 'bottom',
          opacity: 0,
          interval: 200
        });

        sr.reveal('#experience h3', {
          duration: 1000,
          distance: '20px',
          origin: 'right',
          opacity: 0,
          delay: 400
        });
      }
    };

    initScrollReveal();
  }, []);

  const experiences = [
    {
      role: "ICT Officer",
      company: "Communications Authority of Kenya",
      period: "Jan 2026 – Present",
      description: "Automating key administrative workflows including issuance processes, correspondence, and data handling. Contributing to process improvements adopted across the department."
    },
    {
      role: "Founder & Lead",
      company: "JASTUTE Solutions",
      period: "Ongoing",
      description: "Overseeing tech and graphic design projects for clients across various industries, including web development, automation, and brand identity work — including projects for Rays of Hope Neurodiversity and DS Toriet Group."
    },
    {
      role: "Graphic Designer",
      company: "Unique Brand Creatives (UBC), Eldoret",
      period: "Sep 2025 – Feb 2026",
      description: "Delivered high-impact brand identities, marketing materials, and digital graphics for diverse client campaigns."
    },
    {
      role: "ICT Intern / Front-End Developer",
      company: "Hillgan Innovations",
      companyUrl: "https://hillganinnovations.com/",
      period: "May 2024 – June 2025",
      description: "Developed efficient, user-friendly web applications as part of the front-end development and design team."
    },
    {
      role: "Graphic Designer",
      company: "UEAB Crested Crane (Yearbook)",
      companyUrl: "https://ueab.ac.ke",
      period: "University Production",
      description: "Contributed visually appealing designs to the successful production of the university yearbook."
    }
  ];

  const developmentSkills = [
    { skill: "Javascript", percentage: 95 },
    { skill: "Typescript", percentage: 80 },
    { skill: "Node.js", percentage: 90 },
    { skill: "ReactJS/NextJS", percentage: 98 },
    { skill: "CCNA / Networking", percentage: 90 },
    { skill: "Tailwind CSS", percentage: 95 },
    { skill: "CMS/Wordpress", percentage: 80 },
    { skill: "MySQL/Postgres", percentage: 98 },
    { skill: "Prisma", percentage: 75 },
    { skill: "Flutter and Dart", percentage: 65 },
  ];

  const designSkills = [
    { skill: "Adobe Photoshop / Lightroom", percentage: 95 },
    { skill: "Adobe Illustrator / InDesign", percentage: 85 },
    { skill: "Figma", percentage: 80 },
    { skill: "Canva", percentage: 95 },
    { skill: "Adobe Premier Pro", percentage: 70 },
    { skill: "Capcut", percentage: 95 },
  ];

  return (
    <div id="experience" className="mx-auto py-8 px-[18px] md:px-[55px] lg:px-[64px] xl:px-[80px] 2xl:px-[130px] about bg-gray-100 dark:bg-[#1F2235]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#c45f30] dark:text-yellow-500 pt-5">My Experience</h2>
      
      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto my-8">
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-4 md:ml-6 space-y-8 py-2">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative pl-6 md:pl-8">
              {/* Bullet node */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-gray-100 dark:border-[#1F2235]"></div>
              
              {/* Content Card */}
              <div className="bg-white dark:bg-[#24273D] p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200/60 dark:border-gray-700/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  {exp.period && (
                    <span className="inline-flex items-center text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                      <FaCalendarAlt className="mr-1.5 text-xs" />
                      {exp.period}
                    </span>
                  )}
                </div>

                <div className="text-sm md:text-base font-semibold text-[#c45f30] dark:text-yellow-500 mb-3 flex items-center">
                  <FaBriefcase className="mr-2 text-xs" />
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">
                      {exp.company}
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[26px]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Spectrum */}
      <div className="mt-16">
        <h3 className="text-[17px] lg:text-xl text-[#c45f30] dark:text-yellow-500 font-bold my-3 text-center py-6">Skill Spectrum: Development</h3>
        <div className="sm:flex justify-between flex-wrap">
          {developmentSkills.map(({ skill, percentage }) => (
            <SkillBar key={skill} skill={skill} percentage={percentage} />
          ))}
        </div>

        <h3 className="text-[17px] lg:text-xl text-[#c45f30] dark:text-yellow-500 font-bold my-3 text-center py-6">Skill Spectrum: Designing</h3>
        <div className="sm:flex justify-between flex-wrap">
          {designSkills.map(({ skill, percentage }) => (
            <SkillBar key={skill} skill={skill} percentage={percentage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;