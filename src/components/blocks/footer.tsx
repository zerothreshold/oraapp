import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../common/logo";
import Instagram from "../common/instagram";

const explore = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/aboutus" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact-us" },
];

const academies = [
  {
    name: "ProDirt Adventure",
    href: "https://prodirtadventure.offroadacademies.com/",
  },
  {
    name: "TVS Drift-R School",
    href: "https://tvs-driftr.offroadacademies.com/",
  },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Other Policies", href: "/policy" },
];

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

const address =
  "#64, 9th Main, 14th Cross, Indiranagar 2nd Stage, Eshwara layout, Bangalore - 560038";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const linkClass =
  "rounded-sm transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <nav aria-label={title}>
    <h2 className="text-xs font-semibold tracking-[0.18em] text-dust uppercase">
      {title}
    </h2>
    <ul className="mt-5 space-y-3">
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.name}>
            {external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`${linkClass} inline-flex items-center gap-1`}
              >
                {link.name}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                {link.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);

const Footer = () => {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8 sm:pb-10">
        {/* Same track as the testimonials scrubber. Here it runs out. */}
        <div aria-hidden="true" className="relative h-2.5">
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgb(242_238_232/0.28)_0_6px,transparent_6px_13px)]" />
          <div className="absolute top-1/2 right-0 size-2.5 -translate-y-1/2 rounded-full bg-signal" />
        </div>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Come ride with us.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-dust sm:text-lg">
              Ask about a class, a group booking or an event.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-signal px-7 text-sm font-semibold text-ink transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                Contact us
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="tel:+918550011116"
                className={`${linkClass} inline-flex items-center gap-2 font-semibold`}
              >
                <Phone size={16} aria-hidden="true" />
                +91-8550011116
              </a>
              <a
                href="mailto:sales@offroadacademies.com"
                className={`${linkClass} inline-flex items-center gap-2 font-semibold`}
              >
                <Mail size={16} aria-hidden="true" />
                sales@offroadacademies.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <FooterColumn title="Explore" links={explore} />
            <FooterColumn title="Academies" links={academies} />
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 sm:mt-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-md">
            <Logo variant="mainwhite" width={200} height={50} />
            <p className="mt-6 leading-relaxed text-dust">
              Off-road training for 2-wheelers and 4-wheelers. Over 10,000
              riders trained across India, with brands like Hero, Royal
              Enfield, KTM and BMW Motorrad.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <address className="flex gap-3 text-dust not-italic">
              <MapPin
                size={18}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className={`${linkClass} leading-relaxed`}
              >
                {address}.
              </a>
            </address>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
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
        </div>

        <div className="mt-12 flex flex-col gap-4 text-xs text-dust sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Offroad Academies. All rights
            reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
