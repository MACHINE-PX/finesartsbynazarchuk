import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Paintings | Oleksandr Nazarchuk",
  description:
    "Selected portraits, landscapes, city studies, and imaginative paintings by Oleksandr Nazarchuk.",
};

const paintingPath = (file: string) =>
  `/images/fineart/Paintings/${encodeURIComponent(file)}`;

const salon = [
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

export default function PaintingsPage() {
  return (
    <main className="overflow-hidden bg-[#0a0908] text-[#f2eee5]">
      <section className="relative min-h-[100svh]">
        <SiteHeader overlay />
        <Image
          src={paintingPath("IMG_4210.jpg")}
          alt="Atmospheric landscape painting by Oleksandr Nazarchuk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/32" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.92)_0%,rgba(10,9,8,0.42)_46%,rgba(10,9,8,0.12)_76%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0908] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:px-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.38em] text-accent">
            Fine Art · Selected Paintings
          </p>
          <h1
            className="mt-6 max-w-6xl uppercase"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(4.7rem, 16vw, 12rem)",
              fontWeight: 300,
              lineHeight: 0.68,
              letterSpacing: "-0.045em",
            }}
          >
            Paintings
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/20 pt-5 sm:flex-row sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-white/68">
              Light remembered through color. Faces, places, and inner worlds
              held for a moment in paint.
            </p>
            <a
              href="#curatorial"
              className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/48 transition-colors hover:text-accent"
            >
              Enter the exhibition <ArrowDown size={13} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="curatorial"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 md:grid-cols-[0.45fr_1fr] md:py-40"
      >
        <div className="flex flex-col">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
            Light · Memory · Gesture
          </p>
          <div className="mt-10 max-w-[19rem] md:mt-auto">
            <div className="relative aspect-square bg-[#1b1814] p-2.5 shadow-2xl">
              <div className="relative h-full overflow-hidden">
                <Image
                  src={paintingPath("IMG_4196.jpg")}
                  alt="Framed atmospheric city painting"
                  fill
                  sizes="(max-width: 767px) 75vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between border-t border-white/15 pt-3 font-mono text-[7px] uppercase leading-5 tracking-[0.18em] text-white/30">
              <span>
                Curatorial note
                <br />
                No. 01
              </span>
              <span className="text-right">
                Color / atmosphere
                <br />
                Selected paintings
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2
            className="max-w-4xl"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
            }}
          >
            Paint is where observation becomes emotion.
          </h2>
          <p className="mt-9 max-w-2xl border-l border-accent/55 pl-6 text-sm leading-8 text-white/48">
            These works move between direct observation and imagination.
            Color does not simply describe the subject—it carries its
            temperature, rhythm, and memory.
          </p>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-5 font-mono text-[7px] uppercase leading-5 tracking-[0.18em] text-white/28">
            <span>Portraits</span>
            <span>Landscapes</span>
            <span>Inner worlds</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-40 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <div className="relative mx-auto aspect-square w-[88%] bg-[#181512] p-3 shadow-[0_45px_100px_rgba(0,0,0,0.48)] sm:p-5 lg:w-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={paintingPath("FullSizeRender 2.jpg")}
                alt="Expressive portrait in red and turquoise"
                fill
                sizes="(max-width: 1023px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              Room I · Presence
            </p>
            <h2
              className="mt-5"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 300,
                lineHeight: 0.85,
              }}
            >
              A face becomes a landscape.
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-8 text-white/48">
              Portraits emerge through complementary color and visible
              gesture. Their likeness matters, but their inner atmosphere
              matters more.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6">
              <PaintingFrame
                file="IMG_0426.jpg"
                alt="Blue and orange expressive portrait"
              />
              <div className="mt-16">
                <PaintingFrame
                  file="IMG_0622.jpg"
                  alt="Red profile portrait painting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#e2d9c7] py-28 text-[#19150f] md:py-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#19150f 0.5px, transparent 0.5px), linear-gradient(90deg, #19150f 0.5px, transparent 0.5px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-8 border-b border-black/20 pb-8 md:grid-cols-[0.65fr_1fr] md:items-end">
            <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#775719]">
              Room II · Atmosphere
            </p>
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Infant', serif",
                  fontSize: "clamp(3.8rem, 9vw, 8rem)",
                  fontWeight: 300,
                  lineHeight: 0.82,
                }}
              >
                Cities made of light.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-black/52">
                Architecture dissolves into weather, reflection, and color.
                The scene remains recognizable, but sensation takes the lead.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-start gap-8 md:grid-cols-[0.62fr_1fr_0.7fr]">
            <div className="relative aspect-square overflow-hidden bg-black/10 md:mt-40">
              <Image
                src={paintingPath("IMG_4198.jpg")}
                alt="Golden abstract landscape painting"
                fill
                sizes="(max-width: 767px) 100vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square bg-[#292118] p-3 shadow-2xl sm:p-5">
              <div className="relative h-full overflow-hidden">
                <Image
                  src={paintingPath("img-1213-web.jpg")}
                  alt="Atmospheric city painting in violet and orange"
                  fill
                  sizes="(max-width: 767px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-black/10 md:mt-20">
              <Image
                src={paintingPath("img-1216-web.jpg")}
                alt="Blue architectural landscape painting"
                fill
                sizes="(max-width: 767px) 100vw, 28vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-32 sm:px-8 md:py-48">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              Room III · Inner worlds
            </p>
            <h2
              className="mt-5"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 300,
                lineHeight: 0.84,
              }}
            >
              Beyond what the eye can see.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-8 text-white/48">
              Symbol, movement, and cosmic scale open another register of the
              practice—one where reality becomes a point of departure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-7">
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src={paintingPath("IMG_1345.JPG")}
                alt="Golden fish moving through a blue cosmic scene"
                fill
                sizes="(max-width: 1023px) 50vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-16 aspect-square overflow-hidden bg-white/5">
              <Image
                src={paintingPath("img-2858-web.jpg")}
                alt="Spiral galaxy painting"
                fill
                sizes="(max-width: 1023px) 50vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="relative -mt-10 ml-[18%] aspect-square w-[82%] overflow-hidden border-4 border-[#0a0908] bg-white/5 shadow-2xl">
              <Image
                src={paintingPath("IMG_1101.JPG")}
                alt="Dynamic falling figure painting"
                fill
                sizes="(max-width: 1023px) 40vw, 28vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src={paintingPath("img-3038-web.jpg")}
                alt="Abstract mechanical form painting"
                fill
                sizes="(max-width: 1023px) 50vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#11100e] py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/15 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent">
                The Salon
              </p>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "'Cormorant Infant', serif",
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  fontWeight: 300,
                  lineHeight: 0.85,
                }}
              >
                Selected works
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-6 text-white/38">
              A broader view across portraiture, landscape, city studies, and
              imagined scenes.
            </p>
          </div>

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-5 lg:columns-4">
            {salon.map((file, index) => (
              <figure
                key={file}
                className="group relative mb-3 break-inside-avoid overflow-hidden bg-white/5 p-2 sm:mb-5 sm:p-3"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={paintingPath(file)}
                    alt={`Selected painting ${index + 1} by Oleksandr Nazarchuk`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/12" />
                </div>
                <figcaption className="flex justify-between gap-3 px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                  <span>Painting {String(index + 1).padStart(2, "0")}</span>
                  <span>Oil / Mixed media</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[68svh] items-center overflow-hidden px-5 py-28 text-center sm:px-8">
        <Image
          src={paintingPath("IMG_4197.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,9,8,0.18),#0a0908_74%)]" />
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent">
            Original work & commissions
          </p>
          <h2
            className="mt-6"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 300,
              lineHeight: 0.86,
            }}
          >
            Bring a painted world into your space.
          </h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.24em] transition-all hover:border-accent hover:bg-accent hover:text-[#0a0908]"
          >
            Ask about a painting
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

function PaintingFrame({ file, alt }: { file: string; alt: string }) {
  return (
    <div className="relative aspect-square bg-[#1c1814] p-2 shadow-xl sm:p-3">
      <div className="relative h-full overflow-hidden">
        <Image
          src={paintingPath(file)}
          alt={alt}
          fill
          sizes="(max-width: 1023px) 45vw, 22vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
