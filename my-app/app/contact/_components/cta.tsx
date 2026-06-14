"use client";

export default function CTA() {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-center py-20 px-4">
      <h2 className="text-5xl font-bold text-white mb-4">
        Ready to bring your idea to life?
      </h2>
      <p className="text-white/80 mb-8 max-w-md mx-auto ">
        Let's talk about your project and figure out the best path forward — no
        commitment required.
      </p>
      <button
        onClick={scrollToForm}
        className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-xl transition-all"
      >
        Book a Free Consultation
      </button>
    </div>
  );
}
