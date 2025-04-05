import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Lottie from "lottie-react";
import animationData from "@/animation/planet.json";

const HeroSection = () => {
  return (
    <section className="h-[50vh] flex items-center container-base">
      <div className="text-left z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
          We make marketing <br /> effortless
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
          At Midnite, we help brands captivate, convert, and grow through bold
          creative, strategy, and results-driven marketing. From startups to
          enterprises — we’re your unfair advantage.
        </p>
        <div className="flex gap-4">
          <InteractiveHoverButton className="text-black light">
            Start a project
          </InteractiveHoverButton>
          <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
        </div>
      </div>

      <div className="hidden w-1/2 md:flex justify-end ">
        <div className="w-sm md:-translate-y-8">
          <Lottie animationData={animationData} className="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
