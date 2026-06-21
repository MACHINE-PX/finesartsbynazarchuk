"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import type { Work } from "@/lib/portfolio-data";

const AUTO_PLAY_DELAY = 4500;
const MANUAL_PAUSE_DELAY = 8000;

function circularOffset(index: number, current: number, total: number) {
  let offset = index - current;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

export function PleinAirWheel({ works }: { works: Work[] }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [manualPauseUntil, setManualPauseUntil] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const wheelLocked = useRef(false);

  const move = useCallback(
    (direction: 1 | -1, manual = true) => {
      setCurrent((value) => (value + direction + works.length) % works.length);

      if (manual) {
        setManualPauseUntil(Date.now() + MANUAL_PAUSE_DELAY);
      }
    },
    [works.length],
  );

  useEffect(() => {
    if (!playing || interacting || works.length < 2) return;

    const interval = window.setInterval(() => {
      if (Date.now() >= manualPauseUntil) move(1, false);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [interacting, manualPauseUntil, move, playing, works.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setPlaying(false);
  }, []);

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const isHorizontalGesture =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) &&
      Math.abs(event.deltaX) >= 12;

    if (!isHorizontalGesture || wheelLocked.current) return;

    event.preventDefault();
    wheelLocked.current = true;
    move(event.deltaX > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, 650);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) return;

    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
    setInteracting(true);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (pointerStart.current !== null) {
      const distance = event.clientX - pointerStart.current;
      if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
    }

    pointerStart.current = null;
    setInteracting(false);
  }

  const activeWork = works[current];

  return (
    <section
      className="relative overflow-hidden bg-[#d9d0bd] text-[#17140f]"
      aria-label="Plein air horizontal gallery"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(23,20,15,.65) .55px, transparent .55px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto grid min-h-[880px] max-w-[1600px] lg:h-[calc(100svh-2rem)] lg:min-h-[720px] lg:grid-cols-[0.7fr_1.3fr]">
        <div className="z-20 flex flex-col px-6 pb-10 pt-24 sm:px-10 lg:justify-between lg:px-12 lg:py-16 xl:px-16">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.36em] text-[#806522]">
              Fine Art · Painted outside
            </p>
            <h1
              className="mt-5 uppercase"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(4.6rem, 10vw, 9rem)",
                fontWeight: 300,
                lineHeight: 0.68,
                letterSpacing: "-0.045em",
              }}
            >
              Plein
              <br />
              Air
            </h1>
            <p className="mt-8 max-w-md border-l border-[#806522]/45 pl-5 text-sm leading-7 text-black/48">
              Light changes, weather moves, and the painting has to answer in
              the moment. Move through the outdoor studies like a horizontal
              reel.
            </p>
          </div>

          <div className="mt-10 hidden lg:block">
            <p className="max-w-xs font-mono text-[8px] uppercase leading-5 tracking-[0.22em] text-black/35">
              Swipe sideways or use the arrows
            </p>
            <div className="mt-5 h-px w-full bg-black/15">
              <div
                className="h-px bg-[#806522] transition-[width] duration-700"
                style={{ width: `${((current + 1) / works.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[610px] touch-pan-y select-none overflow-hidden outline-none lg:min-h-0"
          tabIndex={0}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
            setInteracting(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#d9d0bd] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#d9d0bd] to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 border border-[#806522]/30 sm:w-[62%] lg:h-[64%]" />

          {works.map((work, index) => {
            const offset = circularOffset(index, current, works.length);
            const visible = Math.abs(offset) <= 2;
            const active = offset === 0;

            if (!visible) return null;

            return (
              <article
                key={work.image}
                aria-hidden={!active}
                className="absolute left-1/2 top-1/2 h-[48%] w-[72%] overflow-hidden bg-[#bdb39f] shadow-[0_30px_80px_rgba(45,35,20,0.2)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[62%] lg:h-[60%]"
                style={{
                  opacity: active ? 1 : Math.abs(offset) === 1 ? 0.34 : 0,
                  filter: active ? "none" : "saturate(.45) blur(1.5px)",
                  transform: `translate(calc(-50% + ${offset * 88}%), -50%) scale(${
                    active ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.64
                  })`,
                  zIndex: 5 - Math.abs(offset),
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                <div className="absolute inset-2.5 border border-black/10 bg-[#eee7d8] p-2.5 sm:inset-4 sm:p-3">
                  <div className="relative h-full w-full overflow-hidden bg-[#a99f8b]">
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1023px) 75vw, 48vw"
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              </article>
            );
          })}

          <div className="absolute bottom-6 left-6 z-20 sm:bottom-9 sm:left-10">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/38">
              Outdoor study
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "1.5rem",
              }}
            >
              {activeWork.title}
            </p>
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-9 sm:right-10">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setPlaying((value) => !value);
              }}
              onPointerDown={(event) => event.stopPropagation()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/55 transition-colors hover:border-[#806522] hover:text-[#806522]"
              aria-label={playing ? "Pause automatic gallery" : "Play automatic gallery"}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                move(-1);
              }}
              onPointerDown={(event) => event.stopPropagation()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/55 transition-colors hover:border-[#806522] hover:text-[#806522]"
              aria-label="Previous artwork"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                move(1);
              }}
              onPointerDown={(event) => event.stopPropagation()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/55 transition-colors hover:border-[#806522] hover:text-[#806522]"
              aria-label="Next artwork"
            >
              <ArrowRight size={15} />
            </button>
            <span className="ml-1 min-w-14 font-mono text-[9px] tracking-[0.16em] text-black/45">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(works.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
