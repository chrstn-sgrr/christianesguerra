import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Writing and notes.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>

      {posts.length === 0 ? (
        <p className="mt-12 text-sm text-zinc-500">No posts yet.</p>
      ) : (
        <ul className="mt-10 space-y-4">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-lg font-semibold group-hover:underline">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {post.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
