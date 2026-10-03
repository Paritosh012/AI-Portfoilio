import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-linear-to-b from-bg from-70% to-bg/0 lg:from-60%">
      <div
        aria-hidden="true"
        className="blob-spin -top-12 -left-12 size-[100px] blur-[35px]"
      />
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-[1120px] flex-col gap-3 px-6 pt-4 pb-6 lg:h-[5.5rem] lg:flex-row lg:items-center lg:justify-between lg:py-0"
      >
        <Link
          href="/"
          className="self-start font-display text-sm font-semibold text-title transition-colors duration-400 hover:text-accent lg:self-auto"
        >
          {site.name}
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
