import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PaintingsGallery, type PaintingItem } from "@/components/paintings-gallery";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Paintings | Oleksandr Nazarchuk",
  description:
    "Selected portraits, landscapes, city studies, and imaginative paintings by Oleksandr Nazarchuk.",
};

const paintingPath = (file: string) =>
  `/images/fineart/Paintings/${encodeURIComponent(file)}`;

const paintings: PaintingItem[] = [
  {
    file: "IMG_4681.jpg",
    title: "Motorcycle Study",
    group: "Selected paintings",
    format: "portrait",
  },
  {
    file: "IMG_2436.jpg",
    title: "Merchants Weighing Pearl",
    group: "Selected paintings",
    format: "portrait",
  },
  {
    file: "IMG_3260.jpg",
    title: "Stage Composition",
    group: "Selected paintings",
    format: "portrait",
  },
  {
    file: "IMG_4537.jpg",
    title: "Musician Study",
    group: "Selected paintings",
    format: "portrait",
  },
  {
    file: "FullSizeRender 2.jpg",
    title: "Elder Portrait",
    group: "Portraits",
    format: "portrait",
  },
  {
    file: "IMG_1397.jpg",
    title: "Bridge and Sky",
    group: "Portraits",
    format: "landscape",
  },
  {
    file: "FullSizeRender.JPG",
    title: "Elder Portrait Process",
    group: "Portraits",
    format: "landscape",
  },
  {
    file: "img-1207-web.jpg",
    title: "Expressive Portrait",
    group: "Portraits",
    format: "portrait",
  },
  {
    file: "img-1216-web.jpg",
    title: "Circular Portrait",
    group: "Portraits",
    format: "square",
  },
  {
    file: "img-1218-web.jpg",
    title: "Red Figure Study",
    group: "Portraits",
    format: "portrait",
  },
  {
    file: "IMG_4199.jpg",
    title: "Painted Face",
    group: "Portraits",
    format: "portrait",
  },
  {
    file: "IMG_0426.jpg",
    title: "Sunset Water Study",
    group: "Landscapes",
    format: "landscape",
  },
  {
    file: "IMG_0622.jpg",
    title: "Distant City",
    group: "Landscapes",
    format: "landscape",
  },
  {
    file: "IMG_1345.JPG",
    title: "Warm City Wall",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_4195.jpg",
    title: "Red City Study",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_4196.jpg",
    title: "Interior Nocturne",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_4197.jpg",
    title: "Coastal Color Field",
    group: "Landscapes",
    format: "landscape",
  },
  {
    file: "IMG_4198.jpg",
    title: "Open Field",
    group: "Landscapes",
    format: "landscape",
  },
  {
    file: "IMG_4206.jpg",
    title: "Pink City",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_4210.jpg",
    title: "Night Window",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_4211.jpg",
    title: "Fish Under Moon",
    group: "Landscapes",
    format: "portrait",
  },
  {
    file: "IMG_1101.JPG",
    title: "Studio Easel",
    group: "Framed & in progress",
    format: "portrait",
  },
  {
    file: "IMG_1406.jpg",
    title: "Drawing Process",
    group: "Framed & in progress",
    format: "landscape",
  },
  {
    file: "IMG_2018.JPG",
    title: "Framed Sunset",
    group: "Framed & in progress",
    format: "landscape",
  },
  {
    file: "img-1213-web.jpg",
    title: "Framed City",
    group: "Framed & in progress",
    format: "square",
  },
  {
    file: "img-2858-web.jpg",
    title: "Galaxy Painting",
    group: "Framed & in progress",
    format: "landscape",
  },
  {
    file: "img-3038-web.jpg",
    title: "Red Machine Study",
    group: "Framed & in progress",
    format: "landscape",
  },
  {
    file: "Untitled_Artwork 6.jpg",
    title: "Framed Street Scene",
    group: "Framed & in progress",
    format: "portrait",
  },
];

export default function PaintingsPage() {
  return (
    <main className="overflow-hidden bg-[#090908] text-[#f2eee5]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <SiteHeader overlay />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/fineart/Paintings/sashko-courtyard-web.m4v"
          poster={paintingPath("IMG_4537.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_38%,transparent_0%,rgba(9,9,8,0.18)_45%,rgba(9,9,8,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#090908] via-[#090908]/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:pb-16 lg:px-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.38em] text-accent">
            Fine Art · Studio archive
          </p>
          <h1 className="mt-5 font-serif text-[clamp(5rem,17vw,13rem)] font-light uppercase leading-[0.68] tracking-[-0.05em]">
            Paintings
          </h1>

          <div className="mt-9 flex flex-col justify-between gap-6 border-t border-white/20 pt-5 sm:flex-row sm:items-end">
            <p className="max-w-xl text-[0.9rem] leading-7 text-white/65">
              Portraits, landscapes, city studies, and imagined worlds shaped
              through color, gesture, and atmosphere.
            </p>
            <a
              href="#paintings-grid"
              className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-accent"
            >
              View all paintings
              <ArrowDown
                size={13}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="paintings-grid"
        className="mx-auto max-w-[1450px] px-4 py-24 sm:px-7 md:py-32 lg:px-10"
      >
        <header className="mb-12 flex flex-col justify-between gap-7 border-b border-white/14 pb-7 sm:flex-row sm:items-end md:mb-16">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
              The collection
            </p>
            <h2 className="mt-4 font-serif text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.78]">
              Selected works
            </h2>
          </div>
          <p className="max-w-sm text-[0.78rem] leading-6 text-white/38">
            A complete view of the painting archive, moving between observed
            places, human presence, memory, and imagination.
          </p>
        </header>

        <PaintingsGallery paintings={paintings} />
      </section>
    </main>
  );
}
