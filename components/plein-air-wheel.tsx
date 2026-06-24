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
const processPhotos = [
  "/images/PLEINAIR1.png",
  "/images/PLAINAIR1.2.jpg",
  "/images/PLAINAIR1.3.JPG",
  "/images/PLAINAIR1.4.jpg",
  "/images/PLAINAIR1.5.jpg",
  "/images/PLAINAIR1.6.JPG",
  "/images/PLAINAIR1.7.JPG",
  "/images/PLAINAIR1.8.jpg",
  "/images/PLAINAIR1.9.jpg",
];

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
  const activeProcessPhoto = current % processPhotos.length;

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

      <div className="relative mx-auto max-w-[1600px] px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="flex items-end justify-between gap-8 pb-7">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#806522]">
              Painting outside
            </p>
            <p className="mt-3 max-w-xl font-serif text-[clamp(1.45rem,2.7vw,2.35rem)] font-light leading-tight text-black/65">
              From the landscape to the canvas.
            </p>
          </div>
          <p className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-black/35 sm:block">
            Swipe sideways or use the arrows
          </p>
        </div>

        <div
          className="relative grid touch-pan-y select-none gap-8 overflow-hidden border-t border-black/15 py-10 outline-none lg:min-h-[760px] lg:grid-cols-[0.38fr_0.62fr] lg:gap-5 lg:py-0"
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
          <div className="relative flex min-h-[500px] items-center lg:min-h-0 lg:pr-5">
            <div className="grid w-full gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center lg:grid-cols-1">
              <div className="relative mx-auto h-[390px] w-full max-w-[330px] overflow-hidden border border-black/10 bg-[#bdb39f] shadow-[0_24px_60px_rgba(45,35,20,0.16)] sm:h-[430px] lg:h-[440px] lg:max-w-[320px]">
                {processPhotos.map((photo, index) => {
                  const offset = circularOffset(
                    index,
                    activeProcessPhoto,
                    processPhotos.length,
                  );
                  const visible = Math.abs(offset) <= 1;

                  if (!visible) return null;

                  return (
                    <Image
                      key={photo}
                      src={photo}
                      alt="Sash painting on location"
                      fill
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 40vw, 24vw"
                      className={`object-cover transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                        photo === "/images/PLAINAIR1.4.jpg"
                          ? "object-[78%_center]"
                          : "object-center"
                      }`}
                      style={{
                        opacity: offset === 0 ? 1 : 0,
                        filter: offset === 0 ? "none" : "grayscale(1)",
                        transform: `translateX(${offset * 24}%) scale(${
                          offset === 0 ? 1 : 0.94
                        })`,
                      }}
                      draggable={false}
                    />
                  );
                })}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/18" />
                <span className="absolute bottom-4 right-4 font-mono text-[8px] tracking-[0.2em] text-white/75">
                  {String(activeProcessPhoto + 1).padStart(2, "0")} /{" "}
                  {String(processPhotos.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mx-auto max-w-[310px] text-center lg:mt-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#806522]">
                  The process
                </p>
                <p className="mt-4 font-serif text-[clamp(1.45rem,2.4vw,2rem)] font-light leading-[1.05] text-black/62">
                  Painting directly from life, surrounded by changing light and
                  landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[600px] overflow-hidden lg:min-h-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#d9d0bd] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#d9d0bd] to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[82%] -translate-x-1/2 -translate-y-1/2 border border-[#806522]/30" />

            {works.map((work, index) => {
              const offset = circularOffset(index, current, works.length);
              const visible = Math.abs(offset) <= 2;
              const active = offset === 0;

              if (!visible) return null;

              return (
                <article
                  key={work.image}
                  aria-hidden={!active}
                  className="absolute left-1/2 top-1/2 h-[58%] w-[82%] overflow-hidden bg-[#bdb39f] shadow-[0_30px_80px_rgba(45,35,20,0.2)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:h-[64%]"
                  style={{
                    opacity: active ? 1 : Math.abs(offset) === 1 ? 0.3 : 0,
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
                        sizes="(max-width: 1023px) 82vw, 50vw"
                        className="object-contain"
                        draggable={false}
                      />
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="absolute bottom-2 left-4 z-20 sm:left-8 lg:bottom-8">
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/38">
                Outdoor study
              </p>
              <p className="mt-1 font-serif text-[1.5rem]">{activeWork.title}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 lg:absolute lg:bottom-8 lg:right-8 lg:z-20">
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

        <div className="h-px w-full bg-black/15">
          <div
            className="h-px bg-[#806522] transition-[width] duration-700"
            style={{ width: `${((current + 1) / works.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
