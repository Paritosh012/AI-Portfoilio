import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

const pill =
  "inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 font-display text-xs font-semibold text-title transition-colors duration-400 hover:border-accent hover:text-accent";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative isolate reveal overflow-hidden rounded-[3rem] bg-surface p-6 sm:p-8 lg:rounded-[4rem] lg:p-10">
      <div
        aria-hidden="true"
        className="blob -right-[7.75rem] bottom-0 -z-10"
      />

      <div className="flex items-center justify-between text-title">
        <span
          aria-hidden="true"
          className="font-display text-[2rem] font-semibold lg:text-5xl"
        >
          {number}
        </span>
        {project.category && (
          <span className="lg:text-xl">{project.category}</span>
        )}
      </div>

      <div className="my-8">
        <h3 className="mb-4 font-display text-xl font-semibold text-title lg:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:z-[1] after:rounded-[3rem] focus-visible:after:ring-2 focus-visible:after:ring-accent lg:after:rounded-[4rem]"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mb-3 font-display text-[0.813rem] lg:text-sm">
          Tech stack
        </p>
        <ul aria-label="Tech stack" className="flex flex-wrap gap-x-1 gap-y-2">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={720}
            height={450}
            className="rounded-[1.5rem] lg:rounded-[2rem]"
          />
        ) : (
          <div className="rounded-[1.5rem] border border-white/10 bg-bg/60 px-6 pt-5 pb-6 lg:rounded-[2rem]">
            <p className="flex h-12 items-center font-display text-xs tracking-wider text-muted uppercase">
              Overview
            </p>
            <p className="text-sm leading-relaxed">{project.summary}</p>
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 grid size-12 place-items-center rounded-full border-[3px] border-accent bg-bg text-title opacity-0 transition-[opacity,box-shadow] duration-400 group-hover:opacity-100 group-hover:shadow-[0_0_24px_var(--color-accent)] lg:top-5 lg:right-5"
        >
          <ArrowUpRight className="size-6" />
        </span>
      </div>

      {(project.repo || project.live) && (
        <div className="relative z-10 mt-6 flex flex-wrap gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={pill}
            >
              Code <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={pill}
            >
              Live <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
