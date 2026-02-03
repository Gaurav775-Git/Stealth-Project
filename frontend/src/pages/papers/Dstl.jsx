import React from "react";
import Card from "../../../reuasblecomponents/card/Card";
import { motion } from "framer-motion";
import EmptyState from "../../../reuasblecomponents/EmptyState/EmptyState";
import { BookOpen } from "lucide-react";

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

const Dstl = () => {
  const subjectinfo = [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-100 p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto pt-8 pb-12">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-neutral-800 mb-12">
          DSTL<span className="text-primary-DEFAULT">Units</span>
        </h1>

        {subjectinfo.length > 0 ? (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="show"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8
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
        ) : (
          <EmptyState
            icon={BookOpen}
            title="No DSTL Units Available"
            message="Looks like there are no units to display for DSTL yet. Check back soon!"
            className="mt-10"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Dstl;
