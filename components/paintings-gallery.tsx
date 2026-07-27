import Image from "next/image";

const paintingPath = (file: string) =>
  `/images/fineart/Paintings/${encodeURIComponent(file)}`;

export type PaintingItem = {
  file: string;
  title: string;
  group: "Selected paintings" | "Portraits" | "Landscapes" | "Framed & in progress";
  format?: "portrait" | "landscape" | "square";
};

export function PaintingsGallery({
  paintings,
}: {
  paintings: PaintingItem[];
}) {
  const groups: PaintingItem["group"][] = [
    "Selected paintings",
    "Portraits",
    "Landscapes",
    "Framed & in progress",
  ];

  return (
    <div className="space-y-16 md:space-y-20">
      {groups.map((group) => {
        const groupPaintings = paintings.filter((painting) => painting.group === group);

        return (
          <section key={group}>
            <div className="mb-6 flex items-end justify-between gap-6 border-b border-white/10 pb-4">
              <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light">
                {group}
              </h3>
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/28">
                {groupPaintings.length} works
              </span>
            </div>
            <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${groupGridClass(group)}`}>
              {groupPaintings.map((painting, index) => (
                <PaintingCard
                  key={painting.file}
                  painting={painting}
                  index={index}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function groupGridClass(group: PaintingItem["group"]) {
  if (group === "Selected paintings") {
    return "lg:grid-cols-4";
  }

  if (group === "Framed & in progress") {
    return "md:grid-cols-4 xl:grid-cols-7";
  }

  return "lg:grid-cols-4 xl:grid-cols-5";
}

function PaintingCard({
  painting,
  index,
}: {
  painting: PaintingItem;
  index: number;
}) {
  return (
    <figure className="relative bg-[#151411] p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:p-3">
      <div
        className={`relative block w-full overflow-hidden bg-white/5 ${
          painting.format === "landscape"
            ? "aspect-[4/3]"
            : painting.format === "square"
              ? "aspect-square"
              : "aspect-[4/5]"
        }`}
      >
        <Image
          src={paintingPath(painting.file)}
          alt={`${painting.title} by Oleksandr Nazarchuk`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 25vw, 20vw"
          className="object-contain"
        />
      </div>
      <figcaption className="flex items-start justify-between gap-3 px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.16em] text-white/32">
        <span className="max-w-[68%] leading-4">{painting.title}</span>
        <span>Oleksandr Nazarchuk</span>
      </figcaption>
    </figure>
  );
}
