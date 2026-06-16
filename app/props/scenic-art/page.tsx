import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function ScenicArtPage() {
  const scenic = disciplines.filter((discipline) =>
    ["murals", "events"].includes(discipline.id),
  );

  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Scenic Art & Faux Finishes"
      intro="Scenic surfaces, visual environments, painted finishes, event pieces, and atmospheric work for spaces and productions."
      disciplines={scenic}
    />
  );
}
