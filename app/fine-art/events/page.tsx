import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Film, Images, Play } from "lucide-react";
import { AdminManagedMedia } from "@/components/admin-managed-media";
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
  details?: string[];
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
    details: [
      "Inspired by an early twentieth-century historical photograph, this work reflects on the era of pearl diving as a foundation of the cultural memory of the Arabian Gulf.",
      "The quiet interaction between the two figures symbolizes knowledge, trust, and respect for the natural rhythm that shaped the coastal communities of Sharjah long before modern times.",
      "Through gesture, materiality, and the stillness of the scene, the artist explores the spirit of Sharjah as a legacy of manual labor, intergenerational transmission of knowledge, and a profound connection to the sea and to time.",
    ],
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
        file: "img-2012-web.jpg",
        alt: "Painting station beside motorcycles",
      },
      {
        file: "253465d3-aa21-4ec0-880b-cd2125732b2c-2-web.jpg",
        alt: "Art of Motorcycle event display",
      },
      {
        file: "img-9197-2-web.jpg",
        alt: "Motorcycle event artwork and audience moment",
      },
      {
        file: "img-9221-web.jpg",
        alt: "Art of Motorcycle exhibition detail",
      },
      {
        file: "img-2017-web.jpg",
        alt: "Art of Motorcycle event documentation",
      },
      {
        file: "img-2010-web.jpg",
        alt: "Artist painting at the motorcycle event",
      },
      {
        file: "img-9198-web.jpg",
        alt: "Artist painting live at night",
      },
      {
        file: "img-9269-web.jpg",
        alt: "Public moment at the Art of Motorcycle event",
      },
      {
        file: "img-9280-web.jpg",
        alt: "Artist holding a canvas during Art of Motorcycle",
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
    title: "MasterClass University Of Arts Sharjah",
    eyebrow: "Workshop",
    description:
      "Masterclass documentation from the Fairytale Mural project with second-year UAS students.",
    details: [
      "An exploration of scale and imagination. In this project, students mastered composition, color theory, and atmosphere to bring a large-scale painting to life, blending visual references into a captivating fairy-tale aesthetic.",
    ],
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
    details: [
      "Scenic Design & Art Direction | World Stage Design Exhibition",
      "Representing La Perle Dubai, the city's leading and world-renowned theater, at World Stage Design, the premier global festival for performance designers organized by OISTAT.",
      "I was fully responsible for the entire pavilion build, executing everything from the structural scenic setup and montage to all custom artwork and scenic paintings for the exhibition stand.",
    ],
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
  {
    number: "07",
    title: "Creative Genius Award",
    eyebrow: "Award",
    description:
      "Award recognition celebrating creative work and artistic contribution.",
    folder: "AWARD - CREATIVE GENIUS AWARD",
    tone: "paper",
    media: [
      {
        file: "Captura de pantalla 2026-07-27 140657.png",
        alt: "Creative Genius Award trophy for Oleksandr Nazarchuk",
        featured: true,
      },
      {
        file: "Captura de pantalla 2026-07-27 140805.png",
        alt: "Creative Genius Award presentation for Oleksandr Nazarchuk",
      },
    ],
  },
];

