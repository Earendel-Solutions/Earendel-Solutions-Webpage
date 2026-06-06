import Contact from "./_components/contact";
import Home from "./_components/home";
import Projects from "./_components/projects";
import Services from "./_components/services";

export default async function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <Home />

      <Projects />

      <Services />

      <Contact />
    </div>
  );
}
