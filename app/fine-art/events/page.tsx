import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Events | Oleksandr Nazarchuk",
  description:
    "Live painting, exhibitions, art competitions, object painting, and stage design events by Oleksandr Nazarchuk.",
};

const eventImage = (folder: string, file: string) =>
  `/images/fineart/EVENTS/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

const folders = {
  sharjah: "Art Competition  - The Spirit of Sharjah",
  aom: "ART OF MOTOCYCLE (AOM) - EVENT",
  exhibitions: "Exhibitions",
  helmet: "Helmet Copetition",
  stage: "World Stage Design",
};

const acts = [
  "Competition",
  "Live painting",
  "Exhibition",
  "Object art",
  "Stage design",
];

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-[#080808] text-[#f3eee4]">
      <section className="relative min-h-[100svh]">
        <SiteHeader overlay />
        <Image
          src={eventImage(folders.exhibitions, "img-4378-web.jpg")}
          alt="Artist receiving recognition at a public exhibition"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0 bg-black/46" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9)_0%,rgba(8,8,8,0.18)_62%,rgba(8,8,8,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between border-b border-white/25 pb-4 font-mono text-[8px] uppercase tracking-[0.28em] text-white/60">
            <span>Fine Art / Public Programme</span>
            <span className="text-[#ff5538]">Archive 01—05</span>
          </div>

          <div className="py-16">
            <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-[#ff5538]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5538]" />
              Live / Archive
            </div>
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(6rem, 21vw, 16rem)",
                fontWeight: 300,
                lineHeight: 0.62,
                letterSpacing: "-0.055em",
              }}
            >
              Events
            </h1>
            <p className="mt-10 max-w-xl text-[0.9rem] leading-8 text-white/68">
              Art leaves the studio and becomes encounter—made live, shared in
              public, installed in space, and remembered through people.
            </p>
          </div>

          <div className="grid gap-5 border-t border-white/25 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[7px] uppercase tracking-[0.2em] text-white/45">
              {acts.map((act, index) => (
                <span key={act}>
                  {String(index + 1).padStart(2, "0")} {act}
                </span>
              ))}
            </div>
            <a
              href="#timeline"
              className="inline-flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 hover:text-[#ff5538]"
            >
              Open the archive <ArrowDown size={12} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 md:grid-cols-[0.42fr_1fr] md:py-40"
      >
        <div className="flex flex-col">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#ff5538]">
            The public life of art
          </p>
          <div className="mt-12 grid max-w-sm grid-cols-2 gap-3 md:mt-auto">
            <ArchiveThumb
              src={eventImage(folders.aom, "img-9198-web.jpg")}
              alt="Live painting at Art of Motorcycle"
            />
            <div className="mt-12">
              <ArchiveThumb
                src={eventImage(folders.stage, "img-3260-web.jpg")}
                alt="Stage painting created for World Stage Design"
              />
            </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3.2rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.88,
            }}
          >
            The work changes when someone is there to witness it.
          </h2>
          <p className="mt-9 max-w-2xl border-l border-[#ff5538]/65 pl-6 text-[0.9rem] leading-8 text-white/48">
            These moments trace a practice in motion: competing, demonstrating,
            exhibiting, collaborating, and building images for performance.
          </p>
          <div className="mt-12 grid grid-cols-5 border-y border-white/10 py-5">
            {acts.map((act, index) => (
              <div
                key={act}
                className="border-l border-white/10 px-2 first:border-0 sm:px-4"
              >
                <span className="block font-mono text-[8px] text-[#ff5538]">
                  0{index + 1}
                </span>
                <span className="mt-2 hidden font-mono text-[7px] uppercase tracking-[0.15em] text-white/30 sm:block">
                  {act}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventAct
        number="01"
        kicker="The Spirit of Sharjah"
        title="A painting enters the conversation."
        description="Competition turns a private process into cultural dialogue. The work is presented, discussed, and recognized in a shared public setting."
        tone="paper"
        primary={eventImage(folders.sharjah, "img-2436-web.jpg")}
        primaryAlt="Award-winning Spirit of Sharjah painting"
        secondary={eventImage(folders.sharjah, "img-2537-2-web.jpg")}
        secondaryAlt="Artist with certificate beside the awarded painting"
        detail={eventImage(folders.sharjah, "img-3522-web.jpg")}
        detailAlt="Public viewing the Spirit of Sharjah artwork"
      />

      <section className="relative border-y border-[#ff5538]/35 bg-[#0d0b0a] py-28 md:py-40">
        <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-[#ff5538]/28" />
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.52fr_1.48fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ActLabel number="02" label="Art of Motorcycle" />
              <h2 className="event-display mt-7">
                Painting happens now.
              </h2>
              <p className="mt-8 max-w-sm text-[0.9rem] leading-8 text-white/48">
                At AOM, the studio becomes public. Brushes, decisions, pauses,
                and revisions unfold beside the machines that inspired the
                image.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-white/5">
                <Image
                  src={eventImage(folders.aom, "img-2018-2-web.jpg")}
                  alt="Live painting setup among motorcycles"
                  fill
                  sizes="(max-width: 1023px) 100vw, 65vw"
                  className="object-cover"
                />
                <Stamp>LIVE PAINTING / AOM</Stamp>
              </div>
              {[
                ["img-2010-web.jpg", "Artist sketching at the motorcycle event"],
                ["img-2012-web.jpg", "Painting station beside motorcycles"],
                ["img-9198-web.jpg", "Artist painting live at night"],
                ["img-9280-web.jpg", "Artist holding a canvas during the event"],
              ].map(([file, alt], index) => (
                <div
                  key={file}
                  className={`relative overflow-hidden bg-white/5 ${
                    index % 2 === 0 ? "aspect-[3/4]" : "mt-12 aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={eventImage(folders.aom, file)}
                    alt={alt}
                    fill
                    sizes="(max-width: 1023px) 50vw, 32vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d8d0c1] py-28 text-[#17130f] md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 border-b border-black/25 pb-7 md:flex-row md:items-end">
            <div>
              <ActLabel number="03" label="Exhibitions" dark />
              <h2 className="event-display mt-7">
                The room becomes a frame.
              </h2>
            </div>
            <p className="max-w-md text-[0.9rem] leading-7 text-black/55">
              Installed together, individual paintings begin speaking across
              walls. Scale, sequence, and visitors complete the composition.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
              <Image
                src={eventImage(folders.exhibitions, "img-2283-web.jpg")}
                alt="Paintings installed together in an exhibition"
                fill
                sizes="(max-width: 767px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 bg-[#d8d0c1] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.22em]">
                Installation view
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
                <Image
                  src={eventImage(folders.exhibitions, "img-0343-2-web.jpg")}
                  alt="Painting displayed on a gallery wall"
                  fill
                  sizes="(max-width: 767px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-16 aspect-[3/4] overflow-hidden bg-black/10">
                <Image
                  src={eventImage(folders.exhibitions, "img-2912-web.jpg")}
                  alt="Outdoor live painting exhibition moment"
                  fill
                  sizes="(max-width: 767px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-5 py-32 sm:px-8 md:py-48">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <Image
                src={eventImage(
                  folders.helmet,
                  "ea3cf8d3-7d31-4bb9-9337-dccb17b81b31-3-web.jpg",
                )}
                alt="Artist presenting a painted helmet"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-14 right-[-2%] aspect-square w-[34%] overflow-hidden border-4 border-[#080808] bg-white/5 shadow-2xl">
              <Image
                src={eventImage(folders.helmet, "img-5086-web.jpg")}
                alt="Painted helmet displayed as an art object"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="pt-16 lg:pt-0">
            <ActLabel number="04" label="Helmet Competition" />
            <h2 className="event-display mt-7">
              The canvas
              <br />
              changes shape.
            </h2>
            <p className="mt-8 max-w-md text-[0.9rem] leading-8 text-white/48">
              Image wraps around volume. A wearable object becomes sculpture,
              character, and painted surface at once.
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
              <Asterisk size={12} className="text-[#ff5538]" />
              Second place · Painted object
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[105svh] overflow-hidden">
        <Image
          src={eventImage(folders.stage, "91058fbf-2ede-4bff-ae6a-ec7620d59897-web.jpg")}
          alt="World Stage Design exhibition installation"
          fill
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-black/60" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_45%,transparent,rgba(8,8,8,0.9)_78%)]" />
        <div className="mx-auto flex min-h-[105svh] max-w-[1500px] flex-col justify-between px-5 py-20 sm:px-8 md:py-28">
          <div className="flex justify-between border-b border-white/25 pb-5">
            <ActLabel number="05" label="World Stage Design" />
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
              Final act
            </span>
          </div>
          <div className="max-w-5xl py-24">
            <h2 className="event-display">
              Painting enters the stage.
            </h2>
            <p className="mt-9 max-w-xl text-[0.9rem] leading-8 text-white/62">
              Artworks, scenic objects, and material experiments become part
              of a larger performance world—built to be encountered in space.
            </p>
          </div>
          <div className="ml-auto grid w-full max-w-2xl grid-cols-3 gap-3 border-t border-white/25 pt-5">
            {[
              "img-3260-web.jpg",
              "img-8832-web.jpg",
              "img-8833-web.jpg",
            ].map((file, index) => (
              <div
                key={file}
                className={`relative overflow-hidden bg-white/10 ${
                  index === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={eventImage(folders.stage, file)}
                  alt=""
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ff5538]/30 px-5 py-28 text-center sm:px-8 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#ff5538]">
            Exhibitions · workshops · collaborations
          </p>
          <h2 className="event-display mt-7">Make the next moment live.</h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.24em] transition-all hover:border-[#ff5538] hover:bg-[#ff5538] hover:text-black"
          >
            Plan an event
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

function EventAct({
  number,
  kicker,
  title,
  description,
  primary,
  primaryAlt,
  secondary,
  secondaryAlt,
  detail,
  detailAlt,
  tone,
}: {
  number: string;
  kicker: string;
  title: string;
  description: string;
  primary: string;
  primaryAlt: string;
  secondary: string;
  secondaryAlt: string;
  detail: string;
  detailAlt: string;
  tone: "paper";
}) {
  return (
    <section
      className={`relative py-28 md:py-40 ${
        tone === "paper" ? "bg-[#eee8dd] text-[#17130f]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.58fr_1.42fr]">
          <div>
            <ActLabel number={number} label={kicker} dark />
            <h2 className="event-display mt-7">{title}</h2>
            <p className="mt-8 max-w-sm text-[0.9rem] leading-8 text-black/55">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_0.56fr] items-end gap-4 sm:gap-6">
            <div className="relative aspect-square overflow-hidden bg-black/10">
              <Image
                src={primary}
                alt={primaryAlt}
                fill
                sizes="(max-width: 1023px) 65vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
                <Image
                  src={secondary}
                  alt={secondaryAlt}
                  fill
                  sizes="(max-width: 1023px) 35vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative -ml-[28%] mt-4 aspect-[4/3] w-[128%] overflow-hidden border-4 border-[#eee8dd] bg-black/10 shadow-xl">
                <Image
                  src={detail}
                  alt={detailAlt}
                  fill
                  sizes="(max-width: 1023px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActLabel({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.25em] ${
        dark ? "text-black/55" : "text-white/48"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ff5538] text-[#e63d24]">
        {number}
      </span>
      {label}
    </div>
  );
}

function ArchiveThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
      <Image src={src} alt={alt} fill sizes="180px" className="object-cover" />
    </div>
  );
}

function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute right-5 top-5 rotate-2 border-2 border-[#ff5538] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[#ff5538]">
      {children}
    </span>
  );
}
