import WarpName from "@/components/WarpName";
import QuoteReveal from "@/components/about/QuoteReveal";
import HomeGradualBlur from "@/components/home/HomeGradualBlur";
import Timeline from "@/components/about/Timeline";

const aboutText =
  "From a young age I didn't really know what I wanted to be growing up. Literally up until Senior High I still didn't know what job or field I wanted to be in. Since 11 years old I was just playing countless hours of Team Fortress 2 and playing peak CS:GO in 2015. I wanted to be a professional esport player at the time and almost did so in 2022 in Valorant, but decided to back off due to total burn out and disappearance of passion of playing competitive games.";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-[8rem]">
        <section>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          About Me
        </h1>
        <p className="mt-6 max-w-[65ch] leading-relaxed text-zinc-300">
          {aboutText}
        </p>
      </section>

      <Timeline />

      <section className="mt-32">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Inspirations
          </h2>
        </section>

        <section className="mt-16 text-center md:w-2/3">
          <h3 className="sr-only">Linus Torvalds</h3>
          <WarpName text="Linus Torvalds" />
          <p className="text-sm text-zinc-500">Creator of Linux and Git</p>
          <QuoteReveal quote="I saw it as a solution to my problems." />
        </section>

        <section className="mt-40 text-center sm:mt-56 md:ml-auto md:w-2/3">
          <h3 className="sr-only">Terry Davis</h3>
          <WarpName text="Terry Davis" />
          <p className="text-sm text-zinc-500">1969 - 2018</p>
          <QuoteReveal quote="An idiot admires complexity, a genius admires simplicity." />
        </section>

        <section className="mt-32 border-t border-zinc-800/60 pt-16">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            Salvatore Sanfilippo
          </h3>
          <p className="mt-6 max-w-[65ch] leading-relaxed text-zinc-300">
            Similar to Linus with Git and Linux, some projects and tools are not
            built to impress the world. They are built to solve problems based
            on what is actually needed.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800/60 pt-16">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            David Heinemeier Hansson (a.k.a. DHH)
          </h3>
          <p className="mt-6 max-w-[65ch] leading-relaxed text-zinc-300">
            Never forget to be enthusiastic in the world of Programming. Have
            some fun, be joyous, be unapologetically enthusiastic about the new,
            current, and future technology.
          </p>
        </section>
      </main>
      <HomeGradualBlur />
    </>
  );
}
