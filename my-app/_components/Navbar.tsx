"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    const baseClass =
      "relative px-1 py-2 transition-colors duration-300 block w-max";

    const activeClass = isActive
      ? "text-purple-400 font-semibold"
      : "text-purple-200/80 hover:text-purple-400";

    return `${baseClass} ${activeClass} after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-purple-400 after:transition-transform after:duration-300 ${
      isActive
        ? "after:origin-bottom-left after:scale-x-100"
        : "hover:after:origin-bottom-left hover:after:scale-x-100"
    }`;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#090514]/40 backdrop-blur-lg border-b border-purple-950/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex md:grid md:grid-cols-3 items-center justify-between">
        <div className="flex justify-start">
          <Link href="/" className="block group">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-linear-to-r from-purple-400 via-fuchsia-200 to-white bg-clip-text text-transparent select-none">
              Earendel
              <span className="font-light tracking-widest text-[10px] md:text-xs uppercase block text-purple-300/80 -mt-0.5 pl-0.5 transition-colors duration-300 group-hover:text-purple-400">
                Solutions
              </span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/contact"
            className="group hidden relative lg:flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white rounded-3xl bg-linear-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden text-xs sm:text-sm w-full sm:w-auto"
          >
            Get Consultation
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-purple-200 hover:text-purple-400 focus:outline-none p-2 z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-[2px] bg-current transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-current transition-all duration-300 origin-center ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-current transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 md:hidden bg-[#090514]/95 backdrop-blur-xl border-t border-purple-950/40 h-[calc(100dvh-5rem)] z-40 overflow-y-auto touch-none flex flex-col justify-between">
          <div className="flex flex-col items-start justify-start px-8 py-10 space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getLinkClass(link.href)} text-xl tracking-wide`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-8 border-t border-purple-950/40 bg-[#0c071c]/50">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-fuchsia-600 py-4 rounded-xl shadow-lg shadow-purple-950/50"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
