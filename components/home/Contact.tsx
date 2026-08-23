"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#";

function useScramble(target: string): string {
  const [text, setText] = useState(target);
  const textRef = useRef(target);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      textRef.current === target
    ) {
      textRef.current = target;
      setText(target);
      return;
    }

    const start = performance.now();
    const duration = 500;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const solvedCount = Math.floor(p * target.length);
      let next = "";
      for (let i = 0; i < target.length; i++) {
        next +=
          i < solvedCount || target[i] === " "
            ? target[i]
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      textRef.current = next;
      setText(next);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [target]);

  return text;
}

type ContactButtonProps = {
  label: string;
  email: string;
};

function ContactButton({ label, email }: ContactButtonProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const hide = () => {
    setRevealed(false);
    setCopied(false);
    window.clearTimeout(timeoutRef.current);
  };

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  const targetText = !revealed ? label : copied ? "Copied" : email;
  const buttonText = useScramble(targetText);

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={hide}
      onFocus={() => setRevealed(true)}
      onBlur={hide}
      aria-label={`${label}: ${email}. Click to copy.`}
      className="rounded-full border border-zinc-800 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 active:scale-[0.98]"
    >
      {buttonText}
    </button>
  );
}

export default function Contact() {
  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20 text-center" id="contact">
      <h2 className="font-heading text-2xl font-bold tracking-tight">
        Get in touch
      </h2>
      <p className="mt-3 text-sm text-zinc-500">
        Reach me at either address! (Click to Copy)
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ContactButton
          label="Personal Email"
          email="christian9esguerra@gmail.com"
        />
        <ContactButton
          label="School Email"
          email="apcciesguerra2@student.apc.edu.ph"
        />
      </div>
    </section>
  );
}