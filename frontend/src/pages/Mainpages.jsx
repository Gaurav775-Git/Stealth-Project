import React from "react";
import { motion } from "framer-motion";
import Navbar from "../reuasblecomponents/navbar/Navbar";
import Section from "../reuasblecomponents/sections/Section";
import Card from "../reuasblecomponents/card/Card";
import Downloadbtn from "../reuasblecomponents/Buttons/Downloadbtn";
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Mainpages = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center">
      <Navbar />

    
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center w-full px-4"
      >
        
        <motion.div
          variants={itemVariant}
          className="
            mt-12
            max-w-2xl
            text-center
            px-6 py-6
            rounded-2xl
            bg-white/70
            backdrop-blur
            shadow-md
          "
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            Don’t panic!
            <span className="text-[#00ADB5] font-bold">
              {" "}All your notes are safe.
            </span>
          </p>

          <p className="mt-3 text-base md:text-lg text-gray-600">
            Previous year papers, CT papers, and syllabus —
            everything you need in{" "}
            <span className="font-medium text-gray-800">one place</span>.
          </p>
        </motion.div>

        
        <motion.div
          variants={itemVariant}
          className="
            mt-14
            w-full
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            gap-10
          "
        >
          <motion.div whileHover={{ scale: 1.04 }}>
            
            <Section name="Notes" link="/notes"/>
            
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }}>
            <Section name="PYQ" link="/pyq" />
          </motion.div>
        </motion.div>
      </motion.div>
        <Card/>
    </div>
  );
};

export default Mainpages;
