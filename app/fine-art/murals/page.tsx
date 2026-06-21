import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Murals | Oleksandr Nazarchuk",
  description:
    "Immersive murals, decorative environments, and hand-painted architectural surfaces by Oleksandr Nazarchuk.",
};

const process = [
  {
    number: "01",
    title: "Listen",
    text: "Understanding the space, its atmosphere, and the story it needs to hold.",
  },
  {
    number: "02",
    title: "Imagine",
    text: "Turning references and ideas into a composition shaped for the architecture.",
  },
  {
    number: "03",
    title: "Build",
    text: "Layering drawing, color, light, texture, and illusion directly onto the surface.",
  },
  {
    number: "04",
    title: "Transform",
    text: "Revealing a place that feels larger, deeper, and entirely its own.",
  },
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
              className="max-w-5xl uppercase"
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
              href="#story"
              aria-label="Explore mural projects"
              className="mb-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-accent hover:bg-accent hover:text-background sm:flex"
            >
              <ArrowDown size={17} />
            </a>
          </div>
          <div className="mt-9 flex flex-col justify-between gap-6 border-t border-white/20 pt-5 sm:flex-row sm:items-start">
            <p className="max-w-xl text-sm leading-7 text-white/68">
              Walls become stages. Color becomes atmosphere. Every mural is
              imagined as part of the space not simply placed upon it.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/42">
              Scroll to enter the work
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 md:grid-cols-[0.55fr_1fr] md:py-40"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
          A wall is never just a wall
        </p>
        <div>
          <h2
            className="max-w-4xl"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(2.8rem, 7vw, 6.2rem)",
              fontWeight: 300,
              lineHeight: 0.95,
            }}
          >
            Painting stories at the scale of architecture.
          </h2>
          <p className="mt-9 max-w-2xl border-l border-accent/60 pl-6 text-sm leading-8 text-foreground/55">
            Each surface is approached as an immersive composition. The
            architecture, viewing distance, light, and movement through the
            room all become part of the painting.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1600px] px-4 pb-36 sm:px-6 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary lg:sticky lg:top-24">
            <Image
              src="/images/fineart/Murals/img-8119-web.jpg"
              alt="Large fantasy mural installed in an interior"
              fill
              sizes="(max-width: 1023px) 100vw, 70vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.025]"
            />
            <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/35 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
              Project 01
            </span>
          </div>

          <div className="flex flex-col lg:pt-[28vh]">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              Fantasy world
            </p>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 0.88,
              }}
            >
              A room with another world inside it.
            </h2>
            <p className="mt-7 text-sm leading-8 text-foreground/50">
              Figurative storytelling, dramatic light, and cinematic color
              extend the physical space into an imagined scene.
            </p>

            <div className="relative mt-14 ml-auto aspect-[2/3] w-[78%] overflow-hidden bg-secondary lg:w-full">
              <Image
                src="/images/fineart/Murals/img-8115-web.jpg"
                alt="Painted anatomical portrait mural detail"
                fill
                sizes="(max-width: 1023px) 70vw, 28vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-right font-mono text-[8px] uppercase tracking-[0.25em] text-foreground/30">
              Detail · Light / anatomy / atmosphere
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#ddd3bc] py-28 text-[#181612] md:py-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(#181612 0.7px, transparent 0.7px)",
            backgroundSize: "9px 9px",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-7 border-b border-black/20 pb-7 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#7a5c18]">
                Project 02 · Character studies
              </p>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "'Cormorant Infant', serif",
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                  fontWeight: 300,
                  lineHeight: 0.78,
                }}
              >
                Gesture & Form
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-black/55">
              Expressive figures and sculptural forms are built through
              dramatic color, directional brushwork, and close observation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.4fr_0.6fr]">
            <div className="relative aspect-[5/4] overflow-hidden bg-black/10">
              <Image
                src="/images/fineart/Murals/img-8116-web.jpg"
                alt="Expressive painted character detail from a mural"
                fill
                sizes="(max-width: 767px) 100vw, 68vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-black/10 md:mt-24">
              <Image
                src="/images/fineart/Murals/img-8630-web.jpg"
                alt="Ornamental blue mask mural painted on an interior wall"
                fill
                sizes="(max-width: 767px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white">
                <p className="font-mono text-[8px] uppercase tracking-[0.25em]">
                  Color · gesture · ornament
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-32 sm:px-8 md:py-48">
        <div className="grid items-center gap-16 lg:grid-cols-[0.68fr_1.32fr]">
          <div className="order-2 lg:order-1">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              Project 03 · Threshold
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
              The mural as a portal.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-8 text-foreground/50">
              A narrow architectural element becomes an unexpected passage
              into a luminous, otherworldly scene.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-7 border-t border-foreground/15 pt-6 font-mono text-[8px] uppercase tracking-[0.2em]">
              <div>
                <dt className="text-foreground/30">Surface</dt>
                <dd className="mt-2 text-foreground/70">Architectural panel</dd>
              </div>
              <div>
                <dt className="text-foreground/30">Approach</dt>
                <dd className="mt-2 text-foreground/70">Scenic illusion</dd>
              </div>
            </dl>
          </div>

          <div className="order-1 grid grid-cols-[0.62fr_0.38fr] items-end gap-4 lg:order-2">
            <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
              <Image
                src="/images/fineart/Murals/photo-output-web.jpg"
                alt="Decorative female figure mural painted on a narrow wall"
                fill
                sizes="(max-width: 1023px) 60vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="relative mb-[-9%] aspect-[2/3] overflow-hidden border-4 border-background bg-secondary shadow-2xl">
              <Image
                src="/images/fineart/Murals/IMG_3278.jpg"
                alt="Fantasy portal mural installed on an architectural panel"
                fill
                sizes="(max-width: 1023px) 35vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent">
                From blank surface to living image
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
              {process.map((step) => (
                <article
                  key={step.number}
                  className="min-h-60 border-t border-foreground/15 py-7 sm:px-7 sm:odd:border-r"
                >
                  <span className="font-mono text-[9px] tracking-[0.25em] text-accent">
                    {step.number}
                  </span>
                  <h3
                    className="mt-8"
                    style={{
                      fontFamily: "'Cormorant Infant', serif",
                      fontSize: "2rem",
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-xs leading-6 text-foreground/42">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden px-5 py-28 text-center sm:px-8">
        <Image
          src="/images/fineart/Murals/img-3843-web.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-35"
          style={{ objectPosition: "center 54%" }}
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(8,8,8,0.28),#080808_72%)]" />
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent">
            Have a wall in mind?
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
            Let&apos;s transform the space.
          </h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.24em] transition-all hover:border-accent hover:bg-accent hover:text-background"
          >
            Start a conversation
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
