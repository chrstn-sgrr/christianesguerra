export default function Education() {
  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20">
      <h2 className="font-heading text-2xl font-bold tracking-tight">
        Education
      </h2>
      <div className="mt-10 space-y-8">
        <article>
          <h3 className="font-heading text-xl font-bold tracking-tight text-zinc-100">
            Asia Pacific College
          </h3>
          <p className="mt-2 max-w-[60ch] leading-relaxed text-zinc-400">
            Bachelor of Science, Computer Science
          </p>
          <time className="block mt-2 text-sm text-zinc-500" dateTime="2023-07/2027-08">
            Jul 2023 - Aug 2027
          </time>
        </article>
        <article>
          <div className="border-t border-zinc-800/60 pt-8">
            <h3 className="font-heading text-xl font-bold tracking-tight text-zinc-100">
              Asia Pacific College
            </h3>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-zinc-400">
              Senior High School, Accountancy Business Management
            </p>
            <time className="block mt-2 text-sm text-zinc-500" dateTime="2021-08/2023-06">
              Aug 2021 - Jun 2023
            </time>
          </div>
        </article>
      </div>
    </section>
  );
}