"use client";

import { motion } from "framer-motion";

export default function WavyBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* SMOKY Fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />

      {/* Wavy Streak 1 */}
      <motion.div
        className="absolute w-[160vw] h-[80vh] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-transparent opacity-25 blur-[180px]"
        style={{ top: "-10%", left: "-20%" }}
        animate={{
          x: ["-10%", "25%", "-15%", "0%"],
          y: ["0%", "15%", "-10%", "5%"],
          rotate: [0, 30, -20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wavy Streak 2 */}
      <motion.div
        className="absolute w-[140vw] h-[100vh] bg-gradient-to-bl from-transparent via-[#3b82f6] to-[#1e40af] opacity-20 blur-[220px]"
        style={{ top: "5%", right: "-15%" }}
        animate={{
          x: ["0%", "-30%", "10%", "0%"],
          y: ["0%", "-10%", "20%", "0%"],
          rotate: [0, -15, 20, -10, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Electric Blue Pulse */}
      <motion.div
        className="absolute w-[150vw] h-[130vh] bg-gradient-to-tr from-[#0f172a] via-[#00d3ff] to-transparent opacity-10 blur-[240px]"
        style={{ top: "-25%", left: "-15%" }}
        animate={{
          x: ["0%", "30%", "-30%", "0%"],
          y: ["0%", "20%", "-15%", "5%"],
          rotate: [0, 45, -30, 10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Optional: Texture overlay */}
      {/*
      <div className="absolute inset-0 z-20 opacity-5 pointer-events-none mix-blend-soft-light" style={{ backgroundImage: 'url(/noise.png)', backgroundSize: '400px' }} />
      */}
    </div>
  );
}
