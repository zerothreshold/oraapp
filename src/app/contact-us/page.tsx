import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageIntro from "@/components/layouts/page-intro";
import Instagram from "@/components/common/instagram";
import { academyLinks } from "@/data/navdata";

export const metadata: Metadata = {
  title: "Contact | Offroad Academies",
  description:
    "Call or email Offroad Academies about a class, a group booking or an event.",
};

const phone = { display: "+91 85500 11116", href: "tel:+918550011116" };
const email = "sales@offroadacademies.com";
const address =
  "#64, 9th Main, 14th Cross, Indiranagar 2nd Stage, Eshwara Layout, Bangalore 560038";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const instagramHandles = [
  {
    name: "@offroadacademies",
    href: "https://www.instagram.com/offroadacademies/",
  },
  {
    name: "@prodirt_adventure",
    href: "https://www.instagram.com/prodirt_adventure",
  },
];

const linkClass =
  "rounded-sm transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

export default function Contact() {
  return (
    <>
      <PageIntro
        title="Contact"
        lede="Ask about a class, a group booking or an event. Someone from the team replies to every message."
        image={{
          src: "/images/general/offroad.jpeg",
          alt: "Two riders kicking up dust on a trail beside the reservoir",
        }}
      />

      <section className="wrap pb-20 text-ink lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* The two things people come here for, set large enough to tap. */}
          <div className="self-start divide-y divide-ink/10 border-y border-ink/10">
            <div className="py-8 lg:py-10">
              <p className="eyebrow">Call</p>
              <a
                href={phone.href}
                className={`${linkClass} mt-3 block font-display text-5xl leading-none font-extrabold tracking-tight uppercase italic sm:text-6xl lg:text-7xl`}
              >
                {phone.display}
              </a>
            </div>
            <div className="py-8 lg:py-10">
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${email}`}
                className={`${linkClass} mt-3 block font-display text-3xl leading-none font-bold tracking-tight break-all sm:text-4xl lg:text-5xl`}
              >
                {email}
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="eyebrow">Office</h2>
              <address className="mt-3 flex gap-3 leading-relaxed not-italic">
                <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0" />
                <span>
                  {address}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkClass} mt-2 flex w-fit items-center gap-1 text-sm font-semibold`}
                  >
                    Open in Google Maps
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </span>
              </address>
            </div>

            <div>
              <h2 className="eyebrow">Instagram</h2>
              <ul className="mt-3 space-y-2">
                {instagramHandles.map((handle) => (
                  <li key={handle.name}>
                    <a
                      href={handle.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${linkClass} inline-flex items-center gap-2 font-semibold`}
                    >
                      <Instagram width={18} height={18} aria-hidden="true" />
                      {handle.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Bookings</h2>
              <p className="mt-3 text-gravel">
                Clinics are booked on each academy&apos;s own site.
              </p>
              <ul className="mt-4 space-y-2">
                {academyLinks.map((academy) => (
                  <li key={academy.href}>
                    <a
                      href={academy.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-lg bg-bone px-4 py-3 ring-1 ring-ink/10 transition-colors hover:ring-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                    >
                      <span>
                        <span className="block font-semibold">
                          {academy.name}
                        </span>
                        <span className="block text-sm text-gravel">
                          {academy.discipline}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="transition-colors group-hover:text-signal"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
