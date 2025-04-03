import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Minus, Plus } from "lucide-react";

import { faqItems } from "@/data/sections/faq";
import { easeInOut } from "motion";

const FaqSection = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="min-h-[80vh] w-full">
      <div className="container-base grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Frequently <br />
            Asked Questions
          </h2>
        </div>

        <div className="space-y-10">
          {faqItems.map((item, i) => {
            const isOpen = openQuestions.includes(i);
            return (
              <div key={i} className="pb-8 border-b-2">
                <button
                  className="flex text-base sm:text-lg items-center w-full text-left"
                  key={i}
                  onClick={() => toggleQuestion(i)}
                >
                  <motion.div
                    className="mr-4"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </motion.div>
                  <span className="flex-1">{item.question}</span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="ml-8 sm:ml-10 mt-1 text-foreground/70 text-sm"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
