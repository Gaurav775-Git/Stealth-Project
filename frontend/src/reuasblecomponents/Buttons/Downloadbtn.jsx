// Downloadbtn.js
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const Downloadbtn = ({ name, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        inline-flex items-center gap-2
        px-6 py-3
        rounded-xl
        bg-[#00ADB5]
        text-[#EEEEEE]
        font-medium
        shadow
        hover:bg-[#009aa2]
      "
    >
      <Download size={18} />
      <span>{name}</span>
    </motion.button>
  );
};
