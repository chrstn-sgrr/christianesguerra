"use client";

import { useEffect, useRef, useState } from "react";
import GradualBlur from "@/components/GradualBlur";
import "./HomeGradualBlur.css";

export default function HomeGradualBlur() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [atPageBottom, setAtPageBottom] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtPageBottom(entry.isIntersecting),
      { threshold: 1 }
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="home-gradual-blur"
        data-hidden={atPageBottom ? "true" : undefined}
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="100%"
          strength={2}
          divCount={5}
          curve="bezier"
          zIndex={30}
          opacity={atPageBottom ? 0 : 1}
        />
      </div>
      <div ref={sentinelRef} aria-hidden="true" className="h-px w-px" />
    </>
  );
}
