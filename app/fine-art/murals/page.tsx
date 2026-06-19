import { CategoryPage } from "@/components/category-page";
import { muralsGallery } from "@/lib/portfolio-data";

export default function MuralsPage() {
  return (
    <CategoryPage
      eyebrow="Fine Art"
      title="Murals"
      intro="Large-scale painted environments, decorative surfaces, and immersive mural work shaped by rhythm, color, and storytelling."
      disciplines={[muralsGallery]}
    />
  );
}
