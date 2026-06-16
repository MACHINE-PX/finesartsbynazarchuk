import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function WearablePropsPage() {
  const wearableProps = disciplines.filter((discipline) => discipline.id === "helmet");

  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Wearable Props"
      intro="Custom-painted wearable objects and prop surfaces, including competition work that extends painting beyond the canvas."
      disciplines={wearableProps}
    />
  );
}
