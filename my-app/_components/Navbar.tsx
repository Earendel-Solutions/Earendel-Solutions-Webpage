export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Portfolio</h1>

        <div className="flex items-center gap-8 text-white font-medium">
          <a
            href="#home"
            className="transition-all duration-300 hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition-all duration-300 hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#services"
            className="transition-all duration-300 hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#contact"
            className="transition-all duration-300 hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
