import Image from "next/image";
import { readAdminMedia } from "@/lib/artist-admin";

export async function AdminManagedMedia({
  section,
  tone = "dark",
}: {
  section: string;
  tone?: "dark" | "paper";
}) {
  const items = (await readAdminMedia())
    .filter((item) => item.section === section && item.source !== "site")
    .sort((left, right) => left.order - right.order);

  if (items.length === 0) {
    return null;
  }

  const paper = tone === "paper";

  return (
    <section
      className={`px-5 py-24 sm:px-8 md:py-32 ${
        paper ? "bg-[#d6c9b5] text-[#211a13]" : "bg-[#090908] text-[#f2eee5]"
      }`}
    >
      <div className="mx-auto max-w-[1450px]">
        <div
          className={`mb-10 flex flex-col justify-between gap-5 border-b pb-6 sm:flex-row sm:items-end ${
            paper ? "border-black/15" : "border-white/12"
          }`}
        >
          <div>
            <p
              className={`font-mono text-[8px] uppercase tracking-[0.3em] ${
                paper ? "text-black/42" : "text-white/35"
              }`}
            >
              Artist updates
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5rem)] font-light">
              New additions
            </h2>
          </div>
          <span
            className={`font-mono text-[7px] uppercase tracking-[0.2em] ${
              paper ? "text-black/35" : "text-white/28"
            }`}
          >
            Managed from artist admin
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.id}
              className={paper ? "bg-[#ede5d7] p-2" : "bg-[#151411] p-2"}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                {item.kind === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain"
                  />
                )}
              </div>
              <figcaption
                className={`px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.16em] ${
                  paper ? "text-black/42" : "text-white/32"
                }`}
              >
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
