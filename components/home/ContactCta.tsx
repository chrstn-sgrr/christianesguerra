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
      window.location.hash = "contact";
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
      className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100 active:scale-[0.98]"
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
        aria-hidden
      />
      {buttonText}
    </button>
  );
}