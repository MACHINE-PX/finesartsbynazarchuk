"use client";

import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/portfolio-data";

function useInView(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="px-6 py-40 md:px-8" ref={ref}>
      <div
        className="mx-auto max-w-7xl transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div className="mb-20 border-b border-border pb-6">
          <span
            className="mb-3 block text-accent"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.3em",
            }}
          >
            05
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              color: "#f0ece4",
            }}
          >
            Contact
          </h2>
        </div>

        <div className="grid items-end gap-16 md:grid-cols-2">
          <div>
            <p
              className="mb-12"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.45,
                color: "rgba(240,236,228,0.75)",
              }}
            >
              &quot;{siteConfig.quote}&quot;
            </p>

            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                }}
              >
                <Mail size={13} />
                {siteConfig.email}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                }}
              >
                <Instagram size={13} />
                {siteConfig.instagramHandle}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.85,
                color: "rgba(240,236,228,0.4)",
              }}
            >
              Available for theater productions, costume direction, sculptural
              installations, and painting commissions. National and
              international projects welcome.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex self-start items-center gap-3 px-8 py-4 transition-all duration-300 hover:bg-foreground hover:text-background"
              style={{
                border: "1px solid rgba(240,236,228,0.2)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(240,236,228,0.8)",
              }}
            >
              START A PROJECT
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 md:flex-row">
          <span
            className="uppercase"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              color: "rgba(240,236,228,0.25)",
            }}
          >
            {siteConfig.shortName}
          </span>
          <span
            className="text-center"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "rgba(240,236,228,0.18)",
            }}
          >
            2024 - THEATER / COSTUME / SCULPTURE / PAINTING
          </span>
        </div>
      </div>
    </section>
  );
}
