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
            plein air,
            <br />
            and events.
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

        <div className="relative grid grid-cols-2 items-start gap-3 pb-4 sm:min-h-[650px] sm:block sm:pb-0">
          <div className="relative z-10 col-span-2 aspect-[4/3] -rotate-1 bg-secondary p-2 shadow-2xl sm:absolute sm:left-[1%] sm:top-[2%] sm:w-[55%] sm:-rotate-2">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/fineart/Paintings/IMG_4199.jpg"
                alt="Painting displayed in Oleksandr Nazarchuk's studio"
                fill
                sizes="48vw"
                className="object-cover"
                style={{ objectPosition: "center 38%" }}
              />
            </div>
          </div>
          <div className="relative z-20 mt-2 aspect-[3/4] rotate-1 bg-secondary p-2 shadow-2xl sm:absolute sm:right-[2%] sm:top-[6%] sm:mt-0 sm:w-[36%] sm:rotate-2">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/fineart/Murals/photo-output-web.jpg"
                alt="Art Nouveau mural by Oleksandr Nazarchuk"
                fill
                sizes="28vw"
                className="scale-[1.12] object-cover"
                style={{ objectPosition: "38% center" }}
              />
            </div>
          </div>
          <div className="relative z-20 mt-10 aspect-[3/4] -rotate-1 bg-secondary p-2 shadow-2xl sm:absolute sm:bottom-[2%] sm:left-[8%] sm:mt-0 sm:w-[30%] sm:rotate-2">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/PLEINAIR/img-4413-web.jpg"
                alt="Plein air painting by Oleksandr Nazarchuk"
                fill
                sizes="27vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative z-30 col-span-2 -mt-8 ml-auto aspect-[4/3] w-[82%] rotate-1 bg-secondary p-2 shadow-2xl sm:absolute sm:bottom-[1%] sm:right-[1%] sm:mt-0 sm:w-[49%] sm:-rotate-2">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/fineart/EVENTS/Exhibitions/img-4378-web.jpg"
                alt="Fine art event featuring Oleksandr Nazarchuk"
                fill
                sizes="36vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FineArtSection
        number="01"
        title="Color holds the memory of light."
        subtitle="Light · Memory · Gesture"
        description="Portraits, atmospheric landscapes, city studies, and imagined worlds connected by luminous color and expressive gesture."
        href="/fine-art/paintings"
        images={paintingsImages}
        tone="paper"
      />

      <FineArtSection
        number="02"
        title="Plein air paintings answer to changing light."
        subtitle="Painted outside"
        description="Light changes, weather moves, and the painting has to answer in the moment. Outdoor studies made directly before the landscape."
        href="/fine-art/plein-air"
        images={[
          "/images/PLEINAIR12.png",
          "/images/PLEINAIR14.png",
        ]}
        reverse
      />

      <FineArtSection
        number="03"
        title="Stories at architectural scale."
        subtitle="Painted environments"
        description="Immersive scenes, expressive figures, and ornamental surfaces designed as part of the spaces they inhabit."
        href="/fine-art/murals"
        images={muralsImages}
        tone="paper"
      />

      <FineArtSection
        number="04"
        title="Art becomes an encounter."
        subtitle="Live / Archive · 01—05"
        description="Competitions, live painting, exhibitions, object art, and stage design—five ways the work leaves the studio and meets an audience."
        href="/fine-art/events"
        images={eventsImages}
        reverse
      />
    </main>
  );
}

function FineArtSection({
  number,
  title,
  subtitle,
  description,
  href,
  images,
  tone = "dark",
  reverse = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  images: string[];
  tone?: "dark" | "paper";
  reverse?: boolean;
}) {
  const paper = tone === "paper";
  return (
    <section
      className={
        paper
          ? "bg-[#d6c9b5] text-[#1d1711]"
          : "bg-[#0a0908] text-[#eee9df]"
      }
    >
      <div className="mx-auto grid min-h-[82svh] max-w-[1500px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className={paper ? "text-[#806522]" : "text-accent"}>{number}</span>
            <span className={paper ? "text-black/35" : "text-white/45"}>{subtitle}</span>
          </div>
          <h2 className="mt-6 font-serif text-[clamp(4rem,8vw,7.5rem)] font-light leading-[0.74] tracking-[-0.035em]">
            {title}
          </h2>
          <p className={`mt-9 max-w-xl text-[0.9rem] leading-8 ${paper ? "text-black/48" : "text-white/65"}`}>
            {description}
          </p>
          <Link
            href={href}
            className={`group mt-9 inline-flex items-center gap-3 border px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] transition-all ${
              paper
                ? "border-black/20 text-black hover:border-[#806522] hover:bg-[#806522] hover:text-[#f3ecdc]"
                : "border-white/20 text-white hover:border-accent hover:bg-accent hover:text-background"
            }`}
          >
            Enter the archive
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div
          className={`grid items-end gap-3 border-t pt-5 ${
            images.length === 2
              ? "grid-cols-[1.08fr_0.82fr]"
              : "grid-cols-[1.12fr_0.88fr] grid-rows-2"
          } ${
            paper ? "border-black/15" : "border-white/20"
          } ${reverse ? "lg:order-1" : ""}`}
        >
          {images.map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden shadow-[0_20px_55px_rgba(45,35,20,0.16)] ${
                paper ? "bg-black/10" : "bg-white/10"
              } ${
                images.length === 2
                  ? index === 0
                    ? "aspect-[4/3]"
                    : "aspect-square"
                  : index === 0
                    ? "row-span-2 h-full min-h-[24rem]"
                    : "aspect-square"
              }`}
            >
              <Image src={image} alt="" fill sizes="180px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
