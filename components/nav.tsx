"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { disciplines, siteConfig } from "@/lib/portfolio-data";

const links = [
  ...disciplines.map((item) => ({
    label: item.discipline,
    href: `#${item.id}`,
  })),
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240,236,228,0.07)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <button
          onClick={() => go("#hero")}
          className="max-w-[68vw] truncate text-left uppercase text-foreground transition-colors duration-300 hover:text-accent"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(1rem, 3vw, 1.35rem)",
            fontWeight: 400,
            letterSpacing: "0.18em",
          }}
        >
          {siteConfig.name}
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="group relative text-muted-foreground transition-colors duration-300 hover:text-foreground"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
              }}
            >
              {link.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-6 border-t border-border bg-background px-8 py-6 md:hidden">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="text-left text-foreground"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
