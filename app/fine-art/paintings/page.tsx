import { CategoryPage } from "@/components/category-page";
import { paintingsGallery } from "@/lib/portfolio-data";

export default function PaintingsPage() {
  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Paintings"
      intro="Selected canvas works and competition pieces centered on atmosphere, memory, gesture, and painterly observation."
      disciplines={[paintingsGallery]}
    />
  );
}
