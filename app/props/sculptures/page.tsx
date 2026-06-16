import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function SculpturesPage() {
  const sculptures = disciplines.filter((discipline) =>
    ["helmet", "murals"].includes(discipline.id),
  );

  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Sculptures & Object Work"
      intro="Painted objects, dimensional surfaces, decorative pieces, and scenic forms treated with Oleksandr's painterly language."
      disciplines={sculptures}
    />
  );
}
