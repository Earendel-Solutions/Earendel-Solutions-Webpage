"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer UI/UX Design, AI Solutions, Automation, Web Application development, Website Development, and Consultation services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A simple website takes 2–4 weeks, while a full web application can take 2–3 months.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the consultation form above and we'll get back to you within 24 hours to discuss your project.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer maintenance and support packages to keep your product running smoothly after launch.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We price per project based on scope and complexity. Book a free consultation and we'll give you a detailed quote.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-6 sm:px-12 text-center rounded-3xl backdrop-blur-md bg-black/40 ring-1 ring-purple-500/30 transition-all duration-500 ease-in-out [box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.4),inset_0_-1px_0_0_rgba(168,85,247,0.1),inset_1px_0_0_0_rgba(168,85,247,0.2),inset_-1px_0_0_0_rgba(168,85,247,0.2),0_0_24px_0_rgba(168,85,247,0.15)] hover:ring-purple-400/60 hover:[box-shadow:inset_0_1px_0_0_rgba(168,85,247,0.6),inset_0_-1px_0_0_rgba(168,85,247,0.2),inset_1px_0_0_0_rgba(168,85,247,0.3),inset_-1px_0_0_0_rgba(168,85,247,0.3),0_0_60px_8px_rgba(168,85,247,0.35),0_0_120px_16px_rgba(168,85,247,0.15)]">
      <h2 className="text-5xl md:text-5xl lg:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-white via-purple-200 to-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] mb-4 pb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-white/70 mb-12 text-lg md:text-xl font-light">
        Everything you need to know before getting started.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-purple-500/50 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium outline-none"
              >
                <span className="text-[1.1rem] tracking-wide">
                  {faq.question}
                </span>
                <span
                  className={`text-purple-400 text-2xl font-light transition-transform duration-300 ease-in-out flex-shrink-0 ml-4 ${
                    isOpen
                      ? "rotate-45 text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-5"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 text-[#c2c6d6] text-[0.95rem] text-left leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
