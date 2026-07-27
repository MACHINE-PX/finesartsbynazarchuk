import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AdminManagedMedia } from "@/components/admin-managed-media";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Sculptures | Oleksandr Nazarchuk" };

const base =
  "/images/Props%20%26%20Scenic%20-20260619T114546Z-3-001/Props%20%26%20Scenic/Sculptures";
const asset = (file: string) => `${base}/${encodeURIComponent(file)}`;

const sculptureStudies = [
  ["decorating-sculpture-1-web.jpg", "Decorating the sculpture"],
  ["graveyard-mask-web.jpg", "Graveyard mask"],
  ["oxidising-mask-web.jpg", "Oxidising the mask"],
  ["img-3553-snapseedcopy-web.jpg", "Finished sculptural character"],
];

const mirrorSeries = [
  ["spirit-in-a-mirror-web.jpg", "Spirit in a Mirror"],
  ["spirit-in-a-mirror-1-web.jpg", "Spirit in a Mirror detail"],
  ["spirit-in-a-mirror-2-web.jpg", "Spirit in a Mirror surface"],
];

export default function SculpturesPage() {
  return (
    <main id="page-top" className="overflow-hidden bg-[#090909] text-[#eee9df]">
      <SiteHeader />
      <section className="relative min-h-[94svh]">
        <Image src={asset("decorating-mask-web.jpg")} alt="Decorating a sculpted mask in the artist's studio" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 58%" }} />
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,.92),rgba(9,9,9,.22)_65%,rgba(9,9,9,.6))]" />
        <div className="relative mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-end px-5 pb-14 pt-28 sm:px-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#bd815b]">Props & Scenic · Form study</p>
          <h1 className="mt-6 font-serif text-[clamp(5rem,16vw,13rem)] font-light leading-[0.65] tracking-[-0.055em]">Sculptures</h1>
          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/20 pt-5 sm:flex-row">
            <p className="max-w-xl text-[0.9rem] leading-7 text-white/62">Volume shaped by hand, then activated through color, texture, shadow, and surface.</p>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">Object viewed in the round</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:py-40">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#bd815b]">Shape · carve · paint</p>
          <h2 className="mt-6 font-serif text-[clamp(3.3rem,7vw,6.5rem)] font-light leading-[0.86]">A face built from material and light.</h2>
          <p className="mt-8 max-w-md text-[0.9rem] leading-8 text-white/43">The sculptural surface carries tool marks, painted aging, metallic warmth, and a character that changes as the viewer moves around it.</p>
        </div>
        <video className="aspect-[9/16] max-h-[82svh] w-full bg-[#151515] object-cover" src={asset("img-6599-web.mp4")} poster={asset("img-6599-poster.jpg")} autoPlay muted loop playsInline preload="metadata" />
      </section>

      <section className="bg-[#c7b49d] py-28 text-[#1b1510] md:py-40">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#744c35]">
            Named studies
          </p>
          <h2 className="mt-6 max-w-4xl font-serif font-light">
            Character built through surface.
          </h2>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sculptureStudies.map(([file, label], index) => (
              <figure key={file} className={index % 2 === 1 ? "lg:mt-16" : ""}>
                <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
                  <Image src={asset(file)} alt={label} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover" />
                </div>
                <figcaption className="mt-4 flex justify-between gap-4 font-mono text-[7px] uppercase tracking-[0.18em] text-black/38">
                  <span>Study {String(index + 1).padStart(2, "0")}</span>
                  <span className="text-right">{label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 md:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#bd815b]">
              Space Explorer
            </p>
            <h2 className="mt-6 font-serif font-light">
              From prototype to patina.
            </h2>
            <p className="mt-7 max-w-md text-[0.9rem] leading-8 text-white/42">
              A character study developed through sculpted form, metallic
              color, oxidation, and accumulated surface.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["first-prototype-space-explorer-web.jpg", "First prototype of Space Explorer"],
              ["space-explorer-patina-web.jpg", "Space Explorer with patina effect"],
            ].map(([file, label]) => (
              <figure key={file}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#151515]">
                  <Image src={asset(file)} alt={label} fill sizes="(max-width: 639px) 100vw, 40vw" className="object-cover" />
                </div>
                <figcaption className="mt-4 font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100e] px-5 py-28 sm:px-8 md:py-40">
        <div className="mx-auto max-w-[1450px]">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#bd815b]">
            Spirit in a Mirror
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {mirrorSeries.map(([file, label], index) => (
              <figure key={file} className={index === 1 ? "md:mt-16" : ""}>
                <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
                  <Image src={asset(file)} alt={label} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="mt-4 font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-28 sm:px-8 md:grid-cols-[1fr_0.8fr] md:items-center md:py-40">
        <video className="aspect-[9/16] max-h-[70svh] w-full bg-[#151515] object-cover" src={asset("sculpture-detail-web.mp4")} poster={asset("sculpture-detail-poster.jpg")} muted loop playsInline controls preload="none" />
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#bd815b]">Detail in motion</p>
          <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[0.88]">Sculpture asks the viewer to move.</h2>
          <p className="mt-7 text-[0.9rem] leading-8 text-white/42">No single image contains the whole object. Form reveals itself through changing angle, highlight, and shadow.</p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] hover:border-[#bd815b] hover:bg-[#bd815b] hover:text-black">Discuss an object <ArrowUpRight size={13} /></Link>
        </div>
      </section>

      <AdminManagedMedia section="Sculptures" />
    </main>
  );
}
