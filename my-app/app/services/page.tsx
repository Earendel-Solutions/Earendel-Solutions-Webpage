import { Globe, Smartphone, Palette, CloudCog, LucideIcon } from "lucide-react";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  imageUrl?: string;
};

export default function Services() {
  const services: Service[] = [
    {
      title: "Web Development",
      icon: Globe,
      description:
        "Modern, responsive, and scalable websites built using the latest technologies.",
      imageUrl: "/placeholder-web.jpg",
    },
    {
      title: "Android Development",
      icon: Smartphone,
      description:
        "High-performance Android applications designed for seamless user experiences.",
      imageUrl: "/placeholder-app.jpg",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description:
        "Intuitive and visually appealing interfaces focused on usability and engagement.",
      imageUrl: "/placeholder-design.jpg",
    },
    {
      title: "Cloud & DevOps",
      icon: CloudCog,
      description:
        "Cloud infrastructure, deployment automation, and scalable DevOps solutions.",
      imageUrl: "/placeholder-cloud.jpg",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] pb-2 tracking-tight">
            Services We Provide
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed text-center">
            Technology solutions that help businesses grow, innovate, and scale.
          </p>
        </div>

        {/* The Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 sm:p-8 text-white rounded-3xl backdrop-blur-md bg-black/40 ring-1 ring-purple-500/30 transition-all duration-500 ease-in-out cursor-default [box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.4),inset_0_-1px_0_0_rgba(168,85,247,0.1),inset_1px_0_0_0_rgba(168,85,247,0.2),inset_-1px_0_0_0_rgba(168,85,247,0.2),0_0_24px_0_rgba(168,85,247,0.15)] hover:ring-purple-400/60 hover:[box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.6),inset_0_-1px_0_0_rgba(168,85,247,0.2),inset_1px_0_0_0_rgba(168,85,247,0.3),inset_-1px_0_0_0_rgba(168,85,247,0.3),0_0_60px_8px_rgba(168,85,247,0.35),0_0_120px_16px_rgba(168,85,247,0.15)] hover:-translate-y-2 flex flex-col justify-start"
              >

                {/* Image Container with Overlapping Icon */}
                <div className="relative w-full h-48 sm:h-56 mb-10 rounded-2xl bg-purple-500/5 border border-white/10 group-hover:border-purple-500/30 transition-colors duration-300 shrink-0">

                  {/* The Image (or Placeholder) */}
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-purple-600/10 to-transparent opacity-50">
                        <span className="text-purple-300/40 font-medium tracking-widest text-xs uppercase">
                          Service Image
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Overlapping Glowing Icon Pod */}
                  <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-2xl bg-black border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500 group-hover:bg-purple-900/20 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:-translate-y-1 z-10">
                    <Icon className="w-8 h-8 text-purple-400 transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-300" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-500 mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  {service.title}
                </h3>

                <p className="text-[#c2c6d6] text-lg leading-relaxed">
                  {service.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}