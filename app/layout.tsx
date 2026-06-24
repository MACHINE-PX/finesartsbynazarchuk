import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { HeadingComma } from "@/components/heading-comma";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&family=Space+Mono:ital,wght@0,400;1,400&display=swap"
        />
      </head>
      <body>
        <HeadingComma />
        {children}
        <SiteFooter />
        <a
          href="#"
          className="back-to-top-global"
          aria-label="Back to top"
          title="Back to top"
        >
          <span aria-hidden="true">↑</span>
          TOP
        </a>
      </body>
    </html>
  );
}
