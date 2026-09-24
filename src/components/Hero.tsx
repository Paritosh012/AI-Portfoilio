import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 sm:pt-32">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Full stack developer
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Paritosh Jaiswal
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          I build full stack web apps with React, Node.js and MongoDB, and I
          care about the parts users never see: auth, payments, and data that
          stays correct.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            See my projects
          </Link>
          <a
            href="https://github.com/Paritosh012"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
