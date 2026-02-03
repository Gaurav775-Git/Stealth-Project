import React from "react";
import { motion } from "framer-motion";
import Semestersection from "../reuasblecomponents/sections/Semestersection";
import Navbar from "../reuasblecomponents/navbar/Navbar";

/* Animations */
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Pyqpages = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
      <Navbar />

      
      <div className="max-w-6xl mx-auto px-4 pt-15 pb-10">
        
        <motion.h1
          variants={headingVariant}
          initial="hidden"
          animate="show"
          className="
            text-center
            text-3xl md:text-4xl
            font-bold
            tracking-wide
            text-[#1f2937]
            mb-12
          "
        >
          Semester <span className="text-[#00ADB5]">previous year paper</span>
        </motion.h1>

        {/* Semester Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            place-items-center
          "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <Semestersection
              key={sem}
              semnumber={sem}
              link={`/pyq/paper${sem}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pyqpages;
