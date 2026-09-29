import Image from "next/image";
import { academyPhotos } from "@/data/homedata";

// A strip of photos that slides with the page. On desktop the movement is a
// CSS scroll-driven animation (see .strip-track in globals.css). On phones,
// and in browsers without that support, the strip is an ordinary swipe rail.
const Filmstrip = () => {
  return (
    <section aria-label="Photos from the academies" className="py-4 lg:py-8">
      <div className="snap-x overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="strip-track flex w-max gap-3 px-5 sm:gap-4 sm:px-8 lg:px-0">
          {academyPhotos.map((photo) => (
            <li
              key={photo.src}
              className="relative h-[240px] w-[320px] shrink-0 snap-start overflow-hidden rounded-xl bg-bone sm:h-[320px] sm:w-[440px] lg:h-[400px] lg:w-[560px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 440px, 320px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-4 max-w-[1400px] px-5 text-sm text-gravel sm:px-8">
        Shot at ProDirt Adventure and the TVS Drift-R School.
      </p>
    </section>
  );
};

export default Filmstrip;
