import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Props & Scenic | Oleksandr Nazarchuk",
};

const root =
  "/images/Props%20%26%20Scenic%20-20260619T114546Z-3-001/Props%20%26%20Scenic";
const scenic = (file: string) =>
  `${root}/Scenic%20Art%20%26%20Faux%20finishes/${file}`;
const sculpture = (file: string) => `${root}/Sculptures/${file}`;

export default function PropsPage() {
  return (
    <main className="overflow-hidden bg-[#0a0908] text-[#eee9df]">
      <SiteHeader />

      <section className="mx-auto grid min-h-[88svh] max-w-[1500px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#c39165]">
            Studio practice · Props & Scenic
          </p>
          <h1 className="mt-7 font-serif text-[clamp(4.6rem,11vw,9.5rem)] font-light leading-[0.69] tracking-[-0.05em]">
            Matter
            <br />
            becomes
            <br />
            <span className="italic">illusion.</span>
          </h1>
          <p className="mt-9 max-w-lg border-l border-[#c39165]/45 pl-6 text-sm leading-8 text-white/45">
            Sculpted form, scenic surface, and wearable scale meet in a
            practice built around transformation.
          </p>
        </div>
        <div className="relative min-h-[620px]">
          <div className="absolute left-[3%] top-[4%] aspect-[4/3] w-[67%] -rotate-2 bg-[#dfd2bd] p-2 shadow-2xl">
            <div className="relative h-full overflow-hidden">
              <Image src={scenic("IMG_3676.JPG")} alt="Scenic finished object" fill priority sizes="48vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[3%] right-[3%] aspect-[3/4] w-[43%] rotate-3 bg-[#dfd2bd] p-2 shadow-2xl">
            <div className="relative h-full overflow-hidden">
              <Image src={sculpture("img-3546-web.jpg")} alt="Sculpted painted face" fill sizes="34vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[13%] left-[5%] font-mono text-[8px] uppercase leading-6 tracking-[0.2em] text-white/28">
            Surface / form / body
            <br />
            Workshop archive
          </div>
        </div>
      </section>

      <Discipline
        number="01"
        title="Scenic Art"
        italic="& Faux Finishes"
        href="/props/scenic-art"
        description="A cabinet of patinas, aged wood, oxidized metal, mosaics, and hand-built material illusions."
        image={scenic("IMG_3701.JPG")}
        tone="paper"
      />

      <Discipline
        number="02"
        title="Sculptures"
        italic="& Object Work"
        href="/props/sculptures"
        description="Dimensional forms shaped, surfaced, painted, and encountered from every angle."
        image={sculpture("img-6599-poster.jpg")}
        tone="dark"
        reverse
      />

      <section className="relative border-y border-white/10 px-5 py-28 sm:px-8 md:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.45fr_1fr] md:items-end">
          <div>
            <span className="font-mono text-[9px] text-[#c39165]">03</span>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.24em] text-white/30">
              Archive ready
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[clamp(4rem,9vw,8rem)] font-light leading-[0.72]">
              Wearable
              <br />
              <span className="italic">Props</span>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-8 text-white/42">
              A future archive for masks, costume objects, and forms designed
              around the moving body. The source folder is currently empty.
            </p>
            <Link href="/props/wearable-props" className="group mt-9 inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] hover:border-[#c39165] hover:bg-[#c39165] hover:text-black">
              View wearable props <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Discipline({
  number,
  title,
  italic,
  href,
  description,
  image,
  tone,
  reverse = false,
}: {
  number: string;
  title: string;
  italic: string;
  href: string;
  description: string;
  image: string;
  tone: "paper" | "dark";
  reverse?: boolean;
}) {
  const paper = tone === "paper";
  return (
    <section className={paper ? "bg-[#d6c9b5] text-[#1d1711]" : "bg-[#11100e]"}>
      <div className={`mx-auto grid min-h-[82svh] max-w-[1500px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={image} alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition-transform duration-1000 hover:scale-[1.025]" />
        </div>
        <div>
          <span className={`font-mono text-[9px] ${paper ? "text-[#297c6b]" : "text-[#c39165]"}`}>{number}</span>
          <h2 className="mt-6 font-serif text-[clamp(4rem,8vw,7.5rem)] font-light leading-[0.72]">
            {title}
            <br />
            <span className="italic">{italic}</span>
          </h2>
          <p className={`mt-8 max-w-lg text-sm leading-8 ${paper ? "text-black/52" : "text-white/42"}`}>{description}</p>
          <Link href={href} className={`group mt-9 inline-flex items-center gap-3 border px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] ${paper ? "border-black/20 hover:bg-[#297c6b] hover:text-white" : "border-white/20 hover:bg-[#c39165] hover:text-black"}`}>
            Enter the archive <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
