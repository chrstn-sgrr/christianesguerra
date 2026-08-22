import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Christian Esguerra
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          LOREM IPSUM
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/blog"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Read the blog
          </Link>
          <a
            href="https://github.com/chrstn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
