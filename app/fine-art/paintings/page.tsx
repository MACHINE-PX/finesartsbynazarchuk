import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PaintingsGallery } from "@/components/paintings-gallery";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Paintings | Oleksandr Nazarchuk",
  description:
    "Selected portraits, landscapes, city studies, and imaginative paintings by Oleksandr Nazarchuk.",
};

const paintingPath = (file: string) =>
  `/images/fineart/Paintings/${encodeURIComponent(file)}`;

const paintings = [
  "IMG_4681.jpg",
  "IMG_2436.jpg",
  "IMG_3260.jpg",
  "IMG_4537.jpg",
  "FullSizeRender 2.jpg",
  "FullSizeRender.JPG",
  "IMG_0426.jpg",
  "IMG_0622.jpg",
  "IMG_1101.JPG",
  "IMG_1345.JPG",
  "IMG_1397.jpg",
  "IMG_1406.jpg",
  "IMG_2018.JPG",
  "IMG_4195.jpg",
  "IMG_4196.jpg",
  "IMG_4197.jpg",
  "IMG_4198.jpg",
  "IMG_4199.jpg",
  "IMG_4206.jpg",
  "IMG_4210.jpg",
  "IMG_4211.jpg",
  "img-1207-web.jpg",
  "img-1213-web.jpg",
  "img-1216-web.jpg",
  "img-1218-web.jpg",
  "img-2858-web.jpg",
  "img-3038-web.jpg",
  "Untitled_Artwork 6.jpg",
];

const portraitFiles = [
  "IMG_3260.jpg",
  "IMG_4199.jpg",
  "IMG_4537.jpg",
  "img-1207-web.jpg",
  "img-1216-web.jpg",
  "img-1218-web.jpg",
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
        className="mx-auto max-w-[1600px] px-4 py-24 sm:px-7 md:py-36 lg:px-10"
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

        <PaintingsGallery
          paintings={paintings}
          portraitFiles={portraitFiles}
        />
      </section>
    </main>
  );
}
