export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 32"
      fill="none"
      aria-label="AB"
      {...props}
    >
      <text
        x="0"
        y="24"
        fill="currentColor"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="0.5"
      >
        AB
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" fill="none" aria-label="AB"><text x="0" y="24" fill="${color}" font-family="Inter, system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" letter-spacing="0.5">AB</text></svg>`;
}
