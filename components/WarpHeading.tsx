"use client";

import { useEffect, useState } from "react";
import WarpText from "@/components/WarpText";

export default function WarpHeading() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <WarpText
      text="CHRISTIAN ESGUERRA"
      color={dark ? "#f4f4f5" : "#18181b"}
      fontFamily="var(--font-ubuntu), Ubuntu, sans-serif"
      fontSize="clamp(2.5rem, 9vw, 7rem)"
      fontWeight={700}
      letterSpacing="-0.02em"
      style={{ height: "clamp(140px, 28vw, 300px)" }}
    />
  );
}