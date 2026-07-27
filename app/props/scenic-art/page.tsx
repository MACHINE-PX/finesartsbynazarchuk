import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Scenic Art, Faux Finishes & Props | Oleksandr Nazarchuk",
};

const base =
  "/images/Props%20%26%20Scenic%20-20260619T114546Z-3-001/Props%20%26%20Scenic/Scenic%20Art%20%26%20Faux%20finishes";
const scenic = (file: string) => `${base}/${encodeURIComponent(file)}`;

const props = [
  {
    file: "food-props-banana-web.jpg",
    title: "Banana Food Prop",
    type: "Food prop",
    alt: "Food prop banana",
    className:
      "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3",
  },
  {
    file: "cabaret-mask-1-web.jpg",
    title: "Cabaret Mask 01",
    type: "Mask",
    alt: "Cabaret mask",
    className:
      "lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2",
  },
  {
    file: "cabaret-mask-2-web.jpg",
    title: "Cabaret Mask 02",
    type: "Mask",
    alt: "Cabaret mask",
    className:
      "lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-1",
  },
  {
    file: "food-prop-capsicum-web.jpg",
    title: "Capsicum Food Prop",
    type: "Food prop",
    alt: "Food prop capsicum",
    className:
      "lg:col-start-4 lg:col-span-2 lg:row-start-1 lg:row-span-3",
  },
  {
    file: "antique-key-web.jpg",
    title: "Antique Key",
    type: "EVA foam finish",
    alt: "Antique key made from EVA foam with faux finish",
    className:
      "lg:col-start-6 lg:col-span-2 lg:row-start-1 lg:row-span-3",
  },
  {
    file: "food-props-avocado-web.jpg",
    title: "Avocado Food Prop",
    type: "Food prop",
    alt: "Food prop avocado",
    className:
      "lg:col-start-8 lg:col-span-2 lg:row-start-1 lg:row-span-3",
  },
  {
    file: "magic-book-988-web.jpg",
    title: "Magic Book",
    type: "EVA foam / LED",
    alt: "Magic book made from EVA foam, air dry clay, and LED",
    className:
      "lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-6",
  },
  {
    file: "son-of-the-sun-1-web.jpg",
    title: "Son of the Sun 01",
    type: "Foam mask",
    alt: "Son of the Sun mask made from expanding foam",
    className:
      "lg:col-start-1 lg:col-span-2 lg:row-start-4 lg:row-span-3",
  },
  {
    file: "padlock-web.jpg",
    title: "Padlock",
    type: "EVA foam finish",
    alt: "Padlock made from EVA foam with faux finish",
    className:
      "lg:col-start-3 lg:col-span-2 lg:row-start-4 lg:row-span-3",
  },
  {
    file: "son-of-the-sun-2-web.jpg",
    title: "Son of the Sun 02",
    type: "Foam mask",
    alt: "Son of the Sun mask made from expanding foam",
    className:
      "lg:col-start-5 lg:col-span-2 lg:row-start-4 lg:row-span-3",
  },
  {
    file: "son-of-the-sun-3-web.jpg",
    title: "Son of the Sun 03",
    type: "Foam mask",
    alt: "Son of the Sun mask made from expanding foam",
    className:
      "lg:col-start-7 lg:col-span-3 lg:row-start-4 lg:row-span-3",
  },
  {
    file: "props1.jpeg",
    title: "Fantasy Axe",
    type: "Hand prop",
    alt: "Handcrafted fantasy prop axe",
    className:
      "lg:col-start-1 lg:col-span-3 lg:row-start-7 lg:row-span-4",
  },
  {
    file: "props2.jpeg",
    title: "Scenic Prop Study 01",
    type: "Hand prop",
    alt: "Handcrafted scenic prop",
    className:
      "lg:col-start-4 lg:col-span-3 lg:row-start-7 lg:row-span-4",
  },
  {
    file: "props3.jpeg",
    title: "Scenic Prop Study 02",
    type: "Hand prop",
    alt: "Handcrafted scenic prop",
    className:
      "lg:col-start-7 lg:col-span-3 lg:row-start-7 lg:row-span-4",
  },
  {
    file: "props4.jpeg",
    title: "Fantasy Blade",
    type: "Hand prop",
    alt: "Handcrafted fantasy prop blade",
    className:
      "lg:col-start-10 lg:col-span-3 lg:row-start-7 lg:row-span-4",
  },
  {
    file: "props5.jpeg",
    title: "Aged Revolver",
    type: "Hand prop",
    alt: "Handcrafted aged revolver prop",
    className:
      "lg:col-start-1 lg:col-span-3 lg:row-start-11 lg:row-span-4",
  },
  {
    file: "props6.jpeg",
    title: "Fantasy Skull",
    type: "Hand prop",
    alt: "Handcrafted fantasy skull prop",
    className:
      "lg:col-start-4 lg:col-span-3 lg:row-start-11 lg:row-span-4",
  },
];

