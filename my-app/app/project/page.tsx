import ProjectGallery from "./_components/ProjectGallery";

const projectsData = [
  {
    id: 1,
    title: "School Management System",
    description: "A comprehensive offline-first platform for educational institutions to manage student data, attendance, and administration.",
    category: "Web Application",
  },
  {
    id: 2,
    title: "University Management",
    description: "A comprehensive offline-first platform for educational institutions to manage student data, attendance, and administration.",
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Earendel Analytics",
    description: "Real-time data visualization dashboard engineered for high-frequency trading matrices.",
    category: "AI Solutions",
  },
  {
    id: 4,
    title: "Nexus API Gateway",
    description: "A high-performance routing architecture for distributed microservices.",
    category: "Systems Architecture",
  },
  
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black py-24 relative overflow-hidden">

      {/* Ambient Background Glow (rendered on server) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* Static Header Section */}
      <header className="text-center mb-20 px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] pb-2 tracking-tight">
          Checkout Our Work
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
          Explore our latest deployments and digital assets engineered for the modern web.
        </p>
      </header>

      {/* Interactive Gallery Component */}
      <ProjectGallery projects={projectsData} />

    </main>
  );
}