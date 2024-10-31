'use client'
import { notFound } from 'next/navigation';
//import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import directly from 'swiper' 
import 'swiper/swiper-bundle.css';

interface Project {
  id: number;
  title: string;
  description: string;
  media: string[];
  content: string[];
  client: string;
  location: string;
  duration: string;
  completionDate: string;
}

const projectsData: Project[] = [


    {
        id: 1,
        title: 'Modern Villa',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/downloads/construction2.jpg',
          '/downloads/villa-video.mp4',
          '/downloads/villa-2.jpg',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },
      {
        id: 6,
        title: 'Kenol',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/kenol/KENKENOL01.jpg',
          '/kenol/KENKENOL03.jpg',
          '/kenol/KENKENOL07.jpg',
          '/kenol/KENKENOL09.jpg',
          '/kenol/KENKENOL12.jpg',
          '/kenol/KENKENOL18.jpg',
          '/kenol/vid.mp4',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },

      {
        id: 7,
        title: 'Kinangop',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/kinangop/kinangop1.jpg',
          '/kinangop/kinangop2.jpg',
          '/kinangop/Kinangop5.jpg',
         '/kinangop/kinangop7.jpg',
          '/kinangop/kinangop9.jpg',
          '/kinangop/kinangop10.jpg',
          '/kenol/kin.mp4',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },


      {
        id: 8,
        title: 'Mitunguu',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/Mitunguu/m1.jpg',
         '/Mitunguu/m2.jpg',
          '/Mitunguu/m3.jpg',
         '/Mitunguu/m4.jpg',
        '/Mitunguu/m5.jpg',
          '/Mitunguu/m6.jpg',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },

      {
        id: 8,
        title: 'Winners GYM',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/gym/g1.jpg',
         '/gym/22.jpg',
          '/gym/g3.jpg',
         '/gym/g4.jpg',
        '/gym/g5.jpg',
          '/gym/g6.jpg',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },

      {
        id: 9,
        title: 'Bungalow',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/bungalow/JAMES01.jpg',
         '/bungalow/JAMES02.jpg',
          '/bungalow/JAMES03.jpg',
         '/bungalow/JAMES04.jpg',
        '/bungalow/JAMES05.jpg',
         '/bungalow/JAMES06.jpg',
        ],
        content: [
          'Designed for energy efficiency with solar panels.',
          'Incorporated sustainable materials throughout the construction.',
          'Features an open floor plan with panoramic views.',
          'Completed within budget and ahead of schedule.',
        ],
        client: 'ABC Construction',
        location: 'California, USA',
        duration: '12 months',
        completionDate: 'June 2023',
      },
    
    


  // Project data remains unchanged
];

interface ProjectDetailsProps {
    params: {
      id: string;
    };
  }
  
  export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const projectId = parseInt(params.id, 10);
    const project = projectsData.find((p) => p.id === projectId);
  
    if (!project) {
      return notFound();
    }
  
   
  
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div
          className="relative h-[300px] md:h-[500px] bg-gray-200 flex items-center justify-center text-white transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${project.media[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute z-10 text-center px-4">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-wide animate-fadeIn">
              {project.title}
            </h1>
          </div>
        </div>
  
        {/* Project Details Section */}
        <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
            {project.title}
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-600 text-center">
            {project.description}
          </p>
  
          {/* Carousel for Images and Videos */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="w-full h-[250px] md:h-[400px] rounded-lg shadow-lg border border-gray-300"
              >
                {project.media.map((url, index) => (
                  <SwiperSlide key={index} className="relative h-full">
                    {url.endsWith('.mp4') ? (
                      <video className="w-full h-full object-cover" controls>
                        <source src={url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={url}
                        alt={`${project.title} slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Project Details</h3>
              <p className="text-md md:text-lg mb-2">
                <strong>Client:</strong> {project.client}
              </p>
              <p className="text-md md:text-lg mb-2">
                <strong>Location:</strong> {project.location}
              </p>
              <p className="text-md md:text-lg mb-2">
                <strong>Duration:</strong> {project.duration}
              </p>
              <p className="text-md md:text-lg mb-2">
                <strong>Completion Date:</strong> {project.completionDate}
              </p>
            </div>
          </div>
        </div>
  
        {/* Key Highlights Section */}
        <div className="bg-white py-8 md:py-16">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Key Highlights
            </h3>
            <ul className="list-disc list-inside text-center md:text-left">
              {project.content.map((point, index) => (
                <li key={index} className="text-md md:text-lg mb-2">{point}</li>
              ))}
            </ul>
          </div>
        </div>
  
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease-in-out;
          }
        `}</style>
      </div>
    );
  }