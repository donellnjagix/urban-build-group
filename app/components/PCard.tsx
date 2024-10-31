import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string; // Added status property
  aos?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, status, aos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative" data-aos={aos}>
      
      {/* Ribbon for Status */}
      <div className={`absolute top-2 left-2 z-20 px-3 py-1 text-xs font-bold text-white rounded ${status === 'Ongoing' ? 'bg-yellow-500' : 'bg-green-500'}`}>
        {status}
      </div>

      <div className="relative h-64 bg-cover bg-center z-10" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="p-6 z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/project/${id}`}>
          <span className="text-blue-500 hover:underline">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
