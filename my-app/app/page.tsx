import { ArrowRightIcon, Circle, LoaderPinwheel } from "lucide-react";

export default async function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-screen flex flex-row gap-4 p-20 items-center justify-center bg-gray-900">
        <div className="pl-52 text-white pr-28 flex flex-col gap-8 justify-center w-full h-full">
          <div className="flex justify-center items-center gap-3 border border-gray-600 bg-blue-950 w-64 rounded-2xl p-1 text-white font-bold">
            <LoaderPinwheel className="animate-ping size-3" />
            Available for Q3 Projects
          </div>
          <div className="text-7xl group font-bold">
            Transforming Ideas into{" "}
            <span
              className="bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.8)]
  "
            >
              Powerful Digital Solutions
            </span>
          </div>
          <div className="text-gray-400 text-xl">
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>
          <div className="flex gap-4">
            <button className="flex flex-row group p-4 gap-2 font-medium rounded-2xl bg-linear-to-r from-blue-600 to-purple-800">
              Get A Free Consultation
              <ArrowRightIcon className="text-white group-hover:rotate-180 transition-transform duration-500 ease-out" />
            </button>
            <button className="border border-gray-800 hover:border-gray-700 font-medium py-4 px-6 rounded-2xl">
              View Our Work
            </button>
          </div>
        </div>
        <div className=" w-full h-full"></div>
      </div>
    </div>
  );
}
