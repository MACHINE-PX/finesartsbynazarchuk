import { CategoryPage } from "@/components/category-page";
import { sculpturesGallery } from "@/lib/portfolio-data";

export default function SculpturesPage() {
  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Sculptures & Object Work"
      intro="Painted objects, dimensional surfaces, decorative pieces, and scenic forms treated with Oleksandr's painterly language."
      disciplines={[sculpturesGallery]}
    />
  );
}
