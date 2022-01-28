import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../data/animations";
import { IProject } from "../data/Interfaces";

const ProjectCard: FC<{
  Project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  Project: {
    id,
    name,
    key_tech,
    img_path,
    github_url,
    description,
    depolyed_url,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div className="p-2 bg-gray-300 text-balck rounded-xl dark:bg-gray-600 dark:text-white">
      <Image
        className="cursor-pointer"
        src={img_path}
        alt={name}
        width="300"
        height="300"
        layout="responsive"
        onClick={(e) => {
          setShowDetail(id);
        }}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="absolute md:p-10 top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 md:w-full md:grid-cols-2 gap-x-12 dark:bg-gray-600 dark:text-white"
        >
          <motion.div variants={fadeInUp}>
            <Image
              src={img_path}
              alt={name}
              width="300"
              height="250"
              layout="responsive"
              className="rounded-lg border-4 border-gray-200"
            />
            <div className="flex justify-center mt-3 space-x-3">
              <a
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-full hover:text-purple-600 active:text-purple-600 dark:bg-gray-700"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href={depolyed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-full hover:text-purple-600 dark:bg-gray-700"
              >
                <AiFillProject /> <span>Project Link</span>
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8">
            <h2 className="my-3 text-xl font-medium md:text-2xl ">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap p-3 mt-5 space-x-4 text-sm tracking-wider">
              {key_tech.map((key) => (
                <span
                  className="p-2 text-black bg-gray-200 rounded-full md:my-2 dark:bg-gray-700 dark:text-white"
                  id={key}
                >
                  {key}
                </span>
              ))}
            </div>
          </motion.div>
          <button className="absolute p-1 bg-gray-300 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-700">
            <MdClose size={30} onClick={() => setShowDetail(null)} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
