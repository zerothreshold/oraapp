import PageIntro from "./page-intro";

const defaultImage = {
  src: "/images/general/flattrack2.jpg",
  alt: "Two riders side by side on the flat track",
};

// Used by the legal pages, which still pass a banner strip and a skew flag.
// Both are ignored so every inner page opens with the same photo band.
const InfoLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  imageStr?: string;
  title: string;
  skewed?: boolean;
}) => {
  return (
    <div className="text-ink">
      <PageIntro title={title} image={defaultImage} />
      {children}
    </div>
  );
};

export default InfoLayout;
