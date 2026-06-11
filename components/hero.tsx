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
      className="relative flex h-screen w-full items-end justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(1.22) saturate(1.08)" }}
        src="/sash-short.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-background/35" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.62) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <p
        className="absolute left-1/2 top-[24vh] z-10 -translate-x-1/2 uppercase text-accent sm:top-[23vh] lg:top-[22vh]"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.5em",
        }}
      >
        {siteConfig.eyebrow}
      </p>

      <div
        className="relative z-10 px-6 pb-[3vh] text-center transition-all duration-1000 sm:pb-[6vh] lg:pb-[5vh]"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h1
          className="mx-auto max-w-6xl uppercase text-foreground"
          style={{
            fontFamily: "'Cormorant Infant', serif",
            fontSize: "clamp(1.4rem, 4.0vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "0.04em",
          }}
        >
          {siteConfig.name}
        </h1>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60">
          {siteConfig.disciplines.map((discipline, index) => (
            <span
              key={discipline}
              className="flex items-center gap-6 text-foreground"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "7px",
                letterSpacing: "0.22em",
              }}
            >
              {index > 0 && <span className="text-[5px] text-accent">*</span>}
              {discipline.toUpperCase()}
            </span>
          ))}
        </div>

        <button
          onClick={scrollDown}
          className="mt-4 inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "7px",
              letterSpacing: "0.3em",
            }}
          >
            EXPLORE
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
