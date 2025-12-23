import React from "react";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { NavLink } from "react-router-dom";

const Section = ({ name,link }) => {
  return (
   <NavLink to={link}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        w-52 h-40
        flex flex-col items-center justify-center gap-2
        rounded-2xl
        border border-[#00ADB5]/40
        bg-white/5
        backdrop-blur-md
        text-[#EEEEEE]
        shadow-sm
        hover:border-[#00ADB5]
        hover:bg-white/10
      "
    >
      <Folder size={28} className="text-[#00ADB5]" />
      <span className="text-lg font-semibold tracking-wide text-[#00ADB5]">
        {name}
      </span>
    </motion.div>
    </NavLink>
  );
};

export default Section;
