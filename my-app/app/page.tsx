import {
  ArrowRightIcon,
  BadgeCheck,
  Rocket,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const features = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-purple-400" />,
      title: "Experienced Team",
      description:
        "Decades of technical leadership across seed-to-scale platforms.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-fuchsia-400" />,
      title: "Modern Stack",
      description: "Applying only long-term stable, modern packages and SDKs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: "Security First",
      description: "Built-in safeguards protecting data layers from day zero.",
    },
    {
      icon: <Zap className="w-5 h-5 text-fuchsia-400" />,
      title: "Agile Delivery",
      description: "Rapid visual prototyping and bi-weekly production cycles.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#090514]">
      <div className="w-full border-b border-purple-950/30 min-h-screen flex xl:flex-row flex-col gap-12 xl:gap-6 px-4 sm:px-8 md:px-16 xl:px-24 items-center justify-center bg-[#090514] py-24 md:py-32 xl:py-20 overflow-x-hidden">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center gap-8 md:gap-10 max-w-3xl xl:max-w-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-black tracking-tighter text-white leading-[1.1] group select-none xl:pr-8">
            Transforming Ideas into <br className="sm:hidden" />{" "}
            <span className="inline-block bg-linear-to-r from-purple-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,.6)]">
              Powerful Digital Solutions
            </span>
          </h1>

          <div className="text-purple-200/60 text-md md:text-lg xl:text-xl max-w-2xl leading-relaxed">
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 px-6 py-4 font-semibold text-white rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden text-xs sm:text-sm w-full sm:w-auto"
            >
              <span>Get A Free Consultation</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0" />
            </Link>

            <Link
              href="/project"
              className="flex items-center justify-center text-xs sm:text-sm py-4 px-6 font-semibold text-purple-200 rounded-2xl bg-[#120a24]/50 backdrop-blur-md border border-purple-500/20 hover:bg-purple-950/40 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="group hidden xl:flex relative xl:w-1/2 h-[500px] items-center justify-center pointer-events-none select-none mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] transition-all duration-1000 group-hover:bg-purple-500/30 group-hover:scale-125" />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-fuchsia-500/15 rounded-full blur-[80px] transition-all duration-1000 group-hover:bg-fuchsia-400/25 group-hover:-translate-y-10 group-hover:scale-110" />

          <div
            className="group/window absolute top-12 right-20 w-80 h-48 bg-[#0c071c]/60 backdrop-blur-2xl 
    border-t border-l border-t-purple-400/30 border-l-purple-400/20 border-b border-r border-b-purple-900/50 border-r-purple-900/50 
    rounded-2xl p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5),_0_0_40px_rgba(168,85,247,0.08)] 
    transform rotate-[4deg] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.27)] 
    hover:rotate-0 hover:scale-105 hover:-translate-y-6 
    hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),_0_40px_80px_-20px_rgba(0,0,0,0.7),_0_20px_60px_rgba(168,85,247,0.2)] 
    pointer-events-auto z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            <div className="relative flex items-center justify-between border-b border-purple-500/10 pb-3 mb-4 transition-colors duration-500 group-hover/window:border-purple-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0c071c] border border-purple-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover/window:bg-red-400 group-hover/window:border-red-400" />
                <div className="w-3 h-3 rounded-full bg-[#0c071c] border border-purple-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 delay-75 group-hover/window:bg-yellow-400 group-hover/window:border-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-[#0c071c] border border-purple-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 delay-150 group-hover/window:bg-green-400 group-hover/window:border-green-400" />
              </div>
              <div className="h-2 w-16 bg-purple-900/40 rounded-full shadow-inner transition-all duration-500 group-hover/window:bg-purple-500/50 group-hover/window:w-20" />
            </div>

            <div className="relative flex gap-4 transform transition-transform duration-700 group-hover/window:translate-y-1">
              <div className="w-1/3 h-20 bg-gradient-to-br from-purple-900/40 to-purple-950/40 rounded-xl border border-purple-800/30 shadow-inner transition-all duration-500 group-hover/window:border-purple-500/40 group-hover/window:from-purple-800/40" />
              <div className="w-2/3 space-y-3">
                <div className="h-6 w-full bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-md transition-all duration-500 group-hover/window:from-purple-500/20" />
                <div className="h-3 w-3/4 bg-purple-900/60 rounded-md shadow-inner transition-all duration-500 delay-100 group-hover/window:w-full group-hover/window:bg-purple-700/80" />
                <div className="h-3 w-1/2 bg-purple-900/60 rounded-md shadow-inner transition-all duration-500 delay-200 group-hover/window:w-5/6 group-hover/window:bg-purple-700/80" />
              </div>
            </div>
          </div>

          <div
            className="group/phone absolute bottom-6 left-24 w-44 h-72 bg-[#0c071c]/70 backdrop-blur-2xl 
    border-t border-l border-t-fuchsia-400/30 border-l-fuchsia-400/20 border-b border-r border-b-fuchsia-900/50 border-r-fuchsia-900/50 
    rounded-[2.5rem] p-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),_0_20px_40px_-10px_rgba(0,0,0,0.5),_0_0_50px_rgba(217,70,239,0.08)] 
    transform -rotate-[6deg] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.27)] 
    hover:rotate-0 hover:scale-105 hover:-translate-y-6 hover:translate-x-2
    hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.25),_0_40px_80px_-20px_rgba(0,0,0,0.7),_0_20px_70px_rgba(217,70,239,0.25)] 
    pointer-events-auto z-30"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#080414] rounded-b-xl border-b border-x border-fuchsia-500/30 shadow-inner z-20 transition-colors duration-500 group-hover/phone:border-fuchsia-400/60" />

            <div className="relative w-full h-full bg-gradient-to-b from-purple-950/50 to-[#05020a] rounded-3xl border border-purple-900/40 p-4 pt-10 flex flex-col gap-4 overflow-hidden shadow-inner transition-colors duration-500 group-hover/phone:border-purple-500/50">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/30 flex items-center justify-center mb-1 shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover/phone:scale-110 group-hover/phone:-translate-y-2 group-hover/phone:from-fuchsia-500/40 group-hover/phone:shadow-[0_10px_25px_rgba(217,70,239,0.4)]">
                <svg
                  className="w-5 h-5 text-fuchsia-400 transition-colors duration-500 group-hover/phone:text-fuchsia-200"
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

              <div className="transform transition-transform duration-500 group-hover/phone:translate-y-1 space-y-3">
                <div className="h-2.5 w-3/4 bg-purple-900/50 rounded-full shadow-inner transition-all duration-500 group-hover/phone:w-full group-hover/phone:bg-purple-600/60" />
                <div className="h-2.5 w-1/2 bg-purple-900/50 rounded-full shadow-inner transition-all duration-500 delay-100 group-hover/phone:w-4/5 group-hover/phone:bg-purple-600/60" />
              </div>

              <div className="mt-auto h-24 w-full bg-gradient-to-t from-fuchsia-500/20 via-fuchsia-500/5 to-transparent rounded-xl border-b border-fuchsia-500/20 transition-all duration-700 group-hover/phone:h-32 group-hover/phone:from-fuchsia-500/40 group-hover/phone:border-fuchsia-400/50" />
            </div>
          </div>

          <div
            className="group/api absolute top-28 left-20 px-4 py-2.5 bg-[#0c071c]/70 backdrop-blur-xl 
    border-t border-l border-t-purple-400/40 border-l-purple-400/20 border-b border-r border-b-purple-900/60 border-r-purple-900/60 
    rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_10px_20px_-5px_rgba(0,0,0,0.5)] 
    flex items-center gap-3 transform animate-[bounce_6s_ease-in-out_infinite] transition-all duration-500 
    hover:scale-110 hover:-translate-y-2 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_20px_40px_-10px_rgba(0,0,0,0.7),_0_0_30px_rgba(168,85,247,0.3)] 
    hover:bg-[#150b2e]/90 pointer-events-auto z-40 cursor-pointer"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 group-hover/api:bg-fuchsia-300 group-hover/api:opacity-100 transition-colors duration-300"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover/api:bg-fuchsia-400 transition-colors duration-300"></span>
            </div>
            <span className="text-xs font-bold tracking-wider text-purple-200/90 transition-colors duration-300 group-hover/api:text-white uppercase">
              API Active
            </span>
          </div>

          <div
            className="group/badge absolute bottom-24 right-28 px-5 py-4 bg-[#0c071c]/70 backdrop-blur-xl 
    border-t border-l border-t-purple-400/40 border-l-purple-400/20 border-b border-r border-b-purple-900/60 border-r-purple-900/60 
    rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_15px_30px_-10px_rgba(0,0,0,0.5)] 
    flex items-center gap-4 transform transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.27)] 
    hover:-translate-y-4 hover:-translate-x-2 hover:scale-110 
    hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_25px_50px_-15px_rgba(0,0,0,0.7),_0_0_30px_rgba(168,85,247,0.25)] 
    hover:bg-[#150b2e]/90 pointer-events-auto z-40 cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 shadow-inner transition-all duration-500 group-hover/badge:from-purple-500/30 group-hover/badge:border-purple-400/40">
              <svg
                className="w-5 h-5 text-purple-400 transition-transform duration-700 group-hover/badge:rotate-[360deg] group-hover/badge:text-purple-200"
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
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-1.5 w-14 bg-purple-900/80 rounded-full shadow-inner transition-all duration-500 group-hover/badge:w-20 group-hover/badge:bg-purple-400" />
              <div className="h-1.5 w-8 bg-purple-900/60 rounded-full shadow-inner transition-all duration-500 delay-100 group-hover/badge:w-12 group-hover/badge:bg-purple-500/90" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#090514] text-white min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 antialiased">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Engineered for{" "}
                <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-purple-200/60 text-lg leading-relaxed max-w-2xl">
                We don't merely write lines of code; we construct digital
                foundations built to support rapid scaling, bank-grade
                encryption, and zero-defect compliance over time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#110b24]/40 border border-purple-950/60 rounded-xl p-5 hover:border-purple-800/40 transition-colors duration-300 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-md bg-purple-950/60 border border-purple-900/30">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-purple-100 tracking-wide text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-purple-200/50 text-sm leading-relaxed pl-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 h-full flex items-center justify-center w-full">
            <div className="w-full bg-[#110b24]/40 border border-purple-950/60 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-sm flex flex-col items-center text-center justify-center min-h-[420px] lg:min-h-[460px]">
              <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-900/50 flex items-center justify-center mb-6 shadow-inner">
                <Terminal className="w-5 h-5 text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-purple-100 mb-4">
                Scale-to-Zero Architecture
              </h3>
              <p className="text-purple-200/60 text-sm leading-relaxed max-w-sm mb-8">
                We leverage modern hosting pipelines to deliver sub-second
                performance globally while maintaining cost efficacy.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-1.5 bg-[#170e30]/80 border border-purple-500/20 rounded-md text-xs font-mono tracking-wider text-purple-300">
                  SSL Secure
                </span>
                <span className="px-4 py-1.5 bg-[#170e30]/80 border border-purple-500/20 rounded-md text-xs font-mono tracking-wider text-purple-300">
                  Auto-Scaling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#090514] text-white py-16 px-4 sm:px-6 lg:px-8 antialiased">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-2xl transition-all duration-500 border border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,.4)] hover:border-purple-500/40 sm:px-12 md:py-20 lg:px-16">
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Ready to Build Your Next Digital{" "}
                <br className="hidden sm:inline" /> Product?
              </h2>

              <p className="text-purple-200/80 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
                Let's map out your systems. Chat with our solutions architect
                tool, <br className="hidden md:inline" />
                scope estimations, and see how Project Genesis drives growth.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-purple-600 text-white font-bold text-lg px-10 py-3 rounded-3xl transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-[5px] active:scale-[0.98] active:translate-y-0"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-3 bg-purple-500/10 backdrop-blur-md border-t border-purple-500/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
