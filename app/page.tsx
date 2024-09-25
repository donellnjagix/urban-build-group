'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <div>
      {/* Hero Section - Video as Background */}
      <section className="hero relative bg-blue-900 text-white py-32">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video/image3_animation (1).mp4" // Replace with your video path
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/30 z-10"></div>

        {/* Content on top of the video */}
        <div className="relative container mx-auto px-6 text-center z-20">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4" data-aos="fade-up">
            Reshaping the East African Construction Landscape
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Urban Build Group is a consortium of four leading construction companies dedicated to innovation and excellence.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-900" data-aos="fade-up">
            About Urban Build Group
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="100">
            Urban Build Group is dedicated to reshaping the construction landscape across East Africa by leveraging our collective experience, expertise, and resources.
          </p>
          <p className="text-lg leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="200">
            Our goal is to enhance communities, drive economic growth, and deliver sustainable projects that benefit future generations.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-900" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Residential Construction", desc: "We build quality residential properties tailored to our clients’ visions." },
              { title: "Commercial Construction", desc: "From offices to industrial facilities, we deliver projects that meet the highest standards." },
              { title: "Renovations and Remodeling", desc: "We enhance the functionality and value of properties through expert renovations." },
              { title: "Civil Engineering", desc: "Our team handles infrastructure projects like roads, bridges, and utilities." },
              { title: "Fundraising Assistance", desc: "We help secure funding through our network of investors and financial institutions." },
              { title: "Real Estate Marketing", desc: "Our marketing team promotes real estate projects for maximum visibility and returns." }
            ].map((service, index) => (
              <div
                key={index}
                className="service-item bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Contact Us for Your Construction Needs
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Let Urban Build Group bring your construction project to life with our expertise and dedication to quality.
          </p>
          <Link href="/contact" legacyBehavior>
            <a
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold shadow-lg transition hover:bg-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Get in Touch
            </a>
          </Link>
        </div>
      </section>

      {/* Add your custom styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero {
            padding: 16rem 0;
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
