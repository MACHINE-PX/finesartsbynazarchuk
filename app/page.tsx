import { Contact } from "@/components/contact";
import { DisciplineSection } from "@/components/discipline-section";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { disciplines } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />

      {disciplines.map((discipline, index) => (
        <div key={discipline.id}>
          <DisciplineSection {...discipline} />
          {index < disciplines.length - 1 && (
            <Marquee reverse={index % 2 === 0} />
          )}
        </div>
      ))}

      <Contact />
    </main>
  );
}
