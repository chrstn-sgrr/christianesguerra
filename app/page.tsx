import WarpHeading from "@/components/WarpHeading";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 min-h-[calc(100svh-8rem)] space-y-4">
      <h1 className="sr-only">Christian Esguerra</h1>
      <WarpHeading />
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
        4th year Computer Science Student
      </p>
    </section>
  );
}
