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
    <div className="w-full max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-white/70 mb-8 text-1xl">
        Everything you need to know before getting started.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium hover:bg-white/5 transition"
            >
              {faq.question}
              <span className="text-purple-400 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-[#c2c6d6] text-sm mt-1">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
