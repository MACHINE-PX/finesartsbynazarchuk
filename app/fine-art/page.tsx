import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function FineArtPage() {
  const fineArt = disciplines.filter((discipline) =>
    ["contest", "plein-air", "murals", "events"].includes(discipline.id),
  );

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Paintings, murals, plein air, and events"
      intro="A curated view of Oleksandr's fine art practice, from plein air studies and painting competitions to murals, exhibitions, and live painting."
      disciplines={fineArt}
    />
  );
}
