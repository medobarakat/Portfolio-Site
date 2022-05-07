import { RiComputerLine } from "react-icons/ri";
import { GiBreakingChain } from "react-icons/gi";
import { FaServer, FaDelicious , FaMobileAlt } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IAboutData, IProject, IResumeData } from "./Interfaces";

///////////////// for about section

// about data

export const AboutData: IAboutData[] = [
  {
    id: 0,
    title: "Front End Developing",
    about:
      "Making Front End of The Web and Use The Lastest Features OF FrameWorks and Predecessor ",
    icon: <RiComputerLine />,
  },
  {
    id: 1,
    title: "Mobile App Developer",
    about: "Designing , Developing Mobile Apps For Android , Ios ",
    icon: <FaMobileAlt />,
  },
  {
    id: 2,
    title: "UX/UI Design",
    about: "Designing The Web Looking Of Colors, Themes and Fonts",
    icon: <GiBreakingChain />,
  },
  {
    id: 3,
    title: "SEO Optimize",
    about:
      "Making Sure That The Design Works Perfectly,Loading Speed and Testing For Errors .",
    icon: <FaServer />,
  },
  {
    id: 4,
    title: "Developing My Skills",
    about:
      "Making Sure That The Design Works Perfectly,Loading Speed and Testing For Errors .",
    icon: <MdOutlineMobileFriendly />,
  },
  {
    id: 5,
    title: "Competitve Coder",
    about:
      "Daily Problem Solver In HackerRank and Some Other Problem Solving Sites",
    icon: <FaDelicious />,
  },
];

///////////////// for resume section data

// for Skill Data

export const SkillData: IResumeData[] = [
  {
    id: 0,
    name: "Html",
    level: "80%",
    icon: <BsCircleFill />,
  },
  {
    id: 1,
    name: "Css",
    level: "80%",
    icon: <BsCircleFill />,
  },
  {
    id: 2,
    name: "JavaScript",
    level: "70%",
    icon: <BsCircleFill />,
  },
  {
    id: 3,
    name: "React Js",
    level: "85%",
    icon: <BsCircleFill />,
  },
  {
    id: 4,
    name: "Vue Js",
    level: "80%",
    icon: <BsCircleFill />,
  },
  {
    id: 5,
    name: "TypeScript",
    level: "70%",
    icon: <BsCircleFill />,
  },
  {
    id: 5,
    name: "React Native",
    level: "75%",
    icon: <BsCircleFill />,
  },
  {
    id: 6,
    name: "JQuery",
    level: "80%",
    icon: <BsCircleFill />,
  },
];

// For Tools Data

export const ToolsData: IResumeData[] = [
  {
    id: 0,
    name: "PhotoShop",
    level: "75%",
    icon: <BsCircleFill />,
  },
  {
    id: 1,
    name: "Sql",
    level: "70%",
    icon: <BsCircleFill />,
  },
  {
    id: 1,
    name: "Chrome Dev Tools ",
    level: "85%",
    icon: <BsCircleFill />,
  },
];

//project data

