"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Instagram from "@/components/common/instagram";

// The embed generates random ids while rendering, which never match between
// server and client HTML, so skip server rendering for it.
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((m) => m.InstagramEmbed),
  { ssr: false },
);

const linksinsta = [
  "https://www.instagram.com/p/C6_VuCChQ4B/",
  "https://www.instagram.com/p/C6n5JiAt_Np/",
  "https://www.instagram.com/p/CyNhXSoL2sf/",
  "https://www.instagram.com/p/CpxRXFgNc-T/",
  "https://www.instagram.com/p/C2bvzqSreB_/",
  "https://www.instagram.com/p/C5Dhjz-L4wa/",
];

const CARD_GAP = 24;

// Each embed pulls in Instagram's script and an iframe, so only mount it once
// its card is within 600px of the visible rail.
const LazyEmbed = ({ url }: { url: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 600px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ig-card min-h-[560px] overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10 ${
        near ? "" : "motion-safe:animate-pulse"
      }`}
    >
      {near ? (
        <InstagramEmbed url={url} width="100%" />
      ) : (
        <div className="h-[560px] bg-ink/[0.04]" />
      )}
    </div>
  );
};

const Testimonials = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const progress = max > 0 ? rail.scrollLeft / max : 1;
    trailRef.current?.style.setProperty("--progress", String(progress));
    setAtStart(rail.scrollLeft < 8);
    setAtEnd(rail.scrollLeft > max - 8);
  }, []);

  useEffect(() => {
    syncScroll();
    window.addEventListener("resize", syncScroll);
    return () => window.removeEventListener("resize", syncScroll);
  }, [syncScroll]);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector("li");
    if (!rail || !card) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    rail.scrollBy({
      left: direction * (card.clientWidth + CARD_GAP),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const controlClass =
    "grid size-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:pointer-events-none disabled:opacity-25";

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-white pt-16 pb-14 text-ink sm:pt-20 lg:pt-28 lg:pb-20"
    >
      <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
        <h2
          id="testimonials-heading"
          className="display-2"
        >
          Don&apos;t take our word for it.
        </h2>
        <p className="lede">
          Over 10,000 riders have trained with us. These are a few of them, on
          video, in their own words.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] items-center gap-5 px-5 sm:px-8 lg:mt-14">
        {/* One segment per video. The signal line grows as you scroll, so the
            segment the head sits in is the one you're watching. */}
        <div
          ref={trailRef}
          aria-hidden="true"
          className="relative h-2.5 flex-1 [--progress:0]"
        >
          <div
            className="absolute inset-x-0 top-1/2 grid h-0.5 -translate-y-1/2 gap-2"
            style={{
              gridTemplateColumns: `repeat(${linksinsta.length}, minmax(0, 1fr))`,
            }}
          >
            {linksinsta.map((link) => (
              <span key={link} className="bg-ink/15" />
            ))}
          </div>
          <div
            className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-signal"
            style={{ width: "calc(var(--progress) * 100%)" }}
          />
          <div
            className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal"
            style={{ left: "calc(var(--progress) * 100%)" }}
          />
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous video"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
            className={controlClass}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next video"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
            className={controlClass}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        onScroll={syncScroll}
        role="region"
        aria-label="Rider testimonial videos"
        tabIndex={0}
        // The rail bleeds to the right edge of the viewport, but its first
        // card lines up with the 1400px content column.
        className="mt-8 overflow-x-auto px-5 pt-1 pb-6 [scrollbar-width:none] snap-x snap-mandatory scroll-pl-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal sm:px-8 sm:scroll-pl-8 md:px-[max(2rem,calc((100vw_-_1400px)/2_+_2rem))] md:scroll-pl-[max(2rem,calc((100vw_-_1400px)/2_+_2rem))] lg:mt-10 [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max items-start" style={{ gap: CARD_GAP }}>
          {linksinsta.map((link) => (
            <li
              key={link}
              className="w-[min(calc(100vw-2.5rem),340px)] shrink-0 snap-start 2xl:w-[380px]"
            >
              <LazyEmbed url={link} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 sm:px-8 lg:mt-12">
        <p className="text-sm text-gravel">
          Filmed at ProDirt Adventure and our other academies.
        </p>
        <a
          href="https://www.instagram.com/offroadacademies/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          <Instagram width={18} height={18} aria-hidden="true" />
          Follow @offroadacademies
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
