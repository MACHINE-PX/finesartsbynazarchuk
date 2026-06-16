import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function MuralsPage() {
  const murals = disciplines.filter((discipline) => discipline.id === "murals");

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Murals"
      intro="Large-scale painted environments, decorative surfaces, and immersive mural work shaped by rhythm, color, and storytelling."
      disciplines={murals}
    />
  );
}
