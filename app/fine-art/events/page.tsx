import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function EventsPage() {
  const events = disciplines.filter((discipline) => discipline.id === "events");

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Events"
      intro="Live painting, workshops, exhibitions, stage design pieces, and public-facing art experiences."
      disciplines={events}
    />
  );
}
