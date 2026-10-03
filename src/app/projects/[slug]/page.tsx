import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

// Build time par har project ka page pehle se bana lo (static HTML, fast).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Jo slug list mein nahi hai uske liye 404, runtime par naya page mat banao.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  // Next.js 15+ mein params ek Promise hai, isliye await
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="relative isolate px-6 pt-40 pb-16 lg:pt-40">
      <div
        aria-hidden="true"
        className="blob top-24 left-1/2 -z-10 -translate-x-1/2 opacity-40"
      />

      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-display text-sm text-body transition-colors duration-400 hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> All projects
        </Link>

        {project.category && (
          <p className="mt-10 text-accent lg:text-xl">{project.category}</p>
        )}
        <h1 className="mt-2 font-display text-[2rem] leading-tight font-semibold text-title lg:text-5xl lg:leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed lg:text-xl lg:leading-relaxed">
          {project.description}
        </p>

        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={750}
            preload
            className="mt-10 rounded-[2rem]"
          />
        )}

        <section className="mt-12 rounded-[2rem] bg-surface p-6 lg:rounded-[3rem] lg:p-10">
          <h2 className="font-display text-xl font-semibold text-title lg:text-2xl">
            What I built
          </h2>
          <ul className="mt-6 grid gap-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 leading-relaxed">
                <Check
                  className="mt-1 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <h2 className="mt-12 font-display text-xl font-semibold text-title lg:text-2xl">
          Stack
        </h2>
        <ul
          aria-label="Tech stack"
          className="mt-4 flex flex-wrap gap-x-1 gap-y-2"
        >
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {(project.repo || project.live) && (
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow"
              >
                Open live site{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display font-semibold text-title transition-colors duration-400 hover:text-accent"
              >
                View code <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
