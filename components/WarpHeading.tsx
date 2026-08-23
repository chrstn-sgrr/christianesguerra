import WarpText from "@/components/WarpText";

export default function WarpHeading() {
  return (
    <WarpText
      text="CHRISTIAN ESGUERRA"
      color="#f4f4f5"
      fontFamily="var(--font-ubuntu), Ubuntu, sans-serif"
      fontSize="clamp(2.5rem, 9vw, 7rem)"
      fontWeight={700}
      letterSpacing="-0.02em"
      style={{ height: "clamp(140px, 28vw, 300px)" }}
    />
  );
}