import { CategoryPage } from "@/components/category-page";
import { disciplines } from "@/lib/portfolio-data";

export default function PropsPage() {
  const props = disciplines.filter((discipline) =>
    ["helmet", "murals", "events"].includes(discipline.id),
  );

  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Scenic art, painted objects, and visual environments"
      intro="Object-based and scenic work including painted helmets, immersive murals, stage design, event pieces, decorative surfaces, and custom visual finishes."
      disciplines={props}
    />
  );
}
