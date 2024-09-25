interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
    imagePosition: 'left' | 'right';
    aos?: string;  // Add the AOS animation prop
  }
  
  export default function ServiceCard({ title, description, link, image, imagePosition, aos }: ServiceCardProps) {
    return (
      <div 
        className={`flex flex-col md:flex-row ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''} items-center space-y-8 md:space-y-0`} 
        data-aos={aos} // Apply AOS animation here
      >
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">{description}</p>
          <a href={link} className="text-blue-600 font-medium underline hover:text-blue-800 transition-all duration-300">Learn more</a>
        </div>
  
        {/* Image */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    );
  }
  