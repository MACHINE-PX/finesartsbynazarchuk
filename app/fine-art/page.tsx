import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DisciplineSection } from "@/components/discipline-section";
import { SiteHeader } from "@/components/site-header";
import {
  pleinAirGallery,
} from "@/lib/portfolio-data";

export default function FineArtPage() {
  const pleinAir = { ...pleinAirGallery, index: "02" };
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-24 md:grid-cols-[0.55fr_1fr] md:px-8 md:pt-32">
        <div className="flex flex-col">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            Fine Art
          </p>
          <div className="mt-10 grid max-w-sm grid-cols-[1fr_0.72fr] items-end gap-3 md:mt-auto">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src="/images/fineart/Paintings/FullSizeRender%202.jpg"
                alt="Expressive portrait painting by Oleksandr Nazarchuk"
                fill
                sizes="(max-width: 767px) 55vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="pb-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src="/images/fineart/Paintings/img-1216-web.jpg"
                  alt="Atmospheric architectural painting"
                  fill
                  sizes="(max-width: 767px) 35vw, 150px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[7px] uppercase leading-5 tracking-[0.2em] text-foreground/35">
                Selected works
                <br />
                01—04
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            className="max-w-4xl"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.9,
            }}
          >
            Paintings, murals, plein air, and events
          </h1>
          <p className="mt-8 max-w-2xl border-l border-accent/45 pl-6 text-[0.95rem] leading-[1.8] text-foreground/60">
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
      </section>

      <section
        id="paintings"
        className="portfolio-section relative my-20 min-h-[90svh] overflow-hidden border-y border-foreground/10"
      >
        <Image
          src="/images/fineart/Paintings/IMG_4210.jpg"
          alt="Atmospheric landscape painting by Oleksandr Nazarchuk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.94)_0%,rgba(8,8,8,0.58)_43%,rgba(8,8,8,0.08)_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/90 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-between px-6 py-12 md:px-8 md:py-16">
          <div className="flex items-center justify-between border-b border-white/20 pb-5 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className="text-accent">01 · Paintings</span>
            <span className="hidden text-white/45 sm:block">
              Light · Memory · Gesture
            </span>
          </div>

          <div className="max-w-3xl py-24">
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-white/55">
              Observation becomes emotion
            </p>
            <h2
              className="mt-6"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(4.5rem, 13vw, 10rem)",
                fontWeight: 300,
                lineHeight: 0.72,
                letterSpacing: "-0.035em",
              }}
            >
              Color holds the memory of light.
            </h2>
            <p className="mt-9 max-w-xl text-sm leading-8 text-white/65">
              Portraits, atmospheric landscapes, city studies, and imagined
              worlds connected by luminous color and expressive gesture.
            </p>
            <Link
              href="/fine-art/paintings"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white transition-all hover:border-accent hover:bg-accent hover:text-background"
            >
              Enter the painting salon
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-3 items-end gap-3 border-t border-white/20 pt-5 sm:max-w-lg">
            {[
              "/images/fineart/Paintings/FullSizeRender%202.jpg",
              "/images/fineart/Paintings/img-1213-web.jpg",
              "/images/fineart/Paintings/img-2858-web.jpg",
            ].map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden bg-white/10 ${
                  index === 1 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DisciplineSection {...pleinAir} />

      <section
        id="murals"
        className="portfolio-section relative my-20 min-h-[90svh] overflow-hidden border-y border-foreground/10"
      >
        <Image
          src="/images/fineart/Murals/img-3843-web.jpg"
          alt="Narrative fantasy mural by Oleksandr Nazarchuk"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 47%" }}
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.55)_42%,rgba(8,8,8,0.08)_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background/90 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-between px-6 py-12 md:px-8 md:py-16">
          <div className="flex items-center justify-between border-b border-white/20 pb-5 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className="text-accent">03 · Murals</span>
            <span className="hidden text-white/45 sm:block">
              Painted environments
            </span>
          </div>

          <div className="max-w-3xl py-24">
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-white/55">
              A wall is never just a wall
            </p>
            <h2
              className="mt-6"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(4.5rem, 13vw, 10rem)",
                fontWeight: 300,
                lineHeight: 0.72,
                letterSpacing: "-0.035em",
              }}
            >
              Stories at architectural scale.
            </h2>
            <p className="mt-9 max-w-xl text-sm leading-8 text-white/65">
              Immersive scenes, expressive figures, and ornamental surfaces
              designed as part of the spaces they inhabit.
            </p>
            <Link
              href="/fine-art/murals"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white transition-all hover:border-accent hover:bg-accent hover:text-background"
            >
              Enter the mural archive
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-3 items-end gap-3 border-t border-white/20 pt-5 sm:max-w-lg">
            {[
              "/images/fineart/Murals/img-8115-web.jpg",
              "/images/fineart/Murals/img-8630-web.jpg",
              "/images/fineart/Murals/photo-output-web.jpg",
            ].map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden bg-white/10 ${
                  index === 1 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="events"
        className="portfolio-section relative my-20 min-h-[94svh] overflow-hidden border-y border-[#ff5538]/30"
      >
        <Image
          src="/images/fineart/EVENTS/Exhibitions/img-4378-web.jpg"
          alt="Public art event and exhibition recognition"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.94)_0%,rgba(8,8,8,0.55)_48%,rgba(8,8,8,0.12)_82%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background/95 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-between px-6 py-12 md:px-8 md:py-16">
          <div className="flex items-center justify-between border-b border-white/25 pb-5 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className="text-[#ff5538]">04 · Events</span>
            <span className="hidden text-white/45 sm:block">
              Live / Archive · 01—05
            </span>
          </div>

          <div className="max-w-4xl py-20">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.34em] text-white/55">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5538]" />
              The public life of art
            </div>
            <h2
              className="mt-7"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(4.5rem, 13vw, 10rem)",
                fontWeight: 300,
                lineHeight: 0.72,
                letterSpacing: "-0.035em",
              }}
            >
              Art becomes an encounter.
            </h2>
            <p className="mt-9 max-w-xl text-sm leading-8 text-white/65">
              Competitions, live painting, exhibitions, object art, and stage
              design—five ways the work leaves the studio and meets an
              audience.
            </p>
            <Link
              href="/fine-art/events"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white transition-all hover:border-[#ff5538] hover:bg-[#ff5538] hover:text-black"
            >
              Open the live archive
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-3 items-end gap-3 border-t border-white/25 pt-5 sm:max-w-lg">
            {[
              "/images/fineart/EVENTS/ART%20OF%20MOTOCYCLE%20(AOM)%20-%20EVENT/img-9198-web.jpg",
              "/images/fineart/EVENTS/Helmet%20Copetition/img-5086-web.jpg",
              "/images/fineart/EVENTS/World%20Stage%20Design/img-3260-web.jpg",
            ].map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden bg-white/10 ${
                  index === 1 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
