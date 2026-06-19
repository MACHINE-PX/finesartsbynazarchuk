import { CategoryPage } from "@/components/category-page";
import { eventsGallery } from "@/lib/portfolio-data";

export default function EventsPage() {
  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Events"
      intro="Live painting, workshops, exhibitions, stage design pieces, and public-facing art experiences."
      disciplines={eventsGallery}
    />
  );
}
