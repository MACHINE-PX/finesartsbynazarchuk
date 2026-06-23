import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const paintingsImages = [
  "/images/fineart/Paintings/FullSizeRender%202.jpg",
  "/images/fineart/Paintings/img-1213-web.jpg",
  "/images/fineart/Paintings/img-2858-web.jpg",
];

const muralsImages = [
  "/images/fineart/Murals/img-8115-web.jpg",
  "/images/fineart/Murals/img-8630-web.jpg",
  "/images/fineart/Murals/photo-output-web.jpg",
];

const eventsImages = [
  "/images/fineart/EVENTS/ART%20OF%20MOTOCYCLE%20(AOM)%20-%20EVENT/img-9198-web.jpg",
  "/images/fineart/EVENTS/Helmet%20Copetition/img-5086-web.jpg",
  "/images/fineart/EVENTS/World%20Stage%20Design/img-3260-web.jpg",
];

export default function FineArtPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid min-h-[88svh] max-w-[1500px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
            Fine Art · Paintings · Murals · Plein Air · Events
          </p>
          <h1 className="mt-7 font-serif text-[clamp(4.6rem,11vw,9.5rem)] font-light leading-[0.69] tracking-[-0.05em]">
            Paintings,
            <br />
            murals,
            <br />
            plein air.
          </h1>
          <p className="mt-9 max-w-lg border-l border-accent/45 pl-6 text-[0.95rem] leading-[1.8] text-foreground/60">
            A curated view of Oleksandr&apos;s fine art practice, from direct
            observation and studio painting to architectural murals,
            exhibitions, and live events.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-foreground/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/35">
            <span>Painting</span>
            <span>Plein air</span>
            <span>Murals</span>
            <span>Events</span>
          </div>
        </div>

        <div className="relative min-h-[620px]">
          <div className="absolute left-[3%] top-[4%] aspect-[4/3] w-[67%] -rotate-2 bg-secondary p-2 shadow-2xl">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/fineart/Paintings/FullSizeRender%202.jpg"
                alt="Atmospheric painting by Oleksandr Nazarchuk"
                fill
                sizes="48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[3%] right-[3%] aspect-[3/4] w-[43%] rotate-3 bg-secondary p-2 shadow-2xl">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/fineart/Paintings/img-1216-web.jpg"
                alt="Expressive portrait painting by Oleksandr Nazarchuk"
                fill
                sizes="34vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[13%] left-[5%] font-mono text-[8px] uppercase leading-6 tracking-[0.2em] text-foreground/30">
            Selected works
            <br />
            Paintings · Murals · Events
          </div>
        </div>
      </section>

      <FineArtSection
        number="01"
        accent="accent"
        title="Color holds the memory of light."
        subtitle="Light · Memory · Gesture"
        description="Portraits, atmospheric landscapes, city studies, and imagined worlds connected by luminous color and expressive gesture."
        href="/fine-art/paintings"
        images={paintingsImages}
        bgImage="/images/fineart/Paintings/IMG_4210.jpg"
      />

      <FineArtSection
        number="02"
        accent="[#806522]"
        title="Plein air paintings answer to changing light."
        subtitle="Painted outside"
        description="Light changes, weather moves, and the painting has to answer in the moment. Outdoor studies made directly before the landscape."
        href="/fine-art/plein-air"
        images={[]}
        tone="paper"
        reverse
      />

      <FineArtSection
        number="03"
        accent="accent"
        title="Stories at architectural scale."
        subtitle="Painted environments"
        description="Immersive scenes, expressive figures, and ornamental surfaces designed as part of the spaces they inhabit."
        href="/fine-art/murals"
        images={muralsImages}
        bgImage="/images/fineart/Murals/img-3843-web.jpg"
      />

      <FineArtSection
        number="04"
        accent="[#ff5538]"
        title="Art becomes an encounter."
        subtitle="Live / Archive · 01—05"
        description="Competitions, live painting, exhibitions, object art, and stage design—five ways the work leaves the studio and meets an audience."
        href="/fine-art/events"
        images={eventsImages}
        bgImage="/images/fineart/EVENTS/Exhibitions/img-4378-web.jpg"
      />
    </main>
  );
}

function FineArtSection({
  number,
  accent,
  title,
  subtitle,
  description,
  href,
  images,
  bgImage,
  tone = "dark",
  reverse = false,
}: {
  number: string;
  accent: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  images: string[];
  bgImage?: string;
  tone?: "dark" | "paper";
  reverse?: boolean;
}) {
  const paper = tone === "paper";
  return (
    <section className={`relative overflow-hidden border-y ${paper ? "bg-[#d9d0bd] text-[#17140f]" : "bg-background text-foreground"}`}>
      {bgImage ? (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 ${paper ? "bg-black/12" : "bg-black/42"}`} />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/95 to-transparent" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className={paper ? "text-[#806522]" : "text-accent"}>{number}</span>
            <span className={paper ? "text-black/35" : "text-white/45"}>{subtitle}</span>
          </div>
          <h2 className="mt-6 font-serif text-[clamp(4.5rem,13vw,10rem)] font-light leading-[0.72] tracking-[-0.035em]">
            {title}
          </h2>
          <p className={`mt-9 max-w-xl text-[0.9rem] leading-8 ${paper ? "text-black/48" : "text-white/65"}`}>
            {description}
          </p>
          <Link
            href={href}
            className={`group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.22em] transition-all ${paper ? "text-black hover:border-[#806522] hover:bg-[#806522] hover:text-[#f3ecdc]" : "text-white hover:border-accent hover:bg-accent hover:text-background"}`}
          >
            Enter the archive
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className={`grid grid-cols-3 items-end gap-3 border-t border-white/20 pt-5 sm:max-w-lg ${reverse ? "lg:order-1" : ""}`}>
          {images.map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden bg-white/10 ${index === 1 ? "aspect-square" : "aspect-[3/4]"}`}
            >
              <Image src={image} alt="" fill sizes="180px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
