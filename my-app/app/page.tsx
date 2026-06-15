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
      <div className="w-screen border-b border-purple-950/30 py-16 min-h-screen flex xl:flex-row flex-col gap-4 xl:px-28 xl:items-center xl:justify-center bg-[#090514]">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center gap-8 md:gap-10 px-4 sm:px-8 md:px-12 xl:pl-20 xl:pr-10 py-16 md:py-24 xl:py-14 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-black tracking-tighter text-white leading-[1.1] group select-none max-w-3xl xl:pr-12">
            Transforming Ideas into <br className="sm:hidden" />{" "}
            <span className="inline-block bg-linear-to-r from-purple-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,.6)]">
              Powerful Digital Solutions
            </span>
          </h1>

          <div className="text-purple-200/60 text-base md:text-lg xl:text-xl max-w-2xl leading-relaxed">
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start">
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
        <div className="hidden xl:flex relative xl:w-1/2 h-[600px] items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-fuchsia-500/15 rounded-full blur-[60px]" />

          <div className="absolute top-16 lg:top-12 lg:right-28 w-72 h-48 bg-[#0c071c]/70 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 shadow-[0_0_40px_rgba(168,85,247,0.08)] transform rotate-3 transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto">
            <div className="flex items-center justify-between border-b border-purple-500/10 pb-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-950" />
                <div className="w-2.5 h-2.5 rounded-full bg-purple-950" />
                <div className="w-2.5 h-2.5 rounded-full bg-purple-950" />
              </div>
              <div className="h-2 w-16 bg-purple-900/40 rounded-full" />
            </div>
            <div className="flex gap-3">
              <div className="w-1/3 h-24 bg-purple-950/40 rounded-lg border border-purple-900/20" />
              <div className="w-2/3 space-y-2">
                <div className="h-8 w-full bg-purple-500/10 border border-purple-500/20 rounded-lg" />
                <div className="h-4 w-3/4 bg-purple-950/60 rounded-md" />
                <div className="h-4 w-1/2 bg-purple-950/60 rounded-md" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-4 w-40 h-72 bg-[#0c071c]/80 backdrop-blur-xl border border-fuchsia-500/20 rounded-[2rem] p-3 shadow-[0_0_50px_rgba(217,70,239,0.1)] transform -rotate-6 transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#0c071c] rounded-b-xl border-b border-x border-fuchsia-500/20 z-10" />

            <div className="w-full h-full bg-linear-to-b from-purple-950/40 to-[#090514] rounded-2xl border border-purple-900/30 p-4 pt-8 flex flex-col gap-3">
              <div className="h-8 w-8 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center mb-2">
                <svg
                  className="w-4 h-4 text-fuchsia-400"
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
              <div className="h-3 w-3/4 bg-purple-900/40 rounded-full" />
              <div className="h-3 w-1/2 bg-purple-900/40 rounded-full" />

              <div className="mt-auto h-24 w-full bg-gradient-to-t from-fuchsia-500/20 to-transparent rounded-lg border border-fuchsia-500/10" />
            </div>
          </div>

          <div className="absolute top-4 lg:top-24 left-2 px-4 py-2 bg-[#0c071c]/70 backdrop-blur-md border border-purple-400/30 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4 animate-[bounce_4s_infinite] pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-purple-200">
              API Connected
            </span>
          </div>

          <div className="absolute bottom-24 right-28 px-4 py-3 bg-[#0c071c]/80 backdrop-blur-md border border-purple-900/60 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-2 pointer-events-auto transition-transform hover:-translate-y-1">
            <svg
              className="w-5 h-5 text-purple-400"
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
              <div className="h-1.5 w-12 bg-purple-950 rounded-full" />
              <div className="h-1.5 w-8 bg-purple-900 rounded-full" />
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-purple-950 px-6 py-16 text-center shadow-2xl transition-all duration-500 border border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-500/40 sm:px-12 md:py-20 lg:px-16">
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
                  href={"contact"}
                  className="bg-[#090514] text-purple-200 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-purple-500/30 shadow-lg hover:bg-[#120a24] hover:text-white hover:border-purple-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
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
