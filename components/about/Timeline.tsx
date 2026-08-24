type TimelineEntry = {
  year: string;
  description: string;
};

const entries: TimelineEntry[] = [
  {
    year: "2017-2019",
    description:
      "This is where I first discovered programming, well if you can count HTML on a notepad as one. It was for my IT Class back in Junior High School and we just made simple websites. We eventually evolved to also use CSS but mainly for these 3 years just regular Notepad with HTML+CSS with nothing much else."
  },
  {
    year: "2021",
    description:
      "In Senior High, I got re introduced to programming for another IT Class, but this time it was regular Java on a web compiler. We made some basic stuff like creating a tree out of * but again, nothing much else and at the time it hadn't really piqued my interest."
  },
  {
    year: "2022",
    description:
      "This is when I finally got the interest into the world of coding and programming. For our final term in Senior High we were given options to pick electives that would represent different courses in college. So kinda like an intro to college if you will. I chose the IT/Computer Science elective and strayed away from ABM (Accountancy, Business, Management) class. Fair to say I enjoyed my time here and from here I decided to go all in on Computer Science, with thought of  everything runs on computers, so why not be part of that industry  and a gut feeling that tech will be the future."
  },
  {
    year: "2023 - Present",
    description:
      "Throughout my 4 years in Computer Science has been a surreal experience. Experiencing the birth of AI to the public and then seeing it evolve throughout my time here in college has been pretty cool to say the least. I have learned so much, yet, there is much to learn. Internship here we go!"
  }
];

export default function Timeline() {
  return (
    <section className="mt-20">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        Timeline
      </h2>
      <ol className="mt-10 ml-2 space-y-12 border-l border-zinc-800/60">
        {entries.map((entry) => (
          <li className="relative pl-8" key={entry.year}>
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-zinc-950"
              aria-hidden="true"
            />
            <h3 className="font-heading text-xl font-bold tracking-tight text-zinc-100">
              {entry.year}
            </h3>
            <p className="mt-3 max-w-[60ch] whitespace-pre-wrap leading-relaxed text-zinc-400">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
