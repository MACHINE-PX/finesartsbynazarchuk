import type { Metadata } from "next";
import { PleinAirWheel } from "@/components/plein-air-wheel";
import { SiteHeader } from "@/components/site-header";
import { pleinAirGallery } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Plein Air | Oleksandr Nazarchuk",
  description:
    "Outdoor paintings made directly in changing natural light by Oleksandr Nazarchuk.",
};

export default function PleinAirPage() {
  return (
    <main className="bg-[#d9d0bd]">
      <SiteHeader />
      <PleinAirWheel works={pleinAirGallery.works} />
    </main>
  );
}
