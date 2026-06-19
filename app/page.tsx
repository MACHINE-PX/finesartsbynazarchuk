import Link from "next/link";
import { Contact } from "@/components/contact";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[100svh] overflow-hidden">
        <SiteHeader overlay />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "brightness(1.18) saturate(1.08)" }}
          src="/sash-short.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-background/38" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.68) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: "linear-gradient(to top, #080808, transparent)" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-end px-4 pb-[7vh] pt-28 text-center sm:px-6 sm:pb-[8vh]">
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(2rem, 13vw, 5.4rem)",
              fontWeight: 300,
              lineHeight: 0.88,
              letterSpacing: "0.04em",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            className="mt-4 uppercase text-foreground/70 sm:mt-5"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.5rem, 2.4vw, 0.56rem)",
              letterSpacing: "0.16em",
            }}
          >
            Fine Artist & Scenic Maker
          </p>
          <p
            className="mt-4 max-w-[42rem] uppercase text-foreground/62 sm:mt-5"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.52rem, 2.2vw, 0.68rem)",
              letterSpacing: "0.16em",
              lineHeight: 1.85,
            }}
          >
            Specialized in Plein Air Painting, Murals, Sculpting, and Custom
            Prop Fabrication blending traditional Fine Arts with technical
            on-stage illusions.
          </p>

          <a
            href="#explore"
            className="group mt-8 inline-flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-foreground sm:mt-10"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.24em",
            }}
          >
            EXPLORE MORE
            <svg
              aria-hidden="true"
              viewBox="0 0 24 12"
              className="h-3 w-6 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
            >
              <path
                d="M2 2l10 8L22 2"
                className="stroke-foreground/60 transition-colors duration-300 group-hover:stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="explore" className="mx-auto grid max-w-[1600px] gap-px bg-foreground/10 md:grid-cols-2">
        <HomeTile
          href="/fine-art"
          image="/images/Who%20i%20am2.png"
          label="Explore"
          title="Fine Art"
          align="left"
          imagePosition="center 34%"
          links={[
            { label: "Paintings", href: "/fine-art/paintings" },
            { label: "Plein Air", href: "/fine-art/plein-air" },
            { label: "Murals", href: "/fine-art/murals" },
            { label: "Events", href: "/fine-art/events" },
            { label: "Show all", href: "/fine-art" },
          ]}
        />
        <HomeTile
          href="/props"
          image="/images/IMG_3546.png"
          label="View"
          title="Props & Scenic"
          align="center"
          imagePosition="center 42%"
          links={[
            { label: "Scenic Art & Faux Finishes", href: "/props/scenic-art" },
            { label: "Sculptures", href: "/props/sculptures" },
            { label: "Wearable Props", href: "/props/wearable-props" },
            { label: "Show all", href: "/props" },
          ]}
        />
      </section>

      <Contact />
    </main>
  );
}

function HomeTile({
  href,
  image,
  label,
  title,
  align,
  imagePosition,
  links,
}: {
  href: string;
  image: string;
  label: string;
  title: string;
  align: "left" | "center";
  imagePosition: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group relative flex min-h-[62svh] items-end overflow-hidden bg-secondary sm:min-h-[58vh] lg:min-h-[68vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.025] group-hover:opacity-55 group-focus-within:scale-[1.025] group-focus-within:opacity-55"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-black/36 transition-colors duration-500 group-hover:bg-black/68 group-focus-within:bg-black/68" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/78 to-transparent" />
      <div
        className={`relative z-10 w-full p-5 text-white sm:p-8 md:p-10 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <span
          className="block uppercase leading-none text-white/70"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.62rem, 1.4vw, 0.8rem)",
            letterSpacing: "0.18em",
          }}
        >
          {label}
        </span>
        <Link
          href={href}
          className="mt-2 block uppercase leading-none text-white"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(1.7rem, 4vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Link>
        <span className="mt-5 block h-px w-14 bg-accent transition-all duration-300 group-hover:w-28" />

        <nav
          className={`mt-6 grid w-full max-w-[26rem] grid-cols-2 gap-2 uppercase leading-tight text-white transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.62rem, 1.4vw, 0.78rem)",
            letterSpacing: "0.02em",
          }}
          aria-label={`${title} categories`}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-10 items-center justify-center rounded-full border border-white/28 bg-black/20 px-3 py-2 text-center text-white/86 backdrop-blur-sm transition-all duration-300 hover:border-accent/70 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
