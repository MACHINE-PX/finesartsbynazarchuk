"use client";

import { useEffect, useRef, useState } from "react";
import type { Discipline, Work } from "@/lib/portfolio-data";

function useInView(threshold = 0.12) {
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

function WorkCard({
  work,
  delay,
  inView,
  tall,
}: {
  work: Work;
  delay: number;
  inView: boolean;
  tall: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative cursor-pointer overflow-hidden"
      style={{
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-full overflow-hidden bg-secondary"
        style={{ aspectRatio: tall ? "2/3" : "4/5" }}
      >
        <img
          src={work.image}
          alt={work.alt}
          className="h-full w-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1.01)" }}
        />

        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.15) 55%, transparent 100%)",
            opacity: hovered ? 1 : 0.65,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between gap-4">
          <h3
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "1.45rem",
              fontWeight: 400,
              color: "#f0ece4",
              lineHeight: 1.15,
            }}
          >
            {work.title}
          </h3>
          <span
            className="shrink-0 text-accent"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              paddingBottom: 2,
            }}
          >
            {work.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            lineHeight: 1.7,
            color: "rgba(240,236,228,0.65)",
            maxHeight: hovered ? "72px" : "0",
            overflow: "hidden",
            opacity: hovered ? 1 : 0,
            transition: "max-height 0.45s ease, opacity 0.4s ease",
            marginTop: hovered ? "0.6rem" : 0,
          }}
        >
          {work.description}
        </p>
      </div>
    </article>
  );
}

export function DisciplineSection({
  id,
  index,
  discipline,
  tagline,
  description,
  works,
  reverse,
}: Discipline) {
  const { ref, inView } = useInView();
  const columns = works.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-32 md:px-8" ref={ref}>
      <div
        className="mb-20 border-b border-border pb-6 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(22px)",
        }}
      >
        <div
          className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div>
            <span
              className="mb-3 block text-accent"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.3em",
              }}
            >
              {index}
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "0",
                color: "#f0ece4",
              }}
            >
              {discipline}
            </h2>
          </div>

          <p
            className={`hidden max-w-xs md:block ${
              reverse ? "md:text-left" : "md:text-right"
            }`}
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(240,236,228,0.45)",
              lineHeight: 1.6,
            }}
          >
            {tagline}
          </p>
        </div>

        <p
          className="mt-8 max-w-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            lineHeight: 1.85,
            color: "rgba(240,236,228,0.45)",
          }}
        >
          {description}
        </p>
      </div>

      <div className={`grid gap-5 ${columns}`}>
        {works.map((work, index) => (
          <WorkCard
            key={work.title}
            work={work}
            delay={index * 120}
            inView={inView}
            tall={index === 0 && works.length === 3}
          />
        ))}
      </div>
    </section>
  );
}
