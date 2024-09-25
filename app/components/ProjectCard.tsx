interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
  }
  
  export default function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  