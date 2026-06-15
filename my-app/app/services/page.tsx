import {Cloud,Cat} from "lucide-react";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: Cloud,
      description:
        "Modern, responsive, and scalable websites built using the latest technologies.",
    },
    {
      title: "Android Development",
      icon: Cloud,
      description:
        "High-performance Android applications designed for seamless user experiences.",
    },
    {
      title: "UI/UX Design",
      icon: Cat,
      description:
        "Intuitive and visually appealing interfaces focused on usability and engagement.",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description:
        "Cloud infrastructure, deployment automation, and scalable DevOps solutions.",
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500  mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Technology solutions that help businesses grow, innovate, and scale.
        </p>

        <div className="h-svh grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 text-white rounded-3xl backdrop-blur-md bg-black/40 ring-1 ring-purple-500/30 transition-all duration-500 ease-in-out [box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.4),inset_0_-1px_0_0_rgba(168,85,247,0.1),inset_1px_0_0_0_rgba(168,85,247,0.2),inset_-1px_0_0_0_rgba(168,85,247,0.2),0_0_24px_0_rgba(168,85,247,0.15)] hover:ring-purple-400/60 hover:[box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.6),inset_0_-1px_0_0_rgba(168,85,247,0.2),inset_1px_0_0_0_rgba(168,85,247,0.3),inset_-1px_0_0_0_rgba(168,85,247,0.3),0_0_60px_8px_rgba(168,85,247,0.35),0_0_120px_16px_rgba(168,85,247,0.15)] h-full flex flex-col justify-center"
            >
              <service.icon/>
              <h3 className="text-xl font-semibold text-purple-500 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
