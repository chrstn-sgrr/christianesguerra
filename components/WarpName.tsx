import WarpText from "@/components/WarpText";

type WarpNameProps = {
  text: string;
};

export default function WarpName({ text }: WarpNameProps) {
  return (
    <WarpText
      text={text}
      color="#f4f4f5"
      fontFamily="var(--font-ubuntu), Ubuntu, sans-serif"
      fontSize="clamp(3rem, 8vw, 6.5rem)"
      fontWeight={700}
      letterSpacing="-0.03em"
      style={{ height: "clamp(150px, 30vw, 360px)" }}
    />
  );
}
