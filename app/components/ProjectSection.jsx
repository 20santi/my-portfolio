"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "portfolio website for showcasing my skills and projects",
    detailDescription: "",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/20santi/my-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Twitter clone project",
    description: "Twitter clone project where user share their post and like, comment on other post.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/20santi/twitter-backend",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "OrganLink",
    description: "A website for hospital and doners which connect hospitals and doners free of cost",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/20santi/OrganDonHackathon",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              detailDescription={project.detailDescription}
              tecStack={project.tecStack}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;