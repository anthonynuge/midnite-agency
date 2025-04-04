import LongHero from "@/components/common/LongHero";
import React from "react";
import { projects } from "@/data/sections/projects";
import BentoProjectGrid from "@/components/ui/BentoProjectGrid";

const heroData = {
  title: "Our Work",
  description:
    "We help brands stand out with bold creative and sharp strategy.",
  cta: [
    { label: "See Case Studies", href: "#case-studies" },
    { label: "Contact Us", href: "/contact" },
  ],
  // align: "left", // optional: "left", "center", "right"
};

const OurWorkPage = () => {
  return (
    <>
      <LongHero {...heroData} />
      <BentoProjectGrid projects={projects} />
    </>
  );
};

export default OurWorkPage;
