import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Luxury Apartments - Nairobi" description="A residential project offering high-end living spaces." image="/images/luxury-apartments.jpg" />
          <ProjectCard title="Business Tower - Kampala" description="Commercial project designed for top-tier business spaces." image="/images/business-tower.jpg" />
          {/* Add more project cards */}
        </div>
      </div>
    );
  }
  