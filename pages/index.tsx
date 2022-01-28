import { motion } from "framer-motion";
import React from "react";
import { fadeInUp, routeAnitmate, stagger } from "../data/animations";
import AboutCard from "../Components/AboutCard";
import { AboutData } from "../data/Data";
import Head from "next/head";
function index() {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1"
      variants={routeAnitmate}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Front End Devolper | Portfolio | Ahmed Barakat</title>
      </Head>
      <h5 className="font-md py-2 leading-6">
        My Name Is Ahmed I Am From Egypt I Am Skilled In Front End Developing ,
        I Have +2 Years Experience and Iam Always Developing My self
      </h5>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="bg-gray-300 dark:bg-black p-4 mt-3 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h3 className="font-bold mb-3 text-xl">What I Can Offer</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {AboutData.map((data) => (
            <motion.div variants={fadeInUp} key={data.id}>
              <AboutCard data={data} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default index;
