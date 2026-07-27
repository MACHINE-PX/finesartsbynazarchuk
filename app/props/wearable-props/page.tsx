import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AdminManagedMedia } from "@/components/admin-managed-media";
import { SiteHeader } from "@/components/site-header";
import { HoverVideo } from "@/components/hover-video";

export const metadata: Metadata = { title: "Wearable Props | Oleksandr Nazarchuk" };

const root =
  "/images/Props%20%26%20Scenic%20-20260619T114546Z-3-001/Props%20%26%20Scenic/Wearable%20props";
const wearable = (file: string) => `${root}/${encodeURIComponent(file)}`;

const works = [
  {
    file: "cyborg headpiece.JPG",
    title: "Cyborg Headpiece",
    type: "Wearable sculpture",
  },
  {
    file: "Bungee Headpiece 2.PNG",
    title: "Bungee Headpiece",
    type: "Performance",
  },
  {
    file: "headpiece for King.jpg",
    title: "Headpiece for the King",
    type: "Character design",
  },
  {
    file: "cerceaux head accessories.JPG",
    title: "Cerceaux Accessories",
    type: "Performance",
  },
  {
    file: "Guard headpiece.JPG",
    title: "Guard Headpiece",
    type: "Character design",
  },
  {
    file: "cyborg hat (flyers).JPG",
    title: "Cyborg Flyers",
    type: "Headwear",
  },
  {
    file: "Guards Headpieces.PNG",
    title: "Guards Headpieces",
    type: "Ensemble",
  },
  {
    file: "headpieces for Antar(center)and for Prince (right  artist).jpg",
    title: "Antar & Prince",
    type: "Stage costume",
  },
  {
    file: "cyborgs headpieces(male flyers).JPG",
    title: "Male Flyers",
    type: "Cyborg series",
  },
  {
    file: "cyborg headpiece(1).JPG",
    title: "Cyborg Detail",
    type: "Wearable sculpture",
  },
  {
    file: "cyborg headpiece (1).JPG",
    title: "Female Cyborg Headpiece",
    type: "Wearable sculpture",
  },
  {
    file: "ritual zombie mask.jpg",
    title: "Ritual Zombie Mask",
    type: "Mask",
  },
];

const processImages = [
  {
    file: "mask process.jpg",
    title: "Mask process",
  },
  {
    file: "cyborg headpieces in progress.JPG",
    title: "Cyborg headpieces in progress",
  },
  {
    file: "cyborg headpiece .JPG",
    title: "Surface and construction",
  },
  {
    file: "cyborg headpiece.PNG",
    title: "Finished cyborg headpiece",
  },
  {
    file: "Bungee headpiece.PNG",
    title: "Bungee headpiece",
  },
  {
    file: "cerseaux head acsessories.PNG",
    title: "Cerceaux head accessories",
  },
];

const videos = [
  {
    file: "cyborg-headpiece-male-1-web.mp4",
    poster: "cyborg headpiece.JPG",
  },
  {
    file: "cyborg-headpiece-male-2-web.mp4",
    poster: "cyborg headpiece(1).JPG",
  },
  {
    file: "cyborg-headpiece-male-3-web.mp4",
    poster: "cyborgs headpieces(male flyers).JPG",
  },
];

export default function WearablePropsPage() {
  return (
    <main id="page-top" className="overflow-hidden bg-[#0a0908] text-[#eee9df]">
      <section className="relative min-h-[100svh]">
        <SiteHeader overlay />
        <Image
          src={wearable("foto for album cover wearable props.PNG")}
          alt="Wearable props by Oleksandr Nazarchuk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-black/10 to-black/35" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <div className="max-w-5xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#d5aa79]">
              Props & Scenic · Wearable archive
            </p>
            <h1 className="mt-7 font-serif font-light tracking-[-0.045em]">
              Wearable <span className="italic">Props</span>
            </h1>
            <p className="mt-7 max-w-2xl border-l border-[#d5aa79]/60 pl-6 text-[0.9rem] leading-7 text-white/72">
              Masks, headpieces, costume objects, and character-driven forms
              designed around movement, performance, and the human body.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-32">
        <div className="mb-14 grid gap-5 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#d5aa79]">
              Selected work
            </p>
            <h2 className="mt-5 font-serif font-light">Built for the body.</h2>
          </div>
          <p className="max-w-md text-[0.86rem] leading-7 text-white/45">
            Each object balances silhouette, weight, durability, finish, and
            the visual language of its character.
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <article key={work.file} className={index % 5 === 0 ? "sm:col-span-2" : ""}>
              <div
                className={`relative overflow-hidden bg-white/5 ${
                  index % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={wearable(work.file)}
                  alt={work.title}
                  fill
                  sizes={
                    index % 5 === 0
                      ? "(max-width: 639px) 100vw, 66vw"
                      : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl font-light">{work.title}</h3>
                <span className="pt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                  {work.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#d8cfbf] px-5 py-24 text-[#1a1612] sm:px-8 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8a5e35]">
            From workshop to stage
          </p>
          <h2 className="mt-5 max-w-4xl font-serif font-light">
            Process is part of the object.
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processImages.map((item) => (
              <figure key={item.file}>
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <Image
                    src={wearable(item.file)}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-black/45">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-32">
        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#d5aa79]">
          In motion
        </p>
        <h2 className="mt-5 max-w-4xl font-serif font-light">
          Form activated by performance.
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {videos.map((video, index) => (
            <HoverVideo
              key={video.file}
              src={wearable(video.file)}
              poster={wearable(video.poster)}
              label={`Cyborg headpiece video ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <AdminManagedMedia section="Wearable Props" />

      <section className="border-t border-white/10 px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#d5aa79]">
          Body · Movement · Character · Transformation
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif font-light">
          Have a character that needs a form?
        </h2>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] transition-colors hover:border-[#d5aa79] hover:bg-[#d5aa79] hover:text-black"
        >
          Discuss a wearable prop <ArrowUpRight size={13} />
        </Link>
      </section>
    </main>
  );
}
