"use client";

import { useEffect, useRef, useState } from "react";

// Three encodes of the same cut: a 4:3 centre crop for phones, 1280x576 for
// laptops and tablets, and 1920x864 for 1080p and 2K desktops. The poster is a
// plain image so the page has something to paint before any video bytes arrive.
type Variant = "mobile" | "1280" | "1920";

const pickVariant = (): Variant => {
  if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
  const physicalWidth =
    window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  return physicalWidth >= 1800 ? "1920" : "1280";
};

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // The video element renders without a source, so nothing downloads until
  // this effect has looked at the screen, the motion preference and the
  // data-saver flag.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (reduceMotion || connection?.saveData) return;

    const format = video.canPlayType('video/webm; codecs="vp9"')
      ? "webm"
      : "mp4";
    video.src = `/videos/hero-${pickVariant()}.${format}`;
    video.play().catch(() => {
      /* Autoplay refused; the poster stays. */
    });
  }, []);

  return (
    <div className="absolute inset-0 bg-ink">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/videos/hero-poster-wide.jpg"
        />
        <img
          src="/videos/hero-poster-mobile.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HeroVideo;
