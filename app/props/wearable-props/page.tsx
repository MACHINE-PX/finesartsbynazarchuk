import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Wearable Props | Oleksandr Nazarchuk" };

export default function WearablePropsPage() {
  return (
    <main className="bg-[#ded7c8] text-[#17130f]">
      <SiteHeader />
      <section className="relative flex min-h-[88svh] items-center overflow-hidden px-5 py-24 sm:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62vw] max-h-[780px] w-[62vw] max-w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42vw] max-h-[530px] w-[42vw] max-w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 md:grid-cols-[0.55fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#8a5e35]">Props & Scenic · Archive</p>
            <span className="mt-8 block font-mono text-[8px] uppercase tracking-[0.22em] text-black/35">Folder status · Awaiting material</span>
          </div>
          <div>
            <h1 className="font-serif text-[clamp(4.5rem,12vw,10rem)] font-light leading-[0.68] tracking-[-0.05em]">Wearable<br /><span className="italic">Props</span></h1>
            <p className="mt-10 max-w-xl border-l border-[#8a5e35]/45 pl-6 text-sm leading-8 text-black/48">The Wearable Props folder is currently empty. This page is prepared as a future archive for body-scaled objects, costume elements, masks, and painted wearable forms.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 border border-black/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] hover:border-[#8a5e35] hover:bg-[#8a5e35] hover:text-white">Discuss a wearable prop <ArrowUpRight size={13} /></Link>
          </div>
        </div>
      </section>
      <section className="border-y border-black/10 py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 px-5 font-mono text-[8px] uppercase tracking-[0.22em] text-black/28 sm:px-8">
          <span>Body</span><span>Movement</span><span>Character</span><span>Transformation</span>
        </div>
      </section>
    </main>
  );
}
