export default async function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-screen flex flex-row gap-4 p-20 items-center justify-center bg-gray-900">
        <div className="pl-48 flex flex-col justify-center border border-red-400 w-full h-full">
          <div>Available for Q3 Projects</div>
          <div className="text-white text-7xl font-bold">
            Transforming Ideas into Powerful Digital Solutions
          </div>
          <div>
            We build stable, high-performance web ecosystems, custom mobile
            applications, and enterprise cloud solutions that help ambitious
            startups grow.
          </div>
          <div></div>
        </div>
        <div className="border border-red-400 w-full h-full"></div>
      </div>
    </div>
  );
}
