import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Semestersection = ({ semnumber, link }) => {
  return (
    <NavLink to={link} className="block">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          w-72 h-16
          flex items-center gap-4
          px-5 my-2
          rounded-2xl
          border border-[#00ADB5]/40
          bg-white/10
          backdrop-blur-md
          shadow-md
          hover:shadow-[#00ADB5]/30
          cursor-pointer
        "
      >
        {/* Icon */}
        <div
          className="
            h-10 w-10
            rounded-xl
            bg-[#00ADB5]/15
            flex items-center justify-center
            text-[#00ADB5]
          "
        >
          <BookOpen size={20} />
        </div>

        {/* Text */}
        <span className="text-lg font-semibold tracking-wide text-[#00ADB5]">
          Semester {semnumber}
        </span>
      </motion.div>
    </NavLink>
  );
};

export default Semestersection;
