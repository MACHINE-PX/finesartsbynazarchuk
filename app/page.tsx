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
          <p
            className="mb-4 uppercase text-accent sm:mb-6"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.42em",
            }}
          >
            Portfolio
          </p>
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
            className="mt-4 max-w-[34rem] text-foreground/62 sm:mt-5"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(0.98rem, 4.6vw, 1.35rem)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.35,
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
            <span className="relative h-4 w-8 transition-transform duration-300 group-hover:translate-y-1">
              <span className="absolute left-1 top-1 h-px w-5 origin-right rotate-45 bg-foreground/60 transition-colors duration-300 group-hover:bg-accent" />
              <span className="absolute right-1 top-1 h-px w-5 origin-left -rotate-45 bg-foreground/60 transition-colors duration-300 group-hover:bg-accent" />
            </span>
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
        />
        <HomeTile
          href="/props"
          image="/images/SECONDPLACEHELMETCOMPETITION1.png"
          label="View"
          title="Props & Scenic"
          align="center"
        />
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-px bg-foreground/10 p-px md:grid-cols-2">
        <HomeLinkPanel
          image="/images/Who%20i%20am2.png"
          links={[
            { label: "Paintings", href: "/fine-art/paintings" },
            { label: "Plein Air", href: "/fine-art/plein-air" },
            { label: "Murals", href: "/fine-art/murals" },
            { label: "Events", href: "/fine-art/events" },
            { label: "Show all", href: "/fine-art" },
          ]}
        />
        <HomeLinkPanel
          image="/images/SECONDPLACEHELMETCOMPETITION1.png"
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
}: {
  href: string;
  image: string;
  label: string;
  title: string;
  align: "left" | "center";
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[44svh] items-end overflow-hidden bg-secondary sm:min-h-[42vh]"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/18" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/78 to-transparent" />
      <div
        className={`relative z-10 w-full p-5 text-white sm:p-8 ${
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
        <span
          className="mt-2 block uppercase leading-none text-white"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(1.7rem, 4vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </span>
        <span className="mt-5 block h-px w-14 bg-accent transition-all duration-300 group-hover:w-28" />
      </div>
    </Link>
  );
}

function HomeLinkPanel({
  image,
  links,
}: {
  image: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group relative flex min-h-[42svh] items-center justify-center overflow-hidden bg-secondary sm:min-h-[38vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/72 transition-colors group-hover:bg-black/60" />
      <div className="absolute inset-3 border border-foreground/10 opacity-70 transition-colors duration-300 group-hover:border-accent/35 sm:inset-5" />
      <div
        className="relative z-10 flex max-w-[88%] flex-col items-center gap-2 text-center uppercase leading-tight text-white"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(0.62rem, 1.4vw, 0.78rem)",
          letterSpacing: "0.02em",
        }}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-foreground/15 px-3 py-1.5 text-foreground/82 transition-all duration-300 hover:border-accent/60 hover:bg-foreground/10 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
