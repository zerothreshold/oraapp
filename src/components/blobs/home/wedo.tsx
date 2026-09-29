import { whatWeDo } from "@/data/homedata";
import Image from "next/image";

const WeDo = () => {
  return (
    <section
      aria-labelledby="train-heading"
      className="mx-auto max-w-[1400px] px-5 py-16 text-ink sm:px-8 lg:py-24"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2
            id="train-heading"
            className="display-2"
          >
            How we train
          </h2>
          <p className="mt-5 lede">
            Every clinic follows the same shape, whether it is your first time
            standing on the pegs or you are chasing lap times. This is what a
            day with us covers.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-ink/10 lg:mt-0">
          {whatWeDo.map((item) => (
            <li
              key={item.title}
              className="grid gap-5 py-8 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-8 lg:py-10"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-bone">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 260px, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="display-3">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gravel">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeDo;
