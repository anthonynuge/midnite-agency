"use client";

import Image from "next/image";
import { useBackgroundImage } from "@/context/BackgroundImageContext";
import WavyBackground from "../ui/WavyBackground";

export default function TopBackgroundLayer() {
  const { image } = useBackgroundImage();

  // If no image is set, render nothing
  // if (!image) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] -z-10">
      <WavyBackground />

      {/* <Image
        src={image}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      /> */}
      {/* Bottom gradient to fade into black */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}
