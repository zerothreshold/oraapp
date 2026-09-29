import dynamic from "next/dynamic";
import Hero from "@/components/blobs/home/hero";
import WeDo from "@/components/blobs/home/wedo";
import Filmstrip from "@/components/blobs/home/filmstrip";
import LocationComp from "@/components/blobs/home/location";

// The rail is a client component with a third-party embed behind it. Splitting
// it keeps that code out of the first-load chunk. The server still renders the
// section, so the heading is in the HTML.
const Testimonials = dynamic(
  () => import("@/components/blobs/home/testimonials"),
);

export default function Home() {
  return (
    <>
      <Hero />
      <WeDo />
      <Filmstrip />
      <LocationComp />
      <Testimonials />
    </>
  );
}
