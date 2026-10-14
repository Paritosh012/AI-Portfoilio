import { ChevronDown } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-16 pb-4 lg:pt-28 lg:pb-8">
      <h2 className="mb-12 reveal text-center section-title lg:mb-16">
        What I <span>Offer</span>
      </h2>
      <div className="mx-auto grid max-w-[460px] items-start gap-8 md:max-w-[740px] md:grid-cols-2 lg:max-w-[990px] lg:gap-20">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className="relative isolate reveal overflow-hidden rounded-[3rem] bg-surface px-6 pt-8 pb-14 lg:rounded-[4rem] lg:px-12 lg:pt-12 lg:pb-20"
          >
            <div
              aria-hidden="true"
              className={`blob -top-[7.75rem] -z-10 ${i % 2 ? "-right-[7.75rem]" : "-left-[7.75rem]"}`}
            />
            <h3 className="mb-2 font-display text-xl font-semibold text-title lg:mb-4 lg:text-[2rem] lg:leading-tight">
              {group.title}
            </h3>
            <p className="text-sm leading-relaxed lg:text-base">
              {group.description}
            </p>

            <details className="group details-animate">
              <summary className="absolute right-5 bottom-5 grid size-8 cursor-pointer place-items-center rounded-lg border-2 border-accent bg-bg text-title transition-shadow duration-400 hover:shadow-[0_0_16px_var(--color-accent)] lg:right-8 lg:bottom-8">
                <span className="sr-only">{group.label}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-6 transition-[rotate] duration-400 group-open:-rotate-180"
                />
              </summary>
              <div className="pt-6 lg:pt-8">
                <p className="mb-3 text-sm">{group.label}</p>
                <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
