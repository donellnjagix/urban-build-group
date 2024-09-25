'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/image2.png')`, 
        }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">About Urban Build Group</h1>
          <p className="text-lg">Reshaping the construction landscape across East Africa.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
          <p className="text-lg mb-6">
            Urban Build Group is a collaborative venture comprising four construction companies: 
            <strong>Travaux Ltd</strong>, <strong>EV Banks Ltd</strong>, <strong>Spyro Enterprises</strong>, and 
            <strong>Brick&Allied Ltd</strong>.
          </p>
          <p className="text-lg mb-6">
            Together, we are dedicated to reshaping the construction landscape across East Africa, leveraging collective 
            experience, expertise, and resources.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="core-value-item bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p>We are committed to delivering exceptional quality in every aspect of our work.</p>
            </div>
            <div className="core-value-item bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p>We conduct our business with honesty, transparency, and high ethical standards.</p>
            </div>
            <div className="core-value-item bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p>We embrace cutting-edge technologies to improve efficiency, sustainability, and cost-effectiveness.</p>
            </div>
            <div className="core-value-item bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-4">Customer Satisfaction</h3>
              <p>We prioritize our clients&apos; needs, communicate openly, and exceed their expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Companies */}
      <section className="team-section py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Meet Our Companies</h2>
          <p className="text-lg mb-8" data-aos="fade-up">
            Each company brings its own unique set of skills to the consortium, offering comprehensive solutions to drive 
            sustainable growth and community enrichment.
          </p>

          {/* Companies Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="company bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-semibold mb-4">Travaux Ltd</h3>
              <p>Specializes in premium construction solutions, focusing on both residential and commercial projects.</p>
            </div>
            <div className="company bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4">EV Banks Ltd</h3>
              <p>Provides tailored architectural solutions that inspire ambitious developments.</p>
            </div>
            <div className="company bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-4">Spyro Enterprises</h3>
              <p>Offers holistic real estate services, with a focus on sustainability and community-driven projects.</p>
            </div>
            <div className="company bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-4">Brick&Allied Ltd</h3>
              <p>Focuses on real estate marketing and financial planning, using innovative strategies to maximize visibility and engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
