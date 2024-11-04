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
            <strong> Travaux Ltd</strong>, <strong>EV Banks Ltd</strong>, <strong>Spyro Enterprises</strong>, and 
            <strong> Brick&Allied Ltd</strong>.
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
            Each company brings its own unique set of skills to the consortium, offering comprehensive solutions to drive sustainable growth and community enrichment.
          </p>

          {/* Companies Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Card */}
            {[
              {
                name: 'Travaux Ltd',
                description: 'Specializes in premium construction solutions, focusing on both residential and commercial projects.',
                imgSrc: '/logo/trav.jpg',
                link: 'https://www.ujenzisolutions.co.ke/',
              },
              {
                name: 'EV Banks Ltd',
                description: 'Provides tailored architectural solutions that inspire ambitious developments.',
                imgSrc: 'logo/ev.jpg',
                link: '#',
              },
              {
                name: 'Spyro Enterprises',
                description: 'Offers holistic real estate services, with a focus on sustainability and community-driven projects.',
                imgSrc: '/logo/spryo.jpg',
                link: '#',
              },
              {
                name: 'Brick&Allied Ltd',
                description: 'Focuses on real estate marketing and financial planning, using innovative strategies to maximize visibility and engagement.',
                imgSrc: '/logo/brick.jpg',
                link: 'https://brickandallied.co.ke/',
              },
            ].map((company, index) => (
              <a
                key={index}
                href={company.link}
                className="company bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:scale-105 relative group"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <img src={company.imgSrc} alt={`${company.name} Logo`} className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{company.description}</p>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </a>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
