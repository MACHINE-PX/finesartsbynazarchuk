import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Film, Images, Play } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Events | Oleksandr Nazarchuk",
  description:
    "Event archive with exhibitions, art competitions, live painting, masterclasses, object painting, and stage design by Oleksandr Nazarchuk.",
};

type EventMedia = {
  type?: "image" | "video";
  file: string;
  alt: string;
  poster?: string;
  featured?: boolean;
};

type EventGroup = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  folder: string;
  tone: "dark" | "paper";
  media: EventMedia[];
};

const eventPath = (folder: string, file: string) =>
  `/images/fineart/EVENTS/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

const eventGroups: EventGroup[] = [
  {
    number: "01",
    title: "The Spirit of Sharjah",
    eyebrow: "Art Competition",
    description:
      "Competition documentation around the painting process, presentation, and public recognition of the work.",
    folder: "Art Competition  - The Spirit of Sharjah",
    tone: "paper",
    media: [
      {
        file: "img-2436-web.jpg",
        alt: "Awarded Spirit of Sharjah painting",
        featured: true,
      },
      {
        file: "img-2537-2-web.jpg",
        alt: "Artist with certificate beside the Spirit of Sharjah painting",
      },
      {
        file: "img-3522-web.jpg",
        alt: "Spirit of Sharjah public event documentation",
      },
    ],
  },
  {
    number: "02",
    title: "Art of Motorcycle",
    eyebrow: "Live Painting",
    description:
      "AOM images gathered as a live event sequence: setup, crowd, motorcycles, painting, and the finished atmosphere.",
    folder: "ART OF MOTOCYCLE (AOM) - EVENT",
    tone: "dark",
    media: [
      {
        file: "img-2018-2-web.jpg",
        alt: "Live painting setup among motorcycles",
        featured: true,
      },
      {
        file: "img-2010-web.jpg",
        alt: "Artist painting at the motorcycle event",
      },
      {
        file: "img-2012-web.jpg",
        alt: "Painting station beside motorcycles",
      },
      {
        file: "img-2017-web.jpg",
        alt: "Art of Motorcycle event documentation",
      },
      {
        file: "img-9197-2-web.jpg",
        alt: "Motorcycle event artwork and audience moment",
      },
      {
        file: "img-9198-web.jpg",
        alt: "Artist painting live at night",
      },
      {
        file: "img-9221-web.jpg",
        alt: "Art of Motorcycle exhibition detail",
      },
      {
        file: "img-9269-web.jpg",
        alt: "Public moment at the Art of Motorcycle event",
      },
      {
        file: "img-9280-web.jpg",
        alt: "Artist holding a canvas during Art of Motorcycle",
      },
      {
        file: "253465d3-aa21-4ec0-880b-cd2125732b2c-2-web.jpg",
        alt: "Art of Motorcycle event display",
      },
    ],
  },
  {
    number: "03",
    title: "Exhibitions",
    eyebrow: "Public Rooms",
    description:
      "Installation views, exhibition walls, visitors, and award moments organized as one public-facing archive.",
    folder: "Exhibitions",
    tone: "paper",
    media: [
      {
        file: "img-4378-web.jpg",
        alt: "Artist receiving recognition at a public exhibition",
        featured: true,
      },
      {
        file: "img-4358-web.jpg",
        alt: "Exhibition documentation with artist and artwork",
      },
      {
        file: "img-2913-web.jpg",
        alt: "Paintings installed in an exhibition setting",
      },
      {
        file: "img-2912-web.jpg",
        alt: "Outdoor exhibition painting moment",
      },
      {
        file: "img-2288-web.jpg",
        alt: "Exhibition wall with framed painting",
      },
      {
        file: "img-2283-web.jpg",
        alt: "Paintings installed together in an exhibition",
      },
      {
        file: "img-0343-2-web.jpg",
        alt: "Painting displayed on a gallery wall",
      },
    ],
  },
  {
    number: "04",
    title: "Helmet Competition",
    eyebrow: "Painted Object",
    description:
      "Helmet competition material with object photos and motion clips from the same event folder.",
    folder: "Helmet Copetition",
    tone: "dark",
    media: [
      {
        file: "ea3cf8d3-7d31-4bb9-9337-dccb17b81b31-3-web.jpg",
        alt: "Artist presenting a painted helmet",
        featured: true,
      },
      {
        file: "img-5086-web.jpg",
        alt: "Painted helmet displayed as an art object",
      },
      {
        file: "img-5082-3-web.jpg",
        alt: "Painted helmet competition detail",
      },
      {
        type: "video",
        file: "IMG_1600.MOV",
        poster: "img-5086-web.jpg",
        alt: "Helmet competition video documentation",
      },
      {
        type: "video",
        file: "video-output-048DFE77-DCB9-47A3-9E9B-DB9AA89A1358.MOV",
        poster: "ea3cf8d3-7d31-4bb9-9337-dccb17b81b31-3-web.jpg",
        alt: "Painted helmet competition motion clip",
      },
    ],
  },
  {
    number: "05",
    title: "MasterClass UAS",
    eyebrow: "Workshop",
    description:
      "Masterclass documentation from the Fairytale Mural project with second-year UAS students.",
    folder: "MasterClass UAS",
    tone: "paper",
    media: [
      {
        file: "MasterClass - Fairytale Mural UAS Second year Students.png",
        alt: "MasterClass Fairytale Mural with UAS second year students",
        featured: true,
      },
      {
        file: "MasterClass - Fairytale Mural UAS Second year Students..png",
        alt: "MasterClass mural process with UAS students",
      },
      {
        file: "MasterClass - Fairytale Mural UAS Second year Students.(1).png",
        alt: "Completed Fairytale Mural masterclass documentation",
      },
    ],
  },
  {
    number: "06",
    title: "World Stage Design",
    eyebrow: "Stage Design",
    description:
      "Canvases and documentation connected to World Stage Design and the performance world of La Perle.",
    folder: "World Stage Design",
    tone: "dark",
    media: [
      {
        file: "91058fbf-2ede-4bff-ae6a-ec7620d59897-web.jpg",
        alt: "World Stage Design exhibition installation",
        featured: true,
      },
      {
        file: "01e37ca4-1c05-4293-83b7-487ec7520e66-web.jpg",
        alt: "World Stage Design artwork documentation",
      },
      {
        file: "06d9ad8b-2c1e-49f5-979b-db0c871ce255-web.jpg",
        alt: "Stage design canvas documentation",
      },
      {
        file: "44d81f9a-5c3a-426b-9a09-282a64d488c1-web.jpg",
        alt: "World Stage Design public artwork moment",
      },
      {
        file: "img-3260-web.jpg",
        alt: "Stage painting created for World Stage Design",
      },
      {
        file: "img-8832-web.jpg",
        alt: "World Stage Design artwork detail",
      },
      {
        file: "img-8833-web.jpg",
        alt: "World Stage Design event documentation",
      },
    ],
  },
];

const hero = eventGroups[1].media[5];
const totalAssets = eventGroups.reduce((count, group) => count + group.media.length, 0);
const videoCount = eventGroups.reduce(
  (count, group) => count + group.media.filter((media) => media.type === "video").length,
  0,
);

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-[#080808] text-[#f3eee4]">
      <section className="relative min-h-[100svh]">
        <SiteHeader overlay />
        <Image
          src={eventPath(eventGroups[1].folder, hero.file)}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 36%" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.94)_0%,rgba(8,8,8,0.22)_58%,rgba(8,8,8,0.76)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between border-b border-white/25 pb-4 font-mono text-[8px] uppercase tracking-[0.28em] text-white/60">
            <span>Fine Art / Events Archive</span>
            <span className="text-[#ff5538]">EVENTS folder only</span>
          </div>

          <div className="py-16">
            <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-[#ff5538]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5538]" />
              Images / Video
            </div>
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(6rem, 21vw, 16rem)",
                fontWeight: 300,
                lineHeight: 0.62,
              }}
            >
              Events
            </h1>
            <p className="mt-10 max-w-xl text-[0.9rem] leading-8 text-white/68">
              A cleaner archive of competitions, exhibitions, workshops, live
              painting, painted objects, and stage design moments.
            </p>
          </div>

          <div className="grid gap-5 border-t border-white/25 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[7px] uppercase tracking-[0.2em] text-white/45">
              <span className="inline-flex items-center gap-2">
                <Images size={12} className="text-[#ff5538]" />
                {totalAssets - videoCount} images
              </span>
              <span className="inline-flex items-center gap-2">
                <Film size={12} className="text-[#ff5538]" />
                {videoCount} videos
              </span>
              <span>{eventGroups.length} event groups</span>
            </div>
            <a
              href="#events-grid"
              className="inline-flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 hover:text-[#ff5538]"
            >
              Open archive <ArrowDown size={12} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="events-grid"
        className="mx-auto grid max-w-[1500px] gap-12 px-5 py-28 sm:px-8 md:grid-cols-[0.36fr_1fr] md:py-36"
      >
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#ff5538]">
            Organized by folder
          </p>
          <h2 className="event-display mt-7">One archive, six chapters.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eventGroups.map((group) => (
            <a
              key={group.number}
              href={`#${group.number}-${group.title.toLowerCase().replaceAll(" ", "-")}`}
              className="group border border-white/12 p-5 transition-colors hover:border-[#ff5538]/80"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#ff5538]">
                {group.number}
              </span>
              <span className="mt-10 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">
                {group.eyebrow}
              </span>
              <span className="mt-3 block text-2xl transition-colors group-hover:text-[#ff5538]">
                {group.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {eventGroups.map((group, index) => (
        <EventSection key={group.title} group={group} />
      ))}

      <section className="border-t border-[#ff5538]/30 px-5 py-28 text-center sm:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#ff5538]">
            Exhibitions / workshops / collaborations
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

function EventSection({ group }: { group: EventGroup }) {
  const featured = group.media.find((media) => media.featured) ?? group.media[0];
  const supporting = group.media.filter((media) => media !== featured);
  const mediaItems = [featured, ...supporting];
  const dark = group.tone === "dark";
  const id = `${group.number}-${group.title.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <section
      id={id}
      className={`relative py-24 md:py-36 ${
        dark ? "bg-[#0d0b0a] text-[#f3eee4]" : "bg-[#eee8dd] text-[#17130f]"
      }`}
    >
      <div className="mx-auto max-w-[1640px] px-5 sm:px-8 lg:px-10">
        <div
          className={`grid gap-8 border-b pb-8 md:grid-cols-[0.32fr_1fr] md:items-end md:gap-14 lg:pb-10 ${
            dark ? "border-white/12" : "border-black/15"
          }`}
        >
          <div>
            <ActLabel number={group.number} label={group.eyebrow} dark={!dark} />
          </div>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <h2 className="event-display">{group.title}</h2>
            <p
              className={`max-w-md text-[0.9rem] leading-8 ${
                dark ? "text-white/56" : "text-black/60"
              }`}
            >
              {group.description}
            </p>
          </div>
        </div>

        <div
          className={`border-b pt-4 pb-5 font-mono text-[8px] uppercase tracking-[0.2em] ${
            dark
              ? "border-white/12 text-white/35"
              : "border-black/15 text-black/42"
          }`}
        >
          {group.media.length} assets / {group.folder}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 xl:gap-8">
          {mediaItems.map((media, index) => (
            <div
              key={`${group.title}-${media.file}`}
              className={`relative overflow-hidden bg-black/10 shadow-xl shadow-black/10 ${mediaTileClass(
                media,
                index,
              )}`}
            >
              <MediaFrame group={group} media={media} priority={index === 0 && group.number === "01"} />
              {index === 0 ? (
                <Stamp dark={!dark}>
                  {media.type === "video" ? "Video" : "Featured"}
                </Stamp>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function mediaTileClass(media: EventMedia, index: number) {
  if (media.type === "video") {
    return "aspect-video sm:col-span-2 lg:col-span-6";
  }

  if (index === 0) {
    return "aspect-[4/3] sm:col-span-2 lg:col-span-7 lg:row-span-2";
  }

  if (index === 1) {
    return "aspect-[4/3] lg:col-span-5";
  }

  if (index === 2) {
    return "aspect-[4/3] lg:col-span-5";
  }

  if (index % 6 === 3) {
    return "aspect-[4/3] sm:col-span-2 lg:col-span-6";
  }

  if (index % 6 === 4) {
    return "aspect-[4/3] lg:col-span-3";
  }

  if (index % 6 === 5) {
    return "aspect-[4/3] lg:col-span-3";
  }

  return "aspect-[4/3] sm:col-span-2 lg:col-span-6";
}

function MediaFrame({
  group,
  media,
  priority = false,
}: {
  group: EventGroup;
  media: EventMedia;
  priority?: boolean;
}) {
  if (media.type === "video") {
    return (
      <div className="group relative h-full w-full">
        <video
          src={eventPath(group.folder, media.file)}
          poster={media.poster ? eventPath(group.folder, media.poster) : undefined}
          controls
          playsInline
          preload="metadata"
          aria-label={media.alt}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5538] text-black">
          <Play size={14} fill="currentColor" />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={eventPath(group.folder, media.file)}
      alt={media.alt}
      fill
      priority={priority}
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 55vw"
      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
    />
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

function Stamp({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`absolute right-4 top-4 border-2 border-[#ff5538] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.22em] ${
        dark ? "bg-[#eee8dd] text-[#d83720]" : "bg-[#0d0b0a]/72 text-[#ff5538]"
      }`}
    >
      {children}
    </span>
  );
}
