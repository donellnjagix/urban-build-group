'use client'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ServiceCard from "@/app/components/ServiceCard"; // Make sure the path is correct based on your project structure


export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/image2.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide">Our Services</h1>
          <p className="text-lg tracking-wide font-light max-w-xl mx-auto">Building quality and excellence for every project, with attention to detail and a focus on your vision.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">Explore Our Expertise</h2>
        <div className="space-y-16">
          <ServiceCard 
            title="Residential Construction" 
            description="From single-family homes to multi-unit developments, we build quality properties reflecting your vision." 
            link="/services/residential-construction"
            image="/downloads/houses.jpg" 
            imagePosition="right"
            aos="fade-up" // Add the AOS attribute here
          />
          <ServiceCard 
            title="Commercial Construction" 
            description="We deliver high-functionality commercial buildings, offices, and retail spaces." 
            link="/services/commercial-construction"
            image="/downloads/construction2.jpg" 
            imagePosition="left"
            aos="fade-up"
          />
             <ServiceCard 
            title="Renovations and Remodeling" 
            description="Breathing new life into properties through our renovation and remodeling expertise." 
            link="/services/renovations-remodeling"
            image="/downloads/construction3.jpg" 
            imagePosition="right"
            aos="fade-up"
          />
          <ServiceCard 
            title="Civil Engineering" 
            description="Infrastructure projects including roads, bridges, and utilities for community development." 
            link="/services/civil-engineering"
            image="/downloads/civil.jpg" 
            imagePosition="left"
            aos="fade-up"
          />
          <ServiceCard 
            title="Fundraising Assistance" 
            description="Providing financial support through our network of investors and institutions." 
            link="/services/fundraising-assistance"
            image="/downloads/fund.jpg" 
            imagePosition="right"
            aos="fade-up"
          />
          <ServiceCard 
            title="Real Estate Marketing" 
            description="Promoting real estate projects effectively through innovative marketing strategies." 
            link="/services/real-estate-marketing"
            image="/downloads/land.jpg" 
            imagePosition="left"
            aos="fade-up"
          />



          {/* Continue with the other service cards */}
        </div>
      </div>
    </div>
  );
}
