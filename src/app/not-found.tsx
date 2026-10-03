import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center px-6 pt-36 pb-16 text-center">
      <div
        aria-hidden="true"
        className="blob top-1/3 left-1/2 -z-10 -translate-x-1/2 opacity-50"
      />
      <div>
        <p className="font-display text-7xl font-semibold text-accent lg:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-title lg:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4">The link may be old or mistyped.</p>
        <Link href="/" className="mt-10 btn-glow">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
