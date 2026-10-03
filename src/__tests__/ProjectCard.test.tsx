import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

const base: Project = {
  slug: "demo",
  title: "Demo App",
  summary: "A demo project.",
  description: "Longer description.",
  highlights: ["One"],
  tech: ["React", "Node.js"],
};

describe("ProjectCard", () => {
  it("links the title to the project detail page", () => {
    render(<ProjectCard project={base} />);
    expect(screen.getByRole("link", { name: "Demo App" })).toHaveAttribute(
      "href",
      "/projects/demo",
    );
  });

  it("renders every tech as a list item", () => {
    render(<ProjectCard project={base} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("hides Code and Live links when the project has none", () => {
    render(<ProjectCard project={base} />);
    expect(
      screen.queryByRole("link", { name: /code/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /live/i }),
    ).not.toBeInTheDocument();
  });

  it("shows Code and Live links that open in a new tab", () => {
    render(
      <ProjectCard
        project={{
          ...base,
          repo: "https://github.com/x/y",
          live: "https://y.dev",
        }}
      />,
    );
    const code = screen.getByRole("link", { name: /code/i });
    expect(code).toHaveAttribute("href", "https://github.com/x/y");
    expect(code).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: /live/i })).toHaveAttribute(
      "href",
      "https://y.dev",
    );
  });
});
