import React from "react";

interface Button {
  label: string;
  href: string;
}

interface LongHeroProps {
  title: string;
  description: string;
  cta?: Button[];
}

const LongHero: React.FC<LongHeroProps> = ({ title, description, cta }) => {
  return (
    <section className="h-[30vh] flex items-center container-base">
      <div className="text-left z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
          {description}
        </p>
        <div className="flex gap-4"></div>
      </div>
    </section>
  );
};

export default LongHero;
