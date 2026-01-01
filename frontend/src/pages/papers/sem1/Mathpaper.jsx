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

const Mathpaper = () => {
  const subjectinfo = [
    { image: "", chaptername: "Unknown", unitnumber: "1", subjectcode: "CS-102" , link:"/sem1/cprogram/unit1"},
    { image: "", chaptername: "Unknown", unitnumber: "2", subjectcode: "CS-102", link:"/sem1/cprogram/unit2"},
    { image: "", chaptername: "Unknown", unitnumber: "3", subjectcode: "CS-102" , link:"/sem1/cprogram/unit3"},
    { image: "", chaptername: "Unknown", unitnumber: "4", subjectcode: "CS-102" , link:"/sem1/cprogram/unit4"},
    { image: "", chaptername: "Unknown", unitnumber: "5", subjectcode: "CS-102" , link:"/sem1/cprogram/unit5"},
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-12">
    
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#1f2937] mb-10">
          matrics & calculus <span className="text-[#00ADB5]">Units</span>
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
                link={item.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Mathpaper;
