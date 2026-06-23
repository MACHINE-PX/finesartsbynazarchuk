import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Scenic Art & Faux Finishes | Oleksandr Nazarchuk",
};

const base =
  "/images/Props%20%26%20Scenic%20-20260619T114546Z-3-001/Props%20%26%20Scenic/Scenic%20Art%20%26%20Faux%20finishes";
const scenic = (file: string) => `${base}/${encodeURIComponent(file)}`;

const archive = [
  "IMG_3672.JPG", "IMG_3675.JPG", "IMG_3676.JPG", "IMG_3684.JPG",
  "IMG_3685.JPG", "IMG_3687.JPG", "IMG_3689.JPG", "IMG_3690.JPG",
  "IMG_3691.JPG", "IMG_3692.JPG", "IMG_3693.JPG", "IMG_3695.JPG",
  "IMG_3696.JPG", "IMG_3697.JPG", "IMG_3698.JPG", "IMG_3699.JPG",
  "IMG_3700.JPG", "IMG_3701.JPG", "IMG_3702.JPG", "IMG_3703.JPG",
  "IMG_3704.JPG", "IMG_3705.JPG", "IMG_3706.JPG", "IMG_3707.JPG",
];

export default function ScenicArtPage() {
  return (
    <main className="overflow-hidden bg-[#17130f] text-[#eee5d5]">
      <SiteHeader />
      <section className="relative mx-auto grid min-h-[92svh] max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#7ec5b2]">
            Props & Scenic · Material archive
          </p>
          <h1 className="mt-7 font-serif text-[clamp(4.2rem,10vw,9rem)] font-light leading-[0.7] tracking-[-0.045em]">
            Scenic Art <span className="italic text-[#c99762]">& Faux Finishes</span>
          </h1>
          <p className="mt-9 max-w-lg border-l border-[#7ec5b2]/45 pl-6 text-[0.9rem] leading-8 text-white/48">
            Wood becomes aged timber. Paint becomes oxidized metal. New
            objects acquire memory through layered color, abrasion, patina,
            ornament, and illusion.
          </p>
        </div>
        <div className="relative min-h-[600px]">
          <ImageCard file="IMG_3676.JPG" className="left-[5%] top-[4%] w-[62%] -rotate-3" />
          <ImageCard file="IMG_3701.JPG" className="right-[2%] top-[18%] w-[38%] rotate-3" />
          <ImageCard file="IMG_3699.JPG" className="bottom-[3%] left-[32%] w-[46%] rotate-1" />
          <span className="absolute bottom-7 right-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            Surface / texture / time
          </span>
        </div>
      </section>

      <section className="bg-[#d6c9b5] py-28 text-[#211a13] md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[0.45fr_1fr]">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#297c6b]">
              Cabinet of surfaces
            </p>
            <h2 className="font-serif text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[0.88]">
              Every finish begins as an act of observation.
            </h2>
          </div>
          <div className="mt-20 columns-2 gap-3 sm:columns-3 sm:gap-5 lg:columns-4">
            {archive.map((file, index) => (
              <figure key={file} className="group mb-3 break-inside-avoid bg-[#ede5d7] p-2 shadow-[0_18px_45px_rgba(55,38,20,.16)] sm:mb-5">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={scenic(file)}
                    alt={`Scenic finish study ${index + 1}`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <figcaption className="flex justify-between px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.16em] text-black/35">
                  <span>Sample {String(index + 1).padStart(2, "0")}</span>
                  <span>Hand finished</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 md:grid-cols-3 md:py-40">
        {[
          ["01", "Layer", "Transparent color establishes depth and undertone."],
          ["02", "Distress", "Abrasion and irregularity give the surface a history."],
          ["03", "Patina", "Glaze, pigment, and detail create the final illusion."],
        ].map(([n, title, text]) => (
          <article key={n} className="border-t border-white/15 pt-6">
            <span className="font-mono text-[8px] text-[#7ec5b2]">{n}</span>
            <h3 className="mt-7 font-serif text-4xl">{title}</h3>
            <p className="mt-4 max-w-xs text-xs leading-6 text-white/38">{text}</p>
          </article>
        ))}
      </section>

      <section className="border-t border-white/10 px-5 py-28 text-center sm:px-8">
        <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3.2rem,8vw,7rem)] font-light leading-[0.85]">
          Give a surface another life.
        </h2>
        <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] hover:border-[#7ec5b2] hover:bg-[#7ec5b2] hover:text-black">
          Discuss a scenic finish <ArrowUpRight size={13} />
        </Link>
      </section>
    </main>
  );
}

function ImageCard({ file, className }: { file: string; className: string }) {
  return (
    <div className={`absolute aspect-square bg-[#e8ddca] p-2 shadow-2xl ${className}`}>
      <div className="relative h-full overflow-hidden">
        <Image src={scenic(file)} alt="" fill sizes="40vw" className="object-cover" />
      </div>
    </div>
  );
}
