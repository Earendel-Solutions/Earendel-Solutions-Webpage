export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
        <div>
          <h3 className="text-lg font-semibold text-white">Your Portfolio</h3>
          <p className="text-sm mt-1">
            Building beautiful digital experiences.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
