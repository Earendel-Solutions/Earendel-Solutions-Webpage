"use client";

import Navbar from "@/_components/Navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
      <Navbar />
      <div className="text-3xl font-medium animate-bounce underline bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
        Home Page
      </div>
    </div>
  );
}
