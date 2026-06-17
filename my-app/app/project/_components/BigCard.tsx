"use client";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
};

type Props = {
  project: Project;
};

export default function BigCard({ project }: Props) {
  return (
    // 1. Root Container: Removed hardcoded heights/widths. Added premium glow.
    <div className=" w-full mx-auto p-6 md:p-10 rounded-3xl backdrop-blur-md bg-black/40 ring-1 ring-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      {/* Left Column: Text & Secondary Image */}
      <div className="flex flex-col flex-1 space-y-6 lg:justify-center">
        
        {/* Title and Category */}
        <div>
          {project.category && (
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
              {project.category}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] tracking-tight pb-1">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-[#c2c6d6] text-lg leading-relaxed max-w-xl">
          {project.description}
        </p>

        {/* Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent my-2" />

        {/* Secondary Image Placeholder (Bottom Left) */}
        <div className="w-full h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative group">
          {/* Subtle hover effect for the placeholder */}
          <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="text-white/30 font-medium tracking-widest text-sm uppercase">
            Secondary Image
          </span>
        </div>

      </div>

      {/* Right Column: Main Big Image */}
      <div className="flex-1 min-h-[300px] lg:min-h-[500px]">
        {/* Main Image Placeholder */}
        <div className="w-full h-full rounded-3xl bg-purple-500/5 border border-purple-500/20 shadow-[inset_0_0_50px_rgba(168,85,247,0.05)] flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-50"></div>
          <span className="text-purple-300/40 font-medium tracking-widest text-sm uppercase">
            Main Feature Image
          </span>
        </div>
      </div>

    </div>
  );
}