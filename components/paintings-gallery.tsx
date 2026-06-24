import Image from "next/image";

const paintingPath = (file: string) =>
  `/images/fineart/Paintings/${encodeURIComponent(file)}`;

export function PaintingsGallery({
  paintings,
  portraitFiles,
}: {
  paintings: string[];
  portraitFiles: string[];
}) {
  const portraits = new Set(portraitFiles);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {paintings.slice(0, 4).map((file, index) => (
          <PaintingCard
            key={file}
            file={file}
            index={index}
            featured
            portrait={portraits.has(file)}
          />
        ))}
      </div>

      <div className="mt-5 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">
        {paintings.slice(4).map((file, index) => (
          <PaintingCard
            key={file}
            file={file}
            index={index + 4}
            portrait={portraits.has(file)}
          />
        ))}
      </div>
    </>
  );
}

function PaintingCard({
  file,
  index,
  portrait,
  featured = false,
}: {
  file: string;
  index: number;
  portrait: boolean;
  featured?: boolean;
}) {
  return (
    <figure
      className={`relative break-inside-avoid bg-[#151411] p-2.5 shadow-[0_22px_65px_rgba(0,0,0,0.3)] sm:p-3 ${
        featured ? "" : "mb-4 sm:mb-5"
      }`}
    >
      <div
        className={`relative block w-full overflow-hidden bg-white/5 ${
          featured ? "aspect-[3/4]" : portrait ? "aspect-[3/4]" : "aspect-square"
        }`}
      >
        <Image
          src={paintingPath(file)}
          alt={`Painting ${index + 1} by Oleksandr Nazarchuk`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.18em] text-white/28">
        <span>Painting {String(index + 1).padStart(2, "0")}</span>
        <span>Oleksandr Nazarchuk</span>
      </figcaption>
    </figure>
  );
}
