import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { aboutSubtitle, aboutText, siteConfig } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
        <div className="relative min-h-[58vh] overflow-hidden bg-secondary">
          <Image
            src="/images/aboutme-web.jpg"
            alt="Oleksandr Nazarchuk working as a fine artist"
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
            quality={75}
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex flex-col justify-end">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-accent mb-5">
            About
          </p>
          <h1
            className="font-serif text-[clamp(4.6rem,11vw,9.5rem)] font-light leading-[0.69]"
          >
            {siteConfig.name}
          </h1>
          <p
            className="mt-6 uppercase font-mono text-[8px] tracking-[0.24em] text-foreground/72"
          >
            {aboutSubtitle}
          </p>
          <p
            className="mt-7 max-w-2xl text-[0.9rem] leading-8 text-foreground/72"
          >
            {aboutText}
          </p>
        </div>
      </section>
    </main>
  );
}
