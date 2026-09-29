import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/layouts/page-intro";
import Filmstrip from "@/components/blobs/home/filmstrip";
import Instagram from "@/components/common/instagram";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Group rides, camps and brand days from Offroad Academies near Pune, announced as each one is confirmed.",
};

export default function Events() {
  return (
    <>
      <PageIntro
        title="Events"
        lede="Group rides, camps and brand days, announced here as each one is confirmed."
        image={{
          src: "/images/general/exp.jpg",
          alt: "Riders threading a cone course",
        }}
      />

      <section aria-labelledby="events-empty" className="wrap pb-12 text-ink lg:pb-20">
        <div className="grid gap-8 rounded-2xl bg-bone p-6 ring-1 ring-ink/10 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16 lg:p-12">
          <div>
            <h2 id="events-empty" className="display-3">
              Nothing is scheduled right now.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-gravel">
              New events go up on Instagram first. Clinics at both academies
              run separately from events and are booked on each academy&apos;s
              own site.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="https://www.instagram.com/offroadacademies/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ink"
            >
              <Instagram width={16} height={16} aria-hidden="true" />
              Follow @offroadacademies
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link href="/#academies" className="btn btn-outline">
              Pick an academy
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="pb-12 lg:pb-20">
        <Filmstrip />
      </div>
    </>
  );
}
