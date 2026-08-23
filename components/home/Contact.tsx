"use client";

import { useEffect, useRef, useState } from "react";

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

  const buttonText = !revealed ? label : copied ? "Copied" : email;

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
    <section className="border-t border-zinc-800/60 py-16 sm:py-20 text-center">
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
