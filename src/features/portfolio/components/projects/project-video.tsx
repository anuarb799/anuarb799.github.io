"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reducedMotion) {
      void video.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-[oklch(0.16_0.015_150)]">
      <video
        ref={videoRef}
        className="size-full object-cover"
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label="Reference forest capture used for the NeRF reconstruction"
      >
        Your browser does not support embedded video.
      </video>

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full border border-white/15 bg-[oklch(0.2_0.015_150/0.88)] text-[oklch(0.9_0.01_145)] shadow-sm transition-colors hover:bg-[oklch(0.26_0.02_150/0.94)] focus-visible:ring-2 focus-visible:ring-[oklch(0.78_0.1_135)] focus-visible:outline-none"
        aria-label={
          isPlaying ? "Pause reference video" : "Play reference video"
        }
        title={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <PauseIcon className="size-4" aria-hidden />
        ) : (
          <PlayIcon className="size-4" aria-hidden />
        )}
      </button>
    </div>
  );
}
