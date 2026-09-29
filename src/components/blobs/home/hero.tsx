import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVideo from "@/components/blocks/home/videoplayer";

const facts = [
  "Over 10,000 riders trained",
  "Programmes with Hero, Royal Enfield, KTM and BMW Motorrad",
  "Both academies on one site at Andra Dam Road, near Pune",
];

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="bg-white text-ink">
      <div className="relative aspect-[4/3] max-h-[calc(100svh-4rem)] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[20/9]">
        <HeroVideo />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/75 to-transparent"
        />
      </div>

      <div className="wrap">
        {/* The headline straddles the bottom edge of the video. Both the pull-up
            and the colour split are 0.5em of the heading's own font size, so the
            cut runs through the same line of letters at every viewport. */}
        <h1
          id="hero-heading"
          className="relative -mt-[0.5em] bg-[linear-gradient(to_bottom,#fff_0.5em,var(--color-ink)_0.5em)] bg-clip-text font-display text-[clamp(3.75rem,11.5vw,10rem)] leading-[0.88] font-extrabold tracking-tight text-transparent uppercase italic motion-safe:animate-[fade_0.6s_ease-out_both]"
        >
          The tarmac
          <br />
          ends here.
        </h1>

        <div className="mt-8 grid gap-10 pb-16 motion-safe:animate-[rise_0.7s_0.15s_cubic-bezier(0.2,0.7,0.2,1)_both] sm:mt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-gravel sm:text-xl">
              Off-road motorcycle clinics for adventure riders and flat
              trackers, from your first day on dirt to race preparation. Two
              academies near Pune, run by trainers with over a decade of
              coaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#academies" className="btn btn-signal">
                Pick an academy
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/aboutus" className="btn btn-outline">
                Our story
              </Link>
            </div>
          </div>

          <ul className="self-start divide-y divide-ink/10 border-y border-ink/10 text-sm font-medium lg:mt-1">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 py-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-signal"
                />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
