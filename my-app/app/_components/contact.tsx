"use client";

import Footer from "@/_components/Footer";

export default function Contact() {
  return (
    <div className="w-screen relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-black">
      <div className="text-3xl font-medium animate-bounce underline bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
        Contact Page
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
