import React, { FunctionComponent } from "react";
import { IAboutData } from "../data/Interfaces";

const AboutCard: FunctionComponent<{ data: IAboutData }> = ({
  data: { title, about, icon },
}) => {
  return (
    <div className="flex p-2 space-x-4 bg-gray-200 dark:bg-gray-600 dark:text-white rounded-2xl">
      <div className="mt-3 text-3xl text-purple-600">{icon}</div>
      <div>
        <h5 className="mb-1 font-semibold">{title}</h5>
        <div>{about}</div>
      </div>
    </div>
  );
};

export default AboutCard;
