import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fine Arts by Nazarchuk",
  description:
    "A fine arts portfolio spanning theater, costume, sculpture, and painting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
