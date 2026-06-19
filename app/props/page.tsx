import { CategoryPage } from "@/components/category-page";
import {
  scenicGallery,
  sculpturesGallery,
} from "@/lib/portfolio-data";

export default function PropsPage() {
  const props = [scenicGallery, sculpturesGallery].map(
    (discipline, index) => ({
      ...discipline,
      index: String(index + 1).padStart(2, "0"),
    }),
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
