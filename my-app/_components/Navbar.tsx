"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    const baseClass = "relative px-1 py-2 transition-colors duration-300";

    const activeClass = isActive
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-400";

    return `${baseClass} ${activeClass} after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 ${isActive ? "after:origin-bottom-left after:scale-x-100" : "hover:after:origin-bottom-left hover:after:scale-x-100"}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-wide bg-linear-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent select-none">
          Earendel
          <span className="font-light tracking-widest text-xs uppercase block text-blue-300/80 -mt-1 pl-0.5">
            Solutions
          </span>
        </h1>

        <div className="flex items-center gap-8 font-medium">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>

          <Link href="/project" className={getLinkClass("/project")}>
            Projects
          </Link>

          <Link href="/services" className={getLinkClass("/services")}>
            Services
          </Link>

          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
