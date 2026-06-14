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
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-400";

    return `${baseClass} ${activeClass} after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 ${
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-wide bg-linear-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent select-none">
          Earendel
          <span className="font-light tracking-widest text-xs uppercase block text-blue-300/80 -mt-1 pl-0.5">
            Solutions
          </span>
        </h1>

        <div className="hidden md:flex items-center gap-8 font-medium">
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-white hover:text-blue-400 focus:outline-none p-2 z-50"
          aria-label="Toggle menu"
        >
          {/* Centered, balanced box proportions */}
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

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 h-[calc(100dvh-4rem)] z-40 overflow-y-auto touch-none">
          <div className="flex flex-col items-start justify-start px-8 py-12 space-y-8 text-lg">
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
        </div>
      )}
    </nav>
  );
}
