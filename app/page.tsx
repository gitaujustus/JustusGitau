
// import About from '@/components/aboutme';
// import Contacts from '@/components/contact';
// import Experience from '@/components/experinces';
// import Herosection from '@/components/hero-section';
// import Portfolio from '@/components/portifolio';
// import ServicesSection from '@/components/services';
// import TestimonialCarousel from '@/components/testimonials';
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-[#24273D] mt-16">
//       <main>
//         <section id="home" >
//           <Herosection/>
//         </section>

//         <section id="about" >
//           <About/>
//         </section>

//         <section id="services" >
//           <ServicesSection/>
//         </section>

//         <section id="experiences" >
          
//           <Experience/>
//         </section>

//         <section id="projects">
//           <Portfolio/>
//         </section>
//         <section id="testimonials">
//           <TestimonialCarousel/>
//         </section>
//         <section id="contacts">
//          <Contacts/>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import About from '@/components/aboutme';
import Contacts from '@/components/contact';
import Experience from '@/components/experinces';
import Herosection from '@/components/hero-section';
import Portfolio from '@/components/portifolio';
import ServicesSection from '@/components/services';
import TestimonialCarousel from '@/components/testimonials';
// import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppButton from '@/components/whatsAppBtn';  
import FloatingActionButton from '@/components/floatingBtn';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#24273D] mt-16">
      <main>
        <section id="home">
          <Herosection/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="services">
          <ServicesSection/>
        </section>

        <section id="experiences">
          <Experience/>
        </section>

        <section id="projects">
          <Portfolio/>
          <div className='text-center my-7 text-[14px] md:text-base lg:text-lg px-2'>Interested in Similar Solutions For Your Business? Let&apos;s discuss how i can help. <a href="#contacts" className='underline italic text-blue-600'>Contact Me</a> today!</div>
        </section>

        <section id="testimonials">
          <TestimonialCarousel/>
        </section>

        <section id="contacts">
          <Contacts/>
        </section>
      </main>

      
      <FloatingActionButton />
    </div>
  );
};

export default HomePage;