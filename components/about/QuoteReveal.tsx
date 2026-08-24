"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import "./QuoteReveal.css";

type QuoteRevealProps = {
  quote: string;
};

export default function QuoteReveal({ quote }: QuoteRevealProps) {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = quote.split(/\s+/);

  useEffect(() => {
    const element = quoteRef.current;
    if (!element) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <blockquote
      ref={quoteRef}
      className={`quote-reveal${isVisible ? " quote-reveal-visible" : ""}`}
    >
      <span className="quote-word quote-mark" aria-hidden="true">
        “
      </span>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="quote-word"
            style={{ transitionDelay: `${(index + 1) * 55}ms` }}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
      <span
        className="quote-word quote-mark"
        aria-hidden="true"
        style={{ transitionDelay: `${(words.length + 1) * 55}ms` }}
      >
        ”
      </span>
    </blockquote>
  );
}
