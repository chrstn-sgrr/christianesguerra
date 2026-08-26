import WarpHeading from "@/components/WarpHeading";
import HomeGradualBlur from "@/components/home/HomeGradualBlur";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Education from "@/components/home/Education";
import Contact from "@/components/home/Contact";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col items-center justify-center space-y-4 px-6 pt-[6rem] text-center">
        <h1 className="sr-only">Christian Esguerra</h1>
        <WarpHeading />
        <div className="translate-y-4 space-y-4">
          <p className="text-base text-zinc-400 sm:text-lg">
            Based in Manila, Philippines 🇵🇭.<br />
            Specialization in Cloud, Backend Engineering, & AI Engineering.
          </p>
          <ContactCta />
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-6 pb-8">
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </div>
      <HomeGradualBlur />
    </>
  );
}
