type TechColorClasses = Record<string, string>;

export const techColors: TechColorClasses = {
  Python:
    "border-sky-400/30 bg-sky-400/[0.08] text-sky-300/90 hover:border-sky-400/60 hover:bg-sky-400/[0.14] hover:text-sky-200",
  Go: "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300/90 hover:border-cyan-400/60 hover:bg-cyan-400/[0.14] hover:text-cyan-200",
  Java:
    "border-orange-400/30 bg-orange-400/[0.08] text-orange-300/90 hover:border-orange-400/60 hover:bg-orange-400/[0.14] hover:text-orange-200",
  "Spring Boot":
    "border-lime-400/30 bg-lime-400/[0.08] text-lime-300/90 hover:border-lime-400/60 hover:bg-lime-400/[0.14] hover:text-lime-200",
  React:
    "border-sky-400/30 bg-sky-400/[0.08] text-sky-300/90 hover:border-sky-400/60 hover:bg-sky-400/[0.14] hover:text-sky-200",
  "Node.js":
    "border-green-400/30 bg-green-400/[0.08] text-green-300/90 hover:border-green-400/60 hover:bg-green-400/[0.14] hover:text-green-200",
  FastAPI:
    "border-teal-400/30 bg-teal-400/[0.08] text-teal-300/90 hover:border-teal-400/60 hover:bg-teal-400/[0.14] hover:text-teal-200",
  "OpenAI SDK":
    "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300/90 hover:border-emerald-400/60 hover:bg-emerald-400/[0.14] hover:text-emerald-200",
  Supabase:
    "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300/90 hover:border-emerald-400/60 hover:bg-emerald-400/[0.14] hover:text-emerald-200",
  MySQL:
    "border-sky-500/30 bg-sky-500/[0.08] text-sky-300/90 hover:border-sky-500/60 hover:bg-sky-500/[0.14] hover:text-sky-200",
  PostgreSQL:
    "border-slate-400/30 bg-slate-400/[0.08] text-slate-300/90 hover:border-slate-400/60 hover:bg-slate-400/[0.14] hover:text-slate-200",
  AWS: "border-amber-400/30 bg-amber-400/[0.08] text-amber-300/90 hover:border-amber-400/60 hover:bg-amber-400/[0.14] hover:text-amber-200",
  Azure:
    "border-blue-400/30 bg-blue-400/[0.08] text-blue-300/90 hover:border-blue-400/60 hover:bg-blue-400/[0.14] hover:text-blue-200",
  Linux:
    "border-yellow-400/30 bg-yellow-400/[0.08] text-yellow-300/90 hover:border-yellow-400/60 hover:bg-yellow-400/[0.14] hover:text-yellow-200",
  Git: "border-orange-500/30 bg-orange-500/[0.08] text-orange-400/90 hover:border-orange-500/60 hover:bg-orange-500/[0.14] hover:text-orange-300",
  Jira:
    "border-blue-500/30 bg-blue-500/[0.08] text-blue-300/90 hover:border-blue-500/60 hover:bg-blue-500/[0.14] hover:text-blue-200",
  Tailwind:
    "border-sky-400/30 bg-sky-400/[0.08] text-sky-300/90 hover:border-sky-400/60 hover:bg-sky-400/[0.14] hover:text-sky-200",
  GitHub:
    "border-zinc-700/60 bg-zinc-500/[0.08] text-zinc-300 hover:border-zinc-500 hover:bg-zinc-500/[0.14] hover:text-zinc-100",
};

export function techColorClasses(tech: string): string {
  return (
    techColors[tech] ??
    "border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-zinc-100"
  );
}
