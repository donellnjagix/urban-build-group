// Header Component
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Import icons

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300); // Delay before closing
  };

  return (
    <header className="bg-white shadow-md p-4 z-50 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.webp" alt="Logo" width={50} height={50} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-black hover:text-gray-600">Home</a>
          <a href="/about" className="text-black hover:text-gray-600">About</a>
          
          {/* Services Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          >
            <a 
              href="/services" 
              className="text-black hover:text-gray-600 flex items-center"
            >
              Services <FiChevronDown className="ml-1" />
            </a>
            <div 
              className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 transition-opacity duration-300 ease-in-out z-50 ${
                isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <a href="/services/residential-construction" className="block px-4 py-2 text-black hover:bg-gray-100">Residential Construction</a>
              <a href="/services/commercial-construction" className="block px-4 py-2 text-black hover:bg-gray-100">Commercial Construction</a>
              <a href="/services/renovations-remodeling" className="block px-4 py-2 text-black hover:bg-gray-100">Renovations and Remodeling</a>
              <a href="/services/civil-engineering" className="block px-4 py-2 text-black hover:bg-gray-100">Civil Engineering</a>
              <a href="/services/fundraising-assistance" className="block px-4 py-2 text-black hover:bg-gray-100">Fundraising Assistance</a>
              <a href="/services/real-estate-marketing" className="block px-4 py-2 text-black hover:bg-gray-100">Real Estate Marketing</a>
            </div>
          </div>

          <a href="/contact" className="text-black hover:text-gray-600">Contact</a>
          {/* Contact Us Button */}
          <button className="bg-gold text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-gold-600 ml-4">
            <FiPhone className="text-white" />
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          <a href="/" className="block text-black hover:text-gray-600">Home</a>
          <a href="/about" className="block text-black hover:text-gray-600">About</a>
          
          {/* Services Dropdown for Mobile */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="block text-black hover:text-gray-600 w-full text-left flex items-center"
            >
              Services <FiChevronDown className="ml-1" />
            </button>
            {isServicesDropdownOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-md p-4 z-50">
                <a href="/services/residential-construction" className="block px-4 py-2 text-black hover:bg-gray-100">Residential Construction</a>
                <a href="/services/commercial-construction" className="block px-4 py-2 text-black hover:bg-gray-100">Commercial Construction</a>
                <a href="/services/renovations-remodeling" className="block px-4 py-2 text-black hover:bg-gray-100">Renovations and Remodeling</a>
                <a href="/services/civil-engineering" className="block px-4 py-2 text-black hover:bg-gray-100">Civil Engineering</a>
                <a href="/services/fundraising-assistance" className="block px-4 py-2 text-black hover:bg-gray-100">Fundraising Assistance</a>
                <a href="/services/real-estate-marketing" className="block px-4 py-2 text-black hover:bg-gray-100">Real Estate Marketing</a>
              </div>
            )}
          </div>

          <a href="/contact" className="block text-black hover:text-gray-600">Contact</a>
          {/* Contact Us Button */}
          <button className="bg-gold text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gold-600 w-full justify-center">
            <FiPhone className="text-white" />
            <span>Contact Us</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
