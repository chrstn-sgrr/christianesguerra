"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#";

export function useScramble(target: string): string {
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