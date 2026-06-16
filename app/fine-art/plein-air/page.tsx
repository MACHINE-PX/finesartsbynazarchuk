import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function PleinAirPage() {
  const pleinAir = disciplines.filter((discipline) => discipline.id === "plein-air");

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Plein Air"
      intro="Outdoor paintings made directly in changing light, focused on color, air, water, landscape, and the immediacy of the moment."
      disciplines={pleinAir}
    />
  );
}
