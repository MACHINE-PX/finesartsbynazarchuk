"use client";

import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
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
    <section id="contact" className="px-4 py-24 sm:px-6 md:px-8 md:py-40" ref={ref}>
      <div
        className="mx-auto max-w-7xl transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div className="mb-14 border-b border-border pb-6 md:mb-20">
          <span className="mb-3 block font-mono text-[9px] uppercase tracking-[0.34em] text-accent">
            05
          </span>
          <h2 className="mt-5 font-serif text-[clamp(3.8rem,10vw,7.2rem)] font-light leading-[0.72] text-[#f0ece4]">
            Contact
          </h2>
        </div>

        <div className="grid items-end gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-12 font-serif text-[clamp(1.3rem,2.5vw,1.9rem)] italic font-light leading-[1.45] text-white/75">
              &quot;{siteConfig.quote}&quot;
            </p>

            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex min-w-0 items-center gap-3 break-all text-muted-foreground transition-colors duration-300 hover:text-foreground font-mono text-[11px] tracking-[0.12em]"
              >
                <Mail size={13} />
                {siteConfig.email}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground font-mono text-[11px] tracking-[0.12em]"
              >
                <Phone size={13} />
                {siteConfig.phone}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 break-all text-muted-foreground transition-colors duration-300 hover:text-foreground font-mono text-[11px] tracking-[0.12em]"
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
            <p className="max-w-xl text-[0.9rem] leading-8 text-white/40">
              Available for murals, plein air painting, fine art commissions,
              live painting workshops, exhibitions, and collaborative cultural
              projects.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex self-start items-center gap-3 px-6 py-4 transition-all duration-300 hover:bg-foreground hover:text-background sm:px-8 border border-white/20 font-mono text-[9px] uppercase tracking-[0.22em] text-foreground/80"
            >
              GET IN TOUCH
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 md:mt-28 md:flex-row">
          <span className="uppercase font-serif text-[1.1rem] tracking-[0.18em] text-foreground/25">
            {siteConfig.shortName}
          </span>
          <span className="text-center font-mono text-[9px] tracking-[0.15em] text-foreground/18">
            PORTFOLIO - MURALS / PAINTING / EVENTS / PLEIN AIR
          </span>
        </div>
      </div>
    </section>
  );
}
