import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function PaintingsPage() {
  const paintings = disciplines.filter((discipline) =>
    ["contest"].includes(discipline.id),
  );

  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Paintings"
      intro="Selected canvas works and competition pieces centered on atmosphere, memory, gesture, and painterly observation."
      disciplines={paintings}
    />
  );
}
