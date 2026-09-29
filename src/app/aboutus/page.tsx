import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/layouts/page-intro";
import Logo from "@/components/common/logo";
import Instagram from "@/components/common/instagram";
import { peopleData } from "@/data/peopledata";
import { academyLinks } from "@/data/navdata";

export const metadata: Metadata = {
  title: "Our story | Offroad Academies",
  description:
    "Who runs Offroad Academies, how the training centres work, and the trainers who coach at ProDirt Adventure and the TVS Drift-R School.",
};

const facilities = [
  "Tracks built for adventure, motocross, 4x4 and flat track riding",
  "Flat track training systems, ready to ride",
  "Bike maintenance and secure storage on site",
  "Food and drink on site",
  "Camping, dorms and bio toilets",
];

const linkClass =
  "rounded-sm transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

export default function AboutUs() {
  return (
    <>
      <PageIntro
        title="Our story"
        lede="Structured off-road training, built by racers and adopted by the motorcycle brands they ride for."
        image={{
          src: "/images/general/para1.jpg",
          alt: "A row of BMW GS bikes lined up before a clinic",
        }}
      />

      <section
        aria-labelledby="about-heading"
        className="wrap py-12 text-ink lg:py-20"
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <h2 id="about-heading" className="display-2 lg:sticky lg:top-24">
            What we do
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed lg:mt-0">
            <p>
              Offroad Academies runs training centres for off-road motorcycle
              riding. We coach riders at every level, from a first day on dirt
              to race preparation, and we run programmes for motorcycle brands
              that want their customers to ride better and further.
            </p>
            <p>
              Each centre is built around its own track. Clinics are structured
              rather than open riding, so skills are learned in an order that
              sticks, and a trainer watches every rider.
            </p>
            <p className="border-l-2 border-signal pl-5 text-gravel">
              The aim is simple: give riders the technique and the confidence
              to handle demanding terrain, and grow a community of capable
              riders across India.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="trainers-heading"
        className="wrap py-12 text-ink lg:py-20"
      >
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
          <h2 id="trainers-heading" className="display-2">
            The trainers
          </h2>
          <p className="lede">
            Racers, mechanics and coaches. Every clinic is run by one of them.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10 lg:mt-14">
          {peopleData.map((person) => (
            <li
              key={person.name}
              className="grid gap-5 py-8 md:grid-cols-[minmax(0,200px)_minmax(0,1fr)] md:gap-10 lg:py-10"
            >
              <div className="relative aspect-square w-40 overflow-hidden rounded-xl bg-bone md:w-full">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(min-width: 768px) 200px, 160px"
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl">
                <p className="eyebrow">
                  {person.position} · {person.location}
                </p>
                <h3 className="display-3 mt-2">{person.name}</h3>
                <p className="mt-4 leading-relaxed text-gravel">
                  {person.description}
                </p>
                <a
                  href={person.instalink}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkClass} mt-5 inline-flex items-center gap-2 text-sm font-semibold`}
                >
                  <Instagram width={18} height={18} aria-hidden="true" />
                  Instagram
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="sites-heading"
        className="wrap py-12 pb-20 text-ink lg:py-20 lg:pb-28"
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 id="sites-heading" className="display-2">
              The sites
            </h2>
            <p className="lede mt-5">
              Two academies on one site at Andra Dam Road, Rajpuri, outside
              Pune.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <ul className="grid gap-4 sm:grid-cols-2">
              {academyLinks.map((academy) => (
                <li key={academy.href}>
                  <a
                    href={academy.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-bone p-6 ring-1 ring-ink/10 transition-colors hover:ring-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    <Logo
                      variant={academy.logo}
                      width={140}
                      height={48}
                      className="h-10 w-auto self-start"
                    />
                    <span>
                      <span className="display-3 block text-2xl sm:text-3xl">
                        {academy.name}
                      </span>
                      <span className="mt-2 flex items-center justify-between text-sm text-gravel">
                        {academy.discipline}
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="transition-colors group-hover:text-signal"
                        />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-12">On site</h3>
            <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {facilities.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-signal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
