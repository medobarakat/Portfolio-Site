import React, { FC, FunctionComponent } from "react";
import { category } from "../data/Interfaces";

export const NavItem: FC<{
  value: category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = " cursor-pointer hover:text-purple-600 capitalize";
  if (active === value) {
    className += " text-purple-600";
  }
  return (
    <li
      onClick={() => {
        handlerFilterCategory(value);
      }}
      className={className}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props, active) => {
  return (
    <div className="flex space-x-6 px-3 py-3 list-none">
      <NavItem value="all" {...props} />
      <NavItem value="JQuery" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Vue" {...props} />
      <NavItem value="React Native" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
