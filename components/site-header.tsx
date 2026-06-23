"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/portfolio-data";

const links = [
  { label: "Fine Art", href: "/fine-art" },
  { label: "Props", href: "/props" },
  { label: "About", href: "/about" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const allLinks = [...links, { label: "Contact", href: "/contact" }];

  return (
    <header
      className={`left-0 right-0 top-0 z-50 ${
        overlay
          ? "absolute"
          : "sticky border-b border-foreground/10 bg-background/88 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:gap-8 md:px-8 md:py-5">
        <Link
          href="/"
          className="group min-w-0 shrink uppercase text-foreground font-serif text-[clamp(0.92rem,5vw,1.45rem)] tracking-[0.14em]"
          onClick={() => setOpen(false)}
        >
          <span className="block truncate">{siteConfig.name}</span>
          <span className="mt-1 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden min-w-0 items-center justify-end gap-x-2 rounded-full border border-foreground/10 bg-background/28 px-2 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-2 uppercase transition-all duration-300 hover:bg-foreground/10 font-mono text-[clamp(0.58rem,1.1vw,0.68rem)] tracking-[0.12em]`}
                style={{ color: active ? "#f0ece4" : "rgba(240,236,228,0.76)" }}
              >
                {link.label}
                {active && <span className="ml-2 text-accent">*</span>}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-4 py-2 uppercase text-background transition-all duration-300 hover:bg-accent font-mono text-[clamp(0.58rem,1.1vw,0.68rem)] tracking-[0.12em]"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-background/28 text-foreground backdrop-blur-md transition-colors hover:border-accent/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`mx-4 overflow-hidden rounded-2xl border border-foreground/10 bg-background/94 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-96 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-2">
          {allLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-4 uppercase text-foreground transition-colors hover:bg-foreground/8 font-mono text-[0.72rem] tracking-[0.14em]"
              >
                {link.label}
                {active && <span className="text-accent">*</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
