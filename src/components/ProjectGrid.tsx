import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="px-6 pt-16 pb-4 lg:pt-36 lg:pb-16"
    >
      <h2 className="mb-12 reveal text-center section-title lg:mb-16">
        Projects I&apos;ve
        <br />
        <span>Built</span>
      </h2>
      <div className="mx-auto grid max-w-xl gap-6 xl:max-w-[1380px] xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
