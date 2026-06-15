import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090514] border-t border-purple-950/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 via-purple-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-20 bg-gradient-to-b from-purple-500/5 to-transparent blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 border-b border-purple-950/20 pb-10">
          <div className="space-y-2 max-w-sm">
            <h3 className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-fuchsia-200 select-none">
              Earendel
              <span className="text-purple-400/60 font-normal ml-1">
                Solutions
              </span>
            </h3>
            <p className="text-sm text-purple-200/50 font-medium leading-relaxed">
              Crafting premium high-performance digital experiences and elegant
              systems architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-medium">
            <Link
              href="/"
              className="text-purple-200/60 hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/project"
              className="text-purple-200/60 hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-purple-200/60 hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-purple-200/60 hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-medium text-purple-300/40">
          <div>© 2026 Earendel Solutions. All rights reserved.</div>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-purple-400/80 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-purple-400/80 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
