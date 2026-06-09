"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/portfolio-data";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  const scrollDown = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/sash-short.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-background/55" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,8,8,0.08) 0%, rgba(8,8,8,0.82) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <div
        className="relative z-10 px-6 text-center transition-all duration-1000"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <p
          className="mb-6 uppercase text-accent"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.45em",
          }}
        >
          {siteConfig.eyebrow}
        </p>

        <h1
          className="mx-auto max-w-6xl uppercase text-foreground"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(4rem, 11vw, 10rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "0.04em",
          }}
        >
          {siteConfig.name}
        </h1>

        <p
          className="mx-auto mt-7 max-w-2xl text-foreground/70"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(1.25rem, 2.7vw, 2rem)",
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.35,
          }}
        >
          {siteConfig.quote}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60">
          {siteConfig.disciplines.map((discipline, index) => (
            <span
              key={discipline}
              className="flex items-center gap-6 text-foreground"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.22em",
              }}
            >
              {index > 0 && <span className="text-[5px] text-accent">*</span>}
              {discipline.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease 0.9s, color 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.3em",
          }}
        >
          EXPLORE
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
