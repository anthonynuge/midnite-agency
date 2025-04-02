import React from "react";

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
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Start a Project
          </button>
          <button className="text-white px-6 py-3 rounded-full border border-white hover:bg-white/10 transition">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
