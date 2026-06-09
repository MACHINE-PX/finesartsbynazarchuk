import { siteConfig } from "@/lib/portfolio-data";

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [
    ...siteConfig.disciplines,
    "Visual Arts",
    "Stage Direction",
    "Wearable Sculpture",
    "Mixed Media",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-border py-4">
      <div
        className="flex w-max gap-12 whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee-forward"} 32s linear infinite`,
        }}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-12"
            style={{
              fontFamily:
                index % 2 === 0
                  ? "'Cormorant Infant', serif"
                  : "'Space Mono', monospace",
              fontSize: index % 2 === 0 ? "1rem" : "9px",
              fontStyle: index % 2 === 0 ? "italic" : "normal",
              fontWeight: 300,
              letterSpacing: index % 2 === 0 ? "0.04em" : "0.25em",
              color:
                index % 2 === 0
                  ? "rgba(240,236,228,0.18)"
                  : "rgba(201,168,76,0.35)",
            }}
          >
            {index % 2 === 0 ? item : item.toUpperCase()}
            <span className="text-[5px] text-accent/25">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
