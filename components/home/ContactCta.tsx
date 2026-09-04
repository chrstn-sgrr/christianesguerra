"use client";

import { useState } from "react";
import { useScramble } from "./useScramble";

export default function ContactCta() {
  const [revealed, setRevealed] = useState(false);

  const hide = () => setRevealed(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({
        behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      window.history.pushState(null, "", "#contact");
    }
  };

  const buttonText = useScramble(revealed ? "Contact Me" : "Open to internships");

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={hide}
      onFocus={() => setRevealed(true)}
      onBlur={hide}
      aria-label={revealed ? "Contact Me" : "Open to internships"}
      className="inline-flex items-center justify-center rounded-full border border-zinc-800 px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:text-zinc-100 hover:shadow-[0_0_32px_-2px_rgba(139,92,246,0.5)] shadow-[0_0_24px_-2px_rgba(139,92,246,0.35)] active:scale-[0.98]"
    >
      <span className="relative inline-flex">
        <span className="invisible flex items-center gap-2" aria-hidden>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
            aria-hidden
          />
          Open to internships
        </span>
        <span className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
            aria-hidden
          />
          {buttonText}
        </span>
      </span>
    </button>
  );
}