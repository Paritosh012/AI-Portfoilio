"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import type { TimelineEntry } from "@/types/content";

type Props = { experience: TimelineEntry[]; education: TimelineEntry[] };

export default function WorkTabs({ experience, education }: Props) {
  const id = useId();
  const tabs = [
    {
      key: "experience",
      label: "Experience",
      Icon: Briefcase,
      entries: experience,
    },
    {
      key: "education",
      label: "Education",
      Icon: GraduationCap,
      entries: education,
    },
  ];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : -1;
    const next = (active + step + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const current = tabs[active];

  return (
    <div className="mx-auto grid max-w-[460px] reveal gap-12 md:max-w-[600px] lg:max-w-[1050px]">
      <div
        role="tablist"
        aria-label="Experience and education"
        onKeyDown={onKeyDown}
        className="flex w-full max-w-[330px] justify-between justify-self-center rounded-full bg-surface px-8 py-5"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${tab.key}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`flex cursor-pointer items-center gap-1 font-display text-[0.813rem] transition-colors duration-400 hover:text-accent lg:text-sm ${
              i === active ? "text-accent" : "text-body"
            }`}
          >
            {tab.label} <tab.Icon className="size-4" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${current.key}`}
        className="relative pl-6 md:pl-0"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-1 bg-linear-to-b from-accent/0 to-accent-deep after:absolute after:-bottom-px after:-left-1.5 after:size-4 after:rounded-full after:bg-accent-deep md:right-0 md:mx-auto"
        />
        <ol className="grid gap-14 lg:gap-20">
          {current.entries.map((entry) => (
            <li
              key={entry.title}
              className="grid gap-4 md:grid-cols-2 md:gap-x-16 lg:gap-x-36"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 font-display text-xl leading-snug font-semibold text-title lg:text-[1.75rem]">
                    {entry.title}
                  </h3>
                  <p className="text-accent lg:text-lg">{entry.org}</p>
                </div>
                {entry.period && (
                  <p className="max-w-[6.5ch] shrink-0 text-right font-display text-lg leading-tight font-semibold text-title lg:text-2xl">
                    {entry.period}
                  </p>
                )}
              </div>
              <p className="leading-relaxed lg:text-lg">{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
