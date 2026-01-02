import React from "react";
import Navbar from "../../reuasblecomponents/navbar/Navbar";
import Subjectsection from "../../reuasblecomponents/sections/Subjectsection";
import { motion } from "framer-motion";
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
  const subjects = [
    { name: "Matrices and Calculus", icon: Sigma, link: "/notes/sem1/math" },
    { name: "Semiconductor Physics and Devices", icon: Cpu, link: "/notes/sem1/physics" },
    { name: "Programming in C", icon: Database, link: "/notes/sem1/cprogram" },
    { name: "Problem Solving Approach", icon: Network, link: "/notes/sem1/psa" },
    { name: "Fundamentals of Core Engineering", icon: Calculator, link: "/notes/sem1/fce" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-15 pb-12">
        {/* Page Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#1f2937] mb-10">
          Semester 1 <span className="text-[#00ADB5]">Subjects</span>
        </h1>

        {/* Subjects Grid */}
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
          {subjects.map((subject) => (
            <motion.div
              key={subject.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Subjectsection
                name={subject.name}
                icon={subject.icon}
                link={subject.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sem1page;