const archive = [
  "IMG_3672.JPG", "IMG_3675.JPG", "IMG_3676.JPG", "IMG_3684.JPG",
  "IMG_3685.JPG", "IMG_3687.JPG", "IMG_3689.JPG", "IMG_3690.JPG",
  "IMG_3691.JPG", "IMG_3692.JPG", "IMG_3693.JPG", "IMG_3695.JPG",
  "IMG_3696.JPG", "IMG_3697.JPG", "IMG_3698.JPG", "IMG_3702.JPG",
  "IMG_3703.JPG", "IMG_3704.JPG",
];

export default function ScenicArtPage() {
  return (
    <main id="page-top" className="overflow-hidden bg-[#17130f] text-[#eee5d5]">
      <SiteHeader />
      <section className="relative mx-auto grid min-h-[92svh] max-w-[1700px] gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-6 lg:py-24">
        <div className="relative z-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#7ec5b2]">
            Props & Scenic · Material archive
          </p>
          <h1 className="mt-7 max-w-3xl font-serif font-light tracking-[-0.045em]">
            Scenic Art,
            <br />
            <span className="italic text-[#c99762]">
              Faux Finishes & Props
            </span>
          </h1>
          <p className="mt-9 max-w-lg border-l border-[#7ec5b2]/45 pl-6 text-[0.9rem] leading-8 text-white/48">
            Wood becomes aged timber. Paint becomes oxidized metal. New
            objects acquire memory through layered color, abrasion, patina,
            ornament, and illusion.
          </p>
        </div>
        <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[680px]">
          <ImageCard
            file="Pochade Box for Plein Air 03 .JPG"
            alt="Pochade box with scenic faux finish"
            sizes="(max-width: 1023px) 72vw, 47vw"
            className="left-[2%] top-[4%] z-10 aspect-[3/2] w-[76%] -rotate-2 sm:left-[5%] sm:w-[68%] lg:left-[3%] lg:top-[3%] lg:w-[67%]"
          />
          <ImageCard
            file="Wood carved Mirror with a special effectJPG.jpg"
            alt="Wood carved mirror with a special scenic effect"
            sizes="(max-width: 1023px) 42vw, 29vw"
            className="right-[-5%] top-[29%] z-20 aspect-square w-[43%] rotate-3 sm:right-[-1%] sm:top-[24%] sm:w-[39%] lg:right-[-3%] lg:top-[22%] lg:w-[40%]"
          />
          <ImageCard
            file="Wood Carving and decoration.JPG"
            alt="Wood carving and decorative faux finish"
            sizes="(max-width: 1023px) 54vw, 35vw"
            className="bottom-[3%] left-[17%] z-30 aspect-square w-[57%] rotate-1 sm:left-[24%] sm:w-[51%] lg:bottom-[1%] lg:left-[28%] lg:w-[50%]"
          />
          <span className="absolute bottom-1 right-1 z-40 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25 sm:bottom-5 sm:right-3 sm:text-[8px] sm:tracking-[0.22em]">
            Surface / texture / time
          </span>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#100d0a] px-5 py-24 sm:px-8 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="font-serif font-light italic text-[#c99762]">Props</h2>
          <div className="mt-14 grid auto-rows-[84px] grid-cols-2 gap-3 sm:auto-rows-[110px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[78px] lg:grid-cols-12 lg:gap-3 xl:auto-rows-[92px] xl:gap-4">
            {props.map((prop) => (
              <figure
                key={prop.file}
                className={`group col-span-1 row-span-3 overflow-hidden bg-[#e8ddca] p-1.5 shadow-[0_22px_55px_rgba(0,0,0,.35)] sm:col-span-2 sm:p-2 ${prop.className}`}
              >
                <div className="relative h-[calc(100%-44px)] overflow-hidden">
                  <Image
                    src={scenic(prop.file)}
                    alt={prop.alt}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex min-h-11 items-start justify-between gap-3 px-1 pb-1 pt-3 font-mono uppercase tracking-[0.16em] text-black/46">
                  <span className="text-[8px] leading-4">{prop.title}</span>
                  <span className="max-w-[42%] text-right text-[7px] leading-4">
                    {prop.type}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d6c9b5] py-28 text-[#211a13] md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <h2 className="font-serif font-light uppercase text-[#211a13]">
            Faux Finishes & Mosaic
          </h2>
          <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {archive.map((file, index) => (
              <figure key={file} className="group bg-[#ede5d7] p-2 shadow-[0_18px_45px_rgba(55,38,20,.16)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={scenic(file)}
                    alt={`Scenic finish study ${index + 1}`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <figcaption className="flex justify-between px-1 pb-1 pt-3 font-mono text-[7px] uppercase tracking-[0.16em] text-black/35">
                  <span>Sample {String(index + 1).padStart(2, "0")}</span>
                  <span>Hand finished</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#b99a70] px-5 py-24 text-[#20160d] sm:px-8 md:py-36">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-black/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-black/10" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-8 border-b border-black/15 pb-9 md:grid-cols-[0.35fr_1fr] md:items-end">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/45">
              Fire · Grain · Line
            </span>
            <h2 className="font-serif font-light uppercase">
              Woodburning Technique
            </h2>
          </div>

          <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
            {[
              {
                file: "Woodburning Technique Notebook JPG.jpg",
                alt: "Woodburning technique notebook",
                width: 2048,
                height: 1519,
              },
              {
                file: "woodburning NoteBook .JPG",
                alt: "Woodburning notebook detail",
                width: 2048,
                height: 758,
              },
              {
                file: "Art Supplies Box - Woodburning Technique.JPG",
                alt: "Art supplies box decorated with woodburning technique",
                width: 2048,
                height: 1283,
              },
            ].map((item) => (
              <figure
                key={item.file}
                className="bg-[#dfc9a8] p-2 shadow-[0_24px_65px_rgba(52,28,10,.24)]"
              >
                <Image
                  src={scenic(item.file)}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c1715] px-5 py-24 sm:px-8 md:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_75%_35%,rgba(74,158,137,.3),transparent_38%)]" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="relative z-20">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#74baa7]">
              Patina · Oxidation · Ornament
            </span>
            <h2 className="mt-7 font-serif font-light uppercase text-[#eee5d5]">
              Patina & Oxidize Metal Finishes
            </h2>
            <div className="mt-9 h-px w-20 bg-[#c99762]" />
            <p className="mt-7 max-w-sm text-[0.86rem] leading-7 text-white/48">
              Layered turquoise, bronze, and worn metallic highlights turn
              carved surfaces into objects that appear shaped by time.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Wood Carving and decoration.JPG", "Wood carving with oxidized metal finish"],
              ["Wood carved Mirror with a special effect.JPG", "Wood carved mirror with patina finish"],
              ["Wood carved Mirror with a special effectJPG.jpg", "Detail of oxidized finish on a carved mirror"],
            ].map(([file, alt]) => (
              <figure
                key={file}
                className="bg-[#e8ddca] p-2 shadow-[0_24px_60px_rgba(0,0,0,.48)]"
              >
                <Image
                  src={scenic(file)}
                  alt={alt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-28 text-center sm:px-8">
        <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3.2rem,8vw,7rem)] font-light leading-[0.85]">
          Give a surface another life.
        </h2>
        <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-white/20 px-7 py-4 font-mono text-[9px] uppercase tracking-[0.22em] hover:border-[#7ec5b2] hover:bg-[#7ec5b2] hover:text-black">
          Discuss a scenic finish <ArrowUpRight size={13} />
        </Link>
      </section>
    </main>
  );
}

function ImageCard({
  file,
  alt,
  sizes,
  className,
}: {
  file: string;
  alt: string;
  sizes: string;
  className: string;
}) {
  return (
    <div
      className={`absolute bg-[#e8ddca] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,.48)] sm:p-2 ${className}`}
    >
      <div className="relative h-full overflow-hidden">
        <Image
          src={scenic(file)}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