export const Project: IProject[] = [
  {
    id: 0,
    name: "E-Commence Responsive Site",
    category: ["JQuery"],
    depolyed_url: "https://github.com/medobarakat/e-commence-site",
    description:
      "this is a Responsive Landing Page Webpage For organic Food Shop",
    github_url: "https://github.com/medobarakat/e-commence-site",
    img_path: "https://i.ibb.co/WG0RF2k/p1.png",
    key_tech: ["Responsive", "E-commence", "BootStrap"],
  },
  {
    id: 1,
    name: "Job Finder Site",
    category: ["JQuery"],
    depolyed_url: "https://github.com/medobarakat/Job-Finder-Responsive-site",
    description: "this is a Responsive Webpage For Job Finder Page",
    github_url: "https://github.com/medobarakat/Job-Finder-Responsive-site",
    img_path: "https://i.ibb.co/KsnSPLZ/p2.png",
    key_tech: ["Landing Page", "Responsive", "BootStrap"],
  },
  {
    id: 2,
    name: "Portfolio Site",
    category: ["JQuery"],
    depolyed_url: "https://github.com/medobarakat/Resposive-Portfolio",
    description: "this site is a Simple Portfolio Responsive Site",
    github_url: "https://github.com/medobarakat/Resposive-Portfolio",
    img_path: "https://i.ibb.co/FDr4gTT/p3.png",
    key_tech: ["Portfolio", "Responsive", "BootStrap"],
  },
  {
    id: 3,
    name: "Travel Agency Booking Site",
    category: ["React"],
    depolyed_url:
      "https://github.com/medobarakat/Travel-Responsive-React-Website",
    description: "This is Simple Travel Site",
    github_url:
      "https://github.com/medobarakat/Travel-Responsive-React-Website",
    img_path: "https://i.ibb.co/P5RCTYL/p4.png",
    key_tech: ["React", "React Router", "Landing Page", "Responsive"],
  },
  {
    id: 4,
    name: "Simple Weather App",
    category: ["JQuery"],
    depolyed_url: "https://github.com/medobarakat/Weather-Forcasting-Mini-App",
    description: "This is Simple Small App for Weather",
    github_url: "https://github.com/medobarakat/Weather-Forcasting-Mini-App",
    img_path: "https://i.ibb.co/StpT3MS/p5.png",
    key_tech: ["React", "Small App", "Responsive", "Api"],
  },
  {
    id: 5,
    name: "Birthday Reminder App",
    category: ["React"],
    depolyed_url: "https://github.com/medobarakat/Birthday-Reminder-App",
    description: "This is a small app for birthday reminder",
    github_url: "https://github.com/medobarakat/Birthday-Reminder-App",
    img_path: "https://i.ibb.co/vcwfYQX/p6.png",
    key_tech: ["React", "Small App", "Responsive"],
  },
  {
    id: 6,
    name: "Simple Tours Booking Page",
    category: ["React"],
    depolyed_url: "https://github.com/medobarakat/Tours-Page",
    description: "this is a Responsive Webpage For tours page finder",
    github_url: "https://github.com/medobarakat/Tours-Page",
    img_path: "https://i.ibb.co/pvdyH89/p7.png",
    key_tech: ["React", "Small App", "Responsive", "Api"],
  },
  {
    id: 7,
    name: "Film Shows Page",
    category: ["React"],
    depolyed_url: "https://films-shows-app-1.netlify.app/",
    description: "this is a Responsive Webpage For Films and Shows Filtershows",
    github_url: "https://github.com/medobarakat/Film-Shows-Page",
    img_path: "https://i.ibb.co/9yTkzVp/p8.png",
    key_tech: [
      "React",
      "React Router",
      "Redux",
      "ReduxToolKit",
      "Responsive",
      "Api",
    ],
  },
  {
    id: 8,
    name: "movie search",
    category: ["React"],
    depolyed_url: "https://react-movie-search1.netlify.app/",
    description: "this is a Webpage For Searching Films and Shows",
    github_url: "https://github.com/medobarakat/movie-search",
    img_path: "https://i.ibb.co/2vYC89G/p9.png",
    key_tech: ["React", "React Router", "Redux", "Responsive", "Api"],
  },
  {
    id: 9,
    name: "Admin panel",
    category: ["React"],
    depolyed_url: "https://ahmed-admin-app.netlify.app/",
    description:
      "this is a Admin responsive Webpage built with ReactJs , React Router",
    github_url: "https://github.com/medobarakat/Admin-panel",
    img_path: "https://i.ibb.co/25yWFPc/p10.png",
    key_tech: ["React", "React Router", "Responsive", "Api"],
  },
  {
    id: 10,
    name: "Memes React App",
    category: ["React"],
    depolyed_url: "https://m3lshny.netlify.app/",
    description:
      "this is a meme responsive Webpage built with ReactJs , React Router",
    github_url: "https://github.com/medobarakat/small-memes-app",
    img_path: "https://i.ibb.co/wrYxPDC/p11.png",
    key_tech: ["React", "React Router", "Responsive"],
  },
  {
    id: 11,
    name: "Zid Page Clone",
    category: ["Vue"],
    depolyed_url: "https://zid-clone-medobarakat.netlify.app/",
    description:
      "this is a responsive clone Webpage built with VueJs , Bootstrap",
    github_url: "https://github.com/medobarakat/zid-clone",
    img_path: "https://i.ibb.co/M6zN5LP/screenshot.png",
    key_tech: ["Vue", "Landing Page", "Bootstrap", "Responsive"],
  },
  {
    id: 12,
    name: "Simple Store",
    category: ["React"],
    depolyed_url: "https://ahmed-store-redux1.netlify.app/",
    description: "this is a Redux Webpage For Simple Store",
    github_url: "https://github.com/medobarakat/Simple-Store",
    img_path: "https://i.ibb.co/25rFBxs/p-12.png",
    key_tech: ["React", "Redux", "React-Bootstrap", "Responsive"],
  },
  {
    id: 13,
    name: "Notes Mini App",
    category: ["React"],
    depolyed_url: "https://mini-react-note-app.netlify.app/",
    description:
      "this is a React Webpage for adding notes and removing them with typescript",
    github_url: "https://github.com/medobarakat/Notes-App",
    img_path: "https://i.ibb.co/pdKh3HH/p-13.png",
    key_tech: ["React", "TypeScript", "Bootstrap", "Responsive", "Sass"],
  },
  {
    id: 14,
    name: "Tesla Car App",
    category: ["React Native"],
    //need the deploy link
    depolyed_url: "https://github.com/medobarakat/Tesla-Car-App/",
    description:
      "this is a Tesla Clone Page Mobile App built with React js , React Native",
    github_url: "https://github.com/medobarakat/Tesla-Car-App/",
    img_path: "https://i.ibb.co/ZLH1bKg/screenshot.png",
    key_tech: ["React", "React Native", "JavaScript", "Mobile App"],
  },
  {
    id: 15,
    name: "Todo-App",
    category: ["React Native"],
    //need the deploy link
    depolyed_url: "https://github.com/medobarakat/Todo-App/",
    description:
      "this is a Todo Mobile App built with React js , React Native",
    github_url: "https://github.com/medobarakat/Todo-App/",
    img_path: "https://i.ibb.co/5hNZY9m/Capture.png",
    key_tech: ["React", "React Native", "JavaScript", "Mobile App"],
  },
  {
    id: 16,
    name: "Review-App",
    category: ["React Native"],
    //need the deploy link
    depolyed_url: "https://github.com/medobarakat/Review-App",
    description:
      "this is a Simple Review Mobile App built with React js , React Native",
    github_url: "https://github.com/medobarakat/Review-App",
    img_path: "https://i.ibb.co/z8XW6wC/Capture11.png",
    key_tech: ["React", "React Native", "JavaScript", "Mobile App"],
  },
  {
    id: 16,
    name: "Movie-Streaming-App",
    category: ["React Native"],
    //need the deploy link
    depolyed_url: "https://github.com/medobarakat/Movie-Streaming-App",
    description:
      "this is a Mobile Movie App built with React js , React Native Looks Like Netflex",
    github_url: "https://github.com/medobarakat/Movie-Streaming-App",
    img_path: "https://i.ibb.co/nzMr8bz/screen1.png",
    key_tech: ["React", "React Native", "JavaScript", "Mobile App"],
  },
];
