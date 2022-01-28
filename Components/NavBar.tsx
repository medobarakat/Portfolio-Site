import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const [activeItem, setActiveItem] = useState<string>("");
  // adding the active if it hard coded
  const { route } = useRouter();
  useEffect(() => {
    if (route === "/") setActiveItem("About");
    if (route === "/projects") setActiveItem("Projects");
    if (route === "/resume") setActiveItem("Resume");
  }, [route]);
  // making a component for active items
  const ActiveLink: FC<{
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ setActiveItem, name, route }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a
          className="p-3 hover:text-blue-800"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </a>
      </Link>
    ) : null;
  };

  return (
    <div className="flex justify-between font-bold mb-3 mx-2">
      <span className="text-purple-500 ml-2 p-2 text-lg border-purple-500 border-b-4 md:text-md">
        {activeItem}
      </span>
      <div className="text-blue-500 p-2 text-lg md:text-md ">
        <ActiveLink setActiveItem={setActiveItem} name="About" route="/" />
        <ActiveLink
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <ActiveLink
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default NavBar;
