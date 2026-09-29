import Image from "next/image";

const InfoLayout = ({
  children,
  imageStr,
  title,
  skewed = true,
}: {
  children: React.ReactNode;
  imageStr: string;
  title: string;
  skewed?: boolean;
}) => {
  return (
    <div>
      <div className="relative bg-[#f20a51]">
        <Image
          src={imageStr}
          width={1920}
          height={1080}
          alt=""
          className="img-fluid w-full min-h-[250px] object-cover"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-center text-4xl font-bold">
          {title}
        </h2>
        {skewed && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white -skew-y-2 transform-gpu z-10 -mb-10 transform-origin-top-left" />
        )}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default InfoLayout;
