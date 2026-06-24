"use client";

import type { SyntheticEvent } from "react";

export function HoverVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const play = (event: SyntheticEvent<HTMLVideoElement>) => {
    void event.currentTarget.play();
  };

  const pause = (event: SyntheticEvent<HTMLVideoElement>) => {
    event.currentTarget.pause();
  };

  return (
    <video
      className="aspect-[9/16] w-full bg-black object-cover"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      onTouchStart={play}
    />
  );
}
