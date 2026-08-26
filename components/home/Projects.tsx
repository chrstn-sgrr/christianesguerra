import Image from "next/image";
import { projects, type Project } from "@/lib/projects";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article>
      <h3 className="font-heading text-xl font-bold tracking-tight text-zinc-100">
        {project.title}
      </h3>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>
      {(project.link || project.repo) && (
        <div className="mt-4 flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
            >
              Visit
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
        <h2 className="font-heading text-2xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chrstn-sgrr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/selfhst/icons@main/svg/github-light.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
              aria-hidden
            />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/apcciesguerra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="School GitHub"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/selfhst/icons@main/svg/github-light.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
              aria-hidden
            />
            <span>School GitHub</span>
          </a>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectEntry key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
