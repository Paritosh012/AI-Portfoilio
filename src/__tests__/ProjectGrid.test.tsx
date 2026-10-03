import { render, screen } from "@testing-library/react";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

describe("ProjectGrid", () => {
  it("renders one card per project", () => {
    render(<ProjectGrid />);
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });

  it("has the #projects anchor the hero button points to", () => {
    render(<ProjectGrid />);
    expect(screen.getByRole("region", { name: "Projects" })).toHaveAttribute(
      "id",
      "projects",
    );
  });
});

describe("projects data", () => {
  it("has unique slugs, since slugs become URLs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
