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
      icon: <BadgeCheck className="w-5 h-5 text-blue-400" />,
      title: "Experienced Team",
      description:
        "Decades of technical leadership across seed-to-scale platforms.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: "Modern Stack",
      description: "Applying only long-term stable, modern packages and SDKs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: "Security First",
      description: "Built-in safeguards protecting data layers from day zero.",
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      title: "Agile Delivery",
      description: "Rapid visual prototyping and bi-weekly production cycles.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen border min-h-screen flex xl:flex-row flex-col gap-4 xl:px-28 xl:items-center xl:justify-center bg-[#030712]">
        <div className="xl:pl-40 px-4 py-36 text-white xl:py-14 xl:pr-10 flex flex-col gap-12 xl:gap-10 justify-center xl:w-1/2 h-full">
          <h1 className="text-5xl md:text-6xl xl:text-[4rem] font-black tracking-tighter text-white leading-[1.1] group select-none xl:pr-28">
            Transforming Ideas into <br className="sm:hidden" />{" "}
            <span className="inline-block bg-linear-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_35px_rgba(99,102,241,.7)]">
              Powerful Digital Solutions
            </span>
          </h1>
          <div className="text-gray-400 xl:text-xl">
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>
          <div className="flex gap-4 justify-between xl:justify-normal">
            <Link
              href="/contact"
              className="group relative flex items-center xl:gap-3 px-2 py-4 xl:px-8 xl:py-4 font-semibold text-white rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden xl:text-sm text-xs"
            >
              Get A Free Consultation
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1.5 ml-2 xl:ml-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/project"
              className="flex items-center justify-center xl:text-sm text-xs py-4 px-5 xl:px-8 xl:py-4 font-semibold text-slate-300 rounded-2xl bg-[#030712]/50 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800/50 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="hidden xl:flex relative xl:w-1/2 h-[600px] items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-violet-500/20 rounded-full blur-[60px]" />

          <div className="absolute top-16 lg:top-12 lg:right-28 w-72 h-48 bg-[#030712]/60 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 shadow-[0_0_40px_rgba(99,102,241,0.1)] transform rotate-3 transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto">
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

          <div className="absolute top-4 lg:top-24 left-2 px-4 py-2 bg-[#030712]/60 backdrop-blur-md border border-blue-400/20 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4 animate-[bounce_4s_infinite] pointer-events-auto">
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

      <section className="bg-[#030712] text-white min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 antialiased">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Engineered for{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                We don't merely write lines of code; we construct digital
                foundations built to support rapid scaling, bank-grade
                encryption, and zero-defect compliance over time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b0f19]/40 border border-slate-800/60 rounded-xl p-5 hover:border-slate-700/60 transition-colors duration-300 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-md bg-slate-900/50 border border-slate-800/40">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-slate-200 tracking-wide text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed pl-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 h-full flex items-center justify-center w-full">
            <div className="w-full bg-[#090d16]/60 border border-slate-800/70 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col items-center text-center justify-center min-h-[420px] lg:min-h-[460px]">
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                <Terminal className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-4">
                Scale-to-Zero Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                We leverage modern hosting pipelines to deliver sub-second
                performance globally while maintaining cost efficacy.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-1.5 bg-[#0e1424]/80 border border-indigo-500/20 rounded-md text-xs font-mono tracking-wider text-indigo-300">
                  SSL Secure
                </span>
                <span className="px-4 py-1.5 bg-[#0e1424]/80 border border-indigo-500/20 rounded-md text-xs font-mono tracking-wider text-indigo-300">
                  Auto-Scaling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8 antialiased">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 px-6 py-16 text-center shadow-2xl sm:px-12 md:py-20 lg:px-16">
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Ready to Build Your Next Digital{" "}
                <br className="hidden sm:inline" /> Product?
              </h2>

              <p className="text-slate-900/80 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
                Let's map out your systems. Chat with our solutions architect
                tool, <br className="hidden md:inline" />
                scope estimations, and see how Project Genesis drives growth.
              </p>

              <div className="pt-4">
                <Link
                  href={"contact"}
                  type="button"
                  className="bg-[#0e121e] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/10 shadow-lg hover:bg-[#161b2c] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-3 bg-white/10 backdrop-blur-md border-t border-white/5" />
          </div>
        </div>
      </section>
    </div>
  );
}
