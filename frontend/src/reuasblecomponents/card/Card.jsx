import React from "react";
import { motion } from "framer-motion";
import Downloadbtn from "../Buttons/Downloadbtn";

const Card = ({
  image,
  chaptername,
  unitnumber,
  subjectcode,
  publicId,   // 👈 ONLY thing needed for download
}) => {

  const handleDownload = async () => {
    try {
      const res = await fetch(
        `https://notes-resolver.onrender.com/api/pdf/download/${publicId}`
      );

      const data = await res.json();

      if (!data.success) {
        alert("Download failed");
        return;
      }

      window.open(data.downloadUrl, "_blank");

    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        w-full max-w-90
        bg-white
        border border-[#00ADB5]/40
        rounded-xl
        shadow-md
        hover:shadow-[#00ADB5]/30
        flex gap-4
        p-4 my-3
      "
    >
      {/* Left icon/image */}
      <div
        className="
          h-20 w-20
          rounded-lg
          bg-[#00ADB5]/10
          flex items-center justify-center
          shrink-0
        "
      >
        {image ? (
          <img
            src={image}
            alt={chaptername}
            className="h-12 w-12 object-contain"
          />
        ) : (
          <span className="text-[#00ADB5] text-3xl font-bold">
            {unitnumber}
          </span>
        )}
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {chaptername}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Unit: <span className="font-medium">{unitnumber}</span>
          </p>

          <p className="text-sm text-gray-500">
            Subject Code:{" "}
            <span className="font-medium">{subjectcode}</span>
          </p>
        </div>

        {/* ✅ CORRECT Button */}
        <div className="mt-3">
          <Downloadbtn
            name="Download"
            onClick={handleDownload}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
