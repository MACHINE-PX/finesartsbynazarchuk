import { CategoryPage } from "@/components/category-page";
import {
  eventsGallery,
  muralsGallery,
  paintingsGallery,
  pleinAirGallery,
} from "@/lib/portfolio-data";

export default function FineArtPage() {
  const fineArt = [
    paintingsGallery,
    pleinAirGallery,
    muralsGallery,
    ...eventsGallery,
  ].map((discipline, index) => ({
    ...discipline,
    index: String(index + 1).padStart(2, "0"),
  }));

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Paintings, murals, plein air, and events"
      intro="A curated view of Oleksandr's fine art practice, from plein air studies and painting competitions to murals, exhibitions, and live painting."
      disciplines={fineArt}
    />
  );
}
