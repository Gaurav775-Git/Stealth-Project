import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Downloadbtn = ({ name, link }) => {
  return (
    <motion.a
      href={link}
      download
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
    </motion.a>
  );
};

export default Downloadbtn;
