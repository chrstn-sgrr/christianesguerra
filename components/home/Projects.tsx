"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import { techColorClasses } from "@/lib/techColors";

type Category = Project["category"];

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="font-heading text-xl font-bold tracking-tight text-zinc-100">
          {project.title}
        </h3>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to repository"
            className="group relative rounded text-zinc-500 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/selfhst/icons@main/svg/github-light.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
              aria-hidden
            />
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
              Project Repository
            </span>
          </a>
        )}
      </div>
      {project.date && (
        <p className="mt-1 text-sm text-zinc-500">{project.date}</p>
      )}
      <p className="mt-2 max-w-[60ch] leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-full border px-2.5 py-0.5 text-xs transition-colors ${techColorClasses(tech)}`}
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.link && (
        <div className="mt-4 flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
          >
            Visit
          </a>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("academic");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20">
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl">
          Projects
        </h2>
      </div>

      <div className="mb-10 flex justify-center">
        <div
          role="tablist"
          aria-label="Project category"
          className="relative inline-flex rounded-full border border-zinc-800 bg-zinc-900 p-1"
        >
          <div
            aria-hidden
            className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-zinc-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              active === "personal"
                ? "translate-x-[calc(100%+4px)]"
                : "translate-x-0"
            }`}
          />
          <button
            role="tab"
            aria-selected={active === "academic"}
            onClick={() => setActive("academic")}
            className={`relative z-10 rounded-full px-6 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
              active === "academic"
                ? "text-zinc-900"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Academic
          </button>
          <button
            role="tab"
            aria-selected={active === "personal"}
            onClick={() => setActive("personal")}
            className={`relative z-10 rounded-full px-6 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
              active === "personal"
                ? "text-zinc-900"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Personal
          </button>
        </div>
      </div>

      <div
        key={active}
        className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2"
      >
        {filtered.map((project, i) => (
          <div
            key={project.title}
            style={
              {
                animation: `projectFade 300ms ease ${i * 60}ms both`,
              } as React.CSSProperties
            }
          >
            <ProjectEntry project={project} />
          </div>
        ))}
      </div>
      <style>{`@keyframes projectFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
