"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },

      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const current = pathname === "/" ? active : null;

  return (
    <ul className="flex justify-between gap-x-4 sm:justify-start sm:gap-x-8 lg:gap-x-16 xl:gap-x-20">
      {links.map(({ id, label }) => {
        const isActive = current === id;
        return (
          <li key={id}>
            <Link
              href={`/#${id}`}
              aria-current={isActive ? "true" : undefined}
              className={`font-display text-[0.813rem] font-semibold transition-[color,text-shadow] duration-400 hover:text-accent hover:[text-shadow:0_8px_16px_var(--color-accent)] lg:text-sm ${
                isActive
                  ? "text-accent [text-shadow:0_8px_16px_var(--color-accent)]"
                  : "text-title"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
