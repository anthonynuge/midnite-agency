"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { ProjectItem } from "@/data/sections/projects";

interface BentoProjectGridProps {
  projects: ProjectItem[];
}

// Layout pattern by index
const getSizeByIndex = (index: number): "default" | "tall" | "wide" | "big" => {
  const pattern = ["wide", "default", "tall", "default", "big", "default"];
  return pattern[index % pattern.length] as any;
};

// Height fix map
const heightBySize = {
  default: "h-[180px] sm:h-[220px] lg:h-[240px]",
  tall: "h-[400px] sm:h-[440px] lg:h-[480px]",
  wide: "h-[180px] sm:h-[220px] lg:h-[240px]",
  big: "h-[400px] sm:h-[440px] lg:h-[480px]",
};

const BentoProjectGrid: React.FC<BentoProjectGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section className="w-full min-h-[80vh]">
      <div className="container-base">
        <div
          className="grid gap-4 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px]"
        >
          {projects.map((project, index) => {
            const size = getSizeByIndex(index);

            const cardClasses = clsx(
              "relative rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer group transition-transform hover:scale-[1.01]",
              {
                "row-span-2": size === "tall",
                "col-span-2": size === "wide",
                "row-span-2 col-span-2": size === "big",
              },
              heightBySize[size]
            );

            return (
              <motion.div
                key={project.title}
                layoutId={project.title}
                layout
                onClick={() => setSelectedProject(project)}
                transition={{
                  layout: { duration: 0.5, type: "spring", bounce: 0.2 },
                }}
                className={cardClasses}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity rounded-2xl" />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-xs uppercase font-semibold opacity-70">
                      {project.services[0]}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Project Preview */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/70 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              <motion.div
                layoutId={selectedProject.title}
                layout
                className="fixed z-[100] top-1/2 left-1/2 w-[90vw] md:w-[700px] -translate-x-1/2 -translate-y-1/2 bg-card rounded-xl overflow-hidden shadow-2xl "
                initial={{ opacity: 0.9, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={selectedProject.cover}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase text-gray-500">
                    {selectedProject.services.join(", ")}
                  </p>
                  <h2 className="text-2xl font-bold mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-foreground/60 mt-4">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BentoProjectGrid;
