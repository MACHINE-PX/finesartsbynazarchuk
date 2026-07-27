import Image from "next/image";
import { AdminManagedMedia } from "@/components/admin-managed-media";
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
          <div className="mt-10 max-w-2xl border-t border-foreground/12 pt-7 text-[0.92rem] leading-7 text-foreground/72">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-none">
              When I&apos;m Not Creating Art...
            </h2>
            <p className="mt-5">
              <strong className="text-foreground">The Rhythm:</strong> Music
              is my second favorite thing to do. As a self-taught musician, I
              express my rhythm on the drums and am currently expanding my
              skills by learning to play the bass.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">The Movement:</strong>{" "}
              Staying active is a huge part of my lifestyle. I&apos;ve been
              riding and practicing BMX since university, and it remains my
              go-to sport and passion during my free time.
            </p>
          </div>
        </div>
      </section>

      <AdminManagedMedia section="About" />
    </main>
  );
}
