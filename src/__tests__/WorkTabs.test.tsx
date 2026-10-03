import { fireEvent, render, screen } from "@testing-library/react";
import WorkTabs from "@/components/WorkTabs";
import type { TimelineEntry } from "@/types/content";

const experience: TimelineEntry[] = [
  {
    title: "Intern",
    org: "Acme",
    period: "2026",
    description: "Built things.",
  },
];
const education: TimelineEntry[] = [
  { title: "B.Tech", org: "Some College", description: "Studied things." },
];

describe("WorkTabs", () => {
  it("shows experience first", () => {
    render(<WorkTabs experience={experience} education={education} />);
    expect(screen.getByRole("tab", { name: /experience/i })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Intern" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "B.Tech" }),
    ).not.toBeInTheDocument();
  });

  it("switches to education on click", () => {
    render(<WorkTabs experience={experience} education={education} />);
    fireEvent.click(screen.getByRole("tab", { name: /education/i }));
    expect(screen.getByRole("heading", { name: "B.Tech" })).toBeInTheDocument();
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName(/education/i);
  });

  it("moves between tabs with arrow keys", () => {
    render(<WorkTabs experience={experience} education={education} />);
    fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: /education/i })).toHaveFocus();
    expect(screen.getByRole("heading", { name: "B.Tech" })).toBeInTheDocument();
  });

  it("hides the year when an entry has no period", () => {
    render(<WorkTabs experience={experience} education={education} />);
    fireEvent.click(screen.getByRole("tab", { name: /education/i }));
    expect(screen.queryByText("2026")).not.toBeInTheDocument();
  });
});
