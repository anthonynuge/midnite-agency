"use client";

import HeroSection from "@/components/sections/HeroSection";
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

      <div className="h-[400px]">Sections</div>
      {/* <div className="h-[400px]">Sections</div>
      <div className="h-[400px]">Sections</div>
      <div className="h-[400px]">Sections</div>
      <div className="h-[400px]">Sections</div> */}
    </>
  );
}
