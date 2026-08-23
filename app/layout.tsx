import type { Metadata } from "next";
import { Ubuntu, Cascadia_Code } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: "700",
});

const cascadiaCode = Cascadia_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cascadia-code",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Esguerra — Portfolio",
    template: "%s | Christian Esguerra",
  },
  description: "Portfolio and blog — projects, writing, and experiments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${ubuntu.variable} ${cascadiaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Christian Esguerra
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Blog
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
          <p className="mx-auto max-w-3xl px-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Christian Esguerra. Built with Next.js.
          </p>
        </footer>
      </body>
    </html>
  );
}
