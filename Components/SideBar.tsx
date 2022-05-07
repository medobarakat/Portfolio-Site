import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

function SideBar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <Image
        className="mx-auto rounded-2xl "
        height={128}
        width={128}
        // src="https://i.ibb.co/W6GzYfV/avatar.jpg"
        src="https://avatars.githubusercontent.com/u/83758385?s=400&u=411cf4ef8152675155a1cef9c938f037ea25eac6&v=4"
        alt="profile-avatar"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider lg:text-2xl font-playball hover:text-purple-800 ">
        <span className="text-purple-600 hover:text-purple-800">Ahmed</span>{" "}
        Barakat
      </h3>
      <p className="p-2 mx-3 my-2 bg-gray-200 rounded-full dark:bg-gray-600 dark:text-white text-black">
        Front End Developer
      </p>
      <a
        target="_blank"
        href="https://docs.google.com/document/d/1krMykigI_SnC5yOOCTSrRA6WZsZX9HXkyCYgRAr9Dao/edit?usp=sharing"
        className="flex items-center justify-center p-2 mx-3 bg-gray-200 rounded-full dark:bg-gray-600 dark:text-white text-black hover:text-purple-600"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* social icons */}
      <div className="flex items-center justify-around w-9/12 p-1 mx-auto my-2 text-purple-600 md:w-full">
        <a
          aria-label="Facebook"
          target="_blank"
          href="https://www.facebook.com/ahmed.barakat.5268"
          className="hover:text-purple-800"
        >
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/medobarakat"
          className="hover:text-purple-800"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/ahmed-barakat-dev/"
          className="hover:text-purple-800"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-gray-600 dark:text-white text-black rounded-2xl">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Damanhour , Egypt</span>
        </div>
        <p className="my-2">Ahmedbarakat2401@gmail.com</p>
        <p className="my-2">+20 1013782744</p>
      </div>
      {/* The buttons */}
      <button
        onClick={() => window.open("mailto:Ahmedbarakat2401@gmail.com")}
        className="w-8/12 py-1 my-2 text-white rounded-full hover:text-purple-800 dark:text-black dark:hover:text-purple-800 bg-gradient-to-r from-purple-600 to-blue-400"
      >
        Email Me
      </button>
      <button
        onClick={() => changeTheme()}
        className="w-8/12 py-1 my-2 text-white rounded-full hover:text-purple-800 dark:text-black dark:hover:text-purple-800 bg-gradient-to-r from-purple-600 to-blue-400"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default SideBar;
