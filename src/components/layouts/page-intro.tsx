import Image from "next/image";

type PageImage = { src: string; alt: string };

// The top of every inner page: a full-width photo with the page name riding its
// bottom edge, white over the photo and ink over the paper, the same treatment
// as the home headline but a shorter band. The lede sits underneath.
const PageIntro = ({
  title,
  lede,
  image,
}: {
  title: string;
  lede?: string;
  image: PageImage;
}) => {
  return (
    <section className="text-ink">
      <div className="relative aspect-[4/3] max-h-[60svh] w-full overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[3/1]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/75 to-transparent"
        />
      </div>
      <div className="wrap pb-10 lg:pb-14">
        <h1 className="relative -mt-[0.5em] bg-[linear-gradient(to_bottom,#fff_0.5em,var(--color-ink)_0.5em)] bg-clip-text font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] font-extrabold tracking-tight text-transparent uppercase italic">
          {title}
        </h1>
        {lede && <p className="lede mt-6 max-w-xl sm:text-xl">{lede}</p>}
      </div>
    </section>
  );
};

export default PageIntro;
