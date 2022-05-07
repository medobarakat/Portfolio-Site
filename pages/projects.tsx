import { motion } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectsNavbar from "../Components/ProjectsNavbar";
import { fadeInUp, routeAnitmate, stagger } from "../data/animations";
import { Project as ProjectData } from "../data/Data";
import { category } from "../data/Interfaces";
function Projects() {
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const [projects, setProjects] = useState(ProjectData);
  const [active, setActive] = useState("all");
  const handlerFilterCategory = (category: category | "all") => {
    if (category === "all") {
      setProjects(ProjectData);
      setActive(category);
      return;
    }
    const newarray = ProjectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newarray);
    setActive(category);
  };
  return (
    <motion.div
      variants={routeAnitmate}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative px-6 pt-1 overflow-y-scroll"
      style={{
        height: "80vh",
      }}
    >
      <Head>
      <title>Ahmed Barakat | Front End / Mobile App Devolper | Portfolio </title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="grid grid-cols-12 gap-5 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((Project) => (
          <motion.div
            variants={fadeInUp}
            key={Project.name}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              Project={Project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
