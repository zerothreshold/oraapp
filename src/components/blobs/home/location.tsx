import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Logo from "@/components/common/logo";
import { homeLocations } from "@/data/homedata";

const LocationComp = () => {
  return (
    <section
      id="academies"
      aria-labelledby="academies-heading"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-16 text-ink sm:px-8 lg:py-24"
    >
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
        <h2
          id="academies-heading"
          className="display-2"
        >
          Two schools. One dirt road.
        </h2>
        <p className="lede">
          Both academies share a site on Andra Dam Road in Rajpuri, outside
          Pune. Pick the discipline, then book on that academy&apos;s own site.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
        {homeLocations.map((academy) => (
          <article
            key={academy.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-bone ring-1 ring-ink/10 transition-shadow has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-signal"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={academy.img}
                alt={academy.imgAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase">
                {academy.discipline}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <Logo
                variant={academy.logo}
                width={140}
                height={48}
                className="h-10 w-auto self-start"
              />
              <h3 className="mt-5 display-3">
                <a
                  href={academy.href}
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0 focus-visible:outline-none"
                >
                  {academy.name}
                </a>
              </h3>
              <p className="mt-3 leading-relaxed text-gravel">
                {academy.description}
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-ink/10 pt-5 text-sm">
                <span className="flex items-start gap-2 text-gravel">
                  <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                  {academy.address}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 font-semibold transition-colors group-hover:text-signal">
                  Visit site
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LocationComp;
