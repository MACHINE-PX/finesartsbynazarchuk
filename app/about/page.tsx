import { SiteHeader } from "@/components/site-header";
import { aboutSubtitle, aboutText, siteConfig } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
        <div className="relative min-h-[58vh] overflow-hidden bg-secondary">
          <img
            src="/images/aboutme.png"
            alt="Oleksandr Nazarchuk working as a fine artist"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex flex-col justify-end">
          <p
            className="mb-5 uppercase text-accent"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.32em",
            }}
          >
            About
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.9,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            className="mt-6 uppercase text-foreground/72"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.62rem, 1.6vw, 0.78rem)",
              letterSpacing: "0.16em",
              lineHeight: 1.7,
            }}
          >
            {aboutSubtitle}
          </p>
          <p
            className="mt-7 max-w-2xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(240,236,228,0.62)",
              fontSize: "0.95rem",
              lineHeight: 1.9,
            }}
          >
            {aboutText}
          </p>
        </div>
      </section>
    </main>
  );
}
