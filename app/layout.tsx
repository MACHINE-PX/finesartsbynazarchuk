import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksandr Nazarchuk | Fine Arts by Nazarchuk",
  description:
    "Portfolio of Ukrainian fine artist Oleksandr Nazarchuk: impressionist painting, murals, plein air work, live events, and competitions.",
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
