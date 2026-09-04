import { techColorClasses } from "@/lib/techColors";

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
          <div
            key={group.label}
            className="md:grid md:grid-cols-[14rem_minmax(0,1fr)] md:items-center md:gap-8"
          >
            <h3 className="w-40 shrink-0 text-base text-zinc-500 md:w-auto md:whitespace-nowrap md:text-lg">
              {group.label}
            </h3>
            <ul className="mt-3 flex min-w-0 flex-wrap gap-2 md:mt-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-full border px-3.5 py-1 text-sm transition-colors ${techColorClasses(item)}`}
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
