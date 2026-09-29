import Head from "next/head";
import LocationComp from "@/components/blobs/home/location";
import Testimonials from "@/components/blobs/home/testimonials";
import WeDo from "@/components/blobs/home/wedo";
import VideoPlayer from "@/components/blocks/home/videoplayer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Head>
        <meta property="og:title" content="Off Road Academies" />
        <meta property="og:description" content="OFFROAD ACADEMIES is dedicated to cultivating the skills and passion of motorcycle enthusiasts seeking thrilling off-road experiences. Our training centers operate on a distinctive model, tailored to deliver specialized training and unforgettable adventures in the realm of off-road riding." />
        <meta property="og:image" content="https://oraprod.netlify.app/images/logos/main-white.png" />
        <meta property="og:url" content="https://oraprod.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Off Road Academies" />
        <meta name="twitter:description" content="OFFROAD ACADEMIES is dedicated to cultivating the skills and passion of motorcycle enthusiasts seeking thrilling off-road experiences. Our training centers operate on a distinctive model, tailored to deliver specialized training and unforgettable adventures in the realm of off-road riding." />
        <meta name="twitter:image" content="https://oraprod.netlify.app/images/logos/main-white.png" />
      </Head>
      <VideoPlayer />
      <WeDo />
      <section className="section py-5 min-h-screen parallax1 w-screen"></section>
      <LocationComp />
      <section className="section py-5 min-h-screen parallax w-screen"></section>
      <Testimonials />
    </main>
  );
}
