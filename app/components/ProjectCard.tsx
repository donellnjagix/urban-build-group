import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Image
        src={image}
        alt={title}
        width={500}  // Specify the width you need
        height={192} // Specify the height based on your layout
        className="w-full h-48 object-cover mb-4 rounded-md" // Keep the class names for styling
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
