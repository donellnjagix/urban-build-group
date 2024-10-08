'use client';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function RenovationsRemodeling() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/downloads/construction3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide">Renovations & Remodeling</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Transforming Spaces, Revitalizing Homes</h2>
        <p className="text-lg mb-8 text-gray-600 leading-relaxed" data-aos="fade-up">
          Whether it&apos;s updating a single room or a complete property overhaul, we have the expertise to bring new life into your existing spaces. Our remodeling services range from kitchens and bathrooms to entire floor plan redesigns.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-gray-800" data-aos="fade-up">What We Do:</h3>
        <ul className="list-disc list-inside mb-8 text-lg text-gray-600" data-aos="fade-up">
          <li>Kitchen and bathroom remodeling</li>
          <li>Interior and exterior renovations</li>
          <li>Home additions and extensions</li>
        </ul>
        <div className="text-center">
          <a href="/contact" className="inline-block px-8 py-3 bg-gold text-white font-semibold rounded-md" data-aos="fade-up">
            Let&apos;s Revitalize Your Space
          </a>
        </div>
      </div>
    </div>
  );
}
