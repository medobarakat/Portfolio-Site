import React, { FunctionComponent } from "react";
import { IResumeData } from "../data/Interfaces";
import { motion } from "framer-motion";

const BarCard: FunctionComponent<{ data: IResumeData }> = ({
  data: { name, level, icon },
}) => {
  const bar_width = `${level}`;

  // for motion div
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="text-white bg-gray-300 rounded-full dark:bg-gray-600 dark:text-white">
      <motion.div
        className="flex items-center px-4 py-1 mt-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-400"
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="mr-3">{icon}</div>
        <p>{name}</p>
      </motion.div>
    </div>
  );
};

export default BarCard;
