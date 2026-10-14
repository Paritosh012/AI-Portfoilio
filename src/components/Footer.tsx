import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden px-6 pt-16 pb-8 text-center">
      <div
        aria-hidden="true"
        className="blob-spin -right-12 -bottom-12 -z-10 size-[100px] blur-[35px]"
      />
      <p className="text-title">
        All rights reserved by <span className="text-accent">{site.name}</span>
      </p>
      <p className="mt-3 font-display text-sm">© {year}</p>
      <p className="mt-3 text-xs text-muted">
        Built with Next.js, TypeScript and Tailwind CSS.
      </p>
    </footer>
  );
}
