const groups = [
  {
    label: "Languages",
    items: ["Python", "Go", "Java"],
  },
  {
    label: "Frameworks & Data",
    items: ["Spring Boot", "React", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    label: "Cloud & Tools",
    items: ["AWS", "Azure", "Linux", "Git", "GitHub", "Jira"],
  },
];

export default function TechStack() {
  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20">
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.label} className="md:flex md:gap-8">
            <h3 className="w-40 shrink-0 text-sm text-zinc-500">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-0 md:flex-1">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-800 px-3.5 py-1 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
