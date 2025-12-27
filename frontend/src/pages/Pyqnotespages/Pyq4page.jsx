import React from "react";
import Subjectsection from "../../reuasblecomponents/sections/Subjectsection";
import Navbar from "../../reuasblecomponents/navbar/Navbar";
import { motion } from "framer-motion";
import {
  Calculator,
  Cpu,
  Database,
  Sigma,
  Network,
} from "lucide-react";


/* Animation */
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const Pyq4page = () => {
  const subjects = [
    { name: "Matrices and Calculus", icon: Sigma, link: "/notes/sem1/math" },
    { name: "Semiconductor Physics and devices", icon: Cpu, link: "/notes/sem1/physics" },
    { name: "Programming in C", icon: Database, link: "/notes/sem1/cprogram" },
    { name: "Problem Solving Approach", icon: Network, link: "/notes/sem1/psa" },
    { name: "Fundamentals of Core Engineering", icon: Calculator, link: "/notes/sem1/fce" },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-15 pb-12">
    
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#1f2937] mb-10">
          Semester 4 <span className="text-[#00ADB5]">Previous year paper</span>
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
            gap-5
            place-items-center
          "
        >
          {subjects.map((subject) => (
            <Subjectsection
              key={subject.name}
              name={subject.name}
              icon={subject.icon}
              link={subject.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pyq4page;
