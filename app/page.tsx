import WarpHeading from "@/components/WarpHeading";
import HomeGradualBlur from "@/components/home/HomeGradualBlur";
import Intro from "@/components/home/Intro";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Education from "@/components/home/Education";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col items-center justify-center space-y-4 px-6 pt-[6rem] text-center">
        <h1 className="sr-only">Christian Esguerra</h1>
        <WarpHeading />
        <p className="text-base text-zinc-400 sm:text-lg">
          4th year Computer Science Student
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-sm text-zinc-400">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            aria-hidden
          />
          Open to internships
        </span>
      </section>
      <div className="mx-auto max-w-3xl px-6 pb-8">
        <Intro />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </div>
      <HomeGradualBlur />
    </>
  );
}
