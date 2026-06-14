"use client";

export default function CTA() {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative group w-full text-center py-32 px-6 sm:px-12 overflow-hidden z-0">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-purple-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] mb-6 pb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,0.95)]">
        Ready to bring your idea to life?
      </h2>
      
      <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
        Let's talk about your project and figure out the best path forward — no
        commitment required.
      </p>
      
      <button
        onClick={scrollToForm}
        className="bg-purple-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0"
      >
        Book a Free Consultation
      </button>
      
    </div>
  );
}