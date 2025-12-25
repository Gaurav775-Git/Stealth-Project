import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Subjectsection = ({ name, link = "#" ,icon:Icon}) => {
  return (
    <NavLink to={link}>
    <motion.div
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        w-72 h-14
        flex items-center gap-3
        px-5
        my-2
        rounded-xl
        border-3 border-[#00ADB5]/40
        bg-white/5
        backdrop-blur-md
        text-[#00ADB5]
        font-medium
        hover:bg-white/10
        cursor-pointer
      "
    > 
      {Icon && <Icon size={18} className="text-[#00ADB5] text-[#00ADB5]" />}
      <span>{name}</span>
    </motion.div>
    </NavLink>
  );
};

export default Subjectsection;
