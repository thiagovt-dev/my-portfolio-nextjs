"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/helpers/projectsData";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
    console.log(newTag);
  };
  const filterToProjects = projectsData.filter((project) => project.tags.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-6 md:mb-12">Meus projetos</h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag
          onClick={() => handleTagChange("Front-end")}
          name="Front-end"
          isSelected={tag === "Front-end"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Back-end")}
          name="Back-end"
          isSelected={tag === "Back-end"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterToProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
