'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 
        className="text-4xl font-bold mb-8 text-center text-gray-800"
        data-aos="fade-up"
      >
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-16">
        {/* Contact Form */}
        <div 
          className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 shadow-lg rounded-lg" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h2 
            className="text-2xl font-semibold text-gray-700 mb-6 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                placeholder="Your Name"
                required 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                placeholder="Your Email"
                required 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                rows={5} 
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Details */}
        <div 
          className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-8 shadow-lg rounded-lg" 
          data-aos="fade-up" 
          data-aos-delay="900"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Company Details</h2>
          <p className="text-gray-600"><span className="font-medium">Email:</span> : urbanbuildconsult@gmail.com          </p>
          <p className="text-gray-600 mt-2"><span className="font-medium">Phone:</span> +254703987774</p>
          <p className="text-gray-600 mt-2"><span className="font-medium">Address:</span> Skyrise Business Center, Western Heights, Westlands</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon-Fri: 9 AM - 6 PM</p>
            <p className="text-gray-600">Sat: 10 AM - 2 PM</p>
            <p className="text-gray-600">Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
