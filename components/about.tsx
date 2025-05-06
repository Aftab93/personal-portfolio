"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a dedicated <span className="font-medium">Frontend Developer</span>{" "}
        with a passion for building responsive, interactive, and modern web
        interfaces. I specialize in{" "}
        <span className="font-medium">React.js, Next.js, and Tailwind CSS</span>
        , and I enjoy crafting smooth user experiences with clean and efficient
        code.
      </p>

      <p className="mb-3">
        I recently completed my Bachelor's in Computer Science from the{" "}
        <span className="font-medium">
          University of Lahore, Sargodha Campus
        </span>
        . During my studies, I built several frontend-focused projects,
        including an <span className="font-medium">event management app</span>{" "}
        and an <span className="font-medium">attendance system</span> that
        features dashboards, QR code integration, and dynamic UI elements using
        React and Tailwind.
      </p>

      <p>
        I have a strong eye for detail and enjoy experimenting with flashy UI
        designs. I'm always learning new technologies and currently exploring
        animation with <span className="font-medium">Framer Motion</span> and
        performance optimization in Next.js. I'm actively seeking a{" "}
        <span className="font-medium">Frontend Developer role</span> where I can
        contribute to impactful projects and grow as part of a collaborative
        team.
      </p>
    </motion.section>
  );
}
