import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ArtistAdminDashboard } from "@/components/artist-admin-dashboard";
import { adminSections, readAdminMedia } from "@/lib/artist-admin";
import { isAdminAuthenticated } from "@/lib/artist-auth";

export const metadata: Metadata = {
  title: "Artist Admin | Oleksandr Nazarchuk",
};

export default async function ArtistAdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/artist-login");
  }

  const items = await readAdminMedia();

  return <ArtistAdminDashboard initialItems={items} sections={adminSections} />;
}
