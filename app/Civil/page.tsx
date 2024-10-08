'use client';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CivilEngineering() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/downloads/civil.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide">Civil Engineering</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Infrastructure for Community Development</h2>
        <p className="text-lg mb-8 text-gray-600 leading-relaxed" data-aos="fade-up">
          Our civil engineering services include the design and construction of infrastructure projects such as roads, bridges, and utility systems. We partner with municipalities and private entities to ensure safe and reliable infrastructure for communities.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-gray-800" data-aos="fade-up">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-8 text-lg text-gray-600" data-aos="fade-up">
          <li>Road and highway construction</li>
          <li>Bridges and overpasses</li>
          <li>Water and sewage systems</li>
        </ul>
        <div className="text-center">
          <a href="/contact" className="inline-block px-8 py-3 bg-gold text-white font-semibold rounded-md" data-aos="fade-up">
            Contact Us for Your Next Project
          </a>
        </div>
      </div>
    </div>
  );
}