const heroGroup = eventGroups[3];
const hero = heroGroup.media[0];
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
          src={eventPath(heroGroup.folder, hero.file)}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "42% 18%" }}
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.38)_52%,rgba(8,8,8,0.8)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between border-b border-white/25 pb-4 font-mono text-[8px] uppercase tracking-[0.28em] text-white/60">
            <span>Fine Art / Events Archive</span>
            <span className="text-[#c99762]">EVENTS folder only</span>
          </div>

          <div className="py-16">
            <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-[#c99762]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#c99762]" />
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
                <Images size={12} className="text-[#c99762]" />
                {totalAssets - videoCount} images
              </span>
              <span className="inline-flex items-center gap-2">
                <Film size={12} className="text-[#c99762]" />
                {videoCount} videos
              </span>
              <span>{eventGroups.length} event groups</span>
            </div>
            <a
              href="#events-grid"
              className="inline-flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 hover:text-[#c99762]"
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
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#c99762]">
            Organized by folder
          </p>
          <h2 className="event-display mt-7">
            One archive, {eventGroups.length} chapters.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eventGroups.map((group) => (
            <a
              key={group.number}
              href={`#${group.number}-${group.title.toLowerCase().replaceAll(" ", "-")}`}
              className="group border border-white/12 bg-white/[0.02] p-3 transition-colors hover:border-[#c99762]/80"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                <Image
                  src={eventPath(group.folder, group.media[0].file)}
                  alt={group.media[0].alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#c99762]">
                  {group.number}
                </span>
                <span className="mt-5 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">
                  {group.eyebrow}
                </span>
                <span className="mt-3 block text-xl transition-colors group-hover:text-[#c99762]">
                  {group.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {eventGroups.map((group) => (
        <EventSection key={group.title} group={group} />
      ))}

      <AdminManagedMedia section="Events" />

      <section className="border-t border-[#c99762]/30 px-5 py-28 text-center sm:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#c99762]">
            Exhibitions / workshops / collaborations
          </p>
          <h2 className="event-display mt-7">Make the next moment live.</h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.24em] transition-all hover:border-[#c99762] hover:bg-[#c99762] hover:text-black"
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
  const motorcycle = group.title === "Art of Motorcycle";
  const id = `${group.number}-${group.title.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <section
      id={id}
      className={`relative py-24 md:py-36 ${
        dark ? "bg-[#0d0b0a] text-[#f3eee4]" : "bg-[#eee8dd] text-[#17130f]"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div
          className={`grid gap-8 border-b pb-8 md:grid-cols-[0.24fr_1fr] md:items-end md:gap-14 lg:pb-10 ${
            dark ? "border-white/12" : "border-black/15"
          }`}
        >
          <div>
            <ActLabel number={group.number} label={group.eyebrow} dark={!dark} />
          </div>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.48fr] lg:items-end">
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

        {group.details ? (
          <div
            className={`mx-auto mt-10 max-w-5xl space-y-5 text-[1rem] leading-8 ${
              dark ? "text-white/62" : "text-black/68"
            }`}
          >
            {group.details.map((detail, index) =>
              index === 0 && group.number === "06" ? (
                <p key={detail} className="font-semibold">
                  {detail}
                </p>
              ) : (
                <p key={detail}>{detail}</p>
              ),
            )}
          </div>
        ) : null}

        <div
          className={
            motorcycle
              ? "mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7"
              : "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6"
          }
        >
          {mediaItems.map((media, index) => (
            <div
              key={`${group.title}-${media.file}`}
              className={`relative overflow-hidden bg-black/10 shadow-xl shadow-black/10 ${
                motorcycle ? motorcycleTileClass(index) : mediaTileClass(media)
              }`}
            >
              <MediaFrame
                group={group}
                media={media}
                priority={index === 0 && group.number === "01"}
                fit={motorcycle ? "cover" : "contain"}
              />
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

function motorcycleTileClass(index: number) {
  const classes = [
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
    "aspect-[4/5] lg:col-span-4",
  ];

  return classes[index] ?? "aspect-[4/5] lg:col-span-4";
}

function mediaTileClass(media: EventMedia) {
  if (media.type === "video") {
    return "aspect-video";
  }

  return "aspect-[4/3]";
}

function MediaFrame({
  group,
  media,
  priority = false,
  fit = "contain",
}: {
  group: EventGroup;
  media: EventMedia;
  priority?: boolean;
  fit?: "contain" | "cover";
}) {
  if (media.type === "video") {
    return (
      <div className="group relative h-full w-full">
        <video
          src={eventPath(group.folder, media.file)}
          poster={media.poster ? eventPath(group.folder, media.poster) : undefined}
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
          className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        />
        <div className="pointer-events-none absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#c99762] text-black">
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
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
      className={`transition-transform duration-500 hover:scale-[1.015] ${
        fit === "cover" ? "object-cover" : "object-contain"
      }`}
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
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c99762] text-[#b47a3d]">
        {number}
      </span>
      {label}
    </div>
  );
}

function Stamp({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`absolute right-4 top-4 border-2 border-[#c99762] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.22em] ${
        dark ? "bg-[#eee8dd] text-[#9b6732]" : "bg-[#0d0b0a]/72 text-[#c99762]"
      }`}
    >
      {children}
    </span>
  );
}
