import type { Metadata } from "next";
import { ArtistLoginForm } from "@/components/artist-login-form";

export const metadata: Metadata = {
  title: "Artist Login | Oleksandr Nazarchuk",
};

export default function ArtistLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#090908] px-5 py-16 text-[#f2eee5]">
      <ArtistLoginForm />
    </main>
  );
}
