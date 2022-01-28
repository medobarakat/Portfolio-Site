import React from "react";
import BarCard from "../Components/BarCard";
import { SkillData, ToolsData } from "../data/Data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnitmate } from "../data/animations";
function resume() {
  return (
    <motion.div
      className="px-6 pt-1"
      variants={routeAnitmate}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        {/* the education */}
        <div>
          <h5 className="font-bold text-2xl my-1">Education</h5>
          <div>
            <h5 className="font-semibold text-xl py-1">
              Faculty Of Engineering
            </h5>
            <p className="mt-2">Alexandria University (2014 - 2019 )</p>
          </div>
        </div>
        {/* the experience */}
        <div>
          <h5 className="font-bold text-2xl my-1">Experience</h5>
          <div>
            <h5 className="font-semibold text-xl py-1">FreeLance</h5>
            <p className="mt-2">
              Working As A FreeLancer For Several Freelance Site
            </p>
          </div>
        </div>
      </motion.div>
      {/* For the Bars */}
      <div className="grid md:grid-cols-2 gap-9 mt-8">
        {/* Languages + FrameWorks */}
        <div>
          <h5 className="font-bold text-xl my-1">Languages and FrameWorks</h5>
          <div>
            {SkillData.map((data) => (
              <div key={data.id}>
                <BarCard data={data} />
              </div>
            ))}
          </div>
        </div>
        {/* Tools + Software */}
        <div>
          <h5 className="font-bold text-xl my-1">Tools and Software</h5>
          <div>
            {ToolsData.map((data) => (
              <div key={data.name}>
                <BarCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default resume;
