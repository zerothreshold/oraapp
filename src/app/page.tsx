import Hero from "@/components/blobs/home/hero";
import WeDo from "@/components/blobs/home/wedo";
import Filmstrip from "@/components/blobs/home/filmstrip";
import LocationComp from "@/components/blobs/home/location";
import Testimonials from "@/components/blobs/home/testimonials";

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
