"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/portfolio-data";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

function ArtCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef<number>(0);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const spawn = (x: number, y: number, count = 1) => {
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.1;
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6,
          life: 0,
          maxLife: 130 + Math.random() * 170,
          size: 1.5 + Math.random() * 3.5,
          hue: 36 + (Math.random() - 0.5) * 18,
        });
      }
    };

    const emitters = [
      { rx: 0.22, ry: 0.62 },
      { rx: 0.5, ry: 0.48 },
      { rx: 0.78, ry: 0.66 },
    ];

    const draw = () => {
      time.current += 0.007;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = "rgba(8,8,8,0.045)";
      ctx.fillRect(0, 0, width, height);

      emitters.forEach((emitter, index) => {
        const offsetX = Math.sin(time.current * 0.65 + index * 2.1) * 90;
        const offsetY = Math.cos(time.current * 0.48 + index * 1.8) * 65;
        if (Math.random() < 0.45) {
          spawn(emitter.rx * width + offsetX, emitter.ry * height + offsetY);
        }
      });

      if (mouse.current.x > 0 && Math.random() < 0.25) {
        spawn(mouse.current.x, mouse.current.y);
      }

      particles.current = particles.current.filter(
        (particle) => particle.life < particle.maxLife,
      );

      particles.current.forEach((particle) => {
        particle.life += 1;
        const progress = particle.life / particle.maxLife;
        const alpha =
          progress < 0.1
            ? progress / 0.1
            : progress > 0.7
              ? 1 - (progress - 0.7) / 0.3
              : 1;

        const noiseX =
          Math.sin(particle.x * 0.0038 + time.current) *
          Math.cos(particle.y * 0.0038 + time.current * 0.6);
        const noiseY =
          Math.cos(particle.x * 0.0038 + time.current * 0.8) *
          Math.sin(particle.y * 0.0038 + time.current);

        particle.vx = (particle.vx + noiseX * 0.04) * 0.98;
        particle.vy = (particle.vy + noiseY * 0.04 - 0.008) * 0.98;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * (1 - progress * 0.45),
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `hsla(${particle.hue},68%,${46 + progress * 28}%,${alpha * 0.88})`;
        ctx.fill();
      });

      if (particles.current.length > 900) {
        particles.current.splice(0, particles.current.length - 900);
      }

      raf.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    raf.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-[0.92]" />;
}

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  const scrollDown = () =>
    document.querySelector("#theater")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <ArtCanvas />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 28%, rgba(8,8,8,0.72) 100%)",
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
            fontSize: "clamp(3.7rem, 12vw, 9.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "0.04em",
          }}
        >
          {siteConfig.name}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-45">
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
