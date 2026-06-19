import { CategoryPage } from "@/components/category-page";
import { sculpturesGallery } from "@/lib/portfolio-data";

export default function WearablePropsPage() {
  return (
    <CategoryPage
      eyebrow="Props & Scenic"
      title="Wearable Props"
      intro="Custom-painted wearable objects and prop surfaces, including competition work that extends painting beyond the canvas."
      disciplines={[
        {
          ...sculpturesGallery,
          id: "wearable-props-gallery",
          discipline: "Wearable Props",
          works: sculpturesGallery.works.slice(1),
        },
      ]}
    />
  );
}
