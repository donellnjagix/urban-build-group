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
        title: 'Building Works',
        description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
        media: [
          '/downloads/construction2.jpg',
          '/downloads/villa-interior.jpg',
          '/downloads/villa-video.mp4',
        ],
        content: [
          'Incorporates sustainable materials and energy-efficient systems.',
          'Designed for high-end residential living with expansive layouts.',
          'Features modern, eco-friendly architecture and design.',
          'Project ongoing with advanced structural work completed.',
        ],
        client: 'XYZ Architects',
        location: 'Malibu, USA',
        duration: '18 months',
        completionDate: 'Expected December 2024',
      },
      {
        id: 2,
        title: 'Doors and Windows',
        description: 'A high-rise office complex located in the heart of the city, offering premium commercial space.',
        media: [
          '/downloads/construction3.jpg',
          '/downloads/office-exterior.jpg',
          '/downloads/office-video.mp4',
        ],
        content: [
          'Completed with top-quality materials and finishes.',
          'Enhanced natural lighting with floor-to-ceiling windows.',
          'Equipped with noise-cancellation doors and energy-efficient glass.',
          'Completed within timeline and exceeds safety standards.',
        ],
        client: 'Urban Development Corp.',
        location: 'New York, USA',
        duration: '24 months',
        completionDate: 'September 2023',
      },
      {
        id: 3,
        title: 'Finishes And Fit Outs',
        description: 'A landmark bridge construction project designed for enhanced transportation and connectivity.',
        media: [
          '/downloads/construction4.jpg',
          '/downloads/bridge-day.jpg',
          '/downloads/bridge-video.mp4',
          '/downloads/construction4.jpg',
          '/downloads/fitout-lobby.jpg',
          '/downloads/fitout-video.mp4',
        ],
        content: [
          'Innovative design enhancing structural stability and aesthetics.',
          'Features high-quality, weather-resistant finishes.',
          'Aims to support regional transport links and improve traffic flow.',
          'Ongoing with focus on surface finishing and final safety checks.',
        ],
        client: 'National Infrastructure Ltd.',
        location: 'Texas, USA',
        duration: '30 months',
        completionDate: 'Expected June 2025',
      },
     
      {
        id: 5,
        title: 'Civil Works',
        description: 'Road infrastructure improvement projects for better connectivity.',
        media: [
          '/downloads/construction4.jpg',
          '/downloads/road-project.jpg',
          '/downloads/road-video.mp4',
        ],
        content: [
          'Focuses on improving road safety and reducing travel time.',
          'Utilizes durable, low-maintenance materials for road surfacing.',
          'Ongoing works include widening lanes and adding pedestrian paths.',
          'Expected to enhance regional connectivity upon completion.',
        ],
        client: 'RoadWorks Global',
        location: 'Nairobi, Kenya',
        duration: '12 months',
        completionDate: 'Expected October 2024',
      },


      {
        id: 6,
        title: 'Kenol Villa',
        description: 'A stunning 4-bedroom villa spanning 165 sqm per level, designed with modern elegance and spacious living in mind.',
        media: [
          '/kenol/KENKENOL01.jpg',
          '/kenol/KENKENOL03.jpg',
          '/kenol/KENKENOL07.jpg',
          '/kenol/KENKENOL09.jpg',
          '/kenol/KENKENOL12.jpg',
          '/kenol/KENKENOL18.jpg',
          '/kenol/KENKENOL19.jpg',
          '/kenol/vid.mp4',
          '/kenol/vid22.mp4',
        ],
        content: [
          'Double volume lounge for an expansive living area.',
          'Open-plan lounge, dining, and kitchen, complete with pantry and laundry room.',
          '4 spacious bedrooms, each with ensuite bathrooms.',
          'Includes a home office and family room for added versatility.',
          'Cloakroom on the main floor.',
          'Roof terrace with pergolas, perfect for outdoor relaxation.',
        ],
        client: 'Individual Client',
        location: 'Kenol, Kenya',
        duration: '12 months',
        completionDate: 'June 2024',
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
        title: 'Commercial Rental Properties',
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
        id: 9,
        title: 'GYM',
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
        id: 10,
        title: '4 Bedroom Villa - Kithoka Meru',
        description: 'A beautiful 4-bedroom villa, spanning 145 sqm per floor, located in the serene Kithoka Estate, Meru. Built with modern architecture and comfort in mind.',
        media: [
          '/kithoka/k1.jpeg',
          '/kithoka/k2.jpeg',
          '/kithoka/k3.jpeg',
          '/kithoka/k4.jpeg',
          '/kithoka/k5.jpeg',
          '/kithoka/k6.jpeg',
        ],
        content: [
          'Spacious open-plan lounge, dining, and kitchen area for family gatherings.',
          'Double volume entry lobby offering a grand welcome.',
          'All bedrooms ensuite for added privacy and convenience.',
          'Includes a family room and dedicated prayer room.',
          'Features a roof terrace area for outdoor relaxation and gatherings.',
          'Constructed with a budget of 14.5 million KES.',
        ],
        client: 'Individual Client',
        location: 'Kithoka Estate, Meru, Kenya',
        duration: '24 months',
        completionDate: 'September 2024',
      },
      
      {
        id: 11,
        title: '5 Bedroom Villa - Kikuyu',
        description: 'A stunning 5-bedroom villa with a modern contemporary design, featuring natural stone accents. Each floor spans 150 sqm, creating a spacious and elegant living environment.',
        media: [
          '/kikuyu/vid1.mp4',
          '/kikuyu/vid2.mp4',
          '/kikuyu/vid3.mp4',
          '/kikuyu/kikuyu4.jpeg',
          '/kikuyu/kikuyu5.jpeg',
          '/kikuyu/kikuyu6.jpeg',
        ],
        content: [
          'All bedrooms ensuite, offering privacy and luxury.',
          'Lounge area with ample space for relaxation and gatherings.',
          'Double volume entry lobby that creates a grand entrance.',
          'Dining area open to the kitchen, fostering a seamless flow.',
          'Includes a pantry and dedicated gas chamber for convenience.',
          'Laundry area for practicality and organization.',
          'Features a cozy fireplace for added warmth and ambiance.',
        ],
        client: 'Individual Client',
        location: 'Kikuyu, Kenya',
        duration: '18 months',
        completionDate: 'December 2024',
      },


      {
        id: 12,
        title: 'Meru Bungalow',
        description: 'An upcountry 2-bedroom bungalow with an additional semi-detached bedsitter unit, covering 110 sqm space.',
        media: [
          '/meru/JAMES01.jpg',
          '/meru/JAMES02.jpg',
          '/meru/JAMES013.jpg',
          
        ],
        content: [
          'Designed to provide comfortable living with a focus on simplicity and functionality.',
          'Includes an additional bedsitter unit for guest accommodation or rental.',
          'Open-plan layout maximizing space and natural light.',
          'Concept project reflecting traditional architectural elements blended with modern touches.'
        ],
        client: 'Concept Design',
        location: 'Meru, Kenya',
        duration: 'N/A (Concept)',
        completionDate: 'N/A (Concept)'
      }
      
      
    


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