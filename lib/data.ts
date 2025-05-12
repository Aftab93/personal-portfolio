import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import caffeineClub from "@/public/caffeineclub.png"
import zaykaZip from "@/public/zaykazip.png";
import ems from "@/public/ems.png";
import snake from "@/public/snake.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BSCS",
    location: "University of Lahore, Sargodha Campus",
    description:
      "I completed my Bachelor's degree in Computer Science with a CGPA of 3.56. During my studies, I developed a strong interest in front-end development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Front-End Developer (Projects & Internship)",
    location: "Remote / Sargodha",
    description:
      "Built multiple web apps using React.js and Tailwind CSS, including an attendance system and event platform. Gained hands-on experience with routing, component design, responsive UI, and state management.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Aspiring Front-End Developer",
    location: "Open to Remote/On-site",
    description:
      "Currently looking for front-end roles. Skilled in React.js, Tailwind CSS, JavaScript, and Redux Toolkit. Passionate about creating user-friendly, clean, and visually appealing UIs.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;


export const projectsData = [
  {
    title: "CaffeineClub",
    description: "Worked as a frontend developer on Caffeine Club, a coffee brand website. Built responsive UI with React and Tailwind CSS to enhance the user experience.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: caffeineClub,
    projectUrl: "https://caffeineclub.netlify.app",
  },
  {
    title: "ZaykaZip",
    description: "Frontend developer for ZaykaZip, a food delivery site. Built responsive UI with React, Tailwind CSS, AOS, and managed state with Redux Toolkit.",
    tags: ["React", "Tailwind", "Redux", "AOS"],
    imageUrl: zaykaZip,
    projectUrl: "https://zaykazip.netlify.app",
  },
  {
    title: "Shiftnow",
    description: "Developed ShiftNow, a task and shift management system using React, Tailwind CSS, and LocalStorage. Implemented responsive UI and task assignment features for employees.",
    tags: ["React", "Tailwind", "Localstorage"],
    imageUrl: ems,
    projectUrl: "https://shiftnow.netlify.app",
  },
  {
    title: "Snake Game",
    description: "Developed a modern Snake Game using Next.js and React. Implemented mobile-friendly controls, difficulty progression, and random obstacles in hard mode. Features keyboard input and score tracking with local storage.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    imageUrl: snake,
    projectUrl: "https://snake-game-eight-tawny.vercel.app/",
},
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
