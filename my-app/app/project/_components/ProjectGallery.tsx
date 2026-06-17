"use client";

import { useEffect, useState } from "react";
import BigCard from "./BigCard";

// 1. Added optional imageUrl to the Project type
type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string; 
};

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeProjectId !== null ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProjectId]);

  const activeProject = projects.find((p) => p.id === activeProjectId) ?? null;

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* The Grid of Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className="group flex flex-col items-start p-6 sm:p-8 rounded-3xl backdrop-blur-md bg-black/40 ring-1 ring-purple-500/30 transition-all duration-500 ease-in-out cursor-pointer [box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.4),inset_0_-1px_0_0_rgba(168,85,247,0.1),inset_1px_0_0_0_rgba(168,85,247,0.2),inset_-1px_0_0_0_rgba(168,85,247,0.2),0_0_24px_0_rgba(168,85,247,0.15)] hover:ring-purple-400/60 hover:[box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.6),inset_0_-1px_0_0_rgba(168,85,247,0.2),inset_1px_0_0_0_rgba(168,85,247,0.3),inset_-1px_0_0_0_rgba(168,85,247,0.3),0_0_60px_8px_rgba(168,85,247,0.35),0_0_120px_16px_rgba(168,85,247,0.15)] hover:-translate-y-2"
          >
            
            {/* 2. Image / Asset Container */}
            <div className="w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden relative bg-purple-500/5 border border-white/10 group-hover:border-purple-500/30 transition-colors duration-300 shrink-0">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-purple-600/10 to-transparent opacity-50">
                  <span className="text-purple-300/40 font-medium tracking-widest text-xs uppercase">
                    Project Image
                  </span>
                </div>
              )}
            </div>

            {/* Category Tag */}
            <span className="px-4 py-1 text-xs font-bold text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
              {project.category}
            </span>

            <h3 className="font-extrabold tracking-tight text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-500 mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              {project.title}
            </h3>

            <p className="text-[#c2c6d6] text-base leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* The Modal Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out ${
          activeProjectId !== null ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveProjectId(null)}
      >
        {/* Modal Container */}
        <div
          className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl bg-black/60 ring-1 ring-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)] transition-all duration-500 ease-out transform ${
            activeProjectId !== null ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close Button */}
          <button
            onClick={() => setActiveProjectId(null)}
            className="absolute top-6 right-6 z-[110] text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full p-2 transition-all duration-300 hover:rotate-90 hover:scale-110"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Render BigCard with the matched project */}
          {activeProject && <BigCard project={activeProject} />}

        </div>
      </div>

    </div>
  );
}