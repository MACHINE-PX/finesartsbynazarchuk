import { CategoryPage } from "@/components/category-page";
import { scenicGallery } from "@/lib/portfolio-data";

export default function ScenicArtPage() {
  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Scenic Art & Faux Finishes"
      intro="Scenic surfaces, visual environments, painted finishes, event pieces, and atmospheric work for spaces and productions."
      disciplines={[scenicGallery]}
    />
  );
}
