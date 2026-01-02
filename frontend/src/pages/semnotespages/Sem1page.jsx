import React from "react";
import Navbar from "../../reuasblecomponents/navbar/Navbar";
import { motion } from "framer-motion";
import Card from "../../reuasblecomponents/card/Card"; // import the Card component
import {
  Calculator,
  Cpu,
  Database,
  Sigma,
  Network,
} from "lucide-react";

/* Animation variants */
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const Sem1page = () => {
  // Map of subjects → each subject can have multiple units (PDFs)
  const subjects = [
    {
      name: "Matrices and Calculus",
      icon: Sigma,
      units: [
        {
          chaptername: "Unit 1",
          unitnumber: "1",
          subjectcode: "BS-103",
          publicId: "notes/math/unit1", // exact Cloudinary publicId
        },
        {
          chaptername: "Unit 2",
          unitnumber: "2",
          subjectcode: "BS-103",
          publicId: "notes/math/unit2",
        },
        {
          chaptername: "Unit 3",
          unitnumber: "3",
          subjectcode: "BS-103",
          publicId: "notes/math/unit3",
        },
      ],
    },
    {
      name: "Semiconductor Physics and Devices",
      icon: Cpu,
      units: [
        {
          chaptername: "Unit 1",
          unitnumber: "1",
          subjectcode: "BS-101",
          publicId: "notes/physics/unit1",
        },
      ],
    },
    {
      name: "Programming in C",
      icon: Database,
      units: [
        {
          chaptername: "Unit 1",
          unitnumber: "1",
          subjectcode: "BS-102",
          publicId: "notes/cprogram/unit1",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-15 pb-12">
        {/* Page Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#1f2937] mb-10">
          Semester 1 <span className="text-[#00ADB5]">Subjects & Units</span>
        </h1>

        {/* Subjects Grid */}
        {subjects.map((subject) => (
          <div key={subject.name} className="mb-12">
            {/* Subject Header */}
            <div className="flex items-center gap-3 mb-6">
              <subject.icon size={28} className="text-[#00ADB5]" />
              <h2 className="text-2xl font-semibold">{subject.name}</h2>
            </div>

            {/* Units Cards */}
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {subject.units.map((unit, index) => (
                <motion.div key={index} variants={containerVariant}>
                  <Card
                    chaptername={unit.chaptername}
                    unitnumber={unit.unitnumber}
                    subjectcode={unit.subjectcode}
                    publicId={unit.publicId} // important!
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sem1page;
