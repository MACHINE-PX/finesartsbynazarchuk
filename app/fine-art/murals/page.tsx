import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AdminManagedMedia } from "@/components/admin-managed-media";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Murals | Oleksandr Nazarchuk",
  description:
    "Immersive murals and hand-painted architectural surfaces by Oleksandr Nazarchuk.",
};

const muralStories = [
  {
    src: "/images/MURALS-ART%20NUVOU2.png",
    alt: "Art Nouveau-inspired mural of a woman surrounded by flowers",
    title: "Art Nouveau-inspired mural for a private home.",
    text: "I painted this indoor mural to bring the elegant, organic feel of the Art Nouveau movement right into a home. It’s heavily inspired by those classic late-19th-century paintings of nature and nymphs. I wanted the character—with her flowing red hair and soft drapery—to look completely at peace, surrounded by water lilies and bright yellow irises. By framing the piece with those classic stylized curves, it acts almost like a decorative window, bringing a calm, artistic, and cozy vibe to the entire room.",
    imageClass: "aspect-[3/5]",
  },
  {
    src: "/images/mural1.png",
    alt: "Cosmic mural for the Artists’ Gym at La Perle Theater",
    title: "Mural for the Artists’ Gym at La Perle Theater (Dubai).",
    text: "This piece was specifically designed for the training facility where the show’s world-class acrobats and performers prepare. The mural pays tribute to the intense physical dedication behind the stage magic. The central character, a classic theatrical clown, lifts a golden dumbbell glowing with its own light, transforming the daily grind of strength training into a mystical, performative act. Set against a dynamic cosmic backdrop, the artwork seamlessly connects extreme athletic discipline with the universe of fantasy that these artists bring to life every single night.",
    imageClass: "aspect-[4/3]",
  },
  {
    src: "/images/mural2.png",
    alt: "God of War mural in a gaming room",
    title: "God of War mural for a gaming room.",
    text: "I painted this one for a gaming fan who wanted to bring the epic world of God of War into their setup. The mural captures Kratos and Atreus ready for battle, surrounded by enemies and the cold Norse landscape. I used a really bold, high-contrast color palette—mixing intense fiery oranges with deep blues and purples—to match the raw energy and action of the game. It was a ton of work getting the details of Kratos’ Leviathan Axe and Atreus’ bow right, but it completely transforms the room into the ultimate gaming sanctuary.",
    imageClass: "aspect-[4/5]",
  },
  {
    src: "/images/fineart/Murals/img-8630-web.jpg",
    alt: "Blue Japanese Hannya mask mural",
    title: "Japanese Hannya Mask Mural.",
    text: "For this project, I wanted to paint a modern, stylized take on the traditional Japanese Hannya mask. Instead of using the classic red colors, I went for a striking cool-toned palette with deep blues, teals, and purples to give it a fresh, glowing effect. Painting only a partial, cropped view of the mask allowed me to play with the negative space of the wall and create a much bolder, more mysterious focal point for the room. It was a really fun piece to work on, especially blending those smooth gradients on the face and horns.",
    imageClass: "aspect-[3/4]",
  },
  {
    src: "/images/mural4.png",
    alt: "Vertical fantasy mural inspired by Sky: Children of the Light",
    title: 'Mural inspired by the game "Sky: Children of the Light".',
    text: "This vertical mural is a tribute to the beautiful and whimsical indie game Sky on PS4. I wanted to capture that signature magical, dreamlike atmosphere, so I focused on a cool, moody color palette dominated by deep blues and teals, contrasted with the warm, glowing lights from the house windows and the lantern. Adding the tiny silhouette of the caped wanderer on the path really brings out that sense of quiet exploration and wonder that makes the game so unique. It was a great challenge adapting this fantasy landscape to fit perfectly onto a narrow, vertical wall section.",
    imageClass: "aspect-[1/3]",
    maxWidthClass: "max-w-[220px]",
  },
  {
    src: "/images/mural3.png",
    alt: "Psychedelic anatomical mural inspired by the band Tool",
    title: "Mural inspired by the band Tool.",
    text: "This indoor mural is a massive shoutout to the psychedelic, mystical artwork of the progressive metal band Tool. I wanted to dive into that deep, mind-expanding vibe, so I painted a stylized, otherworldly head that opens up into a glowing cosmic brain or consciousness. I used a trippy color mix—contrasting deep blues and teals on the metallic face skin with intense, fiery oranges and reds for the energy exploding from the top. It was awesome playing around with these surreal anatomical details to capture the band’s iconic aesthetic right onto the wall.",
    imageClass: "aspect-[3/4]",
  },
  {
    src: "/images/MURALS-ART%20NUVOU1.png",
    alt: "Art Nouveau triptych mural for a natural dye workshop",
    title: "Triptych mural for a natural dye workshop.",
    text: "I painted this three-panel mural for a workshop space where the owner creates beautiful natural textiles and dyes. The design is heavily inspired by Art Nouveau, using those classic, elegant outlines and flowing lines to showcase different botanical elements like water lilies, reeds, and wild flora. I chose a warm, earthy color palette to directly reflect the organic pigments and natural tones used in the studio itself. Creating the mural as a triptych of arched panels turned the wall into a set of artistic windows, making the whole workspace feel deeply connected to nature and traditional craft.",
    imageClass: "aspect-[4/5]",
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

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:pb-16 lg:px-12">
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
        className="border-y border-white/8 bg-[#1b1e22] text-foreground"
      >
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
          {muralStories.map((mural, index) => (
            <article
              key={mural.title}
              className={`grid gap-7 py-12 md:grid-cols-[minmax(190px,0.58fr)_minmax(0,1.45fr)] md:items-center md:gap-12 md:py-14 lg:gap-16 ${
                index > 0 ? "border-t border-white/12" : ""
              }`}
            >
              <figure
                className={`relative mx-auto w-full overflow-hidden bg-black/20 ${
                  mural.maxWidthClass ?? "max-w-[290px]"
                } ${mural.imageClass}`}
              >
                <Image
                  src={mural.src}
                  alt={mural.alt}
                  fill
                  sizes="(max-width: 767px) 78vw, 290px"
                  className="object-contain"
                />
              </figure>

              <div className="max-w-[640px]">
                <p className="font-sans text-[0.78rem] font-medium leading-5 text-white sm:text-[0.84rem]">
                  {mural.title}
                </p>
                <p className="mt-2 text-[0.88rem] leading-[1.62] text-white/82 sm:text-[0.94rem]">
                  {mural.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AdminManagedMedia section="Murals" />
    </main>
  );
}
