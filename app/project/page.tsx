'use client';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProjectCard from '@/app/components/PCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Service' | 'Individual';
  status: 'Ongoing' | 'Finished'; // Added status field
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Building Works',
    description: 'A luxurious modern villa featuring cutting-edge architecture and sustainable materials.',
    image: '/downloads/construction2.jpg',
    category: 'Service',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Doors and Windows',
    description: 'A high-rise office complex located in the heart of the city, offering premium commercial space.',
    image: '/downloads/construction3.jpg',
    category: 'Individual',
    status: 'Finished',
  },
  {
    id: 3,
    title: 'Finishes',
    description: 'A landmark bridge construction project designed for enhanced transportation and connectivity.',
    image: '/downloads/construction4.jpg',
    category: 'Service',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Fit Outs',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/downloads/construction4.jpg',
    category: 'Individual',
    status: 'Finished',
  },
  {
    id: 5,
    title: 'Civil Works',
    description: 'Road infrastructure improvement projects for better connectivity.',
    image: '/downloads/construction4.jpg',
    category: 'Service',
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'Kenol',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/new/KENOL.jpg',
    category: 'Individual',
    status: 'Finished',
  },
  {
    id: 7,
    title: 'Kinangop',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/new/KINANGOP.jpg',
    category: 'Individual',
    status: 'Finished',
  },
  {
    id: 8,
    title: 'Mitunguu',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/new/MITUNGU.jpg',
    category: 'Individual',
    status: 'Finished',
  },
  {
    id: 9,
    title: 'Winners Gym',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/new/GYM.jpg',
    category: 'Individual',
    status: 'Finished',
  },

  {
    id: 10,
    title: 'Bungalow',
    description: 'A unique interior design for residential and commercial spaces.',
    image: '/new/JAMES02.jpg',
    category: 'Individual',
    status: 'Finished',
  },

];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Service' | 'Individual'>('All');

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div>
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/project.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide">Our Projects</h1>
          <p className="text-lg tracking-wide font-light max-w-xl mx-auto">
            Discover some of our completed projects, showcasing quality and excellence in construction.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded ${selectedCategory === 'All' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('Service')}
            className={`px-4 py-2 rounded ${selectedCategory === 'Service' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Service
          </button>
          <button
            onClick={() => setSelectedCategory('Individual')}
            className={`px-4 py-2 rounded ${selectedCategory === 'Individual' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Individual
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              status={project.status} // Pass status to ProjectCard
              aos="fade-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
