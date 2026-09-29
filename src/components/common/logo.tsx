import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

const sources = {
  default: "/images/logos/main-black.png",
  mainblack: "/images/logos/main-black.png",
  mainwhite: "/images/logos/main-white.png",
  driftrblack: "/images/logos/driftr-black.png",
  mototripblack: "/images/logos/mototrip-black.png",
  prodirtblack: "/images/logos/prodirt-black.png",
  speedshopblack: "/images/logos/speedshop-black.png",
  speedshopwhite: "/images/logos/speedshop-white.png",
  powerpartblack: "/images/logos/powerpart-black.png",
} as const;

type Variant = keyof typeof sources;

interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  variant?: Variant;
  width: number;
  height: number;
  className?: string;
  alt?: string;
  priority?: boolean;
}

const Logo = ({
  variant = "default",
  width,
  height,
  className = "",
  alt = "",
  priority = false,
}: LogoProps) => (
  <Image
    src={sources[variant]}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    className={`object-contain object-center ${className}`}
  />
);

export default Logo;
