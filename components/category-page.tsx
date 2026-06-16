import { DisciplineSection } from "@/components/discipline-section";
import { SiteHeader } from "@/components/site-header";
import type { Discipline } from "@/lib/portfolio-data";

export function CategoryPage({
  eyebrow,
  title,
  intro,
  disciplines,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  disciplines: Discipline[];
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-24 md:grid-cols-[0.72fr_1fr] md:px-8 md:pt-32">
        <div>
          <p
            className="mb-5 uppercase text-accent"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.32em",
            }}
          >
            {eyebrow}
          </p>
        </div>
        <div>
          <h1
            className="max-w-4xl"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.9,
            }}
          >
            {title}
          </h1>
          <p
            className="mt-8 max-w-2xl border-l border-accent/45 pl-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(240,236,228,0.58)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            {intro}
          </p>
        </div>
      </section>

      {disciplines.map((discipline) => (
        <DisciplineSection key={discipline.id} {...discipline} />
      ))}
    </main>
  );
}
