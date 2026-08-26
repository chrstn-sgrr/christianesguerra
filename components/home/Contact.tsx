"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScramble } from "./useScramble";

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
      className="rounded-full border border-zinc-800 px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 active:scale-[0.98]"
    >
      {buttonText}
    </button>
  );
}

export default function Contact() {
  return (
    <section className="border-t border-zinc-800/60 py-16 sm:py-20 text-center" id="contact">
      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
        Get in touch
      </h2>
      <p className="mt-3 text-sm md:text-base text-zinc-500">
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
      <a
        href="https://www.linkedin.com/in/christian-esguerra-bscs/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-lg md:text-xl text-zinc-400 hover:text-zinc-100 transition-colors"
        aria-label="LinkedIn"
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/selfhst/icons@main/svg/linkedin-light.svg"
          alt=""
          width={20}
          height={20}
          className="md:size-[22px]"
          unoptimized
          aria-hidden
        />
        <span>LinkedIn</span>
      </a>
    </section>
  );
}