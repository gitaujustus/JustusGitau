
import About from '@/components/aboutme';
import Contacts from '@/components/contact';
import Experience from '@/components/experinces';
import Herosection from '@/components/hero-section';
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
          <Projects/>
        </section>
        <section id="projects">
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