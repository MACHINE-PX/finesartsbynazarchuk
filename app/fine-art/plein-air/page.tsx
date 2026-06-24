import type { Metadata } from "next";
import { PleinAirWheel } from "@/components/plein-air-wheel";
import { SiteHeader } from "@/components/site-header";
import { pleinAirGallery } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Plein Air | Oleksandr Nazarchuk",
  description:
    "Outdoor paintings made directly in changing natural light by Oleksandr Nazarchuk.",
};

export default function PleinAirPage() {
  return (
    <main className="bg-[#d9d0bd]">
      <section className="relative min-h-[640px] overflow-hidden bg-[#17140f] text-[#f0ece4] sm:min-h-[720px] lg:h-[88svh]">
        <SiteHeader overlay />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video-plein-air.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full min-h-[640px] max-w-[1600px] items-end px-6 pb-14 pt-28 sm:min-h-[720px] sm:px-10 sm:pb-16 lg:min-h-0 lg:px-16 lg:pb-20">
          <div className="max-w-3xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.36em] text-[#d3b45c]">
              Fine Art · Painted outside
            </p>
            <h1 className="mt-5 uppercase font-serif text-[clamp(4.6rem,10vw,9rem)] font-light leading-[0.68] tracking-[-0.045em] text-white">
              Plein Air
            </h1>
            <p className="mt-7 max-w-lg border-l border-[#d3b45c]/70 pl-5 text-[0.9rem] leading-7 text-white/76">
              Light changes, weather moves, and the painting has to answer in
              the moment.
            </p>
          </div>
        </div>
      </section>

      <PleinAirWheel works={pleinAirGallery.works} />
    </main>
  );
}
