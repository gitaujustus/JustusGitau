
import About from '@/components/aboutme';
import Contacts from '@/components/contact';
import Experience from '@/components/experinces';
import Gallery from '@/components/graphicswork';
import GraphicDesigns from '@/components/graphicswork';
import Herosection from '@/components/hero-section';
import Portfolio from '@/components/portifolio';
import Projects from '@/components/projects';
import ServicesSection from '@/components/services';
import TestimonialCarousel from '@/components/testimonials';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#24273D] mt-16">
      <main>
        <section id="home" >
          <Herosection/>
        </section>

        <section id="about" >
          <About/>
        </section>

        <section id="services" >
          <ServicesSection/>
        </section>

        <section id="experiences" >
          
          <Experience/>
        </section>

        <section id="projects">
          {/* <Projects/> */}
          <Portfolio/>
          {/* <Gallery/> */}
        </section>
        <section id="testimonials">
          <TestimonialCarousel/>
        </section>
        <section id="contacts">
         <Contacts/>
        </section>
      </main>
    </div>
  );
};

export default HomePage;