import type { Metadata } from "next";
import { Ubuntu, Cascadia_Code } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu";
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
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <html
      lang="en"
      className={`dark ${ubuntu.variable} ${cascadiaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <StaggeredMenu
          isFixed
          position="right"
          items={menuItems}
          colors={["#4c1d95", "#2e1065"]}
          accentColor="#a78bfa"
          displaySocials={false}
          displayItemNumbering={true}
        />
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
