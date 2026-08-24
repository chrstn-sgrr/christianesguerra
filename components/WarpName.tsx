import WarpText from "@/components/WarpText";

type WarpNameProps = {
  text: string;
  fitGroup?: string;
};

export default function WarpName({ text, fitGroup }: WarpNameProps) {
  return (
    <WarpText
      text={text}
      color="#f4f4f5"
      fontFamily="var(--font-ubuntu), Ubuntu, sans-serif"
      fontSize="clamp(3.25rem, 9vw, 7.5rem)"
      fontWeight={700}
      letterSpacing="-0.03em"
      style={{ height: "clamp(100px, 18vw, 280px)" }}
      maxWidthFactor={1}
      fitGroup={fitGroup}
    />
  );
}
