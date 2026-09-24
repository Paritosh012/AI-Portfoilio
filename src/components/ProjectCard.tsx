import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="/* TODO: card ka border, padding, gol kone */">
      {/* TODO 1: title, jo /projects/{slug} par link kare */}
      <p className="mt-2 text-sm text-gray-600">{project.summary}</p>
      {/* TODO 3: tech ki list, chhote chips mein */}
      {/* TODO 4: Code aur Live links, sirf agar exist karte hon */}
    </article>
  );
}
