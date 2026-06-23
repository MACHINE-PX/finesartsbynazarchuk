import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Murals | Oleksandr Nazarchuk",
  description:
    "Immersive murals and hand-painted architectural surfaces by Oleksandr Nazarchuk.",
};

const murals = [
  {
    src: "/images/fineart/Murals/img-8119-web.jpg",
    alt: "Large narrative mural installed in an interior",
    className:
      "md:col-span-7 md:col-start-1 aspect-[4/3] md:-rotate-[1.2deg]",
  },
  {
    src: "/images/fineart/Murals/img-8115-web.jpg",
    alt: "Expressive character detail painted within a mural",
    className:
      "md:col-span-4 md:col-start-9 md:mt-40 aspect-[3/4] md:rotate-[2deg]",
  },
  {
    src: "/images/fineart/Murals/img-8116-web.jpg",
    alt: "Close detail of expressive mural brushwork",
    className:
      "md:col-span-4 md:col-start-2 md:-mt-20 aspect-[3/4] md:rotate-[1.3deg]",
  },
  {
    src: "/images/fineart/Murals/img-8630-web.jpg",
    alt: "Ornamental blue mask mural painted on a wall",
    className:
      "md:col-span-6 md:col-start-7 md:mt-24 aspect-[4/3] md:-rotate-[1deg]",
  },
  {
    src: "/images/fineart/Murals/photo-output-web.jpg",
    alt: "Decorative female figure mural on a narrow wall",
    className:
      "md:col-span-5 md:col-start-1 md:-mt-12 aspect-[3/4] md:-rotate-[1.5deg]",
  },
  {
    src: "/images/fineart/Murals/IMG_3278.jpg",
    alt: "Fantasy mural installed on an architectural panel",
    className:
      "md:col-span-4 md:col-start-8 md:mt-40 aspect-[2/3] md:rotate-[2.2deg]",
  },
];

const process = [
  ["01", "Listen", "The space, atmosphere, and story establish the direction."],
  ["02", "Imagine", "References become a composition shaped for the architecture."],
  ["03", "Build", "Drawing, color, texture, and illusion accumulate by hand."],
  ["04", "Transform", "The finished image changes how the space is experienced."],
];

export default function MuralsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[100svh]">
        <SiteHeader overlay />
        <Image
          src="/images/fineart/Murals/img-3843-web.jpg"
          alt="Fantasy mural painted by Oleksandr Nazarchuk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 46%" }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_38%,transparent_0%,rgba(8,8,8,0.22)_42%,rgba(8,8,8,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:pb-16 lg:px-12">
          <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.38em] text-accent">
            Fine Art · Painted Environments
          </p>
          <div className="flex items-end justify-between gap-8">
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(5rem, 17vw, 13rem)",
                fontWeight: 300,
                lineHeight: 0.68,
                letterSpacing: "-0.045em",
              }}
            >
              Murals
            </h1>
            <a
              href="#murals"
              aria-label="Explore murals"
              className="mb-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-background sm:flex"
            >
              <ArrowDown size={17} />
            </a>
          </div>
          <div className="mt-9 flex flex-col justify-between gap-6 border-t border-white/20 pt-5 sm:flex-row">
            <p className="max-w-xl text-[0.9rem] leading-7 text-white/68">
              Walls become stages. Color becomes atmosphere. Every image is
              imagined as part of the space, not simply placed upon it.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/42">
              One continuous mural archive
            </p>
          </div>
        </div>
      </section>

      <section
        id="murals"
        className="relative overflow-hidden bg-[#d9d0bd] py-28 text-[#17140f] md:py-40"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(23,20,15,.6) .55px, transparent .55px)",
            backgroundSize: "8px 8px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-[19rem] -translate-x-1/2 select-none font-serif text-[28vw] font-light leading-none tracking-[-0.07em] text-black/[0.035]">
          MURALS
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[0.48fr_1fr]">
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
              Murals · Selected works
            </p>
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Infant', serif",
                  fontSize: "clamp(3rem, 7vw, 6.4rem)",
                  fontWeight: 300,
                  lineHeight: 0.92,
                }}
              >
                Painting stories at the scale of architecture.
              </h2>
                <p className="mt-9 max-w-2xl border-l border-[#806522]/55 pl-6 text-[0.9rem] leading-8 text-black/52">
                Narrative scenes, expressive figures, ornament, and illusion
                belong to one practice: transforming surfaces through color,
                rhythm, and atmosphere.
              </p>
            </div>
          </div>

          <div className="relative mt-28 grid gap-8 md:grid-cols-12 md:gap-7">
            {murals.map((mural, index) => (
              <figure
                key={mural.src}
                className={`group relative bg-[#eee7d8] p-2.5 shadow-[0_32px_80px_rgba(55,42,22,0.2)] sm:p-3 ${mural.className}`}
              >
                <div className="relative h-full overflow-hidden bg-[#bdb39f]">
                  <Image
                    src={mural.src}
                    alt={mural.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 58vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                  />
                </div>
                <figcaption className="absolute -bottom-7 left-1 flex gap-4 font-mono text-[7px] uppercase tracking-[0.2em] text-black/42">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>Painted surface</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-28 flex justify-end">
            <p className="max-w-sm border-t border-black/20 pt-5 font-mono text-[8px] uppercase leading-6 tracking-[0.2em] text-black/38">
              Narrative · figure · ornament · illusion
              <br />
              One continuous body of mural work
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 md:grid-cols-[0.7fr_1fr] md:py-36">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent">
              From surface to atmosphere
            </p>
            <h2
              className="mt-5 max-w-md"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.9,
              }}
            >
              The process is part of the art.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2">
            {process.map(([number, title, text]) => (
              <article
                key={number}
                className="min-h-56 border-t border-foreground/15 py-7 sm:px-7 sm:odd:border-r"
              >
                <span className="font-mono text-[9px] tracking-[0.25em] text-accent">
                  {number}
                </span>
                <h3 className="mt-8 font-serif text-3xl">{title}</h3>
                <p className="mt-3 max-w-xs text-xs leading-6 text-foreground/42">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden px-5 py-28 text-center sm:px-8">
        <Image
          src="/images/fineart/Murals/img-3843-web.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(8,8,8,0.28),#080808_72%)]" />
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent">
            Have a wall in mind?
          </p>
          <h2 className="mt-6 font-serif text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.86]">
            Let&apos;s transform the space.
          </h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.24em] transition-all hover:border-accent hover:bg-accent hover:text-background"
          >
            Start a conversation
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </main>
  );
}
