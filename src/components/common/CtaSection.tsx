import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const CtaSection = () => {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="/ctabackground.png"
        alt="Space background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* Top Gradient Fade to Black */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom Gradient Fade to Black */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          What will <br /> you discover?
        </h1>
        <div className="flex justify-center gap-4">
          <InteractiveHoverButton className="light text-black">
            Get In Touch
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
