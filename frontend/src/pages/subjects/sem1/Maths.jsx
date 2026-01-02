import React from "react";
import Navbar from "../../../reuasblecomponents/navbar/Navbar";
import Card from "../../../reuasblecomponents/card/Card";
import { motion } from "framer-motion";

/* animation variants */
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Maths = () => {
  const subjectinfo = [
    {
      image: "",
      chaptername: "Matrices",
      unitnumber: "1",
      subjectcode: "BS-103",
      publicId: "notes/math/unit1",
    },
    {
      image: "",
      chaptername: "Determinants",
      unitnumber: "2",
      subjectcode: "BS-103",
      publicId: "notes/math/unit2",
    },
    {
      image: "",
      chaptername: "Differential Calculus",
      unitnumber: "3",
      subjectcode: "BS-103",
      publicId: "notes/math/unit3",
    },
    {
      image: "",
      chaptername: "Integral Calculus",
      unitnumber: "4",
      subjectcode: "BS-103",
      publicId: "notes/math/unit4",
    },
    {
      image: "",
      chaptername: "Vector Calculus",
      unitnumber: "5",
      subjectcode: "BS-103",
      publicId: "notes/math/unit5",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#1f2937] mb-10">
          Matrices & Calculus <span className="text-[#00ADB5]">Units</span>
        </h1>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            place-items-center
          "
        >
          {subjectinfo.map((item, index) => (
            <motion.div key={index} variants={itemVariant}>
              <Card
                image={item.image}
                chaptername={item.chaptername}
                unitnumber={item.unitnumber}
                subjectcode={item.subjectcode}
                publicId={item.publicId}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Maths;
