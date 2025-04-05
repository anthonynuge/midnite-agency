"use client";

import CtaSection from "@/components/common/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import WavyBackground from "@/components/ui/WavyBackground";
import { useBackgroundImage } from "@/context/BackgroundImageContext";
import { useEffect } from "react";

export default function Home() {
  const { setImage } = useBackgroundImage();

  useEffect(() => {
    setImage("/herobanner.jpg");
  }, [setImage]);

  return (
    <>
      <HeroSection />
      {/* <div className="h-[400px]">Sections</div> */}
      <FaqSection />
      {/* <section className="relative h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center z-100">
        <WavyBackground />
        <h1 className="text-5xl font-bold z-10">Midnite Agency</h1>
        <p className="mt-4 text-lg z-10">Crafting waves in the digital dark</p>
      </section> */}
      <CtaSection />
    </>
  );
}
