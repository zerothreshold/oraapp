"use client";
import Image from "next/image";
import React, { ImgHTMLAttributes } from "react";

const mainBlack = "/images/logos/main-black.png";
const mainWhite = "/images/logos/main-white.png";
const driftrBlack = "/images/logos/driftr-black.png";
const mototripBlack = "/images/logos/mototrip-black.png";
const prodirtBlack = "/images/logos/prodirt-black.png";
const speedshopBlack = "/images/logos/speedshop-black.png";
const speedshopWhite = "/images/logos/speedshop-white.png";
const powerpartBlack = "/images/logos/powerpart-black.png";

interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  variant?:
    | "default"
    | "mainblack"
    | "mainwhite"
    | "driftrblack"
    | "mototripblack"
    | "prodirtblack"
    | "speedshopblack"
    | "speedshopwhite"
    | "powerpartblack";
  passString?: string;
  width: number;
  height: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = "default",
  width,
  height,
  passString = "",
  className = "",
  ...props
}) => {
  const getVariantImage = () => {
    const finalVariant = passString || variant;
    switch (finalVariant) {
      case "mainblack":
        return mainBlack;
      case "mainwhite":
        return mainWhite;
      case "driftrblack":
        return driftrBlack;
      case "mototripblack":
        return mototripBlack;
      case "prodirtblack":
        return prodirtBlack;
      case "speedshopblack":
        return speedshopBlack;
      case "speedshopwhite":
        return speedshopWhite;
      case "powerpartblack":
        return powerpartBlack;
      default:
        return mainBlack;
    }
  };

  return (
    <Image
      src={getVariantImage()}
      alt="Logo"
      width={width}
      height={height}
      className={`object-contain object-center ${className}`}
      priority
      {...props}
    />
  );
};

export default Logo;
