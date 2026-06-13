import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-indigo-500/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-violet-500/40 via-blue-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-20 bg-gradient-to-b from-indigo-500/5 to-transparent blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 border-b border-indigo-500/5 pb-10">
          <div className="space-y-2 max-w-sm">
            <h3 className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-200 select-none">
              Earendel
              <span className="text-indigo-400/60 font-normal ml-1">
                Solutions
              </span>
            </h3>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Crafting premium high-performance digital experiences and elegant
              systems architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-400 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/project"
              className="text-slate-400 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-slate-400 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-slate-400 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-medium text-slate-500">
          <div>© 2026 Earendel Solutions. All rights reserved.</div>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-indigo-400/80 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-indigo-400/80 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
