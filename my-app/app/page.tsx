import { ArrowRightIcon, Circle, LoaderPinwheel } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen min-h-screen flex flex-row gap-4 px-28 py-36 items-center justify-center bg-[#030712]">
        <div className="pl-40 text-white pr-10 flex flex-col gap-8 justify-center w-full h-full">
          <div className="flex justify-center items-center gap-3 border border-gray-600 bg-blue-950 w-64 rounded-2xl p-1 text-white font-bold">
            <LoaderPinwheel className="animate-ping size-3" />
            Available for Q3 Projects
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] group select-none pr-28">
            Transforming Ideas into{" "}
            <span className="block sm:inline bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_35px_rgba(99,102,241,0.6)]">
              Powerful Digital Solutions
            </span>
          </h1>
          <div className="text-gray-400 text-xl">
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
              Get A Free Consultation
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/project"
              className="flex items-center justify-center px-8 py-4 font-semibold text-slate-300 rounded-2xl bg-[#030712]/50 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800/50 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-violet-500/20 rounded-full blur-[60px]" />

          <div className="absolute top-12 right-28 w-72 h-48 bg-[#030712]/60 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 shadow-[0_0_40px_rgba(99,102,241,0.1)] transform rotate-3 transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto">
            <div className="flex items-center justify-between border-b border-indigo-500/10 pb-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <div className="h-2 w-16 bg-slate-800 rounded-full" />
            </div>
            <div className="flex gap-3">
              <div className="w-1/3 h-24 bg-slate-800/50 rounded-lg border border-slate-700/30" />
              <div className="w-2/3 space-y-2">
                <div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded-lg" />
                <div className="h-4 w-3/4 bg-slate-800/80 rounded-md" />
                <div className="h-4 w-1/2 bg-slate-800/80 rounded-md" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-4 w-40 h-72 bg-[#030712]/80 backdrop-blur-xl border border-violet-500/20 rounded-[2rem] p-3 shadow-[0_0_50px_rgba(139,92,246,0.15)] transform -rotate-6 transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#030712] rounded-b-xl border-b border-x border-violet-500/20 z-10" />

            <div className="w-full h-full bg-linear-to-b from-slate-900 to-[#030712] rounded-2xl border border-slate-800/50 p-4 pt-8 flex flex-col gap-3">
              <div className="h-8 w-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-2">
                <svg
                  className="w-4 h-4 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="h-3 w-3/4 bg-slate-700/50 rounded-full" />
              <div className="h-3 w-1/2 bg-slate-700/50 rounded-full" />

              <div className="mt-auto h-24 w-full bg-gradient-to-t from-violet-500/20 to-transparent rounded-lg border border-violet-500/10" />
            </div>
          </div>

          <div className="absolute top-24 left-2 px-4 py-2 bg-[#030712]/60 backdrop-blur-md border border-blue-400/20 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4 animate-[bounce_4s_infinite] pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-blue-200">
              API Connected
            </span>
          </div>

          <div className="absolute bottom-24 right-28 px-4 py-3 bg-[#030712]/70 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-2 pointer-events-auto transition-transform hover:-translate-y-1">
            <svg
              className="w-5 h-5 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <div className="h-1.5 w-12 bg-slate-600 rounded-full" />
              <div className="h-1.5 w-8 bg-slate-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
